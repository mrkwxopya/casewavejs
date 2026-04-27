import React, { useEffect, useMemo, useRef, useState } from "react";
import type {
  CaseWaveId,
  CaseWaveNode,
  CaseWavePort,
  CaseWavePosition,
  CaseWaveRect,
  CaseWaveSelection,
  CaseWaveGraphSchema
} from "@casewave/core";
import { useCaseWaveGraph } from "./CaseWaveProvider";
import { useCaseWaveEdges, useCaseWaveNodes } from "./hooks";
import { normalizeRect, rectsIntersect, screenToWorld } from "./utils";
import { useCaseWaveViewport } from "./useCaseWaveViewport";
import {
  CaseWaveEdgeInteractionPath,
  getEdgeRenderer,
  getNodeRenderer,
  type CaseWaveEdgeRendererMap,
  type CaseWaveNodeRendererMap
} from "./renderers";
import { createEdgePath } from "./routing";
import { CaseWaveMinimap } from "./CaseWaveMinimap";
import { CaseWaveCommandPalette } from "./CaseWaveCommandPalette";
import { CaseWaveDevtools } from "./CaseWaveDevtools";
import { CaseWaveInspector } from "./CaseWaveInspector";
import { CaseWaveValidationPanel } from "./CaseWaveValidationPanel";
import { validateCaseWaveSchema } from "./validationPanel";
import {
  caseWaveDarkTheme,
  mergeCaseWaveTheme,
  type CaseWaveTheme
} from "./theme";
import { createInspectorState } from "./inspector";
import type { CaseWaveCommand } from "./commandPalette";
import {
  getNodeLayer,
  sortEdgesByLayer
} from "./layers";
import type { CaseWavePlugin } from "./pluginTypes";
import { CaseWavePluginRuntime } from "./pluginRuntime";
import {
  createGridBackground,
  createGridBackgroundPosition,
  createGridBackgroundSize,
  snapPoint
} from "./grid";
import {
  getGroupBounds,
  getVisibleNodes,
  hasChildNodes
} from "./groups";
import {
  createClipboardPayload,
  duplicateClipboardPayload,
  type CaseWaveClipboardPayload
} from "./clipboard";
import {
  createAlignedNodePositions,
  createDistributedNodePositions,
  getSelectedNodes,
  type CaseWaveAlignMode,
  type CaseWaveDistributeMode
} from "./align";
import {
  createDagAutoLayoutPositions,
  createGridAutoLayoutPositions
} from "./autoLayout";

type CaseWaveSnapGuide = {
  id: string;
  type: "vertical" | "horizontal";
  position: number;
  from: number;
  to: number;
};

export interface CaseWaveConnectionDraft {
  sourceNodeId: string;
  sourcePortId?: string;
  targetNodeId: string;
  targetPortId?: string;
}

export type CaseWaveContextMenuTarget =
  | {
      type: "canvas";
      position: CaseWavePosition;
      worldPosition: CaseWavePosition;
    }
  | {
      type: "node";
      nodeId: CaseWaveId;
      position: CaseWavePosition;
      worldPosition: CaseWavePosition;
    }
  | {
      type: "edge";
      edgeId: CaseWaveId;
      position: CaseWavePosition;
      worldPosition: CaseWavePosition;
    };

export interface CaseWaveContextMenuAction {
  id: string;
  label: string;
  disabled?: boolean;
  danger?: boolean;
  onSelect: (context: {
    graph: ReturnType<typeof useCaseWaveGraph>;
    target: CaseWaveContextMenuTarget;
    selection: CaseWaveSelection;
    schema: CaseWaveGraphSchema;
  }) => void;
}

export interface CaseWaveCanvasProps {
  width?: number | string;
  height?: number | string;
  background?: string;
  theme?: Partial<CaseWaveTheme>;

  minimap?: boolean;
  minimapWidth?: number;
  minimapHeight?: number;

  grid?: boolean;
  snapToGrid?: boolean;
  gridSize?: number;
  gridColor?: string;

  groupPadding?: number;
  showGroupBounds?: boolean;

  keyboardShortcuts?: boolean;
  onSelectionChange?: (selection: CaseWaveSelection) => void;

  contextMenuActions?: CaseWaveContextMenuAction[];
  disableContextMenu?: boolean;

  nodeRenderers?: CaseWaveNodeRendererMap;
  edgeRenderers?: CaseWaveEdgeRendererMap;

  validateConnection?: (connection: CaseWaveConnectionDraft) => boolean;
  onEdgeCreate?: (connection: CaseWaveConnectionDraft) => void;
}

type DragMode =
  | null
  | {
      type: "pan";
      start: CaseWavePosition;
    }
  | {
      type: "node";
      nodeId: CaseWaveId;
      start: CaseWavePosition;
      nodeStart: CaseWavePosition;
    }
  | {
      type: "marquee";
      startScreen: CaseWavePosition;
      currentScreen: CaseWavePosition;
    }
  | {
      type: "connect";
      sourceNodeId: CaseWaveId;
      sourcePortId?: CaseWaveId;
      startWorld: CaseWavePosition;
      currentWorld: CaseWavePosition;
    };

function createEdgeId() {
  return `edge_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getNodeCenter(node: Pick<CaseWaveNode, "position" | "size">): CaseWavePosition {
  return {
    x: node.position.x + (node.size?.width ?? 160) / 2,
    y: node.position.y + (node.size?.height ?? 80) / 2
  };
}

function getPortWorldPosition(
  node: Pick<CaseWaveNode, "position" | "size">,
  port?: Pick<CaseWavePort, "position">
): CaseWavePosition {
  if (port?.position) {
    return {
      x: node.position.x + port.position.x,
      y: node.position.y + port.position.y
    };
  }

  return getNodeCenter(node);
}

export function CaseWaveCanvas(props: CaseWaveCanvasProps) {
  const graph = useCaseWaveGraph();
  const allNodes = useCaseWaveNodes();
  const edges = useCaseWaveEdges();
  const nodes = getVisibleNodes(allNodes);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const { camera, panBy, zoomAt } = useCaseWaveViewport();

  const gridSize = props.gridSize ?? 24;

  const theme = mergeCaseWaveTheme(caseWaveDarkTheme, props.theme);

  const [drag, setDrag] = useState<DragMode>(null);

  const [selection, setSelection] = useState<CaseWaveSelection>({
    nodeIds: [],
    edgeIds: []
  });

  const [contextMenu, setContextMenu] =
    useState<CaseWaveContextMenuTarget | null>(null);

  const [clipboard, setClipboard] =
    useState<CaseWaveClipboardPayload | null>(null);

  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const [devtoolsOpen, setDevtoolsOpen] = useState(false);

  const [inspectorOpen, setInspectorOpen] = useState(true);

  const [validationPanelOpen, setValidationPanelOpen] = useState(false);

  const [snapGuides, setSnapGuides] = useState<CaseWaveSnapGuide[]>([]);

  const pluginRuntimeRef = useRef<CaseWavePluginRuntime | null>(null);

  useEffect(() => {
    props.onSelectionChange?.(selection);
  }, [selection, props]);

  useEffect(() => {
    if (props.keyboardShortcuts === false) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName?.toLowerCase();

      if (
        tagName === "input" ||
        tagName === "textarea" ||
        target?.isContentEditable
      ) {
        return;
      }

      const isMod = event.ctrlKey || event.metaKey;
      const key = event.key.toLowerCase();

      if (event.key === "Delete" || event.key === "Backspace") {
        if (selection.nodeIds.length === 0 && selection.edgeIds.length === 0) {
          return;
        }

        event.preventDefault();

        for (const edgeId of selection.edgeIds) {
          graph.removeEdge(edgeId);
        }

        for (const nodeId of selection.nodeIds) {
          graph.removeNode(nodeId);
        }

        setSelection({
          nodeIds: [],
          edgeIds: []
        });

        return;
      }

      if (isMod && key === "z" && !event.shiftKey) {
        event.preventDefault();
        graph.undo();
        return;
      }

      if ((isMod && key === "y") || (isMod && event.shiftKey && key === "z")) {
        event.preventDefault();
        graph.redo();
        return;
      }

      if (isMod && key === "c") {
        event.preventDefault();
        copySelectionToClipboard();
        return;
      }

      if (isMod && key === "v") {
        event.preventDefault();
        pasteClipboard();
        return;
      }

      if (isMod && event.shiftKey && key === "d") {
        event.preventDefault();
        setDevtoolsOpen((value) => !value);
        return;
      }

      if (isMod && key === "d") {
        event.preventDefault();
        copySelectionToClipboard();

        const payload = createClipboardPayload(graph.toJSON(), selection);
        const duplicated = duplicateClipboardPayload(payload);

        for (const node of duplicated.nodes) {
          graph.addNode(node);
        }

        for (const edge of duplicated.edges) {
          graph.addEdge(edge);
        }

        setSelection({
          nodeIds: duplicated.nodes.map((node) => node.id),
          edgeIds: duplicated.edges.map((edge) => edge.id)
        });

        return;
      }

      if (isMod && event.altKey && key === "arrowleft") {
        event.preventDefault();
        alignSelection("left");
        return;
      }

      if (isMod && event.altKey && key === "arrowright") {
        event.preventDefault();
        alignSelection("right");
        return;
      }

      if (isMod && event.altKey && key === "arrowup") {
        event.preventDefault();
        alignSelection("top");
        return;
      }

      if (isMod && event.altKey && key === "arrowdown") {
        event.preventDefault();
        alignSelection("bottom");
        return;
      }

      if (isMod && event.altKey && key === "h") {
        event.preventDefault();
        distributeSelection("horizontal");
        return;
      }

      if (isMod && event.altKey && key === "v") {
        event.preventDefault();
        distributeSelection("vertical");
        return;
      }

      if (isMod && event.altKey && key === "l") {
        event.preventDefault();
        autoArrange("dag");
        return;
      }

      if (isMod && event.altKey && key === "g") {
        event.preventDefault();
        autoArrange("grid");
        return;
      }

      if (isMod && event.altKey && key === "]") {
        event.preventDefault();
        bringSelectionForward();
        return;
      }

      if (isMod && event.altKey && key === "[") {
        event.preventDefault();
        sendSelectionBackward();
        return;
      }

      if (isMod && key === "k") {
        event.preventDefault();
        setCommandPaletteOpen((value) => !value);
        return;
      }

      if (isMod && key === "a") {
        event.preventDefault();

        setSelection({
          nodeIds: nodes.map((node) => node.id),
          edgeIds: edges.map((edge) => edge.id)
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [props.keyboardShortcuts, graph, selection, nodes, edges, clipboard]);

  useEffect(() => {
    pluginRuntimeRef.current?.emitSchemaChange(graph.toJSON());
  }, [nodes, edges, graph]);

  const rootStyle = useMemo<React.CSSProperties>(() => {
    return {
      position: "relative",
      overflow: "hidden",
      width: props.width ?? "100%",
      height: props.height ?? "100%",
      background:
        props.grid !== false
          ? createGridBackground({
              gridSize,
              cameraX: camera.x,
              cameraY: camera.y,
              zoom: camera.zoom,
              color: props.gridColor ?? theme.gridColor,
              background: props.background ?? theme.canvasBackground
            })
          : props.background ?? theme.canvasBackground,
      backgroundSize:
        props.grid !== false
          ? createGridBackgroundSize({
              gridSize,
              zoom: camera.zoom
            })
          : undefined,
      backgroundPosition:
        props.grid !== false
          ? createGridBackgroundPosition({
              gridSize,
              cameraX: camera.x,
              cameraY: camera.y,
              zoom: camera.zoom
            })
          : undefined,
      userSelect: "none",
      touchAction: "none"
    };
  }, [
    props.width,
    props.height,
    props.background,
    props.grid,
    props.gridColor,
    gridSize,
    camera.x,
    camera.y,
    camera.zoom
  ]);

  function getLocalPoint(
  event: React.PointerEvent | React.WheelEvent | React.MouseEvent
): CaseWavePosition {
    const rect = rootRef.current?.getBoundingClientRect();

    return {
      x: event.clientX - (rect?.left ?? 0),
      y: event.clientY - (rect?.top ?? 0)
    };
  }

  function handleWheel(event: React.WheelEvent) {
    event.preventDefault();
    zoomAt(getLocalPoint(event), event.deltaY);
  }

  function openContextMenu(
    event: React.PointerEvent | React.MouseEvent,
    target:
      | { type: "canvas" }
      | { type: "node"; nodeId: CaseWaveId }
      | { type: "edge"; edgeId: CaseWaveId }
  ) {
    if (props.disableContextMenu) return;

    event.preventDefault();
    event.stopPropagation();

    const position = getLocalPoint(event);
    const worldPosition = screenToWorld(position, camera);

    setContextMenu({
      ...target,
      position,
      worldPosition
    } as CaseWaveContextMenuTarget);
  }

  function closeContextMenu() {
    setContextMenu(null);
  }

  function copySelectionToClipboard() {
    const payload = createClipboardPayload(graph.toJSON(), selection);

    if (payload.nodes.length === 0 && payload.edges.length === 0) {
      return;
    }

    setClipboard(payload);
  }

  function pasteClipboard() {
    if (!clipboard) return;

    const duplicated = duplicateClipboardPayload(clipboard);

    for (const node of duplicated.nodes) {
      graph.addNode(node);
    }

    for (const edge of duplicated.edges) {
      graph.addEdge(edge);
    }

    setSelection({
      nodeIds: duplicated.nodes.map((node) => node.id),
      edgeIds: duplicated.edges.map((edge) => edge.id)
    });
  }

  function alignSelection(mode: CaseWaveAlignMode) {
    const selectedNodes = getSelectedNodes(allNodes, selection.nodeIds);
    const positions = createAlignedNodePositions(selectedNodes, mode);

    for (const [nodeId, position] of Object.entries(positions)) {
      graph.updateNode(nodeId, {
        position
      });
    }
  }

  function distributeSelection(mode: CaseWaveDistributeMode) {
    const selectedNodes = getSelectedNodes(allNodes, selection.nodeIds);
    const positions = createDistributedNodePositions(selectedNodes, mode);

    for (const [nodeId, position] of Object.entries(positions)) {
      graph.updateNode(nodeId, {
        position
      });
    }
  }

  function moveSelectionToLayer(layer: number) {
    for (const nodeId of selection.nodeIds) {
      const node = graph.getNode(nodeId);
      if (!node) continue;

      graph.updateNode(nodeId, {
        metadata: {
          ...(node.metadata ?? {}),
          layer
        }
      });
    }

    for (const edgeId of selection.edgeIds) {
      const edge = graph.getEdge(edgeId);
      if (!edge) continue;

      graph.updateEdge(edgeId, {
        metadata: {
          ...(edge.metadata ?? {}),
          layer
        }
      });
    }
  }

  function bringSelectionForward() {
    for (const nodeId of selection.nodeIds) {
      const node = graph.getNode(nodeId);
      if (!node) continue;

      graph.updateNode(nodeId, {
        metadata: {
          ...(node.metadata ?? {}),
          layer: getNodeLayer(node) + 1
        }
      });
    }
  }

  function sendSelectionBackward() {
    for (const nodeId of selection.nodeIds) {
      const node = graph.getNode(nodeId);
      if (!node) continue;

      graph.updateNode(nodeId, {
        metadata: {
          ...(node.metadata ?? {}),
          layer: getNodeLayer(node) - 1
        }
      });
    }
  }

  function autoArrange(mode: "grid" | "dag" = "dag") {
    const targetNodes =
      selection.nodeIds.length > 0
        ? getSelectedNodes(allNodes, selection.nodeIds)
        : allNodes.filter((node) => !node.parentId);

    const positions =
      mode === "grid"
        ? createGridAutoLayoutPositions(targetNodes)
        : createDagAutoLayoutPositions(targetNodes, edges);

    for (const [nodeId, position] of Object.entries(positions)) {
      graph.updateNode(nodeId, {
        position
      });
    }
  }

  const commandPaletteCommands: CaseWaveCommand[] = [
    {
      id: "layout-dag",
      title: "Auto Arrange DAG",
      keywords: ["layout", "arrange", "dag"],
      run: () => autoArrange("dag")
    },
    {
      id: "layout-grid",
      title: "Auto Arrange Grid",
      keywords: ["layout", "arrange", "grid"],
      run: () => autoArrange("grid")
    },
    {
      id: "align-left",
      title: "Align Left",
      keywords: ["align", "left"],
      run: () => alignSelection("left")
    },
    {
      id: "align-top",
      title: "Align Top",
      keywords: ["align", "top"],
      run: () => alignSelection("top")
    },
    {
      id: "align-center-x",
      title: "Align Center X",
      keywords: ["align", "center", "x"],
      run: () => alignSelection("center-x")
    },
    {
      id: "align-center-y",
      title: "Align Center Y",
      keywords: ["align", "center", "y"],
      run: () => alignSelection("center-y")
    },
    {
      id: "distribute-horizontal",
      title: "Distribute Horizontal",
      keywords: ["distribute", "horizontal"],
      run: () => distributeSelection("horizontal")
    },
    {
      id: "distribute-vertical",
      title: "Distribute Vertical",
      keywords: ["distribute", "vertical"],
      run: () => distributeSelection("vertical")
    },
    {
      id: "undo",
      title: "Undo",
      keywords: ["history", "undo"],
      run: () => graph.undo()
    },
    {
      id: "redo",
      title: "Redo",
      keywords: ["history", "redo"],
      run: () => graph.redo()
    }
  ];

  function getDefaultContextMenuActions(): CaseWaveContextMenuAction[] {
    return [
      {
        id: "copy-selection",
        label: "Copy selection",
        disabled:
          selection.nodeIds.length === 0 && selection.edgeIds.length === 0,
        onSelect: () => {
          copySelectionToClipboard();
        }
      },
      {
        id: "paste",
        label: "Paste",
        disabled: !clipboard,
        onSelect: () => {
          pasteClipboard();
        }
      },
      {
        id: "duplicate-selection",
        label: "Duplicate selection",
        disabled:
          selection.nodeIds.length === 0 && selection.edgeIds.length === 0,
        onSelect: () => {
          const payload = createClipboardPayload(graph.toJSON(), selection);
          const duplicated = duplicateClipboardPayload(payload);

          for (const node of duplicated.nodes) {
            graph.addNode(node);
          }

          for (const edge of duplicated.edges) {
            graph.addEdge(edge);
          }

          setSelection({
            nodeIds: duplicated.nodes.map((node) => node.id),
            edgeIds: duplicated.edges.map((edge) => edge.id)
          });
        }
      },
      {
        id: "align-left",
        label: "Align left",
        disabled: selection.nodeIds.length < 2,
        onSelect: () => {
          alignSelection("left");
        }
      },
      {
        id: "align-top",
        label: "Align top",
        disabled: selection.nodeIds.length < 2,
        onSelect: () => {
          alignSelection("top");
        }
      },
      {
        id: "align-center-x",
        label: "Align center X",
        disabled: selection.nodeIds.length < 2,
        onSelect: () => {
          alignSelection("center-x");
        }
      },
      {
        id: "align-center-y",
        label: "Align center Y",
        disabled: selection.nodeIds.length < 2,
        onSelect: () => {
          alignSelection("center-y");
        }
      },
      {
        id: "distribute-horizontal",
        label: "Distribute horizontal",
        disabled: selection.nodeIds.length < 3,
        onSelect: () => {
          distributeSelection("horizontal");
        }
      },
      {
        id: "distribute-vertical",
        label: "Distribute vertical",
        disabled: selection.nodeIds.length < 3,
        onSelect: () => {
          distributeSelection("vertical");
        }
      },
      {
        id: "auto-arrange-dag",
        label: "Auto arrange DAG",
        onSelect: () => {
          autoArrange("dag");
        }
      },
      {
        id: "auto-arrange-grid",
        label: "Auto arrange grid",
        onSelect: () => {
          autoArrange("grid");
        }
      },
      {
        id: "delete-selection",
        label: "Delete selection",
        danger: true,
        disabled:
          selection.nodeIds.length === 0 && selection.edgeIds.length === 0,
        onSelect: ({ graph, selection }) => {
          for (const edgeId of selection.edgeIds) {
            graph.removeEdge(edgeId);
          }

          for (const nodeId of selection.nodeIds) {
            graph.removeNode(nodeId);
          }

          setSelection({
            nodeIds: [],
            edgeIds: []
          });
        }
      },
      {
        id: "undo",
        label: "Undo",
        disabled: !graph.canUndo(),
        onSelect: ({ graph }) => {
          graph.undo();
        }
      },
      {
        id: "redo",
        label: "Redo",
        disabled: !graph.canRedo(),
        onSelect: ({ graph }) => {
          graph.redo();
        }
      }
    ];
  }

  function handleCanvasPointerDown(event: React.PointerEvent) {
    closeContextMenu();
    if (event.button === 1 || event.button === 2 || event.altKey) {
      setDrag({
        type: "pan",
        start: {
          x: event.clientX,
          y: event.clientY
        }
      });

      return;
    }

    const point = getLocalPoint(event);

    setSelection({
      nodeIds: [],
      edgeIds: []
    });

    setDrag({
      type: "marquee",
      startScreen: point,
      currentScreen: point
    });
  }

  function handleNodePointerDown(event: React.PointerEvent, nodeId: CaseWaveId) {
    event.stopPropagation();

    const node = graph.getNode(nodeId);

    if (!node || node.locked) return;

    const additive = event.shiftKey || event.ctrlKey || event.metaKey;

    setSelection((current) => {
      const exists = current.nodeIds.includes(nodeId);

      if (additive) {
        return {
          ...current,
          nodeIds: exists
            ? current.nodeIds.filter((id) => id !== nodeId)
            : [...current.nodeIds, nodeId]
        };
      }

      return {
        nodeIds: [nodeId],
        edgeIds: []
      };
    });

    setDrag({
      type: "node",
      nodeId,
      start: {
        x: event.clientX,
        y: event.clientY
      },
      nodeStart: {
        x: node.position.x,
        y: node.position.y
      }
    });
  }

  function handleEdgePointerDown(event: React.PointerEvent, edgeId: CaseWaveId) {
    event.stopPropagation();

    const additive = event.shiftKey || event.ctrlKey || event.metaKey;

    setSelection((current) => {
      const exists = current.edgeIds.includes(edgeId);

      if (additive) {
        return {
          ...current,
          edgeIds: exists
            ? current.edgeIds.filter((id) => id !== edgeId)
            : [...current.edgeIds, edgeId]
        };
      }

      return {
        nodeIds: [],
        edgeIds: [edgeId]
      };
    });
  }

  function handlePortPointerDown(
    event: React.PointerEvent,
    nodeId: CaseWaveId,
    portId?: CaseWaveId
  ) {
    event.stopPropagation();

    const node = graph.getNode(nodeId);

    if (!node || node.locked) return;

    const port = node.ports?.find((item) => item.id === portId);
    const startWorld = getPortWorldPosition(node, port);

    setDrag({
      type: "connect",
      sourceNodeId: nodeId,
      sourcePortId: portId,
      startWorld,
      currentWorld: startWorld
    });
  }

  function handlePortPointerUp(
    event: React.PointerEvent,
    targetNodeId: CaseWaveId,
    targetPortId?: CaseWaveId
  ) {
    event.stopPropagation();

    if (!drag || drag.type !== "connect") return;

    const connection: CaseWaveConnectionDraft = {
      sourceNodeId: drag.sourceNodeId,
      sourcePortId: drag.sourcePortId,
      targetNodeId,
      targetPortId
    };

    if (connection.sourceNodeId === connection.targetNodeId) {
      setSnapGuides([]);
    setDrag(null);
      return;
    }

    const valid = props.validateConnection?.(connection) ?? true;

    if (!valid) {
      setSnapGuides([]);
    setDrag(null);
      return;
    }

    graph.addEdge({
      id: createEdgeId(),
      type: "default",
      source: {
        kind: "node",
        nodeId: connection.sourceNodeId,
        portId: connection.sourcePortId
      },
      target: {
        kind: "node",
        nodeId: connection.targetNodeId,
        portId: connection.targetPortId
      },
      direction: "directed",
      relation: "related"
    });

    props.onEdgeCreate?.(connection);

    setSnapGuides([]);
    setDrag(null);
  }

  function handlePointerMove(event: React.PointerEvent) {
    if (!drag) return;

    if (drag.type === "pan") {
      panBy({
        x: event.clientX - drag.start.x,
        y: event.clientY - drag.start.y
      });

      setDrag({
        ...drag,
        start: {
          x: event.clientX,
          y: event.clientY
        }
      });

      return;
    }

    if (drag.type === "node") {
      const dx = (event.clientX - drag.start.x) / camera.zoom;
      const dy = (event.clientY - drag.start.y) / camera.zoom;

      const nextPosition = {
        x: drag.nodeStart.x + dx,
        y: drag.nodeStart.y + dy
      };

      graph.updateNode(drag.nodeId, {
        position:
          props.snapToGrid === false
            ? nextPosition
            : snapPoint(nextPosition, gridSize)
      });

      return;
    }

    if (drag.type === "marquee") {
      setDrag({
        ...drag,
        currentScreen: getLocalPoint(event)
      });

      return;
    }

    if (drag.type === "connect") {
      const screenPoint = getLocalPoint(event);
      const worldPoint = screenToWorld(screenPoint, camera);

      setDrag({
        ...drag,
        currentWorld: worldPoint
      });
    }
  }

  function handlePointerUp() {
    if (drag?.type === "marquee") {
      const startWorld = screenToWorld(drag.startScreen, camera);
      const endWorld = screenToWorld(drag.currentScreen, camera);
      const worldRect = normalizeRect(startWorld, endWorld);

      const selectedNodeIds = nodes
        .filter((node) => {
          const nodeRect: CaseWaveRect = {
            x: node.position.x,
            y: node.position.y,
            width: node.size?.width ?? 160,
            height: node.size?.height ?? 80
          };

          return rectsIntersect(worldRect, nodeRect);
        })
        .map((node) => node.id);

      setSelection({
        nodeIds: selectedNodeIds,
        edgeIds: []
      });
    }

    setSnapGuides([]);
    setDrag(null);
  }

  const marquee =
    drag?.type === "marquee"
      ? normalizeRect(drag.startScreen, drag.currentScreen)
      : null;

  return (
    <div
      ref={rootRef}
      style={rootStyle}
      onWheel={handleWheel}
      onPointerDown={handleCanvasPointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onContextMenu={(event) => openContextMenu(event, { type: "canvas" })}
    >
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none"
        }}
      >
        <defs>
          <marker
            id="casewave-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="rgba(255,255,255,0.65)" />
          </marker>
        </defs>

        <g transform={`translate(${camera.x}, ${camera.y}) scale(${camera.zoom})`}>
          {sortEdgesByLayer(edges).map((edge) => {
            const sourceEndpoint = edge.source;
            const targetEndpoint = edge.target;

            if (sourceEndpoint.kind !== "node") return null;
            if (targetEndpoint.kind !== "node") return null;

            const source = nodes.find((node) => node.id === sourceEndpoint.nodeId);
            const target = nodes.find((node) => node.id === targetEndpoint.nodeId);

            if (!source || !target) return null;

            const sourcePort = source.ports?.find(
              (port) => port.id === sourceEndpoint.portId
            );

            const targetPort = target.ports?.find(
              (port) => port.id === targetEndpoint.portId
            );

            const sourcePoint = getPortWorldPosition(source, sourcePort);
            const targetPoint = getPortWorldPosition(target, targetPort);

            const selected = selection.edgeIds.includes(edge.id);

            const path = createEdgePath({
              mode: edge.routing ?? "straight",
              source: sourcePoint,
              target: targetPoint
            });

            const EdgeRenderer = getEdgeRenderer(edge, props.edgeRenderers);

            return (
              <g key={edge.id}>
                <EdgeRenderer
                  edge={edge}
                  selected={selected}
                  source={source}
                  target={target}
                  sourcePoint={sourcePoint}
                  targetPoint={targetPoint}
                />

                <CaseWaveEdgeInteractionPath
                  path={path}
                  onPointerDown={(event) => handleEdgePointerDown(event, edge.id)}
                  onContextMenu={(event) =>
                    openContextMenu(event, {
                      type: "edge",
                      edgeId: edge.id
                    })
                  }
                />
              </g>
            );
          })}

          {snapGuides.map((guide) => {
            if (guide.type === "vertical") {
              return (
                <line
                  key={guide.id}
                  x1={guide.position}
                  y1={guide.from}
                  x2={guide.position}
                  y2={guide.to}
                  stroke={theme.warning}
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
              );
            }

            return (
              <line
                key={guide.id}
                x1={guide.from}
                y1={guide.position}
                x2={guide.to}
                y2={guide.position}
                stroke={theme.warning}
                strokeWidth={1}
                strokeDasharray="4 4"
              />
            );
          })}

          {drag?.type === "connect" && (
            <line
              x1={drag.startWorld.x}
              y1={drag.startWorld.y}
              x2={drag.currentWorld.x}
              y2={drag.currentWorld.y}
              stroke="#60a5fa"
              strokeWidth={2}
              strokeDasharray="6 6"
            />
          )}
        </g>
      </svg>

      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.zoom})`,
          transformOrigin: "0 0"
        }}
      >
        {[...nodes]
          .sort((a, b) => {
            const aGroup = hasChildNodes(allNodes, a.id) ? 0 : 1;
            const bGroup = hasChildNodes(allNodes, b.id) ? 0 : 1;
            return aGroup - bGroup;
          })
          .map((node) => {
          const groupBounds =
            props.showGroupBounds !== false && !node.collapsed && hasChildNodes(allNodes, node.id)
              ? getGroupBounds(allNodes, node.id, props.groupPadding ?? 32)
              : null;

          const width = groupBounds?.width ?? node.size?.width ?? 160;
          const height = groupBounds?.height ?? node.size?.height ?? 80;
          const left = groupBounds?.x ?? node.position.x;
          const top = groupBounds?.y ?? node.position.y;
          const selected = selection.nodeIds.includes(node.id);
          const isGroup = Boolean(groupBounds);

          return (
            <div
              key={node.id}
              onPointerDown={(event) => handleNodePointerDown(event, node.id)}
              onContextMenu={(event) =>
                openContextMenu(event, {
                  type: "node",
                  nodeId: node.id
                })
              }
              style={{
                position: "absolute",
                left,
                top,
                width,
                minHeight: height,
                borderRadius: 12,
                padding: 12,
                background: isGroup
                  ? "rgba(30,41,59,0.22)"
                  : selected
                    ? "#1e293b"
                    : "#181b24",
                border: selected
                  ? "2px solid #60a5fa"
                  : isGroup
                    ? "1px dashed rgba(255,255,255,0.22)"
                    : "1px solid rgba(255,255,255,0.12)",
                color: theme.nodeText,
                boxSizing: "border-box",
                cursor: node.locked ? "not-allowed" : "grab"
              }}
            >
              {(() => {
                const NodeRenderer = getNodeRenderer(node, props.nodeRenderers);

                return (
                  <NodeRenderer
                    node={node}
                    selected={selected}
                    width={width}
                    height={height}
                  />
                );
              })()}

              {hasChildNodes(allNodes, node.id) && (
                <button
                  type="button"
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={(event) => {
                    event.stopPropagation();

                    graph.updateNode(node.id, {
                      collapsed: !node.collapsed
                    });
                  }}
                  style={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    width: 24,
                    height: 24,
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.16)",
                    background: "rgba(15,17,23,0.85)",
                    color: theme.nodeText,
                    cursor: "pointer",
                    zIndex: 6
                  }}
                  title={node.collapsed ? "Expand group" : "Collapse group"}
                >
                  {node.collapsed ? "+" : "−"}
                </button>
              )}

              {(node.ports ?? []).map((port) => {
                const portX = port.position?.x ?? width / 2;
                const portY = port.position?.y ?? height / 2;

                return (
                  <div
                    key={port.id}
                    title={port.label ?? port.id}
                    onPointerDown={(event) =>
                      handlePortPointerDown(event, node.id, port.id)
                    }
                    onPointerUp={(event) =>
                      handlePortPointerUp(event, node.id, port.id)
                    }
                    style={{
                      position: "absolute",
                      left: portX - 6,
                      top: portY - 6,
                      width: 12,
                      height: 12,
                      borderRadius: 999,
                      background: "#60a5fa",
                      border: "2px solid #0f1117",
                      boxSizing: "border-box",
                      cursor: "crosshair",
                      zIndex: 5
                    }}
                  />
                );
              })}

              {(!node.ports || node.ports.length === 0) && (
                <div
                  title="default handle"
                  onPointerDown={(event) => handlePortPointerDown(event, node.id)}
                  onPointerUp={(event) => handlePortPointerUp(event, node.id)}
                  style={{
                    position: "absolute",
                    right: -7,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 14,
                    height: 14,
                    borderRadius: 999,
                    background: "#60a5fa",
                    border: "2px solid #0f1117",
                    boxSizing: "border-box",
                    cursor: "crosshair",
                    zIndex: 5
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {marquee && marquee.width > 4 && marquee.height > 4 && (
        <div
          style={{
            position: "absolute",
            left: marquee.x,
            top: marquee.y,
            width: marquee.width,
            height: marquee.height,
            border: "1px solid #60a5fa",
            background: "rgba(96,165,250,0.12)",
            pointerEvents: "none"
          }}
        />
      )}

      {props.minimap !== false && (
        <CaseWaveMinimap
          nodes={nodes}
          edges={edges}
          camera={camera}
          width={props.minimapWidth}
          height={props.minimapHeight}
        />
      )}

      <CaseWaveCommandPalette
        open={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        commands={commandPaletteCommands}
      />

      {contextMenu && (
        <div
          style={{
            position: "absolute",
            left: contextMenu.position.x,
            top: contextMenu.position.y,
            minWidth: 180,
            padding: 6,
            borderRadius: 10,
            background: "#111827",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
            color: theme.nodeText,
            zIndex: 50
          }}
          onPointerDown={(event) => event.stopPropagation()}
        >
          {[...getDefaultContextMenuActions(), ...(props.contextMenuActions ?? [])].map(
            (action) => (
              <button
                key={action.id}
                type="button"
                disabled={action.disabled}
                onClick={() => {
                  if (action.disabled) return;

                  action.onSelect({
                    graph,
                    target: contextMenu,
                    selection,
                    schema: graph.toJSON()
                  });

                  closeContextMenu();
                }}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px 10px",
                  border: 0,
                  borderRadius: 8,
                  background: "transparent",
                  color: action.danger ? theme.danger : theme.panelText,
                  opacity: action.disabled ? 0.45 : 1,
                  textAlign: "left",
                  cursor: action.disabled ? "not-allowed" : "pointer"
                }}
              >
                {action.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}



































































































































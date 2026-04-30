import type {
  CaseWaveEdge,
  CaseWaveGraphSchema,
  CaseWaveId,
  CaseWaveNode,
  CaseWaveSelection
} from "@casewavejs/core";

export interface CaseWaveClipboardPayload {
  version: string;
  nodes: CaseWaveNode[];
  edges: CaseWaveEdge[];
}

export function createClipboardPayload(
  schema: CaseWaveGraphSchema,
  selection: CaseWaveSelection
): CaseWaveClipboardPayload {
  const selectedNodeIds = new Set(selection.nodeIds);

  const nodes = schema.nodes.filter((node) => selectedNodeIds.has(node.id));

  const edges = schema.edges.filter((edge) => {
    if (edge.source.kind !== "node") return false;
    if (edge.target.kind !== "node") return false;

    return (
      selectedNodeIds.has(edge.source.nodeId) &&
      selectedNodeIds.has(edge.target.nodeId)
    );
  });

  return {
    version: "0.1.0",
    nodes,
    edges
  };
}

export function duplicateClipboardPayload(
  payload: CaseWaveClipboardPayload,
  offset = { x: 48, y: 48 }
): CaseWaveClipboardPayload {
  const idMap = new Map<CaseWaveId, CaseWaveId>();

  for (const node of payload.nodes) {
    idMap.set(node.id, createDuplicateId(node.id));
  }

  const nodes = payload.nodes.map((node) => {
    const nextId = idMap.get(node.id)!;

    return {
      ...node,
      id: nextId,
      parentId: node.parentId ? idMap.get(node.parentId) ?? node.parentId : undefined,
      position: {
        x: node.position.x + offset.x,
        y: node.position.y + offset.y
      },
      ports: node.ports?.map((port) => ({
        ...port,
        nodeId: nextId
      }))
    };
  });

  const edges = payload.edges
    .map((edge) => {
      if (edge.source.kind !== "node") return null;
      if (edge.target.kind !== "node") return null;

      const sourceNodeId = idMap.get(edge.source.nodeId);
      const targetNodeId = idMap.get(edge.target.nodeId);

      if (!sourceNodeId || !targetNodeId) return null;

      return {
        ...edge,
        id: createDuplicateId(edge.id),
        source: {
          ...edge.source,
          nodeId: sourceNodeId
        },
        target: {
          ...edge.target,
          nodeId: targetNodeId
        }
      } satisfies CaseWaveEdge;
    })
    .filter(Boolean) as CaseWaveEdge[];

  return {
    version: payload.version,
    nodes,
    edges
  };
}

export function createDuplicateId(id: string): string {
  return `${id}_copy_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
}



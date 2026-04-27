import React from "react";
import type {
  CaseWaveEdge,
  CaseWaveNode
} from "@casewave/core";
import { createEdgePath } from "./routing";

export interface CaseWaveNodeRendererProps<TData = unknown> {
  node: CaseWaveNode<TData>;
  selected: boolean;
  width: number;
  height: number;
}

export interface CaseWaveEdgeRendererProps<TData = unknown> {
  edge: CaseWaveEdge<TData>;
  selected: boolean;
  source: CaseWaveNode;
  target: CaseWaveNode;
  sourcePoint: {
    x: number;
    y: number;
  };
  targetPoint: {
    x: number;
    y: number;
  };
}

export type CaseWaveNodeRenderer = (
  props: CaseWaveNodeRendererProps
) => React.ReactNode;

export type CaseWaveEdgeRenderer = (
  props: CaseWaveEdgeRendererProps
) => React.ReactNode;

export type CaseWaveNodeRendererMap = Record<string, CaseWaveNodeRenderer>;
export type CaseWaveEdgeRendererMap = Record<string, CaseWaveEdgeRenderer>;

export function DefaultCaseWaveNodeRenderer(
  props: CaseWaveNodeRendererProps
) {
  const { node } = props;

  return (
    <>
      <strong>{node.type}</strong>
      <div style={{ opacity: 0.75, fontSize: 12 }}>{node.id}</div>
    </>
  );
}

export function DefaultCaseWaveEdgeRenderer(
  props: CaseWaveEdgeRendererProps
) {
  const { edge, selected, sourcePoint, targetPoint } = props;

  const path = createEdgePath({
    mode: edge.routing ?? "straight",
    source: sourcePoint,
    target: targetPoint
  });

  return (
    <path
      d={path}
      fill="none"
      stroke={selected ? "#60a5fa" : "rgba(255,255,255,0.45)"}
      strokeWidth={selected ? 3 : 2}
      markerEnd={
        edge.direction === "directed"
          ? "url(#casewave-arrow)"
          : undefined
      }
    />
  );
}

export function CaseWaveEdgeInteractionPath(props: {
  path: string;
  onPointerDown: (event: React.PointerEvent<SVGPathElement>) => void;
  onContextMenu?: (event: React.MouseEvent<SVGPathElement>) => void;
}) {
  return (
    <path
      d={props.path}
      fill="none"
      stroke="transparent"
      strokeWidth={16}
      pointerEvents="stroke"
      onPointerDown={props.onPointerDown}
      onContextMenu={props.onContextMenu}
    />
  );
}

export function getNodeRenderer(
  node: CaseWaveNode,
  renderers?: CaseWaveNodeRendererMap
): CaseWaveNodeRenderer {
  return renderers?.[node.type] ?? DefaultCaseWaveNodeRenderer;
}

export function getEdgeRenderer(
  edge: CaseWaveEdge,
  renderers?: CaseWaveEdgeRendererMap
): CaseWaveEdgeRenderer {
  return renderers?.[edge.type] ?? DefaultCaseWaveEdgeRenderer;
}


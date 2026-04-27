import type { CaseWaveEdge, CaseWaveNode } from "@casewave/core";

export function getNodeLayer(node: CaseWaveNode): number {
  const value = node.metadata?.layer;

  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

export function getEdgeLayer(edge: CaseWaveEdge): number {
  const value = edge.metadata?.layer;

  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

export function sortNodesByLayer(nodes: CaseWaveNode[]): CaseWaveNode[] {
  return [...nodes].sort((a, b) => {
    return getNodeLayer(a) - getNodeLayer(b);
  });
}

export function sortEdgesByLayer(edges: CaseWaveEdge[]): CaseWaveEdge[] {
  return [...edges].sort((a, b) => {
    return getEdgeLayer(a) - getEdgeLayer(b);
  });
}

export function moveNodeToLayer(
  node: CaseWaveNode,
  layer: number
): CaseWaveNode {
  return {
    ...node,
    metadata: {
      ...(node.metadata ?? {}),
      layer
    }
  };
}

export function moveEdgeToLayer(
  edge: CaseWaveEdge,
  layer: number
): CaseWaveEdge {
  return {
    ...edge,
    metadata: {
      ...(edge.metadata ?? {}),
      layer
    }
  };
}

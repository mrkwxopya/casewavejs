import type { CaseWaveNode } from "@casewavejs/core";

export type CaseWaveAlignMode =
  | "left"
  | "center-x"
  | "right"
  | "top"
  | "center-y"
  | "bottom";

export type CaseWaveDistributeMode = "horizontal" | "vertical";

export function getSelectedNodes(
  nodes: CaseWaveNode[],
  nodeIds: string[]
): CaseWaveNode[] {
  const selected = new Set(nodeIds);
  return nodes.filter((node) => selected.has(node.id));
}

export function getNodeWidth(node: CaseWaveNode): number {
  return node.size?.width ?? 160;
}

export function getNodeHeight(node: CaseWaveNode): number {
  return node.size?.height ?? 80;
}

export function createAlignedNodePositions(
  nodes: CaseWaveNode[],
  mode: CaseWaveAlignMode
): Record<string, { x: number; y: number }> {
  if (nodes.length === 0) return {};

  const result: Record<string, { x: number; y: number }> = {};

  const left = Math.min(...nodes.map((node) => node.position.x));
  const right = Math.max(
    ...nodes.map((node) => node.position.x + getNodeWidth(node))
  );
  const top = Math.min(...nodes.map((node) => node.position.y));
  const bottom = Math.max(
    ...nodes.map((node) => node.position.y + getNodeHeight(node))
  );

  const centerX = left + (right - left) / 2;
  const centerY = top + (bottom - top) / 2;

  for (const node of nodes) {
    const width = getNodeWidth(node);
    const height = getNodeHeight(node);

    let x = node.position.x;
    let y = node.position.y;

    if (mode === "left") x = left;
    if (mode === "center-x") x = centerX - width / 2;
    if (mode === "right") x = right - width;

    if (mode === "top") y = top;
    if (mode === "center-y") y = centerY - height / 2;
    if (mode === "bottom") y = bottom - height;

    result[node.id] = { x, y };
  }

  return result;
}

export function createDistributedNodePositions(
  nodes: CaseWaveNode[],
  mode: CaseWaveDistributeMode
): Record<string, { x: number; y: number }> {
  if (nodes.length < 3) return {};

  const result: Record<string, { x: number; y: number }> = {};

  if (mode === "horizontal") {
    const sorted = [...nodes].sort((a, b) => a.position.x - b.position.x);

    const first = sorted[0];
    const last = sorted[sorted.length - 1];

    const start = first.position.x;
    const end = last.position.x;
    const gap = (end - start) / (sorted.length - 1);

    sorted.forEach((node, index) => {
      result[node.id] = {
        x: start + gap * index,
        y: node.position.y
      };
    });

    return result;
  }

  const sorted = [...nodes].sort((a, b) => a.position.y - b.position.y);

  const first = sorted[0];
  const last = sorted[sorted.length - 1];

  const start = first.position.y;
  const end = last.position.y;
  const gap = (end - start) / (sorted.length - 1);

  sorted.forEach((node, index) => {
    result[node.id] = {
      x: node.position.x,
      y: start + gap * index
    };
  });

  return result;
}



import type { CaseWaveNode } from "@casewavejs/core";

export function getChildNodes(
  nodes: CaseWaveNode[],
  parentId: string
): CaseWaveNode[] {
  return nodes.filter((node) => node.parentId === parentId);
}

export function hasChildNodes(
  nodes: CaseWaveNode[],
  parentId: string
): boolean {
  return nodes.some((node) => node.parentId === parentId);
}

export function getRootNodes(nodes: CaseWaveNode[]): CaseWaveNode[] {
  return nodes.filter((node) => !node.parentId);
}

export function isNodeHiddenByCollapsedParent(
  nodes: CaseWaveNode[],
  node: CaseWaveNode
): boolean {
  let currentParentId = node.parentId;

  while (currentParentId) {
    const parent = nodes.find((item) => item.id === currentParentId);

    if (!parent) return false;
    if (parent.collapsed) return true;

    currentParentId = parent.parentId;
  }

  return false;
}

export function getVisibleNodes(nodes: CaseWaveNode[]): CaseWaveNode[] {
  return nodes.filter((node) => {
    if (node.hidden) return false;
    if (isNodeHiddenByCollapsedParent(nodes, node)) return false;

    return true;
  });
}

export function getGroupBounds(
  nodes: CaseWaveNode[],
  parentId: string,
  padding = 32
) {
  const children = getChildNodes(nodes, parentId).filter(
    (child) => !child.hidden
  );

  if (children.length === 0) {
    return null;
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const child of children) {
    const width = child.size?.width ?? 160;
    const height = child.size?.height ?? 80;

    minX = Math.min(minX, child.position.x);
    minY = Math.min(minY, child.position.y);
    maxX = Math.max(maxX, child.position.x + width);
    maxY = Math.max(maxY, child.position.y + height);
  }

  return {
    x: minX - padding,
    y: minY - padding,
    width: maxX - minX + padding * 2,
    height: maxY - minY + padding * 2
  };
}





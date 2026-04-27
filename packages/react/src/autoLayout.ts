import type { CaseWaveEdge, CaseWaveNode } from "@casewave/core";

export interface CaseWaveAutoLayoutOptions {
  startX?: number;
  startY?: number;
  gapX?: number;
  gapY?: number;
  columns?: number;
}

export function createGridAutoLayoutPositions(
  nodes: CaseWaveNode[],
  options: CaseWaveAutoLayoutOptions = {}
): Record<string, { x: number; y: number }> {
  const startX = options.startX ?? 80;
  const startY = options.startY ?? 80;
  const gapX = options.gapX ?? 260;
  const gapY = options.gapY ?? 160;
  const columns = options.columns ?? Math.ceil(Math.sqrt(nodes.length));

  const result: Record<string, { x: number; y: number }> = {};

  nodes.forEach((node, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);

    result[node.id] = {
      x: startX + col * gapX,
      y: startY + row * gapY
    };
  });

  return result;
}

export function createDagAutoLayoutPositions(
  nodes: CaseWaveNode[],
  edges: CaseWaveEdge[],
  options: CaseWaveAutoLayoutOptions = {}
): Record<string, { x: number; y: number }> {
  const startX = options.startX ?? 80;
  const startY = options.startY ?? 80;
  const gapX = options.gapX ?? 280;
  const gapY = options.gapY ?? 140;

  const nodeIds = new Set(nodes.map((node) => node.id));
  const levels = calculateDagLevels(nodes, edges);

  const buckets = new Map<number, CaseWaveNode[]>();

  for (const node of nodes) {
    const level = levels.get(node.id) ?? 0;

    if (!buckets.has(level)) {
      buckets.set(level, []);
    }

    buckets.get(level)!.push(node);
  }

  const result: Record<string, { x: number; y: number }> = {};

  for (const [level, bucketNodes] of buckets) {
    bucketNodes.forEach((node, index) => {
      if (!nodeIds.has(node.id)) return;

      result[node.id] = {
        x: startX + level * gapX,
        y: startY + index * gapY
      };
    });
  }

  return result;
}

export function calculateDagLevels(
  nodes: CaseWaveNode[],
  edges: CaseWaveEdge[]
): Map<string, number> {
  const levels = new Map<string, number>();
  const incomingCount = new Map<string, number>();
  const outgoing = new Map<string, string[]>();

  for (const node of nodes) {
    levels.set(node.id, 0);
    incomingCount.set(node.id, 0);
    outgoing.set(node.id, []);
  }

  for (const edge of edges) {
    if (edge.source.kind !== "node") continue;
    if (edge.target.kind !== "node") continue;
    if (edge.direction === "undirected") continue;

    if (!incomingCount.has(edge.target.nodeId)) continue;
    if (!outgoing.has(edge.source.nodeId)) continue;

    incomingCount.set(
      edge.target.nodeId,
      (incomingCount.get(edge.target.nodeId) ?? 0) + 1
    );

    outgoing.get(edge.source.nodeId)!.push(edge.target.nodeId);
  }

  const queue = nodes
    .filter((node) => (incomingCount.get(node.id) ?? 0) === 0)
    .map((node) => node.id);

  while (queue.length > 0) {
    const currentId = queue.shift()!;
    const currentLevel = levels.get(currentId) ?? 0;

    for (const nextId of outgoing.get(currentId) ?? []) {
      levels.set(nextId, Math.max(levels.get(nextId) ?? 0, currentLevel + 1));

      incomingCount.set(nextId, (incomingCount.get(nextId) ?? 0) - 1);

      if ((incomingCount.get(nextId) ?? 0) === 0) {
        queue.push(nextId);
      }
    }
  }

  return levels;
}

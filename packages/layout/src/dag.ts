import type { CaseWaveGraphSchema } from "@casewavejs/core";
import type {
  CaseWaveLayoutAdapter,
  CaseWaveLayoutOptions,
  CaseWaveLayoutResult
} from "./types";

export function dagLayout(
  schema: CaseWaveGraphSchema,
  options: CaseWaveLayoutOptions = {}
): CaseWaveLayoutResult {
  const startX = options.startX ?? 80;
  const startY = options.startY ?? 80;
  const gapX = options.gapX ?? 280;
  const gapY = options.gapY ?? 140;

  const levels = calculateDagLevels(schema);
  const buckets = new Map<number, string[]>();

  for (const node of schema.nodes) {
    const level = levels.get(node.id) ?? 0;

    if (!buckets.has(level)) {
      buckets.set(level, []);
    }

    buckets.get(level)!.push(node.id);
  }

  const positions: Record<string, { x: number; y: number }> = {};

  for (const [level, nodeIds] of buckets) {
    nodeIds.forEach((nodeId, index) => {
      positions[nodeId] = {
        x: startX + level * gapX,
        y: startY + index * gapY
      };
    });
  }

  return {
    positions,
    metadata: {
      layout: "dag",
      levels: Object.fromEntries(levels)
    }
  };
}

export function calculateDagLevels(
  schema: CaseWaveGraphSchema
): Map<string, number> {
  const levels = new Map<string, number>();
  const incomingCount = new Map<string, number>();
  const outgoing = new Map<string, string[]>();

  for (const node of schema.nodes) {
    levels.set(node.id, 0);
    incomingCount.set(node.id, 0);
    outgoing.set(node.id, []);
  }

  for (const edge of schema.edges) {
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

  const queue = schema.nodes
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

export const dagLayoutAdapter: CaseWaveLayoutAdapter = {
  id: "dag",
  name: "DAG Layout",
  layout: dagLayout
};





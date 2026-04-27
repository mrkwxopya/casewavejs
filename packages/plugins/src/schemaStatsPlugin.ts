import type { CaseWavePlugin } from "@casewave/react";

export interface CaseWaveSchemaStats {
  nodeCount: number;
  edgeCount: number;
  nodeTypes: Record<string, number>;
  edgeTypes: Record<string, number>;
}

export function createSchemaStats(schema: {
  nodes: Array<{ type: string }>;
  edges: Array<{ type: string }>;
}): CaseWaveSchemaStats {
  const nodeTypes: Record<string, number> = {};
  const edgeTypes: Record<string, number> = {};

  for (const node of schema.nodes) {
    nodeTypes[node.type] = (nodeTypes[node.type] ?? 0) + 1;
  }

  for (const edge of schema.edges) {
    edgeTypes[edge.type] = (edgeTypes[edge.type] ?? 0) + 1;
  }

  return {
    nodeCount: schema.nodes.length,
    edgeCount: schema.edges.length,
    nodeTypes,
    edgeTypes
  };
}

export function createSchemaStatsPlugin(
  onStats?: (stats: CaseWaveSchemaStats) => void
): CaseWavePlugin {
  return {
    id: "casewave.schema-stats",
    name: "CaseWave Schema Stats Plugin",
    version: "0.1.0",

    onSchemaChange(schema) {
      onStats?.(createSchemaStats(schema));
    }
  };
}

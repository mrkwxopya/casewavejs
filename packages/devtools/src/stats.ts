import type { CaseWaveGraphSchema } from "@casewavejs/core";

export interface CaseWaveGraphStats {
  nodeCount: number;
  edgeCount: number;
  hyperedgeCount: number;
  nodeTypes: Record<string, number>;
  edgeTypes: Record<string, number>;
  relationTypes: Record<string, number>;
}

export function createGraphStats(schema: CaseWaveGraphSchema): CaseWaveGraphStats {
  const nodeTypes: Record<string, number> = {};
  const edgeTypes: Record<string, number> = {};
  const relationTypes: Record<string, number> = {};

  for (const node of schema.nodes) {
    nodeTypes[node.type] = (nodeTypes[node.type] ?? 0) + 1;
  }

  for (const edge of schema.edges) {
    edgeTypes[edge.type] = (edgeTypes[edge.type] ?? 0) + 1;

    if (edge.relation) {
      relationTypes[String(edge.relation)] =
        (relationTypes[String(edge.relation)] ?? 0) + 1;
    }
  }

  return {
    nodeCount: schema.nodes.length,
    edgeCount: schema.edges.length,
    hyperedgeCount: schema.hyperedges?.length ?? 0,
    nodeTypes,
    edgeTypes,
    relationTypes
  };
}





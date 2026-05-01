import type {
  CaseWaveEdge,
  CaseWaveGraphSchema,
  CaseWaveId,
  CaseWaveNode
} from "./types";

export function getNodeById(
  schema: CaseWaveGraphSchema,
  nodeId: CaseWaveId
): CaseWaveNode | undefined {
  return schema.nodes.find((node) => node.id === nodeId);
}

export function getEdgeById(
  schema: CaseWaveGraphSchema,
  edgeId: CaseWaveId
): CaseWaveEdge | undefined {
  return schema.edges.find((edge) => edge.id === edgeId);
}

export function getIncomingEdges(
  schema: CaseWaveGraphSchema,
  nodeId: CaseWaveId
): CaseWaveEdge[] {
  return schema.edges.filter((edge) => {
    return edge.target.kind === "node" && edge.target.nodeId === nodeId;
  });
}

export function getOutgoingEdges(
  schema: CaseWaveGraphSchema,
  nodeId: CaseWaveId
): CaseWaveEdge[] {
  return schema.edges.filter((edge) => {
    return edge.source.kind === "node" && edge.source.nodeId === nodeId;
  });
}

export function getConnectedEdges(
  schema: CaseWaveGraphSchema,
  nodeId: CaseWaveId
): CaseWaveEdge[] {
  return schema.edges.filter((edge) => {
    const sourceMatch =
      edge.source.kind === "node" && edge.source.nodeId === nodeId;

    const targetMatch =
      edge.target.kind === "node" && edge.target.nodeId === nodeId;

    return sourceMatch || targetMatch;
  });
}

export function getNeighbors(
  schema: CaseWaveGraphSchema,
  nodeId: CaseWaveId
): CaseWaveNode[] {
  const neighborIds = new Set<CaseWaveId>();

  for (const edge of schema.edges) {
    if (edge.source.kind === "node" && edge.source.nodeId === nodeId) {
      if (edge.target.kind === "node") {
        neighborIds.add(edge.target.nodeId);
      }
    }

    if (edge.target.kind === "node" && edge.target.nodeId === nodeId) {
      if (edge.source.kind === "node") {
        neighborIds.add(edge.source.nodeId);
      }
    }
  }

  return schema.nodes.filter((node) => neighborIds.has(node.id));
}

export function shortestPath(
  schema: CaseWaveGraphSchema,
  sourceNodeId: CaseWaveId,
  targetNodeId: CaseWaveId
): CaseWaveId[] | null {
  if (sourceNodeId === targetNodeId) {
    return [sourceNodeId];
  }

  const adjacency = createNodeAdjacency(schema);
  const queue: CaseWaveId[][] = [[sourceNodeId]];
  const visited = new Set<CaseWaveId>([sourceNodeId]);

  while (queue.length > 0) {
    const path = queue.shift()!;
    const current = path[path.length - 1];

    for (const next of adjacency.get(current) ?? []) {
      if (visited.has(next)) continue;

      const nextPath = [...path, next];

      if (next === targetNodeId) {
        return nextPath;
      }

      visited.add(next);
      queue.push(nextPath);
    }
  }

  return null;
}

export function dependencyTrace(
  schema: CaseWaveGraphSchema,
  nodeId: CaseWaveId
): CaseWaveId[] {
  const result = new Set<CaseWaveId>();

  const visit = (currentId: CaseWaveId) => {
    const incoming = getIncomingEdges(schema, currentId);

    for (const edge of incoming) {
      if (edge.source.kind !== "node") continue;

      const sourceId = edge.source.nodeId;

      if (result.has(sourceId)) continue;

      result.add(sourceId);
      visit(sourceId);
    }
  };

  visit(nodeId);

  return Array.from(result);
}

export function impactAnalysis(
  schema: CaseWaveGraphSchema,
  nodeId: CaseWaveId
): CaseWaveId[] {
  const result = new Set<CaseWaveId>();

  const visit = (currentId: CaseWaveId) => {
    const outgoing = getOutgoingEdges(schema, currentId);

    for (const edge of outgoing) {
      if (edge.target.kind !== "node") continue;

      const targetId = edge.target.nodeId;

      if (result.has(targetId)) continue;

      result.add(targetId);
      visit(targetId);
    }
  };

  visit(nodeId);

  return Array.from(result);
}

export function createNodeAdjacency(
  schema: CaseWaveGraphSchema
): Map<CaseWaveId, CaseWaveId[]> {
  const adjacency = new Map<CaseWaveId, CaseWaveId[]>();

  for (const node of schema.nodes) {
    adjacency.set(node.id, []);
  }

  for (const edge of schema.edges) {
    if (edge.source.kind !== "node") continue;
    if (edge.target.kind !== "node") continue;

    adjacency.get(edge.source.nodeId)?.push(edge.target.nodeId);

    if (edge.direction === "undirected") {
      adjacency.get(edge.target.nodeId)?.push(edge.source.nodeId);
    }
  }

  return adjacency;
}





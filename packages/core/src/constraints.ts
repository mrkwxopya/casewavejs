import type {
  CaseWaveEdge,
  CaseWaveEdgeEndpoint,
  CaseWaveGraphOptions,
  CaseWaveNode
} from "./types";

export interface CaseWaveValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export function createValidResult(): CaseWaveValidationResult {
  return {
    valid: true,
    errors: [],
    warnings: []
  };
}

export function validateGraph(
  nodes: CaseWaveNode[],
  edges: CaseWaveEdge[],
  options: CaseWaveGraphOptions = {}
): CaseWaveValidationResult {
  const result = createValidResult();

  const nodeIds = new Set(nodes.map((node) => node.id));
  const edgeIds = new Set(edges.map((edge) => edge.id));

  for (const edge of edges) {
    validateEndpoint(edge.source, nodeIds, edgeIds, result, options);
    validateEndpoint(edge.target, nodeIds, edgeIds, result, options);
  }

  if (!options.allowCycles && hasCycle(nodes, edges)) {
    result.errors.push("Graph contains a cycle.");
  }

  result.valid = result.errors.length === 0;

  return result;
}

export function validateEndpoint(
  endpoint: CaseWaveEdgeEndpoint,
  nodeIds: Set<string>,
  edgeIds: Set<string>,
  result: CaseWaveValidationResult,
  options: CaseWaveGraphOptions
): void {
  if (endpoint.kind === "node" && !nodeIds.has(endpoint.nodeId)) {
    if (options.allowDanglingEdges) {
      result.warnings.push(`Dangling node endpoint: ${endpoint.nodeId}`);
    } else {
      result.errors.push(`Missing node endpoint: ${endpoint.nodeId}`);
    }
  }

  if (endpoint.kind === "edge" && !edgeIds.has(endpoint.edgeId)) {
    if (options.allowDanglingEdges) {
      result.warnings.push(`Dangling edge endpoint: ${endpoint.edgeId}`);
    } else {
      result.errors.push(`Missing edge endpoint: ${endpoint.edgeId}`);
    }
  }
}

export function hasCycle(
  nodes: CaseWaveNode[],
  edges: CaseWaveEdge[]
): boolean {
  const adjacency = new Map<string, string[]>();

  for (const node of nodes) {
    adjacency.set(node.id, []);
  }

  for (const edge of edges) {
    if (edge.direction === "undirected") continue;
    if (edge.source.kind !== "node") continue;
    if (edge.target.kind !== "node") continue;

    if (!adjacency.has(edge.source.nodeId)) continue;
    if (!adjacency.has(edge.target.nodeId)) continue;

    adjacency.get(edge.source.nodeId)!.push(edge.target.nodeId);
  }

  const visited = new Set<string>();
  const stack = new Set<string>();

  const visit = (nodeId: string): boolean => {
    if (stack.has(nodeId)) return true;
    if (visited.has(nodeId)) return false;

    visited.add(nodeId);
    stack.add(nodeId);

    for (const next of adjacency.get(nodeId) ?? []) {
      if (visit(next)) return true;
    }

    stack.delete(nodeId);
    return false;
  };

  for (const node of nodes) {
    if (visit(node.id)) return true;
  }

  return false;
}

export function validateUniqueNodeIds(nodes: CaseWaveNode[]): CaseWaveValidationResult {
  const result = createValidResult();
  const seen = new Set<string>();

  for (const node of nodes) {
    if (seen.has(node.id)) {
      result.errors.push(`Duplicate node id: ${node.id}`);
    }

    seen.add(node.id);
  }

  result.valid = result.errors.length === 0;
  return result;
}

export function validateUniqueEdgeIds(edges: CaseWaveEdge[]): CaseWaveValidationResult {
  const result = createValidResult();
  const seen = new Set<string>();

  for (const edge of edges) {
    if (seen.has(edge.id)) {
      result.errors.push(`Duplicate edge id: ${edge.id}`);
    }

    seen.add(edge.id);
  }

  result.valid = result.errors.length === 0;
  return result;
}



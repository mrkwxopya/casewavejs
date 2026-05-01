import type { CaseWaveGraphSchema } from "@casewavejs/core";

export interface CaseWaveValidationIssue {
  id: string;
  level: "error" | "warning";
  message: string;
  targetType?: "node" | "edge" | "graph";
  targetId?: string;
}

export function validateCaseWaveSchema(
  schema: CaseWaveGraphSchema
): CaseWaveValidationIssue[] {
  const issues: CaseWaveValidationIssue[] = [];

  const nodeIds = new Set<string>();
  const edgeIds = new Set<string>();

  for (const node of schema.nodes) {
    if (nodeIds.has(node.id)) {
      issues.push({
        id: `duplicate-node-${node.id}`,
        level: "error",
        message: `Duplicate node id: ${node.id}`,
        targetType: "node",
        targetId: node.id
      });
    }

    nodeIds.add(node.id);

    if (!node.type) {
      issues.push({
        id: `missing-node-type-${node.id}`,
        level: "error",
        message: `Node has no type: ${node.id}`,
        targetType: "node",
        targetId: node.id
      });
    }
  }

  for (const edge of schema.edges) {
    if (edgeIds.has(edge.id)) {
      issues.push({
        id: `duplicate-edge-${edge.id}`,
        level: "error",
        message: `Duplicate edge id: ${edge.id}`,
        targetType: "edge",
        targetId: edge.id
      });
    }

    edgeIds.add(edge.id);

    if (edge.source.kind === "node" && !nodeIds.has(edge.source.nodeId)) {
      issues.push({
        id: `missing-source-${edge.id}`,
        level: "error",
        message: `Edge source node missing: ${edge.source.nodeId}`,
        targetType: "edge",
        targetId: edge.id
      });
    }

    if (edge.target.kind === "node" && !nodeIds.has(edge.target.nodeId)) {
      issues.push({
        id: `missing-target-${edge.id}`,
        level: "error",
        message: `Edge target node missing: ${edge.target.nodeId}`,
        targetType: "edge",
        targetId: edge.id
      });
    }

    if (typeof edge.confidence === "number") {
      if (edge.confidence < 0 || edge.confidence > 1) {
        issues.push({
          id: `invalid-confidence-${edge.id}`,
          level: "warning",
          message: `Edge confidence should be between 0 and 1: ${edge.id}`,
          targetType: "edge",
          targetId: edge.id
        });
      }
    }
  }

  return issues;
}





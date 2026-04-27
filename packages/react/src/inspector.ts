import type {
  CaseWaveEdge,
  CaseWaveGraphSchema,
  CaseWaveNode,
  CaseWaveSelection
} from "@casewave/core";

export interface CaseWaveInspectorState {
  selectedNodes: CaseWaveNode[];
  selectedEdges: CaseWaveEdge[];
  firstNode?: CaseWaveNode;
  firstEdge?: CaseWaveEdge;
}

export function createInspectorState(
  schema: CaseWaveGraphSchema,
  selection: CaseWaveSelection
): CaseWaveInspectorState {
  const selectedNodeIds = new Set(selection.nodeIds);
  const selectedEdgeIds = new Set(selection.edgeIds);

  const selectedNodes = schema.nodes.filter((node) =>
    selectedNodeIds.has(node.id)
  );

  const selectedEdges = schema.edges.filter((edge) =>
    selectedEdgeIds.has(edge.id)
  );

  return {
    selectedNodes,
    selectedEdges,
    firstNode: selectedNodes[0],
    firstEdge: selectedEdges[0]
  };
}

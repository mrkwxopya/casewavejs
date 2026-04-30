import { useEffect, useState } from "react";
import type {
  CaseWaveEdge,
  CaseWaveGraphSchema,
  CaseWaveNode,
  CaseWaveSelection
} from "@casewavejs/core";
import { useCaseWaveGraph } from "./CaseWaveProvider";

export function useCaseWaveSchema(): CaseWaveGraphSchema {
  const graph = useCaseWaveGraph();
  const [schema, setSchema] = useState(() => graph.toJSON());

  useEffect(() => {
    return graph.events.on<CaseWaveGraphSchema>("graph:change", (nextSchema) => {
      setSchema(nextSchema);
    });
  }, [graph]);

  return schema;
}

export function useCaseWaveNodes(): CaseWaveNode[] {
  const schema = useCaseWaveSchema();
  return schema.nodes;
}

export function useCaseWaveEdges(): CaseWaveEdge[] {
  const schema = useCaseWaveSchema();
  return schema.edges;
}

export function useCaseWaveSelection(initial?: CaseWaveSelection) {
  const [selection, setSelection] = useState<CaseWaveSelection>(
    initial ?? {
      nodeIds: [],
      edgeIds: []
    }
  );

  function clearSelection() {
    setSelection({
      nodeIds: [],
      edgeIds: []
    });
  }

  function selectNode(nodeId: string, additive = false) {
    setSelection((current) => {
      const exists = current.nodeIds.includes(nodeId);

      if (additive) {
        return {
          ...current,
          nodeIds: exists
            ? current.nodeIds.filter((id) => id !== nodeId)
            : [...current.nodeIds, nodeId]
        };
      }

      return {
        nodeIds: [nodeId],
        edgeIds: []
      };
    });
  }

  function selectEdge(edgeId: string, additive = false) {
    setSelection((current) => {
      const exists = current.edgeIds.includes(edgeId);

      if (additive) {
        return {
          ...current,
          edgeIds: exists
            ? current.edgeIds.filter((id) => id !== edgeId)
            : [...current.edgeIds, edgeId]
        };
      }

      return {
        nodeIds: [],
        edgeIds: [edgeId]
      };
    });
  }

  return {
    selection,
    setSelection,
    clearSelection,
    selectNode,
    selectEdge
  };
}



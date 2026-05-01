import type { CaseWaveGraph } from "@casewavejs/core";

export interface CaseWaveHistorySummary {
  canUndo: boolean;
  canRedo: boolean;
  undoCount: number;
  redoCount: number;
}

export function createHistorySummary(graph: CaseWaveGraph): CaseWaveHistorySummary {
  return {
    canUndo: graph.canUndo(),
    canRedo: graph.canRedo(),
    undoCount: graph.history.getUndoStack().length,
    redoCount: graph.history.getRedoStack().length
  };
}





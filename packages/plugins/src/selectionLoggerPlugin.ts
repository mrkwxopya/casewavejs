import type { CaseWavePlugin } from "@casewavejs/react";

export function createSelectionLoggerPlugin(): CaseWavePlugin {
  return {
    id: "casewave.selection-logger",
    name: "CaseWave Selection Logger",
    version: "0.1.0",

    onSelectionChange(selection) {
      console.log("[CaseWave Selection]", {
        nodeIds: selection.nodeIds,
        edgeIds: selection.edgeIds
      });
    }
  };
}





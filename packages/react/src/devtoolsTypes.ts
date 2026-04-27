import type {
  CaseWaveGraphSchema,
  CaseWaveSelection
} from "@casewave/core";

export interface CaseWaveDevtoolsState {
  open: boolean;
  schema: CaseWaveGraphSchema;
  selection: CaseWaveSelection;
  nodeCount: number;
  edgeCount: number;
  selectedNodeCount: number;
  selectedEdgeCount: number;
}

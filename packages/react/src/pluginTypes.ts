import type {
  CaseWaveEdge,
  CaseWaveGraphSchema,
  CaseWaveNode,
  CaseWaveSelection
} from "@casewavejs/core";

export interface CaseWavePluginContext {
  getSchema: () => CaseWaveGraphSchema;
  getSelection: () => CaseWaveSelection;
  updateNode: (id: string, patch: Partial<CaseWaveNode>) => void;
  updateEdge: (id: string, patch: Partial<CaseWaveEdge>) => void;
  removeNode: (id: string) => void;
  removeEdge: (id: string) => void;
}

export interface CaseWavePlugin {
  id: string;
  name: string;
  version?: string;

  setup?: (context: CaseWavePluginContext) => void | (() => void);

  onSchemaChange?: (
    schema: CaseWaveGraphSchema,
    context: CaseWavePluginContext
  ) => void;

  onSelectionChange?: (
    selection: CaseWaveSelection,
    context: CaseWavePluginContext
  ) => void;
}





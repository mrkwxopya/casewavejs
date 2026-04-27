import type {
  CaseWaveEdge,
  CaseWaveGraphSchema,
  CaseWaveNode
} from "@casewave/core";

export interface CaseWaveLayoutPosition {
  x: number;
  y: number;
}

export interface CaseWaveLayoutResult {
  positions: Record<string, CaseWaveLayoutPosition>;
  metadata?: Record<string, unknown>;
}

export interface CaseWaveLayoutOptions {
  startX?: number;
  startY?: number;
  gapX?: number;
  gapY?: number;
  columns?: number;
}

export interface CaseWaveLayoutAdapter {
  id: string;
  name: string;
  layout: (
    schema: CaseWaveGraphSchema,
    options?: CaseWaveLayoutOptions
  ) => CaseWaveLayoutResult;
}

export interface CaseWaveLayoutInput {
  nodes: CaseWaveNode[];
  edges: CaseWaveEdge[];
  options?: CaseWaveLayoutOptions;
}

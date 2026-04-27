import type { CaseWaveGraphSchema } from "@casewave/core";

export function exportSchemaAsJson(schema: CaseWaveGraphSchema): string {
  return JSON.stringify(schema, null, 2);
}

export function exportSchemaAsDataUri(schema: CaseWaveGraphSchema): string {
  const json = exportSchemaAsJson(schema);
  return `data:application/json;charset=utf-8,${encodeURIComponent(json)}`;
}

export function createSchemaDownloadName(prefix = "casewave-graph"): string {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  return `${prefix}-${stamp}.json`;
}

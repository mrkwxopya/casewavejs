import type {
  CaseWaveLayoutAdapter,
  CaseWaveLayoutOptions,
  CaseWaveLayoutResult
} from "./types";
import type { CaseWaveGraphSchema } from "@casewavejs/core";

export function gridLayout(
  schema: CaseWaveGraphSchema,
  options: CaseWaveLayoutOptions = {}
): CaseWaveLayoutResult {
  const startX = options.startX ?? 80;
  const startY = options.startY ?? 80;
  const gapX = options.gapX ?? 260;
  const gapY = options.gapY ?? 160;
  const columns = options.columns ?? Math.ceil(Math.sqrt(schema.nodes.length));

  const positions: Record<string, { x: number; y: number }> = {};

  schema.nodes.forEach((node, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);

    positions[node.id] = {
      x: startX + col * gapX,
      y: startY + row * gapY
    };
  });

  return {
    positions,
    metadata: {
      layout: "grid",
      columns
    }
  };
}

export const gridLayoutAdapter: CaseWaveLayoutAdapter = {
  id: "grid",
  name: "Grid Layout",
  layout: gridLayout
};





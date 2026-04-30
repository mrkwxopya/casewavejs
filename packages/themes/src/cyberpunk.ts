import type { CaseWaveTheme } from "@casewave/react";

export const caseWaveCyberpunkTheme: CaseWaveTheme = {
  name: "cyberpunk",

  canvasBackground: "#080012",
  gridColor: "rgba(236,72,153,0.16)",

  nodeBackground: "#14001f",
  nodeSelectedBackground: "#2e064d",
  nodeBorder: "1px solid rgba(217,70,239,0.38)",
  nodeSelectedBorder: "2px solid #22d3ee",
  nodeText: "#fdf4ff",

  groupBackground: "rgba(88,28,135,0.28)",
  groupBorder: "1px dashed rgba(34,211,238,0.45)",

  edgeStroke: "rgba(236,72,153,0.62)",
  edgeSelectedStroke: "#22d3ee",
  edgePreviewStroke: "#22d3ee",

  handleBackground: "#ec4899",
  handleBorder: "2px solid #080012",

  panelBackground: "#120018",
  panelBorder: "1px solid rgba(34,211,238,0.35)",
  panelText: "#fdf4ff",

  accent: "#22d3ee",
  danger: "#fb7185",
  warning: "#facc15"
};

import type { CaseWaveTheme } from "@casewavejs/react";

export const caseWaveDarkTheme: CaseWaveTheme = {
  name: "dark",

  canvasBackground: "#0f1117",
  gridColor: "rgba(255,255,255,0.06)",

  nodeBackground: "#181b24",
  nodeSelectedBackground: "#1e293b",
  nodeBorder: "1px solid rgba(255,255,255,0.12)",
  nodeSelectedBorder: "2px solid #60a5fa",
  nodeText: "#ffffff",

  groupBackground: "rgba(30,41,59,0.22)",
  groupBorder: "1px dashed rgba(255,255,255,0.22)",

  edgeStroke: "rgba(255,255,255,0.45)",
  edgeSelectedStroke: "#60a5fa",
  edgePreviewStroke: "#60a5fa",

  handleBackground: "#60a5fa",
  handleBorder: "2px solid #0f1117",

  panelBackground: "#111827",
  panelBorder: "1px solid rgba(255,255,255,0.12)",
  panelText: "#ffffff",

  accent: "#60a5fa",
  danger: "#f87171",
  warning: "#facc15"
};


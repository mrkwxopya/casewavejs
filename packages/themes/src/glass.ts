import type { CaseWaveTheme } from "@casewavejs/react";

export const caseWaveGlassTheme: CaseWaveTheme = {
  name: "glass",

  canvasBackground: "#0f172a",
  gridColor: "rgba(226,232,240,0.08)",

  nodeBackground: "rgba(255,255,255,0.12)",
  nodeSelectedBackground: "rgba(59,130,246,0.22)",
  nodeBorder: "1px solid rgba(255,255,255,0.22)",
  nodeSelectedBorder: "2px solid rgba(147,197,253,0.9)",
  nodeText: "#f8fafc",

  groupBackground: "rgba(255,255,255,0.08)",
  groupBorder: "1px dashed rgba(255,255,255,0.28)",

  edgeStroke: "rgba(226,232,240,0.48)",
  edgeSelectedStroke: "#93c5fd",
  edgePreviewStroke: "#93c5fd",

  handleBackground: "#93c5fd",
  handleBorder: "2px solid rgba(15,23,42,0.85)",

  panelBackground: "rgba(15,23,42,0.82)",
  panelBorder: "1px solid rgba(255,255,255,0.18)",
  panelText: "#f8fafc",

  accent: "#93c5fd",
  danger: "#fb7185",
  warning: "#facc15"
};


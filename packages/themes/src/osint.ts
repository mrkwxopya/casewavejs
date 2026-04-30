import type { CaseWaveTheme } from "@casewave/react";

export const caseWaveOSINTTheme: CaseWaveTheme = {
  name: "osint",

  canvasBackground: "#08131d",
  gridColor: "rgba(96,165,250,0.07)",

  nodeBackground: "#10243d",
  nodeSelectedBackground: "#1d4ed8",
  nodeBorder: "1px solid rgba(96,165,250,0.22)",
  nodeSelectedBorder: "2px solid #60a5fa",
  nodeText: "#eff6ff",

  groupBackground: "rgba(30,64,175,0.18)",
  groupBorder: "1px dashed rgba(96,165,250,0.30)",

  edgeStroke: "rgba(96,165,250,0.44)",
  edgeSelectedStroke: "#93c5fd",
  edgePreviewStroke: "#93c5fd",

  handleBackground: "#60a5fa",
  handleBorder: "2px solid #08131d",

  panelBackground: "#0b1a2a",
  panelBorder: "1px solid rgba(96,165,250,0.14)",
  panelText: "#eff6ff",

  accent: "#60a5fa",
  danger: "#ef4444",
  warning: "#f59e0b"
};

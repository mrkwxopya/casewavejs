import type { CaseWaveTheme } from "@casewave/react";

export const caseWaveInterpolTheme: CaseWaveTheme = {
  name: "interpol",

  canvasBackground: "#08111d",
  gridColor: "rgba(147,197,253,0.08)",

  nodeBackground: "#10243d",
  nodeSelectedBackground: "#1d4ed8",
  nodeBorder: "1px solid rgba(147,197,253,0.24)",
  nodeSelectedBorder: "2px solid #93c5fd",
  nodeText: "#eff6ff",

  groupBackground: "rgba(30,64,175,0.18)",
  groupBorder: "1px dashed rgba(147,197,253,0.34)",

  edgeStroke: "rgba(147,197,253,0.50)",
  edgeSelectedStroke: "#bfdbfe",
  edgePreviewStroke: "#bfdbfe",

  handleBackground: "#93c5fd",
  handleBorder: "2px solid #08111d",

  panelBackground: "#0b1a2a",
  panelBorder: "1px solid rgba(147,197,253,0.16)",
  panelText: "#eff6ff",

  accent: "#93c5fd",
  danger: "#ef4444",
  warning: "#f59e0b"
};

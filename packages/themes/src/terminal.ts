import type { CaseWaveTheme } from "@casewave/react";

export const caseWaveTerminalTheme: CaseWaveTheme = {
  name: "terminal",

  canvasBackground: "#020403",
  gridColor: "rgba(34,197,94,0.10)",

  nodeBackground: "#06110b",
  nodeSelectedBackground: "#052e16",
  nodeBorder: "1px solid rgba(34,197,94,0.28)",
  nodeSelectedBorder: "2px solid #22c55e",
  nodeText: "#bbf7d0",

  groupBackground: "rgba(20,83,45,0.18)",
  groupBorder: "1px dashed rgba(34,197,94,0.38)",

  edgeStroke: "rgba(34,197,94,0.55)",
  edgeSelectedStroke: "#86efac",
  edgePreviewStroke: "#86efac",

  handleBackground: "#22c55e",
  handleBorder: "2px solid #020403",

  panelBackground: "#030a06",
  panelBorder: "1px solid rgba(34,197,94,0.28)",
  panelText: "#bbf7d0",

  accent: "#22c55e",
  danger: "#ef4444",
  warning: "#eab308"
};

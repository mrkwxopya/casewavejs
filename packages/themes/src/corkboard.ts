import type { CaseWaveTheme } from "@casewave/react";

export const caseWaveCorkboardTheme: CaseWaveTheme = {
  name: "corkboard",

  canvasBackground: "#7b5a3a",
  gridColor: "rgba(255,248,220,0.03)",

  nodeBackground: "#fff8dc",
  nodeSelectedBackground: "#fff1bf",
  nodeBorder: "1px solid rgba(82,52,28,0.22)",
  nodeSelectedBorder: "2px solid #92400e",
  nodeText: "#2b1d13",

  groupBackground: "rgba(146,64,14,0.16)",
  groupBorder: "1px dashed rgba(120,53,15,0.30)",

  edgeStroke: "rgba(120,53,15,0.48)",
  edgeSelectedStroke: "#b45309",
  edgePreviewStroke: "#b45309",

  handleBackground: "#92400e",
  handleBorder: "2px solid #fff8dc",

  panelBackground: "#f2e6c5",
  panelBorder: "1px solid rgba(82,52,28,0.16)",
  panelText: "#2b1d13",

  accent: "#92400e",
  danger: "#b91c1c",
  warning: "#d97706"
};

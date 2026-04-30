import type { CaseWaveTheme } from "@casewave/react";

export const caseWaveBlueprintPaperTheme: CaseWaveTheme = {
  name: "blueprint-paper",

  canvasBackground: "#12385d",
  gridColor: "rgba(219,234,254,0.14)",

  nodeBackground: "#1d4b78",
  nodeSelectedBackground: "#2563eb",
  nodeBorder: "1px solid rgba(219,234,254,0.28)",
  nodeSelectedBorder: "2px solid #dbeafe",
  nodeText: "#eff6ff",

  groupBackground: "rgba(30,64,175,0.18)",
  groupBorder: "1px dashed rgba(219,234,254,0.34)",

  edgeStroke: "rgba(219,234,254,0.52)",
  edgeSelectedStroke: "#ffffff",
  edgePreviewStroke: "#ffffff",

  handleBackground: "#dbeafe",
  handleBorder: "2px solid #12385d",

  panelBackground: "#174166",
  panelBorder: "1px solid rgba(219,234,254,0.18)",
  panelText: "#eff6ff",

  accent: "#dbeafe",
  danger: "#ef4444",
  warning: "#fde68a"
};

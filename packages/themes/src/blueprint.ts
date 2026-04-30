import type { CaseWaveTheme } from "@casewave/react";

export const caseWaveBlueprintTheme: CaseWaveTheme = {
  name: "blueprint",

  canvasBackground: "#0b2a4a",
  gridColor: "rgba(191,219,254,0.18)",

  nodeBackground: "#123b63",
  nodeSelectedBackground: "#1d4ed8",
  nodeBorder: "1px solid rgba(191,219,254,0.32)",
  nodeSelectedBorder: "2px solid #bfdbfe",
  nodeText: "#eff6ff",

  groupBackground: "rgba(30,64,175,0.26)",
  groupBorder: "1px dashed rgba(191,219,254,0.45)",

  edgeStroke: "rgba(219,234,254,0.58)",
  edgeSelectedStroke: "#bfdbfe",
  edgePreviewStroke: "#bfdbfe",

  handleBackground: "#bfdbfe",
  handleBorder: "2px solid #0b2a4a",

  panelBackground: "#0f3358",
  panelBorder: "1px solid rgba(191,219,254,0.28)",
  panelText: "#eff6ff",

  accent: "#bfdbfe",
  danger: "#f87171",
  warning: "#fde68a"
};

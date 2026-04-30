import type { CaseWaveTheme } from "@casewave/react";

export const caseWaveWarRoomTheme: CaseWaveTheme = {
  name: "war-room",

  canvasBackground: "#111111",
  gridColor: "rgba(245,158,11,0.08)",

  nodeBackground: "#1f1f1f",
  nodeSelectedBackground: "#422006",
  nodeBorder: "1px solid rgba(245,158,11,0.24)",
  nodeSelectedBorder: "2px solid #f59e0b",
  nodeText: "#fef3c7",

  groupBackground: "rgba(120,53,15,0.18)",
  groupBorder: "1px dashed rgba(245,158,11,0.34)",

  edgeStroke: "rgba(245,158,11,0.50)",
  edgeSelectedStroke: "#fbbf24",
  edgePreviewStroke: "#fbbf24",

  handleBackground: "#f59e0b",
  handleBorder: "2px solid #111111",

  panelBackground: "#171717",
  panelBorder: "1px solid rgba(245,158,11,0.16)",
  panelText: "#fef3c7",

  accent: "#f59e0b",
  danger: "#ef4444",
  warning: "#facc15"
};

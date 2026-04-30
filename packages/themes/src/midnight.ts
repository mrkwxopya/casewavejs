import type { CaseWaveTheme } from "@casewave/react";

export const caseWaveMidnightTheme: CaseWaveTheme = {
  name: "midnight",

  canvasBackground: "#020617",
  gridColor: "rgba(148,163,184,0.12)",

  nodeBackground: "#0f172a",
  nodeSelectedBackground: "#172554",
  nodeBorder: "1px solid rgba(148,163,184,0.22)",
  nodeSelectedBorder: "2px solid #38bdf8",
  nodeText: "#e5e7eb",

  groupBackground: "rgba(15,23,42,0.48)",
  groupBorder: "1px dashed rgba(148,163,184,0.35)",

  edgeStroke: "rgba(148,163,184,0.58)",
  edgeSelectedStroke: "#38bdf8",
  edgePreviewStroke: "#38bdf8",

  handleBackground: "#38bdf8",
  handleBorder: "2px solid #020617",

  panelBackground: "#020617",
  panelBorder: "1px solid rgba(148,163,184,0.22)",
  panelText: "#f8fafc",

  accent: "#38bdf8",
  danger: "#fb7185",
  warning: "#facc15"
};

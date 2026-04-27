import fs from "node:fs";

const checks = [
  {
    file: "packages/core/dist/index.d.ts",
    symbols: [
      "CaseWaveGraph",
      "CaseWaveGraphSchema",
      "CaseWaveNode",
      "CaseWaveEdge",
      "CaseWaveEventBus",
      "CaseWaveHistory"
    ]
  },
  {
    file: "packages/react/dist/index.d.ts",
    symbols: [
      "CaseWaveProvider",
      "CaseWaveCanvas",
      "CaseWaveCanvasProps",
      "CaseWaveMinimap",
      "CaseWaveCommandPalette",
      "CaseWaveTheme"
    ]
  },
  {
    file: "packages/layout/dist/index.d.ts",
    symbols: [
      "CaseWaveLayoutAdapter",
      "gridLayout",
      "dagLayout",
      "CaseWaveLayoutRegistry"
    ]
  },
  {
    file: "packages/themes/dist/index.d.ts",
    symbols: [
      "caseWaveMidnightTheme",
      "caseWaveEvidenceTheme",
      "caseWaveThemePresets"
    ]
  }
];

for (const check of checks) {
  const content = fs.readFileSync(check.file, "utf8");

  for (const symbol of check.symbols) {
    if (!content.includes(symbol)) {
      throw new Error(`${check.file} missing public symbol: ${symbol}`);
    }
  }
}

console.log("API surface OK.");

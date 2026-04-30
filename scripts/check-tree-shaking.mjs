import fs from "node:fs";

const checks = [
  {
    file: "packages/core/dist/index.js",
    mustContain: ["CaseWaveGraph"],
    mustNotContain: ["react"]
  },
  {
    file: "packages/layout/dist/index.js",
    mustContain: ["gridLayout", "dagLayout"],
    mustNotContain: ["react"]
  },
  {
    file: "packages/themes/dist/index.js",
    mustContain: ["caseWaveMidnightTheme"],
    mustNotContain: ["react-dom"]
  }
];

for (const check of checks) {
  const content = fs.readFileSync(check.file, "utf8");

  for (const text of check.mustContain) {
    if (!content.includes(text)) {
      throw new Error(`${check.file} missing expected text: ${text}`);
    }
  }

  for (const text of check.mustNotContain) {
    if (content.includes(text)) {
      throw new Error(`${check.file} unexpectedly contains: ${text}`);
    }
  }
}

console.log("Tree-shaking smoke check OK.");



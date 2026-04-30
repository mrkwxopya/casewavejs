import fs from "node:fs";

const requiredFiles = [
  "ALPHA_FREEZE.md",
  "README.md",
  "packages/core/src/index.ts",
  "packages/react/src/index.ts",
  "packages/layout/src/index.ts",
  "packages/plugins/src/index.ts",
  "packages/devtools/src/index.ts",
  "packages/collaboration/src/index.ts",
  "packages/themes/src/index.ts",
  "tests/smoke.mjs",
  "tests/migration-test.mjs",
  "tests/recovery-test.mjs",
  "scripts/check-api-surface.mjs",
  "scripts/check-package-consistency.mjs",
  "scripts/check-import-boundaries.mjs"
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    throw new Error(`Alpha freeze missing file: ${file}`);
  }
}

console.log("Alpha freeze file checklist OK.");



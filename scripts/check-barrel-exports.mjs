import fs from "node:fs";

const barrelFiles = [
  "packages/core/src/index.ts",
  "packages/react/src/index.ts",
  "packages/layout/src/index.ts",
  "packages/plugins/src/index.ts",
  "packages/devtools/src/index.ts",
  "packages/collaboration/src/index.ts",
  "packages/themes/src/index.ts"
];

for (const file of barrelFiles) {
  const content = fs.readFileSync(file, "utf8");

  const exports = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("export "));

  const seen = new Set();

  for (const line of exports) {
    if (seen.has(line)) {
      throw new Error(`Duplicate export in ${file}: ${line}`);
    }

    seen.add(line);
  }
}

console.log("Barrel export duplicate check OK.");

import fs from "node:fs";
import path from "node:path";

const roots = [
  "packages/core/src",
  "packages/react/src",
  "packages/layout/src",
  "packages/plugins/src",
  "packages/devtools/src",
  "packages/collaboration/src",
  "packages/themes/src"
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
      files.push(full);
    }
  }

  return files;
}

const markers = ["TODO", "FIXME", "HACK", "XXX"];

for (const root of roots) {
  for (const file of walk(root)) {
    const content = fs.readFileSync(file, "utf8");

    for (const marker of markers) {
      if (content.includes(marker)) {
        throw new Error(`Forbidden marker ${marker} found in ${file}`);
      }
    }
  }
}

console.log("TODO/FIXME source check OK.");



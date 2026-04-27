import fs from "node:fs";
import path from "node:path";

const roots = [
  ".",
  "packages",
  "examples",
  "fixtures"
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (
      entry.name === "node_modules" ||
      entry.name === "dist" ||
      entry.name === ".git"
    ) {
      continue;
    }

    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(full);
    }
  }

  return files;
}

const seen = new Set();

for (const root of roots) {
  for (const file of walk(root)) {
    const normalized = file.replaceAll("\\", "/");

    if (seen.has(normalized)) continue;
    seen.add(normalized);

    try {
      JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (error) {
      throw new Error(`Invalid JSON file: ${normalized}\n${error.message}`);
    }
  }
}

console.log("JSON validity check OK.");

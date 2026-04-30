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

const forbidden = [
  {
    from: "packages/core/src",
    patterns: [
      "@casewavejs/react",
      "@casewavejs/layout",
      "@casewavejs/plugins",
      "@casewavejs/devtools",
      "@casewavejs/collaboration",
      "@casewavejs/themes"
    ]
  },
  {
    from: "packages/layout/src",
    patterns: [
      "@casewavejs/react"
    ]
  },
  {
    from: "packages/themes/src",
    patterns: [
      "@casewavejs/core"
    ]
  }
];

function walk(dir) {
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

for (const root of roots) {
  if (!fs.existsSync(root)) continue;

  for (const file of walk(root)) {
    const normalized = file.replaceAll("\\", "/");
    const content = fs.readFileSync(file, "utf8");

    for (const rule of forbidden) {
      if (!normalized.startsWith(rule.from)) continue;

      for (const pattern of rule.patterns) {
        if (content.includes(pattern)) {
          throw new Error(`Forbidden import "${pattern}" found in ${normalized}`);
        }
      }
    }
  }
}

console.log("Import boundary check OK.");



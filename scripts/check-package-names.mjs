import fs from "node:fs";

const files = [
  "package.json",
  "packages/core/package.json",
  "packages/react/package.json",
  "packages/layout/package.json",
  "packages/plugins/package.json",
  "packages/devtools/package.json",
  "packages/collaboration/package.json",
  "packages/themes/package.json",
  "examples/basic/package.json"
];

const names = new Map();

for (const file of files) {
  const pkg = JSON.parse(fs.readFileSync(file, "utf8"));

  if (!pkg.name) {
    throw new Error(`${file} missing name`);
  }

  if (names.has(pkg.name)) {
    throw new Error(`Duplicate package name: ${pkg.name}`);
  }

  names.set(pkg.name, file);
}

console.log("Package name collision check OK.");



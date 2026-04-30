import fs from "node:fs";

const packageFiles = [
  "packages/core/package.json",
  "packages/react/package.json",
  "packages/layout/package.json",
  "packages/plugins/package.json",
  "packages/devtools/package.json",
  "packages/collaboration/package.json",
  "packages/themes/package.json"
];

for (const file of packageFiles) {
  const pkg = JSON.parse(fs.readFileSync(file, "utf8"));

  const requiredFields = [
    "name",
    "version",
    "description",
    "author",
    "license",
    "type",
    "main",
    "module",
    "types",
    "exports",
    "scripts",
    "files"
  ];

  for (const field of requiredFields) {
    if (pkg[field] === undefined) {
      throw new Error(`${pkg.name ?? file} missing package field: ${field}`);
    }
  }

  if (pkg.type !== "module") {
    throw new Error(`${pkg.name} must use type=module`);
  }

  if (pkg.license !== "MIT") {
    throw new Error(`${pkg.name} must use MIT license`);
  }
}

console.log("Package JSON health check OK.");



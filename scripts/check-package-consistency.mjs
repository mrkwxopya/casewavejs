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

  if (pkg.version !== "0.1.0") {
    throw new Error(`${pkg.name} version must be 0.1.0`);
  }

  for (const field of ["dependencies", "peerDependencies"]) {
    const deps = pkg[field] ?? {};

    for (const [name, version] of Object.entries(deps)) {
      if (name.startsWith("@casewave/") && version !== "0.1.0") {
        throw new Error(`${pkg.name} ${field}.${name} must be 0.1.0`);
      }
    }
  }
}

console.log("Package dependency consistency OK.");

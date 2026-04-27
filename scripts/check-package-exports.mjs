import fs from "node:fs";

const packages = [
  "core",
  "react",
  "layout",
  "plugins",
  "devtools",
  "collaboration",
  "themes"
];

for (const name of packages) {
  const pkgPath = `packages/${name}/package.json`;
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

  if (!pkg.exports?.["."]?.types) {
    throw new Error(`${pkg.name} missing exports.types`);
  }

  if (!pkg.exports?.["."]?.import) {
    throw new Error(`${pkg.name} missing exports.import`);
  }

  if (!pkg.exports?.["."]?.require) {
    throw new Error(`${pkg.name} missing exports.require`);
  }

  if (!Array.isArray(pkg.files) || !pkg.files.includes("dist")) {
    throw new Error(`${pkg.name} missing files dist`);
  }
}

console.log("Package export metadata OK.");

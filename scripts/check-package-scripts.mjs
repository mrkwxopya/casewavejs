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
  const file = `packages/${name}/package.json`;
  const pkg = JSON.parse(fs.readFileSync(file, "utf8"));

  for (const script of ["build", "typecheck", "clean"]) {
    if (!pkg.scripts?.[script]) {
      throw new Error(`${pkg.name} missing script: ${script}`);
    }
  }
}

console.log("Package scripts check OK.");



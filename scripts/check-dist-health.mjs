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
  const base = `packages/${name}/dist`;

  const required = [
    `${base}/index.js`,
    `${base}/index.cjs`,
    `${base}/index.d.ts`
  ];

  for (const file of required) {
    if (!fs.existsSync(file)) {
      throw new Error(`Missing dist file: ${file}`);
    }

    const stat = fs.statSync(file);

    if (stat.size <= 0) {
      throw new Error(`Empty dist file: ${file}`);
    }
  }
}

console.log("Dist health check OK.");



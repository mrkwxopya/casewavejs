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

const limitsKb = {
  core: 80,
  react: 220,
  layout: 60,
  plugins: 40,
  devtools: 40,
  collaboration: 40,
  themes: 30
};

const results = [];

for (const name of packages) {
  const file = `packages/${name}/dist/index.js`;

  if (!fs.existsSync(file)) {
    throw new Error(`Missing bundle: ${file}`);
  }

  const sizeKb = Math.round(fs.statSync(file).size / 1024);

  results.push({
    package: `@casewavejs/${name}`,
    sizeKb,
    limitKb: limitsKb[name]
  });

  if (sizeKb > limitsKb[name]) {
    throw new Error(
      `Bundle size exceeded for @casewavejs/${name}: ${sizeKb}KB > ${limitsKb[name]}KB`
    );
  }
}

console.table(results);
console.log("Bundle size audit OK.");



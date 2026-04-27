import fs from "node:fs";

const requiredScripts = [
  "typecheck",
  "typecheck:strict",
  "build",
  "check:all",
  "check:health",
  "check:exports",
  "check:api",
  "check:consistency",
  "check:boundaries",
  "check:bundle",
  "check:treeshake",
  "smoke",
  "test:migration",
  "test:recovery",
  "test:snapshot",
  "test:crash",
  "test:clean-room"
];

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

for (const script of requiredScripts) {
  if (!pkg.scripts?.[script]) {
    throw new Error(`Missing required root script: ${script}`);
  }
}

console.log("Final engineering gate OK.");

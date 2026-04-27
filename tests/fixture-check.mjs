import fs from "node:fs";

const raw = fs.readFileSync(
  "./fixtures/investigation-demo.json",
  "utf8"
);

const json = JSON.parse(raw);

if (!Array.isArray(json.nodes)) {
  throw new Error("Fixture invalid: nodes missing");
}

if (!Array.isArray(json.edges)) {
  throw new Error("Fixture invalid: edges missing");
}

console.log("Fixture OK");

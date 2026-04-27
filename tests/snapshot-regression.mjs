import fs from "node:fs";
import {
  parseCaseWaveGraph,
  serializeCaseWaveGraph
} from "../packages/core/dist/index.js";

const raw = fs.readFileSync(
 "./regression/fixtures/graph-regression-a.json",
 "utf8"
);

const graph = parseCaseWaveGraph(raw);

const serialized = serializeCaseWaveGraph(graph);

const reparsed = parseCaseWaveGraph(serialized);

if (
  reparsed.nodes.length !== graph.nodes.length ||
  reparsed.edges.length !== graph.edges.length
){
  throw new Error(
   "Snapshot regression mismatch."
  );
}

console.log(
 "Snapshot regression OK."
);

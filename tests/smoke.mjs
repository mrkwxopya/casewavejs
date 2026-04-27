import { CaseWaveGraph } from "../packages/core/dist/index.js";
import { dagLayout, gridLayout } from "../packages/layout/dist/index.js";
import { createGraphStats } from "../packages/devtools/dist/index.js";
import { caseWaveMidnightTheme } from "../packages/themes/dist/index.js";

const graph = new CaseWaveGraph({
  allowCycles: true,
  hypergraphMode: true
});

graph.addNode({
  id: "a",
  type: "person",
  position: { x: 0, y: 0 }
});

graph.addNode({
  id: "b",
  type: "evidence",
  position: { x: 300, y: 0 }
});

graph.addEdge({
  id: "a_to_b",
  type: "default",
  source: { kind: "node", nodeId: "a" },
  target: { kind: "node", nodeId: "b" },
  direction: "directed",
  routing: "bezier"
});

const schema = graph.toJSON();

if (schema.nodes.length !== 2) {
  throw new Error("Smoke failed: expected 2 nodes.");
}

if (schema.edges.length !== 1) {
  throw new Error("Smoke failed: expected 1 edge.");
}

const dag = dagLayout(schema);
const grid = gridLayout(schema);
const stats = createGraphStats(schema);

if (!dag.positions.a || !dag.positions.b) {
  throw new Error("Smoke failed: DAG layout missing positions.");
}

if (!grid.positions.a || !grid.positions.b) {
  throw new Error("Smoke failed: grid layout missing positions.");
}

if (stats.nodeCount !== 2 || stats.edgeCount !== 1) {
  throw new Error("Smoke failed: stats mismatch.");
}

if (caseWaveMidnightTheme.name !== "midnight") {
  throw new Error("Smoke failed: theme mismatch.");
}

graph.undo();

if (graph.getEdges().length !== 0) {
  throw new Error("Smoke failed: undo did not remove last edge.");
}

graph.redo();

if (graph.getEdges().length !== 1) {
  throw new Error("Smoke failed: redo did not restore edge.");
}

console.log("CaseWave smoke test passed.");

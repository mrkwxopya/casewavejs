import { performance } from "node:perf_hooks";
import { CaseWaveGraph } from "../packages/core/dist/index.js";
import { createGraphStats } from "../packages/devtools/dist/index.js";
import { dagLayout, gridLayout } from "../packages/layout/dist/index.js";

const NODE_COUNT = 5000;
const EDGE_COUNT = 10000;

const graph = new CaseWaveGraph({
  allowCycles: true
});

const start = performance.now();

for (let i = 0; i < NODE_COUNT; i++) {
  graph.addNode({
    id: `node_${i}`,
    type: i % 5 === 0 ? "person" : "entity",
    position: {
      x: (i % 100) * 180,
      y: Math.floor(i / 100) * 120
    }
  });
}

const afterNodes = performance.now();

for (let i = 0; i < EDGE_COUNT; i++) {
  const source = i % NODE_COUNT;
  const target = (i * 13 + 7) % NODE_COUNT;

  if (source === target) continue;

  try {
    graph.addEdge({
      id: `edge_${i}`,
      type: "relation",
      source: {
        kind: "node",
        nodeId: `node_${source}`
      },
      target: {
        kind: "node",
        nodeId: `node_${target}`
      },
      direction: "directed"
    });
  } catch {
    // Some edges may be rejected by validation depending on options.
  }
}

const afterEdges = performance.now();

const schema = graph.toJSON();
const stats = createGraphStats(schema);

const afterStats = performance.now();

gridLayout(schema, {
  columns: 100
});

const afterGrid = performance.now();

dagLayout(schema);

const afterDag = performance.now();

const result = {
  nodeCount: schema.nodes.length,
  edgeCount: schema.edges.length,
  nodeInsertMs: Math.round(afterNodes - start),
  edgeInsertMs: Math.round(afterEdges - afterNodes),
  statsMs: Math.round(afterStats - afterEdges),
  gridLayoutMs: Math.round(afterGrid - afterStats),
  dagLayoutMs: Math.round(afterDag - afterGrid),
  totalMs: Math.round(afterDag - start),
  stats
};

console.log(JSON.stringify(result, null, 2));

if (schema.nodes.length !== NODE_COUNT) {
  throw new Error("Large graph test failed: node count mismatch.");
}

if (schema.edges.length === 0) {
  throw new Error("Large graph test failed: no edges created.");
}



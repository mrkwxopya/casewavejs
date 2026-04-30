import { performance } from "node:perf_hooks";
import { CaseWaveGraph } from "../packages/core/dist/index.js";

const NODE_COUNT = 1000;
const EDGE_COUNT = 2000;

const graph = new CaseWaveGraph({
  allowCycles: true,
  hypergraphMode: true
});

let t0 = performance.now();

for (let i = 0; i < NODE_COUNT; i++) {
  graph.addNode({
    id: `node_${i}`,
    type: "entity",
    position: {
      x: (i % 50) * 180,
      y: Math.floor(i / 50) * 100
    }
  });
}

let t1 = performance.now();

for (let i = 0; i < EDGE_COUNT; i++) {
  const sourceIndex = i % NODE_COUNT;
  const targetIndex = (i * 7) % NODE_COUNT;

  if (sourceIndex === targetIndex) continue;

  graph.addEdge({
    id: `edge_${i}`,
    type: "relation",
    source: {
      kind: "node",
      nodeId: `node_${sourceIndex}`
    },
    target: {
      kind: "node",
      nodeId: `node_${targetIndex}`
    },
    direction: "directed"
  });
}

let t2 = performance.now();

console.log("Nodes:", NODE_COUNT);
console.log("Edges:", graph.getEdges().length);

console.log(
  "Node insert ms:",
  Math.round(t1 - t0)
);

console.log(
  "Edge insert ms:",
  Math.round(t2 - t1)
);

console.log(
  "Total ms:",
  Math.round(t2 - t0)
);



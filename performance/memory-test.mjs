import { CaseWaveGraph } from "../packages/core/dist/index.js";

const graph = new CaseWaveGraph({
  allowCycles: true
});

for (let i = 0; i < 2000; i++) {
  graph.addNode({
    id: `node_${i}`,
    type: "memory-node",
    position: { x: i * 10, y: i * 5 },
    data: {
      label: `Node ${i}`,
      payload: "x".repeat(256)
    }
  });
}

for (let i = 0; i < 3000; i++) {
  const source = i % 2000;
  const target = (i + 1) % 2000;

  graph.addEdge({
    id: `edge_${i}`,
    type: "memory-edge",
    source: { kind: "node", nodeId: `node_${source}` },
    target: { kind: "node", nodeId: `node_${target}` },
    direction: "directed"
  });
}

const before = process.memoryUsage();

const snapshots = [];

for (let i = 0; i < 50; i++) {
  snapshots.push(graph.snapshot({ index: i }));
}

const after = process.memoryUsage();

console.log({
  heapBeforeMb: Math.round(before.heapUsed / 1024 / 1024),
  heapAfterMb: Math.round(after.heapUsed / 1024 / 1024),
  snapshots: snapshots.length
});

if (snapshots.length !== 50) {
  throw new Error("Memory test failed: snapshots missing.");
}



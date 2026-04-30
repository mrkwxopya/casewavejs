import { CaseWaveGraph } from "../packages/core/dist/index.js";

const graph = new CaseWaveGraph({
  allowCycles: true
});

graph.addNode({
  id: "safe_node",
  type: "safe",
  position: { x: 0, y: 0 }
});

let failed = false;

try {
  graph.addNode({
    id: "",
    type: "broken",
    position: { x: 0, y: 0 }
  });
} catch {
  failed = true;
}

if (!failed) {
  throw new Error("Recovery test failed: invalid node was accepted.");
}

if (!graph.getNode("safe_node")) {
  throw new Error("Recovery test failed: existing graph state lost.");
}

console.log("Recovery test passed.");



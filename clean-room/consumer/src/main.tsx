import React from "react";
import { createRoot } from "react-dom/client";
import { CaseWaveGraph } from "@casewave/core";
import { CaseWaveProvider, CaseWaveCanvas } from "@casewave/react";
import { dagLayout } from "@casewave/layout";
import { caseWaveMidnightTheme } from "@casewave/themes";

const graph = new CaseWaveGraph({
  allowCycles: true
});

graph.addNode({
  id: "clean_a",
  type: "node",
  position: { x: 0, y: 0 }
});

graph.addNode({
  id: "clean_b",
  type: "node",
  position: { x: 0, y: 0 }
});

graph.addEdge({
  id: "clean_edge",
  type: "default",
  source: { kind: "node", nodeId: "clean_a" },
  target: { kind: "node", nodeId: "clean_b" },
  direction: "directed"
});

const layout = dagLayout(graph.toJSON());

for (const [nodeId, position] of Object.entries(layout.positions)) {
  graph.updateNode(nodeId, { position });
}

function App() {
  return (
    <CaseWaveProvider graph={graph}>
      <CaseWaveCanvas
        width="100vw"
        height="100vh"
        theme={caseWaveMidnightTheme}
        minimap
        grid
        snapToGrid
      />
    </CaseWaveProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);

# Basic Board

```tsx
import { CaseWaveGraph } from "@casewave/core";
import { CaseWaveProvider, CaseWaveCanvas } from "@casewave/react";

const graph = new CaseWaveGraph({
  allowCycles: true
});

graph.addNode({
  id: "a",
  type: "person",
  position: { x: 100, y: 100 }
});

graph.addNode({
  id: "b",
  type: "evidence",
  position: { x: 400, y: 160 }
});

graph.addEdge({
  id: "a_to_b",
  type: "default",
  source: { kind: "node", nodeId: "a" },
  target: { kind: "node", nodeId: "b" },
  direction: "directed",
  routing: "bezier"
});

export default function App() {
  return (
    <CaseWaveProvider graph={graph}>
      <CaseWaveCanvas width="100vw" height="100vh" minimap grid />
    </CaseWaveProvider>
  );
}
```

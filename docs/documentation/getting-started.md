# Getting Started

## Install

```bash
npm install @casewavejs/core @casewavejs/react
```

Optional packages:

```bash
npm install @casewavejs/layout @casewavejs/themes @casewavejs/plugins @casewavejs/devtools
```

## Create Graph

```ts
import { CaseWaveGraph } from "@casewavejs/core";

const graph = new CaseWaveGraph({
  allowCycles: true,
  hypergraphMode: true
});
```

## Add Nodes

```ts
graph.addNode({
  id: "person_1",
  type: "person",
  position: { x: 100, y: 100 },
  data: {
    name: "Suspect A"
  }
});

graph.addNode({
  id: "evidence_1",
  type: "evidence",
  position: { x: 420, y: 160 },
  data: {
    title: "Evidence File"
  }
});
```

## Add Edge

```ts
graph.addEdge({
  id: "edge_1",
  type: "default",
  source: {
    kind: "node",
    nodeId: "person_1"
  },
  target: {
    kind: "node",
    nodeId: "evidence_1"
  },
  direction: "directed",
  relation: "evidence_of",
  routing: "bezier"
});
```

## Render in React

```tsx
import { CaseWaveProvider, CaseWaveCanvas } from "@casewavejs/react";

export default function App() {
  return (
    <CaseWaveProvider graph={graph}>
      <CaseWaveCanvas
        width="100vw"
        height="100vh"
        grid
        snapToGrid
        minimap
      />
    </CaseWaveProvider>
  );
}
```



# Documentation

CaseWave is a modular node-link graph engine for React.

It is designed for investigation boards, detective boards, evidence boards, knowledge graphs, dependency maps, semantic relationship maps and visual node-link editors.

## Packages

```txt
@casewave/core
@casewave/react
@casewave/layout
@casewave/plugins
@casewave/devtools
@casewave/collaboration
@casewave/themes
```

## Main Concepts

```txt
Node      = A visual or logical graph entity
Edge      = A relationship between nodes
Port      = A connection handle on a node
Graph     = The full node-edge schema
Renderer  = React layer that displays the graph
Plugin    = Extension layer for custom behavior
Theme     = Visual token preset
```

## Quick Start

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
  direction: "directed"
});

export default function App() {
  return (
    <CaseWaveProvider graph={graph}>
      <CaseWaveCanvas width="100vw" height="100vh" grid minimap />
    </CaseWaveProvider>
  );
}
```

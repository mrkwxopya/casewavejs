# Core Engine

Package:

```bash
npm install @casewave/core
```

`@casewave/core` is the headless graph engine. It does not depend on React.

## Create Graph

```ts
import { CaseWaveGraph } from "@casewave/core";

const graph = new CaseWaveGraph({
  allowCycles: true,
  allowDanglingEdges: false,
  hypergraphMode: true,
  readonly: false
});
```

## Add Node

```ts
graph.addNode({
  id: "node_1",
  type: "person",
  position: { x: 100, y: 120 },
  size: { width: 180, height: 90 },
  data: {
    name: "Person A"
  }
});
```

## Update Node

```ts
graph.updateNode("node_1", {
  position: { x: 240, y: 160 },
  locked: true
});
```

## Add Edge

```ts
graph.addEdge({
  id: "edge_1",
  type: "default",
  source: { kind: "node", nodeId: "node_1" },
  target: { kind: "node", nodeId: "node_2" },
  direction: "directed",
  relation: "related",
  routing: "bezier"
});
```

## Snapshot

```ts
const snapshot = graph.snapshot({
  reason: "before user action"
});
```

## Undo / Redo

```ts
graph.undo();
graph.redo();
```

## Export JSON

```ts
const schema = graph.toJSON();
```

## Load JSON

```ts
graph.load(schema);
```

## Validate

```ts
const result = graph.validate();

if (!result.valid) {
  console.log(result.errors);
}
```

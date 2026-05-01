# Layout

Package:

```bash
npm install @casewavejs/layout
```

## DAG Layout

```ts
import { dagLayout } from "@casewavejs/layout";

const result = dagLayout(graph.toJSON());

for (const [nodeId, position] of Object.entries(result.positions)) {
  graph.updateNode(nodeId, { position });
}
```

## Grid Layout

```ts
import { gridLayout } from "@casewavejs/layout";

const result = gridLayout(graph.toJSON(), {
  columns: 4,
  gapX: 260,
  gapY: 160
});
```






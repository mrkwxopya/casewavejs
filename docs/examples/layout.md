# Layout Example

```ts
import { dagLayout } from "@casewavejs/layout";

const result = dagLayout(graph.toJSON());

for (const [nodeId, position] of Object.entries(result.positions)) {
  graph.updateNode(nodeId, { position });
}
```



# Devtools

Package:

```bash
npm install @casewavejs/devtools
```

## Graph Stats

```ts
import { createGraphStats } from "@casewavejs/devtools";

const stats = createGraphStats(graph.toJSON());

console.log(stats.nodeCount);
console.log(stats.edgeCount);
```

## Export Schema

```ts
import { exportSchemaAsJson } from "@casewavejs/devtools";

const json = exportSchemaAsJson(graph.toJSON());
```



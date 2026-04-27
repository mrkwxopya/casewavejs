# Devtools

Package:

```bash
npm install @casewave/devtools
```

## Graph Stats

```ts
import { createGraphStats } from "@casewave/devtools";

const stats = createGraphStats(graph.toJSON());

console.log(stats.nodeCount);
console.log(stats.edgeCount);
```

## Export Schema

```ts
import { exportSchemaAsJson } from "@casewave/devtools";

const json = exportSchemaAsJson(graph.toJSON());
```

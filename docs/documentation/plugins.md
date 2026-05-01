# Plugins

Package:

```bash
npm install @casewavejs/plugins
```

Plugins extend CaseWave behavior.

## Logger Plugin

```ts
import { createLoggerPlugin } from "@casewavejs/plugins";

const plugins = [
  createLoggerPlugin({
    prefix: "[CaseWave]",
    enabled: true
  })
];
```

## Custom Plugin

```ts
const plugin = {
  id: "custom.plugin",
  name: "Custom Plugin",

  setup(context) {
    console.log("plugin mounted", context.getSchema());

    return () => {
      console.log("plugin disposed");
    };
  },

  onSelectionChange(selection) {
    console.log(selection);
  },

  onSchemaChange(schema) {
    console.log(schema.nodes.length);
  }
};
```

## Plugin Context

```ts
context.getSchema();
context.getSelection();
context.updateNode(id, patch);
context.updateEdge(id, patch);
context.removeNode(id);
context.removeEdge(id);
```






import {
  createDefaultMigrationRegistry,
  parseAndMigrateCaseWaveGraph
} from "../packages/core/dist/index.js";

const registry = createDefaultMigrationRegistry();

registry.register({
  from: "0.0.1",
  to: "0.1.0",
  migrate(schema) {
    return {
      ...schema,
      version: "0.1.0",
      metadata: {
        ...(schema.metadata ?? {}),
        migrated: true
      }
    };
  }
});

const oldGraph = JSON.stringify({
  version: "0.0.1",
  nodes: [],
  edges: []
});

const migrated = parseAndMigrateCaseWaveGraph(
  oldGraph,
  "0.1.0",
  registry
);

if (migrated.version !== "0.1.0") {
  throw new Error("Migration failed: version mismatch.");
}

if (migrated.metadata?.migrated !== true) {
  throw new Error("Migration failed: metadata missing.");
}

console.log("Migration test passed.");



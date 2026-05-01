import type { CaseWavePlugin } from "@casewavejs/react";

export interface CaseWaveLoggerPluginOptions {
  prefix?: string;
  enabled?: boolean;
}

export function createLoggerPlugin(
  options: CaseWaveLoggerPluginOptions = {}
): CaseWavePlugin {
  const prefix = options.prefix ?? "[CaseWave]";
  const enabled = options.enabled ?? true;

  return {
    id: "casewave.logger",
    name: "CaseWave Logger Plugin",
    version: "0.1.0",

    setup() {
      if (!enabled) return;

      console.log(`${prefix} logger plugin mounted`);

      return () => {
        console.log(`${prefix} logger plugin disposed`);
      };
    },

    onSchemaChange(schema) {
      if (!enabled) return;

      console.log(`${prefix} schema changed`, {
        nodes: schema.nodes.length,
        edges: schema.edges.length
      });
    },

    onSelectionChange(selection) {
      if (!enabled) return;

      console.log(`${prefix} selection changed`, selection);
    }
  };
}





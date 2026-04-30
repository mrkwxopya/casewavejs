import type { CaseWaveGraphSchema, CaseWaveSelection } from "@casewavejs/core";
import type { CaseWavePlugin, CaseWavePluginContext } from "./pluginTypes";

export class CaseWavePluginRuntime {
  private plugins = new Map<string, CaseWavePlugin>();
  private cleanups = new Map<string, () => void>();

  constructor(private context: CaseWavePluginContext) {}

  register(plugin: CaseWavePlugin): void {
    if (this.plugins.has(plugin.id)) {
      throw new Error(`CaseWave plugin already registered: ${plugin.id}`);
    }

    this.plugins.set(plugin.id, plugin);

    const cleanup = plugin.setup?.(this.context);

    if (typeof cleanup === "function") {
      this.cleanups.set(plugin.id, cleanup);
    }
  }

  unregister(pluginId: string): void {
    this.cleanups.get(pluginId)?.();
    this.cleanups.delete(pluginId);
    this.plugins.delete(pluginId);
  }

  list(): CaseWavePlugin[] {
    return Array.from(this.plugins.values());
  }

  emitSchemaChange(schema: CaseWaveGraphSchema): void {
    for (const plugin of this.plugins.values()) {
      plugin.onSchemaChange?.(schema, this.context);
    }
  }

  emitSelectionChange(selection: CaseWaveSelection): void {
    for (const plugin of this.plugins.values()) {
      plugin.onSelectionChange?.(selection, this.context);
    }
  }

  dispose(): void {
    for (const cleanup of this.cleanups.values()) {
      cleanup();
    }

    this.cleanups.clear();
    this.plugins.clear();
  }
}



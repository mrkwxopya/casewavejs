import type { CaseWaveLayoutAdapter } from "./types";
import { dagLayoutAdapter } from "./dag";
import { gridLayoutAdapter } from "./grid";

export class CaseWaveLayoutRegistry {
  private adapters = new Map<string, CaseWaveLayoutAdapter>();

  register(adapter: CaseWaveLayoutAdapter): void {
    if (this.adapters.has(adapter.id)) {
      throw new Error(`Layout adapter already exists: ${adapter.id}`);
    }

    this.adapters.set(adapter.id, adapter);
  }

  upsert(adapter: CaseWaveLayoutAdapter): void {
    this.adapters.set(adapter.id, adapter);
  }

  get(id: string): CaseWaveLayoutAdapter | undefined {
    return this.adapters.get(id);
  }

  has(id: string): boolean {
    return this.adapters.has(id);
  }

  remove(id: string): boolean {
    return this.adapters.delete(id);
  }

  list(): CaseWaveLayoutAdapter[] {
    return Array.from(this.adapters.values());
  }

  clear(): void {
    this.adapters.clear();
  }
}

export function createDefaultLayoutRegistry(): CaseWaveLayoutRegistry {
  const registry = new CaseWaveLayoutRegistry();

  registry.register(gridLayoutAdapter);
  registry.register(dagLayoutAdapter);

  return registry;
}





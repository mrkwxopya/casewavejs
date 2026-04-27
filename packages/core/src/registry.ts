import type { CaseWaveDictionary } from "./types";

export interface CaseWaveRegistryItem {
  type: string;
  label?: string;
  description?: string;
  metadata?: CaseWaveDictionary;
}

export interface CaseWaveNodeDefinition<TData = CaseWaveDictionary>
  extends CaseWaveRegistryItem {
  defaultData?: TData;
  defaultWidth?: number;
  defaultHeight?: number;
  allowedPorts?: string[];
  tags?: string[];
}

export interface CaseWaveEdgeDefinition<TData = CaseWaveDictionary>
  extends CaseWaveRegistryItem {
  defaultData?: TData;
  defaultDirection?: "directed" | "undirected";
  defaultRelation?: string;
  defaultRouting?: "straight" | "bezier" | "orthogonal" | "subway" | "custom";
  tags?: string[];
}

export class CaseWaveRegistry<TItem extends CaseWaveRegistryItem> {
  private items = new Map<string, TItem>();

  register(item: TItem): void {
    if (this.items.has(item.type)) {
      throw new Error(`CaseWave registry item already exists: ${item.type}`);
    }

    this.items.set(item.type, item);
  }

  upsert(item: TItem): void {
    this.items.set(item.type, item);
  }

  get(type: string): TItem | undefined {
    return this.items.get(type);
  }

  has(type: string): boolean {
    return this.items.has(type);
  }

  remove(type: string): boolean {
    return this.items.delete(type);
  }

  list(): TItem[] {
    return Array.from(this.items.values());
  }

  clear(): void {
    this.items.clear();
  }

  size(): number {
    return this.items.size;
  }
}

export class CaseWaveDefinitionRegistry {
  readonly nodes = new CaseWaveRegistry<CaseWaveNodeDefinition>();
  readonly edges = new CaseWaveRegistry<CaseWaveEdgeDefinition>();

  clear(): void {
    this.nodes.clear();
    this.edges.clear();
  }
}

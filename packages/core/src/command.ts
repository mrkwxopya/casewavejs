import type { CaseWaveGraph } from "./graph";
import type { CaseWaveGraphSchema } from "./types";

export interface CaseWaveCommandContext {
  graph: CaseWaveGraph;
  before: CaseWaveGraphSchema;
}

export interface CaseWaveCommandResult {
  label?: string;
  metadata?: Record<string, unknown>;
}

export interface CaseWaveCommand {
  id: string;
  label?: string;
  execute(context: CaseWaveCommandContext): CaseWaveCommandResult | void;
}

export class CaseWaveCommandBus {
  private commands = new Map<string, CaseWaveCommand>();

  register(command: CaseWaveCommand): void {
    if (this.commands.has(command.id)) {
      throw new Error(`Command already exists: ${command.id}`);
    }

    this.commands.set(command.id, command);
  }

  upsert(command: CaseWaveCommand): void {
    this.commands.set(command.id, command);
  }

  get(id: string): CaseWaveCommand | undefined {
    return this.commands.get(id);
  }

  has(id: string): boolean {
    return this.commands.has(id);
  }

  remove(id: string): boolean {
    return this.commands.delete(id);
  }

  list(): CaseWaveCommand[] {
    return Array.from(this.commands.values());
  }

  clear(): void {
    this.commands.clear();
  }
}





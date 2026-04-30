import type { CaseWaveGraphSchema } from "./types";
import { cloneGraphSchema } from "./serializer";

export interface CaseWaveHistoryEntry {
  id: string;
  label?: string;
  createdAt: string;
  before: CaseWaveGraphSchema;
  after: CaseWaveGraphSchema;
  metadata?: Record<string, unknown>;
}

export interface CaseWaveHistoryOptions {
  limit?: number;
}

export class CaseWaveHistory {
  private undoStack: CaseWaveHistoryEntry[] = [];
  private redoStack: CaseWaveHistoryEntry[] = [];

  constructor(private options: CaseWaveHistoryOptions = {}) {}

  push(entry: Omit<CaseWaveHistoryEntry, "id" | "createdAt">): CaseWaveHistoryEntry {
    const fullEntry: CaseWaveHistoryEntry = {
      id: createHistoryEntryId(),
      createdAt: new Date().toISOString(),
      before: cloneGraphSchema(entry.before),
      after: cloneGraphSchema(entry.after),
      label: entry.label,
      metadata: entry.metadata
    };

    this.undoStack.push(fullEntry);
    this.redoStack = [];

    this.trim();

    return fullEntry;
  }

  canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  undo(): CaseWaveHistoryEntry | null {
    const entry = this.undoStack.pop();

    if (!entry) return null;

    this.redoStack.push(entry);

    return entry;
  }

  redo(): CaseWaveHistoryEntry | null {
    const entry = this.redoStack.pop();

    if (!entry) return null;

    this.undoStack.push(entry);

    return entry;
  }

  clear(): void {
    this.undoStack = [];
    this.redoStack = [];
  }

  getUndoStack(): CaseWaveHistoryEntry[] {
    return this.undoStack.map((entry) => ({
      ...entry,
      before: cloneGraphSchema(entry.before),
      after: cloneGraphSchema(entry.after)
    }));
  }

  getRedoStack(): CaseWaveHistoryEntry[] {
    return this.redoStack.map((entry) => ({
      ...entry,
      before: cloneGraphSchema(entry.before),
      after: cloneGraphSchema(entry.after)
    }));
  }

  private trim(): void {
    const limit = this.options.limit ?? 100;

    if (this.undoStack.length > limit) {
      this.undoStack = this.undoStack.slice(this.undoStack.length - limit);
    }
  }
}

export function createHistoryEntryId(): string {
  return `history_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}



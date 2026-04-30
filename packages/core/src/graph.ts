import { validateGraph } from "./constraints";
import { CaseWaveEventBus } from "./events";
import { createSnapshot, type CaseWaveSnapshot } from "./serializer";
import { CaseWaveHistory } from "./history";
import { CaseWaveCommandBus, type CaseWaveCommand } from "./command";
import { invariant } from "./invariant";
import type {
  CaseWaveEdge,
  CaseWaveGraphOptions,
  CaseWaveGraphSchema,
  CaseWaveHyperedge,
  CaseWaveId,
  CaseWaveNode
} from "./types";

export class CaseWaveGraph {
  private nodes = new Map<CaseWaveId, CaseWaveNode>();
  private edges = new Map<CaseWaveId, CaseWaveEdge>();
  private hyperedges = new Map<CaseWaveId, CaseWaveHyperedge>();

  readonly events = new CaseWaveEventBus();
  readonly history = new CaseWaveHistory({ limit: 100 });
  readonly commands = new CaseWaveCommandBus();

  constructor(private options: CaseWaveGraphOptions = {}) {}

  addNode(node: CaseWaveNode): void {
    invariant(node.id, "node.id is required");
    invariant(node.type, "node.type is required");

    this.commit("Add node", () => {
      if (this.nodes.has(node.id)) {
        throw new Error(`Node already exists: ${node.id}`);
      }

      this.nodes.set(node.id, node);
      this.events.emit("node:create", node);
    });
  }

  updateNode(id: CaseWaveId, patch: Partial<CaseWaveNode>): void {
    this.commit("Update node", () => {
      const current = this.nodes.get(id);

      if (!current) {
        throw new Error(`Node not found: ${id}`);
      }

      const next: CaseWaveNode = {
        ...current,
        ...patch,
        id
      };

      this.nodes.set(id, next);
      this.events.emit("node:update", next);
    });
  }

  removeNode(id: CaseWaveId): void {
    this.commit("Remove node", () => {
      if (!this.nodes.has(id)) return;

      this.nodes.delete(id);

      for (const [edgeId, edge] of this.edges) {
        const touchesNode =
          (edge.source.kind === "node" && edge.source.nodeId === id) ||
          (edge.target.kind === "node" && edge.target.nodeId === id);

        if (touchesNode) {
          this.edges.delete(edgeId);
          this.events.emit("edge:delete", { id: edgeId });
        }
      }

      this.events.emit("node:delete", { id });
    });
  }

  addEdge(edge: CaseWaveEdge): void {
    invariant(edge.id, "edge.id is required");
    invariant(edge.type, "edge.type is required");

    this.commit("Add edge", () => {
      if (this.edges.has(edge.id)) {
        throw new Error(`Edge already exists: ${edge.id}`);
      }

      this.edges.set(edge.id, edge);

      const validation = this.validate();

      if (!validation.valid) {
        this.edges.delete(edge.id);
        throw new Error(validation.errors.join("\n"));
      }

      this.events.emit("edge:create", edge);
    });
  }

  updateEdge(id: CaseWaveId, patch: Partial<CaseWaveEdge>): void {
    this.commit("Update edge", () => {
      const current = this.edges.get(id);

      if (!current) {
        throw new Error(`Edge not found: ${id}`);
      }

      const next: CaseWaveEdge = {
        ...current,
        ...patch,
        id
      };

      this.edges.set(id, next);

      const validation = this.validate();

      if (!validation.valid) {
        this.edges.set(id, current);
        throw new Error(validation.errors.join("\n"));
      }

      this.events.emit("edge:update", next);
    });
  }

  removeEdge(id: CaseWaveId): void {
    this.commit("Remove edge", () => {
      if (!this.edges.has(id)) return;

      this.edges.delete(id);
      this.events.emit("edge:delete", { id });
    });
  }

  addHyperedge(hyperedge: CaseWaveHyperedge): void {
    this.commit("Add hyperedge", () => {
      if (!this.options.hypergraphMode) {
        throw new Error("Hypergraph mode is disabled.");
      }

      if (this.hyperedges.has(hyperedge.id)) {
        throw new Error(`Hyperedge already exists: ${hyperedge.id}`);
      }

      this.hyperedges.set(hyperedge.id, hyperedge);
      this.events.emit("hyperedge:create", hyperedge);
    });
  }

  removeHyperedge(id: CaseWaveId): void {
    this.commit("Remove hyperedge", () => {
      if (!this.hyperedges.has(id)) return;

      this.hyperedges.delete(id);
      this.events.emit("hyperedge:delete", { id });
    });
  }

  registerCommand(command: CaseWaveCommand): void {
    this.commands.register(command);
  }

  runCommand(commandId: string): void {
    const command = this.commands.get(commandId);

    if (!command) {
      throw new Error(`Command not found: ${commandId}`);
    }

    this.commit(command.label ?? command.id, () => {
      const before = this.toJSON();

      const result = command.execute({
        graph: this,
        before
      });

      this.events.emit("command:run", {
        commandId,
        result
      });
    });
  }

  undo(): boolean {
    const entry = this.history.undo();

    if (!entry) return false;

    this.load(entry.before, {
      silentHistory: true
    });

    this.events.emit("history:undo", entry);
    return true;
  }

  redo(): boolean {
    const entry = this.history.redo();

    if (!entry) return false;

    this.load(entry.after, {
      silentHistory: true
    });

    this.events.emit("history:redo", entry);
    return true;
  }

  canUndo(): boolean {
    return this.history.canUndo();
  }

  canRedo(): boolean {
    return this.history.canRedo();
  }

  getNode(id: CaseWaveId): CaseWaveNode | undefined {
    return this.nodes.get(id);
  }

  getEdge(id: CaseWaveId): CaseWaveEdge | undefined {
    return this.edges.get(id);
  }

  getHyperedge(id: CaseWaveId): CaseWaveHyperedge | undefined {
    return this.hyperedges.get(id);
  }

  hasNode(id: CaseWaveId): boolean {
    return this.nodes.has(id);
  }

  hasEdge(id: CaseWaveId): boolean {
    return this.edges.has(id);
  }

  getNodes(): CaseWaveNode[] {
    return Array.from(this.nodes.values());
  }

  getEdges(): CaseWaveEdge[] {
    return Array.from(this.edges.values());
  }

  getHyperedges(): CaseWaveHyperedge[] {
    return Array.from(this.hyperedges.values());
  }

  clear(): void {
    this.commit("Clear graph", () => {
      this.nodes.clear();
      this.edges.clear();
      this.hyperedges.clear();
      this.events.emit("graph:clear", {});
    });
  }

  validate() {
    return validateGraph(this.getNodes(), this.getEdges(), this.options);
  }

  toJSON(): CaseWaveGraphSchema {
    return {
      version: "0.1.0",
      nodes: this.getNodes(),
      edges: this.getEdges(),
      hyperedges: this.getHyperedges()
    };
  }

  snapshot(metadata?: Record<string, unknown>): CaseWaveSnapshot {
    return createSnapshot(this.toJSON(), metadata);
  }

  load(
    schema: CaseWaveGraphSchema,
    options: {
      silentHistory?: boolean;
    } = {}
  ): void {
    const before = this.toJSON();

    this.assertWritable();

    this.nodes.clear();
    this.edges.clear();
    this.hyperedges.clear();

    for (const node of schema.nodes) {
      this.nodes.set(node.id, node);
    }

    for (const edge of schema.edges) {
      this.edges.set(edge.id, edge);
    }

    for (const hyperedge of schema.hyperedges ?? []) {
      this.hyperedges.set(hyperedge.id, hyperedge);
    }

    const validation = this.validate();

    if (!validation.valid) {
      this.nodes.clear();
      this.edges.clear();
      this.hyperedges.clear();

      throw new Error(validation.errors.join("\n"));
    }

    if (!options.silentHistory) {
      this.history.push({
        label: "Load graph",
        before,
        after: this.toJSON()
      });
    }

    this.events.emit("graph:load", this.toJSON());
    this.emitGraphChange();
  }

  setOptions(options: Partial<CaseWaveGraphOptions>): void {
    this.options = {
      ...this.options,
      ...options
    };

    this.events.emit("graph:options", this.options);
  }

  getOptions(): CaseWaveGraphOptions {
    return {
      ...this.options
    };
  }

  private commit(label: string, mutation: () => void): void {
    this.assertWritable();

    const before = this.toJSON();

    mutation();

    const after = this.toJSON();

    this.history.push({
      label,
      before,
      after
    });

    this.emitGraphChange();
  }

  private emitGraphChange(): void {
    this.events.emit("graph:change", this.toJSON());
  }

  private assertWritable(): void {
    if (this.options.readonly) {
      throw new Error("Graph is readonly.");
    }
  }
}





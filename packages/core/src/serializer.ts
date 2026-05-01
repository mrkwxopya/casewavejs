import type { CaseWaveGraphSchema } from "./types";
import type { CaseWaveMigrationRegistry } from "./migration";

export interface CaseWaveSnapshot {
  id: string;
  createdAt: string;
  schema: CaseWaveGraphSchema;
  metadata?: Record<string, unknown>;
}

export function serializeCaseWaveGraph(schema: CaseWaveGraphSchema): string {
  return JSON.stringify(schema, null, 2);
}

export function parseCaseWaveGraph(json: string): CaseWaveGraphSchema {
  const parsed = JSON.parse(json) as unknown;

  assertCaseWaveGraphSchema(parsed);

  return parsed;
}

export function parseAndMigrateCaseWaveGraph(
  json: string,
  targetVersion: string,
  migrations: CaseWaveMigrationRegistry
): CaseWaveGraphSchema {
  const schema = parseCaseWaveGraph(json);

  if (schema.version === targetVersion) {
    return schema;
  }

  return migrations.migrate(schema, targetVersion);
}

export function assertCaseWaveGraphSchema(
  value: unknown
): asserts value is CaseWaveGraphSchema {
  if (!value || typeof value !== "object") {
    throw new Error("Invalid CaseWave graph: schema must be an object.");
  }

  const schema = value as Partial<CaseWaveGraphSchema>;

  if (typeof schema.version !== "string") {
    throw new Error("Invalid CaseWave graph: missing version.");
  }

  if (!Array.isArray(schema.nodes)) {
    throw new Error("Invalid CaseWave graph: nodes must be an array.");
  }

  if (!Array.isArray(schema.edges)) {
    throw new Error("Invalid CaseWave graph: edges must be an array.");
  }

  if (
    schema.hyperedges !== undefined &&
    !Array.isArray(schema.hyperedges)
  ) {
    throw new Error("Invalid CaseWave graph: hyperedges must be an array.");
  }
}

export function createSnapshot(
  schema: CaseWaveGraphSchema,
  metadata?: Record<string, unknown>
): CaseWaveSnapshot {
  return {
    id: createSnapshotId(),
    createdAt: new Date().toISOString(),
    schema: cloneGraphSchema(schema),
    metadata
  };
}

export function cloneGraphSchema(
  schema: CaseWaveGraphSchema
): CaseWaveGraphSchema {
  return JSON.parse(JSON.stringify(schema)) as CaseWaveGraphSchema;
}

export function createSnapshotId(): string {
  return `snapshot_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}





import type { CaseWaveGraphSchema } from "./types";

export interface CaseWaveMigration {
  from: string;
  to: string;
  migrate: (schema: CaseWaveGraphSchema) => CaseWaveGraphSchema;
}

export class CaseWaveMigrationRegistry {
  private migrations: CaseWaveMigration[] = [];

  register(migration: CaseWaveMigration): void {
    this.migrations.push(migration);
  }

  migrate(
    schema: CaseWaveGraphSchema,
    targetVersion: string
  ): CaseWaveGraphSchema {
    let current = structuredCloneSchema(schema);

    while (current.version !== targetVersion) {
      const migration = this.migrations.find(
        (item) => item.from === current.version
      );

      if (!migration) {
        throw new Error(
          `No CaseWave migration found from ${current.version} to ${targetVersion}`
        );
      }

      current = migration.migrate(current);
      current.version = migration.to;
    }

    return current;
  }

  list(): CaseWaveMigration[] {
    return [...this.migrations];
  }

  clear(): void {
    this.migrations = [];
  }
}

export function structuredCloneSchema(
  schema: CaseWaveGraphSchema
): CaseWaveGraphSchema {
  return JSON.parse(JSON.stringify(schema)) as CaseWaveGraphSchema;
}

export function createDefaultMigrationRegistry(): CaseWaveMigrationRegistry {
  return new CaseWaveMigrationRegistry();
}



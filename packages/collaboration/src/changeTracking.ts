export type CaseWaveChangeType =
  | "node:create"
  | "node:update"
  | "node:delete"
  | "edge:create"
  | "edge:update"
  | "edge:delete"
  | "graph:load";

export interface CaseWaveChangeRecord {
  id: string;
  type: CaseWaveChangeType;
  userId?: string;
  targetId?: string;
  createdAt: string;
  payload?: unknown;
}

export function createChangeRecord(
  type: CaseWaveChangeType,
  payload?: unknown,
  options: {
    userId?: string;
    targetId?: string;
  } = {}
): CaseWaveChangeRecord {
  return {
    id: `change_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    type,
    userId: options.userId,
    targetId: options.targetId,
    createdAt: new Date().toISOString(),
    payload
  };
}

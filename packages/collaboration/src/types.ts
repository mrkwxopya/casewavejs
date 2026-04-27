export interface CaseWaveUserPresence {
  userId: string;
  name?: string;
  color?: string;
  cursor?: {
    x: number;
    y: number;
  };
  selectedNodeIds?: string[];
  selectedEdgeIds?: string[];
  lastSeenAt: string;
}

export interface CaseWaveCollaborationState {
  sessionId: string;
  localUserId: string;
  users: CaseWaveUserPresence[];
}

export interface CaseWavePresenceUpdate {
  userId: string;
  patch: Partial<Omit<CaseWaveUserPresence, "userId">>;
}

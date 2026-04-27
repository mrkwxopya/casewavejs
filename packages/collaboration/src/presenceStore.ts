import type {
  CaseWaveCollaborationState,
  CaseWavePresenceUpdate,
  CaseWaveUserPresence
} from "./types";

export class CaseWavePresenceStore {
  private users = new Map<string, CaseWaveUserPresence>();

  constructor(
    private sessionId: string,
    private localUserId: string
  ) {}

  upsertUser(user: CaseWaveUserPresence): void {
    this.users.set(user.userId, user);
  }

  updatePresence(update: CaseWavePresenceUpdate): void {
    const current = this.users.get(update.userId) ?? {
      userId: update.userId,
      lastSeenAt: new Date().toISOString()
    };

    this.users.set(update.userId, {
      ...current,
      ...update.patch,
      lastSeenAt: update.patch.lastSeenAt ?? new Date().toISOString()
    });
  }

  removeUser(userId: string): void {
    this.users.delete(userId);
  }

  getUser(userId: string): CaseWaveUserPresence | undefined {
    return this.users.get(userId);
  }

  getUsers(): CaseWaveUserPresence[] {
    return Array.from(this.users.values());
  }

  toJSON(): CaseWaveCollaborationState {
    return {
      sessionId: this.sessionId,
      localUserId: this.localUserId,
      users: this.getUsers()
    };
  }

  clear(): void {
    this.users.clear();
  }
}

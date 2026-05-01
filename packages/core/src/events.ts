export type CaseWaveEventHandler<TPayload = unknown> = (
  payload: TPayload
) => void;

export type CaseWaveUnsubscribe = () => void;

export class CaseWaveEventBus {
  private listeners = new Map<string, Set<CaseWaveEventHandler>>();

  on<TPayload = unknown>(
    eventName: string,
    handler: CaseWaveEventHandler<TPayload>
  ): CaseWaveUnsubscribe {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, new Set());
    }

    this.listeners.get(eventName)!.add(handler as CaseWaveEventHandler);

    return () => {
      this.off(eventName, handler);
    };
  }

  once<TPayload = unknown>(
    eventName: string,
    handler: CaseWaveEventHandler<TPayload>
  ): CaseWaveUnsubscribe {
    const unsubscribe = this.on<TPayload>(eventName, (payload) => {
      unsubscribe();
      handler(payload);
    });

    return unsubscribe;
  }

  off<TPayload = unknown>(
    eventName: string,
    handler: CaseWaveEventHandler<TPayload>
  ): void {
    this.listeners.get(eventName)?.delete(handler as CaseWaveEventHandler);
  }

  emit<TPayload = unknown>(eventName: string, payload: TPayload): void {
    const handlers = this.listeners.get(eventName);

    if (!handlers) return;

    for (const handler of handlers) {
      handler(payload);
    }
  }

  clear(eventName?: string): void {
    if (eventName) {
      this.listeners.delete(eventName);
      return;
    }

    this.listeners.clear();
  }

  listenerCount(eventName: string): number {
    return this.listeners.get(eventName)?.size ?? 0;
  }
}





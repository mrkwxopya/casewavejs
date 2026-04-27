# Collaboration

Package:

```bash
npm install @casewave/collaboration
```

Current collaboration package includes primitives only.

## Presence Store

```ts
import { CaseWavePresenceStore } from "@casewave/collaboration";

const presence = new CaseWavePresenceStore(
  "session_1",
  "user_1"
);

presence.updatePresence({
  userId: "user_1",
  patch: {
    name: "User A",
    cursor: { x: 100, y: 100 }
  }
});
```

Real CRDT collaboration is planned for a later version.

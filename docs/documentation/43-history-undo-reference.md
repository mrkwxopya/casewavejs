# 43. History / Undo Reference

History protects editing.

Enables confidence.

Experiment safely.

Undo everything.

---

# Contents

```txt
History Stack
Transactions
Undo
Redo
Snapshots
Grouping
Persistence
Patterns
```

---

# Core Type

```ts
HistoryManager
```

---

# Basic API

```ts
graph.undo()
graph.redo()
```

---

# Transactions

Group operations.

```ts
history.begin()
history.commit()
```

---

# Example

```ts
history.begin()

moveNode()
editLabel()

history.commit()
```

Single undo.

---

# Stack Model

```txt
undo stack
redo stack
```

---

# Snapshot

```ts
history.snapshot()
```

---

# Auto Recording

Tracks:

```txt
create
delete
move
edit
connect
```

---

# Manual Record

```ts
history.record(...)
```

---

# Limit

```ts
maxHistory:100
```

---

# Clear

```ts
history.clear()
```

---

# Merge Changes

Batch noisy changes.

Good for drag.

---

# Ignore Changes

Possible:

```ts
withoutHistory(()=>{
 ...
})
```

---

# Persist History

Optional.

Restore sessions.

---

# Time Travel

Possible dev feature.

```txt
jump to state
```

---

# History Events

```txt
undo
redo
record
```

---

# Common Patterns

Use transactions for:

```txt
bulk edits
import operations
compound actions
```

---

# Common Mistakes

Avoid:

```txt
recording every tiny drag tick
```

Use batching.

---

# Keyboard

```txt
Ctrl+Z
Ctrl+Shift+Z
```

---

# FAQ

Can undo restore deleted nodes?

Yes.

Can imports be undone?

Yes.

---

# Related Types

```ts
HistoryManager
HistoryEntry
Transaction
```

---

# Source

```txt
packages/core/src/history
```

---

# Summary

History provides:

```txt
safety
reversibility
editing confidence
```

---

# Next

44-serialization-reference.md

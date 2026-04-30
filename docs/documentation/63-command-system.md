# 63. Command System

Commands define user intent.

Events describe what happened.

Different things.

---

# Contents

```txt
Command Philosophy
Command Model
Undo Redo
History
Transactions
Command Safety
```

---

# Why Commands

Commands create:

```txt
reversible actions
auditability
tooling
```

---

# Examples

```txt
AddNode
DeleteEdge
GroupSelection
CollapseCluster
```

---

# Interface

```ts
interface Command {
 execute(): void
 undo(): void
 redo(): void
}
```

---

# Command Stack

Maintain:

```txt
history stack
redo stack
transactions
```

---

# Undo Redo

Critical feature.

Not optional.

---

# Transactions

Batch commands:

```txt
multiple actions
single undo
```

Example:

```txt
paste graph
```

---

# Command Metadata

Useful:

```txt
timestamp
author
source
description
```

---

# Command Registry

Register command types.

Enable plugins too.

---

# Safety

Commands should validate before execute.

Never corrupt graph.

---

# Idempotency

Important for retries.

Especially collaboration systems.

---

# Command Bus

Possible:

```ts
commands.execute(...)
```

---

# Anti Patterns

Avoid:

```txt
mutations outside commands
non-reversible actions
history bypasses
```

---

# FAQ

Commands vs events?

Intent vs occurrence.

Need commands for undo?

Yes.

---

# Source

```txt
packages/core/commands/
```

---

# Summary

Command system gives:

```txt
control
reversibility
editor power
```

---

# Next

64-plugin-lifecycle.md

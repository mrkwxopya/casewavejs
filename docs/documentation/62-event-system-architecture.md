# 62. Event System Architecture

Events are the nervous system.

Everything flows through them.

---

# Contents

```txt
Event Philosophy
Event Types
Dispatch Pipeline
Subscriptions
Propagation
Middleware
Safety
```

---

# Principles

Events must be:

```txt
predictable
traceable
typed
composable
```

---

# Core Event Categories

```txt
graph events
node events
edge events
viewport events
system events
plugin events
```

---

# Examples

```txt
node:selected
node:moved
edge:created
viewport:zoom
```

---

# Typed Events

Prefer:

```ts
type GraphEvent =
 | NodeSelected
 | EdgeCreated
```

Avoid string chaos.

---

# Dispatch Flow

Typical pipeline:

```txt
emit
validate
middleware
dispatch
listeners
```

---

# Event Bus

Possible API:

```ts
events.on()
events.off()
events.emit()
```

---

# Propagation Model

Support:

```txt
capture
bubble
stop propagation
```

For complex interactions.

---

# Middleware

Use for:

```txt
logging
analytics
permission checks
undo capture
```

---

# Event Ordering

Guarantee ordering.

Race conditions kill systems.

---

# Subscription Safety

Prevent:

```txt
leaks
duplicate listeners
stale handlers
```

---

# Debugging Events

Need tracing:

```txt
event logs
timelines
inspectors
```

---

# Anti Patterns

Avoid:

```txt
hidden side effects
global uncontrolled events
untyped payloads
```

---

# FAQ

Can plugins emit events?

Yes.

Can users intercept?

Should be possible.

---

# Source

```txt
packages/core/events/
```

---

# Summary

Event architecture enables:

```txt
reactivity
extensibility
control
```

---

# Next

63-command-system.md




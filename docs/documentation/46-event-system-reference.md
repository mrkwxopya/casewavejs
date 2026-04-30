# 46. Event System Reference

Events power reactivity.

Everything meaningful emits events.

Interaction becomes programmable.

---

# Contents

```txt
Event Architecture
Subscriptions
Emitters
Built-in Events
Payloads
Lifecycle Events
Patterns
```

---

# Core API

```ts
graph.on(...)
graph.off(...)
graph.emit(...)
```

---

# Listen

```ts
graph.on(
 "node:click",
 handler
)
```

---

# Remove

```ts
graph.off(
 "node:click",
 handler
)
```

---

# Emit

```ts
graph.emit(
 "case:revealed"
)
```

---

# Event Pattern

```txt
domain:event
```

Examples:

```txt
node:create
node:move
edge:select
```

---

# Payload Example

```ts
graph.on(
 "node:click",
 (node,event)=>{}
)
```

---

# Core Events

```txt
create
update
delete
select
hover
drag
connect
```

---

# Lifecycle Events

```txt
graph:init
layout:end
render:end
```

---

# Custom Events

```ts
graph.emit(
 "clue:found",
 data
)
```

---

# Once Listener

```ts
graph.once(...)
```

---

# Namespacing

Recommended.

Prevents collisions.

---

# Event Bus

Internal pub/sub possible.

---

# Wildcards

Possible:

```ts
node:*
```

---

# Event Order

Document if sequencing matters.

---

# Unsubscribe

Always cleanup listeners.

Critical.

---

# FAQ

Can plugins use events?

Yes.

Can users emit custom events?

Yes.

---

# Related Types

```ts
EventBus
EventPayload
EventHandler
```

---

# Source

```txt
packages/core/src/events
```

---

# Summary

Events provide:

```txt
reactivity
extensibility
automation
```

---

# Next

47-state-management-reference.md

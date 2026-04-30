# 47. State Management Reference

State drives graph truth.

UI reflects state.

Logic mutates state.

---

# Contents

```txt
State Model
Stores
Mutations
Selectors
Transactions
Persistence
Patterns
```

---

# State Domains

Typical:

```txt
graph state
ui state
selection state
history state
```

---

# Graph State

Contains:

```txt
nodes
edges
metadata
```

---

# Access

```ts
graph.getState()
```

---

# Update

```ts
graph.setState(...)
```

---

# Mutation

```ts
graph.updateState(...)
```

---

# Selectors

Read derived state.

```ts
getSelectedNodes()
```

---

# Immutable Patterns

Recommended.

Predictable behavior.

---

# Transactions

Batch mutations.

```ts
transaction(...)
```

---

# Reactive Updates

Changes trigger updates.

---

# Store Integration

Possible with:

```txt
zustand
redux
custom store
```

---

# Derived State

Examples:

```txt
neighbor counts
active suspects
clusters
```

---

# Persistence

Save state.

Restore later.

---

# Debugging

State inspection useful.

---

# Time Travel

Possible with state history.

---

# Common Mistakes

Avoid:

```txt
mutating directly
duplicated truth
```

---

# FAQ

Can external stores drive graph?

Yes.

Can state persist?

Yes.

---

# Related Types

```ts
GraphState
StateStore
Selectors
```

---

# Source

```txt
packages/core/src/state
```

---

# Summary

State provides:

```txt
single source of truth
predictability
reactivity
```

---

# Next

48-performance-optimization-reference.md

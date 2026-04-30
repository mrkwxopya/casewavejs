# 60. Performance Architecture

Performance is a feature.

Architecture decides performance.

Not optimizers alone.

---

# Contents

```txt
Rendering Model
State Architecture
Scheduling
Memory Strategy
Graph Scaling
Profiling
Performance Budgets
```

---

# Core Performance Goals

Target:

```txt
low latency
stable frame rate
predictable scaling
```

---

# Rendering Strategy

Prefer:

```txt
incremental rendering
dirty-region updates
batched mutations
```

Avoid:

```txt
full graph rerenders
```

---

# State Architecture

Use:

```txt
state slices
selectors
memoization
```

Keep high-frequency state isolated.

---

# Batching

Group updates.

Example:

```ts
graph.batch(() => {
 addNodes()
 addEdges()
})
```

---

# Scheduling

Heavy work:

```txt
defer
schedule
chunk
```

Possible:

```ts
requestIdleCallback
workers
```

---

# Memory Strategy

Watch:

```txt
orphan nodes
stale listeners
cache growth
```

---

# Virtualization

For huge graphs:

```txt
viewport culling
progressive loading
lazy hydration
```

---

# Performance Budgets

Define budgets:

```txt
node counts
render time
memory ceilings
interaction latency
```

---

# Profiling

Measure:

```txt
render cost
layout cost
event cost
gc pressure
```

---

# Hot Path Rules

Critical paths:

```txt
selection
dragging
zooming
routing
```

Must stay lean.

---

# Common Anti Patterns

Avoid:

```txt
global rerenders
deep prop chains
unbounded observers
```

---

# Stress Testing

Test:

```txt
10k nodes
50k edges
large clusters
```

---

# FAQ

When optimize?

From architecture start.

Workers needed?

Sometimes yes.

---

# Related Areas

```txt
layout engine
renderer
event pipeline
```

---

# Summary

Performance architecture gives:

```txt
scaling
smoothness
reliability
```

---

# Next

61-layout-engine-architecture.md

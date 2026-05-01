# 48. Performance Optimization Reference

Performance is architecture.

Not afterthought.

Must scale from dozens
to thousands of nodes.

---

# Contents

```txt
Rendering Performance
State Performance
Layout Performance
Interaction Performance
Profiling
Optimization Patterns
Scaling Strategies
```

---

# Core Goals

Optimize:

```txt
fps
memory
latency
render cost
layout cost
```

---

# Render Optimization

Prefer:

```txt
batched updates
partial redraw
virtualization
dirty rectangles
```

---

# Memoization

Use:

```txt
memo
cached selectors
stable references
```

---

# Reduce Re-renders

Critical.

Avoid unnecessary graph refreshes.

---

# Virtualization

Render only visible entities.

Huge gain.

---

# Large Graph Strategy

Use:

```txt
clustering
progressive loading
simplification
```

---

# Layout Optimization

Prefer:

```txt
incremental layout
worker layout
cached positions
```

---

# Web Workers

Offload heavy work.

```ts
layoutWorker:true
```

---

# Interaction Optimization

Throttle:

```txt
drag
hover
zoom events
```

---

# Debounce Example

```ts
debounce(handler)
```

---

# Batch Mutations

```ts
transaction(...)
```

Important.

---

# Data Loading

Use:

```txt
lazy load
chunked loading
streaming
```

---

# Edge Optimization

Large graphs:

reduce edge labels.

Use bundling.

---

# Label Optimization

Render labels selectively.

Huge savings.

---

# Profiling

Track:

```txt
paint cost
fps
memory
hot paths
```

---

# Debug Tools

Possible:

```txt
fps meter
perf overlay
render inspector
```

---

# Common Bottlenecks

Usually:

```txt
too many labels
expensive HTML nodes
full redraws
heavy layouts
```

---

# Common Mistakes

Avoid:

```txt
optimizing too late
ignoring profiling
```

---

# FAQ

Can thousands of nodes work?

Yes with optimization.

---

# Related Types

```ts
PerfConfig
VirtualizationOptions
WorkerConfig
```

---

# Source

```txt
docs/performance
```

---

# Summary

Performance comes from:

```txt
architecture
batching
virtualization
profiling
```

---

# Next

49-testing-reference.md




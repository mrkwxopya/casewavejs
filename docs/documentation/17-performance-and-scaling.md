# 17. Performance and Scaling

Production hardening documentation.

How to make CaseWave scale.

Critical for serious usage.

---

# Contents

```txt
Performance Model
Rendering Performance
Graph Scaling
Memory
Large Graph Strategies
React Optimization
Virtualization
Benchmarks
Profiling
Production Checklists
```

---

# Overview

Performance depends on:

```txt
graph size
mutation frequency
render complexity
viewport size
node complexity
```

All matter.

---

# Performance Philosophy

Optimize:

- data first

- render second

- micro optimizations last

Correct order.

---

# Core Targets

Designed for:

```txt
10k+ nodes
100k edges
```

With strategies.

---

# Performance Layers

```txt
Graph operations
State updates
Rendering
Browser paint
```

Measure separately.

---

# Complexity Targets

Goal:

```txt
Node lookup O(1)

Adjacency O(1)

Traversal near O(E)
```

Important.

---

# Data Structures

Uses:

```txt
Maps
Indexes
Adjacency lists
```

Chosen for speed.

---

# Rendering Pipeline Cost

Main cost sources:

```txt
too many nodes
expensive custom nodes
rerenders
layout thrashing
```

Common bottlenecks.

---

# Large Graph Rule

Never render everything.

Render what is visible.

Critical.

---

# Viewport Culling

Use visible-only rendering.

```txt
offscreen skipped
```

Massive gains.

---

# Virtualization

Required for huge boards.

---

Strategy:

```txt
window rendering
node culling
edge culling
```

---

# Progressive Loading

Load graph in chunks.

```txt
phase 1 summary

phase 2 details
```

Good UX.

---

# Cluster Collapsing

Collapse groups.

```txt
show clusters
expand on demand
```

Huge scalability win.

---

# Level Of Detail

LOD strategy.

Zoomed out:

render simplified nodes.

Zoomed in:

render details.

---

Example:

```txt
far:
 circles

near:
 rich cards
```

Excellent optimization.

---

# React Performance

Use:

```txt
memo
useMemo
useCallback
```

Important.

---

# Avoid Rerenders

Bad:

entire graph rerenders.

Good:

selective updates.

---

Use selector hooks.

Not broad subscriptions.

---

# Stable References

Avoid:

```tsx
<Canvas graph={new Graph()}/>
```

Bad.

---

Use:

```tsx
useState(
 new Graph()
)
```

Stable.

---

# Batch Mutations

Use:

```ts
transaction(()=>{
 ...
})
```

Huge gains.

---

Not:

many individual writes.

---

# Node Renderer Optimization

Custom nodes should be light.

Avoid:

- heavy charts

- expensive effects

- huge DOM trees

---

Prefer:

```txt
simple markup
memoized renderers
```

---

# Edge Performance

Edges can dominate cost.

Especially large graphs.

---

Strategies:

```txt
hide minor edges
simplify routing
edge culling
```

---

Bezier expensive.

Straight cheaper.

---

# Layout Performance

Layouts costly.

Do not recompute unnecessarily.

---

Memoize layout results.

Cache positions.

---

# Incremental Layout

Only relayout changed region.

Not entire graph.

Huge win.

---

# Memory Optimization

Avoid:

duplicate payloads.

Huge node data.

Embedded blobs.

---

Store references.

Not giant objects.

---

Bad

```ts
node.data=hugeDocument
```

Bad.

---

Better

```ts
node.data={
 ref:id
}
```

---

# Lazy Data Hydration

Load detail when opened.

Not upfront.

Excellent pattern.

---

# Mutation Frequency

High-frequency updates:

batch them.

Throttle them.

---

Example

```txt
50-100ms batching
```

Good realtime pattern.

---

# Interaction Performance

Pan/zoom should use:

```txt
transforms
```

Not layout shifts.

Critical.

---

Prefer:

```txt
transform
opacity
```

Cheap.

---

# Animation Performance

Avoid heavy animation at scale.

Use subtle transforms.

---

Respect:

```txt
prefers-reduced-motion
```

Good practice.

---

# Large Dataset Strategy

For 50k nodes:

Use:

```txt
server paging
graph partitioning
cluster summaries
```

---

# Graph Partitioning

Split domains.

Example:

```txt
suspects graph

evidence graph

timeline graph
```

Connected via drilldown.

---

# Search Performance

Index searchable fields.

Do not linear scan huge graphs.

---

Use:

```txt
search indexes
```

---

# Profiling

Measure before optimizing.

Use:

```txt
React profiler
browser performance tab
flame charts
```

---

Measure:

```txt
render time
mutation time
paint cost
memory
```

---

# Benchmarking

Track:

```txt
1k
10k
50k
```

Benchmark tiers.

---

Document numbers.

Important.

---

# Performance Budget

Define budgets.

Example:

```txt
pan under 16ms

mutation under 5ms
```

Targets.

---

# Example Production Targets

```txt
zoom 60fps

pan 60fps

selection <30ms
```

Excellent goals.

---

# Common Bottlenecks

Usually:

```txt
custom nodes
rerenders
layouts
edges
```

Not graph engine.

---

# Troubleshooting Slowness

Checklist:

Too many DOM nodes?

Heavy node renderer?

Repeated layouts?

Selection rerenders?

Check all.

---

# 10k Node Checklist

Required:

✓ culling

✓ clusters

✓ memoization

✓ batched mutations

✓ lightweight nodes

---

# 100k Edge Checklist

Required:

✓ simplified edges

✓ edge culling

✓ clustered views

---

# Realtime Collaboration Scaling

Use:

```txt
CRDT
patch sync
event batching
```

Not full graph sync.

---

# Serialization Performance

Huge exports:

stream if needed.

Compress if needed.

---

# Worker Offloading

Move expensive work off UI thread.

Examples:

```txt
layouts
analysis
imports
```

Web workers.

Huge win.

---

# Recommended Worker Tasks

Good candidates:

```txt
force layouts
pathfinding
imports
```

---

# Caching

Cache:

```txt
layout results
computed projections
search indexes
```

---

# Theme Performance

Themes should not recompute constantly.

Memoize theme resolution.

---

# Anti Patterns

Avoid:

Recreating graph instances.

Deep cloning constantly.

Massive node payloads.

Unbounded rerenders.

---

# Enterprise Scaling Pattern

Architecture:

```txt
client viewport

query layer

graph service
```

Scalable pattern.

---

# Observability

Track:

```txt
fps
memory
slow mutations
render duration
```

Production telemetry.

---

# CI Performance Gates

Recommended.

Prevent regressions.

Example:

benchmark in CI.

---

# Summary

This document covered:

```txt
rendering
memory
virtualization
profiling
large graph scaling
```

Production performance handbook.

---

# Next Document

Next:

```txt
18-security-validation-reliability.md
```

Covers:

- validation

- security

- hardening

- fault tolerance

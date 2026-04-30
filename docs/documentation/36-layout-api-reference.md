# 36. Layout API Reference

Graph layout engine controls positioning,
arrangement,
spatial intelligence,
and automatic structure generation.

Nodes become readable through layout.

Without layout:

chaos.

With layout:

information architecture.

---

# Contents

```txt
Layout Concepts
LayoutConfig
Built-in Algorithms
Coordinates
Auto Layout
Physics Layout
Hierarchical Layout
Force Layout
Grid Layout
Custom Engines
Performance
Patterns
```

---

# Core Concept

Layout computes:

```txt
where nodes go
how edges flow
how clusters form
how readability improves
```

---

# Primary Type

```ts
LayoutConfig
```

---

# Interface

```ts
interface LayoutConfig{
 type
 spacing?
 direction?
 animate?
 fitView?
 padding?
 options?
}
```

---

# type

Required.

Selects algorithm.

Supported:

```txt
force
dagre
hierarchical
grid
radial
tree
manual
```

---

# Example

```ts
{
 type:"force"
}
```

---

# Apply Layout

```ts
graph.layout(config)
```

Primary entry point.

---

Example

```ts
graph.layout({
 type:"grid"
})
```

---

# Manual Layout

No algorithm.

You position nodes.

```ts
type:"manual"
```

---

Example

```ts
{
 id:"n1",
 position:{
  x:300,
  y:120
 }
}
```

Manual placement.

---

# Grid Layout

Arranges nodes in rows columns.

Best for:

```txt
catalogs
dashboards
entity overviews
```

---

Example

```ts
graph.layout({
 type:"grid",
 spacing:140
})
```

---

# spacing

Controls gaps.

```ts
spacing:number
```

---

Example

```ts
spacing:180
```

---

# Hierarchical Layout

Directed layered arrangement.

Best for:

```txt
flows
decision trees
pipelines
```

---

Example

```ts
graph.layout({
 type:"hierarchical"
})
```

---

# direction

Used by hierarchical.

Options:

```txt
TB
BT
LR
RL
```

Meaning:

```txt
top-bottom
bottom-top
left-right
right-left
```

---

Example

```ts
direction:"LR"
```

---

# Tree Layout

Parent-child structures.

Excellent for:

```txt
taxonomy
case branching
file systems
```

---

Example

```ts
type:"tree"
```

---

# Radial Layout

Center-out arrangement.

Useful for:

```txt
investigation hubs
mind maps
network clusters
```

---

Example

```ts
type:"radial"
```

---

# Force Layout

Physics simulation.

Very powerful.

Uses:

```txt
repulsion
attraction
spring forces
collision
```

---

Example

```ts
graph.layout({
 type:"force"
})
```

---

# Force Options

```ts
options:{
 charge:-600,
 linkDistance:140
}
```

---

Common Parameters

```txt
charge
gravity
collision
linkDistance
iterations
```

---

# charge

Repulsion.

Negative spreads nodes.

Example:

```ts
charge:-500
```

---

# linkDistance

Desired edge length.

```ts
linkDistance:150
```

---

# iterations

Simulation passes.

```ts
iterations:300
```

Higher =
more stable.

---

# Physics Layout Benefits

Good for:

```txt
organic graphs
social webs
evidence networks
```

---

# Dagre Layout

Directed graph optimization.

Very clean.

Example:

```ts
type:"dagre"
```

Great defaults.

---

# fitView

Auto zoom after layout.

```ts
fitView:true
```

Recommended.

---

# padding

Viewport padding.

```ts
padding:50
```

---

# animate

Animate transitions.

```ts
animate:true
```

Smooth movement.

---

# updateLayout

Recompute after graph changes.

```ts
graph.relayout()
```

---

# Incremental Layout

Only changed nodes update.

Better performance.

---

# Freeze Positions

Pin nodes.

Example:

```ts
locked:true
```

Layout ignores them.

---

# Mixed Layout

Possible:

```txt
manual clusters
force global
```

Advanced hybrid.

---

# Cluster-Aware Layout

Group clusters first.

Then internal layout.

Huge readability gains.

---

# Custom Layout Engines

Possible.

Register custom algorithm.

```ts
graph.registerLayout(...)
```

---

# Custom Signature

```ts
(nodes,edges)=>positions
```

Returns coordinates.

---

# Returned Positions

```ts
{
 nodeId:{
  x:100,
  y:200
 }
}
```

---

# Layout Events

Possible hooks:

```txt
layout:start
layout:tick
layout:end
```

Useful.

---

# Layout Persistence

Save coordinates:

```ts
graph.serialize()
```

Restore later.

---

# Collision Avoidance

Prevents overlap.

Especially force layouts.

Important.

---

# Edge Crossing Reduction

Some layouts optimize:

```txt
fewer crossings
cleaner readability
```

Critical for complex graphs.

---

# Investigation Board Example

```ts
graph.layout({
 type:"force",
 options:{
  charge:-700,
  linkDistance:170
 }
})
```

Excellent default.

---

# Workflow Example

```ts
graph.layout({
 type:"hierarchical",
 direction:"LR"
})
```

Perfect for flows.

---

# Performance Notes

Large graphs:

Prefer:

```txt
worker layout
incremental
clustering
simplification
```

---

# Common Mistakes

Avoid:

```txt
using force for huge DAGs
using tree for arbitrary networks
ignoring spacing
too much animation
```

---

# Layout Selection Guide

Use:

```txt
grid → structured lists

tree → hierarchy

dagre → workflows

force → relationship networks

radial → hub systems
```

---

# Query APIs

Possible:

```ts
getLayout()
getNodePositions()
```

---

# Coordinate System

Standard:

```txt
x horizontal
y vertical
```

Cartesian.

---

# Auto Center

```ts
graph.center()
```

Recenter graph.

---

# Auto Fit

```ts
graph.fit()
```

Viewport fit.

---

# Zoom After Layout

Often paired:

```ts
layout()
fit()
zoom()
```

Common pipeline.

---

# FAQ

## Can users drag after auto layout?

Yes.

---

## Can layout rerun after edits?

Yes.

---

## Can nodes be pinned?

Yes.

---

## Can I create my own algorithm?

Yes.

---

# Related Types

```ts
LayoutConfig
ForceOptions
GridOptions
TreeOptions
```

---

# Source

```txt
packages/core/src/layout
```

---

# Summary

Layout provides:

```txt
automatic positioning
readability
structure
physics
hierarchies
```

Turns graphs into systems.

---

# Next Document

Next:

```txt
37-renderer-api-reference.md
```

Rendering engine internals.

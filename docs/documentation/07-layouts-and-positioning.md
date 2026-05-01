# 07. Layouts and Positioning

Complete documentation for graph layout systems.

This document covers:

- manual positioning
- automatic layouts
- viewport systems
- fit view
- camera controls
- collision avoidance
- layout algorithms
- nested layouts
- positioning APIs

Graph layout is as important as graph data.

Good data with bad layout
still feels broken.

---

# What is Layout?

Layout decides:

where nodes appear.

It affects:

- readability
- analysis speed
- visual hierarchy
- graph comprehension

Layout is not decoration.

It is structure.

---

# Two Positioning Models

CaseWave supports two models:

```txt
Manual
Automatic
```

Often combined.

---

# Manual Positioning

Nodes have coordinates:

```ts
position:{
 x:200,
 y:400
}
```

Manual placement.

---

# Drag Positioning

Users move nodes interactively.

Typical behavior:

```txt
drag node
update coordinates
persist
```

---

# Persisted Coordinates

Store positions:

```json
{
 "x":300,
 "y":520
}
```

Restore later.

Important for investigations.

---

# Auto Layouts

System calculates positions.

Useful for:

- large graphs
- generated graphs
- topology maps

---

# Common Layout Types

```txt
grid
dag
force
radial
tree
circular
hierarchical
```

---

# Grid Layout

Simple structured placement.

```txt
□ □ □
□ □ □
```

Good for:

- evidence boards
- cards
- matrices

---

Example:

```ts
layout:"grid"
```

---

# Tree Layout

Hierarchy visualization.

```txt
Parent
├ Child
└ Child
```

Useful for:

- dependency graphs
- family trees
- org charts

---

# DAG Layout

Directed acyclic layout.

Flow oriented.

```txt
A
↓
B
↓
C
```

Useful for:

- process diagrams
- causal chains

---

Possible API:

```ts
layout:"dag"
```

---

# Force Layout

Physics layout.

Nodes repel.

Edges attract.

Dynamic.

Useful for:

- investigation webs
- relationship graphs

---

Example concept:

```ts
layout:"force"
```

---

Force may use:

```txt
spring force
repulsion
gravity
collision
```

---

# Radial Layout

Center + rings.

```txt
   B
A  C  D
```

Good for:

- suspect networks
- centered evidence

---

# Circular Layout

Places nodes around circle.

Useful for:

- cycles
- relationship rings

---

# Hierarchical Layout

Layered graph.

```txt
Level1
Level2
Level3
```

Structured.

---

# Manual + Auto Hybrid

Very common.

Example:

```txt
auto layout once
manual adjustments after
```

Excellent workflow.

---

# Layout Engine APIs

Possible:

```ts
graph.layout(...)
```

Example:

```ts
graph.layout({
 type:"force"
})
```

---

# Layout Configuration

Possible:

```ts
graph.layout({
 type:"dag",

 spacing:120,

 direction:"TB"
})
```

---

Direction examples:

```txt
TB
top-bottom

LR
left-right
```

---

# Spacing

Controls gaps.

```ts
nodeSpacing:80
rankSpacing:120
```

Very important.

---

# Collision Avoidance

Prevents overlap.

Without collision:

bad.

With collision:

readable.

Possible:

```ts
collision:true
```

---

# Node Overlap Prevention

Engine may ensure:

```txt
nodes never overlap
```

Critical.

---

# Layout Re-run

Possible:

```ts
relayout()
```

After graph changes.

Useful after adding nodes.

---

# Incremental Layout

Only new nodes positioned.

Existing stay stable.

Very important.

Called:

```txt
incremental layout
```

Great UX.

---

# Locked Nodes

Some nodes fixed.

Example:

```ts
locked:true
```

Layout ignores them.

Useful anchors.

---

# Pinning

User pins nodes.

Pinned nodes stay.

Example:

```ts
pinNode(id)
```

Possible.

---

# Group Layouts

Groups may layout children internally.

```txt
group
 └ child layout
```

Nested layouts.

Very powerful.

---

# Compound Layout

Parent:

grid

Children:

force

Possible mixed systems.

---

# Viewport System

Layout ≠ camera.

Separate.

Viewport controls what user sees.

---

# Camera

Conceptual viewport:

```txt
pan
zoom
fit
center
```

---

# Pan

Move camera.

Example:

```ts
panTo(x,y)
```

---

# Zoom

Example:

```ts
zoomIn()
zoomOut()
```

Possible:

```ts
setZoom(1.2)
```

---

# Zoom Limits

Example:

```ts
minZoom:.25
maxZoom:4
```

Good constraints.

---

# Fit View

Critical feature.

Auto frame graph.

```ts
fitView()
```

Often first command.

---

Possible:

```ts
fitView({
 padding:50
})
```

---

# Center View

Center graph.

```ts
centerView()
```

Different from fit.

---

# Focus Node

Zoom to node.

```ts
focusNode(
 "suspect_1"
)
```

Very useful.

---

# Bounds

Graph bounding box.

Example:

```ts
getBounds()
```

Used by fitView.

---

# MiniMap Support

Possible viewport minimap.

Useful large graphs.

Often based on bounds.

---

# Coordinate Spaces

May have:

```txt
screen coordinates
graph coordinates
```

Different things.

Important.

---

# Screen to Graph Conversion

Possible:

```ts
screenToGraph(...)
```

Useful for interactions.

---

# Snap to Grid

Optional.

```ts
snapToGrid:true
```

Dragging aligns.

Great for clean boards.

---

# Alignment Tools

Possible:

```ts
alignLeft()
alignCenter()
distribute()
```

Useful editors.

---

# Selection Layout Tools

Layout only selected nodes.

Possible:

```ts
layoutSelection(...)
```

Advanced.

---

# Auto Arrange

Typical UX button:

```txt
Auto Arrange
```

Usually reruns layout.

Very useful.

---

# Large Graph Strategy

Use:

- clustering
- collapse groups
- lazy layout
- incremental layout

For performance.

---

# Example Force Layout

```ts
graph.layout({
 type:"force",

 repulsion:600,

 linkDistance:180
})
```

Example concept.

---

# Example DAG Layout

```ts
graph.layout({
 type:"dag",

 direction:"LR",

 rankSpacing:140
})
```

---

# Layout Best Practices

Use:

Tree:

for hierarchy.

Force:

for networks.

Grid:

for evidence boards.

DAG:

for flows.

Choose by semantics.

---

# Common Mistakes

Using force for everything.

Bad.

Using no spacing.

Bad.

Using random manual placement.

Bad.

---

# Layout + Themes

Themes affect visuals.

Layouts affect structure.

Separate concerns.

---

# Future Advanced Layouts

Possible advanced:

```txt
elk
dagre
constraint layouts
swimlanes
orthogonal routing
```

Scalable path.

---

# Summary

Layout system includes:

```txt
manual
auto
viewport
fit view
camera
collision
hybrid layouts
```

Major subsystem.

---

# Next Document

Continue with:

```txt
08-state-management-and-events.md
```

Next covers:

- graph state
- subscriptions
- undo redo
- events
- command systems
- transactions
- store architecture




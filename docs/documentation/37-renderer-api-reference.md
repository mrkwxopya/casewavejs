# 37. Renderer API Reference

Rendering engine draws everything users see.

Nodes.

Edges.

Ports.

Labels.

Selections.

Animations.

Interaction visuals.

Renderer controls visual output.

---

# Contents

```txt
Renderer Overview
Render Pipeline
RendererConfig
Node Rendering
Edge Rendering
Labels
Viewport
Layers
Custom Renderers
Performance
Events
Patterns
```

---

# Core Concept

Renderer transforms graph data into visuals.

```txt
data -> scene -> pixels
```

---

# Primary Type

```ts
RendererConfig
```

---

# Interface

```ts
interface RendererConfig{
 mode?
 antialias?
 pixelRatio?
 background?
 layers?
 animations?
 interaction?
}
```

---

# Default Renderer

```ts
renderer:"canvas"
```

Default fast renderer.

---

# Supported Modes

```txt
canvas
svg
webgl
hybrid
```

---

# Canvas Renderer

Best default.

Fast.

Great for:

```txt
interactive boards
editors
large graphs
```

---

Example

```ts
createGraph({
 renderer:"canvas"
})
```

---

# SVG Renderer

High precision.

Great for:

```txt
exports
printing
diagram documents
```

---

Example

```ts
renderer:"svg"
```

---

# WebGL Renderer

Massive scale rendering.

Use for:

```txt
thousands of nodes
large simulations
heavy visualizations
```

---

Example

```ts
renderer:"webgl"
```

---

# Hybrid Mode

Mixes technologies.

```ts
renderer:"hybrid"
```

Useful advanced mode.

---

# pixelRatio

Controls sharpness.

```ts
pixelRatio:2
```

Great for retina.

---

# antialias

Smooth visuals.

```ts
antialias:true
```

---

# background

Scene color.

```ts
background:"#111"
```

---

# Layers

Renderer often has layered architecture.

Examples:

```txt
background
edges
nodes
labels
selection
overlays
tooltips
```

---

# Layer Order

Usually:

```txt
edges under nodes
labels above nodes
overlays on top
```

Critical.

---

# Node Rendering

Draws:

```txt
shape
fill
stroke
icon
badges
html
ports
```

---

Example Node Style

```ts
{
 shape:"circle",
 radius:32
}
```

---

# Supported Shapes

```txt
circle
rect
diamond
hexagon
custom
```

---

# Custom Node Renderer

Register custom visuals.

```ts
graph.registerNodeRenderer(...)
```

---

Signature

```ts
(ctx,node)=>{}
```

---

Canvas Example

```ts
(ctx,node)=>{
 ctx.fillRect(...)
}
```

---

# HTML Nodes

Possible:

```ts
renderAs:"html"
```

Rich node content.

---

# Edge Rendering

Handles:

```txt
lines
curves
arrows
markers
paths
labels
```

---

Example

```ts
edge.style({
 type:"bezier"
})
```

---

Edge Types

```txt
straight
bezier
orthogonal
smooth
step
```

---

# Arrowheads

Supported:

```txt
triangle
diamond
circle
custom
```

---

Example

```ts
markerEnd:"triangle"
```

---

# Edge Labels

Render relation text.

Example:

```ts
label:"linked to"
```

---

# Label Rendering

Text layer system.

Supports:

```txt
wrapping
rotation
background
halo
rich labels
```

---

Example

```ts
labelStyle:{
 fontSize:12
}
```

---

# Viewport Rendering

Renderer tracks:

```txt
zoom
pan
transform matrix
camera
```

---

# Camera APIs

Example:

```ts
graph.zoom(1.5)
graph.pan(200,50)
```

---

# fitView

Auto frame graph.

```ts
graph.fit()
```

---

# centerView

```ts
graph.center()
```

---

# Minimap Rendering

Optional renderer subsystem.

```ts
minimap:true
```

---

# Selection Rendering

Draws:

```txt
selection boxes
handles
highlights
guides
```

---

# Hover States

Renderer supports:

```txt
hover
focus
active
selected
disabled
```

---

Example

```ts
hoverStyle:{
 strokeWidth:3
}
```

---

# Animation Rendering

Transitions:

```txt
position
opacity
paths
highlight pulses
```

---

Example

```ts
animations:true
```

---

# Frame Loop

Renderer may use:

```txt
requestAnimationFrame
```

For updates.

---

# Dirty Rect Optimization

Redraw only changed regions.

Major performance win.

---

# Partial Repaint

Avoid full scene redraw.

Important.

---

# Batching

Renderer batches operations.

Improves speed.

---

# Virtualization

Large graphs may only render visible nodes.

Huge gain.

---

# Custom Edge Renderer

Register:

```ts
graph.registerEdgeRenderer(...)
```

---

Signature

```ts
(ctx,edge)=>{}
```

---

# Renderer Events

Possible hooks:

```txt
render:start
render:frame
render:end
```

---

# Hit Testing

Renderer powers interaction picking.

```txt
which node clicked
which edge hovered
```

Essential.

---

# Z Index

Possible support:

```ts
zIndex:20
```

Ordering.

---

# Theme Interaction

Renderer consumes theme tokens.

```txt
colors
fonts
shadows
spacing
```

Connected system.

---

# Export Rendering

Possible:

```ts
graph.exportPNG()
graph.exportSVG()
```

Uses renderer.

---

# Investigation Board Example

```ts
createGraph({
 renderer:"canvas",
 antialias:true,
 pixelRatio:2
})
```

Strong default.

---

# Large Graph Setup

```ts
renderer:"webgl"
virtualization:true
```

Performance-oriented.

---

# Common Mistakes

Avoid:

```txt
too many shadows
over-rendering labels
full redraw loops
expensive html nodes everywhere
```

---

# Debug Tools

Helpful:

```ts
showFPS()
showBounds()
debugPaint()
```

Possible dev utilities.

---

# FAQ

## Can renderer be swapped?

Yes.

---

## Can I build custom node visuals?

Yes.

---

## Can HTML live inside nodes?

Yes.

---

## SVG or Canvas?

Interactive:
canvas

Export:
svg

Massive:
webgl

---

# Related Types

```ts
RendererConfig
NodeRenderer
EdgeRenderer
ViewportState
```

---

# Source

```txt
packages/core/src/renderer
```

---

# Summary

Renderer handles:

```txt
drawing
layers
labels
interaction visuals
performance
exports
```

Visual engine of CaseWave.

---

# Next Document

Next:

```txt
38-theme-system-reference.md
```

Theme architecture.

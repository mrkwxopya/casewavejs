# 66. Rendering Pipeline

Rendering is not "draw stuff".

It is a pipeline.

---

# Contents

```txt
Pipeline Stages
Scene Graph
Render Passes
Layering
Optimization
Extensibility
```

---

# Pipeline Model

Typical flow:

```txt
state
diff
layout
scene graph
render passes
paint
```

---

# Scene Graph

Use structured scene representation.

Not direct chaos drawing.

---

# Layers

Recommended:

```txt
background
edges
nodes
labels
overlays
selection
```

---

# Render Passes

Possible passes:

```txt
base pass
interaction pass
overlay pass
debug pass
```

---

# Incremental Rendering

Prefer updating only changed parts.

Never repaint everything blindly.

---

# Diffing

Track mutations.

Render minimal changes.

---

# Renderers

Possible backends:

```txt
svg
canvas
webgl
hybrid
```

---

# Renderer Selection

Depends on:

```txt
graph scale
features
performance targets
```

---

# Hit Testing

Must be part of pipeline.

Not bolted on.

---

# Label Rendering

Separate concern.

Can dominate complexity.

---

# Optimization

Use:

```txt
batch draws
culling
cache reuse
layer invalidation
```

---

# Debug Render Mode

Support:

```txt
bounds overlays
paint diagnostics
layer inspection
```

---

# Anti Patterns

Avoid:

```txt
single monolithic renderer
full redraw loops
```

---

# FAQ

SVG or WebGL?

Depends scale.

Can renderers be pluggable?

Yes.

---

# Source

```txt
packages/rendering/
```

---

# Summary

Rendering pipeline enables:

```txt
speed
clarity
scalability
```

---

# Next

67-serialization-architecture.md




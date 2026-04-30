# 52. Debugging Reference

Complex graph systems need observability.

Debugging is product infrastructure.

Not emergency tooling.

---

# Contents

```txt
Debug Philosophy
Debug APIs
Inspectors
Logging
Tracing
Debug Commands
Patterns
```

---

# Core Debug APIs

Possible:

```ts
graph.debug()
graph.inspect()
```

---

# Debug Overlay

Useful overlay can show:

```txt
fps
bounds
selection
event traces
```

---

# Debug Commands

Examples:

```txt
debug!state
debug!layout
debug!render
debug!events
```

---

# State Inspection

Inspect:

```txt
graph state
selection state
history
```

---

# Render Inspection

Useful for:

```txt
layers
paint cost
re-render sources
```

---

# Event Tracing

Trace event flow.

Very valuable.

---

# Logging

Structured logs preferred.

Avoid noisy logs.

---

# Debug Levels

```txt
info
warn
debug
trace
```

---

# Layout Debug

Visualize:

```txt
forces
bounds
routing paths
```

---

# Edge Debug

Inspect:

```txt
routing
intersections
anchors
```

---

# Performance Debug

Use profilers.

---

# Dev Inspector

Possible dedicated inspector panel.

Excellent.

---

# Error Boundaries

Contain failures.

Critical.

---

# Reproduction Data

Capture failing graph states.

Huge value.

---

# Common Mistakes

Avoid:

```txt
console spam
missing diagnostics
```

---

# FAQ

Can layouts be debugged visually?

Yes.

Can event flow be traced?

Yes.

---

# Related Types

```ts
DebugTools
InspectorState
TraceEvent
```

---

# Source

```txt
docs/debugging
```

---

# Summary

Debugging provides:

```txt
observability
diagnostics
confidence
```

---

# Next

53-error-handling-reference.md

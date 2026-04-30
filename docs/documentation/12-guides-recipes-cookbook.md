# 12. Guides, Recipes and Cookbook

Production usage patterns and advanced practical examples.

This is where package feels complete.

Not API reference.

Real-world implementation handbook.

---

# Contents

Includes:

```txt
Quick Recipes
Advanced Recipes
Architectural Patterns
Production Scenarios
Cookbook
Anti Patterns
```

---

# Quick Recipes

---

# Minimal Investigation Board

```tsx
import {
 CaseWaveGraph
}
from "@casewave/core"

import {
 CaseWaveCanvas
}
from "@casewave/react"

const graph=
new CaseWaveGraph()

graph.addNode({
 id:"suspect_1",
 type:"person",
 data:{
  label:"Suspect"
 }
})

export default function App(){

 return(
   <CaseWaveCanvas
      graph={graph}
   />
 )
}
```

---

What this demonstrates:

- graph creation

- node rendering

- minimal setup

---

# Person → Evidence Relationship

```ts
graph.addNode({
 id:"suspect",
 type:"person"
})

graph.addNode({
 id:"knife",
 type:"evidence"
})

graph.addEdge({
 id:"e1",
 source:{
  kind:"node",
  nodeId:"suspect"
 },
 target:{
  kind:"node",
  nodeId:"knife"
 },
 relation:"owns"
})
```

---

Use case:

investigation boards.

---

# Nested Groups

```ts
graph.addNode({
 id:"crime_group",
 type:"group"
})

graph.addNode({
 id:"suspect_1",
 parentId:"crime_group"
})
```

---

Useful for:

- folders

- clusters

- case sections

---

# Evidence Timeline

```ts
graph.addNode({
 id:"timeline",
 type:"timeline"
})
```

Connect evidence chronologically.

Pattern.

---

# Hypergraph Example

Multiple source evidence:

```ts
graph.addEdge({
 id:"hyper1",
 type:"hyper",
 sources:[
  "person1",
  "person2"
 ],
 target:"event1"
})
```

Useful:

complex relationships.

---

# Graph Serialization Recipe

Save graph:

```ts
const data=
GraphSerializer.export(
 graph
)
```

Load:

```ts
GraphSerializer.import(
 data
)
```

---

# Persistence Recipe

Local storage:

```ts
localStorage.setItem(
 "case",
 JSON.stringify(data)
)
```

Restore:

```ts
const saved=
JSON.parse(
 localStorage.getItem("case")
)
```

---

# Undo Redo Recipe

```ts
store.undo()

store.redo()
```

Hotkeys:

```ts
Ctrl+Z
Ctrl+Shift+Z
```

Recommended.

---

# Custom Node Recipe

```tsx
function SuspectNode(props){

 return(
  <div>
   {props.data.name}
  </div>
 )
}
```

Use:

```tsx
<CaseWaveCanvas
 nodeRenderer={SuspectNode}
/>
```

---

# Theme Switching Recipe

```ts
setTheme(
 "detective-noir"
)
```

Runtime switch.

---

# Dark Investigation Theme

```ts
getCaseWaveTheme(
 "noir"
)
```

Ideal crime boards.

---

# Cookbook

---

# Recipe:
Suspicion Web

People connected to motive.

```txt
people
motive
alibi
evidence
```

Board model.

---

# Recipe:
Evidence Tree

Hierarchical proof chains.

```txt
Evidence
 └ Witness
   └ Timeline
```

---

# Recipe:
Murder Mansion Case Board

Suggested nodes:

```txt
suspects
rooms
weapons
events
documents
clues
```

Excellent demo.

---

# Recipe:
Conspiracy Graph

Use:

```txt
hyper edges
clusters
groups
cross links
```

---

# Recipe:
Case File Folder System

Use groups as folders:

```txt
suspects/
evidence/
reports/
maps/
```

Great UX.

---

# Advanced Layout Recipes

---

# DAG Investigation Layout

```ts
graph.layout({
 type:"dag"
})
```

For chronology.

---

# Force Network Layout

```ts
graph.layout({
 type:"force"
})
```

For conspiracy graphs.

---

# Grid Board Layout

```ts
graph.layout({
 type:"grid"
})
```

For organized evidence walls.

---

# React Recipes

---

# Controlled Graph State

```tsx
const [graph]
=
useState(
 new CaseWaveGraph()
)
```

Stable instance.

---

# Hook Access

```ts
const api=
useCaseWave()

api.zoomIn()
```

---

# Programmatic Focus

```ts
api.focusNode(
 "suspect1"
)
```

---

# Search Recipe

Simple node search:

```ts
const matches=
graph
.getNodes()
.filter(...)
```

---

# Highlight Search Result

```ts
updateNode(
 id,
 {
  selected:true
 }
)
```

---

# Production Recipes

---

# Large Graph Performance

Use:

```txt
virtualization
lazy rendering
memoization
chunking
```

Important.

---

# 10k Node Strategy

Recommended:

```txt
cluster collapsing
progressive loading
viewport culling
```

Production grade.

---

# Collaboration Recipe

Realtime sync:

```txt
websocket
crdt
shared graph state
```

Multi-user boards.

---

# Auto Save Pattern

Every mutation:

```ts
saveDebounced()
```

Debounce:

```txt
500ms
```

Recommended.

---

# Readonly Viewer Mode

```tsx
interactive={false}
```

Case viewers.

---

# Print Export Recipe

Export board:

```txt
PNG
SVG
PDF
```

Investigation reports.

---

# Custom Edge Recipes

---

# Curved Evidence Links

```ts
routing:"bezier"
```

---

# Directed Arrow Links

```ts
direction:"directed"
```

---

# Styled Relation Links

```ts
style:{
 dashed:true
}
```

---

# Anti Patterns

Avoid:

---

Mutating raw node objects.

Bad.

---

Random IDs.

Bad.

Use deterministic ids.

---

Putting huge payloads in node data.

Bad.

Use references.

---

Thousands of ungrouped nodes.

Bad.

Use clusters.

---

# Architecture Recipes

---

# Domain Driven Graph

Separate:

```txt
domain layer
graph layer
render layer
```

Very important.

---

# Plugin Pattern

Extensions:

```txt
layouts
renderers
tools
validators
```

Package ecosystem.

---

# Adapter Pattern

External data:

```txt
Neo4j adapter
JSON adapter
REST adapter
```

---

# Investigation Board Example

Full structure:

```txt
case
 ├ suspects
 ├ evidence
 ├ records
 ├ places
 └ timeline
```

Excellent starter architecture.

---

# Troubleshooting Recipes

Graph not rendering?

Check:

```txt
missing positions
missing provider
bad ids
```

---

Edges missing?

Check:

```txt
source ids
target ids
edge validation
```

---

Performance poor?

Check:

```txt
rerenders
layout loops
large payloads
```

---

# Testing Recipes

Unit:

```ts
expect(
 graph.getNodes()
)
```

---

Snapshot:

```ts
serialize graph
compare snapshots
```

---

Integration:

render graph.

simulate interaction.

---

# Cookbook Checklist

Each recipe includes:

✓ problem

✓ code

✓ explanation

✓ pitfalls

Required.

---

# Summary

This file provides:

```txt
practical recipes
patterns
cookbook
production guidance
```

This is usage handbook.

---

# Next Document

Next:

```txt
13-architecture-and-internals.md
```

Covers:

- internal engine architecture

- store internals

- rendering pipeline

- plugin system

- performance internals

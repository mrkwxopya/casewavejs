# 11. Complete API Reference

Exhaustive technical API documentation.

This document is the full reference layer.

Covers:

- all classes
- functions
- methods
- interfaces
- attributes
- props
- options
- return types
- error handling
- contracts

This is reference documentation.

Not tutorial docs.

---

# Package Coverage

Covers:

```txt
@casewavejs/core
@casewavejs/react
@casewavejs/themes
@casewavejs/core
@casewavejs/core
```

Single API reference.

---

# Import Reference

---

## Core

```ts
import {
 CaseWaveGraph,
 GraphStore,
 GraphSerializer
}
from "@casewavejs/core"
```

---

## React

```ts
import {
 CaseWaveCanvas,
 CaseWaveProvider,
 useCaseWave
}
from "@casewavejs/react"
```

---

## Themes

```ts
import {
 getCaseWaveTheme,
 caseWaveThemes
}
from "@casewavejs/themes"
```

---

# Core Class Reference

---

# CaseWaveGraph

Primary graph engine.

---

## Constructor

```ts
new CaseWaveGraph(
 options?
)
```

---

## Options

```ts
type GraphOptions={

 allowCycles?:boolean

 hypergraphMode?:boolean

 validate?:boolean

 autoLayout?:boolean
}
```

---

Example:

```ts
const graph=
 new CaseWaveGraph({
   allowCycles:true
 })
```

---

# Node Methods

---

## addNode

Signature:

```ts
addNode(
 node:CaseWaveNode
):void
```

Creates node.

---

Example:

```ts
graph.addNode({
 id:"person_1",
 type:"person"
})
```

---

Parameters:

| Name | Type | Required |
|---|---|---|
node | CaseWaveNode | yes |

---

Possible errors:

```txt
DuplicateNodeError
ValidationError
```

---

## removeNode

```ts
removeNode(
 id:string
):void
```

Removes node.

---

## updateNode

```ts
updateNode(
 id:string,
 patch:Partial<CaseWaveNode>
):void
```

Partial update.

---

## getNode

```ts
getNode(
 id:string
):CaseWaveNode
```

Returns node.

---

## getNodes

```ts
getNodes():CaseWaveNode[]
```

---

# Edge Methods

---

## addEdge

```ts
addEdge(
 edge:CaseWaveEdge
):void
```

---

Example:

```ts
graph.addEdge({
 id:"e1",
 relation:"linked_to"
})
```

---

## removeEdge

```ts
removeEdge(
 id:string
):void
```

---

## updateEdge

```ts
updateEdge(
 id,
 patch
):void
```

---

## getEdges

```ts
getEdges():CaseWaveEdge[]
```

---

# Traversal APIs

---

## getNeighbors

```ts
getNeighbors(
 nodeId:string
):CaseWaveNode[]
```

Connected nodes.

---

## bfs

```ts
bfs(
 start:string
)
```

Breadth first search.

---

## dfs

```ts
dfs(
 start:string
)
```

Depth first search.

---

# Layout APIs

---

## layout

```ts
layout(
 config:LayoutConfig
):void
```

---

Example:

```ts
graph.layout({
 type:"dag"
})
```

---

## relayout

```ts
relayout()
```

---

# Viewport APIs

---

## fitView

```ts
fitView(
 options?
)
```

---

## centerView

```ts
centerView()
```

---

## focusNode

```ts
focusNode(
 id:string
)
```

---

# Serialization APIs

---

# GraphSerializer

---

## export

```ts
GraphSerializer.export(
 graph
)
```

Returns:

```ts
GraphSnapshot
```

---

## import

```ts
GraphSerializer.import(
 snapshot
)
```

Returns graph.

---

# Store APIs

---

# GraphStore

---

## getState

```ts
getState()
```

Returns current state.

---

## subscribe

```ts
subscribe(
 listener
)
```

Returns:

```ts
unsubscribe fn
```

---

## undo

```ts
undo()
```

---

## redo

```ts
redo()
```

---

## transaction

```ts
transaction(
 fn
)
```

Atomic updates.

---

# Event APIs

---

## on

```ts
on(
 eventName,
 handler
)
```

Subscribe event.

---

## off

```ts
off(...)
```

Unsubscribe.

---

## emit

```ts
emit(...)
```

Emit event.

---

# React API

---

# CaseWaveCanvas Props

Reference:

```ts
type CaseWaveCanvasProps={

 graph:CaseWaveGraph

 theme?:string|Theme

 fitView?:boolean

 interactive?:boolean

 minZoom?:number

 maxZoom?:number

 nodeRenderer?:Component

 edgeRenderer?:Component

 onNodeClick?:Fn

 onEdgeClick?:Fn
}
```

---

## graph

Required.

Graph instance.

---

## theme

Accepts:

```ts
string
```

or:

```ts
Theme object
```

---

## fitView

Auto frame graph.

```tsx
fitView
```

Boolean.

---

## interactive

Enable interactions.

Default:

```ts
true
```

---

## nodeRenderer

Custom renderer.

Type:

```ts
React.ComponentType
```

---

# CaseWaveProvider Props

Possible:

```ts
type ProviderProps={
 children
 graph?
 theme?
}
```

---

# Hooks

---

## useCaseWave

```ts
const api=
 useCaseWave()
```

Possible methods:

```ts
zoomIn()
zoomOut()
fitView()

addNode()
```

---

## useGraphState

```ts
useGraphState(
 selector
)
```

Reactive selector hook.

---

# Theme APIs

---

## getCaseWaveTheme

```ts
getCaseWaveTheme(
 name:string
)
```

Returns:

```ts
CaseWaveTheme
```

---

## caseWaveThemes

Registry.

```ts
Record<string,Theme>
```

---

## caseWaveThemeNames

```ts
string[]
```

---

# Theme Utilities

Possible:

```ts
createTheme()
composeTheme()
validateTheme()
```

---

# Types Reference

---

# CaseWaveNode

```ts
type CaseWaveNode={
 id:string

 type:string

 position:{
  x:number
  y:number
 }

 data:Record<string,unknown>
}
```

---

# CaseWaveEdge

```ts
type CaseWaveEdge={
 id:string

 source:{}

 target:{}

 relation?:string
}
```

---

# LayoutConfig

Possible:

```ts
type LayoutConfig={
 type:
 |"grid"
 |"dag"
 |"force"

 spacing?:number
}
```

---

# Error Types

Possible errors:

```txt
DuplicateNodeError
InvalidEdgeError
ValidationError
CycleError
```

Document all.

Important.

---

# Return Conventions

Mutators:

often:

```ts
void
```

Queries:

return data.

Be explicit.

---

# Nullability

Document optional values.

Example:

```ts
getNode(...)
```

Could return:

```ts
CaseWaveNode | undefined
```

Must specify.

---

# Defaults

Document defaults.

Example:

```ts
interactive=true
```

Always mention defaults.

---

# Option Tables

Every option should include:

- type
- default
- required
- description

Standardize.

---

# JSDoc Example

Recommend:

```ts
/**
 Adds node to graph
*/
```

Ship with types + docs.

---

# Deprecated APIs

Mark clearly.

Example:

```ts
@deprecated
```

Important.

---

# API Stability Tags

Possible:

```txt
stable
experimental
deprecated
```

Great docs practice.

---

# Full Method Index

Document index:

```txt
addNode
removeNode
updateNode
...
```

Alphabetical appendix.

Useful reference.

---

# Examples For Every API

Every function should include:

- signature
- parameters
- return
- example
- errors

No exceptions.

---

# Common Usage Examples

---

## Create Graph

```ts
const graph=
 new CaseWaveGraph()
```

---

## Add Node

```ts
graph.addNode(...)
```

---

## Add Edge

```ts
graph.addEdge(...)
```

---

## Render

```tsx
<CaseWaveCanvas
 graph={graph}
/>
```

---

# Common Mistakes

Passing incomplete nodes.

Bad.

Skipping ids.

Bad.

Mutating state directly.

Bad.

---

# API Reference Checklist

Every exported symbol should document:

✓ purpose

✓ signature

✓ parameters

✓ returns

✓ examples

✓ errors

Required.

---

# Summary

This reference covers:

```txt
classes
methods
props
types
hooks
events
errors
```

Complete API surface.

---

# Next Document

Continue with:

```txt
12-guides-recipes-and-cookbook.md
```

Next covers:

- recipes
- advanced examples
- investigation board examples
- production patterns
- real-world implementations





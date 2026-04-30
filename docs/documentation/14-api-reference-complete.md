# 14. Complete API Reference

Authoritative API reference.

Every exported public surface documented.

This is specification-level documentation.

---

# Contents

```txt
Core Classes
Factories
Types
Interfaces
Methods
Hooks
Components
Theme API
Utilities
Errors
Constants
Enums
```

---

# Package Exports

```ts
import {
 CaseWaveGraph,
 GraphSerializer,
 createCaseWaveTheme
}
from "@casewave/core"
```

All exports documented below.

---

# CaseWaveGraph

Primary graph engine.

---

Signature:

```ts
class CaseWaveGraph
```

Purpose:

Graph creation and manipulation.

---

Constructor

```ts
new CaseWaveGraph(options?)
```

---

Options

```ts
interface GraphOptions{
 allowCycles?:boolean
 hypergraphMode?:boolean
 validateOnWrite?:boolean
 strictMode?:boolean
}
```

---

allowCycles

Type:

```ts
boolean
```

Default:

```ts
false
```

Purpose:

Allow circular references.

---

hypergraphMode

Enables multi-source relations.

Default:

false

---

validateOnWrite

Runs validation during mutation.

Recommended:

true

---

strictMode

Throws on invalid structures.

Production recommended.

---

# Methods

---

addNode

Signature:

```ts
addNode(node):Node
```

Purpose:

Insert graph node.

---

Parameters

```ts
NodeInput
```

Properties:

```ts
id
type
position
data
parentId
style
meta
```

---

Example

```ts
graph.addNode({
 id:"suspect1",
 type:"person"
})
```

---

Returns:

created node.

---

Errors:

```txt
DuplicateIdError
ValidationError
```

Possible.

---

removeNode

```ts
removeNode(id)
```

Removes node.

Cascades dependent edges.

---

getNode

```ts
getNode(id)
```

Returns node by id.

O(1).

---

updateNode

```ts
updateNode(
 id,
 patch
)
```

Partial update.

---

getNodes

```ts
getNodes()
```

Returns:

```ts
Node[]
```

---

findNodes

```ts
findNodes(predicate)
```

Filter query.

---

addEdge

```ts
addEdge(edge)
```

Creates relationship.

---

EdgeInput

```ts
interface EdgeInput{
 id:string
 source:Endpoint
 target:Endpoint
 relation?:string
 direction?:Direction
 routing?:RoutingMode
}
```

---

source

Type:

```ts
Endpoint
```

---

Endpoint

```ts
{
 kind:"node"
 nodeId:string
}
```

or advanced variants.

---

direction

Allowed:

```txt
directed
undirected
bidirectional
```

---

routing

Allowed:

```txt
straight
bezier
orthogonal
```

---

Example

```ts
graph.addEdge({
 id:"e1",
 source:{
  kind:"node",
  nodeId:"a"
 },
 target:{
  kind:"node",
  nodeId:"b"
 }
})
```

---

removeEdge

```ts
removeEdge(id)
```

Deletes edge.

---

getEdges

```ts
getEdges()
```

Returns all edges.

---

getConnectedNodes

```ts
getConnectedNodes(id)
```

Neighbors.

---

getNeighbors

Alias:

```ts
getNeighbors(id)
```

---

shortestPath

```ts
shortestPath(
 from,
 to
)
```

Returns path.

---

layout

```ts
layout(options)
```

Runs layout engine.

---

Layout Options

```ts
{
 type:
 "dag"
|"force"
|"grid"
}
```

---

transaction

```ts
transaction(fn)
```

Batch mutations.

Recommended.

---

clear

```ts
clear()
```

Removes all.

---

clone

```ts
clone()
```

Deep graph copy.

---

toJSON

```ts
toJSON()
```

Serializable graph.

---

# GraphSerializer

Static serializer utility.

---

export

```ts
GraphSerializer.export(
 graph
)
```

Returns:

serialized payload.

---

import

```ts
GraphSerializer.import(
 data
)
```

Hydrates graph.

---

validate

```ts
GraphSerializer.validate(
 data
)
```

Schema validation.

---

# Types

---

Node

```ts
interface Node{
 id:string
 type:string
 data?:unknown
 position:Point
}
```

---

Point

```ts
{
 x:number
 y:number
}
```

---

Edge

```ts
interface Edge{
 id:string
 source:Endpoint
 target:Endpoint
}
```

---

GraphTheme

```ts
interface GraphTheme{
 colors
 typography
 spacing
 nodes
 edges
}
```

---

# Theme API

createCaseWaveTheme

```ts
createCaseWaveTheme(
 options
)
```

Create theme.

---

getCaseWaveTheme

```ts
getCaseWaveTheme(
 name
)
```

Get preset.

---

listThemes

```ts
listThemes()
```

Returns catalog.

---

themeExists

```ts
themeExists(name)
```

Boolean.

---

# React Components

---

CaseWaveCanvas

```tsx
<CaseWaveCanvas />
```

Primary renderer.

---

Props

```ts
interface CaseWaveCanvasProps{
 graph
 theme
 interactive
 nodeRenderer
 edgeRenderer
}
```

---

graph

Type:

```ts
CaseWaveGraph
```

Required.

---

interactive

```ts
boolean
```

Default true.

---

nodeRenderer

Custom node renderer.

Optional.

---

edgeRenderer

Custom edge renderer.

Optional.

---

Example

```tsx
<CaseWaveCanvas
 graph={graph}
/>
```

---

CaseWaveProvider

Context provider.

```tsx
<CaseWaveProvider>
 ...
</CaseWaveProvider>
```

---

CaseWaveMiniMap

Overview navigator.

```tsx
<CaseWaveMiniMap/>
```

---

CaseWaveToolbar

Tool controls.

```tsx
<CaseWaveToolbar/>
```

---

# Hooks

---

useCaseWave

```ts
const api=
useCaseWave()
```

Main hook.

---

Returns

```txt
zoomIn
zoomOut
focusNode
fitView
```

and more.

---

useSelection

```ts
useSelection()
```

Selection state.

---

useViewport

```ts
useViewport()
```

Pan/zoom state.

---

useTheme

```ts
useTheme()
```

Current theme.

---

# Utilities

---

generateId

```ts
generateId()
```

Creates ids.

---

isNode

```ts
isNode(value)
```

Type guard.

---

isEdge

```ts
isEdge(value)
```

Type guard.

---

deepMerge

```ts
deepMerge(a,b)
```

Utility.

---

# Constants

---

DEFAULT_THEME

```ts
DEFAULT_THEME
```

Built-in fallback.

---

DEFAULT_LAYOUT

```ts
DEFAULT_LAYOUT
```

Layout default.

---

VERSION

```ts
VERSION
```

Library version.

---

# Enums

---

NodeType

```ts
enum NodeType
```

Examples:

```txt
person
evidence
group
timeline
```

---

Direction

```ts
enum Direction
```

Values:

```txt
directed
undirected
```

---

# Errors

---

DuplicateIdError

Thrown when duplicate ids.

---

ValidationError

Schema issues.

---

ImportError

Serialization import problems.

---

PluginError

Plugin lifecycle failures.

---

# Advanced APIs

---

registerPlugin

```ts
registerPlugin(
 plugin
)
```

Plugin registration.

---

registerNodeRenderer

```ts
registerNodeRenderer(...)
```

Custom renderers.

---

registerLayout

```ts
registerLayout(...)
```

Custom layouts.

---

# Attribute Reference

Node attributes:

```txt
id
type
data
position
style
meta
parentId
```

All documented.

---

Edge attributes:

```txt
id
source
target
relation
direction
routing
style
meta
```

---

Style Attributes

Node style:

```txt
fill
stroke
radius
shadow
opacity
```

---

Edge style:

```txt
width
dash
arrow
curve
color
```

---

Metadata Fields

Optional:

```txt
tags
labels
custom metadata
timestamps
```

Extensible.

---

# Stability Levels

Documented APIs categorized:

```txt
Stable
Experimental
Internal
```

Important.

---

Stable:

safe.

Experimental:

may change.

Internal:

not public.

---

# Deprecations

Deprecated APIs listed with:

```txt
replacement
migration path
removal version
```

Policy.

---

# TypeScript Support

Full typings included.

```txt
d.ts shipped
strict mode compatible
generics support
```

---

Example generic graph:

```ts
CaseWaveGraph<PersonNode>
```

Typed graphs.

---

# API Checklist

This reference covers:

✓ classes

✓ methods

✓ props

✓ hooks

✓ attributes

✓ enums

✓ errors

✓ utilities

Complete public API.

---

# Summary

This is authoritative API specification.

Use alongside guides.

---

# Next Document

Next:

```txt
15-plugin-development-guide.md
```

Plugin authoring:

- plugin API

- lifecycle

- hook system

- extension authoring

# 26. API Reference Complete

Definitive public API reference.

Every exported type, interface, function, option, attribute and contract.

Single source of truth.

---

# Contents

```txt
API Philosophy
Package Surface
Core Types
Functions
Interfaces
Classes
Hooks
Configuration Objects
Events
Errors
Type Utilities
Contracts
Reference Conventions
```

---

# API Philosophy

Public APIs are promises.

Treat them as contracts.

Stability matters.

---

Goals:

```txt
discoverable
predictable
typed
documented
stable
```

---

# API Reference Conventions

Every symbol should document:

```txt
purpose
signature
parameters
returns
throws
examples
notes
```

Required.

---

Reference template:

```txt
Name
Signature
Description
Parameters
Returns
Examples
Notes
```

Use consistently.

---

# Package Surface Overview

Example packages:

```txt
@casewavejs/core
@casewavejs/themes
@casewavejs/plugins
```

Document each.

---

# Core Export Categories

Document by category:

```txt
types
factories
utilities
hooks
classes
constants
errors
```

Better navigation.

---

# Core Type: Node

## Purpose

Represents graph entity.

---

## Signature

```ts
interface Node {
 id:string
 type:string
 data?:unknown
 position?:Position
}
```

---

## Fields

### id

Unique identifier.

Required.

---

### type

Node classification.

Examples:

```txt
person
evidence
document
group
```

---

### data

Domain payload.

Optional metadata.

---

### position

Coordinates.

Optional or required by renderer.

---

# Node Example

```ts
const node = {
 id:"person_001",
 type:"person"
}
```

---

# Core Type: Edge

## Purpose

Relationship connection.

---

## Signature

```ts
interface Edge {
 id:string
 source:string
 target:string
 relation?:string
}
```

---

## Fields

source

Origin node.

---

target

Destination node.

---

relation

Optional semantic relation.

Example:

```txt
owns
knows
evidence_of
```

---

# Position

```ts
interface Position {
 x:number
 y:number
}
```

Coordinates.

---

# Graph

```ts
interface Graph {
 nodes:Node[]
 edges:Edge[]
}
```

Root structure.

---

# Graph Invariants

Must guarantee:

```txt
unique ids
valid edge references
consistent structure
```

Critical contract.

---

# Factory Functions

Document all factories.

---

## createGraph()

### Signature

```ts
createGraph(options?):Graph
```

Creates graph instance.

---

Parameters:

options

Optional initialization.

---

Returns:

Graph instance.

---

Example

```ts
const graph=createGraph()
```

---

Notes

Creates empty graph unless seeded.

---

## createNode()

```ts
createNode(config):Node
```

Construct node safely.

---

Parameters

config

Node configuration.

---

Returns

Validated node.

---

Example

```ts
createNode({
 id:"suspect1",
 type:"person"
})
```

---

# Mutation Functions

## addNode()

```ts
addNode(graph,node):Graph
```

Adds node.

---

Parameters

graph

Target graph.

node

Node to insert.

---

Throws

Duplicate id error possible.

---

Returns

Updated graph.

---

# addEdge()

```ts
addEdge(graph,edge):Graph
```

Creates edge relationship.

---

Validates:

```txt
source exists
target exists
edge valid
```

---

# removeNode()

```ts
removeNode(graph,id):Graph
```

Removes node.

May cascade edges depending config.

Document behavior explicitly.

---

# removeEdge()

```ts
removeEdge(graph,id):Graph
```

Removes edge.

---

# Query Utilities

## getNode()

```ts
getNode(graph,id):Node | undefined
```

Lookup by id.

---

## getNeighbors()

```ts
getNeighbors(graph,id):Node[]
```

Adjacent nodes.

---

## findPath()

```ts
findPath(graph,a,b):Path
```

Path query.

Document algorithm semantics.

---

# Validation APIs

## validateGraph()

```ts
validateGraph(graph):ValidationResult
```

Checks graph integrity.

---

Returns:

```ts
{
 valid:boolean
 errors:[]
}
```

---

# Serialization APIs

## exportGraph()

```ts
exportGraph(graph):string
```

Serialize graph.

---

## importGraph()

```ts
importGraph(json):Graph
```

Deserialize graph.

---

Throws

Invalid payload.

Document errors.

---

# Layout APIs

## applyLayout()

```ts
applyLayout(graph,options):Graph
```

Runs layout algorithm.

---

Parameters:

algorithm

Possible values:

```txt
force
grid
hierarchy
radial
```

---

# Renderer APIs

## renderGraph()

```ts
renderGraph(...)
```

Primary renderer entry.

Document thoroughly.

---

# Theme APIs

## getTheme()

```ts
getTheme(id):Theme
```

Fetch theme.

---

## listThemes()

```ts
listThemes():ThemeMeta[]
```

Catalog listing.

---

## searchThemes()

```ts
searchThemes(query)
```

Theme discovery.

---

# Plugin APIs

## registerPlugin()

```ts
registerPlugin(plugin):void
```

Registers extension.

---

## createPlugin()

```ts
createPlugin(config):Plugin
```

Plugin factory.

---

# Hook APIs

## useGraph()

```ts
useGraph()
```

Graph hook.

---

Returns:

graph state interface.

---

## useSelection()

```ts
useSelection()
```

Selection state.

---

## useTheme()

```ts
useTheme()
```

Theme context.

---

# Event Types

Document event contracts.

---

## NodeCreatedEvent

```ts
interface NodeCreatedEvent {
 nodeId:string
 timestamp:number
}
```

---

## SelectionChangedEvent

Document payload shape.

All events need schemas.

---

# Error Types

Document exported errors.

---

## ValidationError

Purpose:

invalid graph data.

---

## PluginError

Plugin execution failure.

---

## ThemeError

Theme system errors.

---

Each error should document:

```txt
when thrown
causes
handling guidance
```

---

# Config Objects

Document every config option.

---

## GraphOptions

```ts
interface GraphOptions {
 allowCycles?:boolean
 strictMode?:boolean
}
```

---

allowCycles

Default:

false

Description:

Allow cyclic relations.

---

strictMode

Default:

true

Description:

Enable strict validation.

---

Document defaults always.

---

# Optional Parameters

Every optional parameter must state:

default behavior.

Mandatory.

---

# Return Contracts

Document exact return guarantees.

Never vague.

---

# Nullable Behavior

Document:

```txt
undefined cases
null cases
error cases
```

Important.

---

# Generic Types

Document generics.

Example:

```ts
GraphNode<T>
```

Explain T.

---

# Utility Types

Document exported utility types.

Examples:

```ts
PartialTheme
PluginContext
GraphPatch
```

Often overlooked.

---

# Constants

Document constants too.

Example:

```ts
DEFAULT_THEME
MAX_GRAPH_DEPTH
```

Not just functions.

---

# Enumerations

Document enums.

Example:

```ts
LayoutAlgorithm
```

List all values.

---

# Lifecycle Hooks Reference

Document:

hook name

timing

parameters

return effects

Complete reference.

---

# Deprecations

Every deprecated API must note:

replacement.

Example:

```ts
Deprecated:
Use createGraphV2
```

Very important.

---

# Compatibility Notes

Document version notes per API if needed.

---

# Usage Examples Section

Every major API should include:

minimal example

advanced example

error example

Excellent docs pattern.

---

# Example Block Pattern

Minimal:

```ts
...
```

Advanced:

```ts
...
```

Use for each API.

---

# API Stability Labels

Useful labels:

```txt
stable
experimental
deprecated
internal
```

Great signal.

---

# API Index

Generate alphabetical index:

```txt
addEdge
addNode
applyLayout
createGraph
...
```

Excellent navigation.

---

# Auto Generated Reference

Recommended:

generate API docs from types.

Avoid drift.

---

# Source Of Truth

Prefer types as source.

Docs derived from code.

Strong practice.

---

# API Review Checklist

Before release:

✓ signatures current

✓ params documented

✓ examples compile

✓ errors documented

✓ deprecated APIs flagged

---

# Summary

This reference covers:

```txt
types
functions
interfaces
events
configs
contracts
complete api surface
```

Definitive API reference foundation.

---

# Next Document

Next:

```txt
27-architecture-decision-records.md
```

Covers:

- architectural decisions

- ADR system

- rationale history

- engineering records




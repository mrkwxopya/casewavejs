# 31. API Reference Index

Master index for complete API documentation.

This begins full A-Z reference layer.

Every exported type,
function,
class,
interface,
attribute,
option,
hook,
event,
token
should be discoverable from here.

This becomes documentation backbone.

---

# Purpose

This document acts as:

```txt
api map
reference entrypoint
symbol index
navigation hub
cross-link registry
```

Users should never wonder:

"where is this documented?"

---

# Reference Structure

API docs split into:

```txt
Core
Graph
Nodes
Edges
Layouts
Plugins
Themes
Events
Utilities
Types
Hooks
Errors
Internals
```

Everything indexed.

---

# Reference Conventions

Each API entry includes:

```txt
signature
purpose
parameters
returns
examples
notes
related APIs
```

Required.

---

# Symbol Entry Template

Every symbol uses template:

````md
## SymbolName

Purpose

Signature

Parameters

Returns

Examples

Notes

Related
`````

No exceptions.

---

# Core API Index

---

## Graph Construction

Document:

```txt
createGraph
createGraphStore
createGraphEngine
createGraphSerializer
```

Files:

```txt
api/core/createGraph.md
api/core/createGraphStore.md
api/core/createGraphEngine.md
```

---

## Graph Lifecycle

Document:

```txt
mount
destroy
hydrate
serialize
clone
reset
```

---

## State APIs

Document:

```txt
getState
setState
subscribe
snapshot
transaction
```

---

# Node API Index

Document all:

```txt
addNode
removeNode
updateNode
moveNode
groupNode
collapseNode
expandNode
cloneNode
```

Each gets own file.

---

## Node Attributes Reference

Dedicated reference:

```txt
id
type
position
data
metadata
style
ports
visibility
locked
```

Every attribute explained.

---

## Node Data Schema

Document:

```txt
NodeConfig
NodeData
NodeStyle
NodePort
```

Include full schema tables.

---

# Edge API Index

Document:

```txt
addEdge
removeEdge
updateEdge
rerouteEdge
reverseEdge
groupEdge
```

All indexed.

---

## Edge Attributes

Document:

```txt
source
target
direction
relation
routing
label
style
weight
```

Explain purpose.

---

# Layout APIs

Document:

```txt
applyLayout
registerLayout
runLayoutWorker
cancelLayout
```

Each with examples.

---

## Built-in Layout Catalog

Dedicated references:

```txt
dagre
force
grid
radial
cluster
hierarchy
```

One page each.

---

# Plugin API Index

Document:

```txt
registerPlugin
removePlugin
pluginHooks
pluginContext
pluginLifecycle
```

Complete coverage.

---

## Plugin Hooks

Separate index:

```txt
beforeMount
afterMount
beforeRender
afterRender
beforeUpdate
afterUpdate
```

All documented.

---

# Theme API Index

Document:

```txt
createTheme
extendTheme
validateTheme
registerTheme
generateTheme
```

---

## Theme Token Reference

Massive token catalog:

```txt
colors
spacing
typography
surfaces
borders
motion
shadows
states
```

Every token explained.

---

## Theme Catalog Index

Link all 270 themes.

Structure:

```txt
themes/accessibility.md
themes/analyst.md
themes/windows-95.md
...
```

One page per theme.

Huge documentation asset.

---

# Event API Index

Document:

```txt
on
off
emit
subscribeEvent
eventBus
```

All covered.

---

## Event Catalog

Document emitted events:

```txt
node:add
node:update
edge:add
selection:change
layout:start
layout:end
```

And more.

---

# Hook Reference

Document:

```txt
useGraph
useNode
useSelection
useViewport
useTheme
```

Hook-by-hook reference.

---

# Utility API Index

Document:

```txt
validateGraph
deepClone
diffGraph
serializeGraph
deserializeGraph
```

Complete utilities section.

---

# Type Reference Index

Huge generated index.

Document all exported types:

```txt
GraphConfig
NodeConfig
EdgeConfig
PluginContext
ThemeTokens
...
```

Everything.

---

# Interface Reference

Every interface gets page.

Include:

purpose

fields

examples

relationships

important.

---

# Error Reference

Document all errors.

Examples:

```txt
DuplicateNodeError
InvalidEdgeError
PluginLoadError
ThemeValidationError
```

Users need this.

---

# Error Troubleshooting Links

Each error links back:

```txt
API ref -> troubleshooting
```

Cross linked.

---

# Constants Reference

Document constants:

```txt
defaults
limits
enums
flags
```

Often forgotten.

Not here.

---

# Configuration Reference

Master config catalog:

```txt
graph config
layout config
plugin config
theme config
```

All options documented.

---

# Option Tables Standard

Use tables:

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |

For every config.

Mandatory.

---

# Search Index

Generate symbol search file:

```txt
api-index.json
```

Supports docs search.

Important.

---

# Cross-Link Rules

Every symbol should link:

```txt
parent api
related api
examples
guides
```

Connected docs.

---

# Navigation Structure

Sidebar model:

```txt
Getting Started
Guides
API Reference
Themes
Plugins
Examples
```

This index powers API branch.

---

# Example Coverage Rules

Every major symbol requires:

minimum 1 basic example

1 advanced example.

Required.

---

# Generated API Docs

Use generated docs for:

```txt
types
interfaces
symbols
signatures
```

Manual augmentation for explanations.

Best hybrid model.

---

# Reference Categories A-Z

Alphabetical index:

```txt
A
addEdge
addNode
applyLayout
...

B
...

C
...
```

Full symbol lexicon.

---

# Symbol Metadata

Track per symbol:

```txt
introduced version
deprecated?
experimental?
stable?
```

Extremely useful.

---

# Stability Labels

Possible labels:

```txt
stable
experimental
deprecated
internal
```

Shown per symbol.

---

# API Examples Index

Separate examples registry:

```txt
examples/basic
examples/advanced
examples/recipes
```

Referenced from symbols.

---

# Attribute Documentation Requirement

Every attribute documents:

```txt
type
purpose
constraints
defaults
gotchas
```

Deep detail.

---

# Internals Index

Optional internal docs:

```txt
scheduler
renderer
graph store
diff engine
```

Advanced users.

---

# API Reference Coverage Goal

Coverage target:

```txt
100 percent exported symbols
```

No undocumented exports.

---

# Example File Map

Planned:

```txt
api/
 core/
 graph/
 nodes/
 edges/
 plugins/
 themes/
 types/
 errors/
```

Reference filesystem.

---

# API Authoring Checklist

Before symbol page complete:

```txt
signature present
examples included
types linked
related links present
```

Checklist pass.

---

# FAQ

## Are private internals documented?

Only relevant internals.

---

## Generated or handwritten?

Hybrid.

---

## Are attributes documented individually?

Yes.

Every one.

---

# Summary

This establishes:

```txt
master api index
symbol registry
cross-link structure
full a-z reference system
```

Documentation foundation milestone.

---

# Next Document

Next:

```txt
32-core-api-reference-creategraph.md
```

Starts actual symbol-by-symbol deep API pages.
Beginning with createGraph.




# 33. Core API Reference — GraphInstance

Complete reference for returned runtime object from:

createGraph()

This is primary operational API.

---

# Symbol

```ts
GraphInstance
```

---

# Category

```txt
Core Runtime Interface
Stable
Public
```

---

# Purpose

GraphInstance represents live graph runtime.

Provides:

```txt
mutation
queries
events
layout control
serialization
plugins
lifecycle control
```

Main operational surface.

---

# Interface Overview

```ts
interface GraphInstance {
 addNode()
 updateNode()
 removeNode()

 addEdge()
 updateEdge()
 removeEdge()

 getNode()
 getEdge()

 getNodes()
 getEdges()

 layout()

 serialize()
 hydrate()

 on()
 off()
 emit()

 use()

 transaction()

 destroy()
}
```

Expanded below.

---

# Node Methods

---

## addNode

Signature

```ts
addNode(
 node:NodeConfig
):Node
```

Adds node.

---

Example

```ts
graph.addNode({
 id:"evidence_1",
 type:"evidence"
});
```

---

Returns

```ts
Node
```

Inserted node instance.

---

## Parameters

NodeConfig supports:

```ts
id
type
position
data
style
metadata
ports
```

See node reference.

---

# updateNode

Signature

```ts
updateNode(
 id:string,
 patch:Partial<NodeConfig>
):Node
```

Updates existing node.

---

Example

```ts
graph.updateNode(
 "suspect_1",
 {
   data:{
    label:"Updated"
   }
 }
);
```

---

Patch semantics:

partial merge.

Not full replace.

Important.

---

# removeNode

```ts
removeNode(id:string):void
```

Removes node.

---

Example

```ts
graph.removeNode(
 "suspect_1"
);
```

---

Behavior

By default:

connected edges removed too.

Cascade.

---

# cloneNode

```ts
cloneNode(
 id:string
)
```

Duplicates node.

---

Example

```ts
graph.cloneNode("x");
```

Useful templates.

---

# groupNode

```ts
groupNode(
 child,
 parent
)
```

Creates grouping relation.

---

# expandNode

Expands collapsed node group.

---

# collapseNode

Collapses grouped node.

---

# Edge Methods

---

## addEdge

```ts
addEdge(
 edge:EdgeConfig
):Edge
```

Creates relationship.

---

Example

```ts
graph.addEdge({
 source:"a",
 target:"b",
 relation:"linked_to"
});
```

---

## updateEdge

```ts
updateEdge(
 id,
 patch
)
```

Partial edge update.

---

## removeEdge

```ts
removeEdge(id)
```

Deletes edge.

---

## rerouteEdge

```ts
rerouteEdge(
 id,
 endpoints
)
```

Changes endpoints.

---

# Query Methods

---

## getNode

```ts
getNode(
 id
):Node | null
```

Retrieve single node.

---

Example

```ts
const suspect=
 graph.getNode("s1");
```

---

## getEdge

Gets edge by id.

---

## getNodes

```ts
getNodes():Node[]
```

All nodes.

---

## getEdges

```ts
getEdges():Edge[]
```

All edges.

---

## findNodes

Search utility.

```ts
findNodes(predicate)
```

---

Example

```ts
graph.findNodes(
 n=>n.type==="person"
)
```

---

# State Methods

---

## getState

```ts
getState()
```

Returns runtime state snapshot.

---

## snapshot

Immutable snapshot.

Useful debugging.

---

## transaction

Batch mutations.

Signature:

```ts
transaction(fn)
```

---

Example

```ts
graph.transaction(()=>{
 graph.addNode(...)
 graph.addEdge(...)
});
```

Much safer.

---

# Layout Methods

---

## layout

Signature

```ts
layout(
 options?
)
```

Runs layout engine.

---

Example

```ts
graph.layout({
 type:"force"
});
```

---

## cancelLayout

Stops active layout.

---

## relayout

Re-run layout.

---

# Serialization

---

## serialize

```ts
serialize():SerializedGraph
```

Exports graph.

---

Example

```ts
const json=
 graph.serialize();
```

---

## hydrate

```ts
hydrate(data)
```

Loads serialized graph.

---

Example

```ts
graph.hydrate(data);
```

---

## clone

Deep duplicate graph.

```ts
graph.clone()
```

---

# Event APIs

---

## on

```ts
on(
 event,
 handler
)
```

Subscribe.

---

Example

```ts
graph.on(
 "node:add",
 e=>{
  console.log(e);
 }
);
```

---

## off

Remove listener.

```ts
graph.off(...)
```

---

## emit

Emit event.

```ts
graph.emit(...)
```

---

# Plugin APIs

---

## use

Registers plugin.

```ts
graph.use(plugin)
```

---

Example

```ts
graph.use(
 auditPlugin
);
```

---

## removePlugin

Detach plugin.

---

## getPlugins

List active plugins.

---

# Viewport Methods

---

## zoomToFit

```ts
graph.zoomToFit()
```

Fits graph.

---

## centerOnNode

```ts
graph.centerOnNode(id)
```

Focus node.

---

## panTo

Viewport movement.

---

# Selection APIs

---

## selectNode

```ts
selectNode(id)
```

---

## clearSelection

Clears selections.

---

# Undo/Redo

If enabled:

```ts
undo()
redo()
```

History operations.

---

# Lifecycle Methods

---

## destroy

Critical.

```ts
destroy()
```

Cleans:

```txt
listeners
workers
plugins
memory
subscriptions
```

Always call.

---

## reset

Clears graph state.

---

# GraphInstance Events

Built-in events:

```txt
node:add
node:update
node:remove

edge:add
edge:update

layout:start
layout:end

selection:change
```

Documented individually.

---

# Defaults

Runtime defaults:

```txt
events enabled
history optional
layout idle
plugins active
```

---

# Common Patterns

---

## Batch Construction

```ts
graph.transaction(()=>{
 ...
});
```

Best practice.

---

## Event Driven

```ts
graph.on(...)
```

Reactive model.

---

## Serialized Persistence

```ts
save(graph.serialize())
```

Common workflow.

---

# Performance Notes

Prefer:

```txt
transactions
batched updates
worker layouts
```

for large graphs.

---

# Constraints

```txt
node ids unique
edges valid
destroy after use
```

Must hold.

---

# Errors

Possible:

```txt
DuplicateNodeError
InvalidEdgeError
LayoutFailureError
```

See error docs.

---

# Anti-Patterns

Avoid:

```txt
calling layout every mutation
recreating listeners repeatedly
mutating internal node objects
skipping destroy
```

Bad.

---

# React Pattern

```tsx
const graphRef=
 useRef();

useEffect(()=>{
 graphRef.current=
  createGraph();

 return ()=>{
  graphRef.current.destroy();
 };
},[]);
```

Recommended.

---

# FAQ

## Can multiple transactions nest?

Supported,
but shallow preferred.

---

## Are methods chainable?

Some are.

Documented individually.

---

## Is runtime mutable?

Via public APIs only.

---

# Related Types

```ts
Node
Edge
GraphState
SerializedGraph
Plugin
```

See type docs.

---

# Version Metadata

```txt
Introduced:
v0.1.0

Status:
Stable
```

---

# Source

```txt
packages/core/src/types/GraphInstance.ts
```

---

# Summary

GraphInstance provides:

```txt
runtime mutation
queries
events
layouts
plugins
lifecycle control
```

Primary operational interface.

---

# Next Document

Next:

```txt
34-node-api-reference.md
```

Begins full Node API system.

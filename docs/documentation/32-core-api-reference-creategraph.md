# 32. Core API Reference — createGraph

First deep symbol-level API document.

Every important export gets this level of depth.

This is reference gold standard.

---

# Symbol

```ts
createGraph()
```

Primary graph engine constructor.

Most users enter library through this API.

---

# Category

```txt
Core API
Stable
Public
```

---

# Import

```ts
import { createGraph } from "casewave";
```

---

# Signature

```ts
function createGraph(
  config?: GraphConfig
): GraphInstance
```

---

# Purpose

Creates a new graph instance with:

```txt
state management
node registry
edge registry
layout engine
plugin system
event bus
serialization hooks
```

Core runtime starts here.

---

# Basic Example

```ts
import { createGraph } from "casewave";

const graph = createGraph();
```

Minimal graph instance.

---

# Configured Example

```ts
const graph = createGraph({
  allowCycles: true,
  debug: true,
  layout: {
    type: "force"
  }
});
```

Configured startup.

---

# Return Type

Returns:

```ts
GraphInstance
```

Provides runtime graph API.

---

# Returns Interface

High-level:

```ts
interface GraphInstance {
 addNode()
 addEdge()
 removeNode()
 destroy()
 serialize()
 layout()
 on()
 off()
}
```

Expanded below.

---

# Parameters

---

## config

Optional.

Type:

```ts
GraphConfig
```

Runtime configuration object.

---

# GraphConfig Overview

```ts
interface GraphConfig {
 allowCycles?: boolean
 debug?: boolean
 readonly?: boolean
 layout?: LayoutConfig
 plugins?: Plugin[]
 theme?: ThemeConfig
}
```

---

# Config: allowCycles

Type:

```ts
boolean
```

Default:

```ts
false
```

Controls whether cyclic relationships allowed.

---

## Example

```ts
createGraph({
 allowCycles:true
});
```

Useful for investigation graphs.

---

# Config: debug

Type:

```ts
boolean
```

Default:

```ts
false
```

Enables diagnostics.

---

Example:

```ts
createGraph({
 debug:true
});
```

Useful in development.

---

# Config: readonly

Disables mutation.

Example:

```ts
createGraph({
 readonly:true
});
```

Viewer mode.

---

# Config: layout

Controls default layout engine.

Example:

```ts
layout:{
 type:"dagre"
}
```

See layout reference.

---

# Config: plugins

Registers plugins at construction.

Example:

```ts
plugins:[
 myPlugin
]
```

Preferred over post-registration in many cases.

---

# Config: theme

Applies graph-level theme.

Example:

```ts
theme:{
 preset:"analyst"
}
```

---

# GraphInstance Methods

---

## addNode

Signature:

```ts
addNode(node:NodeConfig):Node
```

Adds node.

---

Example

```ts
graph.addNode({
 id:"suspect_1",
 type:"person"
});
```

---

## addEdge

Signature:

```ts
addEdge(edge:EdgeConfig):Edge
```

Adds edge.

---

Example

```ts
graph.addEdge({
 source:"a",
 target:"b"
});
```

---

## removeNode

Removes node.

```ts
graph.removeNode("suspect_1");
```

---

## updateNode

Update node data.

```ts
graph.updateNode(id,{
 label:"Updated"
});
```

---

## serialize

Exports graph state.

```ts
const json = graph.serialize();
```

---

## destroy

Destroys instance.

Important cleanup.

```ts
graph.destroy();
```

Always call when appropriate.

---

# Lifecycle

Typical flow:

```txt
createGraph
add nodes
add edges
layout
interact
serialize
destroy
```

Common lifecycle.

---

# Common Patterns

---

## Pattern: Investigation Board

```ts
const graph=createGraph({
 allowCycles:true
});
```

Good fit.

---

## Pattern: Readonly Viewer

```ts
createGraph({
 readonly:true
});
```

Viewer only.

---

## Pattern: Plugin-Driven Runtime

```ts
createGraph({
 plugins:[
  analyticsPlugin,
  auditPlugin
 ]
});
```

Composable architecture.

---

# Errors

Possible errors:

```txt
InvalidGraphConfigError
PluginLoadError
ThemeValidationError
```

See error reference.

---

# Constraints

Important:

```txt
node ids must be unique
edges need valid endpoints
plugins must implement contract
```

Required.

---

# Defaults

Default internal behavior:

```txt
cycles disabled
debug off
layout auto
plugins empty
```

If omitted.

---

# Performance Notes

For huge graphs:

prefer config upfront.

Avoid runtime reconfiguration.

---

# Memory Notes

Destroy graph instances.

Avoid orphaned instances.

Especially in React unmount.

---

# React Example

```tsx
import { useEffect } from "react";
import { createGraph } from "casewave";

useEffect(()=>{
 const graph=createGraph();

 return ()=>{
  graph.destroy();
 };
},[]);
```

Safe lifecycle.

---

# Advanced Example

```ts
const graph=createGraph({
 allowCycles:true,
 debug:true,
 layout:{
  type:"force",
  worker:true
 },
 plugins:[
  inspectorPlugin
 ]
});
```

Production-style setup.

---

# Related APIs

See also:

```txt
createGraphStore
createGraphEngine
addNode
addEdge
serializeGraph
```

Related references.

---

# Gotchas

---

## Duplicate IDs

Bad:

```ts
graph.addNode({id:"x"})
graph.addNode({id:"x"})
```

Invalid.

---

## Missing destroy()

Can leak memory.

Common mistake.

---

## Mutating external node objects

Avoid:

```ts
node.label="x"
```

Use update APIs.

---

# Anti-Patterns

Avoid:

```txt
recreate graph every render
mutate graph internals
skip destroy
bypass public APIs
```

Bad practice.

---

# FAQ

## Is config required?

No.

Defaults exist.

---

## Can config change later?

Mostly yes through dedicated APIs.

But startup config preferred.

---

## Can plugins be added later?

Yes.

Via plugin APIs.

---

## Can multiple graph instances exist?

Yes.

Fully supported.

---

# Type Definitions

Related types:

```ts
GraphConfig
GraphInstance
NodeConfig
EdgeConfig
LayoutConfig
```

See type reference.

---

# Version Metadata

```txt
Introduced: v0.1.0
Status: Stable
```

---

# Source

```txt
packages/core/src/createGraph.ts
```

Implementation location.

---

# Summary

createGraph provides:

```txt
graph runtime creation
configuration
plugin startup
layout setup
core entrypoint
```

Foundational API.

---

# Next Document

Next:

```txt
33-core-api-reference-graphinstance.md
```

Deep reference for GraphInstance methods.




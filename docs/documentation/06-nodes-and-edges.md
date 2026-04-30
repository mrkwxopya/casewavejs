# 06. Nodes and Edges

Complete technical reference for the graph model.

This document covers:

- node system
- edge system
- ports
- groups
- hyperedges
- routing
- relationships
- graph semantics
- type models
- advanced structures

This is one of the core concepts of CaseWave.

---

# Graph Fundamentals

Everything in CaseWave is built from:

```txt
Nodes
Edges
```

Everything else is extensions.

---

# What is a Node?

Node = entity.

Represents a thing.

Examples:

- person
- evidence
- document
- event
- place
- group
- scene

Nodes are graph objects.

---

# Base Node Model

Typical shape:

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

Core model.

---

# Node Fields

---

## id

Unique identifier.

Example:

```ts
id:"person_001"
```

Required.

Never duplicate.

---

## type

Defines behavior.

Example:

```ts
type:"person"
```

Examples:

```txt
person
evidence
document
place
group
timeline
event
```

---

## position

Canvas coordinates.

```ts
position:{
 x:100,
 y:250
}
```

Controls placement.

---

## data

Payload.

Example:

```ts
data:{
 name:"Suspect A",
 role:"witness"
}
```

Stores domain data.

---

# Creating Nodes

Example:

```ts
graph.addNode({
 id:"suspect_1",
 type:"person",
 position:{
  x:100,
  y:120
 },
 data:{
  name:"Marcus"
 }
})
```

Basic pattern.

---

# Node Categories

---

## Entity Nodes

Represent objects.

Examples:

- person
- object
- location

---

## Evidence Nodes

Represent clues.

Example:

```txt
evidence
forensics
documents
photos
```

---

## Group Nodes

Contain other nodes.

Container semantics.

Example:

```ts
type:"group"
```

Useful for:

- clusters
- folders
- regions

---

## Scene Nodes

Represent locations/scenes.

Examples:

```txt
crime scene
building
map location
```

---

## Timeline Nodes

Event chronology.

Examples:

```txt
8pm call
9pm murder
10pm witness
```

---

# Custom Node Types

Users may define their own.

Example:

```ts
type:"surveillance_camera"
```

Allowed.

Highly extensible.

---

# Node Styling vs Data

Separate:

Behavior:

```ts
data
```

Visuals:

```ts
theme
```

Never mix concerns.

Avoid:

```ts
data:{
 background:"red"
}
```

Wrong layer.

---

# Node Metadata

Optional metadata:

```ts
meta:{
 locked:true,
 hidden:false
}
```

Useful for advanced behavior.

---

# Node Selection

Nodes may support:

```ts
selected
hovered
focused
```

Interaction states.

---

# Node Ports

Ports are connection anchors.

Instead of:

```txt
node → node
```

Can be:

```txt
node.port → node.port
```

Much richer.

---

## Port Model

Example:

```ts
ports:[
 {
   id:"out-1",
   side:"right"
 }
]
```

---

Possible sides:

```txt
top
right
bottom
left
```

---

# Port Usage

Example:

```ts
source:{
 nodeId:"a",
 portId:"out"
}
```

Very useful for diagrams.

---

# What is an Edge?

Edge = relationship.

Connects nodes.

Examples:

- knows
- owns
- linked_to
- evidence_of

---

# Edge Model

Example:

```ts
type CaseWaveEdge={
 id:string

 source:{}

 target:{}

 relation?:string
}
```

---

# Edge Example

```ts
graph.addEdge({
 id:"edge_1",

 source:{
  nodeId:"person_1"
 },

 target:{
  nodeId:"evidence_1"
 },

 relation:"evidence_of"
})
```

---

# Edge Fields

---

## id

Unique.

```ts
edge_1
```

---

## source

Origin.

---

## target

Destination.

---

## relation

Semantic meaning.

Examples:

```txt
knows
caused_by
evidence_of
connected_to
```

Extremely useful.

---

# Directed Edges

Arrow relationships.

Example:

```ts
direction:"directed"
```

Example:

```txt
A → B
```

---

# Undirected

Mutual link.

```ts
direction:"undirected"
```

```txt
A — B
```

---

# Edge Types

Examples:

- dependency
- evidence
- hierarchy
- reference
- causal

Possible:

```ts
type:"causal"
```

---

# Edge Labels

Example:

```ts
label:"called at 9pm"
```

Adds annotation.

---

# Edge Styling

Often includes:

```ts
routing:"bezier"
```

Possible:

```txt
straight
orthogonal
bezier
smoothstep
```

---

# Routing

Determines edge paths.

---

## Straight

Simple line.

---

## Orthogonal

Right-angle routing.

Great for investigation boards.

---

## Bezier

Curved edges.

---

# Hyperedges

Advanced feature.

One edge may connect multiple nodes.

Normal:

```txt
A → B
```

Hyperedge:

```txt
A,B,C → D
```

Powerful.

---

## Example Concept

```ts
type:"hyperedge"
```

Useful for:

- multi-party relationships
- shared evidence
- conspiracy structures

---

# Nested Graph Structures

Nodes may contain subgraphs.

Example:

```txt
group node
 └ subgraph
```

Useful for:

- folders
- compound nodes
- nested investigations

---

# Node Groups

Group node example:

```ts
graph.addNode({
 type:"group"
})
```

Contains children.

---

# Parent/Child

Possible model:

```ts
parentId:"group_1"
```

Useful hierarchy.

---

# Relationship Modeling

Good:

```txt
suspect
  linked_by
weapon
```

Better than encoding relations inside node data.

Use edges.

---

# Evidence Graph Example

```txt
Suspect
 ↓
Weapon
 ↓
Fingerprint
```

All modeled via edges.

---

# Investigation Example

```txt
Person
Place
Document
Witness
Timeline Event
```

All nodes.

Relationships as edges.

---

# Graph Semantics

Edges should carry meaning.

Avoid:

```txt
random connection
```

Prefer:

```txt
caused_by
located_at
owns
mentions
```

Semantic graph.

---

# Validation Rules

Possible rules:

No self-loop:

```txt
A → A
```

disallow.

Or allow configurable.

---

Prevent duplicates:

```txt
A→B
A→B
```

maybe reject.

---

Cycle control:

```ts
allowCycles:true
```

Possible option.

---

# Node APIs

Likely methods:

```ts
addNode()
removeNode()
updateNode()
getNode()
```

---

# Edge APIs

```ts
addEdge()
removeEdge()
updateEdge()
getEdge()
```

---

# Traversal

Possible:

```ts
getNeighbors(node)
```

```ts
getConnectedEdges(node)
```

```ts
dfs(...)
```

```ts
bfs(...)
```

Useful algorithms.

---

# IDs Best Practices

Prefer:

```txt
person_001
evidence_014
place_002
```

Avoid:

```txt
a
node1
x
```

Use semantic ids.

---

# Typical Domain Types

Recommended starter node set:

```txt
person
place
document
record
evidence
event
group
```

Strong baseline.

---

# Example Full Graph

```ts
graph.addNode({
 id:"person_1",
 type:"person"
})

graph.addNode({
 id:"weapon_1",
 type:"evidence"
})

graph.addEdge({
 id:"edge_1",
 source:{
  nodeId:"person_1"
 },
 target:{
  nodeId:"weapon_1"
 },
 relation:"owned"
})
```

Minimal investigation graph.

---

# Type Interfaces

Possible richer node:

```ts
interface PersonNode
 extends CaseWaveNode{

 suspectLevel:number
}
```

Domain specialization supported.

---

# Common Mistakes

Avoid:

Putting relationships inside nodes only:

Bad.

Use edges.

---

Using visual types as semantics:

Bad:

```txt
red node means suspect
```

Better:

```ts
type:"suspect"
```

Semantics first.

---

# Summary

Core model:

```txt
Nodes
Edges
Ports
Groups
Hyperedges
Routing
Semantics
```

Everything grows from this.

---

# Next Document

Continue with:

```txt
07-layouts-and-positioning.md
```

Next covers:

- auto layout engines
- dag layouts
- force layouts
- grid layouts
- manual positioning
- collision handling
- fit view
- viewport systems

# 34. Node API Reference

Complete node system reference.

Nodes are primary graph entities.

People,
evidence,
documents,
locations,
events,
groups—

all represented as nodes.

This is full node model.

---

# Contents

```txt
Node Concepts
NodeConfig
Node Attributes
Node Operations
Ports
Grouping
Styling
Metadata
Validation
Patterns
```

---

# What Is A Node

A node represents:

```txt
entity
concept
artifact
container
group
endpoint
```

Fundamental graph unit.

---

# Core Symbol

```ts
NodeConfig
```

Primary node schema.

---

# Base Interface

```ts
interface NodeConfig {
 id:string
 type:string

 position?
 data?
 style?
 metadata?
 ports?
 visible?
 locked?
}
```

Expanded below.

---

# Required Fields

Required:

```txt
id
type
```

Everything else optional.

---

# id

Type:

```ts
string
```

Unique identifier.

Required.

---

Example

```ts
id:"suspect_001"
```

---

# ID Rules

Must be:

```txt
unique
stable
predictable
serializable
```

Do not generate random ids casually.

---

Bad

```ts
Math.random()
```

Avoid.

---

# type

Type:

```ts
string
```

Node category.

Examples:

```txt
person
evidence
document
place
group
```

---

Example

```ts
type:"person"
```

---

# position

Type

```ts
{
 x:number
 y:number
}
```

Coordinates.

---

Example

```ts
position:{
 x:100,
 y:220
}
```

---

# data

Primary payload.

Type:

```ts
Record<string,unknown>
```

---

Example

```ts
data:{
 name:"Alice",
 role:"Suspect"
}
```

Most app-specific data here.

---

# data Guidelines

Use data for:

```txt
labels
content
entity fields
custom app data
```

Not internal engine flags.

---

# style

Visual overrides.

Type:

```ts
NodeStyle
```

---

Example

```ts
style:{
 shape:"hex",
 radius:12
}
```

---

# metadata

System-level annotations.

Example:

```ts
metadata:{
 tags:["important"],
 createdBy:"system"
}
```

---

Use metadata for:

```txt
audit
flags
classification
internal annotations
```

---

# visible

Type:

```ts
boolean
```

Controls visibility.

---

Example

```ts
visible:false
```

Hidden but present.

---

# locked

Prevents movement.

```ts
locked:true
```

Pinned node.

---

# Full Example

```ts
const node={
 id:"suspect_1",
 type:"person",

 position:{
  x:300,
  y:180
 },

 data:{
  name:"Murat"
 },

 style:{
  shape:"circle"
 },

 metadata:{
  priority:"high"
 }
};
```

Complete node.

---

# Creating Nodes

```ts
graph.addNode(node);
```

Primary creation.

---

# Updating Nodes

```ts
graph.updateNode(
 id,
 patch
);
```

Patch update.

---

# Patch Example

```ts
graph.updateNode(
 "suspect_1",
 {
  data:{
   status:"cleared"
  }
 }
);
```

---

# Removing Nodes

```ts
graph.removeNode(
 "suspect_1"
);
```

Deletes node.

---

# Node Types

Common built-ins:

```txt
person
evidence
place
record
document
group
```

Extensible.

---

# Custom Types

Supported.

```ts
type:"custom-agent"
```

Valid.

---

# Node Ports

Ports define connection anchors.

---

## Port Interface

```ts
interface Port {
 id:string
 side:string
 label?:string
}
```

---

Example

```ts
ports:[
 {
  id:"out",
  side:"right"
 }
]
```

---

Port Sides

```txt
top
right
bottom
left
```

Standard.

---

# Port Use Cases

Useful for:

```txt
multi-channel links
logic graphs
workflow diagrams
```

---

# Group Nodes

Nodes can contain nodes.

Group pattern.

---

Example

```ts
type:"group"
```

Container node.

---

# Collapse Support

Group nodes may support:

```txt
collapse
expand
nested visibility
```

Advanced grouping.

---

# Node Styling

NodeStyle example:

```ts
interface NodeStyle{
 shape?
 radius?
 width?
 height?
 color?
 border?
}
```

---

# Common Shapes

```txt
circle
rect
diamond
hex
custom
```

Supported.

---

# Style Example

```ts
style:{
 shape:"diamond",
 width:160
}
```

---

# Labels

Often in:

```ts
data.label
```

Convention.

---

Example

```ts
data:{
 label:"Crime Scene"
}
```

---

# Node Metadata Patterns

Examples:

```ts
metadata:{
 risk:"high",
 confidence:0.93
}
```

Useful.

---

# Validation Rules

Node validation checks:

```txt
id exists
type exists
position valid
ports valid
```

Required.

---

# Validation API

```ts
validateNode(node)
```

Recommended.

---

# Duplicate IDs

Invalid:

```ts
same id twice
```

Rejected.

---

# Node Queries

```ts
getNode(id)
findNodes(fn)
```

Search utilities.

---

# Node Selection

```ts
selectNode(id)
```

Selection APIs.

---

# Cloning Nodes

```ts
cloneNode(id)
```

Duplicate entity.

---

# Node Relations

Nodes can:

```txt
connect
group
nest
reference
```

Relationship flexibility.

---

# Large Data Warning

Avoid huge blobs in:

```ts
data
```

Store references when possible.

---

Bad

```ts
data:{
 massiveBinaryBlob...
}
```

Avoid.

---

# Performance Notes

Thousands of nodes?

Prefer:

```txt
virtualization
batched updates
layout workers
```

---

# Common Patterns

---

## Person Node

```ts
{
 id:"person_1",
 type:"person"
}
```

---

## Evidence Node

```ts
{
 id:"evidence_1",
 type:"evidence"
}
```

---

## Group Node

```ts
{
 id:"group_1",
 type:"group"
}
```

---

# Anti-Patterns

Avoid:

```txt
mutable node objects
duplicate ids
business logic in style
internal state in data
```

Bad.

---

# FAQ

## Can nodes have arbitrary data?

Yes.

---

## Can node types be custom?

Yes.

Unlimited.

---

## Are ports required?

No.

Optional.

---

## Can nodes nest?

Yes.

Group system.

---

# Related APIs

See:

```txt
addNode
updateNode
removeNode
Edge API
Layout API
```

Linked docs.

---

# Related Types

```ts
NodeConfig
NodeStyle
Port
NodeMetadata
```

See type refs.

---

# Version Metadata

```txt
Stable
v0.1.0
```

---

# Source

```txt
packages/core/src/types/node.ts
```

---

# Summary

Node system provides:

```txt
entities
schema
styling
ports
grouping
metadata
```

Foundation of graph model.

---

# Next Document

Next:

```txt
35-edge-api-reference.md
```

Begins full edge relationship system.

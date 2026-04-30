# 35. Edge API Reference

Complete relationship system reference.

Edges connect meaning.

Without edges:

nodes are isolated facts.

With edges:

they become graph intelligence.

---

# Contents

```txt
Edge Concepts
EdgeConfig
Relationship Models
Edge Attributes
Routing
Directionality
Styling
Validation
Advanced Relations
Patterns
```

---

# What Is An Edge

An edge represents:

```txt
relationship
dependency
association
causality
evidence linkage
flow
```

Connection primitive.

---

# Core Symbol

```ts
EdgeConfig
```

Primary edge schema.

---

# Base Interface

```ts
interface EdgeConfig {
 id?:string

 source:string
 target:string

 relation?
 direction?
 routing?

 label?
 data?
 style?
 metadata?

 weight?
 visible?
}
```

Expanded below.

---

# Required Fields

Required:

```txt
source
target
```

Minimum valid edge.

---

# source

Type:

```ts
string
```

Source node id.

---

Example

```ts
source:"suspect_1"
```

---

# target

Type:

```ts
string
```

Target node id.

---

Example

```ts
target:"evidence_4"
```

---

# Minimal Edge

```ts
{
 source:"a",
 target:"b"
}
```

Valid.

---

# id

Optional.

```ts
id:string
```

Can be generated.

Recommended explicit for persistence.

---

Example

```ts
id:"edge_001"
```

---

# relation

Semantic relationship label.

Type:

```ts
string
```

---

Examples

```txt
owns
connected_to
knows
evidence_of
located_at
caused_by
```

---

Example

```ts
relation:"evidence_of"
```

Very common.

---

# direction

Type:

```ts
"directed"
"undirected"
"bidirectional"
```

---

Default

```txt
directed
```

---

Example

```ts
direction:"undirected"
```

---

# Directed Example

```ts
A -> B
```

Meaningful flow.

---

# Undirected Example

```ts
A -- B
```

Symmetric relationship.

---

# Bidirectional Example

```ts
A <-> B
```

Two-way relation.

---

# routing

Edge path strategy.

Type:

```ts
string
```

---

Supported

```txt
straight
bezier
orthogonal
step
curved
```

---

Example

```ts
routing:"bezier"
```

---

# label

Display text.

```ts
label:"financial tie"
```

Annotation.

---

# data

Custom payload.

Example:

```ts
data:{
 confidence:.92
}
```

Custom relationship metadata.

---

# metadata

System annotations.

```ts
metadata:{
 flagged:true
}
```

---

# weight

Type:

```ts
number
```

Relationship strength.

---

Example

```ts
weight:0.84
```

Useful scoring.

---

# visible

Hide edge without deleting.

```ts
visible:false
```

---

# Full Example

```ts
{
 id:"edge_1",

 source:"person_1",
 target:"evidence_2",

 relation:"owns",

 direction:"directed",

 routing:"bezier",

 label:"ownership",

 weight:.91
}
```

Complete edge.

---

# addEdge

Primary API:

```ts
graph.addEdge(edge)
```

---

Example

```ts
graph.addEdge({
 source:"a",
 target:"b"
});
```

---

# updateEdge

```ts
graph.updateEdge(
 id,
 patch
)
```

Patch update.

---

# removeEdge

```ts
graph.removeEdge(id)
```

Delete edge.

---

# rerouteEdge

Change endpoints.

```ts
graph.rerouteEdge(...)
```

---

# Relationship Modeling

Edges can model:

```txt
causal
ownership
temporal
social
logical
spatial
```

Flexible.

---

# Multi-Edge Support

Supported.

Multiple edges between nodes allowed.

Example:

```txt
A -> B friendship
A -> B financial tie
```

Valid.

---

# Self Loops

Possible:

```txt
A -> A
```

Config dependent.

Useful sometimes.

---

# Hyperedges

Optional advanced model.

One relation to many entities.

Advanced use.

---

# Edge Routing Deep Dive

---

## Straight

Fastest.

```txt
simple direct line
```

---

## Bezier

Smooth curves.

Great for investigation boards.

---

## Orthogonal

Right-angle routing.

Great diagrams.

---

## Step Routing

Workflow style.

---

# Edge Styling

Interface:

```ts
interface EdgeStyle{
 width?
 dash?
 arrow?
 color?
 opacity?
}
```

---

Example

```ts
style:{
 width:2,
 arrow:true
}
```

---

# Arrowheads

Examples:

```txt
none
triangle
diamond
circle
```

Semantic possibilities.

---

# Edge Labels

Support:

```txt
inline
floating
anchored
```

Depends renderer.

---

# Validation Rules

Edge valid only if:

```txt
source exists
target exists
endpoints valid
routing valid
```

Required.

---

# Validation API

```ts
validateEdge(edge)
```

Use it.

---

# Invalid Example

Bad:

```ts
{
 source:"missing",
 target:"b"
}
```

Invalid endpoint.

---

# Query APIs

```ts
getEdge(id)
getEdges()
findEdges(...)
```

Available.

---

# Edge Filtering

Example

```ts
findEdges(
 e=>e.relation==="owns"
)
```

Powerful.

---

# Weighted Graph Use

Weights enable:

```txt
scoring
confidence
ranking
pathfinding
```

Advanced modeling.

---

# Temporal Relations

Example

```ts
relation:"before"
```

Timeline graphs.

---

# Evidence Networks

Example:

```txt
suspect
-> motive

suspect
-> evidence

suspect
-> witness
```

Classic pattern.

---

# Edge Constraints

Can enforce:

```txt
type compatibility
cycle rules
max edges
relation rules
```

Optional.

---

# Performance Notes

Huge edge counts:

prefer:

```txt
simplification
batching
worker layout
```

Important.

---

# Common Patterns

---

## Ownership Edge

```ts
relation:"owns"
```

---

## Evidence Link

```ts
relation:"evidence_of"
```

---

## Social Link

```ts
relation:"knows"
```

---

# Anti-Patterns

Avoid:

```txt
duplicated meaningless edges
using edges for data storage
untyped relations chaos
```

Bad modeling.

---

# FAQ

## Can multiple edges connect same nodes?

Yes.

---

## Are edges directional?

Optional.

---

## Can edges store metadata?

Yes.

---

## Are weighted edges supported?

Yes.

---

# Related APIs

See:

```txt
addEdge
updateEdge
Node API
Layout API
Pathfinding APIs
```

---

# Related Types

```ts
EdgeConfig
EdgeStyle
EdgeMetadata
RoutingMode
```

---

# Version Metadata

```txt
Stable
v0.1.0
```

---

# Source

```txt
packages/core/src/types/edge.ts
```

---

# Summary

Edges provide:

```txt
relationships
direction
routing
weights
semantics
```

Meaning layer of graph.

---

# Next Document

Next:

```txt
36-layout-api-reference.md
```

Begins layout engine system.

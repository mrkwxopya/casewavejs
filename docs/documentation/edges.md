# Edges

Edges connect nodes, ports, anchors or even other edges.

## Directed Edge

```ts
graph.addEdge({
  id: "edge_1",
  type: "default",
  source: {
    kind: "node",
    nodeId: "a"
  },
  target: {
    kind: "node",
    nodeId: "b"
  },
  direction: "directed"
});
```

## Undirected Edge

```ts
graph.addEdge({
  id: "edge_2",
  type: "default",
  source: {
    kind: "node",
    nodeId: "a"
  },
  target: {
    kind: "node",
    nodeId: "b"
  },
  direction: "undirected"
});
```

## Edge With Ports

```ts
graph.addEdge({
  id: "edge_1",
  type: "default",
  source: {
    kind: "node",
    nodeId: "person_1",
    portId: "out"
  },
  target: {
    kind: "node",
    nodeId: "evidence_1",
    portId: "in"
  },
  direction: "directed",
  routing: "bezier"
});
```

## Routing Modes

```ts
routing: "straight";
routing: "bezier";
routing: "orthogonal";
```

## Semantic Relation

```ts
graph.addEdge({
  id: "relation_1",
  type: "evidence",
  source: { kind: "node", nodeId: "evidence_1" },
  target: { kind: "node", nodeId: "suspect_1" },
  direction: "directed",
  relation: "evidence_of",
  confidence: 0.82
});
```



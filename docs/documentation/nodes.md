# Nodes

Nodes are graph entities.

## Basic Node

```ts
graph.addNode({
  id: "person_1",
  type: "person",
  position: { x: 100, y: 100 },
  size: { width: 180, height: 90 },
  data: {
    name: "Suspect A"
  }
});
```

## Node With Tags

```ts
graph.addNode({
  id: "person_1",
  type: "person",
  position: { x: 100, y: 100 },
  tags: ["suspect", "important"],
  badges: ["new"]
});
```

## Node With Ports

```ts
graph.addNode({
  id: "person_1",
  type: "person",
  position: { x: 100, y: 100 },
  ports: [
    {
      id: "out",
      nodeId: "person_1",
      label: "Out",
      position: { x: 180, y: 45 }
    }
  ]
});
```

## Lock Node

```ts
graph.updateNode("person_1", {
  locked: true
});
```

## Pin Node

```ts
graph.updateNode("person_1", {
  pinned: true
});
```

## Hide Node

```ts
graph.updateNode("person_1", {
  hidden: true
});
```






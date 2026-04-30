# Drag To Connect

Nodes can define ports.

```ts
graph.addNode({
  id: "person_1",
  type: "person",
  position: { x: 100, y: 100 },
  ports: [
    {
      id: "out",
      nodeId: "person_1",
      position: { x: 180, y: 45 }
    }
  ]
});

graph.addNode({
  id: "evidence_1",
  type: "evidence",
  position: { x: 420, y: 160 },
  ports: [
    {
      id: "in",
      nodeId: "evidence_1",
      position: { x: 0, y: 45 }
    }
  ]
});
```

Then drag from one handle to another.



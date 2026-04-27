# Groups

Groups are compound nodes. Child nodes use `parentId`.

## Create Group

```ts
graph.addNode({
  id: "group_1",
  type: "group",
  position: { x: 0, y: 0 },
  data: {
    title: "Evidence Group"
  }
});
```

## Add Child Node

```ts
graph.addNode({
  id: "evidence_1",
  type: "evidence",
  parentId: "group_1",
  position: { x: 120, y: 120 }
});
```

## Collapse Group

```ts
graph.updateNode("group_1", {
  collapsed: true
});
```

## Expand Group

```ts
graph.updateNode("group_1", {
  collapsed: false
});
```

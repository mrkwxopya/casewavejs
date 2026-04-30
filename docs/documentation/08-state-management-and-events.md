# 08. State Management and Events

Complete documentation for state architecture.

This document covers:

- graph state
- store model
- events
- subscriptions
- undo/redo
- transactions
- commands
- mutations
- history
- reactive patterns

This is the runtime engine.

---

# Why State Matters

Graph data alone is static.

State makes it interactive.

State controls:

- changes
- interactions
- history
- runtime behavior

Without state:

there is no editor.

---

# Core State Model

CaseWave generally has:

```txt
Graph Data
+
UI State
+
Runtime State
```

Three layers.

---

# Graph Data State

Persistent graph structure.

Contains:

```txt
nodes
edges
groups
metadata
```

Example:

```ts
{
 nodes:[],
 edges:[]
}
```

Core model.

---

# UI State

Interaction state.

Examples:

```txt
selected nodes
hover state
viewport
pan
zoom
```

Separate from graph data.

Important distinction.

---

# Runtime State

Transient behavior.

Examples:

```txt
dragging
temporary previews
connection drafts
animations
```

Usually not persisted.

---

# Graph Store

Primary state container.

Example:

```ts
const store=
 new GraphStore();
```

Central source of truth.

---

# Store Responsibilities

Store manages:

- graph mutations
- subscriptions
- history
- commands
- transactions

---

# Reading State

Possible:

```ts
store.getState()
```

Returns current graph state.

---

# Updating State

Possible:

```ts
store.update(...)
```

or

```ts
store.setState(...)
```

Mutations go through store.

---

# Why Central Store?

Avoid:

random component state.

Bad.

Use single source of truth.

---

# Immutable Updates

Prefer immutable patterns.

Bad:

```ts
node.x=400
```

Prefer:

```ts
updateNode(...)
```

Controlled mutations.

---

# Node Mutations

Possible APIs:

```ts
addNode()
removeNode()
updateNode()
```

---

Example:

```ts
graph.updateNode(
 "suspect_1",
 {
  position:{
   x:500
  }
 }
)
```

---

# Edge Mutations

Possible:

```ts
addEdge()
removeEdge()
updateEdge()
```

Same principle.

---

# Event System

State changes often emit events.

Examples:

```txt
nodeAdded
nodeMoved
edgeCreated
selectionChanged
```

---

# Event Architecture

Concept:

```txt
action
↓

state update

↓

event emitted
```

Reactive flow.

---

# Subscriptions

Listen to state changes.

Example:

```ts
store.subscribe(
 listener
)
```

Reactive updates.

---

# Example Subscription

```ts
const unsubscribe=
 store.subscribe(
  state=>{
   console.log(state)
  }
 )
```

Watch state changes.

---

# Event Listeners

Possible:

```ts
graph.on(
 "nodeAdded",
 handler
)
```

---

Example:

```ts
graph.on(
 "nodeMoved",
 e=>{
  ...
 }
)
```

---

# Common Events

Possible events:

```txt
nodeAdded
nodeRemoved
nodeUpdated

edgeAdded
edgeRemoved

selectionChanged

viewportChanged
```

---

# Interaction Events

Examples:

```txt
dragStart
dragMove
dragEnd

connectStart
connectEnd
```

UI event layer.

---

# Domain Events

Higher-level events.

Examples:

```txt
suspectLinked
evidenceAttached
caseSolved
```

Possible domain extensions.

---

# Commands

Commands wrap mutations.

Example:

```ts
executeCommand(...)
```

Pattern:

```txt
command
↓

mutation

↓

history tracked
```

Excellent architecture.

---

# Command Example

```ts
AddNodeCommand
```

Maybe:

```ts
MoveNodeCommand
```

---

Why commands?

Support:

- undo
- redo
- transactions
- auditing

Very important.

---

# Undo

Revert previous command.

```ts
undo()
```

---

# Redo

```ts
redo()
```

---

# History Stack

Concept:

```txt
past
present
future
```

Classic model.

---

Example:

```txt
Undo stack
Redo stack
```

---

# History Tracking

Usually command-based.

Not raw snapshots only.

More scalable.

---

# Transactions

Batch multiple mutations.

Example:

```ts
transaction(()=>{
 ...
})
```

Atomic updates.

---

Useful for:

- importing graphs
- large edits
- grouped operations

---

# Why Transactions

Without:

50 updates

50 rerenders

Bad.

With transaction:

single commit.

Excellent.

---

# Batch Updates

Possible:

```ts
store.batch(()=>{
 ...
})
```

Optimization.

---

# Snapshots

Capture graph state.

```ts
snapshot()
```

Useful for:

- saves
- history
- debugging

---

# Restore Snapshot

```ts
restore(snapshot)
```

Possible API.

---

# Selection State

Often separate slice.

Example:

```ts
selectedNodes:[]
```

UI state.

---

# Multi Selection

Possible:

```ts
selectNodes(...)
```

```ts
clearSelection()
```

Common APIs.

---

# Reactive Hooks

React bindings may expose:

```ts
useCaseWave()
```

and:

```ts
useGraphState(...)
```

Reactive consumption.

---

# Derived State

Computed values.

Examples:

```txt
connected nodes count
selected count
degrees
```

Derived from source.

Do not duplicate.

---

# Store Slices

Possible split:

```txt
graph slice
ui slice
history slice
```

Scalable architecture.

---

# Event Bus

May have event bus.

Example:

```ts
emit(...)
on(...)
off(...)
```

Loose coupling.

---

# Middleware

Possible middleware chain.

Examples:

- logging
- validation
- analytics

Concept:

```txt
mutation
↓

middleware
↓

commit
```

Powerful.

---

# Validation Before Commit

Possible:

```ts
validate mutation
before apply
```

Prevents invalid graph state.

Excellent hardening.

---

# Persistence

Persist store.

Possible:

```ts
saveGraph()
```

or storage adapters.

---

# Autosave

Possible:

```txt
state changed
↓
debounced save
```

Great UX.

---

# Event Ordering

Important:

Mutation first

then emit.

Consistent ordering matters.

---

# Prevent Infinite Loops

Subscriptions changing state can loop.

Guard against:

```txt
event → update → event → update
```

Critical.

---

# Debugging State

Devtools may inspect:

```txt
actions
history
events
snapshots
```

Very valuable.

---

# Example Store Flow

```txt
User drags node

↓

MoveNodeCommand

↓

transaction commit

↓

history push

↓

event emit

↓

UI rerender
```

Ideal flow.

---

# Common Mistakes

Mutating objects directly.

Bad.

Skipping command layer.

Bad.

Mixing UI and graph state.

Bad.

---

# State Best Practices

Use:

- single store
- immutable updates
- commands
- transactions
- subscriptions
- history

Strong architecture.

---

# Summary

State system includes:

```txt
store
events
commands
history
transactions
subscriptions
```

Core runtime engine.

---

# Next Document

Continue with:

```txt
09-rendering-and-react-api.md
```

Next covers:

- React components
- rendering architecture
- hooks
- providers
- canvas system
- performance rendering
- component APIs

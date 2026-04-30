# 09. Rendering and React API

Complete documentation for React integration.

This document covers:

- rendering architecture
- React bindings
- providers
- components
- hooks
- canvas system
- interaction layer
- renderer internals
- performance model

This is the user-facing framework layer.

---

# Overview

Core package:

```txt
@casewave/core
```

handles graph logic.

React package:

```txt
@casewave/react
```

renders and interacts with it.

Separation is intentional.

---

# Primary React Package

Install:

```bash
npm install @casewave/react
```

Usually paired with:

```bash
npm install @casewave/core
```

Often themes too:

```bash
npm install @casewave/themes
```

---

# React Layer Responsibilities

React layer handles:

- rendering
- user interaction
- hooks
- providers
- canvas behavior
- viewport controls

Graph logic still belongs in core.

---

# Main Exports

Typical exports:

```ts
import {
 CaseWaveProvider,
 CaseWaveCanvas,
 useCaseWave
}
from "@casewave/react"
```

Primary surface.

---

# CaseWaveProvider

Root context provider.

Example:

```tsx
<CaseWaveProvider>
 <App/>
</CaseWaveProvider>
```

Provides graph context.

Required for hooks.

---

# What Provider Supplies

Possible context:

```txt
graph instance
selection state
commands
viewport api
theme
```

Global graph context.

---

# Provider Example

```tsx
import {
 CaseWaveProvider
}
from "@casewave/react"

export default function App(){

 return(
  <CaseWaveProvider>
   <Board/>
  </CaseWaveProvider>
 )

}
```

Typical setup.

---

# CaseWaveCanvas

Primary renderer.

```tsx
<CaseWaveCanvas />
```

Main graph surface.

---

# Basic Example

```tsx
<CaseWaveCanvas
 graph={graph}
/>
```

Minimal setup.

---

# Common Props

Possible props:

```ts
type CaseWaveCanvasProps={
 graph
 theme
 fitView
 interactive
}
```

---

# Example

```tsx
<CaseWaveCanvas
 graph={graph}
 theme="war-room"
 fitView
 interactive
/>
```

---

# Canvas Responsibilities

Canvas handles:

- node rendering
- edge rendering
- pan
- zoom
- selections
- interactions

Heavy lifting component.

---

# useCaseWave Hook

Main hook.

```ts
const api=
 useCaseWave()
```

Graph interaction API.

---

# Possible Hook Methods

Example:

```ts
api.zoomIn()

api.zoomOut()

api.fitView()

api.addNode(...)
```

Likely rich API.

---

# Example Usage

```tsx
function Controls(){

 const api=
 useCaseWave()

 return(
  <button
   onClick={
    ()=>api.fitView()
   }
  >
   Fit
  </button>
 )

}
```

---

# useGraphState

Possible reactive hook:

```ts
useGraphState(...)
```

Read graph state.

Example:

```ts
const selected=
 useGraphState(
  s=>s.selectedNodes
 )
```

Reactive subscriptions.

---

# Rendering Pipeline

Conceptually:

```txt
Graph data

↓

React components

↓

Canvas renderer

↓

Viewport output
```

---

# Node Rendering

Nodes rendered through node renderer.

Possible:

```tsx
nodeRenderer
```

Customizable.

---

# Custom Node Renderer

Example:

```tsx
<CaseWaveCanvas
 nodeRenderer={MyNode}
/>
```

Inject custom nodes.

---

Example component:

```tsx
function MyNode(props){

 return(
  <div>
   {props.data.name}
  </div>
 )

}
```

---

# Edge Renderer

Likewise:

```tsx
edgeRenderer
```

Possible custom edges.

---

# Custom Edge Example

```tsx
<CaseWaveCanvas
 edgeRenderer={CustomEdge}
/>
```

---

# Interaction Layer

Handles:

```txt
dragging
selection
connecting
hover
context menus
```

Separate subsystem.

---

# Interaction Props

Possible:

```tsx
interactive={true}
```

Disable editor mode:

```tsx
interactive={false}
```

Viewer mode.

---

# Selection

Possible:

```tsx
selectable
multiSelect
```

Props may exist.

---

# Connection Behavior

Possible:

```tsx
connectable
```

Enable edge creation.

---

# Viewport Props

Possible:

```tsx
fitView
minZoom
maxZoom
```

Example:

```tsx
<CaseWaveCanvas
 fitView
 minZoom={0.3}
 maxZoom={4}
/>
```

---

# Theme Integration

Example:

```tsx
theme="wiretap"
```

or:

```tsx
theme={customTheme}
```

Supports both.

---

# Controlled vs Uncontrolled

Possible controlled graph:

```tsx
graph={graph}
```

External control.

Could also support managed mode.

---

# Event Props

Possible:

```tsx
onNodeClick
onEdgeClick
onSelectionChange
```

Example:

```tsx
<CaseWaveCanvas
 onNodeClick={handler}
/>
```

---

# Example Event

```tsx
function handleNode(node){

 console.log(node)

}
```

Simple.

---

# Context Menus

Possible:

```tsx
nodeContextMenu
```

Advanced editors often need this.

---

# React Performance Model

Very important.

Use:

- memoization
- selective rerenders
- virtualization when needed

---

# Avoid Full Re-rendering

Bad:

Entire graph rerenders
on every drag.

Avoid.

Use isolated updates.

---

# Memoized Nodes

Prefer:

```tsx
React.memo(...)
```

For node components.

Important.

---

# Hook Performance

Prefer:

```ts
selector subscriptions
```

instead of whole-store rerenders.

Example:

```ts
useGraphState(
 s=>s.selection
)
```

Good.

---

# Large Graph Rendering

Strategies:

- culling
- viewport-only rendering
- level of detail
- lazy rendering

For scale.

---

# Canvas vs DOM

Possible renderers:

```txt
DOM
Canvas
Hybrid
```

Implementation may vary.

---

# Port Rendering

Ports may render via node components.

Possible:

```tsx
ports visible
```

customizable.

---

# Overlays

Possible overlays:

```txt
toolbars
selection boxes
guides
minimap
```

Part of renderer ecosystem.

---

# Command Usage in React

Example:

```tsx
const api=
 useCaseWave()

api.addNode(...)
```

React layer talks through commands.

Good architecture.

---

# Typical App Example

```tsx
import {
 CaseWaveProvider,
 CaseWaveCanvas
}
from "@casewave/react"

function App(){

 return(
  <CaseWaveProvider>

   <CaseWaveCanvas
    theme="analyst"
    fitView
   />

  </CaseWaveProvider>
 )

}
```

Canonical setup.

---

# Common Mistakes

Putting graph state in random component state.

Bad.

Calling expensive rerenders from node components.

Bad.

Mixing graph logic into presentational nodes.

Bad.

---

# React Best Practices

Use:

- Provider at root
- hook APIs
- custom renderers
- memoization
- event callbacks
- command APIs

Strong patterns.

---

# API Surface Summary

Likely main React APIs:

```ts
CaseWaveProvider
CaseWaveCanvas

useCaseWave
useGraphState
```

Core surface.

---

# Advanced Future APIs

Possible future:

```txt
whiteboard tools
plugin panels
floating inspectors
custom node kits
```

Expandable architecture.

---

# Summary

React layer includes:

```txt
provider
canvas
hooks
renderers
interactions
viewport
events
```

Framework integration layer.

---

# Next Document

Continue with:

```txt
10-theme-catalog-and-generators.md
```

Next covers:

- all 270 themes
- catalog generation
- preview generation
- searchable theme docs
- theme metadata
- automated gallery docs

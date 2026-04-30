# 55. React Integration Reference

React integration is primary developer path.

CaseWave fits React naturally.

---

# Contents

```txt
React Setup
Hooks
Components
Refs
State Integration
Patterns
SSR
Performance
```

---

# Install

```bash
npm install @casewave/react
```

---

# Core Component

```tsx
<CaseWaveCanvas />
```

---

# Example

```tsx
<CaseWaveCanvas
 graph={graph}
/>
```

---

# Hooks

Possible:

```txt
useGraph
useSelection
useTheme
```

---

# useGraph

```ts
const graph=
useGraph()
```

---

# useSelection

```ts
const selected=
useSelection()
```

---

# Ref Access

```tsx
const ref=useRef()
```

---

# Imperative Access

```ts
ref.current.fit()
```

---

# Controlled Patterns

Possible.

React state can drive graph.

---

# Uncontrolled Patterns

Graph manages itself.

Also possible.

---

# State Stores

Works with:

```txt
zustand
redux
context
```

---

# Events in React

```ts
useEffect(()=>{
 graph.on(...)
})
```

---

# Cleanup

Always unsubscribe.

Important.

---

# React Panels

Compose:

```txt
toolbars
inspectors
side panels
```

---

# SSR Notes

Guard browser APIs.

Important.

---

# Performance

Memoize props.

Avoid unstable objects.

---

# Common Mistakes

Avoid:

```txt
recreating graph each render
```

Very important.

---

# FAQ

Can React control graph state?

Yes.

Can hooks access selection?

Yes.

---

# Related Types

```ts
CaseWaveCanvasProps
useGraph
GraphRef
```

---

# Source

```txt
packages/react
```

---

# Summary

React integration provides:

```txt
hooks
components
idiomatic integration
```

---

# Next

56-framework-integrations-reference.md

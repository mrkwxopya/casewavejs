# 04. Package Structure

This document explains every package in the CaseWave ecosystem, why it exists, what it exports, how packages relate to each other, and where users should import features from.

---

# Monorepo Overview

CaseWave is organized as a modular monorepo.

Structure:

```txt
casewave/
├─ packages/
│  ├─ core/
│  ├─ react/
│  ├─ themes/
│  ├─ types/
│  ├─ utils/
│  └─ devtools/
├─ docs/
├─ examples/
└─ scripts/
```

Design goals:

- separation of concerns
- tree shaking
- modular imports
- framework independence
- layered architecture
- package-level versioning
- production hardening
- minimal bundle size

---

# Architecture Layers

Conceptual layers:

```txt
Applications
↓

React bindings
↓

Graph engine
↓

Types + Utilities
↓

Themes
```

Dependency flow:

```txt
apps
 └── react
      ├── core
      ├── themes
      ├── utils
      └── types
```

Lower layers do not depend upward.

This is intentional.

---

# Package Matrix

| Package | Purpose |
|---|---|
@casewavejs/core | graph engine |
@casewavejs/react | React integration |
@casewavejs/themes | theme system |
@casewavejs/core | shared types |
@casewavejs/core | helpers |
@casewavejs/devtools | debugging tools |

---

# @casewavejs/core

Primary graph engine.

Package:

```bash
npm install @casewavejs/core
```

Purpose:

- graph model
- node system
- edge system
- hyperedges
- layouts
- algorithms
- serialization
- state engine

This is framework-agnostic.

No React dependency.

---

## Core Exports

Typical exports:

```ts
import {
 CaseWaveGraph,
 GraphStore,
 GraphSerializer
}
from "@casewavejs/core";
```

---

## CaseWaveGraph

Primary graph engine.

Creates graph instances.

```ts
const graph =
 new CaseWaveGraph();
```

Responsibilities:

- node management
- edge management
- graph mutations
- validation
- topology rules
- traversal support

---

## GraphStore

State container.

```ts
const store =
 new GraphStore();
```

Used for:

- state updates
- snapshots
- undo
- redo
- subscriptions

---

## GraphSerializer

Import/export graph data.

```ts
GraphSerializer.export(graph)
```

and:

```ts
GraphSerializer.import(data)
```

Supports:

- JSON
- persisted cases
- snapshot recovery

---

# @casewavejs/react

React renderer package.

Install:

```bash
npm install @casewavejs/react
```

Contains:

- canvas renderer
- React bindings
- hooks
- interaction layers
- components

---

## Primary Exports

```ts
import {
 CaseWaveCanvas,
 CaseWaveProvider,
 useCaseWave
}
from "@casewavejs/react";
```

---

## CaseWaveCanvas

Main rendering surface.

```tsx
<CaseWaveCanvas />
```

Responsibilities:

- render nodes
- render edges
- pan
- zoom
- selection
- interactions

---

## CaseWaveProvider

Context provider.

```tsx
<CaseWaveProvider>
  <App/>
</CaseWaveProvider>
```

Provides:

- graph context
- selection state
- command layer

---

## useCaseWave

Hook:

```ts
const api=
 useCaseWave();
```

Possible API:

```ts
api.zoomIn()
api.fitView()
api.addNode(...)
```

---

# @casewavejs/themes

Theme system package.

Install:

```bash
npm install @casewavejs/themes
```

Contains:

- preset themes
- theme registry
- tokens
- metadata
- generators

---

## Main Exports

```ts
import {
 getCaseWaveTheme,
 caseWaveThemes,
 caseWaveThemeNames
}
from "@casewavejs/themes";
```

---

## What belongs here

Themes package includes:

```txt
colors
spacing
radii
borders
grid styles
surface tokens
accent palettes
```

No graph logic here.

Only styling system.

---

# @casewavejs/core

Shared types package.

Install:

```bash
npm install @casewavejs/core
```

Contains:

- interfaces
- type aliases
- schema contracts
- enums

---

## Exports

```ts
import type {
 CaseWaveNode,
 CaseWaveEdge,
 GraphSnapshot
}
from "@casewavejs/core";
```

---

## Why separate types package?

Benefits:

- shared contracts
- reduced duplication
- package interoperability
- strong typing
- stable APIs

---

# @casewavejs/core

Utility package.

Install:

```bash
npm install @casewavejs/core
```

Contains helpers.

Examples:

```ts
import {
 clamp,
 deepMerge,
 debounce
}
from "@casewavejs/core";
```

Examples of categories:

- math helpers
- object helpers
- validation helpers
- graph helpers

---

# @casewavejs/devtools

Optional tooling package.

Install:

```bash
npm install @casewavejs/devtools
```

Contains:

- inspectors
- debug overlays
- profiling
- diagnostics

---

## Example

```ts
import {
 GraphInspector
}
from "@casewavejs/devtools";
```

Use for:

- debugging
- graph inspection
- developer tooling

---

# Package Responsibilities

Do not import everything from everywhere.

Use correct layer.

Bad:

```ts
import randomThing
from "@casewavejs/react";
```

when it belongs in:

```ts
@casewavejs/core
```

Use correct package.

---

# Import Strategy

Preferred:

```ts
import {
 CaseWaveGraph
}
from "@casewavejs/core";
```

Not:

```ts
import {
 CaseWaveGraph
}
from "@casewavejs/react";
```

Avoid accidental coupling.

---

# Typical App Stack

Minimal stack:

```txt
@casewavejs/core
@casewavejs/react
@casewavejs/themes
```

---

Advanced stack:

```txt
core
react
themes
types
utils
devtools
```

---

# Example App Wiring

```ts
import {
 CaseWaveGraph
}
from "@casewavejs/core";

import {
 CaseWaveCanvas
}
from "@casewavejs/react";

import {
 getCaseWaveTheme
}
from "@casewavejs/themes";
```

Three packages.

Typical setup.

---

# Which Package For What?

If you need...

Graph engine:

```txt
@casewavejs/core
```

React rendering:

```txt
@casewavejs/react
```

Themes:

```txt
@casewavejs/themes
```

Types:

```txt
@casewavejs/core
```

Utilities:

```txt
@casewavejs/core
```

Debugging:

```txt
@casewavejs/devtools
```

---

# Peer Dependency Philosophy

Possible peer deps:

```txt
react
react-dom
```

Only where necessary.

Core should remain independent.

---

# Internal Package Contracts

Packages communicate via stable contracts.

Example:

```txt
core exports models
react consumes models
themes styles rendering
types unify contracts
```

Strict boundaries.

---

# Package Versioning

Prefer synchronized versions.

Example:

```txt
0.4.0
0.4.0
0.4.0
```

not:

```txt
0.4.0
0.2.1
0.8.3
```

Avoid drift.

---

# Folder Deep Dive

Example:

```txt
packages/core/src/
├─ graph/
├─ models/
├─ algorithms/
├─ serializers/
└─ store/
```

React:

```txt
packages/react/src/
├─ canvas/
├─ hooks/
├─ components/
├─ providers/
└─ interactions/
```

Themes:

```txt
packages/themes/src/
├─ presets/
├─ tokens/
├─ generators/
└─ metadata/
```

---

# Recommended Learning Order

Read packages in this order:

1

core

2

react

3

themes

4

types

5

utils

6

devtools

---

# What Comes Next

After package structure read:

```txt
05-theme-system.md
```

Next documentation goes deep into:

- tokens
- theme composition
- generators
- theme catalog
- custom themes
- runtime theme switching





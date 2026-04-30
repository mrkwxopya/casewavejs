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
@casewave/core | graph engine |
@casewave/react | React integration |
@casewave/themes | theme system |
@casewave/types | shared types |
@casewave/utils | helpers |
@casewave/devtools | debugging tools |

---

# @casewave/core

Primary graph engine.

Package:

```bash
npm install @casewave/core
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
from "@casewave/core";
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

# @casewave/react

React renderer package.

Install:

```bash
npm install @casewave/react
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
from "@casewave/react";
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

# @casewave/themes

Theme system package.

Install:

```bash
npm install @casewave/themes
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
from "@casewave/themes";
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

# @casewave/types

Shared types package.

Install:

```bash
npm install @casewave/types
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
from "@casewave/types";
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

# @casewave/utils

Utility package.

Install:

```bash
npm install @casewave/utils
```

Contains helpers.

Examples:

```ts
import {
 clamp,
 deepMerge,
 debounce
}
from "@casewave/utils";
```

Examples of categories:

- math helpers
- object helpers
- validation helpers
- graph helpers

---

# @casewave/devtools

Optional tooling package.

Install:

```bash
npm install @casewave/devtools
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
from "@casewave/devtools";
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
from "@casewave/react";
```

when it belongs in:

```ts
@casewave/core
```

Use correct package.

---

# Import Strategy

Preferred:

```ts
import {
 CaseWaveGraph
}
from "@casewave/core";
```

Not:

```ts
import {
 CaseWaveGraph
}
from "@casewave/react";
```

Avoid accidental coupling.

---

# Typical App Stack

Minimal stack:

```txt
@casewave/core
@casewave/react
@casewave/themes
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
from "@casewave/core";

import {
 CaseWaveCanvas
}
from "@casewave/react";

import {
 getCaseWaveTheme
}
from "@casewave/themes";
```

Three packages.

Typical setup.

---

# Which Package For What?

If you need...

Graph engine:

```txt
@casewave/core
```

React rendering:

```txt
@casewave/react
```

Themes:

```txt
@casewave/themes
```

Types:

```txt
@casewave/types
```

Utilities:

```txt
@casewave/utils
```

Debugging:

```txt
@casewave/devtools
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

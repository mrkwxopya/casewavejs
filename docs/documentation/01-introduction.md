# 01. Introduction

CaseWave is a modular TypeScript and React toolkit for building graph-based visual interfaces.

It is designed for applications that need to display, edit, connect, organize, inspect, and reason about entities on a canvas.

Typical use cases include:

- Investigation boards
- Evidence boards
- Detective game boards
- Crime relationship graphs
- OSINT boards
- Incident response boards
- Workflow editors
- Node-link diagrams
- Knowledge graph interfaces
- Tactical dashboards
- Case management interfaces
- Visual reasoning systems

CaseWave is not only a drawing surface. It is intended to be a structured board system where nodes, edges, groups, themes, metadata, plugins, layouts, and UI behavior can be composed together.

---

## What CaseWave Solves

Many graph or diagram libraries focus only on rendering nodes and edges.

CaseWave focuses on a more specific problem:

> Building production-ready investigation-style graph interfaces with strong structure, typed contracts, React support, and themeable visual systems.

CaseWave helps with:

- Representing entities as nodes
- Connecting entities with edges
- Styling different board types
- Supporting investigation board aesthetics
- Providing reusable packages
- Keeping graph logic separated from React rendering
- Providing a theme system with ready-made presets
- Making canvas UI easier to extend

---

## Main Packages

CaseWave is separated into packages.

### @casewave/core

The core package contains graph primitives and non-React logic.

It is responsible for:

- Graph models
- Node contracts
- Edge contracts
- Graph manipulation
- Core types
- Shared utilities
- Engine-level behavior

Use this package when you need the graph data model or engine logic.

---

### @casewave/react

The React package contains React components and rendering logic.

It is responsible for:

- Canvas rendering
- React provider integration
- Node rendering
- Edge rendering
- UI interaction layer
- React-specific component contracts

Use this package when you want to display or interact with a CaseWave board inside a React application.

---

### @casewave/themes

The themes package contains ready-made visual themes.

It is responsible for:

- Theme preset exports
- Theme registry
- Theme metadata
- Theme name list
- Theme category helpers
- Theme lookup functions

Use this package when you want to apply a ready-made visual style to a CaseWave canvas.

---

## Why The Theme Package Is Important

Graph interfaces are highly visual.

A theme affects:

- How readable nodes are
- How visible edges are
- How selected items stand out
- How groups are separated
- How panels appear
- How dangerous or warning states are shown
- How professional or game-like the board feels
- Whether the UI feels tactical, detective, retro, minimal, cyber, archive, or premium

For this reason, `@casewave/themes` provides a large ready-made theme set instead of forcing every developer to design their own theme from scratch.

---

## Theme Example

```ts
import { getCaseWaveTheme } from "@casewave/themes";

const theme = getCaseWaveTheme("war-room");
```

React usage:

```tsx
import { CaseWaveCanvas } from "@casewave/react";
import { getCaseWaveTheme } from "@casewave/themes";

export function App() {
  return (
    <CaseWaveCanvas
      width="100vw"
      height="100vh"
      theme={getCaseWaveTheme("war-room")}
    />
  );
}
```

---

## Who Should Use CaseWave?

CaseWave is useful for developers building:

### Investigation Interfaces

Boards where suspects, evidence, locations, records, events, and clues are connected.

### Detective Games

Interactive case boards where the player explores relationships between people, places, documents, and clues.

### OSINT Tools

Entity relationship boards for usernames, domains, accounts, IP addresses, profiles, companies, and documents.

### Incident Response Tools

Security investigation boards where alerts, assets, users, incidents, logs, and indicators are connected.

### Workflow Editors

Node-based workflow systems with typed nodes and relationships.

### Visual Knowledge Systems

Knowledge graphs where entities and concepts are connected visually.

---

## Design Principles

CaseWave is built around several principles.

### 1. Modularity

Each package has a focused responsibility.

The core package should not depend on React-specific rendering.

The React package should render and interact with the graph.

The themes package should provide visual design tokens.

---

### 2. Type Safety

CaseWave is written in TypeScript.

Types should help developers understand:

- What a node contains
- What an edge contains
- What a theme contains
- What theme names are valid
- What helper functions return

---

### 3. Theme-Driven UI

Visual styling should come from theme objects instead of hard-coded colors.

This allows:

- Dynamic theme switching
- Consistent UI appearance
- Easier customization
- Better maintainability
- Reusable visual presets

---

### 4. Production Readiness

CaseWave should be usable in real projects, not only demos.

Documentation should explain:

- Installation
- Usage
- API functions
- Types
- Theme fields
- Common mistakes
- Performance notes
- Accessibility notes
- Troubleshooting

---

## Important Terms

### Node

A node is an item on the board.

Examples:

- Person
- Evidence
- Document
- Location
- Case file
- Alert
- Asset
- Task
- Record

---

### Edge

An edge is a connection between two entities.

Examples:

- Person connected to evidence
- Suspect visited location
- Document references person
- Alert belongs to asset
- Case file contains record

---

### Graph

A graph is the complete structure of nodes and edges.

---

### Canvas

The canvas is the visual surface where the graph is rendered.

---

### Theme

A theme is a visual token object used to style the canvas, nodes, edges, handles, groups, and panels.

---

### Theme Registry

The theme registry is a generated object containing all available themes.

Example:

```ts
import { caseWaveThemes } from "@casewave/themes";

console.log(caseWaveThemes["war-room"]);
```

---

### Theme Metadata

Theme metadata describes themes for UI lists and documentation.

Example:

```ts
{
  name: "war-room",
  label: "War Room",
  category: "premium",
  description: "War Room theme preset."
}
```

---

## Minimal Mental Model

If you are new, remember this:

```txt
@casewave/core    = graph data and logic
@casewave/react   = React canvas and UI rendering
@casewave/themes  = visual theme presets and registry
```

Most React users start with:

```bash
npm install @casewave/core @casewave/react @casewave/themes
```

Then use:

```tsx
<CaseWaveCanvas theme={getCaseWaveTheme("dark")} />
```

---

## Next Step

After this page, read:

```txt
02-installation.md
```

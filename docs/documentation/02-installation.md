# 02. Installation

This document explains how to install CaseWave packages, verify the installation, understand package roles, and prepare a project for production use.

---

# Package Overview

CaseWave is split into separate packages.

## Core

```bash
npm install @casewave/core
```

Contains:

- Graph engine primitives
- Models
- Contracts
- Shared utilities
- Data structures

Use when you need engine-level graph logic.

---

## React Renderer

```bash
npm install @casewave/react
```

Contains:

- Canvas renderer
- React components
- Interaction layer
- UI bindings

Use when you need the visual board editor.

---

## Themes

```bash
npm install @casewave/themes
```

Contains:

- Theme presets
- Theme registry
- Theme metadata
- Theme helper functions

Use when you need visual themes.

---

# Recommended Installation

Most users should install all three:

```bash
npm install @casewave/core @casewave/react @casewave/themes
```

Equivalent:

```bash
pnpm add @casewave/core @casewave/react @casewave/themes
```

```bash
yarn add @casewave/core @casewave/react @casewave/themes
```

---

# Version Strategy

Recommended:

Keep package versions aligned.

Good:

```txt
@casewave/core    0.1.x
@casewave/react   0.1.x
@casewave/themes  0.1.x
```

Avoid mixing distant versions unless documented.

---

# Requirements

Recommended environment:

## Node

Recommended:

```txt
Node 18+
```

Preferred:

```txt
Node 20+
```

---

## React

Recommended:

```txt
React 18+
```

---

## TypeScript

Recommended:

```txt
TypeScript 5+
```

---

# Verify Installation

Test imports:

```ts
import { getCaseWaveTheme } from "@casewave/themes";

console.log(getCaseWaveTheme("dark"));
```

If this works:

installation is correct.

---

# Verify Theme Registry

```ts
import {
  caseWaveThemeNames
} from "@casewave/themes";

console.log(caseWaveThemeNames.length);
```

Expected:

theme count should print.

---

# Verify React Renderer

```tsx
import { CaseWaveCanvas } from "@casewave/react";

export function App() {
  return (
    <CaseWaveCanvas />
  );
}
```

If it renders:

React package works.

---

# Basic Project Setup

Example:

```txt
src/
 App.tsx

package.json
tsconfig.json
```

App.tsx

```tsx
import { CaseWaveCanvas } from "@casewave/react";
import { getCaseWaveTheme } from "@casewave/themes";

export default function App() {
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

# TypeScript Config

Recommended:

```json
{
 "compilerOptions": {
   "strict": true,
   "target": "ES2020",
   "module": "ESNext",
   "moduleResolution": "Bundler",
   "jsx": "react-jsx"
 }
}
```

---

# Vite Setup

Install:

```bash
npm create vite@latest
```

Then:

```bash
npm install
npm install @casewave/core @casewave/react @casewave/themes
```

---

# Next.js Setup

Install:

```bash
npx create-next-app
```

Then:

```bash
npm install @casewave/core @casewave/react @casewave/themes
```

Use inside client component:

```tsx
"use client";

import { CaseWaveCanvas } from "@casewave/react";
```

---

# Package Imports

Preferred:

```ts
import { getCaseWaveTheme } from "@casewave/themes";
```

Not preferred:

deep internal imports unless documented.

Avoid:

```ts
import something from "@casewave/themes/dist/internal";
```

Use public API only.

---

# ESM Usage

Supported:

```ts
import {
 getCaseWaveTheme
} from "@casewave/themes";
```

---

# CommonJS Usage

Supported:

```js
const themes = require("@casewave/themes");
```

---

# Monorepo Installation

Workspace example:

```bash
npm install -w packages/app
```

Or root:

```bash
npm install
```

---

# Package Roles

Remember:

```txt
core
graph logic

react
canvas renderer

themes
visual system
```

---

# Minimal Install Only Themes

If you only want themes:

```bash
npm install @casewave/themes
```

Usage:

```ts
import {
 getCaseWaveTheme
} from "@casewave/themes";
```

---

# Bundle Considerations

Theme package is designed to be:

- Tree-shakeable
- ESM compatible
- CJS compatible

Import only what you need.

Good:

```ts
import {
 getCaseWaveTheme
} from "@casewave/themes";
```

---

# Smoke Test

Run:

```ts
import {
 caseWaveThemeNames,
 getCaseWaveTheme
} from "@casewave/themes";

console.log(caseWaveThemeNames.length);

console.log(
 getCaseWaveTheme("dark")
);
```

Expected:

- no errors
- theme count output
- theme object output

---

# Troubleshooting

## Cannot resolve module

Run:

```bash
npm install
```

Or remove lockfile and reinstall.

---

## Type errors

Check:

TypeScript version.

Recommended:

```txt
5+
```

---

## React peer issues

Check:

```txt
React 18+
```

---

## Theme not found

Check:

```ts
import {
 hasCaseWaveTheme
} from "@casewave/themes";
```

```ts
hasCaseWaveTheme("war-room");
```

---

# What Was Installed

You now have:

- graph package
- renderer package
- themes package

And can now move to:

```txt
03-quick-start.md
```

# 05. Theme System

Complete documentation for the CaseWave theme engine.

This document explains every concept in the theme architecture:

- theme anatomy
- design tokens
- presets
- generators
- customization
- runtime switching
- theme metadata
- extending themes
- creating distributable themes

---

# What is a Theme?

A CaseWave theme is not "just colors".

A theme is a structured visual system.

It controls:

- palette
- surfaces
- borders
- typography
- spacing
- node appearance
- edge appearance
- grid styling
- interactions
- overlays
- semantic states

A theme is effectively:

```txt
visual operating system for the graph
```

---

# Theme Architecture

Themes follow layered composition.

```txt
Raw Tokens
↓

Semantic Tokens
↓

Component Tokens
↓

Resolved Theme
```

---

# Theme Object

Typical structure:

```ts
type CaseWaveTheme = {
 id:string
 name:string

 colors:{}

 typography:{}

 spacing:{}

 radii:{}

 borders:{}

 shadows:{}

 graph:{}

 metadata:{}
}
```

Each section has a purpose.

---

# Theme Anatomy

---

## id

Unique identifier.

Example:

```ts
id:"war-room"
```

Never duplicate.

Used for:

- registry lookup
- persistence
- serialization
- theme switching

---

## name

Human label.

```ts
name:"War Room"
```

Display only.

---

# colors

Base color system.

Example:

```ts
colors:{
 background:"#0c0f14",
 surface:"#161c26",
 text:"#dce5f2",
 accent:"#58a6ff"
}
```

Contains visual foundation.

---

## Common Color Tokens

Typical tokens:

```ts
colors:{
 background
 backgroundElevated

 surface
 surface2
 surface3

 border
 borderMuted

 text
 textMuted
 textStrong

 accent
 accentHover

 success
 warning
 danger
 info
}
```

Recommended semantic model.

---

# Why semantic tokens?

Bad:

```ts
blue500
gray800
```

Good:

```ts
accent
surface
border
```

Semantics scale.

Raw colors do not.

---

# Typography

Example:

```ts
typography:{
 fontFamily:"Inter",
 mono:"JetBrains Mono",
 size:{
   sm:12,
   md:14,
   lg:18
 }
}
```

Used for:

- labels
- nodes
- inspectors
- overlays

---

# Spacing

Example:

```ts
spacing:{
 xs:4,
 sm:8,
 md:12,
 lg:20
}
```

Controls:

- padding
- gaps
- panel layout
- graph UI rhythm

---

# Radii

```ts
radii:{
 sm:4,
 md:8,
 lg:16
}
```

Used for:

- nodes
- cards
- controls

---

# Borders

```ts
borders:{
 width:1,
 style:"solid"
}
```

Supports:

- wireframe themes
- blueprint themes
- retro themes

---

# Shadows

```ts
shadows:{
 node:"...",
 panel:"..."
}
```

Optional.

Some themes use none.

---

# Graph Tokens

Graph-specific styling.

Example:

```ts
graph:{
 node:{},
 edge:{},
 ports:{},
 handles:{},
 grid:{}
}
```

Most important section.

---

# Node Tokens

Example:

```ts
node:{
 background:"#18202b",
 border:"#2b3d57",
 radius:12
}
```

Controls:

- default nodes
- grouped nodes
- evidence nodes
- special entities

---

Possible tokens:

```ts
node:{
 fill
 stroke
 strokeWidth
 radius
 padding
 labelColor
 iconColor
}
```

---

# Edge Tokens

Example:

```ts
edge:{
 color:"#6a7f99",
 width:2,
 arrow:true
}
```

Controls links.

---

Possible:

```ts
edge:{
 color
 width
 dash
 arrow
 glow
 labelColor
}
```

---

# Grid Tokens

Example:

```ts
grid:{
 type:"dots",
 color:"#233447"
}
```

Possible types:

```txt
dots
lines
blueprint
none
```

---

# Metadata

Themes also include metadata.

Example:

```ts
metadata:{
 category:"military",
 mode:"dark",
 tags:["ops","war"]
}
```

Used for:

- theme browsers
- filtering
- docs generation

---

# Theme Registry

Registry:

```ts
caseWaveThemes
```

Contains all themes.

Example:

```ts
import {
 caseWaveThemes
}
from "@casewavejs/themes";
```

---

# Theme Names

```ts
caseWaveThemeNames
```

Returns:

```ts
[
 "war-room",
 "analyst",
 "wiretap"
]
```

Useful for selectors.

---

# Get Theme

```ts
import {
 getCaseWaveTheme
}
from "@casewavejs/themes";
```

Usage:

```ts
const theme=
 getCaseWaveTheme(
   "war-room"
 );
```

Returns resolved theme.

---

# Using Themes

Example:

```tsx
<CaseWaveCanvas
 theme="war-room"
/>
```

or:

```tsx
<CaseWaveCanvas
 theme={themeObject}
/>
```

Both possible.

---

# Runtime Theme Switching

Example:

```ts
setTheme(
 "wiretap"
)
```

Switch instantly.

Useful for:

- theme picker
- user settings
- persistence

---

# Persisting Themes

Example:

```ts
localStorage.setItem(
 "theme",
 "war-room"
)
```

Restore:

```ts
getCaseWaveTheme(
 localStorage.getItem("theme")
)
```

---

# Custom Themes

Create theme:

```ts
const customTheme={
 ...
}
```

Use:

```tsx
<CaseWaveCanvas
 theme={customTheme}
/>
```

---

# Extending Existing Themes

Start from preset.

```ts
import {
 getCaseWaveTheme
}
from "@casewavejs/themes";

const base=
 getCaseWaveTheme(
  "analyst"
)
```

Extend:

```ts
const custom={
 ...base,
 colors:{
   ...base.colors,
   accent:"#ffcc00"
 }
}
```

Preferred approach.

---

# Theme Categories

Possible categories:

```txt
operations
retro
wireframe
investigation
military
terminal
blueprint
dark
light
```

Used for catalog grouping.

---

# Theme Catalog Generator

Generator can auto-document themes.

Produces:

```txt
theme gallery
preview cards
token tables
examples
```

Can generate:

```md
themes.md
```

Automatically.

---

# Theme Preset Philosophy

Every preset should have:

- identity
- purpose
- contrast accessibility
- semantic consistency

Not random colors.

Actual systems.

---

# Theme Generator

Possible API:

```ts
createTheme(...)
```

or

```ts
generateTheme(...)
```

Example:

```ts
const theme=
 generateTheme({
   baseHue:220
 })
```

Creates derived theme.

---

# Theme Validation

Themes should validate.

Example checks:

- missing tokens
- contrast failures
- invalid shapes

Possible:

```ts
validateTheme(theme)
```

---

# Theme Composition

Themes may merge layers.

Example:

```ts
composeTheme(
 base,
 overrides
)
```

Very useful.

---

# Light vs Dark Themes

Metadata:

```ts
mode:"dark"
```

or

```ts
mode:"light"
```

Allows filtering.

---

# Theme Distribution

Third-party theme packages possible.

Example:

```bash
npm install casewave-theme-cyberops
```

Then:

```ts
import cyberops
from "casewave-theme-cyberops"
```

Supported ecosystem model.

---

# Accessibility

Themes should support:

- contrast
- focus states
- readable labels
- color-safe palettes

Required.

Not optional.

---

# Recommended Theme Naming

Good:

```txt
war-room
wiretap
analyst-desk
```

Avoid:

```txt
theme1
dark2
blue-theme
```

Names should be meaningful.

---

# Example Complete Theme

```ts
export const WarRoomTheme={
 id:"war-room",

 colors:{
  background:"#0b1118",
  surface:"#17222d",
  text:"#d8e2ef",
  accent:"#4aa3ff"
 },

 spacing:{
  md:12
 },

 graph:{
  node:{
   radius:10
  },

  edge:{
   width:2
  }
 }
}
```

Minimal example.

---

# Theme API Surface Summary

Primary exports:

```ts
caseWaveThemes
caseWaveThemeNames
getCaseWaveTheme
createTheme
composeTheme
validateTheme
```

(Depending package surface.)

---

# Best Practices

Use:

- semantic tokens
- category metadata
- composition
- validation
- presets + overrides

Avoid:

- random colors
- hardcoded inline styles
- duplicated tokens

---

# Next Document

Continue with:

```txt
06-nodes-and-edges.md
```

Next covers:

- every node type
- edge models
- hyperedges
- ports
- groups
- routing
- graph semantics




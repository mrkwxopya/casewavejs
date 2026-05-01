# 16. Theme System Handbook

Complete theme engine documentation.

For users, designers and theme authors.

Everything about themes.

---

# Contents

```txt
Theme Philosophy
Theme Architecture
Tokens
Semantic Colors
Theme Objects
Theme APIs
Theme Authoring
Theme Catalog
Custom Themes
Theme Generator
Accessibility
Advanced Theming
```

---

# Overview

CaseWave theme system is token-driven.

Not hardcoded colors.

Everything derives from tokens.

---

# Philosophy

Themes should provide:

- consistency

- scalability

- accessibility

- extensibility

- deterministic styling

---

# Theme Architecture

Structure:

```txt
Raw Tokens
 ↓
Semantic Tokens
 ↓
Theme Objects
 ↓
Resolved Runtime Theme
```

---

# Raw Tokens

Primitive values.

Examples:

```txt
hex colors
spacing
radii
typography
shadows
```

---

Example

```ts
{
 gray900:"#111",
 radiusLg:16
}
```

Primitive only.

---

# Semantic Tokens

Meaning-driven.

Examples:

```txt
surface
border
danger
accent
node.active
edge.highlight
```

Not raw colors.

---

Example

```ts
surface.primary
surface.secondary

edge.default
edge.active

node.selected
```

---

# Why Semantic Tokens

Changing palette should not rewrite components.

Only remap semantics.

Huge advantage.

---

# Theme Object Structure

Typical theme:

```ts
interface CaseWaveTheme{
 colors
 typography
 spacing
 shadows
 nodes
 edges
 viewport
 controls
}
```

---

# colors

Contains:

```txt
backgrounds
text
borders
accents
statuses
```

---

Example

```ts
colors:{
 background:"#101010",
 text:"#fff"
}
```

---

# typography

Controls:

```txt
fonts
sizes
weights
line heights
```

---

Example

```ts
typography:{
 bodySize:14
}
```

---

# spacing

Layout rhythm.

Example:

```ts
spacing:{
 xs:4
 sm:8
 md:12
 lg:16
}
```

---

# shadows

Depth model.

```txt
node shadows
panel shadows
overlay shadows
```

---

# nodes Theme Section

Node visuals.

Contains:

```txt
fill
stroke
radius
padding
selection
hover
```

---

Example

```ts
nodes:{
 radius:12
}
```

---

# edges Theme Section

Controls:

```txt
line width
arrow styles
curves
active colors
```

---

Example

```ts
edges:{
 width:2
}
```

---

# viewport Theme Section

Controls:

```txt
canvas background
grid
guides
selection box
```

---

# controls Section

Toolbar styles.

Buttons.

Panels.

---

# Built-In Themes

Use:

```ts
listThemes()
```

Retrieve catalog.

---

Get theme:

```ts
getCaseWaveTheme(
 "war-room"
)
```

---

# Theme Families

Examples:

```txt
detective noir
war room
wireframe
retro
blueprint
terminal
analyst
```

Families.

---

# Theme Naming Convention

Pattern:

```txt
domain-style
```

Examples:

```txt
war-room
wiretap
agency-vault
```

Recommended.

---

# Creating Custom Theme

Use factory:

```ts
createCaseWaveTheme({
 ...
})
```

---

Example

```ts
const theme=
createCaseWaveTheme({

 colors:{
  background:"#0b0f14"
 }

})
```

---

# Extending Existing Theme

Recommended:

```ts
extendTheme(
 base,
 overrides
)
```

---

Example

```ts
const custom=
extendTheme(
 getCaseWaveTheme(
  "analyst"
 ),
 {
  colors:{
   accent:"#ff0"
  }
 }
)
```

---

# Token Inheritance

Flow:

```txt
base theme
 overrides
 computed result
```

Supports composition.

---

# Theme Resolution

Runtime resolves:

```txt
defaults
base theme
overrides
computed variants
```

Final merged theme.

---

# Dynamic Theme Switching

Runtime:

```ts
setTheme(
 "noir"
)
```

Live switching.

---

# React Usage

```tsx
<CaseWaveCanvas
 theme={theme}
/>
```

---

# Theme Provider Usage

```tsx
<CaseWaveProvider
 theme={theme}
/>
```

Global theme.

---

# Theme Catalog Generator

Purpose:

Generate visual theme docs.

---

Catalog includes:

```txt
preview cards
token tables
examples
screenshots
```

---

Generated catalog pages:

```txt
themes/index.md
themes/<theme>.md
```

---

Each theme page documents:

```txt
palette
tokens
examples
use cases
```

---

# Theme Metadata

Recommended metadata:

```ts
name
family
mood
contrast
tags
```

Useful cataloging.

---

Example

```ts
{
 name:"war-room",
 mood:"tactical"
}
```

---

# Theme Tokens Reference

Suggested token groups:

```txt
surface
text
border
accent
status
node
edge
grid
```

---

# Surface Tokens

Examples:

```txt
surface.canvas
surface.panel
surface.card
```

---

# Text Tokens

```txt
text.primary
text.secondary
text.muted
```

---

# Status Tokens

```txt
success
warning
danger
info
```

---

# Node Tokens

```txt
node.default
node.selected
node.hover
```

---

# Edge Tokens

```txt
edge.default
edge.highlight
edge.active
```

---

# Grid Tokens

```txt
grid.major
grid.minor
```

---

# Accessibility

Themes should meet:

```txt
WCAG contrast
focus visibility
selection clarity
```

Required.

---

Contrast target:

```txt
AA minimum
AAA preferred
```

---

# Focus States

Never hide focus.

Theme must style:

```txt
focus ring
selection ring
keyboard focus
```

---

# Dark Themes

Recommended for investigation UIs.

Support:

```txt
high contrast dark
deep noir
terminal dark
```

---

# Light Themes

Possible:

```txt
archive
blueprint
analyst desk
```

---

# Theme Author Checklist

Before publishing:

✓ contrast checked

✓ node states styled

✓ edge states styled

✓ typography readable

✓ tokens complete

---

# Advanced Theme Features

Possible support:

```txt
animated themes
density variants
compact modes
```

Advanced.

---

# Density Modes

Example:

```txt
comfortable
compact
dense
```

Same theme.

Different spacing.

---

# Theme Presets vs Theme Factories

Preset:

prebuilt.

Factory:

custom generated.

Different concepts.

---

# Theme Validation

Optional validate:

```ts
validateTheme(
 theme
)
```

Checks completeness.

---

# Theme Serialization

Themes exportable.

```ts
serializeTheme(...)
```

Share themes.

---

# Theme Import

```ts
importTheme(...)
```

Community themes.

---

# Theme Plugin Interop

Plugins should read theme tokens.

Never hardcode colors.

Important.

---

# Theme Versioning

Theme schemas versioned.

Allows migrations.

---

# Theme Anti Patterns

Avoid:

Hardcoded component colors.

Random token names.

Missing semantic tokens.

Poor contrast.

---

# Example Investigation Theme Structure

```txt
case noir
 evidence amber
 police blue
 archive paper
```

Good domain palettes.

---

# Theme Performance

Tokens resolved once.

Memoized.

Cheap at runtime.

---

# Recommended Theme Docs Per Theme

Each theme should include:

```txt
preview
token table
use case
example graph
```

---

# Summary

This handbook covers:

```txt
tokens
theme engine
custom themes
catalog generator
accessibility
authoring
```

Complete theme system documentation.

---

# Next Document

Next:

```txt
17-performance-and-scaling.md
```

Covers:

- large graph performance

- optimization

- scaling strategies

- enterprise usage




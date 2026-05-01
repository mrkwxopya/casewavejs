# 10. Theme Catalog and Generators

Complete documentation for the 270-theme ecosystem.

This document covers:

- theme catalog
- registry architecture
- metadata
- generators
- preview automation
- theme discovery
- searchable docs
- custom theme generation
- publishing third-party themes

This is documentation for the entire theme ecosystem.

---

# Overview

CaseWave ships with:

```txt
270 themes
```

Themes are not random skins.

They form a curated visual library.

---

# Theme Catalog Concept

Catalog = searchable structured theme database.

Not just array of names.

Contains:

- names
- metadata
- previews
- categories
- tags
- token information

---

# Theme Registry

Master registry:

```ts
caseWaveThemes
```

Contains all themes.

Example:

```ts
import {
 caseWaveThemes
}
from "@casewavejs/themes"
```

---

# Theme Registry Structure

Conceptually:

```ts
{
 "war-room":theme,
 "wiretap":theme
}
```

Keyed registry.

Fast lookup.

---

# Theme Names

```ts
caseWaveThemeNames
```

Returns:

```ts
string[]
```

Useful for:

- pickers
- filters
- generators

---

# Theme Metadata

Each theme should include metadata.

Example:

```ts
metadata:{
 category:"operations",

 mode:"dark",

 tags:[
  "military",
  "intel"
 ]
}
```

Critical for cataloging.

---

# Recommended Metadata Fields

```ts
metadata:{
 category
 mode
 tags
 author
 description
 density
 contrast
}
```

Recommended schema.

---

# Category Examples

Possible categories:

```txt
operations
wireframe
retro
terminal
forensics
military
blueprint
archive
surveillance
```

Can group themes.

---

# Example Categories

```txt
war-room
analyst
watchfloor
```

Maybe:

```txt
operations
```

---

```txt
windows-95
```

Maybe:

```txt
retro
```

---

```txt
wiretap
wiregrid
```

Maybe:

```txt
wireframe
```

---

# Theme Catalog Document

Can generate:

```md
themes.md
```

Containing all themes.

Structure:

```txt
Category
 Theme Cards
 Metadata
 Usage
```

---

# Example Catalog Entry

```md
## War Room

Category:
Operations

Mode:
Dark

Tags:
Intel
Military

Usage:

theme="war-room"
```

Repeat for all themes.

---

# Searchable Theme Index

Possible generated index:

```md
themes-index.md
```

Search by:

- name
- category
- tags

Very useful.

---

# Theme Gallery

Generate preview gallery.

Example:

```txt
theme card
preview image
sample graph
```

Visual browser.

---

# Theme Preview Generator

Possible script:

```bash
npm run generate-theme-previews
```

Can generate preview assets.

---

# Preview Rendering

Each theme preview may show:

- sample nodes
- sample edges
- grid
- panels

Consistent preview scene.

Very important.

---

# Standard Preview Scene

Every preview should use same graph.

Example:

```txt
3 nodes
2 edges
1 group
```

Same scene.

Only theme changes.

Allows comparison.

---

# Preview Image Naming

Example:

```txt
war-room.png
wiretap.png
analyst.png
```

Consistent assets.

---

# Theme Catalog Generator

Possible script:

```bash
npm run generate-theme-catalog
```

Could generate:

```txt
markdown docs
preview gallery
metadata json
```

Automated documentation.

---

# Theme Metadata JSON

Possible generated:

```json
themes.json
```

Contains:

```json
[
 {
  "id":"war-room",
  "category":"ops"
 }
]
```

Useful for tooling.

---

# Theme Search UI

Possible theme explorer:

Filters:

```txt
dark themes
wireframe themes
retro themes
```

Searchable catalog.

---

# Theme Tags

Example tags:

```txt
terminal
investigation
military
vintage
cyber
minimal
```

Better discovery.

---

# Featured Themes

Docs may include:

```md
Recommended Starter Themes
```

Example:

- analyst
- war-room
- wiretap
- archive-blue

Helpful onboarding.

---

# Theme Comparison Tables

Possible:

```md
| Theme | Dark | Wireframe | High Contrast |
```

Excellent docs feature.

---

# Theme Usage Snippets

Every catalog entry should show:

```tsx
<CaseWaveCanvas
 theme="war-room"
/>
```

Always include code.

---

# Theme Tokens Documentation

For each theme show:

```txt
primary accent
background
node style
grid style
```

Deep catalog documentation.

---

# Automated Theme Pages

Can generate per-theme docs:

```txt
themes/war-room.md
themes/wiretap.md
```

One page per theme.

Very rich docs.

---

# Theme Families

Themes can belong to families.

Example:

```txt
war-room
warroom-classic
watchfloor
```

Family:

```txt
operations
```

Useful grouping.

---

# Theme Generator APIs

Possible exports:

```ts
createTheme()
composeTheme()
generateTheme()
```

Generator layer.

---

# createTheme

Possible:

```ts
createTheme({
 colors:{}
})
```

Build custom theme.

---

# composeTheme

Merge themes.

```ts
composeTheme(
 base,
 overrides
)
```

Useful extension.

---

# generateTheme

Algorithmic themes.

Example:

```ts
generateTheme({
 baseHue:210
})
```

Generated theme.

---

# Token Generators

Possible auto derive:

```txt
surface scale
accent shades
border ramps
```

Design-system style generation.

---

# Theme Validation

Possible:

```ts
validateTheme(...)
```

Checks:

- missing tokens
- bad contrast
- invalid config

Very useful.

---

# Publishing Third Party Themes

Possible package:

```bash
npm install casewave-theme-neonops
```

Then:

```ts
import neonops
from "casewave-theme-neonops"
```

Extensible ecosystem.

---

# Theme Authoring Guidelines

Themes should include:

- metadata
- semantic tokens
- previews
- docs entry
- category assignment

Required.

---

# Theme Documentation Generator Output

Ideal generated artifacts:

```txt
theme index
gallery
json registry
preview images
per-theme docs
```

Full ecosystem.

---

# Example Theme Catalog Script Concept

Possible:

```ts
generateCatalog(
 caseWaveThemes
)
```

Outputs docs.

---

# README Theme Section

Root README should link:

```txt
Theme Gallery
Theme Catalog
Theme Authoring Guide
```

Discoverability.

---

# Common Mistakes

Only listing theme names.

Too weak.

Need:

metadata
preview
usage
documentation

---

No preview consistency.

Bad.

Use standard preview scene.

---

# Best Practices

For 270 themes:

Use:

- category grouping
- generated docs
- searchable metadata
- previews
- family grouping

This scales.

---

# Summary

Theme ecosystem includes:

```txt
registry
metadata
catalog
previews
generators
theme authoring
distribution
```

Major subsystem.

---

# Next Document

Continue with:

```txt
11-api-reference-complete.md
```

Next becomes exhaustive API reference:

- every type
- every function
- every prop
- every attribute
- complete technical reference




# 39. Theme Catalog Reference

Theme catalog is discoverability layer.

Browse.

Search.

Compare.

Apply.

Document all themes.

---

# Contents

```txt
Catalog Structure
Theme Metadata
Categories
Search
Preview System
Theme Tags
Usage Mapping
Generator
```

---

# Catalog Purpose

Turns raw themes into productized library.

---

# Theme Metadata

Each theme may include:

```ts
{
 name
 category
 tags
 mood
 density
 contrast
 useCases
}
```

---

# Example

```ts
{
 name:"war-room",
 category:"operations",
 tags:["dark","intel"]
}
```

---

# Categories

Possible:

```txt
operations
retro
corporate
cyber
minimal
forensics
wireframe
```

---

# Search API

```ts
catalog.search("dark")
```

---

# Filter Examples

```ts
catalog.filter({
 category:"cyber"
})
```

---

# Tag Filtering

```txt
dark
high-contrast
retro
terminal
minimal
```

---

# Preview Card

Should show:

```txt
name
palette
sample node
sample edge
usage notes
```

---

# Theme Comparison

Possible:

```ts
catalog.compare(
 "analyst",
 "war-room"
)
```

---

# Recommendation Engine

Example:

```ts
catalog.recommend({
 use:"investigation"
})
```

---

# Usage Mapping

Examples:

```txt
war-room -> investigations

wiregrid -> technical maps

windows-95 -> retro OS
```

---

# Theme Groups

Possible bundles:

```txt
analyst collection
retro collection
ops collection
```

---

# Catalog Generator

Can auto-generate docs from themes.

```ts
generateThemeCatalog()
```

---

# Generated Output

Possible:

```txt
catalog pages
preview gallery
markdown docs
json manifest
```

---

# Theme Preview Playground

Users can test:

```txt
switch themes live
```

Important.

---

# Theme Manifest

Example:

```json
themes-manifest.json
```

Contains metadata.

---

# Theme Docs Per Theme

Each theme can have:

```txt
purpose
preview
recommended usage
token notes
```

---

# Example Theme Entry

```md
War Room

Purpose:
intel boards

Best for:
crime analysis
```

---

# Catalog Navigation

Recommended:

```txt
by category
by popularity
by use case
alphabetical
```

---

# CLI Generator

Possible:

```bash
npm run generate-themes
```

---

# Screenshot Generation

Auto previews possible.

Useful.

---

# FAQ

Can themes be searchable?

Yes.

Can catalog be generated automatically?

Yes.

---

# Related Types

```ts
ThemeCatalog
ThemeMetadata
ThemeManifest
```

---

# Source

```txt
packages/themes/catalog
```

---

# Summary

Catalog provides:

```txt
discovery
comparison
documentation
theme intelligence
```

---

# Next

40-animation-system-reference.md

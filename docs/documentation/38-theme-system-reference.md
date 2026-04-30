# 38. Theme System Reference

Themes define visual language.

Colors.

Tokens.

Surfaces.

States.

Density.

Brand personality.

---

# Contents

```txt
Theme Architecture
Theme Object
Tokens
Palettes
Semantic Colors
Typography
Spacing
Component Tokens
Modes
Custom Themes
Catalog Integration
```

---

# Core Theme Type

```ts
CaseWaveTheme
```

---

# Interface

```ts
interface CaseWaveTheme{
 name
 mode
 colors
 typography
 spacing
 radius
 shadows
 states
 components
}
```

---

# Theme Import

```ts
import { themes } from "@casewave/themes"
```

---

# Use Theme

```ts
graph.setTheme(
 themes.warroom
)
```

---

# Theme Structure

```txt
foundation tokens
semantic tokens
component tokens
runtime overrides
```

---

# Foundation Tokens

Raw primitives.

Examples:

```txt
blue-500
gray-900
space-4
radius-lg
```

---

# Semantic Tokens

Meaning-driven.

```txt
surface
surfaceMuted
primary
danger
border
textPrimary
```

---

Example

```ts
surface:"#10141a"
```

---

# Color Groups

Typical:

```txt
primary
secondary
accent
neutral
success
warning
danger
```

---

# State Tokens

Interactive states.

```txt
hover
active
selected
focus
disabled
```

---

Example

```ts
selectedBorder:"#5aa9ff"
```

---

# Typography

```ts
typography:{
 fontFamily
 fontSize
 weights
}
```

---

# Spacing Scale

```ts
spacing:{
 xs:4,
 sm:8,
 md:12
}
```

---

# Radius

```ts
radius:{
 sm:4,
 lg:16
}
```

---

# Shadows

```ts
shadow.node
shadow.modal
```

Depth system.

---

# Component Tokens

Target specific visuals.

```txt
node styles
edge styles
panel styles
toolbar styles
```

---

Example

```ts
components:{
 node:{
  background:"#111"
 }
}
```

---

# Light / Dark Modes

```ts
mode:"dark"
```

or

```ts
mode:"light"
```

---

# Theme Override

```ts
graph.theme.extend({
 colors:{
  primary:"#00ff88"
 }
})
```

---

# Runtime Theme Switch

```ts
graph.setTheme(newTheme)
```

Dynamic switching.

---

# Theme Catalog

270 themes package.

Examples:

```txt
war-room
analyst
wiregrid
windows-95
```

---

# Theme Lookup

```ts
themes["war-room"]
```

---

# Create Theme

```ts
createTheme({
 name:"custom"
})
```

---

# Theme Inheritance

```ts
extendTheme(base,{
 overrides...
})
```

---

# Best Practices

Prefer:

```txt
semantic tokens
not hardcoded colors
```

Critical.

---

# Accessibility

Themes should support:

```txt
contrast
focus visibility
readability
```

---

# FAQ

Can users create themes?

Yes.

Can themes affect edges too?

Yes.

---

# Related Types

```ts
CaseWaveTheme
ThemeTokens
ThemeOverrides
```

---

# Source

```txt
packages/themes/src
```

---

# Summary

Themes provide:

```txt
visual identity
tokens
runtime styling
scalable design system
```

---

# Next

39-theme-catalog-reference.md

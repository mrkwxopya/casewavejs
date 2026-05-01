# 88. Anti-Pattern Catalog

Good architecture documents failure modes.

Not only success patterns.

---

# Contents

```txt
Purpose
Architectural Anti Patterns
API Anti Patterns
Theme Anti Patterns
Plugin Anti Patterns
Recovery Guidance
```

---

# Purpose

Teach what not to do.

Critical.

---

# Anti Pattern Entry

Document:

```txt
name
problem
why harmful
better alternative
```

---

# Architecture Anti Patterns

Examples:

## God Graph State

Problem:

```txt
everything in one mutable global store
```

Better:

```txt
bounded state slices
```

---

## Full Re-render Loops

Problem:

```txt
repaint entire graph every change
```

Better:

```txt
incremental rendering
```

---

# API Anti Patterns

Examples:

```txt
magic behavior
unstable signatures
surprising side effects
```

---

# Theme Anti Patterns

Examples:

```txt
raw color sprawl
duplicate token meaning
hardcoded component colors
```

---

# Plugin Anti Patterns

Examples:

```txt
plugin internal mutation
missing teardown
unsafe capability access
```

---

# Documentation Anti Patterns

Examples:

```txt
undocumented exports
example-only APIs
stale references
```

---

# Include Recovery Advice

For each anti-pattern:

```txt
how to refactor away from it
```

Very important.

---

# Severity Labels

Optional:

```txt
warning
high risk
critical
```

---

# Anti Pattern Index

Browse by:

```txt
architecture
performance
security
api
```

---

# FAQ

Separate from patterns catalog?

Yes.

Very valuable?

Extremely.

---

# Files

```txt
docs/anti-patterns/
```

---

# Summary

Anti-pattern catalog gives:

```txt
safer design
fewer mistakes
architectural resilience
```

---

# Next

89-enterprise-adoption-guide.md




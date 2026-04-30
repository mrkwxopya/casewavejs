# 59. Migration Guides

Good libraries survive versions.

Migration makes that possible.

---

# Contents

```txt
Migration Philosophy
Breaking Changes
Upgrade Paths
Codemods
Deprecation Policy
Compatibility Strategy
```

---

# Principles

Never surprise users.

Breaking changes require migration paths.

Always.

---

# Version Policy

Follow:

```txt
SemVer
```

Rules:

```txt
major = breaking
minor = additive
patch = fixes
```

---

# Migration File Layout

```txt
docs/migrations/
migrations/v1-v2.md
migrations/v2-v3.md
```

---

# Migration Guide Template

Every migration includes:

```txt
what changed
why changed
before code
after code
automated fix options
```

---

# Example

Before:

```ts
graph.addLink(...)
```

After:

```ts
graph.addEdge(...)
```

Document:

```txt
renamed API
behavior changes
edge cases
```

---

# Deprecation Process

Use:

```txt
warn
deprecate
remove
```

Never hard-remove suddenly.

---

# Runtime Deprecation Warnings

Example:

```ts
console.warn("Deprecated API")
```

---

# Codemods

Recommended for major upgrades.

Example areas:

```txt
renames
config updates
imports
```

---

# Migration Checklists

Users need checklist:

```txt
backup graphs
run tests
upgrade packages
apply codemods
verify serialization
```

---

# Compatibility Matrix

Document:

```txt
plugin versions
supported adapters
minimum runtime versions
```

---

# Common Upgrade Risks

Watch:

```txt
schema mismatches
plugin incompatibility
serialized graph changes
```

---

# FAQ

Can old graphs open?

Prefer yes.

Do breaking changes require migration docs?

Always.

---

# Files

```txt
docs/migrations/
scripts/codemods/
```

---

# Summary

Migration guides protect:

```txt
users
ecosystem
trust
```

---

# Next

60-performance-architecture.md

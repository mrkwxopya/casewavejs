# 58. Schema Reference

Schemas define contract boundaries.

They are not optional.

They are architecture.

---

# Contents

```txt
Schema Philosophy
Node Schemas
Edge Schemas
Runtime Schemas
Validation Contracts
Schema Versioning
Migration Strategy
```

---

# Why Schemas Matter

Without schemas:

```txt
data drift
breaking integrations
runtime corruption
```

With schemas:

```txt
predictability
safety
tooling support
```

---

# Core Node Schema

```ts
interface GraphNode {
  id: string
  type: string
  position?: XY
  data?: Record<string, unknown>
  metadata?: Metadata
}
```

---

# Core Edge Schema

```ts
interface GraphEdge {
 id: string
 source: Endpoint
 target: Endpoint
 relation?: string
 direction?: EdgeDirection
 metadata?: EdgeMetadata
}
```

---

# Group Schema

```ts
interface GroupNode {
 id:string
 children:string[]
 collapsed:boolean
}
```

---

# Metadata Schema

Recommended fields:

```txt
createdAt
updatedAt
author
confidence
tags
source
version
```

---

# Runtime Schema Guards

Use runtime parsing.

Examples:

```ts
zod
valibot
io-ts
```

---

# Example Zod

```ts
const NodeSchema = z.object({
 id:z.string(),
 type:z.string()
})
```

---

# Versioned Schemas

Use:

```txt
schemaVersion
migrationVersion
compatibilityRange
```

---

# Backward Compatibility

Must preserve:

```txt
older serialized graphs
imports
plugins
```

---

# Migration Contracts

Each schema change:

```txt
documented
versioned
migratable
```

---

# Validation Rules

Validate:

```txt
ids unique
edges valid
relations allowed
metadata typed
```

---

# Anti Patterns

Avoid:

```txt
loosely typed blobs
silent coercion
hidden fields
```

---

# FAQ

Can users extend schemas?

Yes.

Should schemas be public?

Absolutely.

---

# Files

```txt
packages/core/schema/
```

---

# Summary

Schema layer guarantees:

```txt
stability
interoperability
trust
```

---

# Next

59-migration-guides.md




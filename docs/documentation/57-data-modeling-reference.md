# 57. Data Modeling Reference

Graph quality starts with data modeling.

Bad schema.

Bad system.

---

# Contents

```txt
Modeling Principles
Entity Models
Relations
Schemas
Metadata
Validation
Patterns
```

---

# Core Principle

Model meaning first.

Not visuals first.

---

# Node Modeling

Nodes represent entities.

Examples:

```txt
people
places
evidence
documents
```

---

# Node Schema Example

```ts
{
 id
 type
 data
 metadata
}
```

---

# Edge Modeling

Relationships carry meaning.

Not just lines.

---

# Relation Examples

```txt
owns
knows
suspects
located_at
```

---

# Rich Metadata

Useful:

```txt
timestamps
confidence
source
tags
```

---

# Taxonomies

Use controlled vocabularies.

Improves consistency.

---

# Schema Validation

Strongly recommended.

---

# Identity Rules

Stable IDs critical.

---

# Type Systems

Use explicit node types.

Avoid vague generic nodes.

---

# Normalization

Keep models clean.

Avoid duplication.

---

# Investigation Example

Groups:

```txt
suspects
evidence
locations
events
```

---

# Relation Direction

Document meaning.

Important.

---

# Common Mistakes

Avoid:

```txt
modeling visuals instead of concepts
weak IDs
unclear edge semantics
```

---

# FAQ

Can edges carry metadata?

Yes.

Should node types be explicit?

Yes.

---

# Related Types

```ts
NodeSchema
EdgeSchema
EntityModel
```

---

# Source

```txt
docs/data-modeling
```

---

# Summary

Data modeling provides:

```txt
semantic clarity
scalability
clean graph structure
```

---

# Next

58-schema-reference.md

# 44. Serialization Reference

Serialization turns graph state into portable data.

Save.

Load.

Export.

Sync.

Version.

---

# Contents

```txt
Serialization Concepts
Graph JSON
Export APIs
Import APIs
Versioning
Validation
Migration
Patterns
```

---

# Core APIs

```ts
graph.serialize()
graph.deserialize()
```

---

# Serialize Example

```ts
const data=
graph.serialize()
```

---

# Result Shape

```ts
{
 nodes:[],
 edges:[],
 metadata:{}
}
```

---

# Nodes

Serialized:

```txt
id
type
position
data
style
```

---

# Edges

Serialized:

```txt
source
target
relation
style
```

---

# Metadata

Can include:

```txt
version
theme
layout
timestamps
```

---

# Export JSON

```ts
graph.exportJSON()
```

---

# Import JSON

```ts
graph.importJSON(data)
```

---

# Save File

```ts
download(
 graph.serialize()
)
```

---

# Versioning

Example:

```json
"schemaVersion":"1.0"
```

Important.

---

# Migration

Handle schema upgrades.

```ts
migrate(old)
```

---

# Validation

Validate imported data.

Critical.

---

# Custom Serialization

Possible:

```ts
serializeCustom(...)
```

---

# Partial Serialization

Save subsets.

```ts
serializeSelection()
```

---

# Persistence

Good for:

```txt
autosave
cloud sync
projects
```

---

# FAQ

Can themes serialize?

Yes.

Can layouts serialize?

Yes.

---

# Related Types

```ts
GraphJSON
SerializedNode
SerializedEdge
```

---

# Source

```txt
packages/core/src/serialization
```

---

# Summary

Serialization provides:

```txt
portability
persistence
versioning
```

---

# Next

45-import-export-reference.md




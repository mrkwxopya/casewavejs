# 45. Import Export Reference

Import/export handles data movement.

Projects.

Interoperability.

Sharing.

---

# Contents

```txt
Supported Formats
Import
Export
Converters
Pipelines
Validation
Patterns
```

---

# Supported Formats

```txt
json
csv
graphml
svg
png
```

---

# Import API

```ts
graph.import(...)
```

---

# Export API

```ts
graph.export(...)
```

---

# JSON Export

```ts
graph.exportJSON()
```

---

# PNG Export

```ts
graph.exportPNG()
```

---

# SVG Export

```ts
graph.exportSVG()
```

---

# CSV Import

Possible for entity sets.

```ts
importCSV(file)
```

---

# GraphML

Interchange support.

Useful.

---

# Conversion Pipeline

```txt
parse
validate
map
load
```

---

# Example

```ts
importData(file,{
 validate:true
})
```

---

# Export Options

```ts
{
 scale:2,
 transparent:true
}
```

---

# Batch Export

Possible:

```txt
multiple board exports
```

---

# Screenshot Export

Useful for evidence boards.

---

# Print Export

SVG ideal.

---

# Import Mapping

Map fields:

```ts
columns -> node schema
```

---

# Validation

Always validate external imports.

---

# FAQ

Can export include themes?

Yes.

Can imports be transformed?

Yes.

---

# Related Types

```ts
ImportOptions
ExportOptions
FormatAdapter
```

---

# Source

```txt
packages/core/src/io
```

---

# Summary

Import/export provides:

```txt
sharing
interoperability
portable outputs
```

---

# Next

46-event-system-reference.md




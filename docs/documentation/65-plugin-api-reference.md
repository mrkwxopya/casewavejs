# 65. Plugin API Reference

Plugins need documented APIs.

Guesswork is not API design.

---

# Contents

```txt
Plugin APIs
Capabilities
Extension Points
Hooks
Utilities
Permissions
Examples
```

---

# Core Plugin API

Typical surface:

```ts
plugin.api.graph
plugin.api.events
plugin.api.commands
```

---

# Graph APIs

Examples:

```ts
addNode()
addEdge()
query()
select()
```

---

# Event APIs

```ts
on()
off()
emit()
```

---

# Command APIs

```ts
executeCommand()
registerCommand()
```

---

# Extension Points

Possible:

```txt
custom tools
custom layouts
custom inspectors
custom renderers
```

---

# Plugin Hooks

```txt
onLoad
onGraphChange
onSelectionChange
```

---

# Permissions

Important for security.

Examples:

```txt
read graph
write graph
filesystem access
network access
```

---

# Plugin Manifest

Possible:

```json
{
 "permissions":[]
}
```

---

# Utilities

Provide helpers:

```txt
logging
storage
serialization helpers
schema helpers
```

---

# Example Plugin

```ts
export default definePlugin(...)
```

---

# API Stability

Document:

```txt
stable APIs
experimental APIs
deprecated APIs
```

---

# Anti Patterns

Avoid:

```txt
private internals exposed as api
unstable undocumented hooks
```

---

# FAQ

Can plugins extend renderer?

Yes.

Should permissions exist?

Strongly yes.

---

# Source

```txt
docs/plugins/
packages/plugins/api/
```

---

# Summary

Plugin APIs provide:

```txt
extensibility
consistency
developer trust
```

---

# Next

66-rendering-pipeline.md




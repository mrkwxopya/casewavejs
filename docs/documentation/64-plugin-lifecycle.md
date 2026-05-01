# 64. Plugin Lifecycle

Plugins need lifecycle contracts.

Otherwise ecosystems collapse.

---

# Contents

```txt
Lifecycle Stages
Registration
Initialization
Activation
Teardown
Hooks
Safety
```

---

# Lifecycle Phases

Standard phases:

```txt
register
initialize
activate
update
dispose
```

---

# Registration

Plugin declares:

```txt
name
version
capabilities
dependencies
```

---

# Example

```ts
registerPlugin({
 name:"plugin-x"
})
```

---

# Initialize

Used for:

```txt
setup state
register commands
bind events
```

---

# Activate

Plugin becomes live.

May attach UI.

May expose tools.

---

# Update Phase

Plugins may react to:

```txt
config changes
graph changes
runtime signals
```

---

# Dispose

Critical.

Must clean:

```txt
listeners
timers
resources
caches
```

---

# Hooks

Possible hooks:

```txt
beforeMount
afterMount
beforeCommand
afterCommand
beforeSerialize
```

---

# Dependency Ordering

Respect plugin dependencies.

Load order matters.

---

# Plugin Context

Provide context:

```ts
PluginContext
```

Contains:

```txt
graph api
events
commands
storage
```

---

# Failure Isolation

One plugin crash:

Must not crash system.

Critical rule.

---

# Anti Patterns

Avoid:

```txt
plugins mutating hidden internals
missing cleanup
unscoped side effects
```

---

# FAQ

Can plugins depend on plugins?

Yes.

Can plugins be hot-loaded?

Prefer yes.

---

# Source

```txt
packages/plugins/
```

---

# Summary

Lifecycle system provides:

```txt
stability
ecosystem safety
extensibility
```

---

# Next

65-plugin-api-reference.md




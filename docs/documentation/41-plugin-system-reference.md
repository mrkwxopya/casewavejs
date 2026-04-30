# 41. Plugin System Reference

Plugins extend CaseWave.

Core stays lean.

Features compose.

---

# Contents

```txt
Plugin Architecture
Plugin Lifecycle
Registration
Hooks
Capabilities
Examples
Patterns
Security
```

---

# Core Type

```ts
CaseWavePlugin
```

---

# Interface

```ts
interface CaseWavePlugin{
 name
 setup(graph)
 destroy?
 hooks?
}
```

---

# Register

```ts
graph.use(plugin)
```

---

# Example

```ts
graph.use(
 minimapPlugin()
)
```

---

# Lifecycle

```txt
install
initialize
runtime
destroy
```

---

# Hooks

Possible:

```txt
onNodeCreate
onEdgeCreate
onRender
onLayout
```

---

# Hook Example

```ts
hooks:{
 onNodeCreate(node){}
}
```

---

# Plugin Capabilities

Can add:

```txt
tools
panels
commands
renderers
analytics
```

---

# Built-in Examples

```txt
minimap
history
snaplines
comments
```

---

# Custom Plugin

```ts
const plugin={
 name:"audit"
}
```

---

# Setup Function

```ts
setup(graph){
 ...
}
```

Entry point.

---

# Cleanup

```ts
destroy(){
 ...
}
```

Important.

---

# Plugin Options

```ts
plugin({
 enabled:true
})
```

---

# Command Injection

Plugins can register commands.

```ts
registerCommand(...)
```

---

# UI Extensions

Possible:

```txt
toolbar buttons
panels
menus
```

---

# Event Listening

Plugins often subscribe.

```ts
graph.on(...)
```

---

# Plugin Order

May matter.

Document dependencies.

---

# Composition

Use many plugins.

```ts
graph.use(a)
graph.use(b)
```

---

# Namespacing

Avoid collisions.

Use plugin namespaces.

---

# Security Notes

Plugins may execute code.

Treat third-party plugins carefully.

---

# Packaging

Possible:

```txt
@casewave/plugin-*
```

---

# FAQ

Can users build plugins?

Yes.

Can plugins modify graph behavior?

Yes.

---

# Related Types

```ts
CaseWavePlugin
PluginContext
PluginHooks
```

---

# Source

```txt
packages/plugins
```

---

# Summary

Plugins provide:

```txt
extensibility
modularity
ecosystem growth
```

---

# Next

42-command-system-reference.md

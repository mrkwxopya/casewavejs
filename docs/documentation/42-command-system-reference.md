# 42. Command System Reference

Commands are programmable actions.

Everything can become command-driven.

Ideal for power users.

Automation.

Debugging.

Tooling.

---

# Contents

```txt
Command Architecture
Command Registry
Registration
Execution
Parameters
Undo Integration
Command Palette
Macros
Debug Commands
```

---

# Core Type

```ts
Command
```

---

# Interface

```ts
interface Command{
 id
 label
 run(context,args)
 undo?
 shortcut?
}
```

---

# Register Command

```ts
graph.registerCommand(...)
```

---

# Example

```ts
graph.registerCommand({
 id:"zoom.fit"
})
```

---

# Execute

```ts
graph.command("zoom.fit")
```

---

# Arguments

```ts
graph.command(
 "node.focus",
 {id:"suspect1"}
)
```

---

# Command Categories

```txt
graph commands
editor commands
debug commands
automation commands
```

---

# Built-in Examples

```txt
zoom.fit
node.center
layout.run
history.undo
```

---

# Undo Support

Commands may support:

```ts
undo()
```

---

# Keyboard Shortcut

```ts
shortcut:"Ctrl+K"
```

---

# Command Palette

Like IDE launcher.

```ts
openCommandPalette()
```

---

# Macro Commands

Combine commands.

```ts
runMacro([
 "fit",
 "layout"
])
```

---

# Debug Commands

Possible:

```txt
debug!layout
debug!edges
debug!state
```

---

# Runtime Commands

Can alter graph live.

Powerful.

---

# Command Metadata

Possible:

```ts
{
 category
 description
 aliases
}
```

---

# Command Aliases

```txt
fit
zoomfit
```

---

# Namespacing

Recommended:

```txt
node.*
edge.*
layout.*
debug.*
```

---

# Validation

Commands validate args.

Important.

---

# Async Commands

Supported.

```ts
async run(){}
```

---

# FAQ

Can users create commands?

Yes.

Can commands be chained?

Yes.

---

# Related Types

```ts
Command
CommandRegistry
CommandContext
```

---

# Source

```txt
packages/core/src/commands
```

---

# Summary

Commands provide:

```txt
automation
power tools
debug control
```

---

# Next

43-history-undo-reference.md

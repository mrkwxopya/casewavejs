# 15. Plugin Development Guide

Advanced extension author documentation.

For ecosystem builders.

How to build plugins professionally.

---

# Contents

```txt
Plugin Philosophy
Plugin API
Lifecycle
Hooks
Plugin Types
Authoring Patterns
Testing Plugins
Publishing Plugins
Security
Versioning
```

---

# What Is A Plugin

Plugin extends CaseWave without modifying core.

Examples:

```txt
custom layouts
graph analyzers
importers
exporters
tool panels
validators
collaboration layers
```

---

# Philosophy

Plugins should:

- be isolated

- be composable

- avoid patching internals

- use public APIs only

Critical.

---

# Plugin Architecture

Concept:

```txt
Core
 ↓
Plugin Host
 ↓
Plugins
```

Host executes lifecycle.

---

# Plugin Shape

Basic plugin:

```ts
interface CaseWavePlugin{
 name:string
 version:string
 setup(ctx):void
 dispose?():void
}
```

---

Minimal plugin

```ts
export default {
 name:"example",
 version:"1.0.0",

 setup(ctx){
 }
}
```

---

# Registering Plugins

```ts
registerPlugin(
 myPlugin
)
```

Or:

```ts
graph.use(
 plugin
)
```

Depending API surface.

---

# Plugin Context

Plugin receives context.

```ts
ctx
```

Contains:

```txt
graph
store
events
commands
theme
utilities
```

---

Example:

```ts
setup(ctx){

 ctx.events.on(...)
}
```

---

# Lifecycle

Lifecycle stages:

```txt
load
setup
runtime
dispose
```

---

Load

Plugin discovered.

No heavy work.

---

Setup

Register hooks.

Attach handlers.

---

Runtime

Respond to events.

Main logic.

---

Dispose

Cleanup.

Required.

---

# Hook System

Hooks allow extension.

---

beforeMutation

```ts
beforeMutation(payload)
```

Intercept writes.

---

afterMutation

```ts
afterMutation(payload)
```

React after changes.

---

beforeRender

```ts
beforeRender(state)
```

Customize render prep.

---

afterRender

```ts
afterRender(info)
```

Post-render tasks.

---

selectionChanged

```ts
onSelection(...)
```

Selection hooks.

---

viewportChanged

Pan zoom events.

---

# Example Plugin

Auto color suspects:

```ts
export const suspectPlugin={

 name:"suspect-color",

 setup(ctx){

  ctx.events.on(
   "node:add",
   node=>{

    if(
      node.type==="person"
    ){
      ctx.graph.updateNode(
       node.id,
       {
        style:{
         fill:"red"
        }
       }
      )
    }

   }
  )

 }

}
```

Example only.

---

# Plugin Categories

Recommended categories:

```txt
layout plugins
analysis plugins
ui plugins
theme plugins
import/export plugins
automation plugins
```

---

# Layout Plugin Example

```ts
registerLayout(
 "detective-grid",
 algorithm
)
```

Custom layouts.

---

# Analysis Plugin Example

Could provide:

```txt
path finding
centrality
link analysis
suspicion scoring
```

Powerful.

---

# Import Plugin Example

Support:

```txt
neo4j
csv
custom case files
```

Adapters.

---

# Command Plugins

Plugins can expose commands.

```ts
ctx.commands.register(
 "focusSuspects",
 fn
)
```

Command palette support.

---

# Plugin State

Plugin-local state:

```ts
const state={}
```

Allowed.

Keep isolated.

---

Avoid mutating shared internals.

Important.

---

# Plugin Options

Configurable plugins:

```ts
createPlugin(
 options
)
```

Factory pattern.

---

Example

```ts
createHeatmapPlugin({
 intensity:.8
})
```

Good pattern.

---

# Recommended File Structure

```txt
my-plugin/

src/
 index.ts
 hooks.ts
 types.ts
 README.md
```

---

# Plugin Naming

Use:

```txt
casewave-plugin-*
```

Examples:

```txt
casewave-plugin-neo4j
casewave-plugin-timeline
```

Recommended.

---

# Plugin Events

Listen:

```ts
ctx.events.on(
 "graph:loaded",
 handler
)
```

Possible events:

```txt
node:add
node:update
edge:add
selection:change
graph:import
```

---

# Async Plugins

Allowed.

Example:

```ts
setup async(...)
```

For remote data.

---

Use cancellation.

Important.

---

# Plugin Composition

Multiple plugins:

```ts
plugins:[
 a,
 b
]
```

Supported.

---

Design composable.

No global collisions.

---

# Plugin Priority

Advanced plugins may define:

```ts
priority:100
```

Execution order.

---

# Safe Plugins

Must avoid:

- monkey patching

- touching private internals

- blocking renders

- infinite event loops

Very important.

---

# Infinite Loop Pitfall

Bad:

mutation inside mutation hook.

Can recurse.

Avoid.

---

Use guards:

```ts
if(flag)return
```

---

# Plugin Testing

Unit tests:

```ts
expect(plugin)
```

---

Integration:

mount graph + plugin.

---

Test:

```txt
setup
events
cleanup
edge cases
```

All.

---

# Plugin Debugging

Use tracing:

```ts
ctx.debug(...)
```

If available.

---

Recommended logs:

```txt
plugin init
hook fire
cleanup
errors
```

---

# Error Handling

Always isolate failures.

```ts
try{

}

catch(e){

}
```

Plugin should not crash host.

Critical.

---

# Security

Never trust imports.

Validate inputs.

Sanitize plugin configs.

---

Avoid:

```txt
unsafe eval
arbitrary code loaders
```

Never.

---

# Version Compatibility

Declare support:

```json
peerDependencies
```

Example:

```json
"@casewave/core":"^1.0.0"
```

---

# Semantic Versioning

Use semver.

```txt
major breaking
minor features
patch fixes
```

---

# Publishing Plugin

Checklist:

```txt
typed
tested
documented
versioned
licensed
```

Required.

---

Publish:

```bash
npm publish
```

---

# Plugin README Should Include

```txt
installation
usage
api
compatibility
examples
```

Always.

---

# Plugin Marketplace Future

Potential ecosystem:

```txt
community plugins
official plugins
premium plugins
```

Plan for discoverability.

---

# Enterprise Plugin Patterns

Use plugins for:

```txt
permissions
audit
realtime
custom workflows
```

Powerful.

---

# Example Investigation Plugins

Ideas:

```txt
timeline analysis
suspect scoring
evidence clustering
crime scene overlays
```

Great demos.

---

# Anti Patterns

Do not:

Store app data globally.

Patch internal objects.

Depend on undocumented internals.

Block render thread.

---

# Plugin Author Checklist

Before release:

✓ hooks cleaned

✓ dispose implemented

✓ no memory leaks

✓ version pinned

✓ docs included

---

# Advanced Hook Authoring

Possible middleware pattern:

```ts
beforeMutation(
 payload,
 next
)
```

Call:

```ts
next()
```

Pipeline extension.

---

# Summary

This guide covered:

```txt
plugin API
hooks
lifecycle
patterns
publishing
security
```

Complete plugin author handbook.

---

# Next Document

Next:

```txt
16-theme-system-handbook.md
```

Dedicated deep documentation for:

- theme tokens

- theme authoring

- catalog generation

- creating custom themes

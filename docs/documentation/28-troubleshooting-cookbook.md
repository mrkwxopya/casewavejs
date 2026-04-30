# 28. Troubleshooting Cookbook

Production-grade problem diagnosis and recovery guide.

When something breaks:

this is where users go first.

---

# Contents

```txt
Debugging Philosophy
Issue Classification
Fast Diagnosis Flow
Installation Problems
Runtime Problems
Graph Issues
Plugin Issues
Theme Issues
Performance Issues
Build Issues
Production Incidents
Recovery Playbooks
FAQ
```

---

# Debugging Philosophy

Always diagnose in this order:

```txt
reproduce
isolate
inspect
verify
fix
validate
```

Never skip isolation.

---

# Issue Severity Levels

Define severity:

```txt
P0 critical outage
P1 major broken feature
P2 degraded behavior
P3 minor issue
```

Helps prioritize.

---

# Fast Diagnosis Flow

Use this order:

```txt
Is it install?
Is it configuration?
Is it runtime?
Is it data?
Is it plugin?
Is it rendering?
```

Usually finds root cause quickly.

---

# Universal Debug Checklist

Before filing issue:

```txt
check version
check peer deps
check console errors
test minimal reproduction
verify config
```

Always start here.

---

# Installation Problems

## Package Not Found

Problem:

```bash
Cannot resolve module ...
```

Check:

```bash
npm install
npm ls
npm dedupe
```

Then reinstall clean.

---

## Peer Dependency Warnings

Verify versions:

```bash
npm ls react
npm ls typescript
```

Version mismatch common cause.

---

## Clean Reinstall

Use:

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

Often fixes mysterious issues.

---

# TypeScript Errors

## Missing Types

Problem:

```ts
Cannot find type declarations
```

Install required types.

Example:

```bash
npm install -D @types/react
```

---

## Generic Inference Problems

Explicitly type:

```ts
const graph = createGraph<MyNode>();
```

Do not rely on inference blindly.

---

# Runtime Problems

## Graph Not Rendering

Check:

container dimensions.

Most common cause.

Verify:

```css
height:100%
width:100%
```

---

## Blank Canvas

Possible causes:

```txt
zero-size container
failed mount
invalid graph data
render crash
```

Check each.

---

## Nodes Missing

Inspect data:

```ts
console.log(nodes)
```

Validate IDs unique.

Duplicate IDs break graphs.

---

## Edges Missing

Verify:

source exists

target exists

IDs match.

Most edge bugs are invalid references.

---

# Graph Data Validation

Use:

```ts
validateGraph(graph)
```

Before rendering.

Huge debugging win.

---

# Circular Reference Problems

Symptoms:

freeze

stack overflow

unexpected recursion

Check cyclic relationships.

---

# Layout Issues

## Overlapping Nodes

Usually layout config issue.

Adjust:

```txt
spacing
rank separation
collision
padding
```

---

## Slow Layout

Use worker layouts.

Reduce node count.

Profile algorithm.

---

# Interaction Bugs

## Drag Broken

Check:

```txt
pointer events
capture conflicts
overlay intercepts
```

Very common.

---

## Selection Not Working

Inspect:

hit regions

z-index

pointer blocking

Often CSS issue.

---

# Plugin Problems

## Plugin Not Loading

Verify registration:

```ts
registerPlugin(MyPlugin)
```

before use.

Common mistake.

---

## Hook Not Firing

Check lifecycle phase.

Maybe wrong hook stage.

Inspect:

```txt
beforeRender
afterRender
beforeUpdate
```

---

## Plugin Crashes Core

Use sandbox boundaries.

Wrap plugin errors.

```ts
try {
 plugin.run()
} catch(e){}
```

Never trust plugin code.

---

# Theme Problems

## Tokens Not Applied

Verify provider exists.

Common issue.

```tsx
<ThemeProvider>
```

must wrap app.

---

## Wrong Colors

Check:

token inheritance chain.

Often overridden accidentally.

---

## Dark Mode Broken

Verify:

```txt
theme mode
provider state
css variables
system overrides
```

---

# CSS Conflicts

Symptom:

components look wrong.

Likely host styles leaking.

Use namespace isolation.

---

# Theme Generator Problems

Generated themes invalid?

Validate tokens:

```ts
validateTheme(theme)
```

Always.

---

# Build Problems

## Production Build Fails

Run:

```bash
npm run build
```

with verbose logging.

Check first failing module.

---

## Tree-Shaking Issues

Imports may be wrong.

Use:

```ts
import { x } from ...
```

Avoid accidental side effects.

---

# ESM/CJS Problems

Symptoms:

import failures.

Check module format compatibility.

Very common.

---

# Bundler Issues

Test:

```txt
vite
webpack
rollup
```

May be tool-specific.

---

# Performance Problems

## Large Graph Slow

Measure:

```txt
render time
layout time
interaction latency
memory
```

Profile before optimizing.

---

## Re-renders Too Frequent

Check memoization.

Use:

```txt
React.memo
useMemo
useCallback
```

Profile components.

---

## Memory Leaks

Check:

listeners

subscriptions

worker cleanup

destroy lifecycle.

Common leak sources.

---

# Production Incident Playbook

When outage happens:

step 1:

stabilize.

step 2:

rollback.

step 3:

diagnose.

Never debug during fire blindly.

---

# Safe Rollback

Maintain known-good version.

Rollback quickly.

Best recovery tool.

---

# Logging Strategy

Enable structured logs.

Capture:

```txt
errors
warnings
events
plugin failures
```

Logs matter.

---

# Enable Debug Mode

Example:

```ts
createGraph({
 debug:true
})
```

Expose internals.

Useful.

---

# Minimal Reproduction Method

Always reduce issue.

Strip app until bug remains.

Small repro finds truth.

---

# Bisecting Regressions

Find bad commit.

Use:

```bash
git bisect
```

Powerful technique.

---

# Common Error Patterns

## Duplicate Node ID

Symptom:

missing nodes.

Cause:

ID collision.

Fix:

unique IDs.

---

## Infinite Update Loop

Symptoms:

freeze

CPU spike

Cause:

recursive state updates.

Check hooks.

---

## Invalid Plugin State

Symptoms:

random crashes.

Cause:

plugin mutating core.

Use immutability.

---

# SSR Problems

If using SSR:

check window access.

Guard browser-only code.

Example:

```ts
if(typeof window !== "undefined")
```

---

# Worker Issues

Workers failing?

Check:

paths

bundler support

message serialization

---

# Serialization Problems

Functions cannot serialize.

Avoid in transferable data.

Common worker bug.

---

# Security-Related Errors

Plugin denied?

Permission model may block it.

Check capability declarations.

---

# FAQ

## Graph freezes with huge data?

Use virtualization.

Use worker layouts.

---

## Themes randomly broken?

Check token overrides.

---

## Plugin works dev but not prod?

Likely build optimization issue.

Check bundler.

---

## Why blank render only in prod?

Often minification-sensitive bug.

Check console.

---

# Issue Reporting Template

Users should include:

```txt
package version
environment
reproduction
expected result
actual result
logs
```

Improves support dramatically.

---

# Diagnostic Commands

Useful commands:

```bash
npm ls
npm doctor
npm outdated
```

Great first checks.

---

# Troubleshooting Decision Tree

Quick path:

```txt
install issue?
 configuration issue?
 rendering issue?
 performance issue?
 plugin issue?
```

Follow tree.

---

# Escalation Guide

If unresolved:

1 reproduce

2 search issues

3 open bug report

4 include repro repo

Best process.

---

# Summary

This cookbook covered:

```txt
install failures
runtime debugging
performance diagnosis
incident response
recovery playbooks
```

Production support foundation.

---

# Next Document

Next:

```txt
29-contributor-guide.md
```

Covers:

- contribution workflow

- coding standards

- PR rules

- maintainer expectations

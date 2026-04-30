# 29. Contributor Guide

Complete contributor handbook for maintainers,
external contributors,
plugin authors,
theme contributors,
and core architects.

---

# Contents

```txt
Contribution Philosophy
Repository Workflow
Branch Strategy
Code Standards
Commit Rules
PR Rules
Review Process
Testing Requirements
Documentation Standards
Theme Contributions
Plugin Contributions
Release Workflow
Governance
```

---

# Contribution Philosophy

CaseWave contributions should optimize for:

```txt
clarity
stability
maintainability
performance
security
```

Feature volume is never more important than quality.

---

# Core Principle

Contributors should ask:

```txt
Is it stable?
Is it typed?
Is it documented?
Is it tested?
Is it maintainable?
```

If not:

not ready.

---

# Repository Model

Use trunk-based development:

```txt
main
feature/*
fix/*
release/*
```

Protected main branch.

No direct pushes.

---

# Branch Naming

Use:

```bash
feature/node-portals
fix/plugin-memory-leak
docs/api-rewrite
release/v1.2.0
```

Consistent naming required.

---

# Development Workflow

Flow:

```txt
fork
branch
implement
test
document
pull request
review
merge
```

Never skip docs/tests.

---

# Setup

Clone:

```bash
git clone ...
cd casewave
npm install
npm run build
npm run test
```

Must pass before changes.

---

# Code Standards

Must follow:

```txt
strict typing
pure interfaces
predictable APIs
minimal side effects
modular boundaries
```

---

# TypeScript Rules

Required:

```txt
strict mode
no any
no implicit any
typed exports
public api comments
```

Mandatory.

---

# Avoid

Never introduce:

```txt
hidden globals
magic numbers
implicit mutation
unsafe casts
deep coupling
```

Rejected in review.

---

# File Organization

Follow package conventions.

Example:

```txt
src/core
src/plugins
src/themes
src/utils
```

No random placement.

---

# Naming Conventions

Use:

```txt
PascalCase classes
camelCase functions
SCREAMING_CONST constants
kebab-case files
```

Consistent naming matters.

---

# Function Standards

Functions should be:

```txt
small
pure
predictable
documented
typed
```

Avoid giant functions.

---

# Public API Rules

Every public export needs:

description

parameters

returns

example

notes

required.

---

# JSDoc Example

```ts
/**
 * Adds node to graph.
 */
addNode(node)
```

All public APIs documented.

---

# Commit Convention

Use Conventional Commits.

Examples:

```bash
feat(graph): add nested groups
fix(theme): resolve token fallback
docs(api): improve examples
```

Required.

---

# Commit Types

Allowed:

```txt
feat
fix
docs
refactor
perf
test
build
chore
```

Only.

---

# Pull Request Rules

Every PR must include:

```txt
what changed
why
impact
tests
docs updates
```

No exceptions.

---

# PR Size Rule

Prefer:

small PRs.

Large PRs hard to review.

---

# PR Checklist

Before opening:

```txt
tests pass
types pass
lint passes
docs updated
examples updated
```

Must all pass.

---

# Review Standards

Review checks:

```txt
correctness
architecture
performance
api design
security
maintainability
```

Not style only.

---

# Review Expectations

Feedback is technical,
not personal.

Debate design.

Protect quality.

---

# Required Tests

Changes require:

```txt
unit tests
integration tests
regression tests
```

As applicable.

---

# Coverage Expectations

Critical code:

high coverage.

Especially:

```txt
graph engine
plugins
serialization
themes
```

---

# Regression Rule

Bug fix?

Must include regression test.

Always.

---

# Snapshot Use

Use snapshots carefully.

Behavior assertions preferred.

---

# Performance Changes

If performance-related:

include benchmark.

Example:

```txt
before
after
measurement
```

Required.

---

# Documentation Rules

Every feature requires docs.

If undocumented:

feature incomplete.

---

# Example Requirement

Public feature needs runnable example.

Always.

---

# Theme Contributions

Theme PR must include:

```txt
theme metadata
token definitions
preview
accessibility verification
```

Mandatory.

---

# Theme Naming

Names must be unique.

No duplicates.

---

# Theme Quality Checks

Validate:

```txt
contrast
fallbacks
consistency
token completeness
```

Required.

---

# Plugin Contributions

Plugins must define:

```txt
hooks used
permissions needed
config options
examples
```

Required.

---

# Plugin Safety

Plugins must never:

```txt
mutate core state unsafely
break lifecycle
block render thread
```

Rejected.

---

# Security Review

Anything touching:

```txt
eval
network
worker code
serialization
```

Needs extra review.

---

# Breaking Changes Policy

Breaking change?

Must:

```txt
document migration
version major
add upgrade notes
```

Required.

---

# Deprecation Policy

Use:

```txt
warn
document
grace period
remove later
```

Never hard-remove suddenly.

---

# Release Workflow

Release process:

```txt
freeze
test
version
changelog
publish
verify
```

Structured.

---

# Changelog Rules

All notable changes logged.

Use categorized sections:

```txt
Added
Changed
Fixed
Deprecated
Removed
```

---

# Versioning

Uses semantic versioning.

```txt
major
minor
patch
```

Strict.

---

# Governance

Major architecture decisions:

via RFC.

Not casual PR discussion.

---

# RFC Needed For

Required when changing:

```txt
public API
architecture
plugin system
theme model
serialization
```

---

# Issue Reporting

Good issues include:

```txt
reproduction
environment
expected behavior
actual behavior
```

Actionable only.

---

# Good First Issues

Tagged for new contributors:

```txt
good first issue
documentation
help wanted
```

Starter path.

---

# Maintainer Expectations

Maintainers should:

```txt
review fairly
mentor contributors
protect architecture
document decisions
```

---

# Contributor Recognition

All meaningful contributions matter:

code

docs

bugs

examples

design.

---

# Anti-Patterns

Avoid PRs that:

```txt
mix unrelated changes
reformat whole repo
change APIs casually
ship undocumented features
```

Usually rejected.

---

# Contributor Workflow Example

Example:

```bash
git checkout -b feature/layout-worker
npm test
npm run lint
git commit -m "feat(layout): add worker scheduler"
git push
```

Open PR.

---

# Full Merge Criteria

Merged only if:

```txt
approved
tests green
docs complete
architecture sound
```

All required.

---

# Contributor FAQ

## Can I submit draft PR?

Yes.

Encouraged early.

---

## Can I propose large ideas?

Use RFC.

---

## Can themes be contributed?

Yes.

With validations.

---

## Can plugin ecosystem extend externally?

Yes.

Supported.

---

# Summary

This guide defines:

```txt
workflow
quality bar
review rules
release process
governance
```

Contributor contract.

---

# Next Document

Next:

```txt
30-maintainer-operations.md
```

Covers:

- release engineering

- package publishing

- long-term maintenance

- incident ownership

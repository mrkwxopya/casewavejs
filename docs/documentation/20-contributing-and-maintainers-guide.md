# 20. Contributing And Maintainers Guide

Complete contributor and maintainer handbook.

For community growth and production governance.

---

# Contents

```txt
Contribution Philosophy
Project Governance
Repository Standards
Development Workflow
Branch Strategy
Commit Conventions
Pull Requests
Review Process
Release Management
Maintainer Responsibilities
Security Process
Community Standards
```

---

# Overview

A package grows through process.

Not just code.

This guide defines:

```txt
how to contribute
how to review
how to release
how to maintain quality
```

Single source of truth.

---

# Contribution Philosophy

Principles:

- predictable

- respectful

- reviewable

- reproducible

- minimal surprise

---

Goals:

```txt
safe collaboration
high quality changes
sustainable maintenance
```

---

# Contributor Types

Roles:

```txt
users
contributors
reviewers
maintainers
core maintainers
```

Different responsibilities.

---

# First Contribution Path

Recommended order:

```txt
docs fixes
examples
bug fixes
features
plugins
```

Progressive onboarding.

---

# Repository Structure

Contributors should understand:

```txt
packages/
examples/
docs/
tests/
scripts/
```

Before changing code.

---

# Local Setup

Clone:

```bash
git clone ...
```

Install:

```bash
npm install
```

Run:

```bash
npm run dev
```

Verify:

```bash
npm test
```

Must pass.

---

# Development Rules

All changes should be:

- typed

- tested

- documented

Required.

---

# Branch Strategy

Recommended:

```txt
main
develop
feature/*
fix/*
release/*
```

Clear model.

---

# Branch Naming

Examples:

```txt
feature/node-groups
fix/edge-validation
docs/plugin-api
```

Readable names.

---

# Commit Convention

Use conventional commits.

Examples:

```txt
feat:
fix:
docs:
refactor:
test:
chore:
```

---

Examples:

```txt
feat(graph): add group nesting

fix(renderer): prevent edge overlap

docs(api): expand node options
```

Consistent history.

---

# Commit Rules

Good commits:

small

focused

atomic

reviewable

---

Avoid:

Mixed unrelated changes.

Huge commits.

Formatting-only noise mixed with logic.

---

# Pull Request Rules

Every PR should include:

- problem

- solution

- tests

- docs impact

---

PR template sections:

```txt
Summary
Motivation
Changes
Testing
Breaking Changes
```

Recommended.

---

# Pull Request Size

Prefer:

small PRs.

Large PRs harder review.

---

# Required Before PR

Run:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

All clean.

---

# Review Expectations

Review checks:

```txt
correctness
api impact
performance
types
docs
tests
```

Not just style.

---

# Reviewer Checklist

Check:

✓ architecture fit

✓ backward compatibility

✓ tests adequate

✓ docs updated

---

# Review Standards

Feedback should be:

specific

actionable

respectful

technical

---

Good review:

Explain why.

Not only what.

---

# Approval Rules

Recommended:

1 approval for fixes

2 approvals for major changes

---

# Design Change Process

Large changes should start with proposal.

Use RFC.

---

RFC should include:

```txt
problem
proposal
alternatives
migration
```

Excellent practice.

---

# Feature Contribution Rules

New features require:

tests

docs

examples

Required.

---

# Bug Fix Policy

Every bug fix must include:

regression test.

Mandatory.

---

# Documentation Contributions

Docs are code.

Treat equally.

Review them.

Version them.

---

# Example Contributions

Examples should be:

minimal

working

documented

copy-paste friendly

---

# Type Safety Rules

No weakening types casually.

Avoid:

```txt
any abuse
unsafe casts
hidden escapes
```

Important.

---

# Backward Compatibility Policy

Respect semver.

Rules:

```txt
patch = fixes
minor = additive
major = breaking
```

Strict.

---

# Breaking Changes

Require:

migration notes

upgrade guide

changelog entry

Mandatory.

---

# Versioning Process

Recommended release flow:

```txt
changes
review
version bump
publish
announce
```

---

# Release Checklist

Before release:

✓ tests green

✓ docs updated

✓ changelog ready

✓ examples verified

✓ package builds

---

# Changelog Policy

Document:

features

fixes

breaking changes

deprecations

Always.

---

# Deprecation Policy

Do not remove suddenly.

Flow:

```txt
deprecate
warn
document
remove in major
```

Safe process.

---

# Maintainer Responsibilities

Maintainers own:

quality

direction

stability

community health

---

# Maintainer Duties

Includes:

```txt
triage issues
review PRs
plan releases
maintain docs
respond to security reports
```

---

# Issue Triage

Label issues.

Suggested labels:

```txt
bug
feature
docs
good first issue
help wanted
security
```

Useful.

---

# Good First Issues

Should be:

small

well-scoped

mentored

Great onboarding.

---

# Security Reports

Never open public exploit issue first.

Use security channel.

Private disclosure.

Responsible handling.

---

# Security Fix Process

Flow:

```txt
report
reproduce
patch
release
disclose
```

Standard.

---

# Maintainer Response Targets

Suggested:

```txt
issues <7 days
PR review <7 days
security faster
```

Healthy expectations.

---

# Governance Model

Recommended:

```txt
maintainer consensus
transparent decisions
documented policies
```

Important.

---

# Decision Making

Prefer:

discussion

consensus

written rationale

Avoid arbitrary changes.

---

# Plugin Ecosystem Governance

For plugins require:

compatibility rules

api contracts

version expectations

Important.

---

# Community Conduct

Use code of conduct.

Required for healthy project.

---

Principles:

respect

professionalism

inclusion

constructive collaboration

---

# Conflict Resolution

Escalation path should exist.

Document it.

---

# Contributor Recognition

Recognize contributors.

Examples:

```txt
contributors list
release notes thanks
hall of fame
```

Healthy culture.

---

# Automation Recommendations

Automate:

```txt
lint
tests
release notes
versioning
```

Reduce manual mistakes.

---

# CI Requirements For Contributors

PR should pass:

```txt
lint
typecheck
tests
build
```

No exceptions.

---

# Maintainer Anti Patterns

Avoid:

unreviewed merges

silent breaking changes

undocumented decisions

Very important.

---

# Long Term Maintenance

Think:

```txt
stability
upgrade paths
api durability
```

Not short-term only.

---

# Support Boundaries

Clarify:

what project supports

what plugins own

what is experimental

Useful.

---

# Issue Templates

Use templates for:

bugs

features

security

Improves triage.

---

# PR Template Example Sections

```txt
Problem
Solution
Tests
Docs
Checklist
```

Recommended.

---

# Ownership Model

Define code ownership.

Optional but strong.

Example:

```txt
rendering owners
core owners
docs owners
```

Scales well.

---

# Maintainer Checklist For Merges

Before merge:

✓ design approved

✓ tests pass

✓ docs updated

✓ changelog considered

---

# Summary

This guide covered:

```txt
contributions
reviews
governance
releases
maintenance
```

Complete contributor handbook.

---

# Next Document

Next:

```txt
21-security-and-threat-model.md
```

Covers:

- security architecture

- threat modeling

- trusted boundaries

- hardening guidance




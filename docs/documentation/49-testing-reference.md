# 49. Testing Reference

Production systems require testing.

Graphs need confidence.

---

# Contents

```txt
Testing Strategy
Unit Tests
Integration Tests
Visual Tests
Interaction Tests
Performance Tests
Coverage
```

---

# Test Layers

Recommended:

```txt
unit
integration
visual
e2e
performance
```

---

# Unit Testing

Test:

```txt
utilities
layouts
commands
algorithms
```

---

# Example

```ts
expect(
 shortestPath(...)
)
```

---

# Integration Tests

Test graph behaviors.

```txt
create nodes
connect edges
run layout
```

---

# Interaction Tests

Validate:

```txt
drag
select
zoom
commands
```

---

# Visual Regression

Very important.

Catch rendering changes.

---

# Snapshot Tests

Possible.

Use carefully.

---

# End-to-End

Use:

```txt
playwright
cypress
```

Possible stacks.

---

# Performance Tests

Measure:

```txt
render speed
layout speed
memory
```

---

# Fixture Data

Use graph fixtures.

Important.

---

# Mocking

Mock events
network
plugins

---

# Coverage Targets

Aim:

```txt
critical paths high coverage
```

---

# Common Cases To Test

```txt
imports
undo
serialization
plugins
```

---

# Failure Testing

Test bad data too.

Critical.

---

# CI Integration

Run tests automatically.

Required.

---

# Common Mistakes

Avoid:

```txt
only unit tests
no visual regression
```

---

# FAQ

Should layouts be tested?

Yes.

Should themes be tested?

Yes.

---

# Related Types

```ts
TestFixtures
GraphMocks
Benchmarks
```

---

# Source

```txt
tests/
```

---

# Summary

Testing provides:

```txt
confidence
stability
production safety
```

---

# Next

50-accessibility-reference.md




# 71. Testing Strategy

Architecture without tests

rots.

Eventually.

---

# Contents

```txt
Testing Philosophy
Unit Tests
Integration Tests
System Tests
Stress Tests
Quality Gates
```

---

# Testing Pyramid

Recommended:

```txt
unit
integration
system
```

Balanced.

---

# Unit Tests

Test:

```txt
graph operations
commands
schemas
utilities
```

---

# Integration Tests

Test interactions:

```txt
events + commands
plugins + core
serialization + loading
```

---

# System Tests

End-to-end workflows:

```txt
large graph editing
imports
plugin lifecycle
undo redo
```

---

# Property Tests

Very valuable.

Use for:

```txt
graph invariants
schema correctness
command reversibility
```

---

# Stress Tests

Required.

Examples:

```txt
10k+ nodes
large imports
plugin load storms
```

---

# Regression Suites

Protect against:

```txt
old bug reintroduction
```

---

# Quality Gates

CI should enforce:

```txt
tests passing
coverage thresholds
performance checks
```

---

# Test Fixtures

Maintain fixtures for:

```txt
sample graphs
broken graphs
migration samples
```

---

# Anti Patterns

Avoid:

```txt
UI-only testing
happy-path only tests
```

---

# FAQ

Test plugins too?

Absolutely.

Need stress tests early?

Yes.

---

# Source

```txt
tests/
docs/testing/
```

---

# Summary

Testing strategy provides:

```txt
confidence
quality
change safety
```

---

# Next

72-security-model.md




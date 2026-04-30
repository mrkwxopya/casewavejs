# 53. Error Handling Reference

Production systems must fail gracefully.

Errors should be contained.

Recoverable when possible.

---

# Contents

```txt
Error Philosophy
Error Boundaries
Recovery
Validation Errors
Runtime Errors
Patterns
```

---

# Core Principle

Prefer:

```txt
fail safe
recover when possible
never silent corruption
```

---

# Error Boundary

Contain renderer crashes.

Important.

---

# Validation Errors

Examples:

```txt
bad graph data
invalid edges
schema mismatch
```

---

# Runtime Errors

Possible:

```txt
plugin failures
render failures
layout failures
```

---

# Error Hooks

Possible:

```ts
onError(...)
```

---

# Recovery Strategies

Examples:

```txt
fallback layout
retry import
rollback transaction
```

---

# User Feedback

Errors should surface clearly.

No cryptic failures.

---

# Structured Errors

Possible model:

```ts
{
 code
 message
 severity
}
```

---

# Error Codes

Recommended.

---

# Logging Errors

Record enough context.

---

# Safe Defaults

Fallback behavior useful.

---

# Undo Recovery

Sometimes recover via history.

---

# Async Error Handling

Handle promises carefully.

---

# Plugin Isolation

One plugin should not break whole system.

Important.

---

# Common Mistakes

Avoid:

```txt
swallowing errors
generic unknown failures
```

---

# FAQ

Should plugins be isolated?

Yes.

Can graph recover from bad imports?

Often yes.

---

# Related Types

```ts
CaseWaveError
ErrorBoundary
RecoveryStrategy
```

---

# Source

```txt
docs/errors
```

---

# Summary

Error handling provides:

```txt
resilience
recoverability
stability
```

---

# Next

54-devtools-reference.md

# 69. Debugging Playbook

Every serious system needs a playbook.

Not scattered troubleshooting.

A playbook.

---

# Contents

```txt
Debug Philosophy
Diagnostics
Common Failures
Tracing
Recovery
Incident Workflows
```

---

# Debug Principles

Debugging should be:

```txt
repeatable
documented
fast
```

---

# Diagnostic Layers

Debug by layer:

```txt
data
events
rendering
plugins
runtime
```

---

# Core Debug Tools

Recommend:

```txt
debug panel
event trace
state inspector
render diagnostics
```

---

# Typical Failure Classes

```txt
layout failures
selection bugs
plugin crashes
serialization issues
performance regressions
```

---

# Repro Template

Document:

```txt
steps
expected behavior
actual behavior
environment
```

---

# Tracing

Capture:

```txt
commands
events
mutations
render passes
```

---

# Recovery Procedures

Document how to recover:

```txt
rollback
repair graph
disable plugins
restore snapshots
```

---

# Incident Severity

Useful levels:

```txt
minor
major
critical
```

---

# Debug Commands

Optional examples:

```txt
debug overlays
trace mode
integrity checks
```

---

# Common Playbooks

Include dedicated playbooks for:

```txt
broken graph loads
performance drops
plugin conflicts
```

---

# Anti Patterns

Avoid:

```txt
tribal debugging knowledge
undocumented fixes
```

---

# FAQ

Should debugging docs be public?

Yes.

Include internal tools?

Document safe subsets.

---

# Source

```txt
docs/debugging/
```

---

# Summary

Debug playbook gives:

```txt
operability
faster recovery
support quality
```

---

# Next

70-observability-monitoring.md

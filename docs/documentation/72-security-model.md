# 72. Security Model

Security is architecture.

Not a later checklist.

---

# Contents

```txt
Threat Model
Trust Boundaries
Plugin Security
Data Safety
Permissions
Hardening
```

---

# Security Principles

Use:

```txt
least privilege
safe defaults
explicit trust boundaries
```

---

# Threat Model

Document threats:

```txt
malicious plugins
unsafe imports
data corruption
supply chain risk
```

---

# Trust Boundaries

Identify boundaries:

```txt
user input
plugin code
imported files
network integrations
```

---

# Permission Model

Examples:

```txt
read graph
write graph
network access
filesystem access
```

---

# Plugin Security

Plugins should be:

```txt
sandboxed where possible
permissioned
isolated
```

---

# Import Safety

Treat imported data as untrusted.

Always validate.

---

# Serialization Security

Protect against:

```txt
payload abuse
resource exhaustion
malformed graphs
```

---

# Secrets Handling

Never hardcode secrets.

Document secure patterns.

---

# Supply Chain Hardening

Document:

```txt
dependency audits
signature verification
version pinning
```

---

# Security Reviews

Run reviews for:

```txt
plugins
APIs
import pipelines
```

---

# Anti Patterns

Avoid:

```txt
implicit trust
unsafe eval
unbounded plugin powers
```

---

# FAQ

Need security docs for libraries?

Yes.

Plugins need permissions?

Strongly yes.

---

# Source

```txt
docs/security/
```

---

# Summary

Security model provides:

```txt
safety
trust
hardening
```

---

# Next

73-accessibility-guide.md

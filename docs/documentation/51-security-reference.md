# 51. Security Reference

Security matters even in graph systems.

Data.

Plugins.

Imports.

Extensions.

Need safeguards.

---

# Contents

```txt
Threat Areas
Input Safety
Plugin Security
Serialization Safety
Supply Chain
Patterns
```

---

# Core Areas

Protect:

```txt
imports
plugins
user content
extensions
```

---

# Input Validation

Always validate imported data.

Never trust input.

---

# Sanitize Content

Especially HTML nodes.

Critical.

---

# HTML Safety

Prevent injection.

Sanitize rich content.

---

# Plugin Security

Third-party plugins are code.

Treat carefully.

---

# Principle

```txt
least privilege
```

---

# Permissions

Plugins may require scoped capabilities.

Recommended.

---

# Dependency Security

Audit dependencies.

Important.

---

# Supply Chain

Watch:

```txt
malicious packages
version compromise
```

---

# Serialization Safety

Validate before loading.

---

# Export Safety

Protect sensitive graph data.

---

# Access Control

Possible enterprise topic.

Permissions.

Roles.

---

# Secrets

Never store secrets in graph payloads.

---

# Audit Logging

Useful for enterprise cases.

---

# Common Risks

```txt
xss
unsafe plugins
bad imports
```

---

# Common Mistakes

Avoid:

```txt
trusting imported html
unvetted plugins
```

---

# FAQ

Should plugins be sandboxed?

Ideally yes.

Should imports be validated?

Always.

---

# Related Types

```ts
SecurityConfig
Sanitizer
PermissionScope
```

---

# Source

```txt
docs/security
```

---

# Summary

Security provides:

```txt
trust
safety
hardening
```

---

# Next

52-debugging-reference.md




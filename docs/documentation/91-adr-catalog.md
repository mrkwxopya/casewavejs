# 91. Architecture Decision Records Catalog

Architecture decisions should not live in heads.

They need records.

Permanent ones.

---

# Contents

```txt
ADR Purpose
ADR Template
Decision Lifecycle
Catalog Structure
Examples
Governance
```

---

# What is an ADR

ADR:

```txt
Architecture Decision Record
```

Captures:

```txt
decision
context
alternatives
consequences
```

---

# ADR Template

Standard template:

```md
Title
Status
Date
Context
Decision
Alternatives Considered
Consequences
```

---

# Status Values

Examples:

```txt
proposed
accepted
deprecated
superseded
```

---

# Catalog Structure

```txt
docs/adr/
0001-rendering-model.md
0002-plugin-security.md
0003-theme-token-model.md
```

---

# Decisions To Record

Examples:

```txt
why hybrid rendering
why command architecture
why plugin permissions
why semantic tokens
```

---

# Cross-Link ADRs

Each major architecture doc should link ADRs.

Critical.

---

# Example ADR Topics

```txt
renderer choice
event bus design
schema versioning
plugin sandbox model
```

---

# ADR Review Process

Define:

```txt
who proposes
who approves
who supersedes
```

---

# Anti Patterns

Avoid:

```txt
undocumented major decisions
tribal architecture knowledge
```

---

# FAQ

Need ADRs for library projects?

Yes.

Useful publicly?

Very.

---

# Summary

ADR catalog gives:

```txt
architecture memory
rationale
governance
```

---

# Next

92-rfc-handbook.md

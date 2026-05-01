# 21. Security And Threat Model

Production-grade security handbook for CaseWave.

Security assumptions, threat modeling, hardening, trust boundaries.

---

# Contents

```txt
Security Philosophy
Threat Model
Attack Surfaces
Trust Boundaries
Input Validation
Supply Chain Security
Plugin Security
Sandboxing
Secrets Handling
Secure Development
Incident Response
Security Checklist
```

---

# Security Philosophy

Security is not a feature.

It is architecture.

Principles:

- secure by default  
- least privilege  
- defense in depth  
- fail safely  
- explicit trust boundaries  

---

# Threat Model Goals

Protect against:

```txt
malicious inputs
supply-chain attacks
unsafe plugins
prototype pollution
xss vectors
injection attacks
resource exhaustion
```

---

# Assets To Protect

Critical assets:

```txt
application integrity
user data
plugin boundaries
graph data
configuration state
supply chain trust
```

---

# Trust Boundaries

Primary boundaries:

```txt
user input
plugin code
serialization layer
renderer boundary
filesystem access
network boundaries
```

Everything crossing a boundary must be treated untrusted.

---

# Threat Categories

Model using categories:

```txt
Spoofing
Tampering
Repudiation
Information Disclosure
Denial of Service
Privilege Escalation
```

STRIDE-oriented thinking.

---

# Attack Surface

Primary attack surfaces:

- package installation
- runtime APIs
- plugin system
- graph imports
- serialized JSON
- theme tokens
- rendering pipeline

---

# Input Threats

Untrusted:

```txt
node payloads
edge metadata
html labels
plugin hooks
serialized graphs
theme configs
```

Never trust input.

---

# Input Validation Rules

Always validate:

shape

types

ranges

allowed enums

constraints

---

Example:

Reject:

```json
{
 "__proto__": {
   "polluted": true
 }
}
```

Prototype pollution defense.

---

# Schema Validation

Use schemas.

Examples:

```txt
zod
valibot
json schema
```

Validate at boundaries.

Not internally only.

---

# Sanitize HTML

If HTML allowed:

sanitize.

Always.

Never raw inject user HTML.

Protect against XSS.

---

# Unsafe HTML Examples

Reject or sanitize:

```html
<script>
onerror=
javascript:
iframe injection
```

Mandatory.

---

# Serialization Security

When importing graphs:

validate before parse/use.

Check:

- structure
- recursion depth
- object count
- allowed fields

---

# Deserialization Risks

Watch for:

```txt
deep recursion bombs
memory bombs
payload inflation
malformed objects
```

---

# Resource Exhaustion

Protect against:

huge graphs

pathological layouts

massive edges

recursive nesting bombs

---

Use limits.

---

# Recommended Limits

Examples:

```txt
max nodes
max edges
max nesting depth
max payload size
```

Configurable.

---

# Plugin Security

Plugins are high-risk.

Rules:

sandbox plugins.

Limit authority.

---

Plugin permissions model:

```txt
read-only plugin
render plugin
transform plugin
trusted internal plugin
```

Capability-based.

---

# Plugin Isolation

Prefer:

restricted APIs

message passing

sandbox contexts

Avoid unrestricted execution.

---

# Dangerous Plugin Patterns

Avoid:

```txt
arbitrary eval
filesystem writes
hidden network calls
global mutation
```

High risk.

---

# Supply Chain Security

Dependencies are attack surface.

Audit continuously.

---

Controls:

```txt
lockfiles
dependency review
npm audit
package pinning
signature verification
```

---

# Dependency Policy

Prefer:

minimal dependencies.

Fewer attack paths.

---

# Third Party Vetting

Review:

maintenance

download trust

license

security history

before adding package.

---

# Package Publishing Security

Protect publish pipeline.

Use:

```txt
2FA
trusted publish workflow
release verification
```

Mandatory.

---

# Secrets Handling

Never commit:

tokens

private keys

credentials

---

Use:

environment variables.

Secret managers.

---

# Sensitive Data Logging

Never log:

```txt
tokens
secrets
private graph data
```

Redact sensitive fields.

---

# Secure Defaults

Default config should favor safety.

Example:

unsafe HTML disabled by default.

---

# Principle Of Least Privilege

Every system gets minimum access required.

Plugins too.

Especially plugins.

---

# Secure API Design

APIs should:

validate early

reject unsafe defaults

minimize dangerous operations

---

# Dangerous APIs

Clearly mark dangerous APIs:

```ts
unsafeRenderHTML()
unsafeDeserialize()
```

Signal risk explicitly.

---

# Prototype Pollution Defenses

Use:

```txt
Object.create(null)
safe merges
deny magic keys
```

Protect merges.

---

Reject:

```txt
__proto__
constructor
prototype
```

---

# Injection Defenses

Guard against:

code injection

template injection

style injection

selector injection

---

# Rendering Security

Renderer should treat data as data.

Not executable behavior.

Important distinction.

---

# DOS Protections

Use:

timeouts

work limits

circuit breakers

abort signals

---

Protect heavy algorithms.

---

# Fuzz Testing

Use fuzzing against:

parser

importers

serializers

layout logic

Excellent hardening.

---

# Security Testing

Add tests for:

```txt
malformed payloads
xss attempts
boundary violations
prototype pollution
resource abuse
```

Required.

---

# Secure Coding Guidelines

Avoid:

eval

Function constructor

unsafe reflection

hidden mutation

---

Prefer explicit code.

---

# Error Handling Security

Errors should not leak:

stack internals

private paths

sensitive implementation details

---

Fail safely.

---

# Version Vulnerability Management

Monitor CVEs.

Respond quickly.

Track vulnerable dependencies.

---

# Security Headers (Docs/Site)

Docs site should consider:

```txt
CSP
X-Frame-Options
Referrer-Policy
```

Hardening layer.

---

# Content Security Policy

Strongly recommended if docs/examples run dynamic content.

---

# Incident Response

Define process:

```txt
report
triage
contain
patch
release
postmortem
```

Document it.

---

# Vulnerability Disclosure Policy

Provide:

SECURITY.md

with reporting channel.

Standard.

---

# Security Severity Levels

Suggested:

```txt
critical
high
medium
low
```

Use response targets.

---

# Security Review Checklist

Before release:

✓ input validated

✓ dependencies audited

✓ dangerous APIs reviewed

✓ plugins constrained

✓ limits enforced

---

# Threat Review For New Features

Every major feature should ask:

```txt
new trust boundary?
new attack surface?
new permissions?
abuse potential?
```

Mandatory thinking.

---

# Secure Plugin Manifest Example

Example permissions:

```json
{
 "permissions": [
   "readGraph"
 ]
}
```

Capability-limited.

---

# Unsafe Feature Flags

Experimental dangerous features:

off by default.

Clearly marked.

---

# Security Documentation Users Need

Document:

safe patterns

unsafe patterns

hardening recommendations

Don't hide security knowledge.

---

# Maintainer Security Duties

Maintainers should:

review security implications in PRs.

Not only functionality.

---

# Threat Modeling Questions

Ask:

What can attacker control?

What can attacker influence?

What breaks first?

What escalates?

Powerful exercise.

---

# Summary

This document covered:

```txt
threat modeling
input trust
plugin security
supply chain security
hardening strategy
incident response
```

Security foundation complete.

---

# Next Document

Next:

```txt
22-performance-and-scaling.md
```

Covers:

- rendering performance

- scaling limits

- profiling

- optimization strategies




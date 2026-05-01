# 75. Release Process

Releases are engineering.

Not "npm publish".

---

# Contents

```txt
Release Philosophy
Versioning
Release Workflow
Checklists
Changelogs
Post Release
```

---

# Release Principles

Releases must be:

```txt
repeatable
documented
safe
```

---

# Release Stages

Typical:

```txt
plan
stabilize
test
package
publish
verify
announce
```

---

# Pre Release Checklist

Verify:

```txt
tests green
docs updated
migrations ready
version bumped
```

---

# Versioning

Use:

```txt
SemVer
```

---

# Changelogs

Every release needs:

```txt
features
fixes
breaking changes
migration notes
```

---

# Release Types

```txt
patch
minor
major
pre-release
```

---

# Release Artifacts

Possible outputs:

```txt
npm packages
docs build
release notes
migration docs
```

---

# Publish Verification

After publish:

```txt
install test
package integrity check
docs links verify
```

---

# Rollback Strategy

Document rollback path.

Always.

---

# Automation

Use CI for:

```txt
release pipelines
tagging
publishing
```

---

# Anti Patterns

Avoid:

```txt
manual undocumented releases
no rollback plan
silent breaking changes
```

---

# FAQ

Need release docs for small libs?

Yes.

Automated releases recommended?

Usually.

---

# Files

```txt
RELEASING.md
CHANGELOG.md
.github/workflows/
```

---

# Summary

Release process gives:

```txt
reliability
trust
professional delivery
```

---

# Next

76-roadmap-governance.md




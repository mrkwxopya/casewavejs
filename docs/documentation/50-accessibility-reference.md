# 50. Accessibility Reference

Accessibility is not optional.

It is system architecture.

CaseWave should work for everyone.

---

# Contents

```txt
Accessibility Principles
Keyboard Support
Focus Management
Screen Readers
Contrast
Reduced Motion
Patterns
Compliance
```

---

# Core Goals

Support:

```txt
keyboard access
screen readers
contrast
motion safety
```

---

# Keyboard Navigation

Required.

Support:

```txt
tab
arrow keys
shortcuts
```

---

# Focus States

Visible focus mandatory.

Never hide focus.

---

# Focus Example

```ts
focusRing:true
```

---

# Keyboard Graph Control

Possible:

```txt
navigate nodes
select nodes
open panels
```

---

# Screen Reader Support

Expose semantics.

Important.

---

# ARIA Support

Possible attributes:

```txt
aria-label
aria-describedby
```

---

# Contrast

Meet accessible contrast.

Critical.

---

# High Contrast Themes

Recommended.

---

# Reduced Motion

Support:

```ts
reducedMotion:true
```

---

# Motion Safety

Disable excessive animation.

---

# Hit Target Size

Interactive targets large enough.

---

# Labels

Do not rely on color only.

---

# Accessible Themes

Themes should consider:

```txt
contrast
states
focus visibility
```

---

# Testing

Use audits.

Keyboard test manually.

---

# Compliance

Aim toward:

```txt
WCAG principles
```

---

# FAQ

Can graph be keyboard navigable?

Yes.

Can themes support accessibility?

Yes.

---

# Related Types

```ts
AccessibilityConfig
FocusState
MotionPrefs
```

---

# Source

```txt
docs/accessibility
```

---

# Summary

Accessibility provides:

```txt
inclusion
usability
compliance
```

---

# Next

51-security-reference.md




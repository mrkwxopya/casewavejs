# 56. Framework Integrations Reference

CaseWave is framework-flexible.

React first.

But not React only.

---

# Contents

```txt
Framework Support
Vue
Svelte
Next.js
Vanilla
Web Components
SSR Notes
Patterns
```

---

# Supported Integrations

```txt
React
Next.js
Vue
Svelte
Vanilla JS
Web Components
```

---

# Vue

Possible package:

```bash
npm install @casewavejs/vue
```

---

# Vue Usage

```vue
<CaseWaveCanvas />
```

---

# Svelte

Possible:

```svelte
<CaseWaveCanvas />
```

---

# Next.js

Works well.

Watch SSR boundaries.

---

# Client Boundary

```ts
"use client"
```

Often required.

---

# Vanilla Usage

```ts
createGraph(...)
mount(...)
```

---

# Web Components

Possible:

```html
<casewave-graph>
```

---

# Framework-agnostic Core

Important concept.

Core independent.

Adapters optional.

---

# State Integration

Can map into framework stores.

---

# SSR Notes

Avoid server-side DOM access.

Critical.

---

# Common Mistakes

Avoid:

```txt
mixing server rendering with browser graph initialization
```

---

# FAQ

React only?

No.

SSR possible?

Yes with care.

---

# Related Types

```ts
FrameworkAdapter
MountOptions
```

---

# Source

```txt
packages/adapters
```

---

# Summary

Framework integrations provide:

```txt
portability
ecosystem reach
flexibility
```

---

# Next

57-data-modeling-reference.md





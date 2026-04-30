# 40. Animation System Reference

Animation adds motion language.

Feedback.

Transitions.

Attention guidance.

State communication.

---

# Contents

```txt
Animation Concepts
AnimationConfig
Motion Tokens
Node Animations
Edge Animations
Viewport Motion
Sequencing
Performance
Hooks
Patterns
```

---

# Core Type

```ts
AnimationConfig
```

---

# Interface

```ts
interface AnimationConfig{
 enabled?
 duration?
 easing?
 reducedMotion?
 presets?
}
```

---

# Enable

```ts
animations:true
```

---

# Duration

```ts
duration:300
```

Milliseconds.

---

# Easings

```txt
linear
ease
easeIn
easeOut
spring
```

---

Example

```ts
easing:"spring"
```

---

# Animation Presets

```txt
fade
pulse
slide
scale
highlight
```

---

# Node Enter

```ts
animateIn:"fade"
```

---

# Node Update

```ts
animateMove:true
```

---

# Edge Reveal

```ts
edgeAnimation:"draw"
```

---

# Attention Pulse

Useful for clues.

```ts
node.pulse()
```

---

# Camera Motion

```ts
graph.flyTo(nodeId)
```

Smooth focus.

---

# Sequencing

```ts
timeline(...)
```

Chain motion.

---

# Example Sequence

```ts
highlight()
zoom()
reveal()
```

---

# Reduced Motion

Accessibility.

```ts
reducedMotion:true
```

Critical.

---

# Motion Tokens

Themes may define:

```txt
fast
normal
slow
```

---

# Physics Motion

Supports:

```txt
springs
inertia
damping
```

---

# Event Hooks

```txt
animation:start
animation:end
```

---

# Performance

Prefer:

```txt
transform
opacity
```

Avoid layout-heavy animation.

---

# Common Mistakes

Avoid:

```txt
over-animation
slow transitions
motion overload
```

---

# FAQ

Can motion be disabled?

Yes.

Can themes affect motion?

Yes.

---

# Related Types

```ts
AnimationConfig
MotionPreset
Timeline
```

---

# Source

```txt
packages/core/src/animation
```

---

# Summary

Animation provides:

```txt
feedback
motion language
focus guidance
```

---

# Next

41-plugin-system-reference.md

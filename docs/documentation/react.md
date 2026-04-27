# React Renderer

Package:

```bash
npm install @casewave/react
```

`@casewave/react` provides the visual editor renderer.

## Provider

```tsx
import { CaseWaveProvider } from "@casewave/react";

<CaseWaveProvider graph={graph}>
  <App />
</CaseWaveProvider>
```

## Canvas

```tsx
import { CaseWaveCanvas } from "@casewave/react";

<CaseWaveCanvas
  width="100vw"
  height="100vh"
  grid
  snapToGrid
  minimap
/>
```

## Features

```txt
Pan
Zoom
Node dragging
Edge rendering
Selection
Marquee selection
Drag-to-connect
Context menu
Minimap
Grid
Group rendering
Custom node renderers
Custom edge renderers
```

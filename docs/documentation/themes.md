# Themes

Package:

```bash
npm install @casewave/themes
```

## Use Theme

```tsx
import { caseWaveEvidenceTheme } from "@casewave/themes";

<CaseWaveCanvas theme={caseWaveEvidenceTheme} />
```

## Custom Theme Override

```tsx
<CaseWaveCanvas
  theme={{
    canvasBackground: "#020617",
    accent: "#38bdf8",
    nodeBackground: "#0f172a",
    nodeText: "#ffffff"
  }}
/>
```

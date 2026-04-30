# CaseWave Themes

`@casewavejs/themes` includes 51 ready-to-use themes.

## Install

```bash
npm install @casewavejs/themes
````

## Basic Usage

```tsx
import { caseWaveDarkTheme } from "@casewavejs/themes";

<CaseWaveCanvas theme={caseWaveDarkTheme} />
```

## Registry Usage

```tsx
import {
  caseWaveThemes,
  getCaseWaveTheme,
  caseWaveThemeNames
} from "@casewavejs/themes";

const theme = getCaseWaveTheme("dark");

console.log(caseWaveThemeNames);
console.log(caseWaveThemes.dark);
```

## Categories

```txt
base
visual
semantic
behavior
premium
edge
background
```

## Base Themes

```txt
Dark
Light
Minimal
```

## Visual Themes

```txt
Midnight
Cyberpunk
Blueprint
Terminal
Noir
Evidence Board
Red String Board
Glass
Neo Brutalist
Windows 95
```

## Semantic Themes

```txt
Investigation
Threat Intel
Dependency Graph
Forensics
Mind Map
Crime Network
```

## Behavior Themes

```txt
Compact
Presentation
Analyst
Large Graph
Accessibility
Focus
```

## Premium Themes

```txt
Police Desk
Paper Archive
CaseBoard Classic
Murder Wall
Cold Case
Blue Evidence
Interpol
SOC Analyst
Dark Matter
Matrix
War Room
Incident Response
Conspiracy Board
```

## Edge Themes

```txt
Neon Edges
Sketch Edges
Evidence Thread
Wireframe Edges
Circuit Edges
Hand Drawn Edges
```

## Background Themes

```txt
Corkboard
Blueprint Paper
Graph Paper
Police Dossier Paper
Dark Grid Matrix
Topographic Map
Evidence Folder Texture
```

## Get Themes By Category

```ts
import { getCaseWaveThemesByCategory } from "@casewavejs/themes";

const premiumThemes = getCaseWaveThemesByCategory("premium");
const edgeThemes = getCaseWaveThemesByCategory("edge");
```

## Get Theme Metadata

```ts
import { getCaseWaveThemeMeta } from "@casewavejs/themes";

const meta = getCaseWaveThemeMeta("murder-wall");

console.log(meta?.label);
console.log(meta?.description);
```




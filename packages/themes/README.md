# @casewavejs/themes

51 ready-to-use theme presets and registry utilities for CaseWave.

## Install

```bash
npm install @casewavejs/themes
````

## Basic Usage

```tsx
import { CaseWaveCanvas } from "@casewavejs/react";
import { caseWaveDarkTheme } from "@casewavejs/themes";

<CaseWaveCanvas theme={caseWaveDarkTheme} />;
```

## Registry Usage

```ts
import {
  caseWaveThemeNames,
  caseWaveThemes,
  getCaseWaveTheme
} from "@casewavejs/themes";

const theme = getCaseWaveTheme("murder-wall");

console.log(caseWaveThemeNames);
console.log(caseWaveThemes.dark);
```

## Metadata Usage

```ts
import {
  caseWaveThemeMeta,
  getCaseWaveThemeMeta,
  getCaseWaveThemesByCategory
} from "@casewavejs/themes";

console.log(caseWaveThemeMeta);
console.log(getCaseWaveThemeMeta("murder-wall"));
console.log(getCaseWaveThemesByCategory("premium"));
```

## Included Themes

```txt
Dark
Light
Midnight
Cyberpunk
Blueprint
Terminal
Noir
Evidence Board
Red String Board
Minimal
Police Desk
Paper Archive
Glass
Neo Brutalist
Windows 95
Investigation
Threat Intel
Dependency Graph
Forensics
Mind Map
Crime Network
Compact
Presentation
Analyst
Large Graph
Accessibility
Focus
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
Neon Edges
Sketch Edges
Evidence Thread
Wireframe Edges
Circuit Edges
Hand Drawn Edges
Corkboard
Blueprint Paper
Graph Paper
Police Dossier Paper
Dark Grid Matrix
Topographic Map
Evidence Folder Texture
```








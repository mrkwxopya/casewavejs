# Theme Showcase

`@casewave/themes` includes 51 built-in CaseWave themes.

## Install

```bash
npm install @casewave/themes
````

## Basic Usage

```tsx
import { CaseWaveCanvas } from "@casewave/react";
import { caseWaveDarkTheme } from "@casewave/themes";

<CaseWaveCanvas theme={caseWaveDarkTheme} />;
```

## Theme Registry Usage

```tsx
import {
  caseWaveThemeNames,
  getCaseWaveTheme,
  type CaseWaveThemeName
} from "@casewave/themes";

const selectedThemeName: CaseWaveThemeName = "murder-wall";
const theme = getCaseWaveTheme(selectedThemeName);

console.log(caseWaveThemeNames);
console.log(theme);
```

## Theme Switcher Example

```tsx
import { useState } from "react";
import { CaseWaveCanvas } from "@casewave/react";
import {
  caseWaveThemeNames,
  getCaseWaveTheme,
  type CaseWaveThemeName
} from "@casewave/themes";

export function ThemeSwitcher() {
  const [themeName, setThemeName] = useState<CaseWaveThemeName>("dark");

  return (
    <>
      <select
        value={themeName}
        onChange={(event) => {
          setThemeName(event.target.value as CaseWaveThemeName);
        }}
      >
        {caseWaveThemeNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <CaseWaveCanvas
        width="100vw"
        height="100vh"
        theme={getCaseWaveTheme(themeName)}
      />
    </>
  );
}
```

## Theme Metadata Example

```tsx
import {
  caseWaveThemeMeta,
  getCaseWaveThemeMeta,
  getCaseWaveThemesByCategory
} from "@casewave/themes";

console.log(caseWaveThemeMeta);
console.log(getCaseWaveThemeMeta("murder-wall"));
console.log(getCaseWaveThemesByCategory("premium"));
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


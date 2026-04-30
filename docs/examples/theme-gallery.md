
# Theme Gallery

CaseWave ships with 51 built-in themes.

## Example Theme Switcher

```tsx
import { useState } from "react";
import {
  caseWaveThemeNames,
  getCaseWaveTheme,
  type CaseWaveThemeName
} from "@casewave/themes";

export function ThemeSwitcherExample() {
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

## Theme Preview Cards

```tsx
import {
  caseWaveThemeMeta,
  getCaseWaveTheme
} from "@casewave/themes";

export function ThemePreviewGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 16
      }}
    >
      {caseWaveThemeMeta.map((meta) => {
        const theme = getCaseWaveTheme(meta.name);

        return (
          <div
            key={meta.name}
            style={{
              background: theme.canvasBackground,
              color: theme.nodeText,
              border: theme.nodeBorder,
              borderRadius: 12,
              padding: 16
            }}
          >
            <strong>{meta.label}</strong>
            <p>{meta.description}</p>

            <div
              style={{
                marginTop: 12,
                padding: 12,
                background: theme.nodeBackground,
                border: theme.nodeSelectedBorder
              }}
            >
              Node Preview
            </div>
          </div>
        );
      })}
    </div>
  );
}
```


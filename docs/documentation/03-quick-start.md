# 03. Quick Start

This guide gets a new user from installation to a working themed CaseWave canvas as quickly as possible.

---

# Goal

By the end of this guide you will know how to:

- import a theme
- load a theme from registry
- render a themed canvas
- switch themes dynamically
- inspect available themes
- use theme metadata
- understand the main exported APIs

---

# Smallest Possible Working Example

```tsx
import { CaseWaveCanvas } from "@casewave/react";
import { getCaseWaveTheme } from "@casewave/themes";

export default function App() {
 return (
   <CaseWaveCanvas
      width="100vw"
      height="100vh"
      theme={getCaseWaveTheme("war-room")}
   />
 );
}
```

This does three things:

1.

Imports renderer.

```ts
CaseWaveCanvas
```

2.

Imports theme lookup function.

```ts
getCaseWaveTheme()
```

3.

Applies selected theme.

```ts
getCaseWaveTheme("war-room")
```

---

# First Theme

Load a theme:

```ts
import { getCaseWaveTheme } from "@casewave/themes";

const theme =
 getCaseWaveTheme("dark");
```

theme is a full theme object.

It contains tokens such as:

```txt
canvas colors
grid colors
node colors
edge colors
panel colors
accent colors
```

---

# Using Another Theme

Change only the name:

```ts
getCaseWaveTheme("crime-network")
```

or

```ts
getCaseWaveTheme("wiregrid")
```

or

```ts
getCaseWaveTheme("analyst-desk")
```

---

# Inspect Available Themes

```ts
import {
 caseWaveThemeNames
} from "@casewave/themes";

console.log(
 caseWaveThemeNames
);
```

Example:

```txt
war-room
crime-network
dark
wiregrid
windows-95
archive-blue
...
```

---

# Theme Count

```ts
import {
 caseWaveThemeNames
} from "@casewave/themes";

console.log(
 caseWaveThemeNames.length
);
```

Should print theme count.

---

# Theme Registry Access

Themes can also be accessed from registry.

```ts
import {
 caseWaveThemes
} from "@casewave/themes";

const theme =
 caseWaveThemes["war-room"];
```

Equivalent to:

```ts
getCaseWaveTheme("war-room")
```

---

# Dynamic Theme Switching

Simple example:

```tsx
import { useState } from "react";

import {
 getCaseWaveTheme,
 type CaseWaveThemeName
}
from "@casewave/themes";

export default function App() {

 const [
  themeName,
  setThemeName
 ]=
 useState<CaseWaveThemeName>(
   "war-room"
 );

 return (
  <>
   <select
    value={themeName}
    onChange={(e)=>
      setThemeName(
       e.target.value
       as CaseWaveThemeName
      )
    }
   >
    <option value="war-room">
      War Room
    </option>

    <option value="dark">
      Dark
    </option>
   </select>

   <CaseWaveCanvas
    theme={
      getCaseWaveTheme(
       themeName
      )
    }
   />
  </>
 );
}
```

---

# Theme Safety

Avoid raw strings from unknown input.

Use:

```ts
import {
 hasCaseWaveTheme
} from "@casewave/themes";
```

Example:

```ts
if (
 hasCaseWaveTheme(input)
) {
 const theme =
  getCaseWaveTheme(input);
}
```

This prevents invalid names.

---

# Theme Metadata

Metadata can be used to build UI selectors.

```ts
import {
 caseWaveThemeMeta
} from "@casewave/themes";

console.log(
 caseWaveThemeMeta
);
```

Example metadata:

```ts
{
 name:"war-room",
 label:"War Room",
 category:"premium",
 description:"War Room theme preset."
}
```

---

# Theme Picker From Metadata

```tsx
import {
 caseWaveThemeMeta
}
from "@casewave/themes";

function ThemePicker(){

 return (
  <div>
   {
    caseWaveThemeMeta.map(
      theme=>(
       <button
         key={theme.name}
       >
        {theme.label}
       </button>
      )
    )
   }
  </div>
 );

}
```

---

# Direct Preset Import

Instead of registry lookup:

```ts
import {
 caseWaveDarkTheme
}
from "@casewave/themes";

const theme =
 caseWaveDarkTheme;
```

Useful when fixed preset is preferred.

---

# Basic Mental Model

Use one of two patterns.

Pattern A:

```ts
getCaseWaveTheme(name)
```

Dynamic.

---

Pattern B:

```ts
caseWaveDarkTheme
```

Static.

---

# First Useful Exports

These are the first exports most users need.

---

## getCaseWaveTheme

Loads a theme by name.

```ts
getCaseWaveTheme(
 "war-room"
)
```

---

## caseWaveThemeNames

Lists available names.

```ts
caseWaveThemeNames
```

---

## caseWaveThemes

Theme registry object.

```ts
caseWaveThemes
```

---

## caseWaveThemeMeta

Theme metadata list.

```ts
caseWaveThemeMeta
```

---

## hasCaseWaveTheme

Checks name validity.

```ts
hasCaseWaveTheme(
 "war-room"
)
```

---

# Minimal Production Example

```tsx
import {
 CaseWaveCanvas
}
from "@casewave/react";

import {
 getCaseWaveTheme
}
from "@casewave/themes";

export default function App(){

 const theme =
  getCaseWaveTheme(
   "analyst-desk"
  );

 return (
  <CaseWaveCanvas
   width="100vw"
   height="100vh"
   theme={theme}
  />
 );

}
```

---

# Common Beginner Mistakes

Wrong:

```ts
getCaseWaveTheme(
 "WarRoom"
)
```

wrong key.

Correct:

```ts
getCaseWaveTheme(
 "war-room"
)
```

---

Wrong:

```ts
getCaseWaveTheme(
 "unknown-theme"
)
```

Use:

```ts
hasCaseWaveTheme(...)
```

first.

---

# Next Step

After Quick Start read:

```txt
04-package-structure.md
```

Then:

```txt
05-theme-system.md
```

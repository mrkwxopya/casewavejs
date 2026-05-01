# Canvas

`CaseWaveCanvas` is the main visual editor component.

```tsx
<CaseWaveCanvas
  width="100vw"
  height="100vh"
  background="#0f1117"
  grid
  snapToGrid
  gridSize={24}
  minimap
/>
```

## Common Props

```txt
width          number | string    Canvas width
height         number | string    Canvas height
background     string             Canvas background
grid           boolean            Shows grid
snapToGrid     boolean            Snaps node movement to grid
gridSize       number             Grid size
minimap        boolean            Shows minimap
nodeRenderers  object             Custom node renderer map
edgeRenderers  object             Custom edge renderer map
theme          object             Theme override
```

## Example

```tsx
<CaseWaveCanvas
  width="100vw"
  height="100vh"
  grid
  snapToGrid
  gridSize={32}
  minimap
/>
```






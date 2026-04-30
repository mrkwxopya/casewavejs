# Custom Node Renderer

```tsx
import type { CaseWaveNodeRendererMap } from "@casewavejs/react";

const nodeRenderers: CaseWaveNodeRendererMap = {
  person: ({ node, selected }) => (
    <div>
      <strong>{String((node.data as any)?.name ?? "Person")}</strong>
      <div>{selected ? "Selected" : "Idle"}</div>
    </div>
  )
};

<CaseWaveCanvas nodeRenderers={nodeRenderers} />
```



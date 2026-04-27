import React from "react";
import { createRoot } from "react-dom/client";
import { CaseWaveGraph } from "@casewave/core";
import {
  CaseWaveProvider,
  CaseWaveCanvas,
  type CaseWaveNodeRendererMap
} from "@casewave/react";
import { caseWaveEvidenceTheme } from "@casewave/themes";


const graph = new CaseWaveGraph({
  allowCycles: true,
  hypergraphMode: true
});

graph.addNode({
  id: "group_1",
  type: "group",
  position: { x: 80, y: 80 },
  data: {
    title: "Case Board"
  }
});

graph.addNode({
  id: "person_1",
  type: "person",
  parentId: "group_1",
  position: { x: 160, y: 160 },
  size: { width: 180, height: 96 },
  ports: [
    {
      id: "out",
      nodeId: "person_1",
      label: "Out",
      position: { x: 180, y: 48 }
    }
  ],
  data: {
    name: "Suspect A"
  }
});

graph.addNode({
  id: "evidence_1",
  type: "evidence",
  parentId: "group_1",
  position: { x: 480, y: 200 },
  size: { width: 200, height: 96 },
  ports: [
    {
      id: "in",
      nodeId: "evidence_1",
      label: "In",
      position: { x: 0, y: 48 }
    }
  ],
  data: {
    title: "Evidence File"
  }
});

graph.addEdge({
  id: "edge_1",
  type: "default",
  source: {
    kind: "node",
    nodeId: "person_1",
    portId: "out"
  },
  target: {
    kind: "node",
    nodeId: "evidence_1",
    portId: "in"
  },
  direction: "directed",
  relation: "evidence_of",
  routing: "bezier",
  confidence: 0.82
});

const nodeRenderers: CaseWaveNodeRendererMap = {
  person: ({ node }) => (
    <div>
      <strong>{String((node.data as { name?: string } | undefined)?.name ?? "Person")}</strong>
      <div style={{ fontSize: 12, opacity: 0.7 }}>Person node</div>
    </div>
  ),
  evidence: ({ node }) => (
    <div>
      <strong>{String((node.data as { title?: string } | undefined)?.title ?? "Evidence")}</strong>
      <div style={{ fontSize: 12, opacity: 0.7 }}>Evidence node</div>
    </div>
  ),
  group: ({ node }) => (
    <div>
      <strong>{String((node.data as { title?: string } | undefined)?.title ?? "Group")}</strong>
      <div style={{ fontSize: 12, opacity: 0.7 }}>Compound group</div>
    </div>
  )
};

function App() {
  return (
    <CaseWaveProvider graph={graph}>
      <CaseWaveCanvas
        width="100vw"
        height="100vh"
        theme={caseWaveEvidenceTheme}
        nodeRenderers={nodeRenderers}

        minimap
        grid
        snapToGrid


      />
    </CaseWaveProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);







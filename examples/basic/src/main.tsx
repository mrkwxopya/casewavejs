import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { CaseWaveGraph } from "@casewavejs/core";
import { CaseWaveProvider, CaseWaveCanvas } from "@casewavejs/react";
import {
  caseWaveThemeMeta,
  caseWaveThemeNames,
  getCaseWaveTheme,
  type CaseWaveThemeName
} from "@casewavejs/themes";

const graph = new CaseWaveGraph({
  allowCycles: true
});

graph.addNode({
  id: "person_1",
  type: "person",
  position: { x: 120, y: 120 },
  size: { width: 180, height: 90 },
  data: {
    name: "Suspect A"
  }
});

graph.addNode({
  id: "evidence_1",
  type: "evidence",
  position: { x: 440, y: 180 },
  size: { width: 200, height: 90 },
  data: {
    title: "Evidence File"
  }
});

graph.addNode({
  id: "location_1",
  type: "location",
  position: { x: 280, y: 360 },
  size: { width: 200, height: 90 },
  data: {
    title: "Old Warehouse"
  }
});

graph.addEdge({
  id: "edge_1",
  type: "default",
  source: { kind: "node", nodeId: "person_1" },
  target: { kind: "node", nodeId: "evidence_1" },
  direction: "directed",
  relation: "evidence_of",
  routing: "bezier"
});

graph.addEdge({
  id: "edge_2",
  type: "default",
  source: { kind: "node", nodeId: "person_1" },
  target: { kind: "node", nodeId: "location_1" },
  direction: "directed",
  relation: "visited",
  routing: "bezier"
});

function App() {
  const [themeName, setThemeName] = useState<CaseWaveThemeName>("dark");

  const selectedTheme = useMemo(() => {
    return getCaseWaveTheme(themeName);
  }, [themeName]);

  const selectedMeta = caseWaveThemeMeta.find((item) => item.name === themeName);

  return (
    <CaseWaveProvider graph={graph}>
      <div
        style={{
          position: "fixed",
          zIndex: 1000,
          top: 16,
          left: 16,
          width: 280,
          padding: 14,
          borderRadius: 12,
          background: selectedTheme.panelBackground,
          border: selectedTheme.panelBorder,
          color: selectedTheme.panelText,
          boxShadow: "0 14px 38px rgba(0,0,0,0.28)"
        }}
      >
        <strong style={{ display: "block", marginBottom: 8 }}>
          CaseWave Theme Demo
        </strong>

        <select
          value={themeName}
          onChange={(event) => {
            setThemeName(event.target.value as CaseWaveThemeName);
          }}
          style={{
            width: "100%",
            padding: 8,
            borderRadius: 8,
            marginBottom: 10
          }}
        >
          {caseWaveThemeNames.map((name) => {
            const meta = caseWaveThemeMeta.find((item) => item.name === name);

            return (
              <option key={name} value={name}>
                {meta?.label ?? name}
              </option>
            );
          })}
        </select>

        <div style={{ fontSize: 13, opacity: 0.82 }}>
          <div>Category: {selectedMeta?.category}</div>
          <div>{selectedMeta?.description}</div>
        </div>
      </div>

      <CaseWaveCanvas
        width="100vw"
        height="100vh"
        theme={selectedTheme}
        grid
        snapToGrid
        minimap
      />
    </CaseWaveProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);



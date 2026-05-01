import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { CaseWaveGraph } from "@casewavejs/core";
import { CaseWaveProvider, CaseWaveCanvas } from "@casewavejs/react";
import { dagLayout } from "@casewavejs/layout";
import { caseWaveMidnightTheme } from "@casewavejs/themes";
const graph = new CaseWaveGraph({
    allowCycles: true
});
graph.addNode({
    id: "clean_a",
    type: "node",
    position: { x: 0, y: 0 }
});
graph.addNode({
    id: "clean_b",
    type: "node",
    position: { x: 0, y: 0 }
});
graph.addEdge({
    id: "clean_edge",
    type: "default",
    source: { kind: "node", nodeId: "clean_a" },
    target: { kind: "node", nodeId: "clean_b" },
    direction: "directed"
});
const layout = dagLayout(graph.toJSON());
for (const [nodeId, position] of Object.entries(layout.positions)) {
    graph.updateNode(nodeId, { position });
}
function App() {
    return (_jsx(CaseWaveProvider, { graph: graph, children: _jsx(CaseWaveCanvas, { width: "100vw", height: "100vh", theme: caseWaveMidnightTheme, minimap: true, grid: true, snapToGrid: true }) }));
}
createRoot(document.getElementById("root")).render(_jsx(App, {}));





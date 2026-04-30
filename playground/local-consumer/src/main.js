import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { CaseWaveGraph } from "@casewavejs/core";
import { CaseWaveProvider, CaseWaveCanvas } from "@casewavejs/react";
import { caseWaveMidnightTheme } from "@casewavejs/themes";
import { dagLayout } from "@casewavejs/layout";
const graph = new CaseWaveGraph({
    allowCycles: true
});
graph.addNode({
    id: "a",
    type: "alpha",
    position: { x: 100, y: 100 }
});
graph.addNode({
    id: "b",
    type: "beta",
    position: { x: 360, y: 160 }
});
graph.addEdge({
    id: "a_to_b",
    type: "default",
    source: { kind: "node", nodeId: "a" },
    target: { kind: "node", nodeId: "b" },
    direction: "directed",
    routing: "bezier"
});
const layout = dagLayout(graph.toJSON());
for (const [nodeId, position] of Object.entries(layout.positions)) {
    graph.updateNode(nodeId, { position });
}
function App() {
    return (_jsx(CaseWaveProvider, { graph: graph, children: _jsx(CaseWaveCanvas, { width: "100vw", height: "100vh", theme: caseWaveMidnightTheme, minimap: true, grid: true, snapToGrid: true }) }));
}
createRoot(document.getElementById("root")).render(_jsx(App, {}));



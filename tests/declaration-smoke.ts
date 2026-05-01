import type {
  CaseWaveGraphSchema,
  CaseWaveNode,
  CaseWaveEdge
} from "../packages/core/dist/index.js";

import type {
  CaseWaveCanvasProps,
  CaseWaveNodeRendererMap,
  CaseWaveTheme
} from "../packages/react/dist/index.js";

import type {
  CaseWaveLayoutAdapter,
  CaseWaveLayoutResult
} from "../packages/layout/dist/index.js";

const node: CaseWaveNode = {
  id: "node_type_test",
  type: "test",
  position: { x: 0, y: 0 }
};

const edge: CaseWaveEdge = {
  id: "edge_type_test",
  type: "test",
  source: { kind: "node", nodeId: "node_type_test" },
  target: { kind: "node", nodeId: "node_type_test" },
  direction: "directed"
};

const schema: CaseWaveGraphSchema = {
  version: "0.1.0",
  nodes: [node],
  edges: [edge]
};

const canvasProps: CaseWaveCanvasProps = {
  width: "100%",
  height: "100%",
  grid: true,
  snapToGrid: true
};

const renderers: CaseWaveNodeRendererMap = {};

const theme: Partial<CaseWaveTheme> = {
  accent: "#ffffff"
};

const layoutResult: CaseWaveLayoutResult = {
  positions: {
    node_type_test: { x: 0, y: 0 }
  }
};

const adapter: CaseWaveLayoutAdapter = {
  id: "test",
  name: "Test Layout",
  layout: () => layoutResult
};

void schema;
void canvasProps;
void renderers;
void theme;
void adapter;

console.log("Declaration import smoke OK.");





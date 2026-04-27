export type CaseWaveId = string;

export type CaseWaveDictionary<T = unknown> = Record<string, T>;

export type CaseWaveNodeState =
  | "default"
  | "selected"
  | "locked"
  | "pinned"
  | "collapsed"
  | "hidden"
  | "disabled"
  | "warning"
  | "error";

export type CaseWaveEdgeDirection = "directed" | "undirected";

export type CaseWaveEdgeRoutingMode =
  | "straight"
  | "bezier"
  | "orthogonal"
  | "subway"
  | "custom";

export type CaseWaveSemanticRelation =
  | "related"
  | "causes"
  | "supports"
  | "contradicts"
  | "depends_on"
  | "evidence_of"
  | "hypothesis_for"
  | "temporal_before"
  | "temporal_after"
  | string;

export interface CaseWavePosition {
  x: number;
  y: number;
}

export interface CaseWaveSize {
  width: number;
  height: number;
}

export interface CaseWaveRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CaseWaveCamera {
  x: number;
  y: number;
  zoom: number;
}

export interface CaseWaveSelection {
  nodeIds: CaseWaveId[];
  edgeIds: CaseWaveId[];
}

export interface CaseWavePort {
  id: CaseWaveId;
  nodeId: CaseWaveId;
  type?: string;
  label?: string;
  position?: CaseWavePosition;
  metadata?: CaseWaveDictionary;
}

export interface CaseWaveAnchor {
  id: CaseWaveId;
  edgeId: CaseWaveId;
  ratio?: number;
  metadata?: CaseWaveDictionary;
}

export interface CaseWaveComment {
  id: CaseWaveId;
  author?: string;
  body: string;
  createdAt: string;
  updatedAt?: string;
  mentions?: string[];
}

export interface CaseWaveNode<TData = CaseWaveDictionary> {
  id: CaseWaveId;
  type: string;
  position: CaseWavePosition;
  size?: CaseWaveSize;

  data?: TData;
  parentId?: CaseWaveId;

  ports?: CaseWavePort[];

  locked?: boolean;
  pinned?: boolean;
  collapsed?: boolean;
  hidden?: boolean;

  states?: CaseWaveNodeState[];
  tags?: string[];
  badges?: string[];

  version?: number;
  comments?: CaseWaveComment[];

  metadata?: CaseWaveDictionary;
}

export type CaseWaveEdgeEndpoint =
  | {
      kind: "node";
      nodeId: CaseWaveId;
      portId?: CaseWaveId;
    }
  | {
      kind: "edge";
      edgeId: CaseWaveId;
      anchorId?: CaseWaveId;
    }
  | {
      kind: "anchor";
      anchorId: CaseWaveId;
    };

export interface CaseWaveEdge<TData = CaseWaveDictionary> {
  id: CaseWaveId;
  type: string;

  source: CaseWaveEdgeEndpoint;
  target: CaseWaveEdgeEndpoint;

  direction?: CaseWaveEdgeDirection;
  relation?: CaseWaveSemanticRelation;

  weight?: number;
  confidence?: number;

  conditional?: boolean;
  condition?: string;

  temporal?: boolean;
  timestamp?: string;

  routing?: CaseWaveEdgeRoutingMode;

  label?: string;
  data?: TData;

  anchors?: CaseWaveAnchor[];

  hidden?: boolean;
  locked?: boolean;

  metadata?: CaseWaveDictionary;
}

export interface CaseWaveHyperedge<TData = CaseWaveDictionary> {
  id: CaseWaveId;
  type: string;
  endpoints: CaseWaveEdgeEndpoint[];
  relation?: CaseWaveSemanticRelation;
  data?: TData;
  metadata?: CaseWaveDictionary;
}

export interface CaseWaveGraphSchema {
  version: string;
  nodes: CaseWaveNode[];
  edges: CaseWaveEdge[];
  hyperedges?: CaseWaveHyperedge[];
  metadata?: CaseWaveDictionary;
}

export interface CaseWaveGraphOptions {
  allowCycles?: boolean;
  allowDanglingEdges?: boolean;
  hypergraphMode?: boolean;
  readonly?: boolean;
}

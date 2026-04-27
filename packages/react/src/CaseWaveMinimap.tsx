import React from "react";
import type { CaseWaveCamera, CaseWaveEdge, CaseWaveNode } from "@casewave/core";

export interface CaseWaveMinimapProps {
  nodes: CaseWaveNode[];
  edges: CaseWaveEdge[];
  camera: CaseWaveCamera;
  width?: number;
  height?: number;
}

export function CaseWaveMinimap(props: CaseWaveMinimapProps) {
  const width = props.width ?? 180;
  const height = props.height ?? 120;

  if (props.nodes.length === 0) {
    return null;
  }

  const bounds = getGraphBounds(props.nodes);
  const scale = Math.min(
    width / Math.max(bounds.width, 1),
    height / Math.max(bounds.height, 1)
  );

  return (
    <div
      style={{
        position: "absolute",
        right: 16,
        bottom: 16,
        width,
        height,
        borderRadius: 10,
        background: "rgba(15,17,23,0.9)",
        border: "1px solid rgba(255,255,255,0.12)",
        overflow: "hidden",
        zIndex: 40
      }}
    >
      <svg width={width} height={height}>
        {props.edges.map((edge) => {
          const sourceEndpoint = edge.source;
          const targetEndpoint = edge.target;

          if (sourceEndpoint.kind !== "node") return null;
          if (targetEndpoint.kind !== "node") return null;

          const source = props.nodes.find((node) => node.id === sourceEndpoint.nodeId);
          const target = props.nodes.find((node) => node.id === targetEndpoint.nodeId);

          if (!source || !target) return null;

          const x1 = (source.position.x - bounds.x) * scale;
          const y1 = (source.position.y - bounds.y) * scale;
          const x2 = (target.position.x - bounds.x) * scale;
          const y2 = (target.position.y - bounds.y) * scale;

          return (
            <line
              key={edge.id}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={1}
            />
          );
        })}

        {props.nodes.map((node) => {
          const x = (node.position.x - bounds.x) * scale;
          const y = (node.position.y - bounds.y) * scale;

          return (
            <rect
              key={node.id}
              x={x}
              y={y}
              width={Math.max((node.size?.width ?? 160) * scale, 4)}
              height={Math.max((node.size?.height ?? 80) * scale, 3)}
              rx={2}
              fill="rgba(96,165,250,0.85)"
            />
          );
        })}
      </svg>
    </div>
  );
}

function getGraphBounds(nodes: CaseWaveNode[]) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const node of nodes) {
    const width = node.size?.width ?? 160;
    const height = node.size?.height ?? 80;

    minX = Math.min(minX, node.position.x);
    minY = Math.min(minY, node.position.y);
    maxX = Math.max(maxX, node.position.x + width);
    maxY = Math.max(maxY, node.position.y + height);
  }

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}


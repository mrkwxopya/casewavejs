import type { CaseWaveEdgeRoutingMode, CaseWavePosition } from "@casewavejs/core";

export interface CaseWaveRouteOptions {
  mode?: CaseWaveEdgeRoutingMode;
  source: CaseWavePosition;
  target: CaseWavePosition;
}

export function createEdgePath(options: CaseWaveRouteOptions): string {
  const mode = options.mode ?? "straight";

  if (mode === "bezier") {
    return createBezierPath(options.source, options.target);
  }

  if (mode === "orthogonal") {
    return createOrthogonalPath(options.source, options.target);
  }

  return createStraightPath(options.source, options.target);
}

export function createStraightPath(
  source: CaseWavePosition,
  target: CaseWavePosition
): string {
  return `M ${source.x} ${source.y} L ${target.x} ${target.y}`;
}

export function createBezierPath(
  source: CaseWavePosition,
  target: CaseWavePosition
): string {
  const dx = Math.abs(target.x - source.x);
  const offset = Math.max(80, dx * 0.5);

  const c1 = {
    x: source.x + offset,
    y: source.y
  };

  const c2 = {
    x: target.x - offset,
    y: target.y
  };

  return `M ${source.x} ${source.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${target.x} ${target.y}`;
}

export function createOrthogonalPath(
  source: CaseWavePosition,
  target: CaseWavePosition
): string {
  const midX = source.x + (target.x - source.x) / 2;

  return [
    `M ${source.x} ${source.y}`,
    `L ${midX} ${source.y}`,
    `L ${midX} ${target.y}`,
    `L ${target.x} ${target.y}`
  ].join(" ");
}





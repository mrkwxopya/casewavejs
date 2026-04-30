import type { CaseWavePosition } from "@casewavejs/core";

export function snapValue(value: number, gridSize: number): number {
  return Math.round(value / gridSize) * gridSize;
}

export function snapPoint(
  point: CaseWavePosition,
  gridSize: number
): CaseWavePosition {
  return {
    x: snapValue(point.x, gridSize),
    y: snapValue(point.y, gridSize)
  };
}

export function createGridBackground(options: {
  gridSize: number;
  cameraX: number;
  cameraY: number;
  zoom: number;
  color?: string;
  background?: string;
}): string {
  const size = options.gridSize * options.zoom;
  const x = options.cameraX % size;
  const y = options.cameraY % size;

  const color = options.color ?? "rgba(255,255,255,0.06)";
  const background = options.background ?? "#0f1117";

  return `
    linear-gradient(${color} 1px, transparent 1px),
    linear-gradient(90deg, ${color} 1px, transparent 1px),
    ${background}
  `;
}

export function createGridBackgroundSize(options: {
  gridSize: number;
  zoom: number;
}): string {
  const size = options.gridSize * options.zoom;
  return `${size}px ${size}px`;
}

export function createGridBackgroundPosition(options: {
  gridSize: number;
  cameraX: number;
  cameraY: number;
  zoom: number;
}): string {
  const size = options.gridSize * options.zoom;
  const x = options.cameraX % size;
  const y = options.cameraY % size;

  return `${x}px ${y}px`;
}



import type {
  CaseWaveCamera,
  CaseWavePosition,
  CaseWaveRect
} from "@casewavejs/core";

export function screenToWorld(
  point: CaseWavePosition,
  camera: CaseWaveCamera
): CaseWavePosition {
  return {
    x: (point.x - camera.x) / camera.zoom,
    y: (point.y - camera.y) / camera.zoom
  };
}

export function worldToScreen(
  point: CaseWavePosition,
  camera: CaseWaveCamera
): CaseWavePosition {
  return {
    x: point.x * camera.zoom + camera.x,
    y: point.y * camera.zoom + camera.y
  };
}

export function normalizeRect(
  a: CaseWavePosition,
  b: CaseWavePosition
): CaseWaveRect {
  const x = Math.min(a.x, b.x);
  const y = Math.min(a.y, b.y);

  return {
    x,
    y,
    width: Math.abs(a.x - b.x),
    height: Math.abs(a.y - b.y)
  };
}

export function rectsIntersect(a: CaseWaveRect, b: CaseWaveRect): boolean {
  return !(
    a.x + a.width < b.x ||
    b.x + b.width < a.x ||
    a.y + a.height < b.y ||
    b.y + b.height < a.y
  );
}

export function clampZoom(value: number, min = 0.15, max = 3): number {
  return Math.min(max, Math.max(min, value));
}



import { useCallback, useState } from "react";
import type { CaseWaveCamera, CaseWavePosition } from "@casewave/core";
import { clampZoom } from "./utils";

export interface UseCaseWaveViewportOptions {
  initialCamera?: CaseWaveCamera;
  minZoom?: number;
  maxZoom?: number;
}

export function useCaseWaveViewport(options: UseCaseWaveViewportOptions = {}) {
  const minZoom = options.minZoom ?? 0.15;
  const maxZoom = options.maxZoom ?? 3;

  const [camera, setCamera] = useState<CaseWaveCamera>(
    options.initialCamera ?? {
      x: 0,
      y: 0,
      zoom: 1
    }
  );

  const panBy = useCallback((delta: CaseWavePosition) => {
    setCamera((current) => ({
      ...current,
      x: current.x + delta.x,
      y: current.y + delta.y
    }));
  }, []);

  const zoomAt = useCallback(
    (screenPoint: CaseWavePosition, deltaY: number) => {
      setCamera((current) => {
        const zoomFactor = deltaY > 0 ? 0.9 : 1.1;
        const nextZoom = clampZoom(
          current.zoom * zoomFactor,
          minZoom,
          maxZoom
        );

        const worldX = (screenPoint.x - current.x) / current.zoom;
        const worldY = (screenPoint.y - current.y) / current.zoom;

        return {
          zoom: nextZoom,
          x: screenPoint.x - worldX * nextZoom,
          y: screenPoint.y - worldY * nextZoom
        };
      });
    },
    [minZoom, maxZoom]
  );

  const resetCamera = useCallback(() => {
    setCamera(
      options.initialCamera ?? {
        x: 0,
        y: 0,
        zoom: 1
      }
    );
  }, [options.initialCamera]);

  return {
    camera,
    setCamera,
    panBy,
    zoomAt,
    resetCamera
  };
}

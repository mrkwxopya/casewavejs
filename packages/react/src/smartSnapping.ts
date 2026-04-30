import type { CaseWaveNode, CaseWavePosition } from "@casewavejs/core";

export interface CaseWaveSnapGuide {
  id: string;
  type: "vertical" | "horizontal";
  position: number;
  from: number;
  to: number;
}

export interface CaseWaveSmartSnapResult {
  position: CaseWavePosition;
  guides: CaseWaveSnapGuide[];
}

export interface CaseWaveSmartSnapOptions {
  threshold?: number;
  nodeWidth?: number;
  nodeHeight?: number;
}

export function smartSnapNodePosition(
  movingNode: CaseWaveNode,
  targetPosition: CaseWavePosition,
  allNodes: CaseWaveNode[],
  options: CaseWaveSmartSnapOptions = {}
): CaseWaveSmartSnapResult {
  const threshold = options.threshold ?? 8;
  const movingWidth = options.nodeWidth ?? movingNode.size?.width ?? 160;
  const movingHeight = options.nodeHeight ?? movingNode.size?.height ?? 80;

  let x = targetPosition.x;
  let y = targetPosition.y;

  const guides: CaseWaveSnapGuide[] = [];

  const moving = {
    left: targetPosition.x,
    centerX: targetPosition.x + movingWidth / 2,
    right: targetPosition.x + movingWidth,
    top: targetPosition.y,
    centerY: targetPosition.y + movingHeight / 2,
    bottom: targetPosition.y + movingHeight
  };

  for (const node of allNodes) {
    if (node.id === movingNode.id) continue;
    if (node.hidden) continue;

    const width = node.size?.width ?? 160;
    const height = node.size?.height ?? 80;

    const target = {
      left: node.position.x,
      centerX: node.position.x + width / 2,
      right: node.position.x + width,
      top: node.position.y,
      centerY: node.position.y + height / 2,
      bottom: node.position.y + height
    };

    const xCandidates = [
      { movingKey: "left", targetKey: "left", delta: target.left - moving.left },
      { movingKey: "centerX", targetKey: "centerX", delta: target.centerX - moving.centerX },
      { movingKey: "right", targetKey: "right", delta: target.right - moving.right }
    ];

    for (const candidate of xCandidates) {
      if (Math.abs(candidate.delta) <= threshold) {
        x += candidate.delta;

        guides.push({
          id: `v_${node.id}_${candidate.targetKey}`,
          type: "vertical",
          position: target[candidate.targetKey as "left" | "centerX" | "right"],
          from: Math.min(target.top, targetPosition.y),
          to: Math.max(target.bottom, targetPosition.y + movingHeight)
        });

        break;
      }
    }

    const yCandidates = [
      { movingKey: "top", targetKey: "top", delta: target.top - moving.top },
      { movingKey: "centerY", targetKey: "centerY", delta: target.centerY - moving.centerY },
      { movingKey: "bottom", targetKey: "bottom", delta: target.bottom - moving.bottom }
    ];

    for (const candidate of yCandidates) {
      if (Math.abs(candidate.delta) <= threshold) {
        y += candidate.delta;

        guides.push({
          id: `h_${node.id}_${candidate.targetKey}`,
          type: "horizontal",
          position: target[candidate.targetKey as "top" | "centerY" | "bottom"],
          from: Math.min(target.left, targetPosition.x),
          to: Math.max(target.right, targetPosition.x + movingWidth)
        });

        break;
      }
    }
  }

  return {
    position: { x, y },
    guides
  };
}



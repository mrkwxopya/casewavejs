import React from "react";
import type { CaseWaveDevtoolsState } from "./devtoolsTypes";

export interface CaseWaveDevtoolsProps {
  state: CaseWaveDevtoolsState;
  onClose: () => void;
}

export function CaseWaveDevtools(props: CaseWaveDevtoolsProps) {
  if (!props.state.open) return null;

  return (
    <div
      style={{
        position: "absolute",
        right: 16,
        top: 16,
        width: 360,
        maxHeight: "calc(100% - 32px)",
        overflow: "auto",
        borderRadius: 14,
        background: "#111827",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 18px 44px rgba(0,0,0,0.35)",
        color: "white",
        zIndex: 250
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 14px",
          borderBottom: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        <strong>CaseWave Devtools</strong>

        <button
          type="button"
          onClick={props.onClose}
          style={{
            border: 0,
            background: "transparent",
            color: "white",
            cursor: "pointer",
            fontSize: 18
          }}
        >
          ×
        </button>
      </div>

      <div style={{ padding: 14, display: "grid", gap: 10 }}>
        <DevtoolsRow label="Nodes" value={props.state.nodeCount} />
        <DevtoolsRow label="Edges" value={props.state.edgeCount} />
        <DevtoolsRow label="Selected nodes" value={props.state.selectedNodeCount} />
        <DevtoolsRow label="Selected edges" value={props.state.selectedEdgeCount} />

        <details>
          <summary style={{ cursor: "pointer" }}>Selection JSON</summary>
          <pre
            style={{
              marginTop: 8,
              padding: 10,
              background: "#020617",
              borderRadius: 8,
              overflow: "auto",
              fontSize: 12
            }}
          >
            {JSON.stringify(props.state.selection, null, 2)}
          </pre>
        </details>

        <details>
          <summary style={{ cursor: "pointer" }}>Schema JSON</summary>
          <pre
            style={{
              marginTop: 8,
              padding: 10,
              background: "#020617",
              borderRadius: 8,
              overflow: "auto",
              fontSize: 12
            }}
          >
            {JSON.stringify(props.state.schema, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
}

function DevtoolsRow(props: { label: string; value: number }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "8px 10px",
        borderRadius: 8,
        background: "rgba(255,255,255,0.04)"
      }}
    >
      <span style={{ opacity: 0.75 }}>{props.label}</span>
      <strong>{props.value}</strong>
    </div>
  );
}

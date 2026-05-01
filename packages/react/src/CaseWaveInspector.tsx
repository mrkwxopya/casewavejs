import React from "react";
import type { CaseWaveGraph } from "@casewavejs/core";
import type { CaseWaveInspectorState } from "./inspector";

export interface CaseWaveInspectorProps {
  graph: CaseWaveGraph;
  state: CaseWaveInspectorState;
  onClose?: () => void;
}

export function CaseWaveInspector(props: CaseWaveInspectorProps) {
  const node = props.state.firstNode;
  const edge = props.state.firstEdge;

  if (!node && !edge) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: 16,
        top: 16,
        width: 340,
        maxHeight: "calc(100% - 32px)",
        overflow: "auto",
        borderRadius: 14,
        background: "#111827",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 18px 44px rgba(0,0,0,0.35)",
        color: "white",
        zIndex: 240
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
        <strong>Inspector</strong>

        {props.onClose && (
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
        )}
      </div>

      <div style={{ padding: 14, display: "grid", gap: 12 }}>
        {node && (
          <InspectorSection title="Node">
            <InspectorField label="ID" value={node.id} />
            <InspectorField label="Type" value={node.type} />
            <InspectorField label="X" value={node.position.x} />
            <InspectorField label="Y" value={node.position.y} />
            <InspectorField label="Parent" value={node.parentId ?? "-"} />
            <InspectorJson value={node.data ?? {}} />
          </InspectorSection>
        )}

        {edge && (
          <InspectorSection title="Edge">
            <InspectorField label="ID" value={edge.id} />
            <InspectorField label="Type" value={edge.type} />
            <InspectorField label="Direction" value={edge.direction ?? "-"} />
            <InspectorField label="Relation" value={edge.relation ?? "-"} />
            <InspectorField label="Routing" value={edge.routing ?? "-"} />
            <InspectorJson value={edge.data ?? {}} />
          </InspectorSection>
        )}
      </div>
    </div>
  );
}

function InspectorSection(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        padding: 10,
        borderRadius: 10,
        background: "rgba(255,255,255,0.04)"
      }}
    >
      <strong style={{ display: "block", marginBottom: 8 }}>
        {props.title}
      </strong>
      {props.children}
    </section>
  );
}

function InspectorField(props: {
  label: string;
  value: string | number;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        fontSize: 13,
        padding: "4px 0"
      }}
    >
      <span style={{ opacity: 0.65 }}>{props.label}</span>
      <code>{String(props.value)}</code>
    </div>
  );
}

function InspectorJson(props: { value: unknown }) {
  return (
    <details style={{ marginTop: 8 }}>
      <summary style={{ cursor: "pointer" }}>Data JSON</summary>
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
        {JSON.stringify(props.value, null, 2)}
      </pre>
    </details>
  );
}





import React from "react";
import type { CaseWaveValidationIssue } from "./validationPanel";

export interface CaseWaveValidationPanelProps {
  open: boolean;
  issues: CaseWaveValidationIssue[];
  onClose: () => void;
}

export function CaseWaveValidationPanel(props: CaseWaveValidationPanelProps) {
  if (!props.open) return null;

  const errorCount = props.issues.filter((issue) => issue.level === "error").length;
  const warningCount = props.issues.filter((issue) => issue.level === "warning").length;

  return (
    <div
      style={{
        position: "absolute",
        left: 16,
        bottom: 16,
        width: 420,
        maxHeight: 320,
        overflow: "auto",
        borderRadius: 14,
        background: "#111827",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 18px 44px rgba(0,0,0,0.35)",
        color: "white",
        zIndex: 245
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
        <strong>Validation</strong>

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

      <div style={{ padding: 14 }}>
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 12,
            fontSize: 13
          }}
        >
          <span>Errors: {errorCount}</span>
          <span>Warnings: {warningCount}</span>
        </div>

        {props.issues.length === 0 ? (
          <div style={{ opacity: 0.75 }}>No validation issues.</div>
        ) : (
          <div style={{ display: "grid", gap: 8 }}>
            {props.issues.map((issue) => (
              <div
                key={issue.id}
                style={{
                  padding: 10,
                  borderRadius: 10,
                  background:
                    issue.level === "error"
                      ? "rgba(248,113,113,0.12)"
                      : "rgba(250,204,21,0.12)",
                  border:
                    issue.level === "error"
                      ? "1px solid rgba(248,113,113,0.35)"
                      : "1px solid rgba(250,204,21,0.35)"
                }}
              >
                <strong
                  style={{
                    color: issue.level === "error" ? "#f87171" : "#facc15",
                    textTransform: "uppercase",
                    fontSize: 11
                  }}
                >
                  {issue.level}
                </strong>
                <div style={{ marginTop: 4 }}>{issue.message}</div>
                {issue.targetId && (
                  <code style={{ opacity: 0.7, fontSize: 12 }}>
                    {issue.targetType}:{issue.targetId}
                  </code>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}



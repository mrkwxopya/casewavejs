import React, { useMemo, useState } from "react";
import {
  type CaseWaveCommand,
  filterCommands
} from "./commandPalette";

export interface CaseWaveCommandPaletteProps {
  commands: CaseWaveCommand[];
  open: boolean;
  onClose: () => void;
}

export function CaseWaveCommandPalette(props: CaseWaveCommandPaletteProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return filterCommands(props.commands, query);
  }, [props.commands, query]);

  if (!props.open) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        zIndex: 300
      }}
      onClick={props.onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: 560,
          margin: "80px auto",
          background: "#111827",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 25px 70px rgba(0,0,0,0.4)"
        }}
      >
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search commands..."
          autoFocus
          style={{
            width: "100%",
            padding: 18,
            background: "#0f172a",
            border: 0,
            outline: "none",
            color: "white",
            boxSizing: "border-box"
          }}
        />

        <div
          style={{
            maxHeight: 420,
            overflow: "auto"
          }}
        >
          {filtered.map((command) => (
            <button
              key={command.id}
              type="button"
              onClick={() => {
                command.run();
                props.onClose();
              }}
              style={{
                display: "block",
                width: "100%",
                padding: "14px 18px",
                textAlign: "left",
                background: "transparent",
                border: 0,
                color: "white",
                cursor: "pointer"
              }}
            >
              {command.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

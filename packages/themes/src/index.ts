import type { CaseWaveTheme } from "@casewavejs/react";

export const caseWaveMidnightTheme: CaseWaveTheme = {
  name: "midnight",

  canvasBackground: "#020617",
  gridColor: "rgba(148,163,184,0.12)",

  nodeBackground: "#0f172a",
  nodeSelectedBackground: "#172554",
  nodeBorder: "1px solid rgba(148,163,184,0.22)",
  nodeSelectedBorder: "2px solid #38bdf8",
  nodeText: "#e5e7eb",

  groupBackground: "rgba(15,23,42,0.48)",
  groupBorder: "1px dashed rgba(148,163,184,0.35)",

  edgeStroke: "rgba(148,163,184,0.58)",
  edgeSelectedStroke: "#38bdf8",
  edgePreviewStroke: "#38bdf8",

  handleBackground: "#38bdf8",
  handleBorder: "2px solid #020617",

  panelBackground: "#020617",
  panelBorder: "1px solid rgba(148,163,184,0.22)",
  panelText: "#f8fafc",

  accent: "#38bdf8",
  danger: "#fb7185",
  warning: "#facc15"
};

export const caseWaveEvidenceTheme: CaseWaveTheme = {
  name: "evidence",

  canvasBackground: "#11100c",
  gridColor: "rgba(245,158,11,0.12)",

  nodeBackground: "#1c1917",
  nodeSelectedBackground: "#292524",
  nodeBorder: "1px solid rgba(245,158,11,0.22)",
  nodeSelectedBorder: "2px solid #f59e0b",
  nodeText: "#fef3c7",

  groupBackground: "rgba(120,53,15,0.2)",
  groupBorder: "1px dashed rgba(245,158,11,0.35)",

  edgeStroke: "rgba(254,243,199,0.48)",
  edgeSelectedStroke: "#f59e0b",
  edgePreviewStroke: "#f59e0b",

  handleBackground: "#f59e0b",
  handleBorder: "2px solid #11100c",

  panelBackground: "#1c1917",
  panelBorder: "1px solid rgba(245,158,11,0.22)",
  panelText: "#fef3c7",

  accent: "#f59e0b",
  danger: "#ef4444",
  warning: "#facc15"
};

export const caseWaveThemePresets = {
  midnight: caseWaveMidnightTheme,
  evidence: caseWaveEvidenceTheme
};

export type CaseWaveThemePresetName = keyof typeof caseWaveThemePresets;
export * from "./dark";
export * from "./light";
export * from "./midnight";
export * from "./cyberpunk";
export * from "./blueprint";
export * from "./terminal";
export * from "./noir";
export * from "./evidence-board";
export * from "./red-string-board";
export * from "./minimal";
export * from "./police-desk";
export * from "./paper-archive";
export * from "./glass";
export * from "./neo-brutalist";
export * from "./windows-95";
export * from "./investigation";
export * from "./threat-intel";
export * from "./dependency-graph";
export * from "./forensics";
export * from "./mind-map";
export * from "./crime-network";
export * from "./compact";
export * from "./presentation";
export * from "./analyst";
export * from "./large-graph";
export * from "./accessibility";
export * from "./focus";
export * from "./caseboard-classic";
export * from "./murder-wall";
export * from "./cold-case";
export * from "./blue-evidence";
export * from "./interpol";
export * from "./soc-analyst";
export * from "./dark-matter";
export * from "./matrix";
export * from "./war-room";
export * from "./incident-response";
export * from "./conspiracy-board";
export * from "./neon-edges";
export * from "./sketch-edges";
export * from "./evidence-thread";
export * from "./wireframe-edges";
export * from "./circuit-edges";
export * from "./hand-drawn-edges";
export * from "./corkboard";
export * from "./blueprint-paper";
export * from "./graph-paper";
export * from "./police-dossier-paper";
export * from "./dark-grid-matrix";
export * from "./topographic-map";
export * from "./evidence-folder-texture";
export * from "./registry";
export * from "./meta";
export * from "./evidence-locker";
export * from "./classified";
export * from "./evidence-tag";
export * from "./surveillance";
export * from "./archive-microfilm";
export * from "./crime-scene-tape";
export * from "./pinboard";
export * from "./incident-board";
export * from "./osint";
export * from "./command-center";
export * from "./evidence-vault";
export * from "./tactical-ops";
export * from "./digital-forensics";
export * from "./intelligence-desk";
export * from "./redacted-file";
export * from "./black-ops";
export * from "./safehouse";
export * from "./briefing-room";
export * from "./courtroom";
export * from "./case-file";
export * from "./night-shift";
export * from "./detective-noir-2";
export * from "./intelligence-map";
export * from "./retro-terminal-amber";
export * from "./satellite-ops";
export * from "./secret-archive";
export * from "./federal-dossier";
export * from "./signal-intercept";
export * from "./tactical-grid";
export * from "./warboard";
export * from "./shadow-intel";
export * from "./ghost-protocol";
export * from "./darkroom";
export * from "./blueprint-ops";
export * from "./agency-vault";
export * from "./night-vision";
export * from "./intercept-grid";
export * from "./bunker";
export * from "./red-wire";
export * from "./operations-room";
export * from "./vault-black";
export * from "./cipher";
export * from "./intel-terminal";
export * from "./embassy";
export * from "./recon";
export * from "./red-ledger";
export * from "./secure-channel";
export * from "./cold-storage";
export * from "./dossier-black";
export * from "./strike-team";
export * from "./evidence-graphite";
export * from "./blacksite";
export * from "./field-ops";
export * from "./intel-blue";
export * from "./covert-signal";
export * from "./map-overlay";
export * from "./agency-grey";
export * from "./vault-copper";
export * from "./signal-room";
export * from "./paper-stamp";
export * from "./watchfloor";
export * from "./evidence-room";
export * from "./cold-trail";
export * from "./cyber-evidence";
export * from "./crisis-cell";
export * from "./ops-amber";
export * from "./encrypted";
export * from "./archive-dust";
export * from "./urban-ops";
export * from "./radar";
export * from "./deep-archive";
export * from "./case-room";
export * from "./blue-ops";
export * from "./threat-matrix";
export * from "./evidence-wall-dark";
export * from "./ops-slate";
export * from "./wiretap";
export * from "./archive-blue";
export * from "./surveillance-green";
export * from "./intel-paper";
export * from "./neon-crime";
export * from "./command-black";
export * from "./forensic-lab";
export * from "./dark-signal";
export * from "./archive-rust";
export * from "./grid-command";
export * from "./crime-board-paper";
export * from "./hunter-green";
export * from "./intel-purple";
export * from "./evidence-redline";
export * from "./ops-mercury";
export * from "./signal-black";
export * from "./archive-sepia";
export * from "./ghost-wire";
export * from "./ops-steel";
export * from "./tactical-sand";
export * from "./neural-crime";
export * from "./intel-mint";
export * from "./red-cell";
export * from "./wireframe-ops";
export * from "./vault-ivory";
export * from "./incident-amber";
export * from "./deep-signal";
export * from "./breach";
export * from "./ops-blueprint-dark";
export * from "./cipher-paper";
export * from "./signal-mint";
export * from "./caseboard-graphite";
export * from "./tactical-forest";
export * from "./intel-rose";
export * from "./wiregrid";
export * from "./phantom-ops";
export * from "./dossier-crimson";
export * from "./stealth-forest";
export * from "./analyst-desk";
export * from "./terminal-lime";
export * from "./cipher-navy";
export * from "./evidence-copper";
export * from "./ops-polar";
export * from "./signal-crimson";
export * from "./archive-blueprint";
export * from "./warroom-classic";
export * from "./quantum-intel";
export * from "./night-ops-red";
export * from "./intel-ice";
export * from "./cork-evidence";
export * from "./matrix-ops";
export * from "./forensic-paper";
export * from "./stealth-blue";
export * from "./archive-stone";
export * from "./threat-radar";
export * from "./ghost-archive";
export * from "./red-string-elite";
export * from "./blueprint-tactical";
export * from "./intel-obsidian";
export * from "./forensic-ultraviolet";
export * from "./agency-blueprint";
export * from "./night-cipher";
export * from "./casefile-premium";
export * from "./threat-grid-x";
export * from "./command-ivory";
export * from "./black-chamber";
export * from "./signal-aurora";
export * from "./crimson-board";
export * from "./atlas-blue";
export * from "./archive-gold";
export * from "./ops-volt";
export * from "./phantom-purple";
export * from "./tactical-rust";
export * from "./vector-mint";
export * from "./omega-command";
export * from "./shadow-dossier";
export * from "./neon-intercept";
export * from "./forensic-frost";
export * from "./green-radar";
export * from "./archive-marble";
export * from "./deep-vault";
export * from "./blue-channel";
export * from "./amber-ops";
export * from "./mint-cipher";
export * from "./iron-directive";
export * from "./criminal-ink";
export * from "./cyber-pulse";
export * from "./cold-evidence";
export * from "./tactical-emerald";
export * from "./signal-copper";
export * from "./midnight-grid";
export * from "./archive-pearl";
export * from "./hazard-orange";
export * from "./silent-protocol";
export * from "./delta-ops";
export * from "./crime-ledger";
export * from "./volt-matrix";
export * from "./deep-navy";
export * from "./ivory-investigation";
export * from "./infrared-threat";
export * from "./signal-teal";
export * from "./archive-quartz";
export * from "./mercury-ops";
export * from "./aurora-wire";
export * from "./obsidian-grid";
export * from "./crimson-intel";
export * from "./blueprint-steel";
export * from "./emerald-directive";
export * from "./amber-archive";
export * from "./signal-prism";
export * from "./caseboard-ivory";
export * from "./night-vector";
export * from "./tactical-graphite";
export * from "./aurora-command";
export * from "./specter-ops";
export * from "./evidence-ruby";
export * from "./cipher-storm";
export * from "./forensic-mint";
export * from "./night-amber";
export * from "./protocol-white";
export * from "./carbon-signal";
export * from "./archive-bronze";
export * from "./radar-violet";
export * from "./atlas-paper";
export * from "./bloodline-board";
export * from "./blue-vector";
export * from "./hunter-ops";
export * from "./paper-dossier";
export * from "./quantum-pulse";
export * from "./command-silver";
export * from "./rust-intel";
export * from "./polar-signal";
export * from "./vault-noir";
export * from "./platinum-command";
export * from "./onyx-vault";
export * from "./cyber-neon";
export * from "./cork-detective";
export * from "./gold-evidence";
export * from "./arctic-intel";
export * from "./tactical-blackout";
export * from "./imperial-purple";
export * from "./executive-slate";



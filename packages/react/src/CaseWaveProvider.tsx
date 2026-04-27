import React, { createContext, useContext, useMemo } from "react";
import { CaseWaveGraph, type CaseWaveGraphOptions } from "@casewave/core";

const CaseWaveContext = createContext<CaseWaveGraph | null>(null);

export interface CaseWaveProviderProps {
  graph?: CaseWaveGraph;
  options?: CaseWaveGraphOptions;
  children: React.ReactNode;
}

export function CaseWaveProvider(props: CaseWaveProviderProps) {
  const graph = useMemo(() => {
    return props.graph ?? new CaseWaveGraph(props.options);
  }, [props.graph, props.options]);

  return (
    <CaseWaveContext.Provider value={graph}>
      {props.children}
    </CaseWaveContext.Provider>
  );
}

export function useCaseWaveGraph(): CaseWaveGraph {
  const graph = useContext(CaseWaveContext);

  if (!graph) {
    throw new Error("useCaseWaveGraph must be used inside CaseWaveProvider.");
  }

  return graph;
}

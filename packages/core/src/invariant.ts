export function invariant(
  condition: unknown,
  message: string
): asserts condition {
  if (!condition) {
    throw new Error(`CaseWave invariant failed: ${message}`);
  }
}

export function warning(
  condition: unknown,
  message: string
): void {
  if (!condition && typeof console !== "undefined") {
    console.warn(`CaseWave warning: ${message}`);
  }
}





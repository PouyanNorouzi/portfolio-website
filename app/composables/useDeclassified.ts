export function useDeclassified() {
  return useState("case-file-declassified", () => false);
}

// Viewport point the declassify wave spreads out from (the button that was pressed).
export function useDeclassifyOrigin() {
  return useState<{ x: number; y: number } | null>("case-file-declassify-origin", () => null);
}

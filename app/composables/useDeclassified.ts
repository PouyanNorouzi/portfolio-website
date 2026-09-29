export function useDeclassified() {
  return useState("case-file-declassified", () => false);
}

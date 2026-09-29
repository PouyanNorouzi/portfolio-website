import { formatCaseFileDates } from "~/utils/constants/case-file";

// The site is prerendered, so the server's timestamp is the build date. It is
// carried through the payload so hydration matches, then swapped for the
// visitor's current date once mounted.
export function useCaseFileDates() {
  const now = useState("case-file-now", () => Date.now());
  onMounted(() => {
    now.value = Date.now();
  });
  return computed(() => formatCaseFileDates(new Date(now.value)));
}

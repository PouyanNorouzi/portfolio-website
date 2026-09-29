import { formatCaseFileDates } from "~/utils/constants/case-file";

export function useCaseFileDates() {
  const now = useNow();
  return computed(() => formatCaseFileDates(new Date(now.value)));
}

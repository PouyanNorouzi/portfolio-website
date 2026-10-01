import { formatCaseFileDates } from "~/utils/constants/case-file";

export function useCaseFileDates() {
  const { now, isLocal } = useNow();
  return computed(() => formatCaseFileDates(new Date(now.value), !isLocal.value));
}

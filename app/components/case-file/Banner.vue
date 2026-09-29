<script setup lang="ts">
import { CASE_FILE_NUMBER } from "~/utils/constants/case-file";
const dates = useCaseFileDates();
const declassified = useDeclassified();
const typed = ref("");

onMounted(() => {
  if (prefersReducedMotion()) {
    typed.value = CASE_FILE_NUMBER;
    return;
  }
  let i = 0;
  const timer = setInterval(() => {
    i++;
    typed.value = CASE_FILE_NUMBER.slice(0, i) + (i < CASE_FILE_NUMBER.length ? "▌" : "");
    if (i >= CASE_FILE_NUMBER.length) clearInterval(timer);
  }, 55);
  onBeforeUnmount(() => clearInterval(timer));
});
</script>

<template>
  <div>
    <CaseFileHazardBanner>CLASSIFIED // EYES ONLY</CaseFileHazardBanner>
    <div class="flex flex-wrap justify-between gap-x-4 gap-y-2 px-6 pt-4">
      <CaseFileLabel class="min-w-[21ch]">{{ typed }}</CaseFileLabel>
      <CaseFileLabel>ASSIGNED AGENT: C.</CaseFileLabel>
      <CaseFileLabel>DATE OF REPORT: {{ dates.report }}</CaseFileLabel>
      <span
        class="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-primary">
        <span class="size-2 rounded-full bg-primary motion-safe:animate-pulse" />
        STATUS: OPEN TO WORK
      </span>
      <Transition enter-active-class="motion-safe:animate-reveal-in">
        <span
          v-if="declassified"
          class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-widest text-error">
          <UIcon name="i-lucide-lock-open" class="size-3.5" />
          CLEARANCE: ELEVATED
        </span>
      </Transition>
    </div>
    <div class="mx-6 mt-3.5 border-t-4 border-double border-default" />
  </div>
</template>

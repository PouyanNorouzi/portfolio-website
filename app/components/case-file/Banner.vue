<script setup lang="ts">
import { CASE_FILE_NUMBER } from "~/utils/constants/case-file";
const dates = useCaseFileDates();
const typed = ref("");

onMounted(() => {
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
    <div
      class="bg-[repeating-linear-gradient(45deg,var(--ui-error)_0_14px,var(--color-neutral-950)_14px_28px)] py-1.5">
      <div
        class="bg-neutral-950 px-5 py-3.5 text-center font-name text-base font-bold tracking-[0.3em] text-neutral-50 motion-safe:animate-banner-in sm:text-xl">
        CLASSIFIED // EYES ONLY
      </div>
    </div>
    <div class="flex flex-wrap justify-between gap-x-4 gap-y-2 px-6 pt-4">
      <CaseFileLabel class="min-w-[21ch]">{{ typed }}</CaseFileLabel>
      <CaseFileLabel>ASSIGNED AGENT: C.</CaseFileLabel>
      <CaseFileLabel>DATE OF REPORT: {{ dates.report }}</CaseFileLabel>
      <span
        class="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-primary">
        <span class="size-2 rounded-full bg-primary motion-safe:animate-pulse" />
        STATUS: OPEN TO WORK
      </span>
    </div>
    <div class="mx-6 mt-3.5 border-t-4 border-double border-default" />
  </div>
</template>

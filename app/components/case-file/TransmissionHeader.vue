<script setup lang="ts">
import { CASE_FILE_ID } from "~/utils/constants/case-file";

const props = defineProps<{ num: number; date: string | Date }>();

// Content dates are stored as UTC midnight, so format in UTC to avoid
// shifting the day for visitors west of Greenwich.
const formatDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const transmissionNumber = computed(() => String(props.num).padStart(3, "0"));
const transmissionDate = computed(() => formatDate.format(new Date(props.date)).toUpperCase());
</script>

<template>
  <div class="mb-6 flex flex-col">
    <div
      class="bg-[repeating-linear-gradient(45deg,var(--ui-error)_0_8px,var(--color-neutral-950)_8px_16px)] py-1">
      <div
        class="bg-neutral-950 px-4 py-2 text-center font-name text-xs font-bold tracking-[0.3em] text-neutral-50 motion-safe:animate-banner-in sm:text-sm">
        INTERCEPTED TRANSMISSION // DECLASSIFIED
      </div>
    </div>
    <div class="flex flex-wrap justify-between gap-x-4 gap-y-2 pt-3.5">
      <CaseFileLabel>TRANSMISSION NO. {{ transmissionNumber }}</CaseFileLabel>
      <CaseFileLabel>DATE: {{ transmissionDate }}</CaseFileLabel>
      <CaseFileLabel>SOURCE: SUBJECT {{ CASE_FILE_ID }}</CaseFileLabel>
    </div>
    <div class="mt-3 border-t-4 border-double border-default" />
  </div>
</template>

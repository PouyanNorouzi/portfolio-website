<script setup lang="ts">
import { CASE_FILE_ID } from "~/utils/constants/case-file";

const props = defineProps<{ num: number; date: string | Date }>();

// Content dates are stored as UTC midnight (the scripts build with TZ=UTC), so format in UTC
// to avoid shifting the day for visitors west of Greenwich.
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
    <CaseFileHazardBanner size="sm">INTERCEPTED TRANSMISSION // DECLASSIFIED</CaseFileHazardBanner>
    <div class="flex flex-wrap justify-between gap-x-4 gap-y-2 pt-3.5">
      <CaseFileLabel>TRANSMISSION NO. {{ transmissionNumber }}</CaseFileLabel>
      <CaseFileLabel>DATE: {{ transmissionDate }}</CaseFileLabel>
      <CaseFileLabel>SOURCE: SUBJECT {{ CASE_FILE_ID }}</CaseFileLabel>
    </div>
    <div class="mt-3 border-t-4 border-double border-default" />
  </div>
</template>

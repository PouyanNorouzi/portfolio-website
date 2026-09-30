<script setup lang="ts">
import { CASE_FILE_NUMBER } from "~/utils/constants/case-file";
const dates = useCaseFileDates();
const declassified = useDeclassified();
</script>

<template>
  <div>
    <div class="flex flex-wrap justify-between gap-x-4 gap-y-2 px-6 pt-4">
      <CaseFileLabel>{{ CASE_FILE_NUMBER }}</CaseFileLabel>
      <CaseFileLabel>ASSIGNED AGENT: C.</CaseFileLabel>
      <CaseFileLabel>DATE OF REPORT: {{ dates.report }}</CaseFileLabel>
      <!-- Declassifying the file swaps the open-to-work status for the raised clearance. -->
      <Transition mode="out-in" enter-active-class="motion-safe:animate-reveal-in">
        <span
          v-if="declassified"
          key="clearance"
          class="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-error">
          <UIcon name="i-lucide-lock-open" class="size-3.5" />
          CLEARANCE: ELEVATED
        </span>
        <span
          v-else
          key="status"
          class="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-primary">
          <span class="size-2 rounded-full bg-primary motion-safe:animate-pulse" />
          STATUS: OPEN TO WORK
        </span>
      </Transition>
    </div>
    <div class="mx-6 mt-3.5 border-t-4 border-double border-default" />
  </div>
</template>

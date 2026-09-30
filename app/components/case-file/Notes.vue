<script setup lang="ts">
import { CASE_FILE_SECTIONS, CASE_FILE_NOTES } from "~/utils/constants/case-file";

// The About page reuses these notes under its own section heading.
const { section = CASE_FILE_SECTIONS[5]! } = defineProps<{ section?: CaseFileSection }>();
</script>

<template>
  <CaseFileSection :section="section">
    <ul class="flex flex-col gap-2.5 leading-relaxed">
      <li
        v-for="note in CASE_FILE_NOTES"
        :key="note"
        class="grid grid-cols-[1.25rem_minmax(0,1fr)]">
        <span class="font-mono text-primary">&gt;</span>
        <span>{{ note }}</span>
      </li>
    </ul>
  </CaseFileSection>
</template>

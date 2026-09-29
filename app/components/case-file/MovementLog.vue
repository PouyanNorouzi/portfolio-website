<script setup lang="ts">
import { CASE_FILE_SECTIONS, CASE_FILE_TIMELINE } from "~/utils/constants/case-file";
</script>

<template>
  <CaseFileSection :section="CASE_FILE_SECTIONS[3]!">
    <div class="flex flex-col gap-2">
      <div
        v-for="entry in CASE_FILE_TIMELINE"
        :key="entry.date"
        class="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 leading-relaxed">
        <strong class="font-mono font-semibold text-primary">{{ entry.date }}</strong>
        <span>{{ entry.event }}</span>
      </div>
    </div>
  </CaseFileSection>
</template>

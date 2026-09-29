<script setup lang="ts">
import {
  CASE_FILE_SECTIONS,
  CASE_FILE_FEATURED_OPERATION,
  CASE_FILE_OPERATIONS,
} from "~/utils/constants/case-file";
</script>

<template>
  <CaseFileSection :section="CASE_FILE_SECTIONS[4]!">
    <CaseFileOperationCard
      :operation="CASE_FILE_FEATURED_OPERATION"
      :exhibit="`${CASE_FILE_SECTIONS[4]!.number}-A`"
      :tilt="-1"
      featured />
    <div class="grid gap-4 md:grid-cols-2">
      <CaseFileOperationCard
        v-for="(operation, index) in CASE_FILE_OPERATIONS"
        :key="operation.project.id"
        :operation="operation"
        :exhibit="`${CASE_FILE_SECTIONS[4]!.number}-${String.fromCharCode(66 + index)}`"
        :tilt="index % 2 ? -1.5 : 1" />
    </div>
    <UButton to="/projects" label="View All Projects" class="self-center" />
  </CaseFileSection>
</template>

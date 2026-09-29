<script setup lang="ts">
import {
  CASE_FILE_SECTIONS,
  CASE_FILE_FEATURED_OPERATION,
  CASE_FILE_OPERATIONS,
} from "~/utils/constants/case-file";
</script>

<template>
  <CaseFileSection :section="CASE_FILE_SECTIONS[4]!">
    <CaseFileOperationCard :operation="CASE_FILE_FEATURED_OPERATION" featured />
    <div class="grid gap-4 md:grid-cols-2">
      <CaseFileOperationCard
        v-for="operation in CASE_FILE_OPERATIONS"
        :key="operation.project.id"
        :operation="operation" />
    </div>
    <UButton to="/projects" label="View All Projects" class="self-center" />
  </CaseFileSection>
</template>

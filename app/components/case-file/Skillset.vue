<script setup lang="ts">
import { CASE_FILE_SECTIONS, CASE_FILE_TOOLS_OF_CHOICE } from "~/utils/constants/case-file";
</script>

<template>
  <CaseFileSection :section="CASE_FILE_SECTIONS[2]!">
    <p class="leading-relaxed text-pretty">
      Subject operates across the full stack, but repeatedly returns to the same equipment.
    </p>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <UCard
        v-for="tool in CASE_FILE_TOOLS_OF_CHOICE"
        :key="tool.skill.id"
        :ui="{ body: 'flex h-full flex-col gap-3' }">
        <div class="flex items-center gap-3">
          <LightDarkIcon :icon="tool.skill.icon" size="3xl" />
          <span class="font-name text-lg font-bold">{{ tool.skill.title }}</span>
        </div>
        <p class="text-sm text-muted">{{ tool.note }}</p>
        <CaseFileSkillMeter :value="tool.skill.proficiency" class="mt-auto" />
      </UCard>
    </div>
    <CaseFileLabel class="border-t border-dashed border-default pt-3.5">
      // FULL EQUIPMENT AUDIT AVAILABLE ON THE
      <ULink to="/about" class="text-primary">ABOUT</ULink>
      FILE
    </CaseFileLabel>
  </CaseFileSection>
</template>

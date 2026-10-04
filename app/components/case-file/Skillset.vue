<script setup lang="ts">
import { CASE_FILE_SECTIONS, CASE_FILE_TOOLS_OF_CHOICE } from "~/utils/constants/case-file";

const MAX_TILT_DEG = 6;

// Cards lean toward the mouse, like a folder being picked up. Touch and reduced motion skip it.
function tilt(event: PointerEvent) {
  if (event.pointerType !== "mouse" || prefersReducedMotion()) return;
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  const rotateX = (-y * 2 * MAX_TILT_DEG).toFixed(2);
  const rotateY = (x * 2 * MAX_TILT_DEG).toFixed(2);
  // Set inline only while hovered, so idle cards carry no 3D transform.
  card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function level(event: PointerEvent) {
  (event.currentTarget as HTMLElement).style.transform = "";
}
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
        class="transition-transform duration-150 ease-out motion-reduce:transition-none"
        :ui="{ body: 'flex h-full flex-col gap-3' }"
        @pointermove="tilt"
        @pointerleave="level">
        <div class="flex items-center gap-3">
          <LightDarkIcon :icon="tool.skill.icon" size="3xl" />
          <span class="font-name text-lg font-bold">{{ tool.skill.title }}</span>
        </div>
        <p class="text-sm text-muted">{{ tool.note }}</p>
        <CaseFileSkillMeter :value="tool.skill.proficiency" class="mt-auto" />
      </UCard>
    </div>
    <CaseFileLabel class="border-t border-dashed border-default pt-3.5">
      // FULL POLYGRAPH RESULTS ON THE
      <ULink to="/about" class="text-primary underline underline-offset-4">ABOUT</ULink>
      FILE
    </CaseFileLabel>
  </CaseFileSection>
</template>

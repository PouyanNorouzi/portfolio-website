<script setup lang="ts">
import { CASE_FILE_SECTIONS, CASE_FILE_TIMELINE } from "~/utils/constants/case-file";

const list = useTemplateRef<HTMLElement>("list");
const pins = useTemplateRef<HTMLElement[]>("pins");

// The red line fills as the reader scrolls, and each pin lights once the line reaches it.
// Until the page is hydrated (and with reduced motion) the whole line is drawn.
const fill = ref(1);
const reached = ref(CASE_FILE_TIMELINE.length);
const animated = ref(false);

function update() {
  if (!list.value) return;
  const trigger = window.innerHeight * 0.6;
  const rect = list.value.getBoundingClientRect();
  fill.value = Math.min(Math.max((trigger - rect.top) / rect.height, 0), 1);
  // Far from the viewport nothing changes, so skip measuring every pin.
  if (rect.bottom < 0 || rect.top > window.innerHeight) {
    reached.value = rect.top > window.innerHeight ? 0 : CASE_FILE_TIMELINE.length;
    return;
  }
  reached.value = (pins.value ?? []).filter((pin) => {
    const box = pin.getBoundingClientRect();
    return box.top + box.height / 2 <= trigger;
  }).length;
}

// Scroll events can fire several times per frame; measure once per frame instead.
let frame: number | undefined;
function schedule() {
  if (frame !== undefined) return;
  frame = requestAnimationFrame(() => {
    frame = undefined;
    update();
  });
}

onMounted(() => {
  if (prefersReducedMotion()) return;
  animated.value = true;
  update();
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
  if (frame !== undefined) cancelAnimationFrame(frame);
});
</script>

<template>
  <CaseFileSection :section="CASE_FILE_SECTIONS[3]!">
    <div ref="list" class="relative flex flex-col gap-5">
      <!-- The rail sits in the middle column of the entry grid: 5.5rem date + 1rem gap + half of the 1rem rail. -->
      <div
        aria-hidden="true"
        class="absolute inset-y-0 left-[7rem] w-0.5 -translate-x-1/2 bg-accented" />
      <div
        aria-hidden="true"
        class="absolute inset-y-0 left-[7rem] w-0.5 origin-top -translate-x-1/2 bg-error shadow-[0_0_8px_var(--ui-error)] transition-[scale] duration-150 ease-out motion-reduce:transition-none"
        :style="{ scale: `1 ${fill}` }" />
      <div
        v-for="(entry, index) in CASE_FILE_TIMELINE"
        :key="entry.date"
        class="grid grid-cols-[5.5rem_1rem_minmax(0,1fr)] items-start gap-x-4 leading-relaxed">
        <strong
          class="font-mono font-semibold transition-colors duration-300"
          :class="!animated || index < reached ? 'text-primary' : 'text-muted'">
          {{ entry.date }}
        </strong>
        <span
          ref="pins"
          aria-hidden="true"
          class="relative z-10 mt-2 size-3 justify-self-center rounded-full border-2 transition-[background-color,border-color,box-shadow] duration-300"
          :class="
            !animated || index < reached
              ? 'border-error bg-error shadow-[0_0_10px_var(--ui-error)]'
              : 'border-accented bg-default'
          " />
        <span
          class="transition-[opacity,translate] duration-500"
          :class="!animated || index < reached ? '' : 'translate-x-2 opacity-50'">
          {{ entry.event }}
        </span>
      </div>
    </div>
  </CaseFileSection>
</template>

<script setup lang="ts">
import { CASE_FILE_DECLASSIFIED_FACT } from "~/utils/constants/case-file";
const declassified = useDeclassified();

const OPEN_LABEL = "▸ DECLASSIFY FULL FILE";
const CLOSE_LABEL = "▾ RESEAL FILE";
const GLYPHS = "█▓▒░#%&@$01<>/\\";

const label = ref(OPEN_LABEL);
let timer: ReturnType<typeof setInterval> | undefined;

function toggle() {
  declassified.value = !declassified.value;
  const target = declassified.value ? CLOSE_LABEL : OPEN_LABEL;
  if (prefersReducedMotion()) {
    label.value = target;
    return;
  }
  const total = 14;
  let frame = 0;
  clearInterval(timer);
  timer = setInterval(() => {
    frame++;
    if (frame >= total) {
      clearInterval(timer);
      label.value = target;
      return;
    }
    const done = Math.floor((frame / total) * target.length);
    label.value = [...target]
      .map((ch, i) =>
        i < done || ch === " " ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      )
      .join("");
  }, 40);
}

onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <section class="flex flex-col items-center gap-3.5 text-center">
    <UButton
      :label="label"
      :color="declassified ? 'error' : 'neutral'"
      variant="outline"
      size="lg"
      class="min-w-72 justify-center font-mono font-semibold tracking-widest"
      @click="toggle" />
    <div
      class="grid transition-[grid-template-rows] duration-700 ease-in-out"
      :class="declassified ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      :inert="!declassified">
      <div class="min-h-0 overflow-hidden">
        <div
          class="relative max-w-xl rounded-lg border border-dashed border-primary px-4 py-3 text-left leading-relaxed"
          :class="declassified ? 'motion-safe:animate-reveal-down' : 'opacity-0'">
          <span
            v-if="declassified"
            class="pointer-events-none absolute inset-x-0 h-[3px] bg-primary shadow-[0_0_12px_var(--ui-primary)] motion-safe:animate-scan-down" />
          <span class="block font-mono text-xs tracking-widest text-primary">
            DECLASSIFIED FRAGMENT
          </span>
          {{ CASE_FILE_DECLASSIFIED_FACT }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CASE_FILE_DECLASSIFIED_FACT } from "~/utils/constants/case-file";
const declassified = useDeclassified();

const OPEN_LABEL = "▸ DECLASSIFY FULL FILE";
const CLOSE_LABEL = "▾ RESEAL FILE";

const GLITCH_MS = 600;

const origin = useDeclassifyOrigin();
// The file stays declassified across pages, so the label starts from that state.
const { text: label, run } = useScramble(declassified.value ? CLOSE_LABEL : OPEN_LABEL);
const fragmentId = useId();
const glitching = ref(false);
let glitchTimer: ReturnType<typeof setTimeout> | undefined;

function toggle(event: MouseEvent) {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  origin.value = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  declassified.value = !declassified.value;
  run(declassified.value ? CLOSE_LABEL : OPEN_LABEL);

  if (declassified.value && !prefersReducedMotion()) {
    clearTimeout(glitchTimer);
    glitching.value = true;
    glitchTimer = setTimeout(() => (glitching.value = false), GLITCH_MS);
  }
}

onBeforeUnmount(() => clearTimeout(glitchTimer));
</script>

<template>
  <section class="flex flex-col items-center gap-3.5 text-center">
    <Teleport to="body">
      <div
        v-if="glitching"
        aria-hidden="true"
        class="pointer-events-none fixed inset-0 z-90 bg-[repeating-linear-gradient(0deg,color-mix(in_oklab,var(--ui-primary)_18%,transparent)_0_2px,transparent_2px_5px)] animate-glitch" />
    </Teleport>
    <UButton
      :label="label"
      :aria-label="declassified ? 'Reseal file' : 'Declassify full file'"
      :aria-expanded="declassified"
      :aria-controls="fragmentId"
      :color="declassified ? 'error' : 'neutral'"
      variant="outline"
      size="lg"
      class="min-w-72 justify-center font-mono font-semibold tracking-widest"
      @click="toggle" />
    <div
      :id="fragmentId"
      class="grid transition-[grid-template-rows] duration-700 ease-in-out motion-reduce:transition-none"
      :class="declassified ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
      :inert="!declassified">
      <div class="min-h-0 overflow-hidden">
        <div
          class="relative max-w-xl rounded-lg border border-dashed border-primary px-4 py-3 text-left leading-relaxed"
          :class="declassified ? 'motion-safe:animate-reveal-down' : 'opacity-0'">
          <span
            v-if="declassified"
            class="pointer-events-none absolute inset-0 motion-safe:animate-scan-down">
            <span
              class="absolute inset-x-0 top-0 h-[3px] bg-primary shadow-[0_0_12px_var(--ui-primary)]" />
          </span>
          <span class="block font-mono text-xs tracking-widest text-primary">
            DECLASSIFIED FRAGMENT
          </span>
          {{ CASE_FILE_DECLASSIFIED_FACT }}
        </div>
      </div>
    </div>
  </section>
</template>

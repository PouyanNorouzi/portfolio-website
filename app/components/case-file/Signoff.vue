<script setup lang="ts">
import { SIGNATURE_GLYPHS, SIGNATURE_VIEWBOX } from "~/utils/constants/signature";
const dates = useCaseFileDates();
const { element, isVisible } = useInView({ threshold: 0.8 });

// Each letter starts this long after the previous one. The stamp waits for the pen to lift.
const LETTER_DELAY_S = 0.18;
const SIGNED_S = (SIGNATURE_GLYPHS.length - 1) * LETTER_DELAY_S + 0.85;
</script>

<template>
  <section
    class="flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-t-4 border-double border-default pt-7">
    <div class="flex flex-col gap-1">
      <svg
        ref="element"
        role="img"
        aria-label="Agent C."
        :viewBox="SIGNATURE_VIEWBOX"
        class="h-9 w-auto -rotate-3 origin-bottom-left self-start fill-current stroke-current stroke-[0.6] text-highlighted [stroke-dasharray:1]"
        :class="{ 'motion-safe:opacity-0': !isVisible }">
        <path
          v-for="(d, index) in SIGNATURE_GLYPHS"
          :key="index"
          :d="d"
          pathLength="1"
          :class="{ 'motion-safe:animate-sign': isVisible }"
          :style="{ '--sign-delay': `${index * LETTER_DELAY_S}s` }" />
      </svg>
      <span
        class="mt-1 w-48 origin-left border-t border-muted transition-transform delay-1500 duration-500"
        :class="{ 'motion-safe:scale-x-0': !isVisible }" />
      <CaseFileLabel>REVIEWING AGENT · FIELD OFFICE BC</CaseFileLabel>
    </div>
    <CaseFileStamp
      :tilt="6"
      :delay="SIGNED_S"
      class="border-double px-4 py-2 text-center font-name text-xl leading-tight font-bold tracking-widest">
      FILE CLOSED
      <span class="block font-mono text-xs font-normal tracking-widest">{{ dates.stamp }}</span>
    </CaseFileStamp>
    <div class="flex flex-col items-end gap-1">
      <div
        aria-hidden="true"
        class="h-11 w-48 bg-[repeating-linear-gradient(90deg,var(--ui-text-highlighted)_0_2px,transparent_2px_4px,var(--ui-text-highlighted)_4px_5px,transparent_5px_8px,var(--ui-text-highlighted)_8px_11px,transparent_11px_12px,var(--ui-text-highlighted)_12px_13px,transparent_13px_16px)]" />
      <span class="font-mono text-xs tracking-[0.25em] text-muted">{{ dates.barcode }}</span>
    </div>
  </section>
</template>

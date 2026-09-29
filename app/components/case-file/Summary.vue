<script setup lang="ts">
import { CASE_FILE_SECTIONS } from "~/utils/constants/case-file";

// The margin note's arrow points at the redaction from directly below it. That only
// works while the redaction is on the paragraph's last line, so the note is measured
// and hidden whenever the text wraps differently (e.g. on narrow screens).
const NOTE_WIDTH_PX = 260;

const paragraph = useTemplateRef<HTMLElement>("paragraph");
const redaction = useTemplateRef<ComponentPublicInstance>("redaction");
const arrowX = ref<number | null>(null);

function measure() {
  const box = paragraph.value?.getBoundingClientRect();
  const rects = (redaction.value?.$el as HTMLElement | undefined)?.getClientRects();
  const target = rects?.[rects.length - 1];
  if (!box || !target) return;
  const x = target.left + target.width / 2 - box.left;
  const onLastLine = target.bottom >= box.bottom - 4;
  arrowX.value = onLastLine && x < box.width - NOTE_WIDTH_PX ? x : null;
}

onMounted(() => {
  measure();
  const observer = new ResizeObserver(measure);
  if (paragraph.value) observer.observe(paragraph.value);
  document.fonts.ready.then(measure);
  onBeforeUnmount(() => observer.disconnect());
});
</script>

<template>
  <CaseFileSection :section="CASE_FILE_SECTIONS[0]!">
    <p ref="paragraph" class="leading-relaxed text-pretty">
      Subject graduated from BCIT in December 2025 with a
      <CaseFileHighlight>Computer Systems Diploma</CaseFileHighlight>, specializing in
      <CaseFileHighlight>cloud computing</CaseFileHighlight>. Training combined theoretical
      foundations with practical field work across the full development stack. Now builds software
      after hours, most notably
      <CaseFileRedacted ref="redaction">a complete database engine in C</CaseFileRedacted>, instead
      of installing one.
    </p>
    <!-- Handwritten margin note with an arrow whose tip touches the redaction above. -->
    <div
      v-if="arrowX !== null"
      aria-hidden="true"
      class="relative -mt-2 h-14 font-hand text-xl leading-tight text-tertiary-700 dark:text-tertiary-300">
      <svg
        viewBox="0 0 32 44"
        class="absolute top-0 h-11 w-8 -translate-x-1 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
        :style="{ left: `${arrowX}px` }">
        <path d="M28 42 C 30 24, 20 12, 5 4" />
        <path d="M3 14 L 4 3 L 15 6" />
      </svg>
      <span
        class="absolute top-4 -rotate-2 whitespace-nowrap"
        :style="{ left: `${arrowX + 34}px` }">
        the database. ask him about it. -C.
      </span>
    </div>
    <CaseFileLabel>// HOVER OR TAP REDACTED LINES TO REVEAL</CaseFileLabel>
  </CaseFileSection>
</template>

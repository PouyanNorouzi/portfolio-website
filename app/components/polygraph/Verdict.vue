<script setup lang="ts">
// The examiner's verdict, handwritten in red pen. DECEPTIVE gets circled.
const props = defineProps<{
  verdict: PolygraphVerdict;
  // Only the mark is shown; the word stays for screen readers.
  compact?: boolean;
}>();

// Icons rather than characters: the handwriting font has no check or cross glyphs.
const MARKS: Record<PolygraphVerdict, string> = {
  TRUTHFUL: "i-lucide-check",
  PROBABLE: "i-lucide-equal-approximately",
  INCONCLUSIVE: "i-lucide-badge-question-mark",
  DECEPTIVE: "i-lucide-x",
};

const mark = computed(() => MARKS[props.verdict]);
</script>

<template>
  <span
    class="inline-flex shrink-0 items-center gap-1 font-hand leading-none whitespace-nowrap text-(--pen-cardio)"
    :class="[
      compact ? 'text-lg' : 'text-xl',
      verdict === 'DECEPTIVE'
        ? '-rotate-6 rounded-[50%] border-2 border-(--pen-cardio) px-2.5 py-1 font-bold'
        : '-rotate-2',
    ]">
    <UIcon :name="mark" aria-hidden="true" class="size-4 shrink-0" />
    <span :class="compact && 'sr-only'">{{ verdict.toLowerCase() }}</span>
  </span>
</template>

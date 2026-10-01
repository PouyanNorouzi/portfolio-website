<script setup lang="ts">
// The bar fills and the percentage counts up once, when the card scrolls into view.
// Until then (and with reduced motion) it shows the final value.
const { value } = defineProps<{ value: number }>();

const FILL_MS = 1100;

const shown = ref(value);
const { element, isVisible } = useInView({ threshold: 0.6 });
let frame: number | undefined;

onMounted(() => {
  if (!prefersReducedMotion()) shown.value = 0;
});

watch(isVisible, (visible) => {
  if (!visible || prefersReducedMotion()) return;
  const start = performance.now();
  const tick = (now: number) => {
    // The first frame's timestamp can be slightly earlier than `start`, so clamp at 0.
    const t = Math.min(Math.max(0, (now - start) / FILL_MS), 1);
    shown.value = value * (1 - (1 - t) ** 3);
    if (t < 1) frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
});

onBeforeUnmount(() => cancelAnimationFrame(frame!));
</script>

<template>
  <div ref="element" class="flex flex-col gap-1">
    <div class="flex justify-between">
      <CaseFileLabel>CLEARANCE</CaseFileLabel>
      <CaseFileLabel class="text-primary">{{ Math.round(shown * 100) }}%</CaseFileLabel>
    </div>
    <UProgress :model-value="shown" :max="1" size="xs" />
  </div>
</template>

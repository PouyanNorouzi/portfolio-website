<script setup lang="ts">
import type { TraceSpike } from "~/utils/polygraphTrace";

// One row's stretch of the three polygraph pens, filling the margin cell it sits in. The paths
// need real pixel sizes, so until the cell is measured (SSR, first client render) the pens are
// straight lines at their channel centers. Once in view the ink draws down the paper; with
// reduced motion it is simply there.
const { seed, spikes = [] } = defineProps<{ seed: number; spikes?: TraceSpike[] }>();

const CHANNELS = ["16.667%", "50%", "83.333%"];

const { element, isVisible } = useInView({ threshold: 0.1 });
const size = ref<{ width: number; height: number } | null>(null);
const drawn = ref(false);

const paths = computed(() =>
  size.value ? tracePaths(seed, size.value.width, size.value.height, spikes) : []
);

let observer: ResizeObserver | undefined;
let frame: number | undefined;

onMounted(() => {
  observer = new ResizeObserver(([entry]) => {
    if (!entry) return;
    const width = Math.round(entry.contentRect.width);
    const height = Math.round(entry.contentRect.height);
    if (size.value?.width !== width || size.value?.height !== height)
      size.value = { width, height };
  });
  if (element.value) observer.observe(element.value);
});

// Wait a couple of frames after both are ready so the hidden paths are painted before the
// dash offset transitions away.
watch([isVisible, size], ([visible, measured]) => {
  if (!visible || !measured || drawn.value || frame !== undefined) return;
  frame = requestAnimationFrame(() => {
    frame = requestAnimationFrame(() => (drawn.value = true));
  });
});

onBeforeUnmount(() => {
  observer?.disconnect();
  if (frame !== undefined) cancelAnimationFrame(frame);
});

const inkClass = computed(() => [
  "[stroke-dasharray:1] motion-safe:transition-[stroke-dashoffset] motion-safe:duration-900 motion-safe:ease-out",
  drawn.value ? "" : "motion-safe:[stroke-dashoffset:1]",
]);
</script>

<template>
  <div ref="element" class="pointer-events-none absolute inset-0" aria-hidden="true">
    <svg
      v-if="size"
      class="size-full"
      :viewBox="`0 0 ${size.width} ${size.height}`"
      fill="none"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path
        v-for="(d, index) in paths"
        :key="TRACE_PENS[index]"
        :d="d"
        pathLength="1"
        :class="inkClass"
        :style="{ stroke: `var(--pen-${TRACE_PENS[index]})` }" />
    </svg>
    <svg
      v-else
      class="size-full"
      fill="none"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round">
      <line
        v-for="(x, index) in CHANNELS"
        :key="TRACE_PENS[index]"
        :x1="x"
        y1="0"
        :x2="x"
        y2="100%"
        pathLength="1"
        :class="inkClass"
        :style="{ stroke: `var(--pen-${TRACE_PENS[index]})` }" />
    </svg>
  </div>
</template>

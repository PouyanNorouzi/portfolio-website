<script setup lang="ts">
import type { TraceSpike } from "~/utils/polygraphTrace";

// One row of the chart: its stretch of pen trace in the margin, and the printed content beside it.
// Every row shares the margin width so the trace segments join into continuous pens.
defineProps<{
  seed: number;
  spikes?: TraceSpike[];
  // Hand the trace's draw timing to the row (see Trace.vue).
  start?: boolean;
  duration?: number;
}>();
</script>

<template>
  <div class="relative grid grid-cols-[2.25rem_minmax(0,1fr)] sm:grid-cols-[5rem_minmax(0,1fr)]">
    <div class="relative">
      <PolygraphTrace :seed="seed" :spikes="spikes" :start="start" :duration="duration" />
    </div>
    <slot />
  </div>
</template>

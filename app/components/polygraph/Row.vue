<script setup lang="ts">
import type { TraceSpike } from "~/utils/polygraphTrace";

// One row of the chart: its stretch of pen trace in the margin, and the printed content beside it.
// Every row shares the margin width so the trace segments join into continuous pens.
defineProps<{
  seed: number;
  spikes?: TraceSpike[];
}>();
</script>

<template>
  <div class="relative grid grid-cols-[2.25rem_minmax(0,1fr)] sm:grid-cols-[5rem_minmax(0,1fr)]">
    <div class="relative">
      <PolygraphTrace :seed="seed" :spikes="spikes" />
    </div>
    <slot />
  </div>
</template>

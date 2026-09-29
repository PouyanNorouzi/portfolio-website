<script setup lang="ts">
// Either wrap inline content in the slot, or pass `lines` for a multi-line block.
// For `lines`, `hidden` is text of the same shape as the real content. It is never
// visible; it only sizes each bar so every hidden line has its own realistic length.
// `shown` is what that line reads once revealed.
defineProps<{ lines?: { hidden: string; shown: string }[] }>();

const declassified = useDeclassified();
const hovered = ref(false);
const revealed = computed(() => declassified.value || hovered.value);
</script>

<template>
  <span
    v-if="lines"
    class="inline-flex cursor-help flex-col items-start gap-1"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @click="hovered = !hovered">
    <span
      v-for="line in lines"
      :key="line.hidden"
      class="relative inline-grid rounded-sm px-1 outline-1 outline-dashed transition-colors duration-300"
      :class="revealed ? 'outline-error' : 'outline-transparent'">
      <span aria-hidden="true" class="invisible col-start-1 row-start-1 whitespace-nowrap">
        {{ line.hidden }}
      </span>
      <span class="col-start-1 row-start-1 text-center whitespace-nowrap">{{ line.shown }}</span>
      <span
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 origin-right rounded-sm bg-inverted transition-transform duration-500 ease-in-out"
        :class="revealed ? 'scale-x-0' : 'scale-x-100'" />
    </span>
  </span>
  <span
    v-else
    class="relative inline-block cursor-help rounded-sm px-1 outline-1 outline-dashed transition-colors duration-300"
    :class="revealed ? 'outline-error' : 'outline-transparent'"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @click="hovered = !hovered">
    <slot />
    <span
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 origin-right rounded-sm bg-inverted transition-transform duration-500 ease-in-out"
      :class="revealed ? 'scale-x-0' : 'scale-x-100'" />
  </span>
</template>

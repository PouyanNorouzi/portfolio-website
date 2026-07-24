<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});
</script>

<template>
  <img
    :src="src"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
    class="rounded-md will-change-transform cursor-zoom-in" />
</template>

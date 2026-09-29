<script setup lang="ts">
// A highlighter pen sweeping across the text once it scrolls into view. Without motion
// the highlight is simply there.
const { element, isVisible } = useInView({ threshold: 1 });
</script>

<template>
  <span
    ref="element"
    class="bg-linear-to-r from-tertiary-400/40 to-tertiary-400/40 bg-bottom-left bg-no-repeat box-decoration-clone px-0.5 transition-[background-size] duration-1000 ease-out motion-reduce:transition-none"
    :class="
      isVisible ? 'bg-size-[100%_100%]' : 'bg-size-[0%_100%] motion-reduce:bg-size-[100%_100%]'
    ">
    <slot />
  </span>
</template>

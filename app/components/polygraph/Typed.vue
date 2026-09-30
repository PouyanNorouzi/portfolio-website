<script setup lang="ts">
// Text mid-typing. The untyped rest is still in the DOM but transparent, so lines wrap where
// they will end up and screen readers get the whole sentence.
defineProps<{
  text: string;
  typed: number;
  caret?: boolean;
}>();
</script>

<template>
  <span>{{ text.slice(0, typed) }}</span>
  <span v-if="caret" aria-hidden="true" class="relative inline-block w-0 align-text-bottom">
    <span
      class="absolute bottom-0 left-0 h-[1.15em] w-[0.55ch] motion-safe:animate-pulse bg-current" />
  </span>
  <span class="motion-safe:text-transparent">{{ text.slice(typed) }}</span>
</template>

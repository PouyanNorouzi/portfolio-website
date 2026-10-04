<script setup lang="ts">
// Text mid-typing. The untyped rest is still in the DOM but transparent, so lines wrap where
// they will end up and screen readers get the whole sentence.
// `redact` blacks out what has been typed so far, so the bar grows with the typing instead of
// sitting over text that hasn't appeared yet.
defineProps<{
  text: string;
  typed: number;
  caret?: boolean;
  redact?: boolean;
}>();
</script>

<template>
  <CaseFileRedacted v-if="redact && typed > 0">
    <span>{{ text.slice(0, typed) }}</span>
  </CaseFileRedacted>
  <span v-else>{{ text.slice(0, typed) }}</span>
  <span v-if="caret" aria-hidden="true" class="relative inline-block w-0 align-text-bottom">
    <span
      class="absolute bottom-0 left-0 h-[1.15em] w-[0.55ch] motion-safe:animate-pulse bg-current" />
  </span>
  <span class="motion-safe:text-transparent">{{ text.slice(typed) }}</span>
</template>

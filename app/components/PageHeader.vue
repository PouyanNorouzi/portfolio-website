<script setup lang="ts">
defineProps<{
  title?: string;
  label?: string;
  // Uses the regular body font instead of the display font. Only blog post titles use it:
  // they are long, while every top-level section keeps the display face.
  plain?: boolean;
}>();
</script>

<template>
  <header class="flex flex-col items-center gap-2.5 py-6 text-center">
    <CaseFileLabel v-if="label">{{ label }}</CaseFileLabel>
    <h1
      class="text-3xl font-bold text-balance wrap-break-word text-highlighted md:text-4xl"
      :class="plain ? 'font-sans' : 'font-name tracking-widest uppercase'">
      <slot>{{ title }}</slot>
    </h1>
    <div aria-hidden="true" class="flex w-full max-w-sm items-center gap-3 pt-1">
      <span class="flex-1 border-t-4 border-double border-default" />
      <span class="size-2 rotate-45 bg-primary" />
      <span class="flex-1 border-t-4 border-double border-default" />
    </div>
  </header>
</template>

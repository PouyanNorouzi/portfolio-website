<script setup lang="ts">
defineProps<{
  title?: string;
  number?: string;
  label?: string;
}>();
</script>

<template>
  <header class="flex flex-col items-center gap-2.5 py-6 text-center">
    <CaseFileLabel v-if="label">{{ label }}</CaseFileLabel>
    <h1
      class="font-name text-3xl font-bold tracking-widest text-balance wrap-break-word text-highlighted uppercase md:text-4xl">
      <span v-if="number" class="mr-[0.5ch] font-mono font-normal tracking-wider text-primary">
        {{ number }} /
      </span>
      <slot>{{ title }}</slot>
    </h1>
    <div aria-hidden="true" class="flex w-full max-w-sm items-center gap-3 pt-1">
      <span class="flex-1 border-t-4 border-double border-default" />
      <span class="size-2 rotate-45 bg-primary" />
      <span class="flex-1 border-t-4 border-double border-default" />
    </div>
  </header>
</template>

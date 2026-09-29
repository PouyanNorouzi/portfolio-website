<script setup lang="ts">
defineProps<{ section: CaseFileSection }>();
</script>

<template>
  <section class="flex flex-col gap-4">
    <h2
      :id="section.id"
      class="scroll-mt-24 text-center font-name text-2xl font-bold tracking-widest text-highlighted uppercase md:text-3xl">
      <span class="font-mono font-normal tracking-wider text-primary">{{ section.number }} /</span>
      {{ section.title }}
    </h2>
    <slot />
  </section>
</template>

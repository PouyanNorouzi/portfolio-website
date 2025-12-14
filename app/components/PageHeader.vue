<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
<div class="text-center py-5">
  <h1 class="text-4xl md:text-5xl font-bold mb-3">
    <slot>{{ title }}</slot>
  </h1>
  <div class="w-20 h-1 bg-primary mx-auto" />
</div>
</template>

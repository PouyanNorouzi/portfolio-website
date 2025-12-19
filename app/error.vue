<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <UApp>
    <AppHeader />
    <UError :clear="{ class: 'rounded-full', icon: 'i-lucide-arrow-left' }" :error="error" />
    <AppFooter />
  </UApp>
</template>

<script setup lang="ts">
useHead({
  title: "Pouyan - Home",
});

definePageMeta({
  middleware: ["transition"],
});
</script>

<template>
  <div>
    <IndexHero />
    <IndexOverview />
  </div>
</template>

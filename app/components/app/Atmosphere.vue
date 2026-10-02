<!-- Fixed layers behind the page that set the dark-mode mood: a vignette, scanlines and a slow
     sweep line (desktop only). They sit behind the content so they only show between the cards and never dim
     text. Light mode's paper grain is part of the body and card backgrounds (see main.css). -->
<script setup lang="ts">
// The sweep is skipped on touch devices (pointer-fine below) and paused while the tab is hidden.
const tabHidden = ref(false);

function syncVisibility() {
  tabHidden.value = document.hidden;
}

onMounted(() => {
  syncVisibility();
  document.addEventListener("visibilitychange", syncVisibility);
});

onBeforeUnmount(() => document.removeEventListener("visibilitychange", syncVisibility));
</script>

<template>
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden dark:block">
    <div
      class="absolute inset-0 bg-[repeating-linear-gradient(transparent_0_2px,rgb(0_0_0/0.1)_2px_3px)]" />
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(0_0_0/0.45))]" />
    <div
      class="absolute inset-x-0 top-0 hidden h-40 bg-linear-to-b from-transparent via-primary/4 to-transparent motion-safe:pointer-fine:block motion-safe:animate-sweep"
      :class="{ '[animation-play-state:paused]': tabHidden }" />
  </div>
</template>

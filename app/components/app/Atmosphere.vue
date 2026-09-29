<!-- Fixed layers over the page that set the mood: paper grain in light mode, and
     scanlines and a vignette in dark mode, plus a slow sweep line behind the page. -->
<template>
  <div aria-hidden="true" class="pointer-events-none fixed inset-0 z-40 overflow-hidden">
    <div class="absolute inset-0 bg-(image:--paper-grain) opacity-40 dark:hidden" />
    <div class="hidden dark:block">
      <div
        class="absolute inset-0 bg-[repeating-linear-gradient(transparent_0_2px,rgb(0_0_0/0.06)_2px_3px)]" />
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(0_0_0/0.45))]" />
    </div>
  </div>
  <!-- The sweep band sits behind the page, so it only shows between the cards. -->
  <div
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden dark:block">
    <div
      class="absolute inset-x-0 top-0 hidden h-40 bg-linear-to-b from-transparent via-primary/4 to-transparent motion-safe:block motion-safe:animate-sweep" />
  </div>
</template>

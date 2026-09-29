<script setup lang="ts">
const { section } = defineProps<{ section: CaseFileSection }>();

// Letters and digits keep the heading font, so the scrambled title stays about as wide as the real one.
const { text: title, run } = useScramble(section.title, {
  glyphs: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/",
  frames: 20,
});
const { element, isVisible } = useInView({ threshold: 0.6 });
watch(isVisible, (visible) => visible && run(section.title));
</script>

<template>
  <section class="flex flex-col gap-4">
    <h2
      :id="section.id"
      ref="element"
      class="scroll-mt-24 text-center font-name text-2xl font-bold tracking-widest text-highlighted uppercase md:text-3xl">
      <span class="font-mono font-normal tracking-wider text-primary">{{ section.number }} /</span>
      <span class="sr-only">{{ section.title }}</span>
      <!-- The invisible copy holds the real title's size while the visible one scrambles. -->
      <span aria-hidden="true" class="ml-[0.3em] inline-grid">
        <span class="invisible col-start-1 row-start-1">{{ section.title }}</span>
        <span class="col-start-1 row-start-1">{{ title }}</span>
      </span>
    </h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
const { section } = defineProps<{ section: CaseFileSection }>();

// Letters and digits keep the heading font, so the scrambled title stays about as wide as the real one.
const { text: title, run } = useScramble(section.title, {
  glyphs: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/",
  frames: 20,
});
const { element, isVisible } = useInView({ threshold: 0.6 });
const words = computed(() => {
  let start = 0;
  return section.title.split(" ").map((text) => {
    const word = { text, start };
    start += [...text].length + 1;
    return word;
  });
});
watch(isVisible, (visible) => visible && run(section.title));
</script>

<template>
  <section class="flex flex-col gap-4">
    <h2
      :id="section.id"
      ref="element"
      class="scroll-mt-24 text-center font-name text-2xl font-bold tracking-widest text-highlighted uppercase md:text-3xl">
      <span class="hidden font-mono font-normal tracking-wider text-primary sm:inline">{{ section.number }} /</span>
      <span class="sr-only">{{ section.title }}</span>
      <!-- Each letter is sized by its real character while the visible one scrambles, and words never break, so the title wraps exactly like the real one. -->
      <span aria-hidden="true" class="sm:ml-[0.3em]">
        <template v-for="(word, w) in words" :key="w">
          <template v-if="w > 0">{{ " " }}</template>
          <span class="whitespace-nowrap">
            <span v-for="(char, c) in [...word.text]" :key="c" class="inline-grid">
              <span class="invisible col-start-1 row-start-1">{{ char }}</span>
              <span class="col-start-1 row-start-1">{{ [...title][word.start + c] }}</span>
            </span>
          </span>
        </template>
      </span>
    </h2>
    <slot />
  </section>
</template>

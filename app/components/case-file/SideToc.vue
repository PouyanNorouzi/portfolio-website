<script setup lang="ts">
import { CASE_FILE_SECTIONS } from "~/utils/constants/case-file";
const active = ref(CASE_FILE_SECTIONS[0]!.id);

function onScroll() {
  let current = CASE_FILE_SECTIONS[0]!.id;
  for (const section of CASE_FILE_SECTIONS) {
    const el = document.getElementById(section.id);
    if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = section.id;
  }
  active.value = current;
}

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <nav
    aria-label="Case file sections"
    class="fixed top-1/2 left-6 z-20 hidden -translate-y-1/2 flex-col gap-0.5 border-l border-default min-[1340px]:flex">
    <button
      v-for="section in CASE_FILE_SECTIONS"
      :key="section.id"
      type="button"
      class="-ml-px flex cursor-pointer items-baseline gap-2 border-l-2 px-3 py-1.5 text-left font-mono text-xs tracking-widest uppercase transition-colors hover:text-primary"
      :class="
        active === section.id ? 'border-primary text-primary' : 'border-transparent text-muted'
      "
      @click="go(section.id)">
      <span>{{ section.number }}</span>
      <span>{{ section.tocLabel }}</span>
    </button>
  </nav>
</template>

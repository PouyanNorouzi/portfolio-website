<script setup lang="ts">
import { CASE_FILE_SECTIONS } from "~/utils/constants/case-file";
const active = ref(CASE_FILE_SECTIONS[0]!.id);
const progress = ref(0);

// Scroll events can fire several times per frame; measure once per frame instead.
let frame: number | undefined;
function onScroll() {
  if (frame !== undefined) return;
  frame = requestAnimationFrame(() => {
    frame = undefined;
    measure();
  });
}

function measure() {
  let current = CASE_FILE_SECTIONS[0]!.id;
  for (const section of CASE_FILE_SECTIONS) {
    const el = document.getElementById(section.id);
    if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = section.id;
  }
  active.value = current;

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.value = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
}

function go(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  measure();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  if (frame !== undefined) cancelAnimationFrame(frame);
});
</script>

<template>
  <nav
    aria-label="Case file sections"
    class="fixed top-1/2 left-6 z-20 hidden -translate-y-1/2 flex-col gap-0.5 border-l border-default min-[1340px]:flex">
    <!-- Reading progress: fills the nav's left border as the page is scrolled. -->
    <span
      aria-hidden="true"
      class="pointer-events-none absolute top-0 -left-px w-px bg-primary shadow-[0_0_6px_var(--ui-primary)]"
      :style="{ height: `${progress * 100}%` }" />
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

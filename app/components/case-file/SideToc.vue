<script setup lang="ts">
import { CASE_FILE_SECTIONS } from "~/utils/constants/case-file";
const active = ref(CASE_FILE_SECTIONS[0]!.id);
const progress = ref(0);

// Section tops (in document coordinates) and the scrollable height are measured only when the
// layout changes, so a scroll frame is just arithmetic on scrollY with no layout reads.
let tops: number[] = [];
let scrollable = 0;

function measureLayout() {
  tops = CASE_FILE_SECTIONS.map((section) => {
    const el = document.getElementById(section.id);
    return el ? el.getBoundingClientRect().top + window.scrollY : Number.POSITIVE_INFINITY;
  });
  scrollable = document.documentElement.scrollHeight - window.innerHeight;
  update();
}

function update() {
  const y = window.scrollY;
  const line = window.innerHeight * 0.4;
  let current = CASE_FILE_SECTIONS[0]!.id;
  CASE_FILE_SECTIONS.forEach((section, index) => {
    if (tops[index]! - y < line) current = section.id;
  });
  active.value = current;
  progress.value = scrollable > 0 ? Math.min(Math.max(y / scrollable, 0), 1) : 0;
}

// Scroll events can fire several times per frame; update once per frame instead.
let frame: number | undefined;
function onScroll() {
  if (frame !== undefined) return;
  frame = requestAnimationFrame(() => {
    frame = undefined;
    update();
  });
}

function go(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

// The document's height changes as sections reveal or fonts load, and its width on resize;
// either can move the sections, so measure again then.
let resizeObserver: ResizeObserver | undefined;

// A page transition (a slide and tilt in light mode) moves the sections while it plays, which
// would bake an offset into the measured tops; the document size doesn't change when it ends,
// so measure again then.
const nuxtApp = useNuxtApp();
let stopTransitionHook: (() => void) | undefined;

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  resizeObserver = new ResizeObserver(measureLayout);
  resizeObserver.observe(document.documentElement);
  stopTransitionHook = nuxtApp.hook("page:transition:finish", measureLayout);
  measureLayout();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  resizeObserver?.disconnect();
  stopTransitionHook?.();
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
      :aria-current="active === section.id ? 'location' : undefined"
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

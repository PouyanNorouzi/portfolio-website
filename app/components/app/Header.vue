<script setup lang="ts">
import { CASE_FILE_ID } from "~/utils/constants/case-file";
import { NAV_PAGES, getSectionIndex } from "~/utils/constants/pages";

const route = useRoute();
const colorMode = useColorMode();
const declassified = useDeclassified();

const activeIndex = computed(() => getSectionIndex(route.path));
const pageCount = String(NAV_PAGES.length).padStart(2, "0");
const pageNumber = computed(() => NAV_PAGES[activeIndex.value]?.number ?? "--");

// The active label decrypts itself each time the page changes.
const activeLabel = useScramble(NAV_PAGES[activeIndex.value]?.label ?? "");
watch(activeIndex, (index) => activeLabel.run(NAV_PAGES[index]?.label ?? ""));

const isDarkMode = computed({
  get: () => colorMode.value === "dark",
  set: (isDark) => {
    colorMode.preference = isDark ? "dark" : "light";
  },
});

const isScrolled = ref(false);
// Measured on mount; until then the spacer uses CSS breakpoints so the
// prerendered HTML matches every screen size.
const headerHeight = ref<number | null>(null);
const headerRef = ref<HTMLElement | null>(null);

// Scroll events can fire several times per frame; measure once per frame instead.
let frame: number | undefined;
function onScroll() {
  if (frame !== undefined) return;
  frame = requestAnimationFrame(() => {
    frame = undefined;
    isScrolled.value = window.scrollY > 10;
  });
}

onMounted(() => {
  headerHeight.value = headerRef.value?.offsetHeight || null;
  window.addEventListener("scroll", onScroll, { passive: true });
  isScrolled.value = window.scrollY > 10;
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  if (frame !== undefined) cancelAnimationFrame(frame);
});
</script>

<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 z-50 w-full max-w-[100vw] transition-colors duration-300"
    :class="isScrolled ? 'bg-default/90 backdrop-blur-sm' : 'bg-default/0'">
    <!-- The band folds away once the page is scrolled, leaving just the nav row. -->
    <div
      class="grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none"
      :class="isScrolled ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'">
      <div class="overflow-hidden">
        <CaseFileHazardBanner size="xs">
          CLASSIFIED // EYES ONLY<span class="hidden sm:inline">
            · CASE FILE {{ CASE_FILE_ID }}</span
          >
        </CaseFileHazardBanner>
      </div>
    </div>
    <UContainer>
      <div
        class="flex items-center justify-between gap-3 border-b-4 border-double border-default transition-[padding] duration-300 motion-reduce:transition-none"
        :class="isScrolled ? 'py-1.5' : 'py-2.5'">
        <!-- Logo: a small rubber stamp with the file number -->
        <NuxtLink
          to="/"
          aria-label="Home"
          class="hidden shrink-0 -rotate-3 border-4 border-double border-error px-1.5 font-name text-xs font-bold tracking-widest text-error transition-transform hover:rotate-0 sm:block sm:text-sm">
          {{ CASE_FILE_ID }}
        </NuxtLink>

        <nav aria-label="Main" class="flex min-w-0 flex-1 justify-center gap-1 sm:gap-3 lg:gap-5">
          <NuxtLink
            v-for="(page, index) in NAV_PAGES"
            :key="page.path"
            :to="page.path"
            :aria-current="index === activeIndex ? 'page' : undefined"
            :aria-label="page.label"
            class="flex items-baseline gap-1 border-b-2 px-1 py-1 font-mono text-xs tracking-widest whitespace-nowrap uppercase transition-colors hover:text-primary sm:text-sm"
            :class="
              index === activeIndex
                ? 'border-primary text-highlighted'
                : 'border-transparent text-muted'
            ">
            <span class="text-primary">{{ page.number }}/</span>
            <!-- On small screens only the active page shows its name. -->
            <span :class="index === activeIndex ? 'inline' : 'hidden md:inline'">
              {{ index === activeIndex ? activeLabel.text.value : page.label }}
            </span>
          </NuxtLink>
        </nav>

        <div class="flex shrink-0 items-center gap-4">
          <div
            class="hidden items-center gap-4 font-mono text-xs tracking-widest transition-opacity duration-300 xl:flex"
            :class="{ 'pointer-events-none opacity-0': isScrolled }">
            <span class="text-muted">PG {{ pageNumber }}/{{ pageCount }}</span>
            <Transition mode="out-in" enter-active-class="motion-safe:animate-reveal-in">
              <span
                v-if="declassified"
                key="clearance"
                class="flex items-center gap-1.5 text-error">
                <UIcon name="i-lucide-lock-open" class="size-3.5" />
                ELEVATED
              </span>
              <span v-else key="status" class="flex items-center gap-1.5 text-primary">
                <span class="size-2 rounded-full bg-primary motion-safe:animate-pulse" />
                OPEN TO WORK
              </span>
            </Transition>
          </div>

          <!-- Theme switch: manila paper or agency terminal. The active look comes from the
               dark: variant, so the prerendered HTML is right before the color mode loads. -->
          <div
            role="group"
            aria-label="Theme"
            class="flex border border-accented font-mono text-[0.65rem] tracking-widest">
            <button
              type="button"
              :aria-pressed="!isDarkMode"
              class="cursor-pointer bg-inverted px-1.5 py-0.5 text-inverted transition-colors dark:bg-transparent dark:text-muted dark:hover:text-highlighted"
              @click="isDarkMode = false">
              <span class="sr-only sm:not-sr-only">PAPER</span>
              <UIcon
                name="i-lucide-file-text"
                aria-hidden="true"
                class="size-3.5 align-middle sm:hidden" />
            </button>
            <button
              type="button"
              :aria-pressed="isDarkMode"
              class="cursor-pointer px-1.5 py-0.5 text-muted transition-colors hover:text-highlighted dark:bg-inverted dark:text-inverted dark:hover:text-inverted"
              @click="isDarkMode = true">
              <span class="sr-only sm:not-sr-only">TERMINAL</span>
              <UIcon
                name="i-lucide-terminal"
                aria-hidden="true"
                class="size-3.5 align-middle sm:hidden" />
            </button>
          </div>
        </div>
      </div>
    </UContainer>
  </header>

  <!-- Spacer to prevent content from hiding behind fixed header -->
  <div
    class="h-[70px] md:h-[76px]"
    :style="headerHeight ? { height: `${headerHeight}px` } : undefined" />
</template>

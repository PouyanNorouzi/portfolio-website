<script setup lang="ts">
import { PAGES } from "./utils/constants/pages";

const route = useRoute();

const currentPage = computed({
  get() {
    return route.path;
  },
  set(page) {
    navigateTo(page);
  },
});

const currentPageIndex = computed(() => {
  return PAGES.indexOf(currentPage.value);
});

let firstTouch: Touch | null = null;
let differenceX = 0;
function handleCalendarTouch(e: TouchEvent) {
  if (e.type == "touchstart") firstTouch = e.touches[0];
  // else if (e.type == "touchmove") { } TODO
  else if (e.type == "touchend") {
    if (!firstTouch) return;
    differenceX = firstTouch.clientX - e.changedTouches[0].clientX;
    if (differenceX > 50) {
      const target =
        PAGES[currentPageIndex.value !== PAGES.length - 1 ? currentPageIndex.value + 1 : 0];
      currentPage.value = target;
    } else if (differenceX < -50) {
      const target =
        PAGES[currentPageIndex.value !== 0 ? currentPageIndex.value - 1 : PAGES.length - 1];
      currentPage.value = target;
    }
    differenceX = 0;
    firstTouch = null;
  }
}
</script>

<template>
  <UApp>
    <AppHeader />
    <NuxtPage
      @touchstart="handleCalendarTouch"
      @touchmove="handleCalendarTouch"
      @touchend="handleCalendarTouch"
      @touchcancel="handleCalendarTouch" />
    <AppFooter />
  </UApp>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>

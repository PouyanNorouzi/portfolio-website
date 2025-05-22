<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

const route = useRoute();

const items = ref<TabsItem[]>([
  {
    label: "Home",
    icon: "i-lucide-home",
    value: "/",
  },
  {
    label: "Projects",
    icon: "i-lucide-folder",
    value: "/projects",
  },
  {
    label: "About",
    icon: "i-lucide-info",
    value: "/about",
  },
]);

const active = computed({
  get() {
    return route.path;
  },
  set(tab) {
    // Hash is specified here to prevent the page from scrolling to the top
    console.log("set:", tab);
    navigateTo({
      path: tab,
    });
  },
});
</script>

<template>
  <header>
    <UTabs v-model="active" :items="items" class="w-full" />
  </header>
</template>

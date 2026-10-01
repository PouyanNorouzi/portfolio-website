<script setup lang="ts">
const colorMode = useColorMode();

// Tints the mobile browser bar to match the folder desk or the terminal background.
useHead({
  meta: [
    {
      name: "theme-color",
      content: computed(() => (colorMode.value === "dark" ? "#0f172b" : "#d6bf86")),
    },
  ],
});
</script>

<template>
  <UApp>
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-60 focus:border-2 focus:border-error focus:bg-default focus:px-3 focus:py-1.5 focus:font-mono focus:text-sm focus:font-bold focus:tracking-widest focus:text-error">
      SKIP TO FILE
    </a>
    <AppAtmosphere />
    <UContainer class="min-h-screen flex flex-col">
      <AppHeader />
      <!-- NuxtPage wraps whatever its slot returns in the page transition, so the footer
           sits in the same wrapper and leaves and arrives together with the page. -->
      <NuxtPage v-slot="{ Component }">
        <div class="flex grow flex-col">
          <main id="main" tabindex="-1" class="grow outline-none">
            <component :is="Component" />
          </main>
          <AppFooter />
        </div>
      </NuxtPage>
    </UContainer>
  </UApp>
</template>

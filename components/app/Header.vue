<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK } from "~/utils/constants/socials";

const route = useRoute();
const colorMode = useColorMode();

// Navigation links
const navItems = ref<TabsItem[]>([
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

// Active navigation tab tracking
const activeTab = computed({
  get() {
    return route.path;
  },
  set(tab) {
    navigateTo({
      path: tab,
    });
  },
});

const isDarkMode = computed({
  get: () => colorMode.preference === "dark",
  set: (isDark) => {
    if (isDark) {
      colorMode.preference = "dark";
    } else {
      colorMode.preference = "light";
    }
  },
});

// Social and contact links
const socialLinks = ref([
  {
    label: "GitHub",
    icon: "i-lucide-github",
    to: GITHUB_LINK,
    target: "_blank",
  },
  {
    label: "LinkedIn",
    icon: "i-lucide-linkedin",
    to: LINKEDIN_LINK,
    target: "_blank",
  },
  {
    label: "Email",
    icon: "i-lucide-mail",
    to: EMAIL,
    target: "_blank",
  },
]);

const DEFAULT_HEADER_HEIGHT = 64; // A reasonable default in pixels

// Scroll behavior tracking
const isScrolled = ref(false);
const headerHeight = ref(DEFAULT_HEADER_HEIGHT);
const headerRef = ref<HTMLElement | null>(null);

// Update header state based on scroll position
onMounted(() => {
  if (import.meta.client) {
    headerHeight.value = headerRef.value?.offsetHeight || DEFAULT_HEADER_HEIGHT;

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 10;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Cleanup
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  }
});

const headerBackgroundOpacity = computed(() => (isScrolled.value ? 90 : 50));

// Dynamic header styles based on scroll position
const headerClass = computed(() => {
  return {
    "py-2": isScrolled.value,
    "py-3": !isScrolled.value,
    "transition-all duration-300": true,
  };
});
</script>

<template>
  <header
    ref="headerRef"
    :class="[
      headerClass,
      `fixed top-0 left-0 w-full z-50 bg-white/${headerBackgroundOpacity} dark:bg-gray-900/${headerBackgroundOpacity}`,
    ]">
    <UContainer>
      <div class="flex items-center justify-between gap-4">
        <!-- Logo/Name -->
        <NuxtLink to="/" class="flex items-center space-x-2 text-lg font-bold text-primary">
          <UIcon name="i-lucide-code" class="text-xl" />
          <span class="hidden sm:inline">Pouyan Norouzi</span>
        </NuxtLink>

        <!-- Navigation - centered on desktop, hidden on mobile -->
        <div class="flex-1 px-4 md:max-w-md mx-auto flex items-center">
          <UTabs
            v-model="activeTab"
            :items="navItems"
            class="hidden md:flex justify-center w-full"
            :ui="{ root: 'gap-0' }" />
          <UTabs
            v-model="activeTab"
            :items="
              navItems.map((item) => {
                return { icon: item.icon, value: item.value };
              })
            "
            class="sm:flex md:hidden justify-center w-full"
            :ui="{ root: 'gap-0' }" />
        </div>

        <!-- Right Side Utilities -->
        <div class="flex items-center space-x-1 sm:space-x-2">
          <!-- Theme Toggle -->
          <UButton
            variant="ghost"
            :icon="isDarkMode ? 'i-lucide-sun' : 'i-lucide-moon'"
            :ui="{ base: 'rounded-full' }"
            @click="isDarkMode = !isDarkMode" />

          <!-- Social Links - Show only on larger screens -->
          <template v-for="link in socialLinks" :key="link.label">
            <UTooltip :text="link.label">
              <UButton
                variant="ghost"
                :icon="link.icon"
                :ui="{ base: 'rounded-full' }"
                :to="link.to"
                target="_blank"
                rel="noopener noreferrer"
                class="hidden sm:flex" />
            </UTooltip>
          </template>

          <!-- Mobile Navigation Menu -->
          <UDropdownMenu :items="socialLinks" class="md:hidden">
            <UButton variant="ghost" icon="i-lucide-menu" :ui="{ base: 'rounded-full' }" />
          </UDropdownMenu>
        </div>
      </div>
    </UContainer>
  </header>

  <!-- Spacer to prevent content from hiding behind fixed header -->
  <div :style="{ height: `${headerHeight}px` }" />
</template>

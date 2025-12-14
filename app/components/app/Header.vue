<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK } from "~/utils/constants/socials";

const route = useRoute();
const colorMode = useColorMode();
const viewPort = useViewport();

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

const DEFAULT_HEADER_HEIGHT = viewPort.isLessThan("md") ? 50 : 56; //starting header height based on size of screen

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

// Dynamic header styles based on scroll position
const headerClass = computed(() => {
  return {
    "bg-accented/90 dark:bg-default/80": isScrolled.value,
    "bg-accented/50 dark:bg-default/0": !isScrolled.value,
    "pb-1 pe-0": isScrolled.value,
    "py-2": !isScrolled.value,
    "transition-all duration-300": true,
  };
});
</script>

<template>
  <header ref="headerRef" :class="[headerClass, `fixed top-0 left-0 max-w-[100vw] w-full z-50`]">
    <UContainer>
      <div class="flex items-center justify-between gap-4">
        <!-- Logo/Name -->
        <NuxtLink to="/" class="flex items-center space-x-2 text-lg font-bold text-primary">
          <UIcon name="i-lucide-code" class="text-xl" />
          <span class="hidden sm:inline font-name">Pouyan Norouzi</span>
        </NuxtLink>

        <!-- Navigation - centered on desktop, hidden on mobile -->
        <div class="flex-1 px-4 md:max-w-md mx-auto flex items-center">
          <UTabs
            v-model="activeTab"
            :items="
              viewPort.isLessThan('md')
                ? navItems.map((item) => {
                    return { icon: item.icon, value: item.value };
                  })
                : navItems
            "
            class="justify-center w-full"
            :ui="{ root: 'gap-0' }" />
        </div>

        <!-- Right Side Utilities -->
        <div class="flex items-center space-x-1 sm:space-x-2">
          <!-- Theme Toggle -->
          <UButton
            variant="ghost"
            :ui="{ base: 'rounded-full theme-toggle-btn' }"
            @click="isDarkMode = !isDarkMode">
            <template #default>
              <Transition name="theme-icon" mode="out-in">
                <UIcon v-if="isDarkMode" key="sun" name="i-lucide-sun" />
                <UIcon v-else key="moon" name="i-lucide-moon" />
              </Transition>
            </template>
          </UButton>

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
          <UDropdownMenu :items="socialLinks" class="sm:hidden">
            <UButton variant="ghost" icon="i-lucide-phone" :ui="{ base: 'rounded-full' }" />
          </UDropdownMenu>
        </div>
      </div>
    </UContainer>
  </header>

  <!-- Spacer to prevent content from hiding behind fixed header -->
  <div :style="{ height: `${headerHeight}px` }" />
</template>

<style scoped>
.theme-toggle-btn {
  overflow: hidden;
}

.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: all 0.3s ease;
}

.theme-icon-enter-from {
  opacity: 0;
  transform: scale(0.5) rotate(-180deg);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: scale(0.5) rotate(180deg);
}

.theme-icon-enter-to,
.theme-icon-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
</style>

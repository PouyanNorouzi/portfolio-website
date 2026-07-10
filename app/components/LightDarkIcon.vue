<script setup lang="ts">
interface Props {
  icon: LightAndDarkIcon | string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

withDefaults(defineProps<Props>(), {
  size: "md",
});

const colorMode = useColorMode();

const isDarkMode = computed(() => colorMode.value === "dark");
</script>

<template>
  <UIcon v-if="typeof icon === 'string'" :name="icon" :class="`text-${size}`" />
  <template v-else>
    <UIcon v-show="!isDarkMode" :name="icon.lightIcon" :class="`text-${size}`" />
    <UIcon v-show="isDarkMode" :name="icon.darkIcon" :class="`text-${size}`" />
  </template>
</template>

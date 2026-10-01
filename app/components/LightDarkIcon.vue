<script setup lang="ts">
interface Props {
  icon: LightAndDarkIcon | string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

const props = defineProps<Props>();

// Full class names so Tailwind can find them when it scans this file. Without a size
// the icon inherits the surrounding font size.
const SIZE_CLASS: Record<NonNullable<Props["size"]>, string> = {
  "xs": "text-xs",
  "sm": "text-sm",
  "md": "text-base",
  "lg": "text-lg",
  "xl": "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
};
const sizeClass = computed(() => (props.size ? SIZE_CLASS[props.size] : undefined));
</script>

<!-- Swapped with the dark: variant rather than in JavaScript, so the prerendered HTML
     already shows the right icon for the visitor's theme. -->
<template>
  <UIcon v-if="typeof icon === 'string'" :name="icon" :class="sizeClass" />
  <template v-else>
    <UIcon :name="icon.lightIcon" class="dark:hidden" :class="sizeClass" />
    <UIcon :name="icon.darkIcon" class="hidden dark:inline-block" :class="sizeClass" />
  </template>
</template>

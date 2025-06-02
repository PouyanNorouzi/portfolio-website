<script setup lang="ts">
interface Props {
  skill: Skill;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "outline" | "soft" | "subtle";
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral";
}

const colorMode = useColorMode();

const isDarkMode = computed(() => colorMode.value === "dark");

const icon = computed(() => {
  const icon = props.skill.icon;

  if (typeof icon === "string") return icon;

  return isDarkMode.value ? icon.darkIcon : icon.lightIcon;
});

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  variant: "outline",
  color: undefined,
});
</script>

<template>
  <UBadge
    :label="skill.title"
    :size="size"
    :variant="variant"
    :color="color"
    class="flex items-center gap-1 py-1 px-2">
    <template #leading>
      <UIcon :name="icon" class="mr-1 text-lg" />
    </template>
  </UBadge>
</template>

<style scoped></style>

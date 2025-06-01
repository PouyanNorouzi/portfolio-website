<script setup lang="ts">
interface Props {
  skill: Skill;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "outline" | "soft" | "subtle";
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral";
}

withDefaults(defineProps<Props>(), {
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
      <UIcon :name="skill.icon" class="mr-1 text-lg" />
    </template>
  </UBadge>
</template>

<style scoped></style>

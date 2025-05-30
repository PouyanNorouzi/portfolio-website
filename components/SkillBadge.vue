<script setup lang="ts">
interface Props {
  skill: Skill;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "outline" | "soft" | "subtle";
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral";
}

withDefaults(defineProps<Props>(), {
  size: "md",
  variant: "soft",
  color: undefined,
});
</script>

<template>
  <UBadge :label="skill.title" :size="size" :variant="variant" :color="color" class="skill-badge">
    <template #leading>
      <UIcon :name="skill.icon" class="skill-icon" />
    </template>
  </UBadge>
</template>

<style scoped>
.skill-badge {
  margin: 0.25rem;
}

.skill-icon {
  margin-right: 0.25rem;
}
</style>

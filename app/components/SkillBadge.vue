<script setup lang="ts">
interface Props {
  skill: EnhancedSkill; // Only allow EnhancedSkill type
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  variant?: "solid" | "outline" | "soft" | "subtle";
  color?: NuxtUIColor;
  ignoreLabel?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "lg",
  variant: "outline",
  color: undefined,
  ignoreLabel: false,
});
</script>

<template>
  <UTooltip :delay-duration="200" class="cursor-help" :ui="{ content: 'flex-col h-full' }">
    <UBadge
      :label="ignoreLabel ? undefined : skill.title"
      :size="size"
      :variant="variant"
      :color="color"
      class="flex items-center gap-1 py-1 px-2">
      <template #leading>
        <LightDarkIcon :size="iconSize" :icon="skill.icon" />
      </template>
    </UBadge>
    <template #content>
      <div v-if="ignoreLabel" class="mb-1 text-xs">{{ skill.title }}</div>
      <div v-if="skill.description" class="mb-1 text-sm">{{ skill.description }}</div>
      <div class="flex items-center gap-2 mb-1 text-xs">
        <span class="font-semibold">Category:</span> {{ skill.category }}
      </div>
      <div class="mb-2 text-xs">
        <span class="font-semibold">Proficiency:</span>
        <UProgress
          class="mt-1"
          :model-value="skill.proficiency"
          :max="1"
          color="primary"
          size="xs" />
      </div>
      <div v-if="skill.relatedSkills && skill.relatedSkills.length" class="text-xs">
        <span class="font-semibold block mb-1">Related skills:</span>
        <div class="flex flex-wrap gap-1">
          <UBadge v-for="related in skill.relatedSkills" :key="related" size="sm" variant="soft">
            {{ related }}
          </UBadge>
        </div>
      </div>
    </template>
  </UTooltip>
</template>

<style scoped></style>

<script setup lang="ts">
const { skill } = defineProps<{ skill: EnhancedSkill }>();

// The bar fills once when the row scrolls into view, and just shows the value without motion.
const { element, isVisible } = useInView({ threshold: 0.6 });
</script>

<template>
  <div ref="element" class="flex flex-col gap-1.5">
    <div class="flex items-center gap-2">
      <LightDarkIcon :icon="skill.icon" size="md" />
      <span class="min-w-0 flex-1 truncate font-medium">{{ skill.title }}</span>
      <span class="font-mono text-xs tracking-widest text-primary">
        {{ Math.round(skill.proficiency * 100) }}%
      </span>
    </div>
    <div class="h-1.5 overflow-hidden rounded-full bg-accented">
      <div
        class="h-full origin-left rounded-full bg-primary transition-transform duration-1000 ease-out motion-reduce:transition-none"
        :class="isVisible ? 'scale-x-100' : 'motion-safe:scale-x-0'"
        :style="{ width: `${skill.proficiency * 100}%` }" />
    </div>
  </div>
</template>

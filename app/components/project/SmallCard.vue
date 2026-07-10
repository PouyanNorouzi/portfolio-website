<script setup lang="ts">
interface Props {
  project: Project;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink :to="'/projects#project-' + project.id" class="block h-full">
    <UCard
      :id="`featured-project-${project.id}`"
      variant="outline"
      class="project-small-card h-full"
    >
      <div class="flex flex-col gap-2">
        <NuxtImg
          :src="project.image"
          :alt="project.name"
          class="h-32 w-full rounded-md object-cover"
          preload
        />
        <h3 class="text-base font-semibold">{{ project.name }}</h3>
        <p class="text-sm text-muted leading-relaxed">
          {{ project.shortDescription }}
        </p>
      </div>
    </UCard>
  </NuxtLink>
</template>

<style scoped>
.project-small-card {
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.project-small-card:hover {
  transform: translateY(-2px);
  border-color: var(--color-primary);
}
</style>

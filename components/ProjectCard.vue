<script setup lang="ts">
interface Props {
  project: Project;
}

defineProps<Props>();

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
};
</script>

<template>
  <UCard class="project-card h-full">
    <template #header>
      <div class="relative">
        <img
          :src="project.image"
          :alt="project.name"
          class="w-full h-48 object-cover rounded-t-lg">
        <div class="absolute top-2 right-2 flex gap-2">
          <UBadge v-for="tag in project.tags" :key="tag" :label="tag" variant="solid" size="xs" />
        </div>
      </div>
    </template>

    <div class="flex flex-col h-full">
      <div class="flex-1">
        <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {{ project.description }}
        </p>

        <div class="mb-4">
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">
            {{ formatDate(project.startDate) }} - {{ formatDate(project.endDate) }}
          </p>
        </div>

        <div class="mb-4">
          <h4 class="text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Tech Stack:</h4>
          <div class="flex flex-wrap gap-1">
            <UBadge
              v-for="tech in project.techStack"
              :key="tech"
              :label="tech"
              variant="outline"
              size="xs" />
          </div>
        </div>
      </div>

      <div class="flex gap-2 mt-auto pt-4">
        <UButton
          v-if="project.github"
          :to="project.github"
          target="_blank"
          variant="outline"
          size="sm"
          icon="i-lucide-github"
          class="flex-1">
          Code
        </UButton>
        <UButton
          v-if="project.liveDemo"
          :to="project.liveDemo"
          target="_blank"
          size="sm"
          icon="i-lucide-external-link"
          class="flex-1">
          Live Demo
        </UButton>
      </div>
    </div>
  </UCard>
</template>

<style scoped>
.project-card {
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
</style>

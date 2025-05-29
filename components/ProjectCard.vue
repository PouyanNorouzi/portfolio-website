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
  <UCard class="project-card overflow-hidden" variant="soft">
    <div class="flex flex-col md:flex-row gap-4 h-full">
      <!-- Left side - Image -->
      <div class="relative md:w-1/3 md:flex md:items-stretch overflow-hidden md:min-h-[250px]">
        <div class="relative w-full h-full">
          <img
            :src="project.image"
            :alt="project.name"
            class="w-full h-[200px] md:h-full object-cover md:absolute md:inset-0 md:rounded-l-lg">
          <div class="absolute top-2 right-2 flex gap-2">
            <UBadge v-for="tag in project.tags" :key="tag" :label="tag" variant="solid" size="xs" />
          </div>
        </div>
      </div>

      <!-- Right side - Content -->
      <div class="flex flex-col flex-1 justify-between">
        <div>
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
                size="md" />
            </div>
          </div>
        </div>

        <div class="flex gap-2 justify-end">
          <UTooltip text="View Code">
            <UButton
              v-if="project.github"
              :to="project.github"
              target="_blank"
              variant="ghost"
              size="sm"
              icon="i-lucide-github" />
          </UTooltip>

          <UTooltip text="View Live Demo">
            <UButton
              v-if="project.liveDemo"
              :to="project.liveDemo"
              target="_blank"
              variant="ghost"
              size="sm"
              icon="i-lucide-external-link"
              color="primary" />
          </UTooltip>
        </div>
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

/* Add deep selector to ensure card inner container has full height */
@media (min-width: 768px) {
  .project-card:deep(.u-card-inner) {
    height: 100%;
  }
}
</style>

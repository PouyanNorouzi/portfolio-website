<script setup lang="ts">
import { ALL_PROJECTS } from '~/utils/constants/projects';

usePageSeo({
  title: "Pouyan - Projects",
  description:
    "Software projects built by Pouyan Norouzi, with the tech used and links to source and demos.",
});

definePageMeta({
  middleware: ["transition"],
});

const route = useRoute();

// Function to scroll to project based on hash
const scrollToProject = (hash: string) => {
  if (hash) {
    // Add delay to wait for page transition to complete
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }
};

// Handle scroll to project on mount if hash is present
onMounted(() => {
  scrollToProject(route.hash);
});

// Watch for hash changes when navigating
watch(() => route.hash, (newHash) => {
  scrollToProject(newHash);
});

// Project data
const projects = ref<Project[]>(
  [...ALL_PROJECTS].reverse()
);
</script>

<template>
  <UContainer>
    <PageHeader>My Projects</PageHeader>
    <div class="flex flex-col gap-6 w-full">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="transition-all" />
    </div>
  </UContainer>
</template>

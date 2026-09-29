<script setup lang="ts">
import { ALL_PROJECTS } from '~/utils/constants/projects';
import { CASE_FILE_ID, CASE_FILE_SECTIONS } from '~/utils/constants/case-file';

const section = CASE_FILE_SECTIONS[4]!;

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
    <PageHeader :number="section.number" :label="`CASE FILE ${CASE_FILE_ID} · ${section.tocLabel}`">
      {{ section.title }}
    </PageHeader>
    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 pb-12">
      <div
        class="flex flex-col items-center gap-1 border-y-4 border-double border-default py-3 text-center">
        <CaseFileLabel>// {{ projects.length }} OPERATIONS ON FILE</CaseFileLabel>
        <p class="text-sm text-muted">Subject's known operations, most recent first.</p>
      </div>
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </UContainer>
</template>

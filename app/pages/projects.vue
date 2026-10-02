<script setup lang="ts">
import { ALL_PROJECTS } from "~/utils/constants/projects";
import { CASE_FILE_ID, CASE_FILE_SECTIONS } from "~/utils/constants/case-file";

const section = CASE_FILE_SECTIONS[4]!;

usePageSeo({
  title: "Pouyan - Projects",
  description:
    "Software projects built by Pouyan Norouzi, with the tech used and links to source and demos.",
});

// Project data
const projects = [...ALL_PROJECTS].reverse();
</script>

<template>
  <div>
    <PageHeader :label="`CASE FILE ${CASE_FILE_ID} · ${section.tocLabel}`">
      {{ section.title }}
    </PageHeader>
    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 pb-12">
      <div
        class="flex flex-col items-center gap-1 border-y-4 border-double border-default py-3 text-center">
        <CaseFileLabel>// {{ projects.length }} OPERATIONS ON FILE</CaseFileLabel>
        <p class="text-sm text-muted">Subject's known operations, most recent first.</p>
      </div>
      <template v-for="(project, index) in projects" :key="project.id">
        <!-- The first cards are on screen at load; the rest hydrate when scrolled to. -->
        <ProjectCard v-if="index < 3" :project="project" />
        <LazyProjectCard v-else :project="project" hydrate-on-visible />
      </template>
    </div>
  </div>
</template>

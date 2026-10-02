<script setup lang="ts">
usePageSeo({
  title: "Pouyan - Home",
  description:
    "Pouyan Norouzi's portfolio, presented as his own case file: projects, blog posts, skills and contact details.",
});
</script>

<template>
  <div>
    <!-- Only shown from 1340px up, so smaller screens never hydrate it or attach its scroll listener. -->
    <LazyCaseFileSideToc hydrate-on-media-query="(min-width: 1340px)" />
    <div class="mx-auto flex max-w-4xl flex-col gap-14 py-6 pb-12">
      <CaseFileIntro />
      <CaseFileDossier />
      <CaseFileSummary />
      <!-- Everything below the fold hydrates when it scrolls into view. -->
      <LazyCaseFileTransmissions hydrate-on-visible />
      <LazyCaseFileSkillset hydrate-on-visible />
      <LazyCaseFileMovementLog hydrate-on-visible />
      <LazyCaseFileOperations hydrate-on-visible />
      <LazyCaseFileNotes hydrate-on-visible />
      <LazyCaseFileAssessment hydrate-on-visible />
      <LazyCaseFileContact hydrate-on-visible />
      <LazyCaseFileDeclassify hydrate-on-visible />
      <LazyCaseFileSignoff hydrate-on-visible />
    </div>
  </div>
</template>

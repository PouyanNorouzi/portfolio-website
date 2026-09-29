<script setup lang="ts">
usePageSeo({
  title: "Pouyan - Home",
  description:
    "Pouyan Norouzi's portfolio, presented as his own case file: projects, blog posts, skills and contact details.",
});

definePageMeta({
  middleware: ["transition"],
});
</script>

<template>
  <div>
    <CaseFileSideToc />
    <div class="mx-auto flex max-w-4xl flex-col gap-14 py-6 pb-12">
      <CaseFileIntro />
      <CaseFileDossier />
      <CaseFileSummary />
      <CaseFileTransmissions />
      <CaseFileSkillset />
      <CaseFileMovementLog />
      <CaseFileOperations />
      <CaseFileNotes />
      <CaseFileAssessment />
      <CaseFileContact />
      <CaseFileDeclassify />
      <CaseFileSignoff />
    </div>
  </div>
</template>

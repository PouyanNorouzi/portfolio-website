<script setup lang="ts">
import { CASE_FILE_ID } from "~/utils/constants/case-file";

usePageSeo({
  title: "Pouyan - About",
  description:
    "Pouyan Norouzi under polygraph examination: the languages, frameworks, cloud and systems he works with, and how much of it holds up.",
});

definePageMeta({
  middleware: ["transition"],
});
</script>

<template>
  <UContainer>
    <PageHeader :label="`CASE FILE ${CASE_FILE_ID} · SUBJECT UNDER EXAMINATION`">
      The Polygraph
    </PageHeader>
    <div class="mx-auto w-full max-w-4xl pb-12">
      <PolygraphChart />
    </div>
  </UContainer>
</template>

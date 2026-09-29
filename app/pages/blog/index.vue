<script setup lang="ts">
import { CASE_FILE_ID, CASE_FILE_SECTIONS } from "~/utils/constants/case-file";

const section = CASE_FILE_SECTIONS[1]!;

usePageSeo({
  title: "Pouyan - Blog",
  description:
    "Blog posts by Pouyan Norouzi: project updates, announcements and whatever else is on his mind.",
});

definePageMeta({
  middleware: ["transition"],
});

const { data: posts } = await useAsyncData("blog-index-posts", () =>
  queryCollection("blog").order("date", "DESC").all()
);

const transmissionCount = computed(() => posts.value?.length ?? 0);
</script>

<template>
  <UContainer>
    <PageHeader
      plain
      :number="section.number"
      :label="`CASE FILE ${CASE_FILE_ID} · ${section.tocLabel}`">
      {{ section.title }}
    </PageHeader>
    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 pb-12">
      <div
        class="flex flex-col items-center gap-1 border-y-4 border-double border-default py-3 text-center">
        <CaseFileLabel>
          // {{ transmissionCount }}
          {{ transmissionCount === 1 ? "TRANSMISSION" : "TRANSMISSIONS" }} ON FILE
        </CaseFileLabel>
        <p class="text-sm text-muted">
          All transmissions intercepted from the subject to date, most recent first.
        </p>
      </div>
      <CaseFileExhibitList :posts="posts ?? []" />
    </div>
  </UContainer>
</template>

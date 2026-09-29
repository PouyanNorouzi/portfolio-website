<script setup lang="ts">
usePageSeo({
  title: "Pouyan - Blog",
  description: "Blog posts by Pouyan Norouzi: project updates, announcements and whatever else is on his mind.",
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
    <PageHeader>Blog</PageHeader>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <p class="text-muted">
          All transmissions intercepted from the subject to date, most recent first.
        </p>
        <CaseFileLabel>
          // {{ transmissionCount }} {{ transmissionCount === 1 ? "TRANSMISSION" : "TRANSMISSIONS" }} ON FILE
        </CaseFileLabel>
      </div>
      <CaseFileExhibitList :posts="posts ?? []" />
    </div>
  </UContainer>
</template>

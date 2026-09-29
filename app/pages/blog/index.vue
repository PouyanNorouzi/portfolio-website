<script setup lang="ts">
usePageSeo({
  title: "Pouyan - Blog",
  description: "Blog posts by Pouyan Norouzi: project updates, announcements and whatever else is on his mind.",
});

definePageMeta({
  middleware: ["transition"],
});

const { data: posts } = await useAsyncData(() =>
  queryCollection("blog").order("date", "DESC").all()
);
</script>

<template>
  <UContainer>
    <PageHeader>Blog</PageHeader>
    <UBlogPosts :posts="posts" />
  </UContainer>
</template>

<script setup lang="ts">
useHead({
  title: "Pouyan - Blog",
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

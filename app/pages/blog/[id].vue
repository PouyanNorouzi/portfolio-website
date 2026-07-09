<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(() =>
  queryCollection("blog").where("num", "=", route.params.id).first()
);
</script>

<template>
  <UContainer>
    <PageHeader v-if="page">{{ page.title }}</PageHeader>
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>na uh</div>
  </UContainer>
</template>

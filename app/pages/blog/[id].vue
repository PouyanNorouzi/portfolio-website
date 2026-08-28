<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(() =>
  queryCollection("blog").where("num", "=", route.params.id).first()
);

if (!page.value) {
  throw createError({ status: 404, statusText: "Page Not Found" });
}
</script>

<template>
  <UContainer class="flex flex-col" v-if="page">
    <PageHeader>{{ page.title }}</PageHeader>
    <NuxtImg
      class="w-full sm:w-auto sm:max-h-[30vh] self-center mb-3 object-contain"
      :src="page.image"
    />
    <ContentRenderer v-if="page" :value="page" />
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ["transition"] });

const route = useRoute();

const { data: page } = await useAsyncData(`blog-${route.params.id}`, () =>
  queryCollection("blog").where("num", "=", route.params.id).first()
);

if (!page.value) {
  throw createError({ status: 404, statusText: "Page Not Found" });
}

usePageSeo({
  title: `Pouyan - ${page.value.title}`,
  description: page.value.description,
  image: page.value.image,
  type: "article",
});
</script>

<template>
  <UContainer v-if="page" class="flex flex-col">
    <PageHeader>{{ page.title }}</PageHeader>
    <NuxtImg
      class="w-full sm:w-auto sm:max-h-[30vh] self-center mb-3 object-contain"
      :src="page.image"
    />
    <ContentRenderer v-if="page" :value="page" />
  </UContainer>
</template>

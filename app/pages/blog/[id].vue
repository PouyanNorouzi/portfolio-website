<script setup lang="ts">
import { CASE_FILE_ID } from "~/utils/constants/case-file";

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
    <PageHeader plain :label="`CASE FILE ${CASE_FILE_ID} · TRANSMISSION`">{{ page.title }}</PageHeader>
    <CaseFileTransmissionHeader :num="page.num" :date="page.date" />
    <figure class="group mb-5 flex flex-col items-center gap-2 self-center">
      <div
        class="overflow-hidden rounded-md border border-default p-1.5 transition-colors group-hover:border-primary">
        <NuxtImg
          class="w-full rounded-sm object-contain contrast-110 grayscale transition-[filter] duration-500 group-hover:contrast-100 group-hover:grayscale-0 sm:max-h-[30vh] sm:w-auto"
          :src="page.image"
          :alt="page.title" />
      </div>
      <figcaption>
        <CaseFileLabel>RECOVERED IMAGE</CaseFileLabel>
      </figcaption>
    </figure>
    <ContentRenderer v-if="page" :value="page" />
    <CaseFileTransmissionFooter />
  </UContainer>
</template>

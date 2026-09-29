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

// Older and newer posts for the previous/next links. Posts link by `to`
// (/blog/2), not by content path, so find the neighbours by `num`.
const { data: neighbours } = await useAsyncData(
  `blog-${route.params.id}-neighbours`,
  async () => {
    const posts = await queryCollection("blog")
      .order("date", "ASC")
      .select("title", "to", "num")
      .all();
    const index = posts.findIndex((post) => post.num === page.value?.num);
    return { previous: posts[index - 1], next: posts[index + 1] };
  }
);

usePageSeo({
  title: `Pouyan - ${page.value.title}`,
  description: page.value.description,
  image: page.value.image,
  type: "article",
});
</script>

<template>
  <UContainer v-if="page" class="flex flex-col pb-12">
    <PageHeader plain :label="`CASE FILE ${CASE_FILE_ID} · TRANSMISSION`">{{ page.title }}</PageHeader>
    <CaseFileTransmissionHeader :num="page.num" :date="page.date" />
    <figure class="group mb-5 flex flex-col items-center gap-2 self-center">
      <div
        class="overflow-hidden rounded-md border border-default p-1.5 transition-colors group-hover:border-primary">
        <NuxtImg
          class="w-full rounded-sm object-contain sm:max-h-[30vh] sm:w-auto"
          :src="page.image"
          :alt="page.title" />
      </div>
      <figcaption>
        <CaseFileLabel>RECOVERED IMAGE</CaseFileLabel>
      </figcaption>
    </figure>
    <ContentRenderer v-if="page" :value="page" />
    <CaseFileTransmissionFooter
      :previous="neighbours?.previous"
      :next="neighbours?.next" />
  </UContainer>
</template>

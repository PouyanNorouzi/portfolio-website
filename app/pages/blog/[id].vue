<script setup lang="ts">
import { CASE_FILE_ID } from "~/utils/constants/case-file";

const route = useRoute();

// `num` is a number in the content schema, so compare it as one. A non-numeric id (NaN) never
// matches a post and falls through to the not-found error below.
// Only plain positive integers count: Number() also accepts "02", "0x2" or "1e0", which would
// serve post 2 again under a second URL.
const num = /^[1-9]\d*$/.test(String(route.params.id)) ? Number(route.params.id) : Number.NaN;

const { data: page } = await useAsyncData(`blog-${route.params.id}`, () =>
  Number.isNaN(num) ? Promise.resolve(null) : queryCollection("blog").where("num", "=", num).first()
);

if (!page.value) {
  throw createError({ status: 404, statusText: "Page Not Found", fatal: true });
}

// Older and newer posts for the previous/next links. Posts link by `to`
// (/blog/2), not by content path, so find the neighbours by `num`.
const { data: neighbours } = await useAsyncData(`blog-${route.params.id}-neighbours`, async () => {
  const posts = await queryCollection("blog")
    .order("date", "ASC")
    .select("title", "to", "num")
    .all();
  const index = posts.findIndex((post) => post.num === page.value?.num);
  return { previous: posts[index - 1], next: posts[index + 1] };
}, {
  getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key] ?? nuxtApp.static.data[key],
});

// Intrinsic sizes of the post hero images, so the browser reserves the right box before the
// image loads (from the sm breakpoint up the box has a definite height, because `width: auto`
// with only an aspect ratio collapses to nothing until the file arrives). Add an entry when a
// post uses a new hero image. NuxtImg's `1x, 2x` srcset makes the browser show the file at half
// its pixel size when it is smaller than the 30vh cap, hence the halved height below.
const HERO_SIZES: Record<string, { width: number; height: number }> = {
  "/me/2.webp": { width: 800, height: 600 },
  "/img/blogs/fm/fm26.webp": { width: 1280, height: 720 },
  "/img/blogs/pws-announce/thumbnail.webp": { width: 500, height: 500 },
  "/img/blogs/update.webp": { width: 1000, height: 742 },
};
const heroSize = HERO_SIZES[page.value.image];

usePageSeo({
  title: `Pouyan - ${page.value.title}`,
  description: page.value.description,
  image: page.value.image,
  type: "article",
});
</script>

<template>
  <div v-if="page" class="flex flex-col pb-12">
    <PageHeader plain :label="`CASE FILE ${CASE_FILE_ID} · TRANSMISSION`">{{
      page.title
    }}</PageHeader>
    <CaseFileTransmissionHeader :num="page.num" :date="page.date" />
    <figure class="group mb-5 flex flex-col items-center gap-2 self-center">
      <div
        class="overflow-hidden rounded-md border border-default p-1.5 transition-colors group-hover:border-primary">
        <NuxtImg
          class="h-auto w-full rounded-sm object-contain sm:h-[min(30vh,var(--hero-h,30vh))] sm:w-auto"
          :style="heroSize ? { aspectRatio: `${heroSize.width} / ${heroSize.height}`, '--hero-h': `${heroSize.height / 2}px` } : undefined"
          :src="page.image"
          :width="heroSize?.width"
          :height="heroSize?.height"
          loading="eager"
          fetchpriority="high"
          :alt="page.title" />
      </div>
      <figcaption>
        <CaseFileLabel>RECOVERED IMAGE</CaseFileLabel>
      </figcaption>
    </figure>
    <ContentRenderer :value="page" />
    <CaseFileTransmissionFooter :previous="neighbours?.previous" :next="neighbours?.next" />
  </div>
</template>

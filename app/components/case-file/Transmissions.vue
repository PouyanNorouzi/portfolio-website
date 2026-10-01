<script setup lang="ts">
import { CASE_FILE_SECTIONS } from "~/utils/constants/case-file";
const RECENT_POST_COUNT = 3;

const { data: posts } = await useAsyncData("home-case-file-posts", async () => {
  // Only what the list shows, so the post bodies stay out of the page payload.
  const all = await queryCollection("blog")
    .select("title", "description", "date", "to", "num", "pinned")
    .order("date", "DESC")
    .all();
  const pinned = all.filter((post) => post.pinned);
  const recent = all.filter((post) => !post.pinned);
  return [...recent.slice(0, RECENT_POST_COUNT), ...pinned];
});
</script>

<template>
  <CaseFileSection :section="CASE_FILE_SECTIONS[1]!">
    <CaseFileExhibitList :posts="posts ?? []" />
    <UButton to="/blog" label="View All Blogs" class="self-center" />
  </CaseFileSection>
</template>

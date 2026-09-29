<script setup lang="ts">
import { CASE_FILE_SECTIONS } from "~/utils/constants/case-file";
const INTRODUCTION_POST_NUM = 2;
const RECENT_POST_COUNT = 3;

const { data: posts } = await useAsyncData("home-case-file-posts", async () => {
  const all = await queryCollection("blog").order("date", "DESC").all();
  const introduction = all.filter((post) => post.num === INTRODUCTION_POST_NUM);
  const recent = all.filter((post) => post.num !== INTRODUCTION_POST_NUM);
  return [...recent.slice(0, RECENT_POST_COUNT), ...introduction];
});

const formatDate = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" });
</script>

<template>
  <CaseFileSection :section="CASE_FILE_SECTIONS[1]!">
    <UCard :ui="{ body: 'p-0 sm:p-0 divide-y divide-default' }">
      <NuxtLink
        v-for="(post, index) in posts"
        :key="post.num"
        :to="post.to"
        class="grid gap-x-4 gap-y-1 px-5 py-3.5 transition-colors hover:bg-elevated sm:grid-cols-[7.5rem_minmax(0,1fr)]">
        <span class="flex flex-col gap-1 pt-0.5">
          <span class="font-name text-sm font-bold tracking-widest text-primary">
            EXHIBIT {{ String.fromCharCode(65 + index) }}
          </span>
          <span class="font-mono text-xs text-muted">{{
            formatDate.format(new Date(post.date))
          }}</span>
        </span>
        <span class="flex flex-col gap-0.5">
          <span class="flex flex-wrap items-center gap-2.5">
            <span class="font-name text-base font-semibold">{{ post.title }}</span>
            <UBadge
              label="INTERCEPTED"
              color="error"
              variant="outline"
              size="sm"
              class="font-mono tracking-widest" />
          </span>
          <span class="text-sm text-muted">{{ post.description }}</span>
        </span>
      </NuxtLink>
    </UCard>
    <UButton to="/blog" label="View All Blogs" class="self-center" />
  </CaseFileSection>
</template>

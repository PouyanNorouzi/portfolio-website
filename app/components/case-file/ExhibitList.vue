<script setup lang="ts">
import type { BlogCollectionItem } from "@nuxt/content";

defineProps<{
  posts: Pick<BlogCollectionItem, "title" | "description" | "date" | "to" | "num" | "pinned">[];
}>();

// Content dates are stored as UTC midnight (the scripts build with TZ=UTC), so format in UTC to
// keep the day.
const formatDate = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "UTC" });
</script>

<template>
  <UCard :ui="{ body: 'p-0 sm:p-0 divide-y divide-default' }">
    <NuxtLink
      v-for="post in posts"
      :key="post.num"
      :to="post.to"
      class="grid gap-x-4 gap-y-1 px-5 py-3.5 transition-colors hover:bg-elevated sm:grid-cols-[7.5rem_minmax(0,1fr)]">
      <span class="flex flex-col gap-1 pt-0.5">
        <span class="text-sm font-bold tracking-widest text-primary">
          <!-- Numbered by the post, not its place in the list, so it matches the post page
               and never changes when a new post is added. -->
          EXHIBIT {{ formatTransmissionNumber(post.num) }}
        </span>
        <span class="font-mono text-xs text-muted">{{
          formatDate.format(new Date(post.date))
        }}</span>
      </span>
      <span class="flex flex-col gap-0.5">
        <span class="flex flex-wrap items-center gap-2.5">
          <span class="text-base font-semibold">{{ post.title }}</span>
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
</template>

<script setup lang="ts">
defineProps<{
  operation: CaseFileOperation;
  featured?: boolean;
}>();
</script>

<template>
  <NuxtLink
    :to="`/projects#project-${operation.project.id}`"
    class="group flex gap-5 rounded-lg border border-default p-3.5 transition-colors hover:border-primary"
    :class="featured ? 'flex-wrap' : 'flex-col'">
    <div
      class="aspect-video overflow-hidden rounded-md bg-elevated p-2"
      :class="featured ? 'flex-1 basis-96' : ''">
      <NuxtImg
        :src="operation.project.image"
        :alt="operation.project.name"
        width="640"
        height="360"
        loading="lazy"
        class="size-full object-contain transition duration-300 [@media(hover:hover)]:contrast-110 [@media(hover:hover)]:grayscale group-hover:contrast-100 group-hover:grayscale-0" />
    </div>
    <div class="flex flex-1 flex-col gap-2.5 px-2 pb-1" :class="featured ? 'basis-72' : ''">
      <UBadge
        v-if="featured"
        label="★ MOST WANTED"
        color="error"
        variant="subtle"
        class="self-start font-mono tracking-widest" />
      <CaseFileLabel
        >INCIDENT · {{ formatProjectDates(operation.project).toUpperCase() }}</CaseFileLabel
      >
      <div class="font-name font-bold" :class="featured ? 'text-2xl' : 'text-lg'">
        {{ operation.project.name }}
      </div>
      <div class="text-sm leading-relaxed text-pretty text-muted">
        {{ operation.pre }}<CaseFileRedacted>{{ operation.redacted }}</CaseFileRedacted
        >{{ operation.post }}
      </div>
      <div class="mt-auto pt-1 font-mono text-sm tracking-wider text-primary">OPEN CASE FILE →</div>
    </div>
  </NuxtLink>
</template>

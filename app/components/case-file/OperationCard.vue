<script setup lang="ts">
// `exhibit` labels the evidence tag (e.g. "05-A"), `tilt` is how crooked the photo
// was pinned, in degrees. Hovering the card straightens it.
const { tilt = 0 } = defineProps<{
  operation: CaseFileOperation;
  exhibit: string;
  tilt?: number;
  featured?: boolean;
}>();
</script>

<template>
  <NuxtLink
    :to="`/projects#project-${operation.project.id}`"
    class="group case-sheet flex flex-col overflow-hidden rounded-lg border border-default transition-colors hover:border-primary">
    <CaseFileHazardBanner v-if="featured" size="sm">★ MOST WANTED ★</CaseFileHazardBanner>
    <div class="flex gap-5 p-3.5" :class="featured ? 'flex-1 flex-wrap' : 'flex-1 flex-col'">
      <div
        class="relative rotate-(--tilt) bg-default p-2 pb-8 shadow-md ring-1 ring-default transition duration-300 group-hover:-translate-y-1 group-hover:rotate-0 group-hover:shadow-xl motion-reduce:transition-none"
        :class="featured ? 'flex-1 basis-96' : ''"
        :style="{ '--tilt': `${tilt}deg` }">
        <span
          aria-hidden="true"
          class="absolute -top-2 -left-1.5 h-4 w-12 -rotate-35 bg-tertiary-200/60 backdrop-blur-[1px]" />
        <span
          aria-hidden="true"
          class="absolute -top-2 -right-1.5 h-4 w-12 rotate-35 bg-tertiary-200/60 backdrop-blur-[1px]" />
        <div class="aspect-video overflow-hidden bg-elevated p-2">
          <NuxtImg
            :src="operation.project.image"
            :alt="operation.project.name"
            width="640"
            height="360"
            loading="lazy"
            class="size-full object-contain transition duration-300 [@media(hover:hover)]:contrast-110 [@media(hover:hover)]:grayscale group-hover:contrast-100 group-hover:grayscale-0" />
        </div>
        <span
          class="absolute bottom-1.5 left-3 inline-flex -rotate-2 items-center gap-1.5 rounded-sm border border-default bg-elevated px-2 py-0.5 font-mono text-xs tracking-widest text-muted">
          <span aria-hidden="true" class="size-1.5 rounded-full bg-default ring-1 ring-default" />
          EXHIBIT {{ exhibit }}
        </span>
      </div>
      <div class="flex flex-1 flex-col gap-2.5 px-2 pb-1" :class="featured ? 'basis-72' : ''">
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
        <div class="mt-auto pt-1 font-mono text-sm tracking-wider text-primary">
          OPEN CASE FILE →
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { CASE_FILE_FACTS } from "~/utils/constants/case-file";
</script>

<template>
  <div class="flex flex-wrap items-start gap-7">
    <figure class="relative flex w-full max-w-sm flex-col gap-2 sm:w-80">
      <div
        class="pointer-events-none absolute top-40 -right-3 z-10 w-36 rotate-3 bg-tertiary-200 px-3 pt-2.5 pb-2 font-hand text-lg leading-tight text-tertiary-950 shadow-lg">
        <UIcon
          name="i-lucide-paperclip"
          class="absolute -top-2.5 left-1/2 size-5 -translate-x-1/2 text-muted" />
        Sunglasses. Intent unclear. -C.
      </div>
      <div class="group overflow-hidden rounded-md border-2 border-primary">
        <NuxtImg
          src="/me/2.webp"
          alt="Pouyan Norouzi standing on a garden path in sunglasses"
          width="320"
          height="240"
          class="aspect-4/3 w-full object-cover contrast-110 grayscale transition duration-500 group-hover:contrast-100 group-hover:grayscale-0" />
      </div>
      <figcaption>
        <CaseFileLabel>EXHIBIT A · SURVEILLANCE PHOTO</CaseFileLabel>
      </figcaption>
    </figure>

    <div class="flex min-w-0 flex-1 basis-64 flex-col gap-3.5">
      <h3 class="font-name text-3xl font-bold tracking-wider text-primary">Pouyan Norouzi</h3>
      <div class="grid gap-x-6 gap-y-3 sm:grid-cols-2">
        <div v-for="fact in CASE_FILE_FACTS" :key="fact.label" class="flex flex-col gap-0.5">
          <CaseFileLabel>{{ fact.label }}</CaseFileLabel>
          <span class="font-medium">{{ fact.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

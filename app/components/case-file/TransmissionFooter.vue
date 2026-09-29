<script setup lang="ts">
interface TransmissionLink {
  title: string;
  to: string;
}

defineProps<{ previous?: TransmissionLink; next?: TransmissionLink }>();
</script>

<template>
  <div class="mt-10 flex flex-col gap-5 border-t-4 border-double border-default pt-5">
    <nav
      v-if="previous || next"
      aria-label="Other transmissions"
      class="grid gap-4 sm:grid-cols-2">
      <NuxtLink
        v-if="previous"
        :to="previous.to"
        class="group flex flex-col gap-1 rounded-md border border-default p-3 transition-colors hover:border-primary">
        <CaseFileLabel class="group-hover:text-primary">← PREVIOUS TRANSMISSION</CaseFileLabel>
        <span class="font-semibold">{{ previous.title }}</span>
      </NuxtLink>
      <NuxtLink
        v-if="next"
        :to="next.to"
        class="group flex flex-col gap-1 rounded-md border border-default p-3 text-right transition-colors hover:border-primary sm:col-start-2">
        <CaseFileLabel class="group-hover:text-primary">NEXT TRANSMISSION →</CaseFileLabel>
        <span class="font-semibold">{{ next.title }}</span>
      </NuxtLink>
    </nav>
    <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
      <CaseFileLabel>// END OF TRANSMISSION</CaseFileLabel>
      <CaseFileLabel>
        <ULink to="/blog" class="text-primary">← BACK TO ALL TRANSMISSIONS</ULink>
      </CaseFileLabel>
    </div>
  </div>
</template>

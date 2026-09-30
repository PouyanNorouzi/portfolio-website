<script setup lang="ts">
// One line of the background check: what is claimed, and the verdict stamped on it.
const {
  title,
  subtitle = undefined,
  period,
  location,
  description = undefined,
  stamp = "VERIFIED",
  stampDelay = 0.2,
} = defineProps<{
  title: string;
  subtitle?: string;
  period: string;
  location: string;
  description?: string;
  stamp?: string;
  stampDelay?: number;
}>();
</script>

<template>
  <UCard>
    <div class="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
      <div class="flex min-w-0 flex-1 basis-64 flex-col gap-1">
        <CaseFileLabel>{{ period }} · {{ location }}</CaseFileLabel>
        <h3 class="text-lg font-bold text-highlighted">{{ title }}</h3>
        <p v-if="subtitle" class="font-medium text-primary">{{ subtitle }}</p>
        <p v-if="description" class="mt-1 text-sm leading-relaxed text-muted">{{ description }}</p>
      </div>
      <CaseFileStamp
        :tilt="-5"
        :delay="stampDelay"
        class="mt-1 mr-2 px-3 py-1 font-name text-sm font-bold tracking-widest">
        {{ stamp }}
      </CaseFileStamp>
    </div>
  </UCard>
</template>

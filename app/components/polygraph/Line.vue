<script setup lang="ts">
// One typed line of the transcript: clock time, who is speaking, and what they said.
defineProps<{
  speaker: "EXAMINER" | "SUBJECT";
  time?: string;
}>();
</script>

<template>
  <p class="flex flex-wrap gap-x-3 sm:grid sm:grid-cols-[3rem_5.5rem_minmax(0,1fr)]">
    <span class="font-mono text-sm text-(--ink-muted)">{{ time }}</span>
    <span
      class="font-mono text-xs tracking-[0.2em] leading-6"
      :class="speaker === 'SUBJECT' ? 'text-(--pen-respiration)' : 'text-(--ink-muted)'">
      {{ speaker }}
    </span>
    <span
      class="basis-full font-mono sm:basis-auto"
      :class="speaker === 'EXAMINER' ? 'text-(--ink-muted)' : 'text-(--ink)'">
      <slot />
    </span>
  </p>
</template>

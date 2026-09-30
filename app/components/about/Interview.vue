<script setup lang="ts">
import { ABOUT_INTERVIEW } from "~/utils/constants/about";

// Lines fade in one after another once the transcript scrolls into view.
const { element, isVisible } = useInView({ threshold: 0.15 });
const LINE_STAGGER_MS = 120;
</script>

<template>
  <UCard :ui="{ header: 'py-2.5', body: 'sm:p-5' }">
    <template #header>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <CaseFileLabel>INTERVIEW TRANSCRIPT · SESSION 03</CaseFileLabel>
        <CaseFileLabel class="flex items-center gap-1.5 text-error">
          <span class="size-2 rounded-full bg-error motion-safe:animate-pulse" />
          REC
        </CaseFileLabel>
      </div>
    </template>
    <div ref="element" class="flex flex-col gap-2.5 leading-relaxed">
      <p
        v-for="(line, index) in ABOUT_INTERVIEW"
        :key="index"
        class="flex flex-wrap gap-x-3 transition-[opacity,translate] duration-500 motion-reduce:transition-none sm:grid sm:grid-cols-[3.5rem_7rem_minmax(0,1fr)]"
        :class="isVisible ? '' : 'motion-safe:translate-y-2 motion-safe:opacity-0'"
        :style="{ transitionDelay: isVisible ? `${index * LINE_STAGGER_MS}ms` : '0ms' }">
        <span class="font-mono text-sm text-muted">{{ line.time }}</span>
        <CaseFileLabel :class="line.speaker === 'SUBJECT' ? 'text-primary' : ''">
          {{ line.speaker }}
        </CaseFileLabel>
        <span class="basis-full sm:basis-auto" :class="line.speaker === 'INTERVIEWER' && 'text-muted'">
          <CaseFileRedacted v-if="line.hidden">{{ line.text }}</CaseFileRedacted>
          <CaseFileHighlight v-else-if="line.highlight">{{ line.text }}</CaseFileHighlight>
          <template v-else>{{ line.text }}</template>
        </span>
      </p>
    </div>
  </UCard>
</template>

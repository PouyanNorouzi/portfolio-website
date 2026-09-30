<script setup lang="ts">
import type { TraceSpike } from "~/utils/polygraphTrace";
import { paperIcon, rapidAnswer, verdictFor } from "~/utils/polygraph";

const props = defineProps<{
  round: Extract<PolygraphRound, { kind: "rapid-fire" }>;
  time: string;
  seed: number;
}>();

const items = computed(() =>
  props.round.items.map((item) => ({
    item,
    answer: rapidAnswer(item),
    verdict: verdictFor(item),
  }))
);

// One quick flick of the needles per question, spread down the block.
const spikes = computed<TraceSpike[]>(() =>
  items.value.map(({ verdict }, index) => ({
    at: 0.12 + (0.83 * index) / Math.max(items.value.length - 1, 1),
    verdict,
  }))
);
</script>

<template>
  <PolygraphRow :seed="seed" :spikes="spikes">
    <div class="flex flex-col gap-3 py-3 pr-1 pl-2 sm:pr-4 sm:pl-5">
      <PolygraphLine speaker="EXAMINER" :time="time">{{ round.intro }}</PolygraphLine>
      <ul class="grid grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-2">
        <li
          v-for="{ item, answer, verdict } in items"
          :key="item.skill.id"
          class="flex items-center gap-2">
          <UIcon :name="paperIcon(item.skill)" class="size-4 shrink-0" />
          <span class="font-mono text-sm whitespace-nowrap">{{ item.skill.title }}?</span>
          <span
            aria-hidden="true"
            class="flex-1 border-b-2 border-dotted border-(--ink-faint) sm:min-w-3" />
          <span class="text-right font-mono text-sm text-(--pen-respiration)">{{ answer }}</span>
          <PolygraphVerdict :verdict="verdict" compact />
        </li>
      </ul>
    </div>
  </PolygraphRow>
</template>

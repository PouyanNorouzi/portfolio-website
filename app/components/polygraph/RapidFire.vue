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

// The intro types out, then the questions fire in quick succession while the pens keep pace.
const INTRO_MS_PER_CHAR = 6;
const ITEM_STAGGER_MS = 25;
const SKIPPED_TRACE_MS = 300;

const { element, isVisible } = useInView({ rootMargin: "0px 0px -15% 0px" });
const { typed, started, finished, active, duration, start, skip } = useTypewriter(
  () => [props.round.intro],
  [INTRO_MS_PER_CHAR],
  0
);

const queue = useRevealQueue();
// Set when the row filled in at once because the reader had already scrolled past it.
const filledIn = ref(false);
watch(isVisible, (visible) => {
  if (!visible) return;
  queue.enqueue(async () => {
    if (!isOnScreen(element.value)) {
      filledIn.value = true;
      return skip();
    }
    await start();
    if (!queue.skipped.value && !prefersReducedMotion()) {
      await wait(items.value.length * ITEM_STAGGER_MS);
    }
  });
});
watch(queue.skipped, (skipped) => skipped && skip(), { immediate: true });

const traceDuration = computed(() =>
  queue.skipped.value || filledIn.value
    ? SKIPPED_TRACE_MS
    : duration.value + items.value.length * ITEM_STAGGER_MS
);
const staggered = computed(() => finished.value && !queue.skipped.value);
</script>

<template>
  <PolygraphRow
    ref="transitionElement"
    :seed="seed"
    :spikes="spikes"
    :start="started"
    :duration="traceDuration">
    <div class="flex flex-col gap-3 py-3 pr-1 pl-2 sm:pr-4 sm:pl-5">
      <PolygraphLine speaker="EXAMINER" :time="time">
        <PolygraphTyped :text="round.intro" :typed="typed[0] ?? 0" :caret="active === 0" />
      </PolygraphLine>
      <ul class="grid grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-2">
        <li
          v-for="({ item, answer, verdict }, index) in items"
          :key="item.skill.id"
          class="flex items-center gap-2 transition-opacity duration-200 motion-reduce:transition-none"
          :class="finished ? '' : 'motion-safe:opacity-0'"
          :style="{ transitionDelay: staggered ? `${index * ITEM_STAGGER_MS}ms` : '0ms' }">
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

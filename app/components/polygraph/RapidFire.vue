<script setup lang="ts">
import type { TraceSpike } from "~/utils/polygraphTrace";
import { paperIcon, rapidAnswer, verdictFor } from "~/utils/polygraph";
import { SKILL_CATEGORIES } from "~/utils/constants/skills";

const props = defineProps<{
  round: Extract<PolygraphRound, { kind: "rapid-fire" }>;
  time: string;
  seed: number;
}>();

// Grouped under each skill's category, "Yes." answers before "Some." ones. The sort is stable, so
// the order in about.ts holds within each group.
const groups = computed(() =>
  SKILL_CATEGORIES.map((category) => ({
    category,
    items: props.round.items
      .filter(({ skill }) => skill.category === category)
      .map((item) => ({ item, answer: rapidAnswer(item), verdict: verdictFor(item) }))
      .sort(
        (a, b) => Number(a.verdict === "INCONCLUSIVE") - Number(b.verdict === "INCONCLUSIVE")
      ),
  })).filter(({ items }) => items.length)
);
const items = computed(() => groups.value.flatMap(({ items }) => items));
// Position of each question in the whole block, so the fade-in staggers down all groups.
const offsets = computed(() => new Map(items.value.map(({ item }, i) => [item.skill.id, i])));

// Only the shaky answers move the needles ("Some." and anything flagged worse), so the pens stay
// calm between them. A custom answer counts too, since it is the one that sounds like a story.
function isNotable({ item, verdict }: { item: PolygraphRapidItem; verdict: PolygraphVerdict }) {
  return verdict === "INCONCLUSIVE" || verdict === "DECEPTIVE" || !!item.answer;
}

// Each reaction sits level with its own row, so the paper has to be measured. Two questions share
// a row on wide screens, and the category headings add height, so evenly spaced flicks would
// drift away from the questions they belong to.
const content = ref<HTMLElement>();
const layout = ref<{ height: number; rows: Map<number, number> } | null>(null);

function measure() {
  const root = content.value;
  if (!root) return;
  const top = root.getBoundingClientRect().top;
  const rows = new Map<number, number>();
  root.querySelectorAll<HTMLElement>("li[data-skill-id]").forEach((li) => {
    const box = li.getBoundingClientRect();
    rows.set(Number(li.dataset.skillId), box.top - top + box.height / 2);
  });
  layout.value = { height: root.getBoundingClientRect().height, rows };
}

// Reactions closer together than this (the two questions of one row) become one, at the worse verdict.
const MERGE_PX = 12;
const SEVERITY: PolygraphVerdict[] = ["TRUTHFUL", "PROBABLE", "INCONCLUSIVE", "DECEPTIVE"];

const spikes = computed<TraceSpike[]>(() => {
  if (!layout.value?.height) return [];
  const { height, rows } = layout.value;
  const found: { y: number; verdict: PolygraphVerdict }[] = [];
  for (const entry of items.value.filter(isNotable)) {
    const y = rows.get(entry.item.skill.id);
    if (y === undefined) continue;
    const last = found.at(-1);
    if (last && Math.abs(y - last.y) < MERGE_PX) {
      if (SEVERITY.indexOf(entry.verdict) > SEVERITY.indexOf(last.verdict))
        last.verdict = entry.verdict;
    } else found.push({ y, verdict: entry.verdict });
  }
  return found.map(({ y, verdict }) => ({ at: Math.min(Math.max(y / height, 0.02), 0.98), verdict }));
});

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
let resizeObserver: ResizeObserver | undefined;
onBeforeUnmount(() => resizeObserver?.disconnect());
watch(isVisible, (visible) => {
  if (!visible) return;
  // Measure once the row is about to print, then keep up with wrapping, breakpoints and fonts.
  if (!resizeObserver && content.value) {
    measure();
    resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(content.value);
  }
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
    <div ref="content" class="flex flex-col gap-3 py-3 pr-1 pl-2 sm:pr-4 sm:pl-5">
      <PolygraphLine speaker="EXAMINER" :time="time">
        <PolygraphTyped :text="round.intro" :typed="typed[0] ?? 0" :caret="active === 0" />
      </PolygraphLine>
      <div v-for="group in groups" :key="group.category" class="flex flex-col gap-2 pt-2">
        <h3
          class="flex items-center gap-3 font-mono text-sm tracking-[0.25em] text-(--ink-muted) uppercase transition-opacity duration-200 motion-reduce:transition-none"
          :class="finished ? '' : 'motion-safe:opacity-0'">
          {{ group.category }}
          <span aria-hidden="true" class="flex-1 border-t border-dashed border-(--ink-faint)" />
        </h3>
        <ul class="grid grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-2">
          <li
            v-for="({ item, answer, verdict }, index) in group.items"
            :key="item.skill.id"
            :data-skill-id="item.skill.id"
            class="flex items-center gap-2 transition-opacity duration-200 motion-reduce:transition-none"
            :class="finished ? '' : 'motion-safe:opacity-0'"
            :style="{ transitionDelay: staggered ? `${(offsets.get(item.skill.id) ?? index) * ITEM_STAGGER_MS}ms` : '0ms' }">
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
    </div>
  </PolygraphRow>
</template>

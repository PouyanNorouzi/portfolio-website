<script setup lang="ts">
import type { TraceSpike } from "~/utils/polygraphTrace";
import { claimLabel, paperIcon, verdictFor } from "~/utils/polygraph";

const props = defineProps<{
  exchange: PolygraphExchange;
  time: string;
  seed: number;
}>();

// The subject gets a turn at the end, so who asks and who answers can be flipped.
const askerSpeaker = computed(() => (props.exchange.askedBy === "SUBJECT" ? "SUBJECT" : "EXAMINER"));
const answererSpeaker = computed(() => (askerSpeaker.value === "SUBJECT" ? "EXAMINER" : "SUBJECT"));

const claims = computed(() =>
  (props.exchange.claims ?? []).map((claim) => ({
    claim,
    label: claimLabel(claim),
    verdict: verdictFor(claim),
  }))
);

// Hidden claims only move the needles; the list shows the rest.
const visibleClaims = computed(() => claims.value.filter(({ claim }) => !claim.hidden));

const exhibitLink = computed(() => {
  const project = props.exchange.exhibit;
  return project ? (project.liveDemo ?? project.github ?? "/projects") : undefined;
});

// Once the row scrolls in, the question and answer type out, then the claims and verdicts are
// written in one by one. The pens draw down the row over the same stretch of time.
const QUESTION_MS_PER_CHAR = 6;
const ANSWER_MS_PER_CHAR = 9;
const GAP_MS = 150;
const CLAIM_STAGGER_MS = 90;
// How long the pens take to catch up once the reveal is skipped.
const SKIPPED_TRACE_MS = 300;

const { element, isVisible } = useInView({ rootMargin: "0px 0px -15% 0px" });
const { typed, started, finished, active, duration, start, skip } = useTypewriter(
  () => [props.exchange.question, props.exchange.answer],
  [QUESTION_MS_PER_CHAR, ANSWER_MS_PER_CHAR],
  GAP_MS
);
const revealed = computed(() => visibleClaims.value.length + (exhibitLink.value ? 1 : 0));

// Takes its turn in the page's reveal queue; the next row waits for the claims to land too.
// A row the reader has already scrolled away from by its turn just fills in.
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
      await wait(revealed.value * CLAIM_STAGGER_MS);
    }
  });
});
watch(queue.skipped, (skipped) => skipped && skip(), { immediate: true });

const traceDuration = computed(() =>
  queue.skipped.value || filledIn.value
    ? SKIPPED_TRACE_MS
    : duration.value + revealed.value * CLAIM_STAGGER_MS
);

// The needles spike level with each claim. Until the row is measured they sit evenly
// through the lower part of the row.
const claimElements: HTMLElement[] = [];
const answerLine = ref<{ $el: HTMLElement } | null>(null);
const offsets = ref<number[]>([]);
const answerOffset = ref<number>();

function measure() {
  const height = element.value?.offsetHeight;
  if (!height) return;
  offsets.value = claimElements.map((el) => (el.offsetTop + el.offsetHeight / 2) / height);
  const answer = answerLine.value?.$el;
  if (answer) answerOffset.value = (answer.offsetTop + answer.offsetHeight / 2) / height;
}

// The offsets only matter once the pens draw, so rows far down the transcript don't measure
// (a forced layout each) until they start.
let observer: ResizeObserver | undefined;
onMounted(() => {
  watch(
    started,
    (go) => {
      if (!go || observer) return;
      measure();
      observer = new ResizeObserver(measure);
      if (element.value) observer.observe(element.value);
    },
    { immediate: true }
  );
});
onBeforeUnmount(() => observer?.disconnect());

// A hidden claim has no row, so its spike sits level with the answer. The rest line up with
// their row, counted among the visible claims only.
const spikes = computed<TraceSpike[]>(() => {
  let visibleIndex = 0;
  return claims.value.map(({ claim, verdict }, index) => {
    const fallback = 0.55 + (0.35 * (index + 1)) / (claims.value.length + 1);
    const at = claim.hidden
      ? (answerOffset.value ?? fallback)
      : (offsets.value[visibleIndex++] ?? fallback);
    return { at, verdict };
  });
});

function revealStyle(index: number) {
  const staggered = finished.value && !queue.skipped.value;
  return { transitionDelay: staggered ? `${index * CLAIM_STAGGER_MS}ms` : "0ms" };
}
</script>

<template>
  <PolygraphRow
    ref="transitionElement"
    :seed="seed"
    :spikes="spikes"
    :start="started"
    :duration="traceDuration">
    <div class="flex flex-col gap-2 py-3 pr-1 pl-2 leading-relaxed sm:pr-4 sm:pl-5">
      <PolygraphLine :speaker="askerSpeaker" :time="time">
        <PolygraphTyped :text="exchange.question" :typed="typed[0] ?? 0" :caret="active === 0" />
      </PolygraphLine>
      <PolygraphLine ref="answerLine" :speaker="answererSpeaker">
        <CaseFileHighlight v-if="exchange.highlight" :start="finished">
          <PolygraphTyped :text="exchange.answer" :typed="typed[1] ?? 0" :caret="active === 1" />
        </CaseFileHighlight>
        <PolygraphTyped
          v-else-if="exchange.redacted"
          redact
          :text="exchange.answer"
          :typed="typed[1] ?? 0"
          :caret="active === 1" />
        <PolygraphTyped
          v-else
          :text="exchange.answer"
          :typed="typed[1] ?? 0"
          :caret="active === 1" />
      </PolygraphLine>

      <ul
        v-if="visibleClaims.length || exhibitLink"
        class="flex flex-col gap-1.5 pt-1 sm:pl-[calc(8.5rem+1.5rem)]">
        <li
          v-for="({ claim, label, verdict }, index) in visibleClaims"
          :key="label"
          :ref="(el) => (claimElements[index] = el as HTMLElement)"
          class="flex items-center gap-2 transition-opacity duration-300 motion-reduce:transition-none"
          :class="finished ? '' : 'motion-safe:opacity-0'"
          :style="revealStyle(index)">
          <UIcon v-if="claim.skill" :name="paperIcon(claim.skill)" class="size-4 shrink-0" />
          <span class="font-mono text-sm tracking-wider whitespace-nowrap uppercase">
            {{ label }}
          </span>
          <span
            aria-hidden="true"
            class="flex-1 border-b-2 border-dotted border-(--ink-faint) sm:min-w-4" />
          <PolygraphVerdict :verdict="verdict" />
        </li>
        <li
          v-if="exchange.exhibit && exhibitLink"
          class="transition-opacity duration-300 motion-reduce:transition-none"
          :class="finished ? '' : 'motion-safe:opacity-0'"
          :style="revealStyle(visibleClaims.length)">
          <ULink
            :to="exhibitLink"
            :target="exhibitLink.startsWith('http') ? '_blank' : undefined"
            class="inline-flex items-center gap-1 font-mono text-xs tracking-[0.2em] text-(--pen-respiration) underline decoration-dotted underline-offset-4 hover:decoration-solid">
            EXHIBIT · {{ exchange.exhibit.name }}
            <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
          </ULink>
        </li>
      </ul>
    </div>
  </PolygraphRow>
</template>

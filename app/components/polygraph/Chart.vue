<script setup lang="ts">
import {
  POLYGRAPH_CONCLUSION,
  POLYGRAPH_EXAMINER,
  POLYGRAPH_ROUNDS,
  POLYGRAPH_START_TIME,
} from "~/utils/constants/about";
import { CASE_FILE_ID, CASE_FILE_SECTIONS } from "~/utils/constants/case-file";
import { timestampsFor } from "~/utils/polygraph";

type Row =
  | { kind: "heading"; title: string }
  | { kind: "exchange"; exchange: PolygraphExchange; time: string }
  | { kind: "rapid-fire"; round: Extract<PolygraphRound, { kind: "rapid-fire" }>; time: string };

// The script flattened into the rows printed down the paper, each with its own trace segment.
const timestamps = timestampsFor(POLYGRAPH_ROUNDS, POLYGRAPH_START_TIME);
const rows: Row[] = POLYGRAPH_ROUNDS.flatMap((round, r): Row[] => [
  { kind: "heading", title: round.title },
  ...(round.kind === "rapid-fire"
    ? [{ kind: "rapid-fire" as const, round, time: timestamps[r]![0]! }]
    : round.exchanges.map((exchange, e) => ({
        kind: "exchange" as const,
        exchange,
        time: timestamps[r]![e]!,
      }))),
]);

const PENS = [
  { label: "RESP", color: "var(--pen-respiration)" },
  { label: "CARDIO", color: "var(--pen-cardio)" },
  { label: "GSR", color: "var(--pen-gsr)" },
];

// Rows print one at a time; while anything is printing the reader can skip ahead, from the
// floating button or with Escape.
const queue = provideRevealQueue();
const canSkip = computed(() => queue.busy.value && !queue.skipped.value);

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape" && canSkip.value) queue.skip();
}
onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));

const dates = useCaseFileDates();
const fields = computed(() => [
  { label: "SUBJECT", value: "Pouyan Norouzi" },
  { label: "EXAMINER", value: POLYGRAPH_EXAMINER },
  { label: "DATE", value: dates.value.report },
  { label: "STARTED", value: POLYGRAPH_START_TIME },
]);
const contactSection = CASE_FILE_SECTIONS.find((section) => section.tocLabel === "Contact");
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <Transition
      enter-from-class="translate-y-4 opacity-0"
      leave-to-class="translate-y-4 opacity-0"
      enter-active-class="transition duration-300 motion-reduce:transition-none"
      leave-active-class="transition duration-300 motion-reduce:transition-none">
      <div
        v-if="canSkip"
        class="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center">
        <UButton
          color="neutral"
          variant="solid"
          icon="i-lucide-fast-forward"
          class="pointer-events-auto font-mono tracking-widest shadow-lg"
          @click="queue.skip()">
          SKIP PRINTOUT
          <UKbd value="Esc" class="ml-1" />
        </UButton>
      </div>
    </Transition>

    <div class="w-full drop-shadow-[0_10px_18px_rgb(0_0_0/0.3)]">
      <article class="polygraph-paper px-5 pt-6 pb-10 sm:px-9">
        <header class="relative flex flex-col gap-5 pb-6">
          <figure
            class="absolute top-3 right-0 hidden w-32 rotate-3 bg-white p-1.5 pb-5 shadow-md sm:block">
            <UIcon
              name="i-lucide-paperclip"
              class="absolute -top-4 left-6 size-8 -rotate-12 text-neutral-500" />
            <NuxtImg
              src="/me/2.webp"
              alt="Pouyan Norouzi standing on a garden path in sunglasses"
              width="128"
              height="128"
              loading="lazy"
              class="aspect-square w-full object-cover grayscale contrast-110" />
            <figcaption
              class="absolute inset-x-0 bottom-0.5 text-center font-hand text-base text-(--pen-respiration)">
              the subject
            </figcaption>
          </figure>

          <div class="flex flex-col gap-1 sm:pr-40">
            <span class="font-mono text-xs tracking-[0.3em] text-(--ink-muted)">
              CASE FILE {{ CASE_FILE_ID }} · CHART 1 OF 1
            </span>
            <h2 class="font-mono text-xl tracking-[0.2em] text-(--ink) sm:text-2xl">
              POLYGRAPH EXAMINATION
            </h2>
          </div>

          <dl class="grid gap-x-8 gap-y-3 sm:grid-cols-2 sm:pr-40">
            <div
              v-for="field in fields"
              :key="field.label"
              class="flex items-end gap-3 border-b border-(--ink-faint)">
              <dt class="font-mono text-xs tracking-[0.2em] text-(--ink-muted)">
                {{ field.label }}
              </dt>
              <dd class="font-hand text-2xl leading-tight text-(--pen-respiration)">
                {{ field.value }}
              </dd>
            </div>
          </dl>

          <ul
            aria-hidden="true"
            class="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs tracking-[0.2em] text-(--ink-muted)">
            <li v-for="pen in PENS" :key="pen.label" class="flex items-center gap-2">
              <span class="h-0.5 w-6" :style="{ background: pen.color }" />
              {{ pen.label }}
            </li>
          </ul>
        </header>

        <template v-for="(row, index) in rows" :key="index">
          <PolygraphRow v-if="row.kind === 'heading'" :seed="index">
            <h3
              class="flex items-center gap-3 pt-6 pb-2 pl-2 font-mono text-xs tracking-[0.3em] text-(--pen-cardio) uppercase sm:pl-5">
              {{ row.title }}
              <span
                aria-hidden="true"
                class="flex-1 border-t border-dashed border-current opacity-50" />
            </h3>
          </PolygraphRow>
          <PolygraphExchange
            v-else-if="row.kind === 'exchange'"
            :exchange="row.exchange"
            :time="row.time"
            :seed="index" />
          <PolygraphRapidFire v-else :round="row.round" :time="row.time" :seed="index" />
        </template>

        <PolygraphRow :seed="rows.length">
          <div class="flex flex-col gap-4 pt-8 pl-2 sm:pl-5">
            <p class="-rotate-2 font-hand text-3xl text-(--pen-cardio)">
              {{ POLYGRAPH_CONCLUSION }}
              <span class="whitespace-nowrap">— {{ POLYGRAPH_EXAMINER }}</span>
            </p>
            <span class="font-mono text-xs tracking-[0.3em] text-(--ink-muted)">
              — END OF CHART —
            </span>
          </div>
        </PolygraphRow>
      </article>
    </div>

    <ULink
      v-if="contactSection"
      :to="`/#${contactSection.id}`"
      class="inline-flex items-center gap-1.5 font-mono text-sm tracking-widest text-primary hover:underline">
      CONTACT DETAILS ARE IN THE MAIN FILE
      <UIcon name="i-lucide-arrow-right" class="size-4" />
    </ULink>
  </div>
</template>

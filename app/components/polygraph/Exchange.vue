<script setup lang="ts">
import type { TraceSpike } from "~/utils/polygraphTrace";
import { claimLabel, paperIcon, verdictFor } from "~/utils/polygraph";

const props = defineProps<{
  exchange: PolygraphExchange;
  time: string;
  seed: number;
}>();

const claims = computed(() =>
  (props.exchange.claims ?? []).map((claim) => ({
    claim,
    label: claimLabel(claim),
    verdict: verdictFor(claim),
  }))
);

const exhibitLink = computed(() => {
  const project = props.exchange.exhibit;
  return project ? (project.liveDemo ?? project.github ?? "/projects") : undefined;
});

// The needles spike level with each claim. Until the row is measured they sit evenly
// through the lower part of the row.
const row = useTemplateRef<ComponentPublicInstance>("row");
const claimElements: HTMLElement[] = [];
const offsets = ref<number[]>([]);

function measure() {
  const height = (row.value?.$el as HTMLElement | undefined)?.offsetHeight;
  if (!height) return;
  offsets.value = claimElements.map((el) => (el.offsetTop + el.offsetHeight / 2) / height);
}

let observer: ResizeObserver | undefined;
onMounted(() => {
  measure();
  observer = new ResizeObserver(measure);
  if (row.value) observer.observe(row.value.$el);
});
onBeforeUnmount(() => observer?.disconnect());

const spikes = computed<TraceSpike[]>(() =>
  claims.value.map(({ verdict }, index) => ({
    at: offsets.value[index] ?? 0.55 + (0.35 * (index + 1)) / (claims.value.length + 1),
    verdict,
  }))
);
</script>

<template>
  <PolygraphRow ref="row" :seed="seed" :spikes="spikes">
    <div class="flex flex-col gap-2 py-3 pr-1 pl-2 leading-relaxed sm:pr-4 sm:pl-5">
      <PolygraphLine speaker="EXAMINER" :time="time">{{ exchange.question }}</PolygraphLine>
      <PolygraphLine speaker="SUBJECT">
        <CaseFileHighlight v-if="exchange.highlight">{{ exchange.answer }}</CaseFileHighlight>
        <template v-else>{{ exchange.answer }}</template>
      </PolygraphLine>

      <ul
        v-if="claims.length || exhibitLink"
        class="flex flex-col gap-1.5 pt-1 sm:pl-[calc(8.5rem+1.5rem)]">
        <li
          v-for="({ claim, label, verdict }, index) in claims"
          :key="label"
          :ref="(el) => (claimElements[index] = el as HTMLElement)"
          class="flex items-center gap-2">
          <UIcon v-if="claim.skill" :name="paperIcon(claim.skill)" class="size-4 shrink-0" />
          <span class="font-mono text-sm tracking-wider whitespace-nowrap uppercase">
            {{ label }}
          </span>
          <span
            aria-hidden="true"
            class="flex-1 border-b-2 border-dotted border-(--ink-faint) sm:min-w-4" />
          <PolygraphVerdict :verdict="verdict" />
        </li>
        <li v-if="exchange.exhibit && exhibitLink">
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

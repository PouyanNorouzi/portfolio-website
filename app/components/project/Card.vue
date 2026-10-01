<script setup lang="ts">
import { LIVE_DEMO_TOASTS, PORTFOLIO_URL } from "~/utils/constants/projects";

interface Props {
  project: Project;
}

defineProps<Props>();

const url = useRequestURL();
const siteOrigin = new URL(useRuntimeConfig().public.siteUrl).origin;
const toast = useToast();

const clickedAmount = ref(0);

const currentNotification = computed<ToastNotification | null>(() => {
  return LIVE_DEMO_TOASTS[clickedAmount.value] ?? null;
});

// The live demo of this very site: production, the configured site URL, or whatever host is
// serving it now (localhost, a preview deploy).
const thisSite = new Set([new URL(PORTFOLIO_URL).origin, siteOrigin, url.origin]);
function isThisSite(link: string | undefined) {
  return !!link && thisSite.has(new URL(link).origin);
}

function handleCurrentSiteLiveDemo(e: MouseEvent, liveDemo: string | undefined) {
  // Let modified clicks (new tab, new window) through untouched.
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) return;
  if (isThisSite(liveDemo) && currentNotification.value) {
    e.preventDefault();
    toast.add(currentNotification.value);
    clickedAmount.value++;
  }
}

const { element, isVisible } = useInView(() => ({
  threshold: window.matchMedia("(min-width: 768px)").matches ? 0.5 : 0.1,
}));

// Cards render visible, so the prerendered page, crawlers and visitors without JavaScript see
// every project. Once mounted, only cards below the fold are hidden to fade in on scroll; the
// ones already on screen stay put.
const awaitingReveal = ref(false);
onMounted(() => {
  awaitingReveal.value = !!element.value && !isOnScreen(element.value);
});
</script>

<template>
  <UCard
    :id="`project-${project.id}`"
    ref="transitionElement"
    variant="soft"
    class="group scroll-mt-24 border border-default bg-default transition-[opacity,translate,border-color] duration-500 hover:border-primary motion-reduce:transition-colors motion-reduce:duration-300"
    :class="awaitingReveal && !isVisible ? 'motion-safe:translate-y-5 motion-safe:opacity-0' : ''"
    :ui="{ body: 'p-3.5 sm:p-3.5' }">
    <div class="flex flex-col gap-5 md:flex-row">
      <UModal
        :title="project.name"
        :description="`Screenshot of ${project.name}`"
        :ui="{ content: 'sm:max-w-6xl' }">
        <button
          type="button"
          :aria-label="`Enlarge ${project.name} screenshot`"
          class="group/image relative aspect-video cursor-zoom-in overflow-hidden rounded-md bg-elevated p-2 md:aspect-auto md:min-h-56 md:w-2/5 md:shrink-0">
          <NuxtImg
            :src="project.image"
            :alt="project.name"
            width="640"
            height="360"
            loading="lazy"
            class="size-full object-contain md:absolute md:inset-0 md:p-2" />
          <span
            class="absolute right-2 bottom-2 flex size-8 items-center justify-center rounded-md bg-default/80 text-muted opacity-0 transition-opacity group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
            <UIcon name="i-lucide-zoom-in" class="size-4" />
          </span>
        </button>

        <template #content="{ close }">
          <div class="flex flex-col gap-3 p-3">
            <div class="flex items-center justify-between gap-4 px-1">
              <CaseFileLabel>EVIDENCE · {{ project.name }}</CaseFileLabel>
              <UButton
                icon="i-lucide-x"
                variant="ghost"
                color="neutral"
                size="sm"
                aria-label="Close"
                @click="close" />
            </div>
            <NuxtImg
              :src="project.image"
              :alt="project.name"
              class="max-h-[80vh] w-full rounded-md bg-elevated object-contain" />
          </div>
        </template>
      </UModal>

      <div class="flex flex-1 flex-col gap-2.5 px-2 pb-1">
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <CaseFileLabel>INCIDENT · {{ formatProjectDates(project).toUpperCase() }}</CaseFileLabel>
          <span class="font-mono text-xs tracking-widest text-primary">
            FILE OP-{{ String(project.id).padStart(3, "0") }}
          </span>
        </div>

        <h2 class="font-name text-xl font-bold text-highlighted md:text-2xl">{{ project.name }}</h2>

        <div v-if="project.tags.length" class="flex flex-wrap gap-1.5">
          <UBadge
            v-for="tag in project.tags"
            :key="tag"
            :label="tag"
            variant="outline"
            color="neutral"
            size="sm"
            class="font-mono tracking-wider uppercase" />
        </div>

        <p class="text-sm leading-relaxed text-pretty text-muted">
          {{ project.description }}
        </p>

        <div class="mt-auto flex flex-col gap-2 border-t border-dashed border-default pt-3">
          <CaseFileLabel>EQUIPMENT USED</CaseFileLabel>
          <div class="flex flex-wrap items-center gap-1">
            <SkillBadge v-for="tech in project.techStack" :key="tech.title" :skill="tech" />

            <div class="ml-auto flex gap-1">
              <UTooltip v-if="project.github" text="View Code">
                <UButton
                  :to="project.github"
                  target="_blank"
                  variant="ghost"
                  color="neutral"
                  size="sm"
                  icon="i-lucide-github"
                  :aria-label="`${project.name} source code (opens in a new tab)`" />
              </UTooltip>

              <UTooltip v-if="project.liveDemo" text="View Live Demo">
                <UButton
                  :to="project.liveDemo"
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  icon="i-lucide-external-link"
                  color="primary"
                  :aria-label="`${project.name} live demo (opens in a new tab)`"
                  @click="(e) => handleCurrentSiteLiveDemo(e, project.liveDemo)" />
              </UTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>

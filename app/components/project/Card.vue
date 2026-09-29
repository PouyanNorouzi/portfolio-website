<script setup lang="ts">
interface Props {
  project: Project;
}

defineProps<Props>();

const url = useRequestURL();
const toast = useToast();

const alreadyHereNotifications = ref<ToastNotification[]>([
  {
    title: "You're Already Here",
    description: "No need to go anywhere — this is the live demo. Look around, stay awhile.",
    icon: "i-lucide-eye",
    color: "info",
  },
  {
    title: "Déjà Vu?",
    description: "You... clicked it again? This *is* the site. Nothing's changed, promise.",
    icon: "i-lucide-refresh-cw",
    color: "neutral",
  },
  {
    title: "Bold Strategy",
    description: "Clicking the live demo *again* might just make it more live. Let’s find out.",
    icon: "i-lucide-zap",
    color: "secondary",
  },
  {
    title: "Seriously?",
    description:
      "This is like pressing the elevator button repeatedly. It doesn’t make it go faster.",
    icon: "i-lucide-alert-triangle",
    color: "warning",
  },
  {
    title: "Fascinating Choice",
    description: "You’re either testing me or just really committed to this bit.",
    icon: "i-lucide-help-circle",
    color: "warning",
  },
  {
    title: "Stop It.",
    description: "This isn’t a mirror. You're breaking the portfolio’s self-esteem.",
    icon: "i-lucide-shield-off",
    color: "error",
  },
  {
    title: "Fine. Go Ahead.",
    description: "You’ve broken my will. The next click actually opens it. Happy now?",
    icon: "i-lucide-door-open",
    color: "error",
  },
]);
const clickedAmount = ref(0);

const currentNotification = computed<ToastNotification | null>(() => {
  const clicked = clickedAmount.value;
  const notifications = alreadyHereNotifications.value as ToastNotification[];

  if (clicked >= 0 && clicked < notifications.length) {
    return notifications[clicked]!;
  }
  return null;
});

function handleCurrentSiteLiveDemo(e: MouseEvent, liveDemo: string | undefined) {
  if (liveDemo === url.origin && currentNotification.value) {
    e.preventDefault();
    toast.add(currentNotification.value);
    clickedAmount.value++;
  }
}

const { isVisible } = useInView(() => ({
  threshold: window.matchMedia("(min-width: 768px)").matches ? 0.5 : 0.1,
}));
</script>

<template>
  <UCard
    :id="`project-${project.id}`"
    ref="transitionElement"
    variant="soft"
    class="group scroll-mt-24 border border-default bg-default transition-[opacity,translate,border-color] duration-500 hover:border-primary motion-reduce:transition-colors motion-reduce:duration-300"
    :class="isVisible ? 'translate-y-0 opacity-100' : 'motion-safe:translate-y-5 motion-safe:opacity-0'"
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

        <h3 class="font-name text-xl font-bold text-highlighted md:text-2xl">{{ project.name }}</h3>

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
                  aria-label="View Code" />
              </UTooltip>

              <UTooltip v-if="project.liveDemo" text="View Live Demo">
                <UButton
                  :to="project.liveDemo"
                  target="_blank"
                  variant="ghost"
                  size="sm"
                  icon="i-lucide-external-link"
                  color="primary"
                  aria-label="View Live Demo"
                  @click="(e) => handleCurrentSiteLiveDemo(e, project.liveDemo)" />
              </UTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>

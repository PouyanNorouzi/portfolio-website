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
  const notifications = alreadyHereNotifications.value;

  if (clicked >= 0 && clicked < notifications.length) {
    return notifications[clicked];
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

const { isVisible } = useInView(0.5);
</script>

<template>
  <UCard
    ref="transitionElement"
    class="project-card"
    variant="soft"
    :style="{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 0.5s`,
    }">
    <div class="flex flex-col md:flex-row gap-4 h-full">
      <!-- Left side - Image -->
      <div
        class="relative md:w-1/3 md:flex md:items-stretch overflow-hidden md:min-h-[250px] image-container">
        <div class="relative w-full h-full transition-all duration-500">
          <NuxtImg
            :src="project.image"
            :alt="project.name"
            class="w-full md:h-full object-fill md:absolute md:inset-0 md:rounded-l-lg"
            preload />
          <div class="absolute top-2 right-2 flex gap-2">
            <UBadge v-for="tag in project.tags" :key="tag" :label="tag" variant="solid" size="xs" />
          </div>
        </div>
      </div>

      <!-- Right side - Content -->
      <div class="flex flex-col flex-1 justify-between">
        <div>
          <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4 text-sm">
            {{ project.description }}
          </p>

          <div class="mb-4">
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">
              {{ formatProjectDates(project) }}
            </p>
          </div>

          <div class="mb-4">
            <h4 class="text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">Tech Stack:</h4>
            <div class="flex flex-wrap gap-1">
              <SkillBadge v-for="tech in project.techStack" :key="tech.title" :skill="tech" />
            </div>
          </div>
        </div>

        <div class="flex gap-2 justify-end">
          <UTooltip text="View Code">
            <UButton
              v-if="project.github"
              :to="project.github"
              target="_blank"
              variant="ghost"
              size="sm"
              icon="i-lucide-github" />
          </UTooltip>

          <UTooltip text="View Live Demo">
            <UButton
              v-if="project.liveDemo"
              :to="project.liveDemo"
              target="_blank"
              variant="ghost"
              size="sm"
              icon="i-lucide-external-link"
              color="primary"
              @click="(e) => handleCurrentSiteLiveDemo(e, project.liveDemo)" />
          </UTooltip>
        </div>
      </div>
    </div>
  </UCard>
</template>

<style scoped>
.project-card {
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease-in-out,
    border-color 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 12px 28px var(--color-shadow);
  border-color: var(--color-primary);
}

.project-card:hover::before {
  opacity: 1;
}

.project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Add deep selector to ensure card inner container has full height */
@media (min-width: 768px) {
  .project-card:deep(.u-card-inner) {
    height: 100%;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--color-primary), 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(var(--color-primary), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--color-primary), 0);
  }
}
</style>

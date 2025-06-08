<script setup lang="ts">
import { computed } from 'vue';

// Define props for the single card
const props = defineProps<{
  card: AboutCardItem;
  index: number; // For animation timing
}>();

// Get background color class using switch case
const getIconBgClass = (color: NuxtUIColor) => {
  switch (color) {
    case 'primary':
      return 'bg-primary-100 dark:bg-primary-900/30';
    case 'secondary':
      return 'bg-secondary-100 dark:bg-secondary-900/30';
    case 'tertiary':
      return 'bg-tertiary-100 dark:bg-tertiary-900/30';
    case 'success':
      return 'bg-success-100 dark:bg-success-900/30';
    case 'info':
      return 'bg-info-100 dark:bg-info-900/30';
    case 'warning':
      return 'bg-warning-100 dark:bg-warning-900/30';
    case 'error':
      return 'bg-error-100 dark:bg-error-900/30';
    case 'neutral':
      return 'bg-neutral-100 dark:bg-neutral-900/30';
    default:
      return 'bg-gray-100 dark:bg-gray-900/30';
  }
};

// Get text color class using switch case
const getIconTextClass = (color: NuxtUIColor) => {
  switch (color) {
    case 'primary':
      return 'text-primary-500';
    case 'secondary':
      return 'text-secondary-500';
    case 'tertiary':
      return 'text-tertiary-500';
    case 'success':
      return 'text-success-500';
    case 'info':
      return 'text-info-500';
    case 'warning':
      return 'text-warning-500';
    case 'error':
      return 'text-error-500';
    case 'neutral':
      return 'text-neutral-500';
    default:
      return 'text-gray-500';
  }
};

const iconContainerClass = computed(() => {
  return `card-icon ${getIconBgClass(props.card.color as NuxtUIColor)} mb-4`;
});

const iconClass = computed(() => {
  return `${getIconTextClass(props.card.color as NuxtUIColor)} text-3xl`;
});

const animationClass = computed(() => {
  return `animate-fade-slide-up-${props.index}`;
});
</script>

<template>
  <div class="flex h-full w-full" :class="animationClass">
    <UCard :ui="{ body: 'p-5' }" class="h-full w-full flex flex-col">
      <div class="text-center flex flex-col flex-1">
        <div :class="iconContainerClass">
          <UIcon :name="card.icon" :class="iconClass" />
        </div>
        <h3 class="text-xl font-bold mb-2">{{ card.title }}</h3>
        <p class="text-gray-600 dark:text-gray-400">{{ card.description }}</p>
      </div>
    </UCard>
  </div>
</template>

<style scoped>
.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto;
}

/* Ensure UCard inner container takes full height */
:deep(.u-card) {
  height: 100%;
}

.animate-fade-slide-up-0 {
  animation: fadeSlideUp 0.8s ease-out 0.2s both;
}
.animate-fade-slide-up-1 {
  animation: fadeSlideUp 0.8s ease-out 0.4s both;
}
.animate-fade-slide-up-2 {
  animation: fadeSlideUp 0.8s ease-out 0.6s both;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

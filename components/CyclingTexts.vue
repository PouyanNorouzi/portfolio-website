<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

interface Props {
  /**
   * Array of strings to cycle through
   */
  texts: TextWithIcon[];

  /**
   * Duration each text is displayed in milliseconds
   */
  cycleDuration?: number;

  /**
   * Duration of the fade transition in milliseconds
   */
  transitionDuration?: number;

  /**
   * CSS class(es) to apply to the text element
   */
  textClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  cycleDuration: 3000,
  transitionDuration: 500,
  textClass: "",
});

// Reactive state
const currentIndex = ref(0);
const isVisible = ref(true);

// Timers
let cycleTimer: number | null = null;
let transitionTimer: number | null = null;

// Computed for better readability
const currentTextWithIcon = computed(() => props.texts[currentIndex.value]);

// Animation style with dynamic transition duration
const animationStyle = computed(() => {
  return {
    transition: `opacity ${props.transitionDuration}ms ease-in-out`,
  };
});

/**
 * Cycle to the next text with fade out/in animation
 */
const cycleText = () => {
  // Start fade out
  isVisible.value = false;

  // Wait for fade out to complete
  transitionTimer = window.setTimeout(() => {
    // Update to next text
    currentIndex.value = (currentIndex.value + 1) % props.texts.length;

    // Start fade in
    isVisible.value = true;

    // Schedule next cycle
    cycleTimer = window.setTimeout(cycleText, props.cycleDuration);
  }, props.transitionDuration);
};

// Start the animation when component is mounted
onMounted(() => {
  // Set first text visible
  isVisible.value = true;

  // Schedule first text transition after first cycle
  if (props.texts.length > 1) {
    cycleTimer = window.setTimeout(cycleText, props.cycleDuration);
  }
});

// Clean up timers when component is unmounted
onUnmounted(() => {
  if (cycleTimer !== null) clearTimeout(cycleTimer);
  if (transitionTimer !== null) clearTimeout(transitionTimer);
});
</script>

<template>
  <span
    :class="[
      textClass,
      { 'opacity-0': !isVisible, 'opacity-100': isVisible },
      'inline-block h-8 relative align-middle',
    ]"
    :style="animationStyle">
    {{ currentTextWithIcon.text }}
    <UIcon
      v-if="currentTextWithIcon.icon"
      :name="currentTextWithIcon.icon"
      class="align-middle"
      size="24px" />
  </span>
</template>

<style scoped></style>

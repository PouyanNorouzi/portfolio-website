<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

interface Props {
  /**
   * Array of strings or TextWithIcon objects to cycle through
   */
  texts: TextWithIcon[];

  /**
   * Speed of typing in milliseconds per character
   */
  typingSpeed?: number;

  /**
   * Delay in milliseconds before erasing
   */
  pauseDelay?: number;

  /**
   * Speed of erasing in milliseconds per character
   */
  erasingSpeed?: number;

  /**
   * Delay in milliseconds before typing next text
   */
  nextTextDelay?: number;

  /**
   * CSS class(es) to apply to the text element
   */
  textClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  typingSpeed: 50,
  pauseDelay: 2000,
  erasingSpeed: 25,
  nextTextDelay: 500,
  textClass: "",
});

// Reactive state
const currentIndex = ref(0);
const displayText = ref("");
const isErasing = ref(false);
const showCursor = ref(true);
const showIcon = ref(false);
// Timer references for cleanup
let animationTimer: number | null = null;
let cursorTimer: number | null = null;
let iconTimer: number | null = null;

// Get current text content
const currentTextContent = computed(() => {
  const currentText = props.texts[currentIndex.value];
  if (typeof currentText === "string") {
    return currentText;
  } else {
    return currentText.text;
  }
});

// Get current icon if available
const currentIcon = computed(() => {
  const currentText = props.texts[currentIndex.value];
  if (typeof currentText === "string") {
    return null;
  } else {
    return currentText.icon;
  }
});

/**
 * Type the current text character by character
 */
const typeText = () => {
  const textToType = currentTextContent.value;
  const textLength = textToType.length;
  const charIndex = displayText.value.length;

  if (charIndex < textLength) {
    displayText.value = textToType.substring(0, charIndex + 1);
    animationTimer = window.setTimeout(typeText, props.typingSpeed);
  } else {
    iconTimer = window.setTimeout(() => {
      showIcon.value = true;
    }, props.typingSpeed);

    // Finished typing, pause before erasing
    animationTimer = window.setTimeout(() => {
      isErasing.value = true;
      // erase the icon
      showIcon.value = false;
      // wait the required amound before deleting the rest
      window.setTimeout(eraseText, props.typingSpeed)
    }, props.pauseDelay);
  }
};

/**
 * Erase the current text character by character
 */
const eraseText = () => {
  if (displayText.value.length > 0) {
    displayText.value = displayText.value.substring(0, displayText.value.length - 1);
    animationTimer = window.setTimeout(eraseText, props.erasingSpeed);
  } else {
    // Finished erasing, move to next text
    isErasing.value = false;
    currentIndex.value = (currentIndex.value + 1) % props.texts.length;
    animationTimer = window.setTimeout(typeText, props.nextTextDelay);
  }
};

/**
 * Create blinking cursor effect
 */
const blinkCursor = () => {
  cursorTimer = window.setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 500);
};

// Start animation sequence when component is mounted
onMounted(() => {
  blinkCursor();
  animationTimer = window.setTimeout(typeText, props.nextTextDelay);
});

// Clean up timers when component is unmounted
onUnmounted(() => {
  if (animationTimer) clearTimeout(animationTimer);
  if (cursorTimer) clearInterval(cursorTimer);
  if (iconTimer) clearTimeout(iconTimer);
});
</script>

<template>
  <span :class="[textClass, 'inline-flex items-center']">
    {{ displayText }}
    <UIcon
      v-if="currentIcon"
      v-show="showIcon"
      :name="currentIcon"
      class="items-center ml-1"
      size="24px" />
    <span class="cursor ml-0.5" :class="{ 'cursor-blink': showCursor }">|</span>
  </span>
</template>

<style scoped>
.cursor {
  display: inline-block;
  font-weight: 100;
  color: currentColor;
  margin-left: 1px;
}

.cursor-blink {
  opacity: 1;
}

.cursor:not(.cursor-blink) {
  opacity: 0;
}

.text-content {
  min-height: 1.5em;
  display: inline-block;
}
</style>

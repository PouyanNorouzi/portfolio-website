<script setup lang="ts">
// Markdown images open full size in a modal, by click or keyboard. The modal handles Escape,
// traps focus while open and hands it back to the image when it closes.
const {
  src = "",
  alt = "",
  width = undefined,
  height = undefined,
} = defineProps<{
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}>();
</script>

<template>
  <UModal
    :title="alt || 'Image'"
    description="Enlarged image"
    :ui="{
      overlay: 'bg-black/80 backdrop-blur-sm',
      content: 'w-auto max-w-[95vw] bg-transparent shadow-none ring-0',
    }">
    <button
      type="button"
      :aria-label="alt ? `Enlarge image: ${alt}` : 'Enlarge image'"
      class="mx-auto block w-fit cursor-zoom-in rounded-md">
      <img :src :alt :width :height loading="lazy" decoding="async" class="block rounded-md" />
    </button>

    <template #content="{ close }">
      <button type="button" aria-label="Close image" class="cursor-zoom-out" @click="close">
        <img :src :alt class="max-h-[95vh] max-w-[95vw] rounded-md object-contain" />
      </button>
    </template>
  </UModal>
</template>

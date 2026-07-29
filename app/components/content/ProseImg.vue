<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const open = ref(false);

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") open.value = false;
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <img
    :src="src"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
    class="block mx-auto rounded-md will-change-transform cursor-zoom-in"
    @click="open = true" />

  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
      @click="open = false">
      <img
        :src="src"
        :alt="props.alt"
        class="max-w-[95vw] max-h-[95vh] object-contain rounded-md" />
    </div>
  </Teleport>
</template>

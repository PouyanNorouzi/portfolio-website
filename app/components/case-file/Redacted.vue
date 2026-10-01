<script setup lang="ts">
// Either wrap inline content in the slot, or pass `lines` for a multi-line block.
// For `lines`, `hidden` is text of the same shape as the real content. It is never
// visible; it only sizes each bar so every hidden line has its own realistic length.
// `shown` is what that line reads once revealed.
defineProps<{ lines?: { hidden: string; shown: string }[] }>();

const declassified = useDeclassified();
const origin = useDeclassifyOrigin();
const root = useTemplateRef<HTMLElement>("root");
const hovered = ref(false);
const pinned = ref(false);
const revealed = computed(() => declassified.value || hovered.value || pinned.value);

// Declassifying peels the bars in a wave from the button, nearest first. The delay
// is cleared once the bar has moved so hover and tap reveals stay instant.
const waveDelay = ref(0);
let waveTimer: ReturnType<typeof setTimeout> | undefined;

watch(declassified, () => {
  clearTimeout(waveTimer);
  const rect = root.value?.getBoundingClientRect();
  if (!rect || !origin.value || prefersReducedMotion()) return;
  const distance = Math.hypot(
    rect.left + rect.width / 2 - origin.value.x,
    rect.top + rect.height / 2 - origin.value.y
  );
  waveDelay.value = Math.min(distance / 1200, 0.9);
  waveTimer = setTimeout(() => (waveDelay.value = 0), (waveDelay.value + 0.5) * 1000);
});

onBeforeUnmount(() => clearTimeout(waveTimer));

// Shared by both root variants. A mouse hover peeks, while click, tap, Enter and
// Space pin it open. Touch is ignored for hover so a tap doesn't reveal then re-hide.
const toggle = computed(() => ({
  "role": "button",
  "tabindex": 0,
  "aria-pressed": revealed.value,
  "onPointerenter": (event: PointerEvent) => {
    if (event.pointerType === "mouse") hovered.value = true;
  },
  "onPointerleave": () => (hovered.value = false),
  // Redactions can sit inside links (e.g. operation cards), so a tap should only
  // toggle the redaction and not follow the link.
  "onClick": (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    pinned.value = !pinned.value;
  },
  "onKeydown": (event: KeyboardEvent) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    pinned.value = !pinned.value;
  },
}));
</script>

<template>
  <span
    v-if="lines"
    ref="root"
    v-bind="toggle"
    class="inline-flex cursor-help flex-col items-start gap-1 rounded-sm outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-solid">
    <span
      v-for="line in lines"
      :key="line.hidden"
      class="relative inline-grid rounded-sm px-1 outline-1 outline-dashed transition-colors duration-300"
      :class="revealed ? 'outline-error' : 'outline-transparent'">
      <span aria-hidden="true" class="invisible col-start-1 row-start-1 whitespace-nowrap">
        {{ line.hidden }}
      </span>
      <span class="col-start-1 row-start-1 text-center whitespace-nowrap">{{ line.shown }}</span>
      <span
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 origin-right rounded-sm bg-inverted transition-transform duration-500 ease-in-out motion-reduce:transition-none"
        :class="revealed ? 'scale-x-0' : 'scale-x-100'"
        :style="{ transitionDelay: `${waveDelay}s` }" />
    </span>
  </span>
  <span
    v-else
    ref="root"
    v-bind="toggle"
    :style="{ transitionDelay: `${waveDelay}s` }"
    class="cursor-help rounded-sm bg-[linear-gradient(var(--ui-bg-inverted),var(--ui-bg-inverted))] bg-right bg-no-repeat box-decoration-clone px-1 outline-1 outline-dashed transition-[background-size,color,outline-color] duration-500 ease-in-out motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-solid"
    :class="
      revealed
        ? 'bg-size-[0%_100%] outline-error'
        : 'bg-size-[100%_100%] text-transparent outline-transparent'
    ">
    <slot />
  </span>
</template>

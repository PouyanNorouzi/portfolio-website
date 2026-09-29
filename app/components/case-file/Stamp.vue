<script setup lang="ts">
const stamp = useTemplateRef<HTMLElement>("stamp");
const visible = ref(false);
let observer: IntersectionObserver | undefined;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) {
      visible.value = true;
      observer?.disconnect();
    }
  });
  if (stamp.value) observer.observe(stamp.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div
    ref="stamp"
    class="pointer-events-none rounded-sm border-4 border-error font-mono text-error opacity-0"
    :class="{ 'motion-safe:animate-stamp-in motion-reduce:opacity-90': visible }">
    <slot />
  </div>
</template>

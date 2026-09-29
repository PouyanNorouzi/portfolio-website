<script setup lang="ts">
defineProps<{ size?: "sm" | "md" }>();
</script>

<template>
  <div
    :class="
      size === 'sm'
        ? 'bg-[repeating-linear-gradient(45deg,var(--ui-error)_0_8px,var(--color-neutral-950)_8px_16px)] py-1'
        : 'bg-[repeating-linear-gradient(45deg,var(--ui-error)_0_14px,var(--color-neutral-950)_14px_28px)] py-1.5'
    ">
    <div
      class="bg-neutral-950 text-center font-name font-bold tracking-[0.3em] text-neutral-50 motion-safe:animate-banner-in"
      :class="size === 'sm' ? 'px-4 py-2 text-xs sm:text-sm' : 'px-5 py-3.5 text-base sm:text-xl'">
      <slot />
    </div>
  </div>
</template>

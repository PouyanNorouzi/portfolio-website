<script setup lang="ts">
defineProps<{ size?: "xs" | "sm" | "md" }>();

const stripe = {
  xs: "bg-[repeating-linear-gradient(45deg,var(--ui-error)_0_6px,var(--color-neutral-950)_6px_12px)] py-[3px]",
  sm: "bg-[repeating-linear-gradient(45deg,var(--ui-error)_0_8px,var(--color-neutral-950)_8px_16px)] py-1",
  md: "bg-[repeating-linear-gradient(45deg,var(--ui-error)_0_14px,var(--color-neutral-950)_14px_28px)] py-1.5",
};

const inner = {
  xs: "px-3 py-0.5 text-xs leading-4",
  sm: "px-4 py-2 text-xs sm:text-sm motion-safe:animate-banner-in",
  md: "px-5 py-3.5 text-base sm:text-xl motion-safe:animate-banner-in",
};
</script>

<!-- The xs size sits in the site header and footer, so it skips the entrance animation. -->
<template>
  <div :class="stripe[size ?? 'md']">
    <div
      class="bg-neutral-950 text-center font-name font-bold tracking-[0.3em] text-neutral-50"
      :class="inner[size ?? 'md']">
      <slot />
    </div>
  </div>
</template>

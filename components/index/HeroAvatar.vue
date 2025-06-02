<script setup lang="ts">
interface Props {
  text?: string;
  imageUrl?: string;
}

withDefaults(defineProps<Props>(), {
  imageUrl: undefined,
  text: "Avatar",
});

</script>

<template>
  <div class="hero-avatar">
    <!-- Image Avatar -->
    <NuxtImg v-if="imageUrl" :src="imageUrl" :alt="text" class="avatar-float rounded-full w-64 h-64 object-cover" />
    <!-- Text Avatar -->
    <div
      v-else
      class="avatar-placeholder avatar-float rounded-full flex items-center justify-center font-bold text-white">
      {{ text }}
    </div>
  </div>
</template>

<style scoped>
.avatar-placeholder {
  background: linear-gradient(45deg, rgb(var(--color-primary-500)), rgb(var(--color-primary-400)));
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.avatar-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>

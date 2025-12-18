<script setup lang="ts">
// Card items data
const cards = ref<AboutCardItem[]>([
  {
    title: "Software Engineer",
    icon: "i-lucide-code-2",
    description: "Building modern applications with clean, efficient code",
    color: "primary",
  },
  {
    title: "BCIT Graduate",
    icon: "i-lucide-graduation-cap",
    description: "Computer Systems Diploma, Cloud Computing Option",
    color: "secondary",
  },
  {
    title: "Technology Explorer",
    icon: "i-lucide-rocket",
    description: "Always learning and experimenting with new tools",
    color: "tertiary",
  },
]);
</script>

<template>
  <section class="about-hero">
    <UContainer>
      <div class="cards-container grid md:grid-cols-3 gap-6 mb-8">
        <AboutCard
          v-for="(card, index) in cards"
          :key="index"
          :card="card"
          :index="index"
        />
      </div>

      <div class="overview mt-6 md:mt-8 md:w-3/4 mx-auto text-center animate-fade-in-delay">
        <p class="md:text-lg">
          I'm a recent BCIT graduate with a Computer Systems Diploma, specializing in cloud computing.
          My education combined theoretical foundations with practical projects, allowing me to develop
          skills across the entire development stack.
        </p>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.8s both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Add subtle background pattern */
.about-hero {
  position: relative;
  overflow: hidden;
}

.about-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at top right,
    rgba(var(--color-primary-500), 0.03) 0%,
    transparent 70%
  );
  z-index: 0;
  pointer-events: none;
}

p {
  position: relative;
  z-index: 1;
}
</style>

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
    title: "BCIT Student",
    icon: "i-lucide-graduation-cap",
    description: "Computer Systems Technology, Cloud Computing Option",
    color: "teal",
  },
  {
    title: "Technology Explorer",
    icon: "i-lucide-rocket",
    description: "Always learning and experimenting with new tools",
    color: "amber",
  },
]);
</script>

<template>
  <section class="about-hero py-10 md:py-12">
    <UContainer>
      <div class="text-center mb-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-3">About Me</h1>
        <div class="w-20 h-1 bg-primary mx-auto" />
      </div>

      <div class="cards-container grid md:grid-cols-3 gap-6 mb-8">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex h-full"
          :class="[`animate-fade-slide-up-${index}`]">
          <UCard :ui="{ body: 'p-5' }" class="h-full flex flex-col">
            <div class="text-center flex flex-col flex-1">
              <div :class="`card-icon bg-${card.color}-50 dark:bg-${card.color}-900/30 mb-4`">
                <UIcon :name="card.icon" :class="`text-${card.color}-500 text-3xl`" />
              </div>
              <h3 class="text-xl font-bold mb-2">{{ card.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ card.description }}</p>
            </div>
          </UCard>
        </div>
      </div>

      <div class="overview mt-12 md:mt-16 md:w-3/4 mx-auto text-center animate-fade-in-delay">
          <p class="text-lg md:text-xl mb-6">
            I'm a Computer Systems student at BCIT with a focus on cloud computing. My education combines
            theoretical foundations with practical projects, allowing me to develop skills across the
            entire development stack.
          </p>

          <p class="text-gray-600 dark:text-gray-400">
            When I'm not studying, I enjoy building side projects and experimenting with new technologies.
            My approach centers on writing maintainable code that solves real problems while delivering
            great user experiences.
          </p>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto;
}

/* Ensure UCard inner container takes full height */
:deep(.u-card) {
  height: 100%;
}

.animate-fade-slide-up-0 {
  animation: fadeSlideUp 0.8s ease-out 0.2s both;
}

.animate-fade-slide-up-1 {
  animation: fadeSlideUp 0.8s ease-out 0.4s both;
}

.animate-fade-slide-up-2 {
  animation: fadeSlideUp 0.8s ease-out 0.6s both;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.8s both;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  background: radial-gradient(circle at top right, rgba(var(--color-primary-500), 0.03) 0%, transparent 70%);
  z-index: 0;
  pointer-events: none;
}

p {
  position: relative;
  z-index: 1;
}
</style>

<script setup lang="ts">
// Card items data
const cards = ref<AboutCardItem[]>([
  {
    title: "Developer",
    icon: "i-lucide-code",
    description: "Building full-stack web applications with modern technologies",
    color: "primary",
  },
  {
    title: "Student",
    icon: "i-lucide-graduation-cap",
    description: "Pursuing Computer Systems Diploma at BCIT",
    color: "teal",
  },
  {
    title: "Problem Solver",
    icon: "i-lucide-puzzle",
    description: "Turning complex challenges into elegant solutions",
    color: "amber",
  },
]);
</script>

<template>
  <section class="about-hero py-12 md:py-16">
    <UContainer>
      <div class="text-center mb-10">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <div class="w-20 h-1 bg-primary mx-auto mb-6" />
      </div>

      <div class="cards-container grid md:grid-cols-3 gap-6">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex h-full"
          :class="[`animate-fade-slide-up-${index}`]">
          <UCard :ui="{ body: 'p-6' }" class="h-full flex flex-col">
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
          I'm Pouyan Norouzi, an aspiring Full Stack Developer passionate about creating innovative
          digital solutions that combine elegant design with robust functionality.
        </p>
        <p class="text-gray-600 dark:text-gray-400">
          Currently pursuing my Computer Systems Diploma at BCIT, I focus on developing
          user-friendly applications that solve real-world problems, utilizing modern web
          technologies and best practices.
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
  width: 70px;
  height: 70px;
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
</style>

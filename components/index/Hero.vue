<script setup lang="ts">
const roleTexts = ref<TextWithIcon[]>([
  { text: "Full Stack Developer", icon: "i-lucide-layers" },
  { text: "UI/UX Designer", icon: "i-lucide-palette" },
  { text: "Problem Solver", icon: "i-lucide-lightbulb" },
  { text: "System Architect", icon: "i-lucide-server" },
  { text: "Database Expert", icon: "i-lucide-database" },
  { text: "Cloud Solution Builder", icon: "i-lucide-cloud" },
  { text: "Security Advocate", icon: "i-lucide-shield" },
  { text: "DevOps Specialist", icon: "i-lucide-settings" },
  { text: "Digital Innovator", icon: "i-lucide-sparkles" },
  { text: "Performance Engineer", icon: "i-lucide-zap" },
]);
</script>

<template>
  <div class="hero flex items-center py-8">
    <UContainer>
      <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <!-- Avatar appears first on mobile, second on desktop -->
          <div
            class="hero-visual flex justify-center lg:col-span-1 lg:justify-end order-first lg:order-last mb-4 lg:mb-0">
            <IndexHeroAvatar image-url="/me/1.png" text="P" />
          </div>
          <div class="hero-content text-center lg:col-span-2 lg:text-left order-last lg:order-first">
            <div class="mb-3">
              <h1 class="text-2xl md:text-5xl font-bold mb-1">
                Hi, I'm <span class="text-primary font-name">Pouyan Norouzi</span>
              </h1>
              <p class="text-md md:text-2xl font-medium text-gray-700 dark:text-gray-200">
                <CyclingTexts :texts="roleTexts" text-class="font-medium text-secondary" />
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <UButton to="/projects" size="xl" icon="i-lucide-folder"> View My Work </UButton>
              <UButton to="/about" variant="outline" size="md" icon="i-lucide-info">
                About Me
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.hero-content {
  animation: fadeInLeft 0.8s ease-out;
}

.hero-visual {
  animation: fadeInRight 0.8s ease-out;
}

@media (max-width: 1023px) {
  .hero-visual {
    animation: fadeInDown 0.8s ease-out;
  }

  .hero-content {
    animation: fadeInUp 0.8s ease-out;
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

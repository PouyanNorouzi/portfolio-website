<script setup lang="ts">
// No additional setup needed for this simple hero component
</script>

<template>
  <div class="hero flex items-center py-16">
    <UContainer>
      <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div class="hero-content text-center lg:text-left space-y-6">
            <h1 class="text-4xl md:text-6xl font-bold">
              Hi, I'm <span class="text-primary">Pouyan</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Full Stack Developer & Problem Solver
            </p>
            <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl lg:max-w-none">
              I create digital experiences that bridge the gap between design and functionality,
              building web applications that users love and businesses rely on.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <UButton to="/projects" size="lg" icon="i-lucide-folder"> View My Work </UButton>
              <UButton to="/about" variant="outline" size="lg" icon="i-lucide-info">
                About Me
              </UButton>
            </div>
          </div>
          <div class="hero-visual flex justify-center lg:justify-end">
            <HeroAvatar text="P" size="lg" />
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


</style>

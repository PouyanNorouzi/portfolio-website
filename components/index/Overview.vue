<script setup lang="ts">
// No additional setup needed for this component
</script>

<template>
  <section class="overview-section pb-5 bg-gray-50 dark:bg-gray-900">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Left column with section heading -->
        <div class="lg:col-span-4">
          <h2 class="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            About <span class="text-primary">Me</span>
          </h2>
          <div class="h-1 w-24 bg-primary mb-6" />
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Get to know my journey, approach to development, and what drives me to create impactful
            digital experiences.
          </p>
        </div>

        <!-- Right column with overview content -->
        <div class="lg:col-span-8 space-y-6 text-gray-600 dark:text-gray-300">
          <p class="leading-relaxed">I'm Pouyan, a developer who enjoys learning by building.</p>
          <p class="leading-relaxed">
            I'm especially interested in how different parts of a project come together, from user
            interfaces and backend logic to deployment and infrastructure. I like working across the
            stack and exploring new technologies through
            <NuxtLink to="/projects" class="text-primary hover:underline"
              >hands-on experience</NuxtLink
            >, both in class and on my own.
          </p>

          <p class="leading-relaxed">
            I started out with
            <NuxtLink to="/about" class="text-primary hover:underline"
              >JavaScript and Python</NuxtLink
            >, and over time I've expanded my skills to include tools like
            <NuxtLink to="/about" class="text-primary hover:underline">Vue, Nuxt, Node.js</NuxtLink
            >, and various databases. Most of this learning has come from personal projects and
            experimenting outside of school, which has helped me build a solid, practical
            foundation.
          </p>
          <p class="leading-relaxed">
            One project I'm particularly proud of is a real time multiplayer Pong game (<NuxtLink
              to="/projects"
              class="text-primary hover:underline"
              >TDP Games</NuxtLink
            >) built with Socket.io. It was a team effort, and it taught me a lot about
            collaboration, communication, and building something functional and responsive under
            real time constraints.
          </p>

          <p class="leading-relaxed">
            Outside of school, I maintain a Raspberry Pi running Pi OS where I host many of my
            projects. As part of the Cloud Computing option at BCIT, this setup has given me
            hands-on experience with self-hosting, deployment, and working with real-world systems
            in a home lab environment.
          </p>

          <p class="leading-relaxed">
            Right now, I'm exploring different areas of development and building tools that are
            accessible, maintainable, and performant. This site was built with Nuxt, one of my
            favorite tools I've picked up along the way.
          </p>

          <div class="flex flex-wrap pt-2">
            <UButton to="/about" variant="ghost" trailing-icon="i-lucide-arrow-right" class="mt-4">
              Learn more about my journey
            </UButton>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.overview-section {
  position: relative;
  overflow: hidden;
}

.overview-section::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: radial-gradient(circle, rgba(var(--color-primary-500), 0.03) 10%, transparent 70%);
  z-index: 0;
  pointer-events: none;
}

/* Animate paragraphs when they come into view */
p {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: calc(var(--i, 0) * 0.15s);
}

p:nth-child(1) {
  --i: 1;
}
p:nth-child(2) {
  --i: 2;
}
p:nth-child(3) {
  --i: 3;
}
p:nth-child(4) {
  --i: 4;
}

p:nth-child(5) {
  --i: 5;
}

p:nth-child(6) {
  --i: 6;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

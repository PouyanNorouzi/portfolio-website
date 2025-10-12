<script setup lang="ts">
// No additional setup needed for this component
</script>

<template>
  <section class="overview-section pb-1 lg:pb-5">
    <UContainer>
      <div class="flex flex-col lg:grid lg:grid-cols-12">
        <!-- Left column with section heading -->
        <div class="lg:col-span-4">
          <h2 class="text-xl md:text-3xl font-bold mb-4">Overview</h2>
          <div class="h-1 w-24 bg-primary mb-3 lg:mb-6" />
          <p class="text-lg text-muted hidden lg:block">
            Get to know my journey, approach to development, and what drives me to create impactful
            digital experiences.
          </p>
        </div>

        <!-- Right column with overview content -->
        <div class="lg:col-span-8 space-y-6">
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

          <p class="leading-relaxed mb-1.5">
            Right now, I'm exploring different areas of development and building tools that are
            accessible, maintainable, and performant. This site was built with Nuxt, one of my
            favorite tools I've picked up along the way.
          </p>

          <UButton
            to="/about"
            variant="ghost"
            trailing-icon="i-lucide-arrow-right"
            :ui="{ base: 'px-0' }">
            Learn more about my journey
          </UButton>
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

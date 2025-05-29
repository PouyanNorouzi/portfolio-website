<script setup lang="ts">
useHead({
  title: "Pouyan - Projects",
});

// Sample test projects
const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "A modern portfolio website built with Nuxt 3, TailwindCSS and TypeScript. Features responsive design, dark mode, and animations.",
    startDate: new Date('2023-06-01'),
    endDate: new Date('2023-07-15'),
    techStack: ["Vue.js", "Nuxt 3", "TypeScript", "TailwindCSS", "UnoCSS"],
    tags: ["Frontend", "Personal"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80",
    github: "https://github.com/username/portfolio",
    liveDemo: "https://portfolio-demo.com"
  },
  {
    id: 2,
    name: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration.",
    startDate: new Date('2022-11-15'),
    endDate: new Date('2023-03-20'),
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    tags: ["Fullstack", "E-commerce"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/username/ecommerce-platform",
    liveDemo: "https://ecommerce-demo.com"
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current and forecast weather data for multiple locations using OpenWeatherMap API.",
    startDate: new Date('2023-01-10'),
    endDate: new Date('2023-02-05'),
    techStack: ["JavaScript", "HTML5", "CSS3", "OpenWeatherMap API"],
    tags: ["Frontend", "API Integration"],
    image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/username/weather-dashboard"
  }
];
</script>

<template>
  <div class="projects-container py-12">
    <UContainer>
      <h1 class="text-3xl md:text-4xl font-bold mb-8">My Projects</h1>
      <div class="flex flex-col gap-6 w-full">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="transition-all duration-300"
        />
      </div>
    </UContainer>
  </div>
</template>

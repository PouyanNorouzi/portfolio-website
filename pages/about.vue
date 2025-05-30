<script setup lang="ts">
useHead({
  title: "Pouyan - About",
});

// Skills data organized by category
const skills = ref({
  languages: ["Python", "Java", "JavaScript", "C", "C#", "HTML", "CSS"],
  tools: [
    "jQuery",
    "EJS",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Vue",
    "Nuxt",
    "Unity",
    "Godot",
  ],
  database: ["Prisma", "MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  workflow: ["Git", "Agile", "Trello", "Unit Testing"],
});

// Education data
const education = ref([
  {
    institution: "British Columbia Institute of Technology",
    degree: "Computer Systems Diploma",
    period: "January 2024 - December 2025 (Expected)",
    location: "Burnaby, BC",
  },
]);

// Experience data
const experience = ref([
  {
    position: "Home Solutions Advisor",
    company: "Best Buy",
    location: "Coquitlam",
    period: "August 2023 – January 2024",
    description: "Seasonal position helping with sales during busy season",
  },
  {
    position: "Sales Assistant",
    company: "Mehr Shop",
    location: "Iran",
    period: "June 2019 – February 2020",
    description: "Assisted with restocking and sales",
  },
]);
</script>

<template>
  <div class="about-page">
    <!-- Hero Section with Card Showcase -->
    <AboutHero />

    <UContainer class="py-8">
      <!-- Overview Section -->
      <section class="mb-16 animate-fade-in">
        <h2 class="text-3xl font-bold mb-6 text-center">Overview</h2>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <p class="mb-4">
            With experience in both academic and personal projects, I've developed skills in
            frontend and backend technologies, focusing on creating efficient, responsive, and
            intuitive user interfaces backed by robust server-side code.
          </p>
          <p>
            My development journey has led me to explore various technologies and frameworks,
            always with a focus on writing clean, maintainable code and creating applications
            that provide real value to users.
          </p>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="mb-16 animate-fade-in-delay-1">
        <h2 class="text-3xl font-bold mb-6 text-center">Skills & Expertise</h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Languages -->
          <UCard>
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-lucide-code" class="mr-2 text-primary" />
                <h3 class="text-xl font-semibold">Languages</h3>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge v-for="skill in skills.languages" :key="skill" :label="skill" />
            </div>
          </UCard>

          <!-- Tools -->
          <UCard>
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-lucide-wrench" class="mr-2 text-primary" />
                <h3 class="text-xl font-semibold">Tools & Frameworks</h3>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge v-for="skill in skills.tools" :key="skill" :label="skill" />
            </div>
          </UCard>

          <!-- Database -->
          <UCard>
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-lucide-database" class="mr-2 text-primary" />
                <h3 class="text-xl font-semibold">Database</h3>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge v-for="skill in skills.database" :key="skill" :label="skill" />
            </div>
          </UCard>

          <!-- Workflow -->
          <UCard>
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-lucide-git-branch" class="mr-2 text-primary" />
                <h3 class="text-xl font-semibold">Workflow</h3>
              </div>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge v-for="skill in skills.workflow" :key="skill" :label="skill" />
            </div>
          </UCard>
        </div>
      </section>

      <!-- Education Section -->
      <section class="mb-16 animate-fade-in-delay-2">
        <h2 class="text-3xl font-bold mb-6 text-center">Education</h2>

        <div class="space-y-6">
          <div
            v-for="(edu, index) in education"
            :key="index"
            class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3 class="text-xl font-bold text-primary">{{ edu.institution }}</h3>
              <UBadge :label="edu.period" variant="soft" />
            </div>
            <p class="font-medium mb-1">{{ edu.degree }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ edu.location }}</p>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="mb-16 animate-fade-in-delay-3">
        <h2 class="text-3xl font-bold mb-6 text-center">Experience</h2>

        <div class="space-y-6">
          <div
            v-for="(exp, index) in experience"
            :key="index"
            class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3 class="text-xl font-bold">
                {{ exp.position }} <span class="text-primary">@ {{ exp.company }}</span>
              </h3>
              <UBadge :label="exp.period" variant="soft" />
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">{{ exp.location }}</p>
            <p>{{ exp.description }}</p>
          </div>
        </div>
      </section>

      <!-- Projects Section with redirect -->
      <section class="mb-16 animate-fade-in-delay-4">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-4">My Projects</h2>
          <p class="mb-8 max-w-2xl mx-auto">
            Check out my portfolio of projects, including web applications, academic work, and
            personal passion projects.
          </p>

          <UButton to="/projects" size="lg" icon="i-lucide-folder" color="primary">
            View All Projects
          </UButton>
        </div>
      </section>

      <!-- Contact CTA -->
      <section
        class="text-center animate-fade-in-delay-5 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <h2 class="text-2xl font-semibold mb-4">Let's Connect</h2>
        <p class="mb-6">Interested in collaboration or have questions? Feel free to reach out!</p>
        <div class="flex justify-center gap-4">
          <UButton
            to="mailto:pouyannorouzii@gmail.com"
            size="lg"
            icon="i-lucide-mail"
            color="primary">
            Email Me
          </UButton>
          <UButton
            to="https://www.linkedin.com/in/pouyan-norouzi/"
            target="_blank"
            size="lg"
            icon="i-logos-linkedin-icon"
            variant="outline">
            LinkedIn
          </UButton>
        </div>
      </section>
    </UContainer>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-fade-in-delay-1 {
  animation: fadeIn 0.8s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 0.8s ease-out 0.4s both;
}

.animate-fade-in-delay-3 {
  animation: fadeIn 0.8s ease-out 0.6s both;
}

.animate-fade-in-delay-4 {
  animation: fadeIn 0.8s ease-out 0.8s both;
}

.animate-fade-in-delay-5 {
  animation: fadeIn 0.8s ease-out 1s both;
}

@keyframes fadeIn {
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

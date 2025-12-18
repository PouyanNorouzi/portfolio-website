<script setup lang="ts">
useHead({
  title: "Pouyan - About",
});

definePageMeta({
  middleware: ["transition"],
});

// Education data
const education = ref([
  {
    institution: "British Columbia Institute of Technology",
    degree: "Computer Systems Diploma",
    period: "January 2024 - December 2024",
    location: "Burnaby, BC",
  },
]);

// Experience data
const experience = ref([
  {
    position: "TECH Specialist",
    company: "London Drugs",
    location: "Burnaby, BC",
    period: "June 2025 – Present",
    description:
      "Provide technical customer support for electronics, manage inventory and restocking, and process sales transactions.",
  },
  {
    position: "Home Solutions Advisor",
    company: "Best Buy",
    location: "Coquitlam, BC",
    period: "August 2023 – January 2024",
    description: "Seasonal position helping with sales during busy season",
  },
]);
</script>

<template>
  <div>
    <PageHeader>About Me</PageHeader>
    <!-- Hero Section with Card Showcase -->
    <AboutHero class="pb-8 md:pb-12 pt-1" />

    <UContainer class="pb-8">
      <!-- Skills Section -->
      <AboutSkills />

      <!-- Education Section -->
      <section class="mb-8 animate-fade-in-delay-2">
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
            <p class="text-sm text-dimmed">{{ edu.location }}</p>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="mb-8 animate-fade-in-delay-3">
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
            <p class="text-sm text-dimmed mb-2">{{ exp.location }}</p>
            <p>{{ exp.description }}</p>
          </div>
        </div>
      </section>

      <!-- Projects Section with redirect -->
      <section class="mb-8 animate-fade-in-delay-4">
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

      <!-- Contact & Resume Section -->
      <section
        class="text-center animate-fade-in-delay-5 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <AboutResume />
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

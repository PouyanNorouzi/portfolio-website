<script setup lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { Radar } from "vue-chartjs";

const colorMode = useColorMode();

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

// Skills data with proficiency levels
const skillsData = ref({
  frontend: [
    { title: "HTML", icon: "i-devicon-html5", proficiency: 0.95 },
    { title: "CSS", icon: "i-devicon-css3", proficiency: 0.88 },
    { title: "JavaScript", icon: "i-devicon-javascript", proficiency: 0.85 },
    { title: "React", icon: "i-devicon-react", proficiency: 0.7 },
    { title: "Vue", icon: "i-devicon-vuejs", proficiency: 0.85 },
    { title: "Next.js", icon: "i-devicon-nextjs", proficiency: 0.65 },
    { title: "Nuxt", icon: "i-devicon-nuxtjs", proficiency: 0.75 },
    { title: "jQuery", icon: "i-devicon-jquery", proficiency: 0.8 },
  ],
  backend: [
    { title: "Node.js", icon: "i-devicon-nodejs", proficiency: 0.82 },
    { title: "Python", icon: "i-devicon-python", proficiency: 0.9 },
    { title: "Java", icon: "i-devicon-java", proficiency: 0.75 },
    { title: "C#", icon: "i-devicon-csharp", proficiency: 0.8 },
    { title: "C", icon: "i-devicon-c", proficiency: 0.7 },
    { title: "TypeScript", icon: "i-devicon-typescript", proficiency: 0.78 },
  ],
  databases: [
    { title: "MongoDB", icon: "i-devicon-mongodb", proficiency: 0.8 },
    { title: "MySQL", icon: "i-devicon-mysql", proficiency: 0.85 },
    { title: "PostgreSQL", icon: "i-devicon-postgresql", proficiency: 0.75 },
    { title: "Firebase", icon: "i-devicon-firebase", proficiency: 0.65 },
    { title: "Prisma", icon: "i-devicon-prisma", proficiency: 0.7 },
  ],
  tools: [
    { title: "Git", icon: "i-devicon-git", proficiency: 0.9 },
    { title: "Agile", icon: "i-lucide-repeat", proficiency: 0.8 },
    { title: "Trello", icon: "i-devicon-trello", proficiency: 0.85 },
    { title: "Unit Testing", icon: "i-lucide-badge-check", proficiency: 0.7 },
    { title: "EJS", icon: "i-lucide-brackets", proficiency: 0.75 },
  ],
  gameDev: [
    { title: "Unity", icon: "i-devicon-unity", proficiency: 0.6 },
    { title: "Godot", icon: "i-devicon-godot", proficiency: 0.5 },
    { title: "C#", icon: "i-devicon-csharp", proficiency: 0.8 },
  ],
});

// Map skills to categories for the chart
const frontend = ["HTML", "CSS", "JavaScript", "React", "Vue", "Next.js", "Nuxt", "jQuery"];
const backend = ["Node.js", "Python", "Java", "C#", "C", "TypeScript"];
const databases = ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Prisma"];
const tools = ["Git", "Agile", "Trello", "Unit Testing", "EJS"];
const gameDev = ["Unity", "Godot", "C#"];

// Helper function to calculate average proficiency for a category
const calculateCategoryProficiency = (categorySkills: SkillName | "all"): number => {
  switch (categorySkills) {
    case "Frontend": {
      const skills = skillsData.value.frontend;
      const sum = skills.reduce((acc, skill) => acc + (skill.proficiency || 0), 0);
      return sum / skills.length;
    }
    case "Backend": {
      const skills = skillsData.value.backend;
      const sum = skills.reduce((acc, skill) => acc + (skill.proficiency || 0), 0);
      return sum / skills.length;
    }
    case "Databases": {
      const skills = skillsData.value.databases;
      const sum = skills.reduce((acc, skill) => acc + (skill.proficiency || 0), 0);
      return sum / skills.length;
    }
    case "Game Dev": {
      const skills = skillsData.value.gameDev;
      const sum = skills.reduce((acc, skill) => acc + (skill.proficiency || 0), 0);
      return sum / skills.length;
    }
    case "Tools": {
      const skills = skillsData.value.tools;
      const sum = skills.reduce((acc, skill) => acc + (skill.proficiency || 0), 0);
      return sum / skills.length;
    }
    default: {
      // Flatten all skills into a single array
      const allSkills = [
        ...skillsData.value.backend,
        ...skillsData.value.frontend,
        ...skillsData.value.databases,
        ...skillsData.value.tools,
        ...skillsData.value.gameDev,
      ];

      const sum = allSkills.reduce((acc, skill) => acc + (skill.proficiency || 0), 0);
      return sum / allSkills.length;
    }
  }
};

// Chart configuration
const chartData = computed<ChartData<"radar">>(() => {
  return {
    labels: skillCategories.map((category) => category.name),
    datasets: [
      {
        label: "Skill Proficiency",
        data: [
          calculateCategoryProficiency("Frontend") * 100,
          calculateCategoryProficiency("Backend") * 100,
          calculateCategoryProficiency("Databases") * 100,
          calculateCategoryProficiency("Tools") * 100,
          calculateCategoryProficiency("Game Dev") * 100,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: skillCategories.map((category) => category.color),
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2,
      },
    ],
  };
});

// Dynamically check for dark mode
const isDarkMode = computed(() => colorMode.value === "dark");

// Chart options
const chartOptions = computed<ChartOptions<"radar">>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: {
        display: true,
        color: isDarkMode.value ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
      },
      grid: {
        color: isDarkMode.value ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
      },
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: {
        stepSize: 20,
        callback: (value) => {
          return value + "%";
        },
        backdropColor: "transparent",
        color: isDarkMode.value ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          return `${context.dataset.label}: ${context.parsed.r.toFixed(1)}%`;
        },
      },
      backgroundColor: isDarkMode.value ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
      titleColor: isDarkMode.value ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)",
      bodyColor: isDarkMode.value ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)",
      borderColor: isDarkMode.value ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
      borderWidth: 1,
    },
  },
}));

// Determine the active category for displaying skills
const activeCategory = ref("all");
</script>

<template>
  <section class="skills-section mb-16">
    <h2 class="text-3xl font-bold mb-6 text-center">Skills & Expertise</h2>

    <div class="grid md:grid-cols-5 gap-6">
      <!-- Left Side: Skill Categories -->
      <div class="md:col-span-2 skill-categories animate-fade-in-delay-1">
        <UCard class="h-full">
          <template #header>
            <div class="flex items-center">
              <UIcon name="i-lucide-sparkles" class="mr-2 text-primary" />
              <h3 class="text-xl font-semibold">Skill Areas</h3>
            </div>
          </template>

          <div class="space-y-4">
            <UButton
              variant="ghost"
              :color="activeCategory === 'all' ? 'primary' : 'secondary'"
              block
              @click="activeCategory = 'all'">
              <template #leading>
                <UIcon name="i-lucide-layers" />
              </template>
              All Skills
            </UButton>

            <UButton
              v-for="category in skillCategories"
              :key="category.name"
              variant="ghost"
              :color="activeCategory === category.name ? 'primary' : 'secondary'"
              block
              @click="activeCategory = category.name">
              <template #leading>
                <UIcon :name="category.icon" :style="`color: ${category.color}`" />
              </template>
              {{ category.name }}
              <UBadge
                :label="
                  (category.name === 'Frontend'
                    ? frontend.length
                    : category.name === 'Backend'
                      ? backend.length
                      : category.name === 'Databases'
                        ? databases.length
                        : category.name === 'Tools'
                          ? tools.length
                          : category.name === 'Game Dev'
                            ? gameDev.length
                            : 0
                  ).toString()
                "
                size="xs"
                variant="subtle"
                class="ml-2" />
            </UButton>
          </div>
        </UCard>
      </div>

      <!-- Right Side: Radar Chart -->
      <div class="md:col-span-3 chart-container animate-fade-in-delay-2">
        <UCard class="h-full">
          <template #header>
            <div class="flex items-center">
              <UIcon name="i-lucide-bar-chart-3" class="mr-2 text-primary" />
              <h3 class="text-xl font-semibold">Skill Proficiency</h3>
            </div>
          </template>

          <div class="chart-wrapper h-80">
            <Radar :data="chartData" :options="chartOptions" />
          </div>
        </UCard>
      </div>
    </div>

    <!-- Skill Badges Section -->
    <div class="mt-8 animate-fade-in-delay-3">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <UIcon name="i-lucide-list-checks" class="mr-2 text-primary" />
              <h3 class="text-xl font-semibold">
                {{ activeCategory === "all" ? "All Skills" : activeCategory + " Skills" }}
              </h3>
            </div>
            <UBadge
              v-if="activeCategory === 'all'"
              :label="`${
                skillsData.backend.length +
                skillsData.frontend.length +
                skillsData.databases.length +
                skillsData.gameDev.length +
                skillsData.tools.length
              } Skills`"
              variant="subtle" />
          </div>
        </template>
        <!-- Display skill tags grouped by categories when 'all' is selected -->
        <div v-if="activeCategory === 'all'">
          <!-- Frontend Skills -->
          <div class="mb-6">
            <h4 class="text-lg font-medium mb-2 flex items-center">
              <UIcon
                :name="skillCategories[0].icon"
                class="mr-2"
                :style="`color: ${skillCategories[0].color}`" />
              Frontend
            </h4>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in skillsData.frontend"
                :key="skill.title"
                :label="skill.title"
                variant="soft"
                class="flex items-center gap-1 py-1 px-2">
                <template #leading>
                  <UIcon :name="skill.icon" class="text-lg" />
                </template>
              </UBadge>
            </div>
          </div>

          <!-- Backend Skills -->
          <div class="mb-6">
            <h4 class="text-lg font-medium mb-2 flex items-center">
              <UIcon
                :name="skillCategories[1].icon"
                class="mr-2"
                :style="`color: ${skillCategories[1].color}`" />
              Backend
            </h4>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in skillsData.backend"
                :key="skill.title"
                :label="skill.title"
                variant="soft"
                class="flex items-center gap-1 py-1 px-2">
                <template #leading>
                  <UIcon :name="skill.icon" class="text-lg" />
                </template>
              </UBadge>
            </div>
          </div>

          <!-- Database Skills -->
          <div class="mb-6">
            <h4 class="text-lg font-medium mb-2 flex items-center">
              <UIcon
                :name="skillCategories[2].icon"
                class="mr-2"
                :style="`color: ${skillCategories[2].color}`" />
              Databases
            </h4>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in skillsData.databases"
                :key="skill.title"
                :label="skill.title"
                variant="soft"
                class="flex items-center gap-1 py-1 px-2">
                <template #leading>
                  <UIcon :name="skill.icon" class="text-lg" />
                </template>
              </UBadge>
            </div>
          </div>

          <!-- Tools Skills -->
          <div class="mb-6">
            <h4 class="text-lg font-medium mb-2 flex items-center">
              <UIcon
                :name="skillCategories[3].icon"
                class="mr-2"
                :style="`color: ${skillCategories[3].color}`" />
              Tools
            </h4>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in skillsData.tools"
                :key="skill.title"
                :label="skill.title"
                variant="soft"
                class="flex items-center gap-1 py-1 px-2">
                <template #leading>
                  <UIcon :name="skill.icon" class="text-lg" />
                </template>
              </UBadge>
            </div>
          </div>

          <!-- Game Dev Skills -->
          <div>
            <h4 class="text-lg font-medium mb-2 flex items-center">
              <UIcon
                :name="skillCategories[4].icon"
                class="mr-2"
                :style="`color: ${skillCategories[4].color}`" />
              Game Dev
            </h4>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in skillsData.gameDev"
                :key="skill.title"
                :label="skill.title"
                variant="soft"
                class="flex items-center gap-1 py-1 px-2">
                <template #leading>
                  <UIcon :name="skill.icon" class="text-lg" />
                </template>
              </UBadge>
            </div>
          </div>
        </div>

        <!-- Display filtered skills when a specific category is selected -->
        <div v-else class="flex flex-wrap gap-2">
          <UBadge
            v-for="skill in activeCategory === 'Frontend'
              ? skillsData.frontend
              : activeCategory === 'Backend'
                ? skillsData.backend
                : activeCategory === 'Databases'
                  ? skillsData.databases
                  : activeCategory === 'Tools'
                    ? skillsData.tools
                    : activeCategory === 'Game Dev'
                      ? skillsData.gameDev
                      : []"
            :key="skill.title"
            :label="skill.title"
            variant="soft"
            class="flex items-center gap-1 py-1 px-2">
            <template #leading>
              <UIcon :name="skill.icon" class="text-lg" />
            </template>
          </UBadge>
        </div>
      </UCard>
    </div>
  </section>
</template>

<style scoped>
.chart-wrapper {
  position: relative;
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

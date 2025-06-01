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
import { SKILLS } from "~/utils/constants/skills";
import { CATEGORIES } from "~/utils/constants/categories";

const colorMode = useColorMode();

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

// Skills data
const skillsData = ref<EnhancedSkill[]>(SKILLS);

const skillCategories = ref<SkillCategory[]>(CATEGORIES);

const softwareDevelopmentSkills = computed<EnhancedSkill[]>(() =>
  skillsData.value.filter((s) => s.category === "Software Development")
);

const webSkills = computed<EnhancedSkill[]>(() =>
  skillsData.value.filter((s) => s.category === "Web Technologies")
);

const systemsSkills = computed<EnhancedSkill[]>(() =>
  skillsData.value.filter((s) => s.category === "Systems")
);

const dataSkills = computed<EnhancedSkill[]>(() =>
  skillsData.value.filter((s) => s.category === "Data")
);

const cloudSkills = computed<EnhancedSkill[]>(() =>
  skillsData.value.filter((s) => s.category === "Cloud & DevOps")
);

const skillMap: Record<SkillName, ComputedRef<EnhancedSkill[]>> = {
  "Software Development": softwareDevelopmentSkills,
  "Web Technologies": webSkills,
  "Systems": systemsSkills,
  "Data": dataSkills,
  "Cloud & DevOps": cloudSkills,
};

// Helper function to calculate average proficiency for a category should be moved later to
// utils when state manager is set up
const calculateCategoryProficiency = (categorySkills: SkillName | "all"): number => {
  if (categorySkills === "all") {
    const sum = skillsData.value.reduce((acc, skill) => acc + (skill.proficiency || 0), 0);
    return sum / skillsData.value.length;
  }
  const skills = skillMap[categorySkills].value;
  const sum = skills.reduce((acc, skill) => acc + (skill.proficiency || 0), 0);
  return sum / skills.length;
};

// Chart configuration
const chartData = computed<ChartData<"radar">>(() => {
  return {
    labels: skillCategories.value.map((category) => category.name),
    datasets: [
      {
        label: "Skill Proficiency",
        data: skillCategories.value.map((category) => calculateCategoryProficiency(category.name) * 100),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: skillCategories.value.map((category) => category.color),
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
const activeCategory = ref<SkillName | "all">("all");
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
                :label="skillMap[category.name].value.length.toString()"
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
              :label="`${skillsData.length} Skills`"
              variant="subtle" />
          </div>
        </template>
        <!-- Display skill tags grouped by categories when 'all' is selected -->
        <div v-if="activeCategory === 'all'">
          <div v-for="category in skillCategories" :key="category.name" class="mb-6">
            <h4 class="text-lg font-medium mb-2 flex items-center">
              <UIcon :name="category.icon" class="mr-2" :style="`color: ${category.color}`" />
              {{ category.name }}
            </h4>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in skillMap[category.name].value"
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
            v-for="skill in skillMap[activeCategory].value"
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

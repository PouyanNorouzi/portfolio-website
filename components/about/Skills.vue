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
const skillsData = ref<EnhancedSkill[]>([
  // Software Development
  {
    title: "JavaScript",
    icon: "i-devicon-javascript",
    proficiency: 0.85,
    category: "Software Development",
    relatedSkills: ["TypeScript", "Node.js", "React", "Vue"],
  },
  {
    title: "TypeScript",
    icon: "i-devicon-typescript",
    proficiency: 0.78,
    category: "Software Development",
    relatedSkills: ["JavaScript", "Node.js", "React", "Vue"],
  },
  {
    title: "Python",
    icon: "i-devicon-python",
    proficiency: 0.9,
    category: "Software Development",
    relatedSkills: ["Django", "Flask"],
  },
  {
    title: "Java",
    icon: "i-devicon-java",
    proficiency: 0.75,
    category: "Software Development",
    relatedSkills: ["C#"],
  },
  {
    title: "C#",
    icon: "i-devicon-csharp",
    proficiency: 0.8,
    category: "Software Development",
    relatedSkills: ["Java", ".NET"],
  },
  {
    title: "C",
    icon: "i-devicon-c",
    proficiency: 0.7,
    category: "Software Development",
    relatedSkills: [],
  },

  // Web Technologies
  {
    title: "HTML",
    icon: "i-devicon-html5",
    proficiency: 0.95,
    category: "Web Technologies",
    relatedSkills: ["CSS", "JavaScript"],
  },
  {
    title: "CSS",
    icon: "i-devicon-css3",
    proficiency: 0.88,
    category: "Web Technologies",
    relatedSkills: ["HTML"],
  },
  {
    title: "React",
    icon: "i-devicon-react",
    proficiency: 0.7,
    category: "Web Technologies",
    relatedSkills: ["JavaScript", "Next.js"],
  },
  {
    title: "Vue",
    icon: "i-devicon-vuejs",
    proficiency: 0.85,
    category: "Web Technologies",
    relatedSkills: ["JavaScript", "Nuxt"],
  },
  {
    title: "Next.js",
    icon: "i-devicon-nextjs",
    proficiency: 0.65,
    category: "Web Technologies",
    relatedSkills: ["React", "JavaScript"],
  },
  {
    title: "Nuxt",
    icon: "i-devicon-nuxtjs",
    proficiency: 0.75,
    category: "Web Technologies",
    relatedSkills: ["Vue", "JavaScript"],
  },
  {
    title: "jQuery",
    icon: "i-devicon-jquery",
    proficiency: 0.8,
    category: "Web Technologies",
    relatedSkills: ["JavaScript"],
  },
  {
    title: "Node.js",
    icon: "i-devicon-nodejs",
    proficiency: 0.82,
    category: "Web Technologies",
    relatedSkills: ["JavaScript", "Express.js"],
  },
  {
    title: "Express.js",
    icon: "i-devicon-express",
    proficiency: 0.78,
    category: "Web Technologies",
    relatedSkills: ["Node.js", "JavaScript"],
  },
  {
    title: "EJS",
    icon: "i-lucide-brackets",
    proficiency: 0.75,
    category: "Web Technologies",
    relatedSkills: ["HTML", "JavaScript", "Node.js"],
  },

  // Systems
  {
    title: "Linux",
    icon: "i-devicon-linux",
    proficiency: 0.85,
    category: "Systems",
    relatedSkills: ["Bash", "Raspberry Pi"],
  },
  {
    title: "Bash",
    icon: "i-devicon-bash",
    proficiency: 0.75,
    category: "Systems",
    relatedSkills: ["Linux"],
  },
  {
    title: "Operating Systems",
    icon: "i-lucide-laptop",
    proficiency: 0.8,
    category: "Systems",
    relatedSkills: ["Linux"],
  },
  {
    title: "Raspberry Pi",
    icon: "i-devicon-raspberrypi",
    proficiency: 0.9,
    category: "Systems",
    relatedSkills: ["Linux", "Self-hosting"],
  },
  {
    title: "Virtualization",
    icon: "i-lucide-layers",
    proficiency: 0.7,
    category: "Systems",
    relatedSkills: ["Linux", "Docker"],
  },
  {
    title: "Networking",
    icon: "i-lucide-network",
    proficiency: 0.75,
    category: "Systems",
    relatedSkills: ["Linux", "EC2"],
  },
  {
    title: "System Security",
    icon: "i-lucide-shield",
    proficiency: 0.7,
    category: "Systems",
    relatedSkills: ["Linux", "Networking"],
  },

  // Data
  {
    title: "MongoDB",
    icon: "i-devicon-mongodb",
    proficiency: 0.8,
    category: "Data",
    relatedSkills: ["Node.js", "DynamoDB"],
  },
  {
    title: "MySQL",
    icon: "i-devicon-mysql",
    proficiency: 0.85,
    category: "Data",
    relatedSkills: ["PostgreSQL", "RDS"],
  },
  {
    title: "PostgreSQL",
    icon: "i-devicon-postgresql",
    proficiency: 0.75,
    category: "Data",
    relatedSkills: ["MySQL", "RDS"],
  },
  {
    title: "Firebase",
    icon: "i-devicon-firebase",
    proficiency: 0.65,
    category: "Data",
    relatedSkills: ["DynamoDB"],
  },
  {
    title: "Prisma",
    icon: "i-devicon-prisma",
    proficiency: 0.7,
    category: "Data",
    relatedSkills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "DynamoDB",
    icon: "i-devicon-amazonwebservices",
    proficiency: 0.65,
    category: "Data",
    relatedSkills: ["MongoDB", "AWS"],
  },
  {
    title: "RDS",
    icon: "i-devicon-amazonwebservices",
    proficiency: 0.7,
    category: "Data",
    relatedSkills: ["MySQL", "PostgreSQL", "AWS"],
  },

  // Cloud & DevOps
  {
    title: "EC2",
    icon: "i-devicon-amazonwebservices",
    proficiency: 0.75,
    category: "Cloud & DevOps",
    relatedSkills: ["AWS", "Linux", "Self-hosting"],
  },
  {
    title: "Lambda",
    icon: "i-devicon-amazonwebservices",
    proficiency: 0.7,
    category: "Cloud & DevOps",
    relatedSkills: ["AWS", "JavaScript", "Node.js"],
  },
  {
    title: "S3",
    icon: "i-devicon-amazonwebservices",
    proficiency: 0.8,
    category: "Cloud & DevOps",
    relatedSkills: ["AWS"],
  },
  {
    title: "Git",
    icon: "i-devicon-git",
    proficiency: 0.9,
    category: "Cloud & DevOps",
    relatedSkills: ["CI/CD"],
  },
  {
    title: "Docker",
    icon: "i-devicon-docker",
    proficiency: 0.75,
    category: "Cloud & DevOps",
    relatedSkills: ["Virtualization", "CI/CD"],
  },
  {
    title: "Self-hosting",
    icon: "i-lucide-server",
    proficiency: 0.85,
    category: "Cloud & DevOps",
    relatedSkills: ["Raspberry Pi", "Linux", "Docker"],
  },
  {
    title: "CI/CD",
    icon: "i-lucide-git-branch",
    proficiency: 0.7,
    category: "Cloud & DevOps",
    relatedSkills: ["Git", "Docker"],
  },
  {
    title: "Nginx",
    icon: "i-devicon-nginx",
    proficiency: 0.75,
    category: "Cloud & DevOps",
    relatedSkills: ["Self-hosting", "Linux"],
  },
]);

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

// Helper function to calculate average proficiency for a category
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
    labels: skillCategories.map((category) => category.name),
    datasets: [
      {
        label: "Skill Proficiency",
        data: skillCategories.map((category) => calculateCategoryProficiency(category.name) * 100),
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

<script setup lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { Radar } from "vue-chartjs";
import { FEATURED_SKILLS } from "~/utils/constants/skills";
import { CATEGORIES } from "~/utils/constants/categories";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const groups = CATEGORIES.map((category) => ({
  ...category,
  skills: FEATURED_SKILLS.filter((skill) => skill.category === category.name).sort(
    (a, b) => b.proficiency - a.proficiency
  ),
}));

const activeCategory = ref<SkillName | "all">("all");

const visibleGroups = computed(() =>
  activeCategory.value === "all"
    ? groups
    : groups.filter((group) => group.name === activeCategory.value)
);

const radar = computed(() => {
  const active = groups.find((group) => group.name === activeCategory.value);
  if (!active) {
    return {
      labels: groups.map((group) => group.name),
      values: groups.map(
        (group) =>
          (group.skills.reduce((sum, skill) => sum + skill.proficiency, 0) / group.skills.length) *
          100
      ),
      colors: groups.map((group) => group.color),
    };
  }
  return {
    labels: active.skills.map((skill) => skill.title),
    values: active.skills.map((skill) => skill.proficiency * 100),
    colors: active.skills.map((skill) => skill.color ?? active.color),
  };
});

// Chart.js draws on a canvas, so it can't read the theme tokens. These mirror them.
const palette = computed(() =>
  isDark.value
    ? {
        line: "#34d399",
        fill: "rgba(52, 211, 153, 0.18)",
        grid: "rgba(52, 211, 153, 0.22)",
        text: "rgba(255, 255, 255, 0.72)",
        tooltip: "rgba(0, 0, 0, 0.9)",
        tooltipText: "rgba(255, 255, 255, 0.92)",
      }
    : {
        line: "#047857",
        fill: "rgba(4, 120, 87, 0.16)",
        grid: "rgba(70, 50, 15, 0.25)",
        text: "rgba(50, 35, 10, 0.8)",
        tooltip: "#f2e7c9",
        tooltipText: "rgba(50, 35, 10, 0.95)",
      }
);

const FONT = { family: "'Share Tech Mono', monospace", size: 12 };

const chartData = computed<ChartData<"radar">>(() => ({
  labels: radar.value.labels,
  datasets: [
    {
      label: "Clearance",
      data: radar.value.values,
      fill: true,
      backgroundColor: palette.value.fill,
      borderColor: palette.value.line,
      borderWidth: 2,
      pointBackgroundColor: radar.value.colors,
      pointBorderColor: palette.value.line,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
  ],
}));

const chartOptions = computed<ChartOptions<"radar">>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 100,
      angleLines: { color: palette.value.grid },
      grid: { color: palette.value.grid },
      pointLabels: { color: palette.value.text, font: FONT },
      ticks: {
        stepSize: 20,
        callback: (value) => `${value}%`,
        backdropColor: "transparent",
        color: palette.value.text,
        font: { ...FONT, size: 10 },
      },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: palette.value.tooltip,
      titleColor: palette.value.tooltipText,
      bodyColor: palette.value.tooltipText,
      borderColor: palette.value.grid,
      borderWidth: 1,
      titleFont: FONT,
      bodyFont: FONT,
      callbacks: {
        label: (context) => `CLEARANCE ${context.parsed.r.toFixed(0)}%`,
      },
    },
  },
}));
</script>

<template>
  <div class="flex flex-col gap-6">
    <p class="leading-relaxed text-pretty">
      Full inventory of equipment the subject is cleared to operate. Filter by discipline to see
      the shape of each.
    </p>

    <div class="flex flex-wrap gap-2" role="group" aria-label="Filter equipment by discipline">
      <UButton
        size="sm"
        class="font-mono tracking-widest"
        :variant="activeCategory === 'all' ? 'solid' : 'outline'"
        :aria-pressed="activeCategory === 'all'"
        @click="activeCategory = 'all'">
        ALL · {{ FEATURED_SKILLS.length }}
      </UButton>
      <UButton
        v-for="group in groups"
        :key="group.name"
        size="sm"
        class="font-mono tracking-widest uppercase"
        :variant="activeCategory === group.name ? 'solid' : 'outline'"
        :aria-pressed="activeCategory === group.name"
        :icon="group.icon"
        @click="activeCategory = group.name">
        {{ group.name }} · {{ group.skills.length }}
      </UButton>
    </div>

    <UCard :ui="{ header: 'py-2.5' }">
      <template #header>
        <CaseFileLabel>
          // {{ activeCategory === "all" ? "CLEARANCE BY DISCIPLINE" : `CLEARANCE · ${activeCategory}` }}
        </CaseFileLabel>
      </template>
      <div class="h-80">
        <Radar :data="chartData" :options="chartOptions" />
      </div>
    </UCard>

    <div v-for="group in visibleGroups" :key="group.name" class="flex flex-col gap-3">
      <h3 class="flex items-center gap-2 border-b border-dashed border-default pb-2">
        <UIcon :name="group.icon" class="size-5" :style="{ color: group.color }" />
        <span class="font-name text-lg font-bold tracking-widest uppercase">{{ group.name }}</span>
        <CaseFileLabel class="ml-auto">{{ group.skills.length }} ITEMS</CaseFileLabel>
      </h3>
      <div class="grid gap-x-8 gap-y-4 sm:grid-cols-2">
        <AboutSkillRow v-for="skill in group.skills" :key="skill.id" :skill="skill" />
      </div>
    </div>

    <CaseFileLabel class="border-t border-dashed border-default pt-3.5">
      // EQUIPMENT IN THE FIELD:
      <ULink to="/projects" class="text-primary">OPERATIONS ON RECORD</ULink>
    </CaseFileLabel>
  </div>
</template>

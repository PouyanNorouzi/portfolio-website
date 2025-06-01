// Export individual category constants with IDs
export const CATEGORY_SOFTWARE_DEV: SkillCategory = {
  id: 1,
  name: "Software Development",
  icon: "i-lucide-code",
  color: "#FF6384",
};

export const CATEGORY_WEB: SkillCategory = {
  id: 2,
  name: "Web Technologies",
  icon: "i-lucide-globe",
  color: "#36A2EB",
};

export const CATEGORY_SYSTEMS: SkillCategory = {
  id: 3,
  name: "Systems",
  icon: "i-lucide-cpu",
  color: "#4BC0C0",
};

export const CATEGORY_DATA: SkillCategory = {
  id: 4,
  name: "Data",
  icon: "i-lucide-database",
  color: "#FFCE56",
};

export const CATEGORY_CLOUD: SkillCategory = {
  id: 5,
  name: "Cloud & DevOps",
  icon: "i-lucide-cloud",
  color: "#9966FF",
};

// Export array of all categories
export const CATEGORIES: SkillCategory[] = [
  CATEGORY_SOFTWARE_DEV,
  CATEGORY_WEB,
  CATEGORY_SYSTEMS,
  CATEGORY_DATA,
  CATEGORY_CLOUD,
];

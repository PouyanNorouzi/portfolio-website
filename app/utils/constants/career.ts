export const EDUCATION_BCIT: Education = {
  institution: "British Columbia Institute of Technology",
  degree: "Computer Systems Diploma",
  location: "Burnaby, BC",
  start: { month: 1, year: 2024 },
  end: { month: 12, year: 2025 },
};

export const EXPERIENCE_LONDON_DRUGS: Experience = {
  position: "TECH Specialist",
  company: "London Drugs",
  location: "Burnaby, BC",
  start: { month: 6, year: 2025 },
  description:
    "Provide technical customer support for electronics, manage inventory and restocking, and process sales transactions.",
};

export const EXPERIENCE_BEST_BUY: Experience = {
  position: "Home Solutions Advisor",
  company: "Best Buy",
  location: "Coquitlam, BC",
  start: { month: 8, year: 2023 },
  end: { month: 1, year: 2024 },
  description: "Seasonal position helping with sales during busy season.",
};

export function formatShortMonth({ month, year }: CareerMonth): string {
  return `${String(month).padStart(2, "0")}.${year}`;
}

declare interface AboutCardItem {
  title: string;
  icon: string;
  description: string;
  color: string;
}

declare interface Skill {
  title: string;
  icon: string;
  proficiency?: number; // Value between 0-1 representing skill level
}

declare type SkillName = "Frontend" | "Backend" | "Databases" | "Tools" | "Game Dev";

declare interface SkillCategory {
  name: SkillName;
  icon: string;
  color: string;
}

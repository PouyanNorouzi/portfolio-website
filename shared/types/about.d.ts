// Core types for About section content
declare interface LightAndDarkIcon {
  lightIcon: string;
  darkIcon: string;
}

// Basic skill interface (original definition, without proficiency)
declare interface Skill {
  title: string;
  icon: string | LightAndDarkIcon;
}

// Skill categories
declare type SkillName =
  "Software Development" | "Web Technologies" | "Systems" | "Data" | "Cloud & DevOps";

// A skill with how well it is known and which category it belongs to
declare interface EnhancedSkill extends Skill {
  id: number; // Unique identifier for the skill
  proficiency: number; // Value between 0-1 representing skill level (moved from Skill)
  category: SkillName; // Direct reference to category
  relatedSkills?: string[]; // Array of skill titles this skill is related to
  description?: string; // Optional: brief description of your experience with this skill
  color?: string; // optional color for the skill
}

// Polygraph examination (the About page script)
declare type PolygraphVerdict = "TRUTHFUL" | "PROBABLE" | "INCONCLUSIVE" | "DECEPTIVE";

// A claim the needles react to. Without an explicit verdict it is derived from the skill's
// proficiency. `label` names a claim that is not a skill (e.g. a joke).
declare interface PolygraphClaim {
  skill?: EnhancedSkill;
  label?: string;
  verdict?: PolygraphVerdict;
}

declare interface PolygraphExchange {
  question: string;
  answer: string;
  claims?: PolygraphClaim[];
  // A project the answer refers to, linked beside it.
  exhibit?: Project;
  // Sweeps a highlighter over the answer.
  highlight?: boolean;
}

declare interface PolygraphRapidItem {
  skill: EnhancedSkill;
  // Defaults to "Yes." or "Some." depending on the verdict.
  answer?: string;
  verdict?: PolygraphVerdict;
}

declare type PolygraphRound =
  | { kind: "exchanges"; title: string; exchanges: PolygraphExchange[] }
  | { kind: "rapid-fire"; title: string; intro: string; items: PolygraphRapidItem[] };

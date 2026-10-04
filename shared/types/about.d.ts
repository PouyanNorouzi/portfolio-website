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
  | "Languages"
  | "Frontend & Mobile"
  | "Backend & APIs"
  | "Data"
  | "Systems"
  | "Networking"
  | "Security"
  | "Cloud"
  | "DevOps & Tooling"
  | "AI/ML";

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
// proficiency. `label` names a claim that is not a skill (e.g. a joke). A `hidden` claim is not
// listed, but the needles still react to it, level with the answer.
declare interface PolygraphClaim {
  skill?: EnhancedSkill;
  label?: string;
  verdict?: PolygraphVerdict;
  hidden?: boolean;
}

declare interface PolygraphExchange {
  question: string;
  answer: string;
  // Who asks. Defaults to the examiner; "SUBJECT" turns the exchange around, so `question` is
  // the subject's and `answer` is the examiner's.
  askedBy?: "EXAMINER" | "SUBJECT";
  claims?: PolygraphClaim[];
  // A project the answer refers to, linked beside it.
  exhibit?: Project;
  // Sweeps a highlighter over the answer.
  highlight?: boolean;
  // Blacks out the answer until it is declassified (hover, tap, or the declassify button).
  redacted?: boolean;
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

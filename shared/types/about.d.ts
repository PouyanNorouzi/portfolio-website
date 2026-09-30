// Core types for About section content
declare interface AboutCardItem {
  title: string;
  icon: string;
  description: string;
  color: NuxtUIColor;
}

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

// Enhanced skill definition with network-focused properties
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

// Base network node properties shared by all node types
declare interface BaseNetworkNode {
  id: string; // Unique identifier
  name: string; // Display name
  color: string; // Node color
  size: number; // Visual size of node
  x?: number; // Position x (managed by D3)
  y?: number; // Position y (managed by D3)
  fx?: number | null; // Fixed position x (for dragging)
  fy?: number | null; // Fixed position y (for dragging)
}

// Center node representing the person
declare interface CenterNode extends BaseNetworkNode {
  type: "center"; // Type identifier
  image?: string; // Profile image URL
  subtitle?: string; // Optional subtitle (e.g., "Full Stack Developer")
}

// Category node representing a skill category
declare interface CategoryNode extends BaseNetworkNode {
  type: "category"; // Type identifier
  icon: string; // Icon reference
  categoryName: SkillName; // The category this node represents
  skillCount?: number; // Number of skills in this category
}

// Skill node representing an individual skill
declare interface SkillNode extends BaseNetworkNode {
  type: "skill"; // Type identifier
  icon: string; // Icon reference
  category: SkillName; // The category this skill belongs to
  proficiency: number; // Skill proficiency level
  yearsExperience?: number; // Years of experience with this skill
  description?: string; // Brief description of experience
}

// Union type for all node types
declare type NetworkNode = CenterNode | CategoryNode | SkillNode;

// Link between nodes
declare interface NetworkLink {
  source: string; // Source node id
  target: string; // Target node id
  type: "primary" | "category" | "related"; // Link type
  strength?: number; // Optional: connection strength
}

// Network graph data combined
declare interface NetworkData {
  nodes: NetworkNode[];
  links: NetworkLink[];
}

// Interaction state for the network visualization
declare interface NetworkState {
  selectedNode: NetworkNode | null;
  activeFilters: SkillName[];
  highlightedNodes: Set<string>;
  highlightedLinks: Set<string>;
}

// Resume types
declare interface ResumeDetails {
  fileName: string;
  fileSize: string;
  lastUpdated: string;
}

declare interface ResumeFormat {
  type: "PDF" | "DOCX";
  icon: string;
  link: string;
}

declare interface Project {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  techStack: EnhancedSkill[];
  tags: string[];
  image: string;
  github?: string;
  liveDemo?: string;
}

declare interface ToastNotification {
  title: string;
  description: string;
  icon?: string;
  color?: NuxtUIColor;
  duration?: number;
}

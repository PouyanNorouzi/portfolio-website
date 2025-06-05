<script setup lang="ts">
import {
  SKILL_AWS,
  SKILL_C,
  SKILL_CSS,
  SKILL_EJS,
  SKILL_EXPRESSJS,
  SKILL_FIREBASE,
  SKILL_HTML,
  SKILL_JAVASCRIPT,
  SKILL_LIBSSH,
  SKILL_LINUX,
  SKILL_MONGODB,
  SKILL_NEXTAUTH,
  SKILL_NEXTJS,
  SKILL_NODEJS,
  SKILL_NUXT,
  SKILL_OPENAI_API,
  SKILL_POSTGRESQL,
  SKILL_PRISMA,
  SKILL_RASPBERRY_PI,
  SKILL_REACT,
  SKILL_RDS,
  SKILL_REDIS,
  SKILL_SFTP,
  SKILL_SSH,
  SKILL_STRIPE,
  SKILL_TAILWIND,
  SKILL_TYPESCRIPT,
  SKILL_VUE,
  SKILL_WEBSOCKET,
  SKILL_ZUSTAND,
} from "~/utils/constants/skills";

useHead({
  title: "Pouyan - Projects",
});

definePageMeta({
  middleware: ["transition"],
});

const config = useRuntimeConfig();

// Project data
const projects = ref<Project[]>([
  {
    id: 1,
    name: "Textbook Hero",
    description:
      "A full-stack web application designed to facilitate peer-to-peer buying and selling of used textbooks among students. Features include user authentication, textbook listings with photos, search functionality, and in-app messaging for buyers and sellers.",
    startDate: new Date("2024-01-02"),
    endDate: new Date("2024-04-29"),
    techStack: [SKILL_HTML, SKILL_CSS, SKILL_JAVASCRIPT, SKILL_FIREBASE],
    tags: ["Academic Project", "E-Commerce", "Mobile-First"],
    image: "/img/projects/textbook-hero.png",
    github: "https://github.com/PouyanNorouzi/1800_202410_BBY09",
    liveDemo: "https://textbookhero-19cac.web.app/",
  },
  {
    id: 2,
    name: "DisasterNot",
    description:
      "An educational web application designed to help users prepare for natural disasters with an interactive chatbot. The AI-powered assistant provides personalized emergency preparedness plans, real-time information during emergencies, and location-based resource recommendations.",
    startDate: new Date("2024-04-02"),
    endDate: new Date("2024-05-15"),
    techStack: [SKILL_HTML, SKILL_CSS, SKILL_EJS, SKILL_NODEJS, SKILL_MONGODB, SKILL_OPENAI_API],
    tags: ["Academic Project", "AI Integration", "Public Safety"],
    image: "/img/projects/disasternot.png",
    github: "https://github.com/PouyanNorouzi/2800-202410-BBY28",
    liveDemo: "https://disasternot.pouyannorouzi.com/",
  },
  {
    id: 3,
    name: "Multicultural Calendar",
    description:
      "A global holiday calendar web application displaying holidays from various cultures along with historical and cultural context. Features include customizable calendar views, cultural event notifications, educational resources about celebrations, and user-contributed content.",
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-08-15"),
    techStack: [SKILL_VUE, SKILL_JAVASCRIPT, SKILL_NODEJS, SKILL_MONGODB],
    tags: ["Personal Project", "Cultural Education", "Interactive Calendar"],
    image: "/img/projects/multicultural-calendar.png",
    github: "https://github.com/PouyanNorouzi/multicultural-calender",
    liveDemo: "https://calendar.pouyannorouzi.com",
  },
  {
    id: 4,
    name: "Pouyan Web Services",
    description:
      "A cross-platform C-based client using libssh that connects to an SSH server for file management and remote terminal access. Works on both Linux and Windows operating systems. Primarily designed for interacting with a Raspberry Pi server used for hosting and storage, with SFTP functionality for seamless file transfers.",
    startDate: new Date("2024-12-02"),
    endDate: new Date("2024-12-20"),
    techStack: [SKILL_C, SKILL_LIBSSH, SKILL_SSH, SKILL_SFTP, SKILL_RASPBERRY_PI, SKILL_LINUX],
    tags: ["Personal Project", "System Programming", "File Transfer"],
    image: "/img/projects/pws.png",
    github: "https://github.com/PouyanNorouzi/pws",
  },
  {
    id: 5,
    name: "TDP Games",
    description:
      "A cloud-hosted real-time game platform designed for AWS deployment where users can create accounts, form game lobbies, and invite other users to play games. The platform uses WebSockets for real-time communication and Redis for game state management with cloud-optimized infrastructure.",
    startDate: new Date("2025-01-07"),
    endDate: new Date("2025-04-29"),
    techStack: [
      SKILL_NODEJS,
      SKILL_EXPRESSJS,
      SKILL_TYPESCRIPT,
      SKILL_WEBSOCKET,
      SKILL_REDIS,
      SKILL_RDS,
      SKILL_AWS,
      SKILL_HTML,
      SKILL_CSS,
    ],
    tags: ["Cloud Computing", "Gaming", "Real Time"],
    image: "/img/projects/tdp.png",
    github: "https://github.com/rockclimber147/CloudComputingTermProject",
    liveDemo: "https://tdp.pouyannorouzi.com",
  },
  {
    id: 6,
    name: "Conscious Connections",
    description:
      "An Industry-Sponsored Student Project building the best platform on the web for conscious dating and connections. A full-stack application with comprehensive user profiles, matching algorithms, and secure communication channels.",
    startDate: new Date("2025-04-15"),
    endDate: new Date("2025-05-20"),
    techStack: [
      SKILL_NEXTJS,
      SKILL_REACT,
      SKILL_TYPESCRIPT,
      SKILL_TAILWIND,
      SKILL_PRISMA,
      SKILL_POSTGRESQL,
      SKILL_NEXTAUTH,
      SKILL_STRIPE,
      SKILL_ZUSTAND,
    ],
    tags: ["Industry-Sponsored", "Dating Platform", "Full Stack"],
    image: "/img/projects/conscious-connections.png",
  },
  {
    id: 7,
    name: "Portfolio Website",
    description:
      "My personal portfolio website built with modern web technologies. Features responsive design, dark mode, project showcase, and contact form.",
    startDate: new Date("2025-05-02"),
    endDate: new Date("2025-05-15"),
    techStack: [SKILL_VUE, SKILL_NUXT, SKILL_TYPESCRIPT, SKILL_TAILWIND],
    tags: ["Personal Project", "Frontend", "UX/UI"],
    image: "/img/projects/portfolio.png",
    github: "https://github.com/PouyanNorouzi/portfolio-website",
    liveDemo: config.public.siteUrl as string,
  },
]);
</script>

<template>
  <div class="projects-container py-12">
    <UContainer>
      <h1 class="text-3xl md:text-4xl font-bold mb-8">My Projects</h1>
      <div class="flex flex-col gap-6 w-full">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="transition-all duration-300" />
      </div>
    </UContainer>
  </div>
</template>

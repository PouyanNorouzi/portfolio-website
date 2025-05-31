<script setup lang="ts">
useHead({
  title: "Pouyan - Projects",
});

// Project data
const projects = ref<Project[]>([
  {
    id: 1,
    name: "Textbook Hero",
    description:
      "A full-stack web application designed to facilitate peer-to-peer buying and selling of used textbooks among students. Features include user authentication, textbook listings with photos, search functionality, and in-app messaging for buyers and sellers.",
    startDate: new Date("2024-01-02"),
    endDate: new Date("2024-04-29"),
    techStack: [
      { title: "HTML", icon: "i-devicon-html5" },
      { title: "CSS", icon: "i-devicon-css3" },
      { title: "JavaScript", icon: "i-devicon-javascript" },
      { title: "Firebase", icon: "i-devicon-firebase" },
    ],
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
    techStack: [
      { title: "HTML", icon: "i-devicon-html5" },
      { title: "CSS", icon: "i-devicon-css3" },
      { title: "EJS", icon: "i-lucide-brackets" },
      { title: "Node.js", icon: "i-devicon-nodejs" },
      { title: "MongoDB", icon: "i-devicon-mongodb" },
      { title: "OpenAI API", icon: "i-logos-openai-icon" },
    ],
    tags: ["Academic Project", "AI Integration", "Public Safety"],
    image: "/img/projects/disasternot.png",
    github: "https://github.com/PouyanNorouzi/2800-202410-BBY28",
    liveDemo: "https://two800-202410-bby28-8ghn.onrender.com/",
  },
  {
    id: 3,
    name: "Multicultural Calendar",
    description:
      "A global holiday calendar web application displaying holidays from various cultures along with historical and cultural context. Features include customizable calendar views, cultural event notifications, educational resources about celebrations, and user-contributed content.",
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-08-15"),
    techStack: [
      { title: "Vue", icon: "i-devicon-vuejs" },
      { title: "JavaScript", icon: "i-devicon-javascript" },
      { title: "Node.js", icon: "i-devicon-nodejs" },
      { title: "MongoDB", icon: "i-devicon-mongodb" },
    ],
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
    techStack: [
      { title: "C", icon: "i-devicon-c" },
      { title: "libssh", icon: "i-lucide-key" },
      { title: "SSH", icon: "i-lucide-terminal" },
      { title: "SFTP", icon: "i-lucide-cloud-upload" },
      { title: "Raspberry Pi", icon: "i-devicon-raspberrypi" },
      { title: "Linux", icon: "i-devicon-linux" },
    ],
    tags: ["Personal Project", "System Programming", "File Transfer"],
    image: "/img/projects/pws.png",
    github: "https://github.com/PouyanNorouzi/pouyan-web-services",
  },
  {
    id: 5,
    name: "TDP Games",
    description:
      "A cloud-hosted real-time game platform designed for AWS deployment where users can create accounts, form game lobbies, and invite other users to play games. The platform uses WebSockets for real-time communication and Redis for game state management with cloud-optimized infrastructure.",
    startDate: new Date("2025-01-07"),
    endDate: new Date("2025-04-29"),
    techStack: [
      { title: "Node.js", icon: "i-devicon-nodejs" },
      { title: "Express.js", icon: "i-devicon-express" },
      { title: "TypeScript", icon: "i-devicon-typescript" },
      { title: "WebSockets", icon: "i-lucide-network" },
      { title: "Redis", icon: "i-devicon-redis" },
      { title: "Amazon RDS", icon: "i-devicon-amazonwebservices-wordmark" },
      { title: "AWS", icon: "i-devicon-amazonwebservices-wordmark" },
      { title: "HTML/CSS", icon: "i-devicon-html5" },
    ],
    tags: ["Cloud Computing", "Gaming", "Real Time"],
    image: "/img/projects/tdp.png",
    github: "https://github.com/rockclimber147/CloudComputingTermProject",
    liveDemo: "https://tdp.pouyannorouzi.com"
  },
  {
    id: 6,
    name: "Conscious Connections",
    description:
      "An Industry-Sponsored Student Project building the best platform on the web for conscious dating and connections. A full-stack application with comprehensive user profiles, matching algorithms, and secure communication channels.",
    startDate: new Date("2025-04-15"),
    endDate: new Date("2025-05-20"),
    techStack: [
      { title: "Next.js", icon: "i-devicon-nextjs" },
      { title: "React", icon: "i-devicon-react" },
      { title: "TypeScript", icon: "i-devicon-typescript" },
      { title: "Tailwind CSS", icon: "i-devicon-tailwindcss" },
      { title: "Prisma", icon: "i-devicon-prisma" },
      { title: "PostgreSQL", icon: "i-devicon-postgresql" },
      { title: "NextAuth", icon: "i-lucide-shield" },
      { title: "Stripe", icon: "i-lucide-credit-card" },
      { title: "Zustand", icon: "i-devicon-zustand" },
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
    techStack: [
      { title: "Vue.js", icon: "i-devicon-vuejs" },
      { title: "Nuxt 3", icon: "i-devicon-nuxtjs" },
      { title: "TypeScript", icon: "i-devicon-typescript" },
      { title: "Tailwind CSS", icon: "i-devicon-tailwindcss" },
    ],
    tags: ["Personal Project", "Frontend", "UX/UI"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80",
    github: "https://github.com/PouyanNorouzi/portfolio-website",
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

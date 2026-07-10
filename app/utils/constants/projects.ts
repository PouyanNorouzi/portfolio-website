import {
  SKILL_ANDROID,
  SKILL_AWS,
  SKILL_BUN,
  SKILL_C,
  SKILL_CSHARP,
  SKILL_CSS,
  SKILL_DOCKER,
  SKILL_DYNAMODB,
  SKILL_EJS,
  SKILL_EXPRESSJS,
  SKILL_FIREBASE,
  SKILL_FRAMER_MOTION,
  SKILL_HTML,
  SKILL_JAVASCRIPT,
  SKILL_JQUERY,
  SKILL_KOTLIN,
  SKILL_LAMBDA,
  SKILL_LIBSSH,
  SKILL_LINUX,
  SKILL_MONGODB,
  SKILL_NETWORKING,
  SKILL_NEXTAUTH,
  SKILL_NEXTJS,
  SKILL_NODEJS,
  SKILL_NUXT,
  SKILL_OPENAI_API,
  SKILL_POSTGRESQL,
  SKILL_PRISMA,
  SKILL_PYTHON,
  SKILL_RASPBERRY_PI,
  SKILL_REACT,
  SKILL_RDS,
  SKILL_REDIS,
  SKILL_SFTP,
  SKILL_SSH,
  SKILL_STRIPE,
  SKILL_SVELTEKIT,
  SKILL_TAILWIND,
  SKILL_TYPESCRIPT,
  SKILL_VERCEL,
  SKILL_VUE,
  SKILL_WEBSOCKET,
  SKILL_ZUSTAND,
} from "~/utils/constants/skills";

const SITE_URL = import.meta.env.NUXT_PUBLIC_SITE_URL || "https://pouyannorouzi.com";

export const PROJECT_TEXTBOOK_HERO: Project = {
  id: 1,
  name: "Textbook Hero",
  description:
    "A full-stack web application designed to facilitate peer-to-peer buying and selling of used textbooks among students. Features include user authentication, textbook listings with photos, search functionality, and in-app messaging for buyers and sellers.",
  shortDescription: "Peer-to-peer textbook marketplace for students.",
  startDate: new Date(2024, 0),
  endDate: new Date(2024, 4),
  techStack: [SKILL_HTML, SKILL_CSS, SKILL_JAVASCRIPT, SKILL_FIREBASE],
  tags: ["Academic Project", "E-Commerce", "Mobile-First"],
  image: "/img/projects/textbook-hero.png",
  github: "https://github.com/PouyanNorouzi/1800_202410_BBY09",
  liveDemo: "https://textbookhero-19cac.web.app/",
};

export const PROJECT_DISASTERNOT: Project = {
  id: 2,
  name: "DisasterNot",
  description:
    "An educational web application designed to help users prepare for natural disasters with an interactive chatbot. The AI-powered assistant provides personalized emergency preparedness plans, real-time information during emergencies, and location-based resource recommendations.",
  shortDescription: "AI-powered disaster preparedness assistant.",
  startDate: new Date(2024, 3),
  endDate: new Date(2024, 4),
  techStack: [SKILL_HTML, SKILL_CSS, SKILL_EJS, SKILL_NODEJS, SKILL_MONGODB, SKILL_OPENAI_API],
  tags: ["Academic Project", "AI Integration"],
  image: "/img/projects/disasternot.png",
  github: "https://github.com/PouyanNorouzi/2800-202410-BBY28",
  liveDemo: "https://disasternot.pouyannorouzi.com/",
};

export const PROJECT_MULTICULTURAL_CALENDAR: Project = {
  id: 3,
  name: "Multicultural Calendar",
  description:
    "A global holiday calendar web application displaying holidays from various cultures along with historical and cultural context. Features include customizable calendar views, cultural event notifications, educational resources about celebrations, and user-contributed content.",
  shortDescription: "Interactive calendar for global holidays and events.",
  startDate: new Date(2024, 6),
  endDate: new Date(2024, 7),
  techStack: [SKILL_VUE, SKILL_JAVASCRIPT, SKILL_NODEJS, SKILL_MONGODB],
  tags: ["Personal Project", "Interactive Calendar"],
  image: "/img/projects/multicultural-calendar.png",
  github: "https://github.com/PouyanNorouzi/multicultural-calender",
  liveDemo: "https://calendar.pouyannorouzi.com",
};

export const PROJECT_POUYAN_WEB_SERVICES: Project = {
  id: 4,
  name: "Pouyan Web Services",
  description:
    "A cross-platform C-based client using libssh that connects to an SSH server for file management and remote terminal access. Works on both Linux and Windows operating systems. Primarily designed for interacting with a Raspberry Pi server used for hosting and storage, with SFTP functionality for seamless file transfers.",
  shortDescription: "Cross-platform SSH client for remote server management.",
  startDate: new Date(2024, 11),
  endDate: new Date(2024, 11),
  techStack: [SKILL_C, SKILL_LIBSSH, SKILL_SSH, SKILL_SFTP, SKILL_RASPBERRY_PI, SKILL_LINUX],
  tags: ["Personal Project", "System Programming"],
  image: "/img/projects/pws.png",
  github: "https://github.com/PouyanNorouzi/pws",
};

export const PROJECT_TDP_GAMES: Project = {
  id: 5,
  name: "TDP Games",
  description:
    "A cloud-hosted real-time game platform designed for AWS deployment where users can create accounts, form game lobbies, and invite other users to play games. The platform uses WebSockets for real-time communication and Redis for game state management with cloud-optimized infrastructure.",
  shortDescription: "Real-time multiplayer game platform hosted on AWS.",
  startDate: new Date(2025, 0),
  endDate: new Date(2025, 3),
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
};

export const PROJECT_MOUYAN: Project = {
  id: 6,
  name: "Mouyan",
  description:
    "A modern Android movie discovery and rating application built with Jetpack Compose. Features comprehensive movie search powered by The Movie Database (TMDb) API, personal movie rating system with comments, and beautiful Material Design 3 interface. Users can browse popular movies, search for specific titles, view detailed movie information including cast and crew, and maintain their personal rating history.",
  shortDescription: "Android app for discovering and rating movies.",
  startDate: new Date(2025, 2),
  endDate: new Date(2025, 3),
  techStack: [SKILL_KOTLIN, SKILL_ANDROID],
  tags: ["Mobile App", "Movie Discovery", "Material Design"],
  image: "/img/projects/mouyan.png",
  github: "https://github.com/PouyanNorouzi/COMP3717_Project",
};

export const PROJECT_CONSCIOUS_CONNECTIONS: Project = {
  id: 7,
  name: "Conscious Connections",
  description:
    "An Industry-Sponsored Student Project building the best platform on the web for conscious dating and connections. A full-stack application with comprehensive user profiles, matching algorithms, and secure communication channels.",
  shortDescription: "Industry-Sponsored - modern dating platform with matching and secure messaging.",
  startDate: new Date(2025, 3),
  endDate: new Date(2025, 4),
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
};

export const PROJECT_PORTFOLIO_WEBSITE: Project = {
  id: 8,
  name: "Portfolio Website",
  description:
    "My personal portfolio website built with modern web technologies. Features responsive design, dark mode, project showcase, and contact form.",
  shortDescription: "Personal portfolio site with a polished dark-mode experience.",
  startDate: new Date(2025, 4),
  endDate: new Date(2025, 4),
  techStack: [SKILL_VUE, SKILL_NUXT, SKILL_TYPESCRIPT, SKILL_TAILWIND],
  tags: ["Personal Project", "UX/UI"],
  image: "/img/projects/portfolio.png",
  github: "https://github.com/PouyanNorouzi/portfolio-website",
  liveDemo: SITE_URL,
};

export const PROJECT_ACCOUNTIUM: Project = {
  id: 9,
  name: "Accountium",
  description:
    "An industry-sponsored project to improve the UI of an existing accounting software and create a new marketing website. The application was built with a C# backend and vanilla HTML, CSS, and JavaScript frontend with jQuery. I focused on creating a reusable table component that allowed programmatic table generation with consistent styling, addressing the challenge of copy-pasted styles throughout the codebase.",
  shortDescription: "Industry-Sponsored - UI modernization and marketing site for accounting software.",
  startDate: new Date(2025, 8),
  endDate: new Date(2025, 11),
  techStack: [SKILL_CSHARP, SKILL_HTML, SKILL_CSS, SKILL_JAVASCRIPT, SKILL_JQUERY],
  tags: ["Industry-Sponsored", "UI/UX", "Legacy Code"],
  image: "/img/projects/accountium.png",
};

export const PROJECT_MEMEIFY: Project = {
  id: 10,
  name: "Memeify",
  description:
    "A full-stack meme generation platform that uses AI to create captions for uploaded images. The system consists of a TypeScript backend API, HTML/CSS/JavaScript frontend, and a Python-based FastAPI microservice that leverages the BLIP (Bootstrapping Language-Image Pre-training) model for intelligent image captioning. Features include user authentication, image upload, and AI-powered meme caption generation.",
  shortDescription: "AI-powered meme generator with image captioning.",
  startDate: new Date(2025, 8),
  endDate: new Date(2025, 11),
  techStack: [
    SKILL_TYPESCRIPT,
    SKILL_NODEJS,
    SKILL_HTML,
    SKILL_CSS,
    SKILL_JAVASCRIPT,
    SKILL_PYTHON,
    SKILL_DOCKER,
  ],
  tags: ["Academic Project", "Machine Learning", "Full Stack"],
  image: "/img/projects/memeify.png",
  github: "https://github.com/PouyanNorouzi/memeify-backend",
  liveDemo: "https://memeify.pouyannorouzi.com/",
};

export const PROJECT_FAASIFY: Project = {
  id: 11,
  name: "FaaSify",
  description:
    "A serverless e-commerce storefront platform built on AWS cloud architecture. This collaborative project with an 11-person team features a React frontend, serverless Lambda backend with DynamoDB, and real-time chat functionality. I focused on developing the WebSocket server using TypeScript and Bun, implementing real-time messaging, typing indicators, read receipts, and presence tracking.",
  shortDescription: "Serverless e-commerce storefront with real-time chat.",
  startDate: new Date(2025, 9),
  endDate: new Date(2025, 11),
  techStack: [
    SKILL_REACT,
    SKILL_TYPESCRIPT,
    SKILL_BUN,
    SKILL_NODEJS,
    SKILL_AWS,
    SKILL_LAMBDA,
    SKILL_DYNAMODB,
    SKILL_WEBSOCKET,
    SKILL_TAILWIND,
    SKILL_STRIPE,
  ],
  tags: ["Academic Project", "Serverless", "E-Commerce"],
  image: "/img/projects/faasify.png",
  github: "https://github.com/faasify-official",
};

export const PROJECT_SAFEDEV: Project = {
  id: 12,
  name: "SafeDev",
  description:
    "A developer-first security platform built in 24 hours during a hackathon with a partner. SafeDev helps find and fix security issues before they ship by scanning GitHub repositories for secrets, validating JWTs, and delivering actionable security insights. Features real-time GitHub scanning with secret detection, JWT inspector for decoding and validation, and an AI-powered security advisor using GPT-4o that provides a unified security score with prioritized remediation steps.",
  shortDescription: "Hackathon security tool for scanning repos and validating JWTs.",
  startDate: new Date(2026, 0),
  endDate: new Date(2026, 0),
  techStack: [
    SKILL_NEXTJS,
    SKILL_TYPESCRIPT,
    SKILL_TAILWIND,
    SKILL_FRAMER_MOTION,
    SKILL_NEXTAUTH,
    SKILL_OPENAI_API,
    SKILL_VERCEL,
  ],
  tags: ["Hackathon", "Security", "AI Integration"],
  image: "/img/projects/safedev.png",
  github: "https://github.com/dipenvir/SafeDev",
  liveDemo: "https://safe-dev-rrw4.vercel.app/",
};

export const PROJECT_POUDB: Project = {
  id: 13,
  name: "poudb",
  description:
    "A lightweight, standalone database written in C. Runs as its own process and communicates with clients over TCP sockets using a simple custom protocol. Features a custom in-memory and persistent storage engine, typed homogeneous arrays, token-based authentication with admin and readonly roles, and a scalable build system using GNU Make.",
  shortDescription: "Custom C database with TCP networking and authentication.",
  startDate: new Date(2025, 5),
  endDate: new Date(2026, 4),
  techStack: [SKILL_C, SKILL_LINUX, SKILL_NETWORKING],
  tags: ["Personal Project", "Systems Programming", "Database"],
  image: "/img/projects/poudb.png",
  github: "https://github.com/PouyanNorouzi/poudb",
};

export const PROJECT_FLUX: Project = {
  id: 14,
  name: "FLUX",
  description:
    "A brutalist operator-console recipe management application built with SvelteKit and backed by poudb — a custom C database over TCP. Features a recipe vault with tag-based filtering, structured recipe creation, full edit support, and live system telemetry showing connection status, latency, and record counts.",
  shortDescription: "SvelteKit recipe manager backed by a custom database.",
  startDate: new Date(2026, 3),
  endDate: new Date(2026, 4),
  techStack: [SKILL_SVELTEKIT, SKILL_TAILWIND],
  tags: ["Personal Project", "Full Stack", "Recipe App"],
  image: "/img/projects/flux.png",
  github: "https://github.com/PouyanNorouzi/flux",
  liveDemo: "https://flux.pouyannorouzi.com",
};

export const ALL_PROJECTS: Project[] = [
  PROJECT_TEXTBOOK_HERO,
  PROJECT_DISASTERNOT,
  PROJECT_MULTICULTURAL_CALENDAR,
  PROJECT_POUYAN_WEB_SERVICES,
  PROJECT_TDP_GAMES,
  PROJECT_MOUYAN,
  PROJECT_CONSCIOUS_CONNECTIONS,
  PROJECT_PORTFOLIO_WEBSITE,
  PROJECT_ACCOUNTIUM,
  PROJECT_MEMEIFY,
  PROJECT_FAASIFY,
  PROJECT_SAFEDEV,
  PROJECT_POUDB,
  PROJECT_FLUX,
];

export const FEATURED_PROJECT: Project[] = [
  PROJECT_FLUX,
  PROJECT_POUDB,
  PROJECT_FAASIFY,
  PROJECT_CONSCIOUS_CONNECTIONS,
  PROJECT_TDP_GAMES,
];

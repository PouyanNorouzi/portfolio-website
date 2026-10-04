export const SKILL_JAVASCRIPT: EnhancedSkill = {
  id: 1,
  title: "JavaScript",
  icon: "i-skill-icons-javascript",
  proficiency: 0.9,
  category: "Languages",
  relatedSkills: ["TypeScript", "Node.js", "React", "Vue"],
  color: "#F7DF1E",
};

export const SKILL_TYPESCRIPT: EnhancedSkill = {
  id: 2,
  title: "TypeScript",
  icon: "i-skill-icons-typescript",
  proficiency: 0.9,
  category: "Languages",
  relatedSkills: ["JavaScript", "Node.js", "React", "Vue"],
  color: "#3178C6",
};

export const SKILL_PYTHON: EnhancedSkill = {
  id: 3,
  title: "Python",
  icon: { lightIcon: "i-skill-icons-python-light", darkIcon: "i-skill-icons-python-dark" },
  proficiency: 0.85,
  category: "Languages",
  relatedSkills: ["Django", "Flask"],
  color: "#3776AB",
};

export const SKILL_JAVA: EnhancedSkill = {
  id: 4,
  title: "Java",
  icon: { lightIcon: "i-skill-icons-java-light", darkIcon: "i-skill-icons-java-dark" },
  proficiency: 0.9,
  category: "Languages",
  color: "#ED8B00",
};

export const SKILL_CSHARP: EnhancedSkill = {
  id: 5,
  title: "C#",
  icon: "i-skill-icons-cs",
  proficiency: 0.6,
  category: "Languages",
  relatedSkills: ["Java", ".NET"],
  color: "#239120",
};

export const SKILL_C: EnhancedSkill = {
  id: 6,
  title: "C",
  icon: "i-skill-icons-c",
  proficiency: 0.85,
  category: "Languages",
  relatedSkills: [],
  color: "#A8B9CC",
};

export const SKILL_CPP: EnhancedSkill = {
  id: 56,
  title: "C++",
  icon: "i-skill-icons-cpp",
  proficiency: 0.65,
  category: "Languages",
  relatedSkills: ["C"],
  color: "#00599C",
};

export const SKILL_KOTLIN: EnhancedSkill = {
  id: 7,
  title: "Kotlin",
  icon: { lightIcon: "i-skill-icons-kotlin-light", darkIcon: "i-skill-icons-kotlin-dark" },
  proficiency: 0.7,
  category: "Languages",
  relatedSkills: ["Java", "Android"],
  color: "#7F52FF",
};

export const SKILL_HTML: EnhancedSkill = {
  id: 8,
  title: "HTML",
  icon: "i-skill-icons-html",
  proficiency: 1,
  category: "Frontend & Mobile",
  relatedSkills: ["CSS", "JavaScript"],
  color: "#E34F26",
};

export const SKILL_CSS: EnhancedSkill = {
  id: 9,
  title: "CSS",
  icon: "i-skill-icons-css",
  proficiency: 0.75,
  category: "Frontend & Mobile",
  relatedSkills: ["HTML"],
  color: "#1572B6",
};

export const SKILL_REACT: EnhancedSkill = {
  id: 10,
  title: "React",
  icon: { lightIcon: "i-skill-icons-react-light", darkIcon: "i-skill-icons-react-dark" },
  proficiency: 0.7,
  category: "Frontend & Mobile",
  relatedSkills: ["JavaScript", "Next.js"],
  color: "#61DAFB",
};

export const SKILL_VUE: EnhancedSkill = {
  id: 11,
  title: "Vue",
  icon: { lightIcon: "i-skill-icons-vuejs-light", darkIcon: "i-skill-icons-vuejs-dark" },
  proficiency: 0.85,
  category: "Frontend & Mobile",
  relatedSkills: ["JavaScript", "Nuxt"],
  color: "#4FC08D",
};

export const SKILL_NEXTJS: EnhancedSkill = {
  id: 12,
  title: "Next.js",
  icon: { lightIcon: "i-skill-icons-nextjs-light", darkIcon: "i-skill-icons-nextjs-dark" },
  proficiency: 0.75,
  category: "Frontend & Mobile",
  relatedSkills: ["React", "JavaScript"],
  color: "#000000",
};

export const SKILL_NUXT: EnhancedSkill = {
  id: 13,
  title: "Nuxt",
  icon: { lightIcon: "i-skill-icons-nuxtjs-light", darkIcon: "i-skill-icons-nuxtjs-dark" },
  proficiency: 0.85,
  category: "Frontend & Mobile",
  relatedSkills: ["Vue", "JavaScript"],
  color: "#00DC82",
};

export const SKILL_JQUERY: EnhancedSkill = {
  id: 14,
  title: "jQuery",
  icon: "i-skill-icons-jquery",
  proficiency: 0.85,
  category: "Frontend & Mobile",
  relatedSkills: ["JavaScript"],
  color: "#0769AD",
};

export const SKILL_NODEJS: EnhancedSkill = {
  id: 15,
  title: "Node.js",
  icon: { lightIcon: "i-skill-icons-nodejs-light", darkIcon: "i-skill-icons-nodejs-dark" },
  proficiency: 0.9,
  category: "Backend & APIs",
  relatedSkills: ["JavaScript", "Express.js"],
  color: "#339933",
};

export const SKILL_EXPRESSJS: EnhancedSkill = {
  id: 16,
  title: "Express.js",
  icon: { lightIcon: "i-skill-icons-expressjs-light", darkIcon: "i-skill-icons-expressjs-dark" },
  proficiency: 0.9,
  category: "Backend & APIs",
  relatedSkills: ["Node.js", "JavaScript"],
  color: "#000000",
};

export const SKILL_EJS: EnhancedSkill = {
  id: 17,
  title: "EJS",
  icon: "i-simple-icons-ejs",
  proficiency: 0.6,
  category: "Frontend & Mobile",
  relatedSkills: ["HTML", "JavaScript", "Node.js"],
  color: "#A91E50",
};

export const SKILL_LINUX: EnhancedSkill = {
  id: 18,
  title: "Linux",
  icon: { lightIcon: "i-skill-icons-linux-light", darkIcon: "i-skill-icons-linux-dark" },
  proficiency: 0.87,
  category: "Systems",
  relatedSkills: ["Bash", "Raspberry Pi"],
  color: "#FCC624",
};

export const SKILL_BASH: EnhancedSkill = {
  id: 19,
  title: "Bash",
  icon: { lightIcon: "i-skill-icons-bash-light", darkIcon: "i-skill-icons-bash-dark" },
  proficiency: 0.85,
  category: "Systems",
  relatedSkills: ["Linux"],
  color: "#4EAA25",
};

export const SKILL_OS: EnhancedSkill = {
  id: 20,
  title: "Operating Systems",
  icon: "i-lucide-laptop",
  proficiency: 0.7,
  category: "Systems",
  relatedSkills: ["Linux"],
  color: "#0078D6",
};

export const SKILL_RASPBERRY_PI: EnhancedSkill = {
  id: 21,
  title: "Raspberry Pi",
  icon: {
    lightIcon: "i-skill-icons-raspberrypi-light",
    darkIcon: "i-skill-icons-raspberrypi-dark",
  },
  proficiency: 0.85,
  category: "Systems",
  relatedSkills: ["Linux", "Self-hosting"],
  color: "#C51A4A",
};

export const SKILL_VIRTUALIZATION: EnhancedSkill = {
  id: 22,
  title: "Virtualization",
  icon: "i-lucide-layers",
  proficiency: 0.5,
  category: "Systems",
  relatedSkills: ["Linux", "Docker"],
  color: "#167EFB",
};

export const SKILL_NETWORKING: EnhancedSkill = {
  id: 23,
  title: "Networking",
  icon: "i-lucide-network",
  proficiency: 0.55,
  category: "Networking",
  relatedSkills: ["Linux", "EC2"],
  color: "#0078D7",
};

export const SKILL_SECURITY: EnhancedSkill = {
  id: 24,
  title: "System Security",
  icon: "i-lucide-shield",
  proficiency: 0.7,
  category: "Security",
  relatedSkills: ["Linux", "Networking"],
  color: "#FF4500",
};

export const SKILL_ANDROID: EnhancedSkill = {
  id: 25,
  title: "Android",
  icon: {
    lightIcon: "i-skill-icons-androidstudio-light",
    darkIcon: "i-skill-icons-androidstudio-dark",
  },
  proficiency: 0.65,
  category: "Frontend & Mobile",
  relatedSkills: ["Kotlin", "Java"],
  color: "#3DDC84",
};

export const SKILL_MONGODB: EnhancedSkill = {
  id: 26,
  title: "MongoDB",
  icon: "i-skill-icons-mongodb",
  proficiency: 0.85,
  category: "Data",
  relatedSkills: ["Node.js", "DynamoDB"],
  color: "#47A248",
};

export const SKILL_MYSQL: EnhancedSkill = {
  id: 27,
  title: "MySQL",
  icon: { lightIcon: "i-skill-icons-mysql-light", darkIcon: "i-skill-icons-mysql-dark" },
  proficiency: 0.75,
  category: "Data",
  relatedSkills: ["PostgreSQL", "RDS"],
  color: "#4479A1",
};

export const SKILL_POSTGRESQL: EnhancedSkill = {
  id: 28,
  title: "PostgreSQL",
  icon: { lightIcon: "i-skill-icons-postgresql-light", darkIcon: "i-skill-icons-postgresql-dark" },
  proficiency: 0.75,
  category: "Data",
  relatedSkills: ["MySQL", "RDS"],
  color: "#4169E1",
};

export const SKILL_FIREBASE: EnhancedSkill = {
  id: 29,
  title: "Firebase",
  icon: "i-devicon-firebase",
  proficiency: 0.7,
  category: "Data",
  relatedSkills: ["DynamoDB"],
  color: "#FFCA28",
};

export const SKILL_PRISMA: EnhancedSkill = {
  id: 30,
  title: "Prisma",
  icon: "i-skill-icons-prisma",
  proficiency: 0.9,
  category: "Data",
  relatedSkills: ["PostgreSQL", "MySQL"],
  color: "#2D3748",
};

export const SKILL_DYNAMODB: EnhancedSkill = {
  id: 31,
  title: "DynamoDB",
  icon: { lightIcon: "i-skill-icons-dynamodb-light", darkIcon: "i-skill-icons-dynamodb-dark" },
  proficiency: 0.85,
  category: "Data",
  relatedSkills: ["MongoDB", "AWS"],
  color: "#4053D6",
};

export const SKILL_RDS: EnhancedSkill = {
  id: 32,
  title: "RDS",
  icon: "i-logos-aws-rds",
  proficiency: 0.75,
  category: "Data",
  relatedSkills: ["MySQL", "PostgreSQL", "AWS"],
  color: "#3B48CC",
};

export const SKILL_EC2: EnhancedSkill = {
  id: 33,
  title: "EC2",
  icon: "i-logos-aws-ec2",
  proficiency: 0.85,
  category: "Cloud",
  relatedSkills: ["AWS", "Linux", "Self-hosting"],
  color: "#FF9900",
};

export const SKILL_LAMBDA: EnhancedSkill = {
  id: 34,
  title: "Lambda",
  icon: "i-logos-aws-lambda",
  proficiency: 0.85,
  category: "Cloud",
  relatedSkills: ["AWS", "JavaScript", "Node.js"],
  color: "#FF9900",
};

export const SKILL_S3: EnhancedSkill = {
  id: 35,
  title: "S3",
  icon: "i-logos-aws-s3",
  proficiency: 0.85,
  category: "Cloud",
  relatedSkills: ["AWS"],
  color: "#569A31",
};

export const SKILL_GIT: EnhancedSkill = {
  id: 36,
  title: "Git",
  icon: "i-skill-icons-git",
  proficiency: 0.9,
  category: "DevOps & Tooling",
  relatedSkills: ["CI/CD"],
  color: "#F05032",
};

export const SKILL_DOCKER: EnhancedSkill = {
  id: 37,
  title: "Docker",
  icon: "i-skill-icons-docker",
  proficiency: 0.85,
  category: "DevOps & Tooling",
  relatedSkills: ["Virtualization", "CI/CD"],
  color: "#2496ED",
};

export const SKILL_SELFHOSTING: EnhancedSkill = {
  id: 38,
  title: "Self-hosting",
  icon: "i-lucide-server",
  proficiency: 0.85,
  category: "DevOps & Tooling",
  relatedSkills: ["Raspberry Pi", "Linux", "Docker"],
  color: "#7B68EE",
};

export const SKILL_CICD: EnhancedSkill = {
  id: 39,
  title: "CI/CD",
  icon: "i-lucide-git-branch",
  proficiency: 0.85,
  category: "DevOps & Tooling",
  relatedSkills: ["Git", "Docker"],
  color: "#4078C0",
};

export const SKILL_NGINX: EnhancedSkill = {
  id: 40,
  title: "Nginx",
  icon: "i-skill-icons-nginx",
  proficiency: 0.7,
  category: "DevOps & Tooling",
  relatedSkills: ["Self-hosting", "Linux"],
  color: "#009639",
};

export const SKILL_OPENAI_API: EnhancedSkill = {
  id: 41,
  title: "OpenAI API",
  icon: "i-simple-icons-openai",
  proficiency: 0.7,
  category: "AI/ML",
  relatedSkills: ["Nodejs", "Python"],
  color: "#412991",
};

export const SKILL_LIBSSH: EnhancedSkill = {
  id: 42,
  title: "libssh",
  icon: "i-lucide-key",
  proficiency: 0.8,
  category: "Networking",
  relatedSkills: ["C", "SSH", "SFTP", "Networking"],
  color: "#3E64A0",
};

export const SKILL_SSH: EnhancedSkill = {
  id: 43,
  title: "SSH",
  icon: "i-lucide-terminal",
  proficiency: 0.85,
  category: "Networking",
  relatedSkills: ["C", "SSH", "libssh", "Networking"],
  color: "#232F3E",
};

export const SKILL_SFTP: EnhancedSkill = {
  id: 44,
  title: "SFTP",
  icon: "i-lucide-cloud-upload",
  proficiency: 0.8,
  category: "Networking",
  relatedSkills: ["C", "SSH", "libssh", "Networking"],
  color: "#00AEF0",
};

export const SKILL_AWS: EnhancedSkill = {
  id: 45,
  title: "AWS",
  icon: { lightIcon: "i-skill-icons-aws-light", darkIcon: "i-skill-icons-aws-dark" },
  proficiency: 0.85,
  category: "Cloud",
  relatedSkills: ["EC2", "S3", "Lambda", "DynamoDB", "RDS"],
  color: "#FF9900"
}

export const SKILL_REDIS: EnhancedSkill = {
  id: 46,
  title: "Redis",
  icon: { lightIcon: "i-skill-icons-redis-light", darkIcon: "i-skill-icons-redis-dark" },
  proficiency: 0.8,
  category: "Data",
  relatedSkills: ["MongoDB", "Caching", "Pub/Sub"],
  color: "#DC382D",
};

export const SKILL_WEBSOCKET: EnhancedSkill = {
  id: 47,
  title: "WebSockets",
  icon: "i-lucide-plug",
  proficiency: 0.85,
  category: "Backend & APIs",
  relatedSkills: ["JavaScript", "Node.js", "Real-time Communication"],
  color: "#4353A4",
};

export const SKILL_ZUSTAND: EnhancedSkill = {
  id: 48,
  title: "Zustand",
  icon: "i-devicon-zustand",
  proficiency: 0.75,
  category: "Frontend & Mobile",
  relatedSkills: ["React", "State Management", "JavaScript"],
  color: "#443E38",
};

export const SKILL_NEXTAUTH: EnhancedSkill = {
  id: 49,
  title: "NextAuth",
  icon: "i-lucide-shield-check",
  proficiency: 0.8,
  category: "Backend & APIs",
  relatedSkills: ["Next.js", "Authentication", "OAuth"],
  color: "#2F855A",
};

export const SKILL_STRIPE: EnhancedSkill = {
  id: 50,
  title: "Stripe",
  icon: "i-simple-icons-stripe",
  proficiency: 0.7,
  category: "Backend & APIs",
  relatedSkills: ["Payments", "Node.js", "JavaScript"],
  color: "#635BFF",
};

export const SKILL_TAILWIND: EnhancedSkill = {
  id: 51,
  title: "Tailwind CSS",
  icon: { lightIcon: "i-skill-icons-tailwindcss-light", darkIcon: "i-skill-icons-tailwindcss-dark" },
  proficiency: 0.85,
  category: "Frontend & Mobile",
  relatedSkills: ["CSS", "HTML", "Web Design"],
  color: "#06B6D4",
};

export const SKILL_BUN: EnhancedSkill = {
  id: 52,
  title: "Bun",
  icon: { lightIcon: "i-skill-icons-bun-light", darkIcon: "i-skill-icons-bun-dark" },
  proficiency: 0.7,
  category: "Backend & APIs",
  relatedSkills: ["JavaScript", "TypeScript", "Node.js"],
  color: "#FBF0DF",
};

export const SKILL_FRAMER_MOTION: EnhancedSkill = {
  id: 53,
  title: "Framer Motion",
  icon: "i-simple-icons-framer",
  proficiency: 0.7,
  category: "Frontend & Mobile",
  relatedSkills: ["React", "JavaScript", "Animations"],
  color: "#0055FF",
};

export const SKILL_VERCEL: EnhancedSkill = {
  id: 54,
  title: "Vercel",
  icon: { lightIcon: "i-skill-icons-vercel-light", darkIcon: "i-skill-icons-vercel-dark" },
  proficiency: 0.8,
  category: "Cloud",
  relatedSkills: ["Next.js", "CI/CD", "Deployment"],
  color: "#000000",
};

export const SKILL_SVELTEKIT: EnhancedSkill = {
  id: 55,
  title: "SvelteKit",
  icon: "i-skill-icons-svelte",
  proficiency: 0.75,
  category: "Frontend & Mobile",
  relatedSkills: ["JavaScript", "Svelte", "TypeScript"],
  color: "#FF3E00",
};

// Added from the resume skill list. Every proficiency here is a placeholder (0.7); set the real ones.
export const SKILL_GO: EnhancedSkill = {
  id: 56,
  title: "Go",
  icon: "i-skill-icons-golang",
  proficiency: 0.6,
  category: "Languages",
  relatedSkills: ["C", "Backend"],
  color: "#00ADD8",
};

export const SKILL_BOOTSTRAP: EnhancedSkill = {
  id: 57,
  title: "Bootstrap",
  icon: "i-skill-icons-bootstrap",
  proficiency: 0.8,
  category: "Frontend & Mobile",
  relatedSkills: ["HTML", "CSS"],
  color: "#7952B3",
};

export const SKILL_JETPACK_COMPOSE: EnhancedSkill = {
  id: 58,
  title: "Jetpack Compose",
  icon: "i-devicon-jetpackcompose",
  proficiency: 0.65,
  category: "Frontend & Mobile",
  relatedSkills: ["Kotlin", "Android"],
  color: "#4285F4",
};

export const SKILL_FASTAPI: EnhancedSkill = {
  id: 59,
  title: "FastAPI",
  icon: "i-skill-icons-fastapi",
  proficiency: 0.7,
  category: "Backend & APIs",
  relatedSkills: ["Python"],
  color: "#009688",
};

export const SKILL_DJANGO: EnhancedSkill = {
  id: 60,
  title: "Django",
  icon: "i-skill-icons-django",
  proficiency: 0.5,
  category: "Backend & APIs",
  relatedSkills: ["Python"],
  color: "#092E20",
};

export const SKILL_SOCKETIO: EnhancedSkill = {
  id: 61,
  title: "Socket.io",
  icon: "i-devicon-socketio",
  proficiency: 0.8,
  category: "Backend & APIs",
  relatedSkills: ["WebSockets", "Node.js"],
  color: "#010101",
};

export const SKILL_ZOD: EnhancedSkill = {
  id: 62,
  title: "Zod",
  icon: "i-logos-zod",
  proficiency: 0.7,
  category: "Backend & APIs",
  relatedSkills: ["TypeScript"],
  color: "#3E67B1",
};

export const SKILL_MULTER: EnhancedSkill = {
  id: 63,
  title: "Multer",
  icon: "i-lucide-upload",
  proficiency: 0.7,
  category: "Backend & APIs",
  relatedSkills: ["Express.js", "Node.js"],
  color: "#FF6B35",
};

export const SKILL_MONGOOSE: EnhancedSkill = {
  id: 64,
  title: "Mongoose",
  icon: "i-devicon-mongoose",
  proficiency: 0.7,
  category: "Data",
  relatedSkills: ["MongoDB", "Node.js"],
  color: "#880000",
};

export const SKILL_SEQUELIZE: EnhancedSkill = {
  id: 65,
  title: "Sequelize",
  icon: { lightIcon: "i-skill-icons-sequelize-light", darkIcon: "i-skill-icons-sequelize-dark" },
  proficiency: 0.75,
  category: "Data",
  relatedSkills: ["MySQL", "PostgreSQL", "Node.js"],
  color: "#52B0E7",
};

export const SKILL_SYSTEMD: EnhancedSkill = {
  id: 66,
  title: "systemd",
  icon: "i-lucide-cog",
  proficiency: 0.8,
  category: "Systems",
  relatedSkills: ["Linux", "Self-hosting"],
  color: "#30D475",
};

export const SKILL_UFW: EnhancedSkill = {
  id: 67,
  title: "ufw",
  icon: "i-lucide-brick-wall",
  proficiency: 0.7,
  category: "Systems",
  relatedSkills: ["Linux", "Networking"],
  color: "#E95420",
};

export const SKILL_SAMBA: EnhancedSkill = {
  id: 68,
  title: "Samba",
  icon: "i-lucide-folder-sync",
  proficiency: 0.7,
  category: "Systems",
  relatedSkills: ["Linux", "Raspberry Pi"],
  color: "#CC2927",
};

export const SKILL_WIRESHARK: EnhancedSkill = {
  id: 69,
  title: "Wireshark",
  icon: "i-simple-icons-wireshark",
  proficiency: 0.6,
  category: "Networking",
  relatedSkills: ["Networking"],
  color: "#1679A7",
};

export const SKILL_BOOST_ASIO: EnhancedSkill = {
  id: 70,
  title: "Boost.Asio",
  icon: "i-lucide-network",
  proficiency: 0.65,
  category: "Networking",
  relatedSkills: ["C++", "Networking"],
  color: "#2D6DB5",
};

export const SKILL_PROTOBUF: EnhancedSkill = {
  id: 71,
  title: "Protobuf",
  icon: "i-lucide-binary",
  proficiency: 0.7,
  category: "Networking",
  relatedSkills: ["C++", "Networking"],
  color: "#4285F4",
};

export const SKILL_CRYPTOGRAPHY: EnhancedSkill = {
  id: 72,
  title: "Cryptography",
  icon: "i-lucide-key-round",
  proficiency: 0.7,
  category: "Security",
  relatedSkills: ["Security", "TLS"],
  color: "#C0392B",
};

export const SKILL_JWT: EnhancedSkill = {
  id: 73,
  title: "JWT",
  icon: "i-logos-jwt-icon",
  proficiency: 0.85,
  category: "Security",
  relatedSkills: ["Security", "NextAuth"],
  color: "#D63AFF",
};

export const SKILL_TLS: EnhancedSkill = {
  id: 74,
  title: "SSL/TLS",
  icon: "i-lucide-lock",
  proficiency: 0.7,
  category: "Security",
  relatedSkills: ["Security", "Cryptography", "Networking"],
  color: "#27AE60",
};

export const SKILL_PKI: EnhancedSkill = {
  id: 75,
  title: "PKI",
  icon: "i-lucide-file-badge",
  proficiency: 0.7,
  category: "Security",
  relatedSkills: ["TLS", "Cryptography"],
  color: "#8E44AD",
};

export const SKILL_BCRYPT: EnhancedSkill = {
  id: 76,
  title: "bcrypt",
  icon: "i-lucide-hash",
  proficiency: 0.7,
  category: "Security",
  relatedSkills: ["Security", "Cryptography"],
  color: "#E67E22",
};

export const SKILL_API_GATEWAY: EnhancedSkill = {
  id: 77,
  title: "API Gateway",
  icon: "i-logos-aws-api-gateway",
  proficiency: 0.85,
  category: "Cloud",
  relatedSkills: ["AWS", "Lambda"],
  color: "#A166FF",
};

export const SKILL_ECS: EnhancedSkill = {
  id: 78,
  title: "ECS",
  icon: "i-logos-aws-ecs",
  proficiency: 0.85,
  category: "Cloud",
  relatedSkills: ["AWS", "Docker"],
  color: "#FF9900",
};

export const SKILL_IAM: EnhancedSkill = {
  id: 79,
  title: "IAM",
  icon: "i-logos-aws-iam",
  proficiency: 0.85,
  category: "Cloud",
  relatedSkills: ["AWS", "Security"],
  color: "#DD344C",
};

export const SKILL_CLOUDFORMATION: EnhancedSkill = {
  id: 80,
  title: "CloudFormation",
  icon: "i-logos-aws-cloudformation",
  proficiency: 0.85,
  category: "Cloud",
  relatedSkills: ["AWS", "Terraform"],
  color: "#E7157B",
};

export const SKILL_CLOUDWATCH: EnhancedSkill = {
  id: 81,
  title: "CloudWatch",
  icon: "i-logos-aws-cloudwatch",
  proficiency: 0.8,
  category: "Cloud",
  relatedSkills: ["AWS"],
  color: "#E7157B",
};

export const SKILL_SNS: EnhancedSkill = {
  id: 82,
  title: "SNS",
  icon: "i-logos-aws-sns",
  proficiency: 0.8,
  category: "Cloud",
  relatedSkills: ["AWS", "SQS"],
  color: "#E7157B",
};

export const SKILL_SQS: EnhancedSkill = {
  id: 83,
  title: "SQS",
  icon: "i-logos-aws-sqs",
  proficiency: 0.8,
  category: "Cloud",
  relatedSkills: ["AWS", "SNS"],
  color: "#E7157B",
};

export const SKILL_ROUTE53: EnhancedSkill = {
  id: 84,
  title: "Route 53",
  icon: "i-logos-aws-route53",
  proficiency: 0.8,
  category: "Cloud",
  relatedSkills: ["AWS", "Networking"],
  color: "#8C4FFF",
};

export const SKILL_CLOUDFRONT: EnhancedSkill = {
  id: 85,
  title: "CloudFront",
  icon: "i-logos-aws-cloudfront",
  proficiency: 0.8,
  category: "Cloud",
  relatedSkills: ["AWS", "S3"],
  color: "#8C4FFF",
};

export const SKILL_VPC: EnhancedSkill = {
  id: 86,
  title: "VPC",
  icon: "i-logos-aws-vpc",
  proficiency: 0.8,
  category: "Cloud",
  relatedSkills: ["AWS", "Networking"],
  color: "#8C4FFF",
};

export const SKILL_ELASTIC_BEANSTALK: EnhancedSkill = {
  id: 87,
  title: "Elastic Beanstalk",
  icon: "i-logos-aws-elastic-beanstalk",
  proficiency: 0.85,
  category: "Cloud",
  relatedSkills: ["AWS", "EC2"],
  color: "#FF9900",
};

export const SKILL_AMPLIFY: EnhancedSkill = {
  id: 88,
  title: "Amplify",
  icon: "i-logos-aws-amplify",
  proficiency: 0.85,
  category: "Cloud",
  relatedSkills: ["AWS", "CI/CD"],
  color: "#FF9900",
};

export const SKILL_NETLIFY: EnhancedSkill = {
  id: 89,
  title: "Netlify",
  icon: { lightIcon: "i-skill-icons-netlify-light", darkIcon: "i-skill-icons-netlify-dark" },
  proficiency: 0.85,
  category: "Cloud",
  relatedSkills: ["CI/CD", "Deployment"],
  color: "#00C7B7",
};

export const SKILL_CLOUDFLARE: EnhancedSkill = {
  id: 90,
  title: "Cloudflare",
  icon: { lightIcon: "i-skill-icons-cloudflare-light", darkIcon: "i-skill-icons-cloudflare-dark" },
  proficiency: 0.8,
  category: "Cloud",
  relatedSkills: ["Networking", "Deployment"],
  color: "#F38020",
};

export const SKILL_TERRAFORM: EnhancedSkill = {
  id: 91,
  title: "Terraform",
  icon: { lightIcon: "i-skill-icons-terraform-light", darkIcon: "i-skill-icons-terraform-dark" },
  proficiency: 0.7,
  category: "DevOps & Tooling",
  relatedSkills: ["AWS", "CloudFormation"],
  color: "#7B42BC",
};

export const SKILL_KUBERNETES: EnhancedSkill = {
  id: 92,
  title: "Kubernetes",
  icon: "i-skill-icons-kubernetes",
  proficiency: 0.6,
  category: "DevOps & Tooling",
  relatedSkills: ["Docker"],
  color: "#326CE5",
};

export const SKILL_ANSIBLE: EnhancedSkill = {
  id: 93,
  title: "Ansible",
  icon: "i-skill-icons-ansible",
  proficiency: 0.6,
  category: "DevOps & Tooling",
  relatedSkills: ["Linux", "SSH"],
  color: "#EE0000",
};

export const SKILL_JENKINS: EnhancedSkill = {
  id: 94,
  title: "Jenkins",
  icon: { lightIcon: "i-skill-icons-jenkins-light", darkIcon: "i-skill-icons-jenkins-dark" },
  proficiency: 0.6,
  category: "DevOps & Tooling",
  relatedSkills: ["CI/CD"],
  color: "#D24939",
};

export const SKILL_GITHUB_ACTIONS: EnhancedSkill = {
  id: 95,
  title: "GitHub Actions",
  icon: { lightIcon: "i-skill-icons-githubactions-light", darkIcon: "i-skill-icons-githubactions-dark" },
  proficiency: 0.85,
  category: "DevOps & Tooling",
  relatedSkills: ["CI/CD", "Git"],
  color: "#2088FF",
};

export const SKILL_CMAKE: EnhancedSkill = {
  id: 96,
  title: "CMake",
  icon: { lightIcon: "i-skill-icons-cmake-light", darkIcon: "i-skill-icons-cmake-dark" },
  proficiency: 0.8,
  category: "DevOps & Tooling",
  relatedSkills: ["C++", "GNU Make"],
  color: "#064F8C",
};

export const SKILL_GNU_MAKE: EnhancedSkill = {
  id: 97,
  title: "GNU Make",
  icon: "i-simple-icons-gnu",
  proficiency: 0.7,
  category: "DevOps & Tooling",
  relatedSkills: ["C", "CMake"],
  color: "#A42E2B",
};

export const SKILL_PM2: EnhancedSkill = {
  id: 98,
  title: "pm2",
  icon: "i-devicon-pm2",
  proficiency: 0.8,
  category: "DevOps & Tooling",
  relatedSkills: ["Node.js", "Self-hosting"],
  color: "#2B037A",
};

export const SKILL_LETSENCRYPT: EnhancedSkill = {
  id: 99,
  title: "Let's Encrypt",
  icon: "i-logos-letsencrypt",
  proficiency: 0.7,
  category: "DevOps & Tooling",
  relatedSkills: ["Nginx", "TLS"],
  color: "#2D3B4E",
};

export const SKILL_VITE: EnhancedSkill = {
  id: 100,
  title: "Vite",
  icon: { lightIcon: "i-skill-icons-vite-light", darkIcon: "i-skill-icons-vite-dark" },
  proficiency: 0.7,
  category: "DevOps & Tooling",
  relatedSkills: ["JavaScript", "Vue"],
  color: "#646CFF",
};

export const SKILL_ESLINT: EnhancedSkill = {
  id: 101,
  title: "ESLint",
  icon: "i-devicon-eslint",
  proficiency: 0.7,
  category: "DevOps & Tooling",
  relatedSkills: ["JavaScript", "TypeScript"],
  color: "#4B32C3",
};

export const SKILL_PRETTIER: EnhancedSkill = {
  id: 102,
  title: "Prettier",
  icon: "i-logos-prettier",
  proficiency: 0.7,
  category: "DevOps & Tooling",
  relatedSkills: ["JavaScript", "TypeScript"],
  color: "#F7B93E",
};

export const SKILL_CLAUDE_API: EnhancedSkill = {
  id: 103,
  title: "Claude API",
  icon: "i-logos-anthropic-icon",
  proficiency: 0.7,
  category: "AI/ML",
  relatedSkills: ["OpenAI API"],
  color: "#D97757",
};

export const SKILL_PYTORCH: EnhancedSkill = {
  id: 104,
  title: "PyTorch",
  icon: { lightIcon: "i-skill-icons-pytorch-light", darkIcon: "i-skill-icons-pytorch-dark" },
  proficiency: 0.6,
  category: "AI/ML",
  relatedSkills: ["Python"],
  color: "#EE4C2C",
};

// Display order of the categories (the rapid-fire round groups its questions in this order).
export const SKILL_CATEGORIES: SkillName[] = [
  "Languages",
  "Frontend & Mobile",
  "Backend & APIs",
  "Data",
  "Systems",
  "Networking",
  "Security",
  "Cloud",
  "DevOps & Tooling",
  "AI/ML",
];

// Export a skills array for easier access, grouped by category
export const SKILLS: EnhancedSkill[] = [
  // Languages
  SKILL_JAVASCRIPT,
  SKILL_TYPESCRIPT,
  SKILL_PYTHON,
  SKILL_JAVA,
  SKILL_CSHARP,
  SKILL_C,
  SKILL_CPP,
  SKILL_KOTLIN,
  SKILL_GO,
  // Frontend & Mobile
  SKILL_HTML,
  SKILL_CSS,
  SKILL_REACT,
  SKILL_VUE,
  SKILL_NEXTJS,
  SKILL_NUXT,
  SKILL_JQUERY,
  SKILL_EJS,
  SKILL_ANDROID,
  SKILL_ZUSTAND,
  SKILL_TAILWIND,
  SKILL_FRAMER_MOTION,
  SKILL_SVELTEKIT,
  SKILL_BOOTSTRAP,
  SKILL_JETPACK_COMPOSE,
  // Backend & APIs
  SKILL_NODEJS,
  SKILL_EXPRESSJS,
  SKILL_WEBSOCKET,
  SKILL_NEXTAUTH,
  SKILL_STRIPE,
  SKILL_BUN,
  SKILL_FASTAPI,
  SKILL_DJANGO,
  SKILL_SOCKETIO,
  SKILL_ZOD,
  SKILL_MULTER,
  // Data
  SKILL_MONGODB,
  SKILL_MYSQL,
  SKILL_POSTGRESQL,
  SKILL_FIREBASE,
  SKILL_PRISMA,
  SKILL_DYNAMODB,
  SKILL_RDS,
  SKILL_REDIS,
  SKILL_MONGOOSE,
  SKILL_SEQUELIZE,
  // Systems
  SKILL_LINUX,
  SKILL_BASH,
  SKILL_OS,
  SKILL_RASPBERRY_PI,
  SKILL_VIRTUALIZATION,
  SKILL_SYSTEMD,
  SKILL_UFW,
  SKILL_SAMBA,
  // Networking
  SKILL_NETWORKING,
  SKILL_LIBSSH,
  SKILL_SSH,
  SKILL_SFTP,
  SKILL_WIRESHARK,
  SKILL_BOOST_ASIO,
  SKILL_PROTOBUF,
  // Security
  SKILL_SECURITY,
  SKILL_CRYPTOGRAPHY,
  SKILL_JWT,
  SKILL_TLS,
  SKILL_PKI,
  SKILL_BCRYPT,
  // Cloud
  SKILL_EC2,
  SKILL_LAMBDA,
  SKILL_S3,
  SKILL_AWS,
  SKILL_VERCEL,
  SKILL_API_GATEWAY,
  SKILL_ECS,
  SKILL_IAM,
  SKILL_CLOUDFORMATION,
  SKILL_CLOUDWATCH,
  SKILL_SNS,
  SKILL_SQS,
  SKILL_ROUTE53,
  SKILL_CLOUDFRONT,
  SKILL_VPC,
  SKILL_ELASTIC_BEANSTALK,
  SKILL_AMPLIFY,
  SKILL_NETLIFY,
  SKILL_CLOUDFLARE,
  // DevOps & Tooling
  SKILL_GIT,
  SKILL_DOCKER,
  SKILL_SELFHOSTING,
  SKILL_CICD,
  SKILL_NGINX,
  SKILL_TERRAFORM,
  SKILL_KUBERNETES,
  SKILL_ANSIBLE,
  SKILL_JENKINS,
  SKILL_GITHUB_ACTIONS,
  SKILL_CMAKE,
  SKILL_GNU_MAKE,
  SKILL_PM2,
  SKILL_LETSENCRYPT,
  SKILL_VITE,
  SKILL_ESLINT,
  SKILL_PRETTIER,
  // AI/ML
  SKILL_OPENAI_API,
  SKILL_CLAUDE_API,
  SKILL_PYTORCH,
];

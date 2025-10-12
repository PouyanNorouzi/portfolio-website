export const SKILL_JAVASCRIPT: EnhancedSkill = {
  id: 1,
  title: "JavaScript",
  icon: "i-skill-icons-javascript",
  proficiency: 0.9,
  category: "Software Development",
  relatedSkills: ["TypeScript", "Node.js", "React", "Vue"],
  color: "#F7DF1E",
};

export const SKILL_TYPESCRIPT: EnhancedSkill = {
  id: 2,
  title: "TypeScript",
  icon: "i-skill-icons-typescript",
  proficiency: 0.9,
  category: "Software Development",
  relatedSkills: ["JavaScript", "Node.js", "React", "Vue"],
  color: "#3178C6",
};

export const SKILL_PYTHON: EnhancedSkill = {
  id: 3,
  title: "Python",
  icon: { lightIcon: "i-skill-icons-python-light", darkIcon: "i-skill-icons-python-dark" },
  proficiency: 0.95,
  category: "Software Development",
  relatedSkills: ["Django", "Flask"],
  color: "#3776AB",
};

export const SKILL_JAVA: EnhancedSkill = {
  id: 4,
  title: "Java",
  icon: { lightIcon: "i-skill-icons-java-light", darkIcon: "i-skill-icons-java-dark" },
  proficiency: 0.9,
  category: "Software Development",
  color: "#ED8B00",
};

export const SKILL_CSHARP: EnhancedSkill = {
  id: 5,
  title: "C#",
  icon: "i-skill-icons-cs",
  proficiency: 0.6,
  category: "Software Development",
  relatedSkills: ["Java", ".NET"],
  color: "#239120",
};

export const SKILL_C: EnhancedSkill = {
  id: 6,
  title: "C",
  icon: "i-skill-icons-c",
  proficiency: 0.99,
  category: "Software Development",
  relatedSkills: [],
  color: "#A8B9CC",
};

export const SKILL_KOTLIN: EnhancedSkill = {
  id: 7,
  title: "Kotlin",
  icon: { lightIcon: "i-skill-icons-kotlin-light", darkIcon: "i-skill-icons-kotlin-dark" },
  proficiency: 0.7,
  category: "Software Development",
  relatedSkills: ["Java", "Android"],
  color: "#7F52FF",
};

// Web Technologies
export const SKILL_HTML: EnhancedSkill = {
  id: 8,
  title: "HTML",
  icon: "i-skill-icons-html",
  proficiency: 1,
  category: "Web Technologies",
  relatedSkills: ["CSS", "JavaScript"],
  color: "#E34F26",
};

export const SKILL_CSS: EnhancedSkill = {
  id: 9,
  title: "CSS",
  icon: "i-skill-icons-css",
  proficiency: 0.75,
  category: "Web Technologies",
  relatedSkills: ["HTML"],
  color: "#1572B6",
};

export const SKILL_REACT: EnhancedSkill = {
  id: 10,
  title: "React",
  icon: { lightIcon: "i-skill-icons-react-light", darkIcon: "i-skill-icons-react-dark" },
  proficiency: 0.7,
  category: "Web Technologies",
  relatedSkills: ["JavaScript", "Next.js"],
  color: "#61DAFB",
};

export const SKILL_VUE: EnhancedSkill = {
  id: 11,
  title: "Vue",
  icon: { lightIcon: "i-skill-icons-vuejs-light", darkIcon: "i-skill-icons-vuejs-dark" },
  proficiency: 0.85,
  category: "Web Technologies",
  relatedSkills: ["JavaScript", "Nuxt"],
  color: "#4FC08D",
};

export const SKILL_NEXTJS: EnhancedSkill = {
  id: 12,
  title: "Next.js",
  icon: { lightIcon: "i-skill-icons-nextjs-light", darkIcon: "i-skill-icons-nextjs-dark" },
  proficiency: 0.75,
  category: "Web Technologies",
  relatedSkills: ["React", "JavaScript"],
  color: "#000000",
};

export const SKILL_NUXT: EnhancedSkill = {
  id: 13,
  title: "Nuxt",
  icon: { lightIcon: "i-skill-icons-nuxtjs-light", darkIcon: "i-skill-icons-nuxtjs-dark" },
  proficiency: 0.85,
  category: "Web Technologies",
  relatedSkills: ["Vue", "JavaScript"],
  color: "#00DC82",
};

export const SKILL_JQUERY: EnhancedSkill = {
  id: 14,
  title: "jQuery",
  icon: "i-skill-icons-jquery",
  proficiency: 0.8,
  category: "Web Technologies",
  relatedSkills: ["JavaScript"],
  color: "#0769AD",
};

export const SKILL_NODEJS: EnhancedSkill = {
  id: 15,
  title: "Node.js",
  icon: { lightIcon: "i-skill-icons-nodejs-light", darkIcon: "i-skill-icons-nodejs-dark" },
  proficiency: 0.9,
  category: "Web Technologies",
  relatedSkills: ["JavaScript", "Express.js"],
  color: "#339933",
};

export const SKILL_EXPRESSJS: EnhancedSkill = {
  id: 16,
  title: "Express.js",
  icon: { lightIcon: "i-skill-icons-expressjs-light", darkIcon: "i-skill-icons-expressjs-dark" },
  proficiency: 0.9,
  category: "Web Technologies",
  relatedSkills: ["Node.js", "JavaScript"],
  color: "#000000",
};

export const SKILL_EJS: EnhancedSkill = {
  id: 17,
  title: "EJS",
  icon: "i-simple-icons-ejs",
  proficiency: 0.6,
  category: "Web Technologies",
  relatedSkills: ["HTML", "JavaScript", "Node.js"],
  color: "#A91E50",
};

// Systems
export const SKILL_LINUX: EnhancedSkill = {
  id: 18,
  title: "Linux",
  icon: { lightIcon: "i-skill-icons-linux-light", darkIcon: "i-skill-icons-linux-dark" },
  proficiency: 0.7,
  category: "Systems",
  relatedSkills: ["Bash", "Raspberry Pi"],
  color: "#FCC624",
};

export const SKILL_BASH: EnhancedSkill = {
  id: 19,
  title: "Bash",
  icon: { lightIcon: "i-skill-icons-bash-light", darkIcon: "i-skill-icons-bash-dark" },
  proficiency: 0.65,
  category: "Systems",
  relatedSkills: ["Linux"],
  color: "#4EAA25",
};

export const SKILL_OS: EnhancedSkill = {
  id: 20,
  title: "Operating Systems",
  icon: "i-lucide-laptop",
  proficiency: 0.6,
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
  proficiency: 0.8,
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
  category: "Systems",
  relatedSkills: ["Linux", "EC2"],
  color: "#0078D7",
};

export const SKILL_SECURITY: EnhancedSkill = {
  id: 24,
  title: "System Security",
  icon: "i-lucide-shield",
  proficiency: 0.7,
  category: "Systems",
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
  category: "Systems",
  relatedSkills: ["Kotlin", "Java"],
  color: "#3DDC84",
};

// Data
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
  proficiency: 0.6,
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

// Cloud & DevOps
export const SKILL_EC2: EnhancedSkill = {
  id: 33,
  title: "EC2",
  icon: "i-logos-aws-ec2",
  proficiency: 0.75,
  category: "Cloud & DevOps",
  relatedSkills: ["AWS", "Linux", "Self-hosting"],
  color: "#FF9900",
};

export const SKILL_LAMBDA: EnhancedSkill = {
  id: 34,
  title: "Lambda",
  icon: "i-logos-aws-lambda",
  proficiency: 0.5,
  category: "Cloud & DevOps",
  relatedSkills: ["AWS", "JavaScript", "Node.js"],
  color: "#FF9900",
};

export const SKILL_S3: EnhancedSkill = {
  id: 35,
  title: "S3",
  icon: "i-logos-aws-s3",
  proficiency: 0.8,
  category: "Cloud & DevOps",
  relatedSkills: ["AWS"],
  color: "#569A31",
};

export const SKILL_GIT: EnhancedSkill = {
  id: 36,
  title: "Git",
  icon: "i-skill-icons-git",
  proficiency: 0.9,
  category: "Cloud & DevOps",
  relatedSkills: ["CI/CD"],
  color: "#F05032",
};

export const SKILL_DOCKER: EnhancedSkill = {
  id: 37,
  title: "Docker",
  icon: "i-skill-icons-docker",
  proficiency: 0.75,
  category: "Cloud & DevOps",
  relatedSkills: ["Virtualization", "CI/CD"],
  color: "#2496ED",
};

export const SKILL_SELFHOSTING: EnhancedSkill = {
  id: 38,
  title: "Self-hosting",
  icon: "i-lucide-server",
  proficiency: 0.8,
  category: "Cloud & DevOps",
  relatedSkills: ["Raspberry Pi", "Linux", "Docker"],
  color: "#7B68EE",
};

export const SKILL_CICD: EnhancedSkill = {
  id: 39,
  title: "CI/CD",
  icon: "i-lucide-git-branch",
  proficiency: 0.65,
  category: "Cloud & DevOps",
  relatedSkills: ["Git", "Docker"],
  color: "#4078C0",
};

export const SKILL_NGINX: EnhancedSkill = {
  id: 40,
  title: "Nginx",
  icon: "i-skill-icons-nginx",
  proficiency: 0.7,
  category: "Cloud & DevOps",
  relatedSkills: ["Self-hosting", "Linux"],
  color: "#009639",
};

export const SKILL_OPENAI_API: EnhancedSkill = {
  id: 41,
  title: "OpenAI API",
  icon: "i-simple-icons-openai",
  proficiency: 0.7,
  category: "Web Technologies",
  relatedSkills: ["Nodejs", "Python"],
  color: "#412991",
};

export const SKILL_LIBSSH: EnhancedSkill = {
  id: 42,
  title: "libssh",
  icon: "i-lucide-key",
  proficiency: 0.7,
  category: "Systems",
  relatedSkills: ["C", "SSH", "SFTP", "Networking"],
  color: "#3E64A0",
};

export const SKILL_SSH: EnhancedSkill = {
  id: 43,
  title: "SSH",
  icon: "i-lucide-terminal",
  proficiency: 0.7,
  category: "Systems",
  relatedSkills: ["C", "SSH", "libssh", "Networking"],
  color: "#232F3E",
};

export const SKILL_SFTP: EnhancedSkill = {
  id: 44,
  title: "SFTP",
  icon: "i-lucide-cloud-upload",
  proficiency: 0.7,
  category: "Systems",
  relatedSkills: ["C", "SSH", "libssh", "Networking"],
  color: "#00AEF0",
};

export const SKILL_AWS: EnhancedSkill = {
  id: 45,
  title: "AWS",
  icon: { lightIcon: "i-skill-icons-aws-light", darkIcon: "i-skill-icons-aws-dark" },
  proficiency: 0.7,
  category: "Cloud & DevOps",
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
  proficiency: 0.75,
  category: "Web Technologies",
  relatedSkills: ["JavaScript", "Node.js", "Real-time Communication"],
  color: "#4353A4",
};

export const SKILL_ZUSTAND: EnhancedSkill = {
  id: 48,
  title: "Zustand",
  icon: "i-devicon-zustand",
  proficiency: 0.75,
  category: "Web Technologies",
  relatedSkills: ["React", "State Management", "JavaScript"],
  color: "#443E38",
};

export const SKILL_NEXTAUTH: EnhancedSkill = {
  id: 49,
  title: "NextAuth",
  icon: "i-lucide-shield-check",
  proficiency: 0.8,
  category: "Web Technologies",
  relatedSkills: ["Next.js", "Authentication", "OAuth"],
  color: "#2F855A",
};

export const SKILL_STRIPE: EnhancedSkill = {
  id: 50,
  title: "Stripe",
  icon: "i-simple-icons-stripe",
  proficiency: 0.7,
  category: "Web Technologies",
  relatedSkills: ["Payments", "Node.js", "JavaScript"],
  color: "#635BFF",
};

export const SKILL_TAILWIND: EnhancedSkill = {
  id: 51,
  title: "Tailwind CSS",
  icon: { lightIcon: "i-skill-icons-tailwindcss-light", darkIcon: "i-skill-icons-tailwindcss-dark" },
  proficiency: 0.85,
  category: "Web Technologies",
  relatedSkills: ["CSS", "HTML", "Web Design"],
  color: "#06B6D4",
};

// Export a skills array for easier access
export const SKILLS: EnhancedSkill[] = [
  SKILL_JAVASCRIPT,
  SKILL_TYPESCRIPT,
  SKILL_PYTHON,
  SKILL_JAVA,
  SKILL_CSHARP,
  SKILL_C,
  SKILL_KOTLIN,
  SKILL_HTML,
  SKILL_CSS,
  SKILL_REACT,
  SKILL_VUE,
  SKILL_NEXTJS,
  SKILL_NUXT,
  SKILL_JQUERY,
  SKILL_NODEJS,
  SKILL_EXPRESSJS,
  SKILL_EJS,
  SKILL_LINUX,
  SKILL_BASH,
  SKILL_OS,
  SKILL_RASPBERRY_PI,
  SKILL_VIRTUALIZATION,
  SKILL_NETWORKING,
  SKILL_SECURITY,
  SKILL_ANDROID,
  SKILL_MONGODB,
  SKILL_MYSQL,
  SKILL_POSTGRESQL,
  SKILL_FIREBASE,
  SKILL_PRISMA,
  SKILL_DYNAMODB,
  SKILL_RDS,
  SKILL_EC2,
  SKILL_LAMBDA,
  SKILL_S3,
  SKILL_GIT,
  SKILL_DOCKER,
  SKILL_SELFHOSTING,
  SKILL_CICD,
  SKILL_NGINX,
  SKILL_REDIS,
  SKILL_WEBSOCKET,
  SKILL_ZUSTAND,
  SKILL_NEXTAUTH,
  SKILL_STRIPE,
  SKILL_TAILWIND,
  SKILL_OPENAI_API,
  SKILL_LIBSSH,
  SKILL_SSH,
  SKILL_SFTP,
  SKILL_AWS,
];

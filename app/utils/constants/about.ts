// The About page is a polygraph examination, and this file is its whole script.
//
// - Add a question: add `{ question, answer }` to a round's `exchanges`.
// - Put a skill under the needle: add `{ skill: SKILL_X }` to an exchange's `claims`. The verdict
//   comes from the skill's `proficiency` in skills.ts (see VERDICT_THRESHOLDS in
//   utils/polygraph.ts); set `verdict` on the claim to override it.
// - Rapid fire: add `{ skill: SKILL_X }`, optionally with an `answer`.
// - Timestamps are generated from POLYGRAPH_START_TIME, so lines can be moved freely.
import {
  PROJECT_CONSCIOUS_CONNECTIONS,
  PROJECT_FAASIFY,
  PROJECT_FLUX,
  PROJECT_POUDB,
} from "./projects";
import {
  SKILL_ANDROID,
  SKILL_AWS,
  SKILL_BASH,
  SKILL_BUN,
  SKILL_C,
  SKILL_CICD,
  SKILL_CPP,
  SKILL_CSHARP,
  SKILL_CSS,
  SKILL_DOCKER,
  SKILL_DYNAMODB,
  SKILL_EC2,
  SKILL_EJS,
  SKILL_EXPRESSJS,
  SKILL_FIREBASE,
  SKILL_FRAMER_MOTION,
  SKILL_GIT,
  SKILL_HTML,
  SKILL_JAVA,
  SKILL_JAVASCRIPT,
  SKILL_JQUERY,
  SKILL_KOTLIN,
  SKILL_LAMBDA,
  SKILL_LIBSSH,
  SKILL_LINUX,
  SKILL_MONGODB,
  SKILL_MYSQL,
  SKILL_NETWORKING,
  SKILL_NEXTAUTH,
  SKILL_NEXTJS,
  SKILL_NGINX,
  SKILL_NODEJS,
  SKILL_NUXT,
  SKILL_OPENAI_API,
  SKILL_OS,
  SKILL_POSTGRESQL,
  SKILL_PRISMA,
  SKILL_PYTHON,
  SKILL_RASPBERRY_PI,
  SKILL_RDS,
  SKILL_REACT,
  SKILL_REDIS,
  SKILL_S3,
  SKILL_SECURITY,
  SKILL_SELFHOSTING,
  SKILL_SFTP,
  SKILL_SSH,
  SKILL_STRIPE,
  SKILL_SVELTEKIT,
  SKILL_TAILWIND,
  SKILL_TYPESCRIPT,
  SKILL_VERCEL,
  SKILL_VIRTUALIZATION,
  SKILL_VUE,
  SKILL_WEBSOCKET,
  SKILL_ZUSTAND,
} from "./skills";

export const POLYGRAPH_START_TIME = "14:02";

export const POLYGRAPH_EXAMINER = "Agent C.";

export const POLYGRAPH_ROUNDS: PolygraphRound[] = [
  {
    // Control questions: no claims, so the needles settle.
    kind: "exchanges",
    title: "Calibration",
    exchanges: [
      { question: "Answer yes or no. Is your name Pouyan Norouzi?", answer: "Yes." },
      {
        question: "What do you do?",
        answer:
          "I build software across cloud, web and systems. I graduated from BCIT in December 2025.",
      },
    ],
  },
  {
    kind: "exchanges",
    title: "Round 1 · Languages",
    exchanges: [
      {
        question: "Which language do you reach for first?",
        answer: "TypeScript for anything with a UI. Python when I need an answer by lunch.",
        claims: [{ skill: SKILL_TYPESCRIPT }, { skill: SKILL_PYTHON }],
      },
      {
        question: "The file says you wrote a database in C. Why?",
        answer:
          "Nobody asked me to. I wanted to know what a database actually does. It speaks its own protocol over TCP and FLUX runs on it.",
        claims: [{ skill: SKILL_C }],
        exhibit: PROJECT_POUDB,
      },
    ],
  },
  {
    kind: "exchanges",
    title: "Round 2 · Web & Data",
    exchanges: [
      {
        question: "What is this site built with?",
        answer: "Nuxt and Vue. You're standing in it.",
        claims: [{ skill: SKILL_NUXT }, { skill: SKILL_VUE }],
      },
      {
        question: "And on the server?",
        answer: "Node and Express when it's my call. SvelteKit for FLUX.",
        claims: [{ skill: SKILL_NODEJS }, { skill: SKILL_EXPRESSJS }, { skill: SKILL_SVELTEKIT }],
        exhibit: PROJECT_FLUX,
      },
      {
        question: "The file says you turn hostile when someone suggests Postgres.",
        answer:
          "I use Postgres. Through Prisma, on Conscious Connections. I just also wrote my own.",
        claims: [{ skill: SKILL_POSTGRESQL }, { skill: SKILL_PRISMA }],
        exhibit: PROJECT_CONSCIOUS_CONNECTIONS,
      },
      {
        question: "Anything faster?",
        answer: "Redis for the hot path. Mongo on older projects.",
        claims: [{ skill: SKILL_REDIS }, { skill: SKILL_MONGODB }],
      },
    ],
  },
  {
    kind: "exchanges",
    title: "Round 3 · Cloud & Systems",
    exchanges: [
      {
        question: "Why cloud?",
        answer:
          "I studied it at BCIT, then joined an 11-person team building FaaSify, a serverless storefront on AWS. Lambda for the backend, DynamoDB for the data.",
        claims: [{ skill: SKILL_AWS }, { skill: SKILL_LAMBDA }, { skill: SKILL_DYNAMODB }],
        exhibit: PROJECT_FAASIFY,
      },
      {
        question: "And when it isn't someone else's server?",
        answer: "A Raspberry Pi on my desk running Linux. FLUX and its database live there.",
        claims: [
          { skill: SKILL_RASPBERRY_PI },
          { skill: SKILL_LINUX },
          { skill: SKILL_SELFHOSTING },
        ],
      },
    ],
  },
  {
    kind: "rapid-fire",
    title: "Rapid Fire",
    intro: "Rapid fire. Short answers.",
    items: [
      { skill: SKILL_JAVASCRIPT },
      { skill: SKILL_JAVA },
      { skill: SKILL_GIT },
      { skill: SKILL_HTML },
      { skill: SKILL_TAILWIND },
      { skill: SKILL_KOTLIN },
      { skill: SKILL_CSS },
      { skill: SKILL_REACT },
      { skill: SKILL_NEXTJS },
      { skill: SKILL_JQUERY },
      { skill: SKILL_WEBSOCKET },
      { skill: SKILL_STRIPE },
      { skill: SKILL_ZUSTAND },
      { skill: SKILL_NEXTAUTH },
      { skill: SKILL_BUN },
      { skill: SKILL_FRAMER_MOTION },
      { skill: SKILL_OPENAI_API },
      { skill: SKILL_S3 },
      { skill: SKILL_EC2 },
      { skill: SKILL_DOCKER },
      { skill: SKILL_NGINX },
      { skill: SKILL_VERCEL },
      { skill: SKILL_RDS },
      { skill: SKILL_MYSQL },
      { skill: SKILL_SSH },
      { skill: SKILL_SFTP },
      { skill: SKILL_LIBSSH },
      { skill: SKILL_SECURITY },
      { skill: SKILL_CPP, answer: "Learning where the sharp edges are." },
      { skill: SKILL_CSHARP },
      { skill: SKILL_EJS },
      { skill: SKILL_BASH },
      { skill: SKILL_ANDROID },
      { skill: SKILL_FIREBASE },
      { skill: SKILL_CICD },
      { skill: SKILL_OS },
      { skill: SKILL_NETWORKING },
      { skill: SKILL_VIRTUALIZATION },
    ],
  },
  {
    kind: "exchanges",
    title: "Closing",
    exchanges: [
      {
        question: "Can you center a div on the first try?",
        answer: "Always.",
        claims: [{ label: "Centering a div", verdict: "DECEPTIVE" }],
      },
      {
        question: "Anything else for the record?",
        answer: "I'm looking for work.",
        highlight: true,
      },
    ],
  },
];

export const POLYGRAPH_CONCLUSION = "No deception indicated. Mostly.";

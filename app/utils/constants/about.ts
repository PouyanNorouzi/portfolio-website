// The About page is a polygraph examination, and this file is its whole script.
//
// - Add a question: add `{ question, answer }` to a round's `exchanges`.
// - Put a skill under the needle: add `{ skill: SKILL_X }` to an exchange's `claims`. The verdict
//   comes from the skill's `proficiency` in skills.ts (see VERDICT_THRESHOLDS in
//   utils/polygraph.ts); set `verdict` on the claim to override it.
// - Rapid fire: add `{ skill: SKILL_X }`, optionally with an `answer`. Items are grouped under
//   their skill's category and "Yes." answers are listed before "Some." ones (see RapidFire.vue).
// - Timestamps are generated from POLYGRAPH_START_TIME, so lines can be moved freely.
import {
  PROJECT_CONSCIOUS_CONNECTIONS,
  PROJECT_FAASIFY,
  PROJECT_FLUX,
  PROJECT_POUDB,
  PROJECT_TDP_GAMES,
} from "./projects";
import {
  SKILL_AWS,
  SKILL_BASH,
  SKILL_BOOST_ASIO,
  SKILL_BUN,
  SKILL_C,
  SKILL_CLAUDE_API,
  SKILL_CPP,
  SKILL_CRYPTOGRAPHY,
  SKILL_CSHARP,
  SKILL_CSS,
  SKILL_DOCKER,
  SKILL_DYNAMODB,
  SKILL_EC2,
  SKILL_EXPRESSJS,
  SKILL_FASTAPI,
  SKILL_GIT,
  SKILL_GITHUB_ACTIONS,
  SKILL_GO,
  SKILL_HTML,
  SKILL_JAVA,
  SKILL_JAVASCRIPT,
  SKILL_JQUERY,
  SKILL_KOTLIN,
  SKILL_KUBERNETES,
  SKILL_LAMBDA,
  SKILL_LINUX,
  SKILL_MONGODB,
  SKILL_MYSQL,
  SKILL_NETWORKING,
  SKILL_NEXTJS,
  SKILL_NGINX,
  SKILL_NODEJS,
  SKILL_NUXT,
  SKILL_OPENAI_API,
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
  SKILL_SSH,
  SKILL_STRIPE,
  SKILL_SVELTEKIT,
  SKILL_SYSTEMD,
  SKILL_TAILWIND,
  SKILL_TERRAFORM,
  SKILL_TYPESCRIPT,
  SKILL_VUE,
  SKILL_WEBSOCKET,
  SKILL_WIRESHARK,
} from "./skills";

export const POLYGRAPH_START_TIME = "14:02";

export const POLYGRAPH_EXAMINER = "Agent C.";

export const POLYGRAPH_ROUNDS: PolygraphRound[] = [
  {
    // Control questions: no claims, so the needles settle.
    kind: "exchanges",
    title: "Calibration",
    exchanges: [
      {
        question: "Answer yes or no. Is your name Pouyan Norouzi?",
        answer: "No.",
        claims: [{ hidden: true, verdict: "DECEPTIVE" }],
      },
      {
        question: "My polygraph machine says you are lying.",
        answer: "Yeah my name is Pouyan I was just testing you.",
      },
      {
        question: "What do you do?",
        answer: "I build software. I graduated from BCIT in December 2025.",
      },
    ],
  },
  {
    kind: "exchanges",
    title: "Round 1 · Languages",
    exchanges: [
      {
        question: "Which language do you reach for first?",
        answer: "Python when I like having a life. C if I don't. Typescript on web.",
        claims: [{ skill: SKILL_PYTHON }, { skill: SKILL_C }, { skill: SKILL_TYPESCRIPT }],
      },
      {
        question: "Why did you do it?",
        answer: "Do what?",
        claims: [{ verdict: "INCONCLUSIVE", hidden: true }],
      },
      {
        question: "The file says you wrote a database in C. Why did you do it?",
        answer: "Because I could.",
        claims: [{ skill: SKILL_C }],
        exhibit: PROJECT_POUDB,
      },
      {
        question: "Did you ever think about whether you should?",
        answer: "No.",
        claims: [{ verdict: "DECEPTIVE", hidden: true }],
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
        answer: "Node and Express most of the time. SvelteKit for FLUX.",
        claims: [{ skill: SKILL_NODEJS }, { skill: SKILL_EXPRESSJS }, { skill: SKILL_SVELTEKIT }],
        exhibit: PROJECT_FLUX,
      },
      {
        question: "The file says you turn hostile when someone suggests Postgres.",
        answer:
          "I have used Postgres through Prisma, on Conscious Connections. I just also wrote my own. I don't know what your file could be referring to.",
        claims: [{ skill: SKILL_PRISMA }, { skill: SKILL_POSTGRESQL, verdict: "DECEPTIVE" }],
        exhibit: PROJECT_CONSCIOUS_CONNECTIONS,
      },
    ],
  },
  {
    kind: "exchanges",
    title: "Round 3 · Cloud & Systems",
    exchanges: [
      {
        question: "What did you study at BCIT?",
        answer: "A little bit of everything computer science. My specialty was in Cloud Computing.",
      },
      {
        question: "Do you have any interesting projects from that time?",
        answer:
          "Yes, joined an 11-person team building FaaSify, a serverless storefront on AWS. Lambda for the backend, DynamoDB for the data.",
        claims: [{ skill: SKILL_AWS }, { skill: SKILL_LAMBDA }, { skill: SKILL_DYNAMODB }],
        exhibit: PROJECT_FAASIFY,
      },
      {
        question: "Any other interesting cloud projects?",
        answer:
          "TDP Games, a real-time multiplayer platform on AWS. Accounts, lobbies, invites, and a lot of WebSocket messages. Redis holds the game state, RDS holds everything that has to survive a restart.",
        claims: [{ skill: SKILL_WEBSOCKET }, { skill: SKILL_REDIS }, { skill: SKILL_RDS }],
        exhibit: PROJECT_TDP_GAMES,
      },
      {
        question: "And when it isn't someone else's server?",
        answer:
          "A Raspberry Pi near my router running Raspberry Pi OS. FLUX and its database live there right now.",
        claims: [
          { skill: SKILL_RASPBERRY_PI },
          { skill: SKILL_LINUX },
          { skill: SKILL_SELFHOSTING },
        ],
        exhibit: PROJECT_FLUX,
      },
    ],
  },
  {
    kind: "rapid-fire",
    title: "Rapid Fire",
    intro: "Rapid fire. Short answers.",
    items: [
      // Languages
      { skill: SKILL_JAVASCRIPT },
      { skill: SKILL_JAVA },
      { skill: SKILL_GO },
      { skill: SKILL_KOTLIN },
      { skill: SKILL_CPP, answer: "Learning right now", verdict: "TRUTHFUL" },
      { skill: SKILL_CSHARP },
      // Frontend & Mobile
      { skill: SKILL_HTML },
      { skill: SKILL_CSS },
      { skill: SKILL_TAILWIND },
      { skill: SKILL_REACT },
      { skill: SKILL_NEXTJS },
      { skill: SKILL_JQUERY },
      // Backend & APIs
      { skill: SKILL_WEBSOCKET },
      { skill: SKILL_STRIPE },
      { skill: SKILL_BUN },
      { skill: SKILL_FASTAPI },
      // Data
      { skill: SKILL_MYSQL },
      { skill: SKILL_MONGODB },
      // Systems
      { skill: SKILL_BASH },
      { skill: SKILL_SYSTEMD },
      // Networking
      { skill: SKILL_SSH },
      { skill: SKILL_WIRESHARK },
      { skill: SKILL_NETWORKING },
      { skill: SKILL_BOOST_ASIO },
      // Security
      { skill: SKILL_SECURITY },
      { skill: SKILL_CRYPTOGRAPHY },
      // Cloud
      { skill: SKILL_S3 },
      { skill: SKILL_EC2 },
      // DevOps & Tooling
      { skill: SKILL_GIT },
      { skill: SKILL_DOCKER },
      { skill: SKILL_NGINX },
      { skill: SKILL_GITHUB_ACTIONS },
      { skill: SKILL_TERRAFORM },
      { skill: SKILL_KUBERNETES },
      // AI/ML
      { skill: SKILL_OPENAI_API },
      { skill: SKILL_CLAUDE_API },
    ],
  },
  {
    kind: "exchanges",
    title: "Closing",
    exchanges: [
      // The subject gets a turn. `askedBy: "SUBJECT"` flips who asks and who answers, and
      // `redacted` blacks the answer out until it is declassified.
      {
        askedBy: "SUBJECT",
        question: "Can I ask you a question?",
        answer: "You just did. Go on.",
      },
      {
        askedBy: "SUBJECT",
        question: "Why are you doing all this? Why am I being interviewed at all?",
        answer: "Because I thought it would look cool on your website.",
        redacted: true,
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

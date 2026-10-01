import { SKILL_AWS, SKILL_C, SKILL_CPP, SKILL_LINUX, SKILL_NUXT, SKILL_TYPESCRIPT } from "./skills";
import { PROJECT_CONSCIOUS_CONNECTIONS, PROJECT_FAASIFY, PROJECT_FLUX } from "./projects";
import {
  EDUCATION_BCIT,
  EXPERIENCE_BEST_BUY,
  EXPERIENCE_LONDON_DRUGS,
  formatShortMonth,
} from "./career";

export const CASE_FILE_ID = "PN-0013";

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];
const pad = (n: number) => String(n).padStart(2, "0");

export const CASE_FILE_NUMBER = `CASE FILE NO. ${CASE_FILE_ID}`;

export const CASE_FILE_PATH = `/case-files/${CASE_FILE_ID}`;

export function formatCaseFileDates(date: Date, utc = false) {
  const year = utc ? date.getUTCFullYear() : date.getFullYear();
  const month = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
  const day = utc ? date.getUTCDate() : date.getDate();
  const monthName = MONTHS[month - 1];
  return {
    report: `${monthName} ${day}, ${year}`,
    stamp: `${monthName} ${day} ${year}`,
    barcode: `${CASE_FILE_ID}-${year}-${pad(month)}${pad(day)}`,
  };
}

export const CASE_FILE_SECTIONS: CaseFileSection[] = [
  { id: "s01", number: "01", title: "Agent's Summary", tocLabel: "Summary" },
  { id: "s02", number: "02", title: "Intercepted Transmissions", tocLabel: "Transmissions" },
  { id: "s03", number: "03", title: "Observed Skillset", tocLabel: "Skillset" },
  { id: "s04", number: "04", title: "Movement Log", tocLabel: "Movement" },
  { id: "s05", number: "05", title: "Field Operations on Record", tocLabel: "Operations" },
  { id: "s06", number: "06", title: "Behavioral Notes", tocLabel: "Behavior" },
  { id: "s07", number: "07", title: "Agent's Assessment", tocLabel: "Assessment" },
  { id: "s08", number: "08", title: "How to Make Contact", tocLabel: "Contact" },
];

// The boot screen that plays over the home page on the first visit.
export const CASE_FILE_BOOT_SCRIPT: CaseFileTerminalLine[] = [
  { kind: "command", text: "ssh pouyan@field-office-bc" },
  { kind: "output", text: "Connection established." },
  { kind: "command", text: `cat ${CASE_FILE_PATH}` },
  { kind: "error", text: "Permission denied: this file is classified." },
  { kind: "command", text: `sudo cat ${CASE_FILE_PATH}` },
  { kind: "success", text: "ACCESS GRANTED. Loading file..." },
  { kind: "command", text: "rm -rf embarrassing_stuff/" },
];

export const CASE_FILE_FACTS: CaseFileFact[] = [
  { label: "KNOWN ALIASES", value: "PouyanNorouzi (GitHub)" },
  { label: "LAST KNOWN LOCATION", value: "Coquitlam, BC" },
  { label: "OCCUPATION (COVER)", value: "TECH Specialist @ London Drugs" },
  { label: "TRAINING", value: "BCIT, Computer Systems Diploma" },
];

export const CASE_FILE_STICKY_NOTE = "Hire this guy. Seriously. -C.";

export const CASE_FILE_ADDRESS: CaseFileRedactedLine[] = [
  { hidden: "1234 Classified Avenue", shown: "nice" },
  { hidden: "Coquitlam, BC", shown: "try" },
];

export const CASE_FILE_THREAT_LEVEL = "Minimal, unless you suggest he just use Postgres";

export const CASE_FILE_SUMMARY_NOTE = "the database. ask him about it. -C.";

export const CASE_FILE_ASSESSMENT =
  "Subject is self-directed, curious about how things work underneath, and willing to build the hard version to find out. Recommend further contact.";

export const CASE_FILE_PHONE: CaseFileRedactedLine[] = [
  { hidden: "+1 (604) 555-0123", shown: "on request" },
];

export const CASE_FILE_NOT_FOUND: CaseFileErrorCopy = {
  banner: "RECORD EXPUNGED",
  title: "FILE NOT FOUND",
  stamp: "EXPUNGED",
  lead: { pre: "This file was either never opened, or someone made sure it doesn't exist." },
  note: { pre: "Last known custodian: ", redacted: 'the intern who "cleaned up" the archive' },
};

export const CASE_FILE_FAILURE: CaseFileErrorCopy = {
  banner: "SYSTEM FAILURE",
  title: "ACCESS ERROR",
  stamp: "DENIED",
  lead: {
    pre: "The archive failed to retrieve this file. The incident has been logged and the responsible party will be ",
    redacted: "asked nicely to fix it",
    post: ".",
  },
};

export const CASE_FILE_PRINT_FACT =
  "First operation on file: Textbook Hero, a peer-to-peer textbook marketplace built during subject's first term at BCIT in 2024.";

export const CASE_FILE_DECLASSIFIED_FACT =
  "The database behind FLUX was started before the app it serves. Subject built the engine first and found a reason to use it later.";

export const CASE_FILE_TOOLS_OF_CHOICE: CaseFileTool[] = [
  {
    skill: SKILL_AWS,
    note: "Studied it at BCIT, then built an 11-person storefront on it.",
  },
  {
    skill: SKILL_TYPESCRIPT,
    note: "Suspected of refusing to ship untyped code.",
  },
  {
    skill: SKILL_NUXT,
    note: "Prime suspect behind this very website.",
  },
  {
    skill: SKILL_C,
    note: "Wrote a whole database in it. Voluntarily.",
  },
  {
    skill: SKILL_CPP,
    note: "Currently powering PWS2. Still learning where the sharp edges are.",
  },
  {
    skill: SKILL_LINUX,
    note: "Daily driver. Desktop reconfigured far too often.",
  },
];

export const CASE_FILE_TIMELINE: CaseFileTimelineEntry[] = [
  {
    date: formatShortMonth(EXPERIENCE_BEST_BUY.start),
    event: "Subject embedded at Best Buy, Coquitlam, as Home Solutions Advisor (seasonal)",
  },
  {
    date: formatShortMonth(EDUCATION_BCIT.start),
    event: "Subject enrolls at BCIT, Burnaby. Computer Systems, Cloud Computing Option",
  },
  {
    date: formatShortMonth(EXPERIENCE_LONDON_DRUGS.start),
    event:
      "Cover role established: TECH Specialist, London Drugs, Burnaby. Same month, work begins on a custom database in C",
  },
  {
    date: "10.2025",
    event: "Subject joins an 11-person unit building a serverless platform on AWS",
  },
  { date: formatShortMonth(EDUCATION_BCIT.end!), event: "Subject graduates BCIT" },
  { date: "07.2026", event: "Subject begins publishing reports. PWS2 announced" },
];

export const CASE_FILE_FEATURED_OPERATION: CaseFileOperation = {
  project: PROJECT_FLUX,
  pre: "Standalone C database with TCP networking, a custom protocol and token-based auth, plus a SvelteKit recipe manager on top. Self-hosted on a Raspberry Pi. ",
  redacted: "No ORM. No external DB library.",
  post: "",
};

export const CASE_FILE_OPERATIONS: CaseFileOperation[] = [
  {
    project: PROJECT_FAASIFY,
    pre: "Serverless AWS storefront with real-time chat, built by an 11-person unit. WebSocket backend held ",
    redacted: "500+ concurrent connections",
    post: ".",
  },
  {
    project: PROJECT_CONSCIOUS_CONNECTIONS,
    pre: "Industry-sponsored dating platform with matching, secure messaging and Stripe subscriptions. ",
    redacted: "200+ test users",
    post: " on record.",
  },
];

export const CASE_FILE_NOTES: string[] = [
  "Subject has been photographed handling an electric guitar on multiple occasions. Skill level: developing.",
  "Recurring interest in soulslikes and precision platformers. High tolerance for repeated failure, possibly relevant to debugging habits.",
  "Spends unusual amounts of time reconfiguring his Linux desktop (Hyprland, Quickshell) for no operational reason.",
  "Has logged unexplained hours in Football Manager. Management instincts under review.",
];

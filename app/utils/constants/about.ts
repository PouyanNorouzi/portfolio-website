export const ABOUT_SECTIONS: CaseFileSection[] = [
  { id: "a01", number: "01", title: "Subject Interview", tocLabel: "Interview" },
  { id: "a02", number: "02", title: "Training Record", tocLabel: "Training" },
  { id: "a03", number: "03", title: "Employment History", tocLabel: "Employment" },
  { id: "a04", number: "04", title: "Equipment Audit", tocLabel: "Equipment" },
  { id: "a05", number: "05", title: "Field Notes", tocLabel: "Field Notes" },
  { id: "a06", number: "06", title: "How to Make Contact", tocLabel: "Contact" },
];

export interface AboutInterviewLine {
  time: string;
  speaker: "INTERVIEWER" | "SUBJECT";
  text: string;
  // Wraps the answer in a redaction bar.
  hidden?: boolean;
  // Wraps the answer in a highlighter sweep.
  highlight?: boolean;
}

export const ABOUT_INTERVIEW: AboutInterviewLine[] = [
  { time: "14:02", speaker: "INTERVIEWER", text: "State your name for the record." },
  { time: "14:02", speaker: "SUBJECT", text: "Pouyan Norouzi." },
  { time: "14:03", speaker: "INTERVIEWER", text: "And what do you do?" },
  {
    time: "14:03",
    speaker: "SUBJECT",
    text: "I build software across cloud, web and systems. I graduated from BCIT in December 2025.",
  },
  { time: "14:05", speaker: "INTERVIEWER", text: "Why cloud?" },
  {
    time: "14:05",
    speaker: "SUBJECT",
    text: "I studied it at BCIT, then joined an 11-person team building a serverless storefront on AWS.",
  },
  { time: "14:09", speaker: "INTERVIEWER", text: "What do you do after hours?" },
  {
    time: "14:09",
    speaker: "SUBJECT",
    text: "Write a database in C. Nobody asked me to.",
    hidden: true,
  },
  { time: "14:12", speaker: "INTERVIEWER", text: "Anything else for the record?" },
  {
    time: "14:12",
    speaker: "SUBJECT",
    text: "I'm looking for work. Read the rest of the file.",
    highlight: true,
  },
];

declare interface CaseFileFact {
  label: string;
  value: string;
}

declare interface CaseFileTool {
  skill: EnhancedSkill;
  note: string;
}

declare interface CaseFileTimelineEntry {
  date: string;
  event: string;
}

declare interface CaseFileSection {
  id: string;
  number: string;
  title: string;
  tocLabel: string;
}

declare interface CaseFileOperation {
  project: Project;
  pre: string;
  redacted: string;
  post: string;
}

declare interface CaseFileTerminalLine {
  kind: "command" | "output" | "success" | "error";
  text: string;
}

// A multi-line redaction: `hidden` only sizes the bar, `shown` is what it reads once revealed.
declare interface CaseFileRedactedLine {
  hidden: string;
  shown: string;
}

// Copy with at most one inline redaction: `pre`, then the redacted part, then `post`.
declare interface CaseFileRedactedText {
  pre: string;
  redacted?: string;
  post?: string;
}

declare interface CaseFileErrorCopy {
  banner: string;
  title: string;
  stamp: string;
  lead: CaseFileRedactedText;
  // A muted line under the lead.
  note?: CaseFileRedactedText;
}

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

declare interface CareerMonth {
  month: number;
  year: number;
}

declare interface CareerPeriod {
  location: string;
  start: CareerMonth;
  end?: CareerMonth;
}

declare interface Education extends CareerPeriod {
  institution: string;
  degree: string;
}

declare interface Experience extends CareerPeriod {
  position: string;
  company: string;
  description: string;
}

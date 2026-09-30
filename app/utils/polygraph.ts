// Verdicts and timestamps for the polygraph examination (see constants/about.ts).

// Minimum proficiency for each derived verdict. Anything lower is INCONCLUSIVE.
export const VERDICT_THRESHOLDS = { TRUTHFUL: 0.85, PROBABLE: 0.7 } as const;

export function verdictFor(claim: PolygraphClaim | PolygraphRapidItem): PolygraphVerdict {
  if (claim.verdict) return claim.verdict;
  const proficiency = claim.skill?.proficiency ?? 0;
  if (proficiency >= VERDICT_THRESHOLDS.TRUTHFUL) return "TRUTHFUL";
  if (proficiency >= VERDICT_THRESHOLDS.PROBABLE) return "PROBABLE";
  return "INCONCLUSIVE";
}

export function claimLabel(claim: PolygraphClaim): string {
  return claim.label ?? claim.skill?.title ?? "";
}

export function rapidAnswer(item: PolygraphRapidItem): string {
  if (item.answer) return item.answer;
  return verdictFor(item) === "INCONCLUSIVE" ? "Some." : "Yes.";
}

// Paper sits on a light background in both themes, so skill icons always use the light variant.
export function paperIcon(skill: EnhancedSkill): string {
  return typeof skill.icon === "string" ? skill.icon : skill.icon.lightIcon;
}

// One clock time per exchange, a minute apart; a rapid-fire round takes a single minute.
// Returned per round, so round `r` exchange `e` reads `timestamps[r][e]`.
export function timestampsFor(rounds: PolygraphRound[], start: string): string[][] {
  const [hours = 0, minutes = 0] = start.split(":").map(Number);
  let clock = hours * 60 + minutes;
  const format = (total: number) =>
    `${String(Math.floor(total / 60) % 24).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;

  return rounds.map((round) => {
    if (round.kind === "rapid-fire") return [format(clock++)];
    return round.exchanges.map(() => format(clock++));
  });
}

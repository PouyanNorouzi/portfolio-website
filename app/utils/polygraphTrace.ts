// Pen traces for the polygraph chart paper on the About page. Time runs down the page, so each
// pen wiggles horizontally around its own channel. Every segment starts and ends dead on its
// channel center, so segments stacked row after row join into one continuous pen line.

export interface TraceSpike {
  // Where the reaction happens, as a 0..1 fraction of the segment height.
  at: number;
  verdict: PolygraphVerdict;
}

export const TRACE_PENS = ["respiration", "cardio", "gsr"] as const;
export type TracePen = (typeof TRACE_PENS)[number];

// Vertical distance between plotted points, in px.
const STEP = 3.5;
// Inside a burst each step is split this many times (~1.2px).
const BURST_DETAIL = 3;
// The pens ease out of (and back into) their channel center over this many px at each end.
const EDGE_EASE = 18;

// How each verdict makes the needles jump. `amp` is relative to the normal max amplitude,
// `height` is the burst's height in px, `period` its wiggle in px, `jitter` random noise.
const REACTIONS: Record<
  PolygraphVerdict,
  { amp: number; height: number; period: number; jitter: number }
> = {
  TRUTHFUL: { amp: 0.45, height: 24, period: 14, jitter: 0 },
  PROBABLE: { amp: 0.85, height: 30, period: 11, jitter: 0.1 },
  INCONCLUSIVE: { amp: 0.8, height: 36, period: 6, jitter: 0.9 },
  DECEPTIVE: { amp: 2.4, height: 40, period: 9, jitter: 0.35 },
};

// Per-pen flavor of a reaction: breathing catches slowly, the heart races, the GSR pen lurches
// in one direction instead of oscillating.
const PEN_REACTION: Record<TracePen, { amp: number; period: number; lobe: boolean }> = {
  respiration: { amp: 0.9, period: 1.4, lobe: false },
  cardio: { amp: 1, period: 0.7, lobe: false },
  gsr: { amp: 1.1, period: 1, lobe: true },
};

// mulberry32: tiny seeded PRNG so the same seed always draws the same trace.
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function smoothstep(edge: number, x: number) {
  if (edge <= 0) return 1;
  const t = Math.min(Math.max(x / edge, 0), 1);
  return t * t * (3 - 2 * t);
}

// One decimal, and never "-0".
function fmt(value: number) {
  return String(Math.round(value * 10) / 10 + 0);
}

// The calm, between-questions signal of a pen, as a function of y (in normal-amplitude units).
function baseline(pen: TracePen, random: () => number): (y: number) => number {
  const phase = random() * Math.PI * 2;
  if (pen === "respiration") {
    // Slow, even breathing with a gentle swell in depth.
    const period = 95 + random() * 35;
    const swell = 260 + random() * 120;
    return (y) =>
      0.5 *
      Math.sin((y / period) * Math.PI * 2 + phase) *
      (0.8 + 0.2 * Math.sin(y / swell + phase));
  }
  if (pen === "cardio") {
    // A small ripple with a sharp heartbeat blip every ~45px.
    const period = 42 + random() * 12;
    const offset = random() * period;
    return (y) => {
      const ripple = 0.12 * Math.sin((y / 30) * Math.PI * 2 + phase);
      const beat = (((y + offset) % period) + period) % period;
      // A quick up-down-up spike over ~9px.
      const blip = beat < 9 ? Math.sin((beat / 9) * Math.PI * 2) * 0.55 : 0;
      return ripple + blip;
    };
  }
  // GSR: a slow wandering drift.
  const slow = 280 + random() * 140;
  const slower = 520 + random() * 200;
  const phase2 = random() * Math.PI * 2;
  return (y) =>
    0.28 * Math.sin((y / slow) * Math.PI * 2 + phase) +
    0.14 * Math.sin((y / slower) * Math.PI * 2 + phase2);
}

// Returns one SVG path `d` per pen, in TRACE_PENS order, in a width x height px coordinate space.
export function tracePaths(
  seed: number,
  width: number,
  height: number,
  spikes: TraceSpike[]
): string[] {
  const maxAmp = width / 7;
  const count = Math.max(1, Math.ceil(height / STEP));
  const ease = Math.min(EDGE_EASE, height / 4);

  return TRACE_PENS.map((pen, index) => {
    const center = fmt((width * (1 + 2 * index)) / 6);
    if (width <= 0 || height <= 0) return `M${center} 0V${fmt(Math.max(height, 0))}`;

    const random = mulberry32(Math.imul(seed | 0, 0x9e3779b1) ^ Math.imul(index + 1, 0x85ebca6b));
    const calm = baseline(pen, random);
    const flavor = PEN_REACTION[pen];
    const bursts = spikes.map(({ at, verdict }) => {
      const reaction = REACTIONS[verdict];
      return {
        center: at * height,
        half: reaction.height / 2,
        amp: reaction.amp * flavor.amp,
        period: reaction.period * flavor.period,
        jitter: reaction.jitter,
        phase: random() * Math.PI * 2,
        sign: random() < 0.5 ? -1 : 1,
      };
    });

    // Even steps down the paper, subdivided inside bursts so fast wiggles stay smooth.
    const ys: number[] = [];
    for (let i = 0; i <= count; i++) {
      const y = (i / count) * height;
      ys.push(y);
      if (i === count) break;
      const next = ((i + 1) / count) * height;
      if (
        bursts.some((burst) => next > burst.center - burst.half && y < burst.center + burst.half)
      ) {
        for (let k = 1; k < BURST_DETAIL; k++) ys.push(y + ((next - y) * k) / BURST_DETAIL);
      }
    }

    const points: string[] = [];
    ys.forEach((y, i) => {
      let offset = calm(y);
      for (const burst of bursts) {
        const t = (y - burst.center) / burst.half;
        if (t <= -1 || t >= 1) continue;
        const envelope = Math.cos((t * Math.PI) / 2) ** 2;
        const wave = flavor.lobe
          ? burst.sign * (0.6 + 0.4 * Math.sin((y / burst.period) * Math.PI * 2 + burst.phase))
          : Math.sin(((y - burst.center) / burst.period) * Math.PI * 2 + burst.phase);
        // Consumed per point only while inside a burst, so it stays deterministic.
        const noise = burst.jitter ? (random() * 2 - 1) * burst.jitter : 0;
        offset += burst.amp * envelope * (wave + noise);
      }
      // Ease to zero at both ends so neighbouring segments meet at the channel center.
      const edge = smoothstep(ease, y) * smoothstep(ease, height - y);
      const cx = (width * (1 + 2 * index)) / 6;
      // A pen pinned against the edge of the paper just flatlines there.
      const x = Math.min(Math.max(cx + offset * maxAmp * edge, 0.5), width - 0.5);
      const last = i === ys.length - 1;
      points.push(
        i === 0 ? `${center} 0` : last ? `${center} ${fmt(height)}` : `${fmt(x)} ${fmt(y)}`
      );
    });
    return `M${points.join("L")}`;
  });
}

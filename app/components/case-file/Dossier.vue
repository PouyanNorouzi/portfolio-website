<script setup lang="ts">
import {
  CASE_FILE_ADDRESS,
  CASE_FILE_FACTS,
  CASE_FILE_ID,
  CASE_FILE_PRINT_FACT,
  CASE_FILE_STICKY_NOTE,
  CASE_FILE_THREAT_LEVEL,
} from "~/utils/constants/case-file";
const scanning = ref(false);

// Where each crosshair bracket sits, and where it slides in from.
const CORNERS = [
  { place: "top-0 left-0 border-t-2 border-l-2", away: "-translate-x-2 -translate-y-2" },
  { place: "top-0 right-0 border-t-2 border-r-2", away: "translate-x-2 -translate-y-2" },
  { place: "bottom-0 left-0 border-b-2 border-l-2", away: "-translate-x-2 translate-y-2" },
  { place: "bottom-0 right-0 border-r-2 border-b-2", away: "translate-x-2 translate-y-2" },
];

// The match percentage counts up from zero each time the scan starts.
const MATCH_PERCENT = 99.7;
const MATCH_COUNT_MS = 900;
const match = ref(MATCH_PERCENT);
let matchFrame: number | undefined;

watch(scanning, (active) => {
  cancelAnimationFrame(matchFrame!);
  if (!active || prefersReducedMotion()) {
    match.value = MATCH_PERCENT;
    return;
  }
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / MATCH_COUNT_MS, 1);
    match.value = MATCH_PERCENT * (1 - (1 - t) ** 3);
    if (t < 1) matchFrame = requestAnimationFrame(tick);
  };
  match.value = 0;
  matchFrame = requestAnimationFrame(tick);
});

onBeforeUnmount(() => cancelAnimationFrame(matchFrame!));
const printOpen = ref(false);
</script>

<template>
  <div>
    <!-- Folder tab: manila in light mode, a HUD tag in dark mode. -->
    <div
      class="inline-block rounded-t-md bg-accented px-4 py-1.5 font-mono text-xs tracking-widest text-toned dark:border dark:border-b-0 dark:border-primary/50 dark:bg-transparent dark:text-primary">
      {{ CASE_FILE_ID }} · PERSONNEL FILE
    </div>
    <UCard :ui="{ root: 'overflow-hidden rounded-tl-none', body: 'p-0 sm:p-0' }">
      <CaseFileBanner />
      <div class="flex flex-wrap items-start gap-7 p-6">
        <div class="relative flex w-44 shrink-0 flex-col items-center gap-2.5">
          <div
            class="pointer-events-none absolute top-28 -right-4 z-10 w-32 rotate-3 bg-tertiary-200 px-3 pt-2.5 pb-2 font-hand text-lg leading-tight text-tertiary-950 shadow-lg">
            <UIcon
              name="i-lucide-paperclip"
              class="absolute -top-2.5 left-1/2 size-5 -translate-x-1/2 text-muted" />
            {{ CASE_FILE_STICKY_NOTE }}
          </div>
          <div class="relative size-44">
            <div
              class="relative size-44 overflow-hidden rounded-full border-2 border-primary"
              @mouseenter="scanning = true"
              @mouseleave="scanning = false">
              <NuxtImg
                src="/me/1.webp"
                alt="Pouyan Norouzi"
                width="176"
                height="176"
                class="size-full object-cover transition duration-500"
                :class="scanning ? 'contrast-100 grayscale-0' : 'contrast-110 grayscale'" />
              <template v-if="scanning">
                <div
                  class="pointer-events-none absolute inset-x-0 h-1/5 bg-linear-to-b from-transparent via-primary/50 to-transparent motion-safe:animate-scan" />
                <UBadge
                  :label="`MATCH ${match.toFixed(1)}%`"
                  variant="outline"
                  class="absolute top-5 left-1/2 z-10 -translate-x-1/2 bg-inverted font-mono tracking-wider" />
              </template>
            </div>
            <!-- Crosshair brackets snap onto the corners while the photo is being scanned. -->
            <span
              v-for="corner in CORNERS"
              :key="corner.place"
              aria-hidden="true"
              class="pointer-events-none absolute size-5 border-primary transition duration-200 motion-reduce:transition-none"
              :class="[
                corner.place,
                scanning ? 'translate-0 opacity-100' : `${corner.away} opacity-0`,
              ]" />
          </div>
          <CaseFileLabel>SURVEILLANCE PHOTO</CaseFileLabel>
        </div>

        <div class="flex min-w-0 flex-1 basis-80 flex-col gap-3.5">
          <h2 class="font-name text-3xl font-bold tracking-wider text-primary">Pouyan Norouzi</h2>
          <div class="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            <div v-for="fact in CASE_FILE_FACTS" :key="fact.label" class="flex flex-col gap-0.5">
              <CaseFileLabel>{{ fact.label }}</CaseFileLabel>
              <span class="font-medium">{{ fact.value }}</span>
            </div>
            <div class="flex flex-col gap-0.5">
              <CaseFileLabel>HOME ADDRESS</CaseFileLabel>
              <span>
                <CaseFileRedacted :lines="CASE_FILE_ADDRESS" />
              </span>
            </div>
            <div class="flex flex-col gap-0.5">
              <CaseFileLabel>THREAT LEVEL</CaseFileLabel>
              <span class="font-semibold text-error">{{ CASE_FILE_THREAT_LEVEL }}</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button
              type="button"
              aria-label="Examine fingerprint"
              title="Examine fingerprint"
              :aria-expanded="printOpen"
              class="m-1.5 h-14 w-11 -rotate-12 cursor-pointer rounded-[50%_50%_46%_46%] bg-[repeating-radial-gradient(ellipse_50%_60%_at_50%_62%,transparent_0_2px,var(--ui-text-muted)_2px_3.2px)] opacity-55 transition-opacity hover:opacity-100 focus-visible:opacity-100"
              @click="printOpen = !printOpen" />
            <div
              class="relative grid min-w-64 flex-1 items-center overflow-hidden rounded-md border border-dashed px-3 py-2 text-sm leading-relaxed transition-colors duration-500"
              :class="printOpen ? 'border-primary' : 'border-default'">
              <div aria-hidden="true" class="invisible col-start-1 row-start-1">
                <span class="block font-mono text-xs tracking-widest"
                  >PRINT MATCHED · ARCHIVE 2024</span
                >
                {{ CASE_FILE_PRINT_FACT }}
              </div>
              <!-- Closing plays the reveal backwards: the text wipes away as the scan bar returns.
                   Only the text wipes; the closed label leaves straight away so opening isn't held up. -->
              <Transition
                mode="out-in"
                :leave-active-class="printOpen ? '' : 'motion-safe:animate-reveal-out!'">
                <div v-if="printOpen" class="col-start-1 row-start-1 motion-safe:animate-reveal-in">
                  <span class="block font-mono text-xs tracking-widest text-primary">
                    PRINT MATCHED · ARCHIVE 2024
                  </span>
                  {{ CASE_FILE_PRINT_FACT }}
                </div>
                <CaseFileLabel v-else class="col-start-1 row-start-1">
                  LATENT PRINT RECOVERED. CLICK THE PRINT TO EXAMINE.
                </CaseFileLabel>
              </Transition>
              <Transition leave-active-class="motion-safe:animate-scan-bar-back!">
                <span
                  v-if="printOpen"
                  class="pointer-events-none absolute inset-y-0 w-[3px] bg-primary shadow-[0_0_12px_var(--ui-primary)] motion-safe:animate-scan-bar" />
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>

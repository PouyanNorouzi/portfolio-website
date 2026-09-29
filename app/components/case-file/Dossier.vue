<script setup lang="ts">
import { CASE_FILE_FACTS, CASE_FILE_PRINT_FACT } from "~/utils/constants/case-file";
const scanning = ref(false);
const printOpen = ref(false);
</script>

<template>
  <UCard :ui="{ root: 'overflow-hidden', body: 'p-0 sm:p-0' }">
    <CaseFileBanner />
    <div class="flex flex-wrap items-start gap-7 p-6">
      <div class="relative flex w-44 shrink-0 flex-col items-center gap-2.5">
        <div
          class="pointer-events-none absolute top-28 -right-4 z-10 w-32 rotate-3 bg-tertiary-200 px-3 pt-2.5 pb-2 font-hand text-lg leading-tight text-tertiary-950 shadow-lg">
          <UIcon
            name="i-lucide-paperclip"
            class="absolute -top-2.5 left-1/2 size-5 -translate-x-1/2 text-muted" />
          Hire this guy. Seriously. -C.
        </div>
        <div
          class="relative size-44 overflow-hidden rounded-full border-2 border-primary"
          @mouseenter="scanning = true"
          @mouseleave="scanning = false">
          <NuxtImg
            src="/me/1.webp"
            alt="Pouyan Norouzi"
            width="176"
            height="176"
            class="size-full object-cover contrast-110 grayscale" />
          <template v-if="scanning">
            <div
              class="pointer-events-none absolute inset-x-0 h-1/5 bg-linear-to-b from-transparent via-primary/50 to-transparent motion-safe:animate-scan" />
            <UBadge
              label="MATCH 99.7%"
              variant="outline"
              class="absolute top-5 left-1/2 z-10 -translate-x-1/2 bg-inverted font-mono tracking-wider" />
          </template>
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
              <CaseFileRedacted
                :lines="[
                  { hidden: '1234 Classified Avenue', shown: 'nice' },
                  { hidden: 'Coquitlam, BC', shown: 'try' },
                ]" />
            </span>
          </div>
          <div class="flex flex-col gap-0.5">
            <CaseFileLabel>THREAT LEVEL</CaseFileLabel>
            <span class="font-semibold text-error">
              Minimal, unless you suggest he just use Postgres
            </span>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <button
            type="button"
            aria-label="Examine fingerprint"
            title="Examine fingerprint"
            class="m-1.5 h-14 w-11 -rotate-12 cursor-pointer rounded-[50%_50%_46%_46%] bg-[repeating-radial-gradient(ellipse_50%_60%_at_50%_62%,transparent_0_2px,var(--ui-text-muted)_2px_3.2px)] opacity-55 transition-opacity hover:opacity-100"
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
            <template v-if="printOpen">
              <div class="col-start-1 row-start-1 motion-safe:animate-reveal-in">
                <span class="block font-mono text-xs tracking-widest text-primary">
                  PRINT MATCHED · ARCHIVE 2024
                </span>
                {{ CASE_FILE_PRINT_FACT }}
              </div>
              <span
                class="pointer-events-none absolute inset-y-0 w-[3px] bg-primary shadow-[0_0_12px_var(--ui-primary)] motion-safe:animate-scan-bar" />
            </template>
            <CaseFileLabel v-else class="col-start-1 row-start-1">
              LATENT PRINT RECOVERED. CLICK THE PRINT TO EXAMINE.
            </CaseFileLabel>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>

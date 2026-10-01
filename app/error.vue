<script setup lang="ts">
import type { NuxtError } from "#app";
import { CASE_FILE_FAILURE, CASE_FILE_NOT_FOUND } from "~/utils/constants/case-file";

const props = defineProps<{
  error: NuxtError;
}>();

const route = useRoute();
const dates = useCaseFileDates();

const notFound = computed(() => props.error.statusCode === 404);
const copy = computed(() => (notFound.value ? CASE_FILE_NOT_FOUND : CASE_FILE_FAILURE));
const requestedPath = computed(() => route.path);
const details = computed(
  () => props.error.statusMessage || props.error.message || "Unknown failure."
);

useSeoMeta({
  title: () => (notFound.value ? "Pouyan - File Not Found" : "Pouyan - Error"),
  robots: "noindex",
});

function returnToCaseFile() {
  clearError({ redirect: "/" });
}
</script>

<template>
  <UApp>
    <AppAtmosphere />
    <UContainer class="flex min-h-screen flex-col">
      <AppHeader />
      <main class="flex grow items-center justify-center py-10">
        <UCard class="w-full max-w-2xl" :ui="{ root: 'overflow-hidden', body: 'p-0 sm:p-0' }">
          <CaseFileHazardBanner>
            {{ copy.banner }}
          </CaseFileHazardBanner>

          <div class="flex flex-wrap justify-between gap-x-4 gap-y-2 px-6 pt-4">
            <CaseFileLabel>ERROR CODE: {{ error.statusCode }}</CaseFileLabel>
            <CaseFileLabel>DATE OF REPORT: {{ dates.report }}</CaseFileLabel>
          </div>
          <div class="mx-6 mt-3.5 border-t-4 border-double border-default" />

          <div class="flex flex-col gap-5 p-6">
            <div class="flex flex-wrap items-center justify-between gap-6">
              <h1 class="font-name text-3xl font-bold tracking-wider text-highlighted sm:text-4xl">
                {{ copy.title }}
              </h1>
              <CaseFileStamp
                class="border-double px-4 py-2 text-center font-name text-xl leading-tight font-bold tracking-widest">
                {{ copy.stamp }}
                <span class="block font-mono text-xs font-normal tracking-widest">
                  {{ dates.stamp }}
                </span>
              </CaseFileStamp>
            </div>

            <CaseFileLabel class="break-all">// REQUESTED PATH: {{ requestedPath }}</CaseFileLabel>

            <p class="leading-relaxed">
              {{ copy.lead.pre
              }}<CaseFileRedacted v-if="copy.lead.redacted">{{
                copy.lead.redacted
              }}</CaseFileRedacted
              >{{ copy.lead.post }}
            </p>
            <p v-if="copy.note" class="leading-relaxed text-muted">
              {{ copy.note.pre
              }}<CaseFileRedacted v-if="copy.note.redacted">{{
                copy.note.redacted
              }}</CaseFileRedacted
              >{{ copy.note.post }}
            </p>
            <div
              v-if="!notFound"
              class="rounded-md border border-dashed border-error px-4 py-3 font-mono text-sm leading-relaxed">
              <span class="block text-xs tracking-widest text-error">INCIDENT REPORT</span>
              {{ details }}
            </div>

            <div class="border-t-4 border-double border-default pt-5">
              <UButton
                label="RETURN TO CASE FILE"
                icon="i-lucide-arrow-left"
                color="neutral"
                variant="outline"
                size="lg"
                class="font-mono font-semibold tracking-widest"
                @click="returnToCaseFile" />
            </div>
          </div>
        </UCard>
      </main>
      <AppFooter />
    </UContainer>
  </UApp>
</template>

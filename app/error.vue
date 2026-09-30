<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const route = useRoute();
const dates = useCaseFileDates();

const notFound = computed(() => props.error.statusCode === 404);
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
            {{ notFound ? "RECORD EXPUNGED" : "SYSTEM FAILURE" }}
          </CaseFileHazardBanner>

          <div class="flex flex-wrap justify-between gap-x-4 gap-y-2 px-6 pt-4">
            <CaseFileLabel>ERROR CODE: {{ error.statusCode }}</CaseFileLabel>
            <CaseFileLabel>DATE OF REPORT: {{ dates.report }}</CaseFileLabel>
          </div>
          <div class="mx-6 mt-3.5 border-t-4 border-double border-default" />

          <div class="flex flex-col gap-5 p-6">
            <div class="flex flex-wrap items-center justify-between gap-6">
              <h1 class="font-name text-3xl font-bold tracking-wider text-highlighted sm:text-4xl">
                {{ notFound ? "FILE NOT FOUND" : "ACCESS ERROR" }}
              </h1>
              <CaseFileStamp
                class="border-double px-4 py-2 text-center font-name text-xl leading-tight font-bold tracking-widest">
                {{ notFound ? "EXPUNGED" : "DENIED" }}
                <span class="block font-mono text-xs font-normal tracking-widest">
                  {{ dates.stamp }}
                </span>
              </CaseFileStamp>
            </div>

            <CaseFileLabel class="break-all">// REQUESTED PATH: {{ requestedPath }}</CaseFileLabel>

            <template v-if="notFound">
              <p class="leading-relaxed">
                This file was either never opened, or someone made sure it doesn't exist.
              </p>
              <p class="leading-relaxed text-muted">
                Last known custodian:
                <CaseFileRedacted>the intern who "cleaned up" the archive</CaseFileRedacted>
              </p>
            </template>
            <template v-else>
              <p class="leading-relaxed">
                The archive failed to retrieve this file. The incident has been logged and the
                responsible party will be
                <CaseFileRedacted>asked nicely to fix it</CaseFileRedacted>.
              </p>
              <div
                class="rounded-md border border-dashed border-error px-4 py-3 font-mono text-sm leading-relaxed">
                <span class="block text-xs tracking-widest text-error">INCIDENT REPORT</span>
                {{ details }}
              </div>
            </template>

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

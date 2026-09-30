<script setup lang="ts">
import { CASE_FILE_ID } from "~/utils/constants/case-file";
import { NAV_PAGES, getSectionIndex } from "~/utils/constants/pages";
import {
  EMAIL,
  EMAIL_ADDRESS,
  GITHUB_LINK,
  GITHUB_USERNAME,
  LINKEDIN_HANDLE,
  LINKEDIN_LINK,
} from "~/utils/constants/socials";

const route = useRoute();
const now = useNow();
const year = computed(() => new Date(now.value).getFullYear());
const copy = useCopyToDeadDrop();

const pageCount = String(NAV_PAGES.length).padStart(2, "0");
const pageNumber = computed(() => NAV_PAGES[getSectionIndex(route.path)]?.number ?? "--");

const contacts = [
  { label: "EMAIL", text: EMAIL_ADDRESS, to: EMAIL },
  { label: "LINKEDIN", text: LINKEDIN_HANDLE, to: LINKEDIN_LINK },
  { label: "GITHUB", text: GITHUB_USERNAME, to: GITHUB_LINK },
];
</script>

<template>
  <footer class="mt-8 flex flex-col gap-5 border-t-4 border-double border-default pt-6 pb-4">
    <!-- Distribution list: who this file is routed to -->
    <div class="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:gap-x-6">
      <CaseFileLabel class="text-highlighted">DISTRIBUTION:</CaseFileLabel>
      <div v-for="contact in contacts" :key="contact.label" class="flex items-center gap-2">
        <CaseFileLabel class="min-w-20 md:min-w-0">{{ contact.label }}</CaseFileLabel>
        <ULink
          :to="contact.to"
          :target="contact.to.startsWith('http') ? '_blank' : undefined"
          class="font-mono text-sm break-all text-primary">
          {{ contact.text }}
        </ULink>
        <UButton
          icon="i-lucide-copy"
          size="xs"
          color="neutral"
          variant="ghost"
          :aria-label="`Copy ${contact.label.toLowerCase()}`"
          class="-my-1"
          @click="copy(contact.text)" />
      </div>
    </div>

    <div class="flex flex-wrap items-end justify-between gap-4">
      <div class="flex flex-col gap-1">
        <CaseFileLabel class="text-highlighted">
          END OF FILE · {{ CASE_FILE_ID }} · PG {{ pageNumber }}/{{ pageCount }}
        </CaseFileLabel>
        <CaseFileLabel class="text-[0.65rem]">
          Property of the Bureau of Developer Investigations, Field Office BC. Unauthorized
          duplication is encouraged. © {{ year }} Pouyan Norouzi.
        </CaseFileLabel>
      </div>
      <div
        aria-hidden="true"
        class="h-6 w-28 bg-[repeating-linear-gradient(90deg,var(--ui-text-highlighted)_0_2px,transparent_2px_4px,var(--ui-text-highlighted)_4px_5px,transparent_5px_8px,var(--ui-text-highlighted)_8px_11px,transparent_11px_12px,var(--ui-text-highlighted)_12px_13px,transparent_13px_16px)]" />
    </div>

    <CaseFileHazardBanner size="xs">CLASSIFIED // EYES ONLY</CaseFileHazardBanner>
  </footer>
</template>

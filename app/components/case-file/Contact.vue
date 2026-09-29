<script setup lang="ts">
import { CASE_FILE_SECTIONS } from "~/utils/constants/case-file";
import { RESUME_DOCX_PATH, RESUME_PDF_PATH } from "~/utils/constants/resume";
import {
  EMAIL,
  EMAIL_ADDRESS,
  GITHUB_LINK,
  GITHUB_USERNAME,
  LINKEDIN_HANDLE,
  LINKEDIN_LINK,
} from "~/utils/constants/socials";
const contacts = [
  { label: "EMAIL", text: EMAIL_ADDRESS, to: EMAIL },
  { label: "LINKEDIN", text: LINKEDIN_HANDLE, to: LINKEDIN_LINK },
  { label: "GITHUB", text: GITHUB_USERNAME, to: GITHUB_LINK },
];

const toast = useToast();

async function copy(text: string) {
  await navigator.clipboard.writeText(text);
  toast.add({
    title: "COPIED TO DEAD DROP",
    description: text,
    icon: "i-lucide-check",
    color: "success",
  });
}
</script>

<template>
  <CaseFileSection :section="CASE_FILE_SECTIONS[7]!">
    <p class="leading-relaxed">Submit request for direct contact via the channels below:</p>
    <UCard>
      <div class="flex flex-col gap-2.5">
        <div v-for="contact in contacts" :key="contact.label" class="flex flex-wrap gap-x-2">
          <CaseFileLabel class="inline-block min-w-24">{{ contact.label }}</CaseFileLabel>
          <ULink :to="contact.to" class="font-semibold break-all text-primary">
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
        <div class="flex flex-wrap gap-x-2">
          <CaseFileLabel class="inline-block min-w-24">PHONE</CaseFileLabel>
          <span>
            <CaseFileRedacted :lines="[{ hidden: '+1 (604) 555-0123', shown: 'on request' }]" />
          </span>
        </div>
      </div>
    </UCard>
    <div class="flex flex-wrap gap-2.5">
      <UButton :to="RESUME_PDF_PATH" external target="_blank" label="Download PDF" />
      <UButton :to="RESUME_DOCX_PATH" external variant="outline" label="Download DOCX" />
    </div>
  </CaseFileSection>
</template>

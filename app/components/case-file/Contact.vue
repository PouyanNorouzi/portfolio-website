<script setup lang="ts">
import { CASE_FILE_SECTIONS } from "~/utils/constants/case-file";
import { EMAIL, GITHUB_LINK, LINKEDIN_LINK } from "~/utils/constants/socials";
const contacts = [
  { label: "EMAIL", text: "pouyannorouzii@gmail.com", to: EMAIL },
  { label: "LINKEDIN", text: "pouyan-norouzi", to: LINKEDIN_LINK },
  { label: "GITHUB", text: "PouyanNorouzi", to: GITHUB_LINK },
];
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
      <UButton
        to="/files/Pouyan_Norouzi_Resume.pdf"
        external
        target="_blank"
        label="Download PDF" />
      <UButton
        to="/files/Pouyan_Norouzi_Resume.docx"
        external
        variant="outline"
        label="Download DOCX" />
    </div>
  </CaseFileSection>
</template>

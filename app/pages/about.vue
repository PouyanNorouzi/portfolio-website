<script setup lang="ts">
import { EDUCATION, EXPERIENCE, formatCareerPeriod } from "~/utils/constants/career";
import { ABOUT_SECTIONS } from "~/utils/constants/about";
import { CASE_FILE_ID } from "~/utils/constants/case-file";

usePageSeo({
  title: "Pouyan - About",
  description:
    "About Pouyan Norouzi: education at BCIT, work experience, skills and background.",
});

definePageMeta({
  middleware: ["transition"],
});

const [interview, training, employment, equipment, notes, contact] = ABOUT_SECTIONS as [
  CaseFileSection,
  CaseFileSection,
  CaseFileSection,
  CaseFileSection,
  CaseFileSection,
  CaseFileSection,
];

const STAMP_STAGGER_S = 0.25;

const education = EDUCATION.map((edu) => ({ ...edu, period: formatCareerPeriod(edu) }));
const experience = EXPERIENCE.map((exp) => ({ ...exp, period: formatCareerPeriod(exp) }));
</script>

<template>
  <UContainer>
    <PageHeader :label="`CASE FILE ${CASE_FILE_ID} · PERSONNEL RECORD`">About the Subject</PageHeader>
    <div class="mx-auto flex w-full max-w-4xl flex-col gap-12 pb-12">
      <CaseFileSection :section="interview">
        <AboutProfile />
        <AboutInterview />
      </CaseFileSection>

      <CaseFileSection :section="training">
        <AboutVerifiedRow
          v-for="edu in education"
          :key="edu.institution"
          :title="edu.institution"
          :subtitle="edu.degree"
          :period="edu.period"
          :location="edu.location"
          stamp="GRADUATED" />
      </CaseFileSection>

      <CaseFileSection :section="employment">
        <AboutVerifiedRow
          v-for="(exp, index) in experience"
          :key="exp.company"
          :title="`${exp.position} @ ${exp.company}`"
          :period="exp.period"
          :location="exp.location"
          :description="exp.description"
          :stamp-delay="0.2 + index * STAMP_STAGGER_S" />
      </CaseFileSection>

      <CaseFileSection :section="equipment">
        <AboutSkills />
      </CaseFileSection>

      <CaseFileNotes :section="notes" />

      <CaseFileContact :section="contact" />

      <CaseFileSignoff />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { RESUME_DOCX_PATH, RESUME_PDF_PATH } from "~/utils/constants/resume";
import { EMAIL, LINKEDIN_LINK } from "~/utils/constants/socials";

// Available resume formats
const resumeFormats = ref<ResumeFormat[]>([
  {
    type: "PDF",
    icon: "i-codicon-file-pdf",
    link: RESUME_PDF_PATH,
  },
  {
    type: "DOCX",
    icon: "i-simple-icons-microsoftword",
    link: RESUME_DOCX_PATH,
  },
]);
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Let's Connect</h2>
    <p class="mb-6">Interested in collaboration or have questions? Download my resume or reach out directly!</p>

    <div class="flex flex-wrap justify-center gap-4 mb-6">
      <!-- Resume download buttons -->
      <UButton
        v-for="format in resumeFormats"
        :key="format.type"
        :to="format.link"
        size="lg"
        color="primary"
        :variant="format.type === 'PDF' ? 'solid' : 'outline'"
        target="_blank">
        <template #leading>
          <UIcon :name="format.icon" />
        </template>
        Download {{ format.type }}
      </UButton>

      <!-- Contact buttons -->
      <UButton
        :to="EMAIL"
        size="lg"
        icon="i-lucide-mail"
        color="secondary">
        Email Me
      </UButton>
      <UButton
        :to="LINKEDIN_LINK"
        target="_blank"
        size="lg"
        icon="i-logos-linkedin-icon"
        variant="outline">
        LinkedIn
      </UButton>
    </div>
  </div>
</template>

<style scoped>
/* Using parent section's animation */
</style>

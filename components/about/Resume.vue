<script setup lang="ts">
// Available resume formats
const resumeFormats = ref<ResumeFormat[]>([
  {
    type: "PDF",
    icon: "i-codicon-file-pdf",
    link: "/files/Pouyan_Norouzi_Resume.pdf",
  },
  {
    type: "DOCX",
    icon: "i-simple-icons-microsoftword",
    link: "/files/Pouyan_Norouzi_Resume.docx",
  },
]);

// Track download clicks
const trackDownload = (formatType: string): void => {
  // This could be connected to analytics in the future
  console.log(`Resume downloaded in ${formatType} format`);
};
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
        target="_blank"
        @click="trackDownload(format.type)">
        <template #leading>
          <UIcon :name="format.icon" />
        </template>
        Download {{ format.type }}
      </UButton>

      <!-- Contact buttons -->
      <UButton
        to="mailto:pouyannorouzii@gmail.com"
        size="lg"
        icon="i-lucide-mail"
        color="secondary">
        Email Me
      </UButton>
      <UButton
        to="https://www.linkedin.com/in/pouyan-norouzi/"
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

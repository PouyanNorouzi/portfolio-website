<script setup lang="ts">
import { CASE_FILE_SECTIONS } from "~/utils/constants/case-file";
</script>

<template>
  <CaseFileSection :section="CASE_FILE_SECTIONS[6]!">
    <div class="flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
      <p class="max-w-xl flex-1 basis-80 leading-relaxed text-pretty">
        Subject is self-directed, curious about how things work underneath, and willing to build the
        hard version to find out. Recommend further contact.
      </p>
      <CaseFileStamp class="mx-3 my-2 px-3.5 py-1.5 text-2xl tracking-widest">
        APPROVED
      </CaseFileStamp>
    </div>
  </CaseFileSection>
</template>

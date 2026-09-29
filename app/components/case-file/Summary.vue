<script setup lang="ts">
import { CASE_FILE_SECTIONS } from "~/utils/constants/case-file";
</script>

<template>
  <CaseFileSection :section="CASE_FILE_SECTIONS[0]!">
    <p class="leading-relaxed text-pretty">
      Subject graduated from BCIT in December 2025 with a Computer Systems Diploma, specializing in
      cloud computing. Training combined theoretical foundations with practical field work across
      the full development stack. Now builds software after hours, most notably
      <CaseFileRedacted>a complete database engine in C</CaseFileRedacted>, instead of installing
      one.
    </p>
    <CaseFileLabel>// HOVER OR TAP REDACTED LINES TO REVEAL</CaseFileLabel>
  </CaseFileSection>
</template>

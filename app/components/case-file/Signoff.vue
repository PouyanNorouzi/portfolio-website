<script setup lang="ts">
const dates = useCaseFileDates();
</script>

<template>
  <section
    class="flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-t-4 border-double border-default pt-7">
    <div class="flex flex-col gap-1">
      <span class="-rotate-3 origin-bottom-left font-hand text-4xl leading-none text-highlighted">
        Agent C.
      </span>
      <span class="mt-1 w-48 border-t border-muted" />
      <CaseFileLabel>REVIEWING AGENT · FIELD OFFICE BC</CaseFileLabel>
    </div>
    <CaseFileStamp
      class="border-double px-4 py-2 text-center font-name text-xl leading-tight font-bold tracking-widest">
      FILE CLOSED
      <span class="block font-mono text-xs font-normal tracking-widest">{{ dates.stamp }}</span>
    </CaseFileStamp>
    <div class="flex flex-col items-end gap-1">
      <div
        aria-hidden="true"
        class="h-11 w-48 bg-[repeating-linear-gradient(90deg,var(--ui-text-highlighted)_0_2px,transparent_2px_4px,var(--ui-text-highlighted)_4px_5px,transparent_5px_8px,var(--ui-text-highlighted)_8px_11px,transparent_11px_12px,var(--ui-text-highlighted)_12px_13px,transparent_13px_16px)]" />
      <span class="font-mono text-xs tracking-[0.25em] text-muted">{{ dates.barcode }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TerminalLine {
  kind: "command" | "output" | "success" | "error";
  text: string;
}

const SCRIPT: TerminalLine[] = [
  { kind: "command", text: "ssh pouyan@field-office-bc" },
  { kind: "output", text: "Connection established." },
  { kind: "command", text: "cat /case-files/PN-0013" },
  { kind: "error", text: "Permission denied: this file is classified." },
  { kind: "command", text: "sudo cat /case-files/PN-0013" },
  { kind: "success", text: "ACCESS GRANTED. Loading file..." },
  { kind: "command", text: "rm -rf embarrassing_stuff/" },
];

const TYPE_DELAY_MS = 15;
const LINE_DELAY_MS = 250;
const CLOSE_DELAY_MS = 800;

// Only the initial load of the site plays the boot screen. Navigating back to
// the home page later, or landing on another page first, never shows it.
const nuxtApp = useNuxtApp();
const booting = useState("case-file-booting", () => import.meta.server || !!nuxtApp.isHydrating);

const lines = ref<TerminalLine[]>([]);
const typing = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

const lineClass: Record<TerminalLine["kind"], string> = {
  command: "text-neutral-50",
  output: "text-neutral-400",
  success: "font-semibold text-primary",
  error: "text-error",
};

function close() {
  clearTimeout(timer);
  booting.value = false;
}

function typeLine(index: number) {
  const entry = SCRIPT[index];
  if (!entry) {
    typing.value = false;
    timer = setTimeout(close, CLOSE_DELAY_MS);
    return;
  }

  if (entry.kind !== "command") {
    lines.value.push(entry);
    timer = setTimeout(() => typeLine(index + 1), LINE_DELAY_MS);
    return;
  }

  typing.value = true;
  lines.value.push({ kind: "command", text: "" });
  let i = 0;
  const step = () => {
    i++;
    lines.value[lines.value.length - 1] = { kind: "command", text: entry.text.slice(0, i) };
    if (i < entry.text.length) {
      timer = setTimeout(step, TYPE_DELAY_MS);
    } else {
      typing.value = false;
      timer = setTimeout(() => typeLine(index + 1), LINE_DELAY_MS);
    }
  };
  timer = setTimeout(step, TYPE_DELAY_MS);
}

function onKeydown() {
  close();
}

onMounted(() => {
  if (!booting.value) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    close();
    return;
  }
  window.addEventListener("keydown", onKeydown);
  typeLine(0);
});

// Stop the page behind the boot screen from scrolling while it is open.
useHead({
  bodyAttrs: {
    class: computed(() => (booting.value ? "overflow-hidden" : "")),
  },
});

onBeforeUnmount(() => {
  clearTimeout(timer);
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <Transition leave-active-class="transition-opacity duration-500" leave-to-class="opacity-0">
    <div
      v-if="booting"
      class="fixed inset-0 z-100 flex cursor-pointer items-center justify-center bg-neutral-950 p-4"
      role="presentation"
      @click="close">
      <div class="w-full max-w-2xl overflow-hidden rounded-md border border-neutral-800 shadow-lg">
        <div class="flex items-center bg-neutral-900 pl-4 text-neutral-400">
          <span class="flex-1 py-2 text-center font-sans text-sm font-medium">
            pouyan@field-office-bc: ~
          </span>
          <div class="flex">
            <UIcon name="i-lucide-minus" class="size-10 p-3 hover:bg-neutral-800" />
            <UIcon name="i-lucide-square" class="size-10 p-3.5 hover:bg-neutral-800" />
            <UIcon name="i-lucide-x" class="size-10 p-3 hover:bg-error hover:text-neutral-50" />
          </div>
        </div>
        <div
          class="min-h-72 space-y-1 px-3 py-3 font-mono text-sm leading-relaxed sm:text-base"
          aria-hidden="true">
          <div v-for="(line, index) in lines" :key="index" :class="lineClass[line.kind]">
            <template v-if="line.kind === 'command'">
              <span class="font-bold text-primary">pouyan@field-office-bc</span>
              <span class="text-neutral-50">:</span>
              <span class="font-bold text-info">~</span>
              <span class="mr-2 text-neutral-50">$</span>
            </template>
            {{ line.text }}
            <span
              v-if="typing && index === lines.length - 1"
              class="text-primary motion-safe:animate-pulse"
              >▌</span
            >
          </div>
        </div>
      </div>
      <span class="absolute bottom-6 font-mono text-xs tracking-widest text-neutral-500 uppercase">
        Click or press any key to skip
      </span>
    </div>
  </Transition>
  <h1 class="sr-only">Pouyan Norouzi's case file</h1>
</template>

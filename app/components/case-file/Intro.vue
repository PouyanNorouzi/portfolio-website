<script setup lang="ts">
import { CASE_FILE_BOOT_SCRIPT as SCRIPT } from "~/utils/constants/case-file";

const TYPE_DELAY_MS = 15;
const LINE_DELAY_MS = 250;
const CLOSE_DELAY_MS = 800;
// Remembers that the boot screen already played this browser session.
const BOOTED_KEY = "case-file-booted";

// Only the initial load of the site plays the boot screen. Navigating back to
// the home page later, or landing on another page first, never shows it.
const nuxtApp = useNuxtApp();
const booting = useState("case-file-booting", () => import.meta.server || !!nuxtApp.isHydrating);

// `full` is the line's final text. Lines are laid out at that width from the start (the part not
// typed yet is invisible), so a word never jumps to the next row mid-typing.
type BootLine = CaseFileTerminalLine & { full: string };
const lines = ref<BootLine[]>([]);
const layers = computed(() => [
  { ghost: true, lines: SCRIPT.map((line) => ({ ...line, text: "", full: line.text })) },
  { ghost: false, lines: lines.value },
]);
const typing = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

const lineClass: Record<CaseFileTerminalLine["kind"], string> = {
  command: "text-neutral-50",
  output: "text-neutral-400",
  success: "font-semibold text-primary",
  error: "text-error",
};

function close() {
  clearTimeout(timer);
  window.removeEventListener("keydown", close);
  booting.value = false;
  try {
    sessionStorage.setItem(BOOTED_KEY, "1");
  } catch {
    // Storage can be unavailable (e.g. blocked cookies); the boot screen just plays again.
  }
}

function typeLine(index: number) {
  const entry = SCRIPT[index];
  if (!entry) {
    typing.value = false;
    timer = setTimeout(close, CLOSE_DELAY_MS);
    return;
  }

  if (entry.kind !== "command") {
    lines.value.push({ ...entry, full: entry.text });
    timer = setTimeout(() => typeLine(index + 1), LINE_DELAY_MS);
    return;
  }

  typing.value = true;
  lines.value.push({ kind: "command", text: "", full: entry.text });
  let i = 0;
  const step = () => {
    i++;
    lines.value[lines.value.length - 1] = {
      kind: "command",
      text: entry.text.slice(0, i),
      full: entry.text,
    };
    if (i < entry.text.length) {
      timer = setTimeout(step, TYPE_DELAY_MS);
    } else {
      typing.value = false;
      timer = setTimeout(() => typeLine(index + 1), LINE_DELAY_MS);
    }
  };
  timer = setTimeout(step, TYPE_DELAY_MS);
}

onMounted(() => {
  if (!booting.value) return;
  if (
    document.documentElement.classList.contains(BOOTED_KEY) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    close();
    return;
  }
  window.addEventListener("keydown", close);
  typeLine(0);
});

// Stop the page behind the boot screen from scrolling while it is open. The
// boot screen is baked into the prerendered HTML, so hide it up front when it
// would never play: without JavaScript, with reduced motion, and when it
// already played this session (checked by an inline script before first paint).
useHead({
  bodyAttrs: {
    class: computed(() => (booting.value ? "overflow-hidden motion-reduce:overflow-auto" : "")),
  },
  script: [
    {
      innerHTML: `try{sessionStorage.getItem("${BOOTED_KEY}")&&document.documentElement.classList.add("${BOOTED_KEY}")}catch(e){}`,
    },
  ],
  style: [
    {
      innerHTML: `.${BOOTED_KEY} #case-file-intro{display:none}.${BOOTED_KEY} body{overflow:auto}`,
    },
  ],
  noscript: [{ innerHTML: "<style>#case-file-intro{display:none}body{overflow:auto}</style>" }],
});

onBeforeUnmount(() => {
  clearTimeout(timer);
  window.removeEventListener("keydown", close);
});
</script>

<template>
  <!-- The terminal is always dark, so it carries its own .dark class: that switches the
       color tokens (e.g. the prompt's green) to the terminal palette in paper mode too. -->
  <Transition leave-active-class="transition-opacity duration-500" leave-to-class="opacity-0">
    <div
      v-if="booting"
      id="case-file-intro"
      class="dark fixed inset-0 z-100 flex cursor-pointer items-center justify-center bg-neutral-950 p-4 motion-reduce:hidden"
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
        <!-- Both layers share one grid cell: the invisible one holds the whole script, so the window
             has its final height from the first paint instead of growing (and re-centering) as
             lines are typed and wrap. -->
        <div
          class="grid min-h-72 px-3 py-3 font-mono text-sm leading-relaxed sm:text-base"
          aria-hidden="true">
          <div
            v-for="layer in layers"
            :key="layer.ghost ? 'ghost' : 'typed'"
            class="col-start-1 row-start-1 space-y-1"
            :class="{ invisible: layer.ghost }">
            <div v-for="(line, index) in layer.lines" :key="index" :class="lineClass[line.kind]">
              <template v-if="line.kind === 'command'">
                <span class="font-bold text-primary">pouyan@field-office-bc</span>
                <span class="text-neutral-50">:</span>
                <span class="font-bold text-info">~</span>
                <span class="mr-2 text-neutral-50">$</span>
              </template>
              {{ line.text
              }}<span
                v-if="!layer.ghost && typing && index === lines.length - 1"
                class="inline-block w-0 overflow-visible text-primary motion-safe:animate-pulse"
                >▌</span
              ><span class="invisible">{{ line.full.slice(line.text.length) }}</span>
            </div>
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

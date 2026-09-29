<script setup lang="ts">
// `tilt` is the resting angle in degrees, `delay` holds the stamp back (in seconds)
// after it scrolls into view.
const { tilt = -8, delay = 0 } = defineProps<{ tilt?: number; delay?: number }>();

const { element, isVisible } = useInView();
const filterId = useId();
</script>

<template>
  <div
    ref="element"
    class="pointer-events-none relative rounded-sm border-4 border-error font-mono text-error opacity-0 mix-blend-multiply dark:mix-blend-normal"
    :class="{
      'motion-safe:animate-stamp-in motion-reduce:rotate-(--stamp-tilt) motion-reduce:opacity-90':
        isVisible,
    }"
    :style="{
      '--stamp-tilt': `${tilt}deg`,
      'animationDelay': `${delay}s`,
      'filter': `url(#${filterId})`,
    }">
    <!-- Roughens the edges and knocks speckles out of the ink, like a worn rubber stamp. -->
    <svg aria-hidden="true" class="absolute size-0">
      <filter :id="filterId" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="4" />
        <feDisplacementMap
          in="SourceGraphic"
          scale="2.5"
          xChannelSelector="R"
          yChannelSelector="G"
          result="rough" />
        <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="9" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -4 3.1"
          result="speckle" />
        <feComposite in="rough" in2="speckle" operator="in" />
      </filter>
    </svg>
    <slot />
  </div>
</template>

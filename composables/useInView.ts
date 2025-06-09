export function useInView(options?: IntersectionObserverInit) {
  const element = ref<HTMLElement | null>(null);
  const component = useTemplateRef<ComponentPublicInstance>("transitionElement");
  const isVisible = ref(false);

  let observer: IntersectionObserver;

  onMounted(() => {
    if (component.value) {
      element.value = component.value.$el;
    }

    observer = new IntersectionObserver(
      ([entry], observe) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observe.disconnect();
        }
      },
      options ?? { threshold: 0.1 }
    );

    if (element.value) {
      observer.observe(element.value);
    }
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return { element, isVisible };
}

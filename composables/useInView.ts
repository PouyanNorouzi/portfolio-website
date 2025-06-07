import { ref, onMounted, onBeforeUnmount } from "vue";

export function useInView(threshold = 0.1) {
  const element = ref<HTMLElement | null>(null);
  const component = useTemplateRef<ComponentPublicInstance>("transitionElement");
  const isVisible = ref(false);

  let observer: IntersectionObserver;

  onMounted(() => {
    if (component.value) {
      element.value = component.value.$el;
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          console.log("entry.isIntersecting", entry)
          observer.disconnect();
        }
      },
      { threshold }
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

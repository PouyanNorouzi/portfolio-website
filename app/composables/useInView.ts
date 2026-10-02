type Shared = { observer: IntersectionObserver; callbacks: Map<Element, () => void> };

// Dozens of components ask "is this on screen yet?" per page. One observer per option set is
// shared between them instead of one each, which keeps the allocations during hydration small.
const shared = new Map<string, Shared>();

function sharedFor(options: IntersectionObserverInit) {
  const key = JSON.stringify([options.rootMargin ?? "", options.threshold ?? 0]);
  let entry = shared.get(key);
  if (!entry) {
    const callbacks = new Map<Element, () => void>();
    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        callbacks.get(target)?.();
        callbacks.delete(target);
        observer.unobserve(target);
      }
    }, options);
    entry = { observer, callbacks };
    shared.set(key, entry);
  }
  return entry;
}

export function useInView(options?: IntersectionObserverInit | (() => IntersectionObserverInit)) {
  const element = ref<HTMLElement | null>(null);
  const component = useTemplateRef<ComponentPublicInstance>("transitionElement");
  const isVisible = ref(false);

  let watched: { entry: Shared; target: Element } | undefined;

  onMounted(() => {
    if (component.value) {
      element.value = component.value.$el;
    }
    if (!element.value) return;

    const resolved = (typeof options === "function" ? options() : options) ?? { threshold: 0.1 };
    const entry = sharedFor(resolved);
    entry.callbacks.set(element.value, () => {
      isVisible.value = true;
    });
    entry.observer.observe(element.value);
    watched = { entry, target: element.value };
  });

  onBeforeUnmount(() => {
    if (!watched) return;
    watched.entry.callbacks.delete(watched.target);
    watched.entry.observer.unobserve(watched.target);
  });

  return { element, isVisible };
}

import type { InjectionKey, Ref } from "vue";

interface RevealQueue {
  enqueue: (run: () => Promise<void>) => void;
  // True while any reveal is running or waiting its turn.
  busy: Readonly<Ref<boolean>>;
  // Once skipped, every reveal on the page finishes at once, including ones not yet reached.
  skipped: Readonly<Ref<boolean>>;
  skip: () => void;
}

const REVEAL_QUEUE: InjectionKey<RevealQueue> = Symbol("reveal-queue");

// Rows that scroll into view together reveal one after another, in the order they arrived,
// rather than all typing at once. The queue lives with the component that provides it, so a
// reveal cut short by leaving the page can't hold up the next visit.
export function provideRevealQueue(): RevealQueue {
  let tail = Promise.resolve();
  const pending = ref(0);
  const skipped = ref(false);

  const queue: RevealQueue = {
    enqueue(run) {
      pending.value++;
      tail = tail.then(run).finally(() => pending.value--);
    },
    busy: computed(() => pending.value > 0),
    skipped: readonly(skipped),
    skip: () => (skipped.value = true),
  };
  provide(REVEAL_QUEUE, queue);
  return queue;
}

// Without a provider, reveals simply run straight away.
export function useRevealQueue(): RevealQueue {
  return inject(REVEAL_QUEUE, {
    enqueue: (run) => void run(),
    busy: ref(false),
    skipped: ref(false),
    skip: () => {},
  });
}

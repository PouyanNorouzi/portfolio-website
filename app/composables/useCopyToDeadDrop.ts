// Copies text to the clipboard and confirms it with a toast.
export function useCopyToDeadDrop() {
  const toast = useToast();
  return async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast.add({
      title: "COPIED TO DEAD DROP",
      description: text,
      icon: "i-lucide-check",
      color: "success",
    });
  };
}

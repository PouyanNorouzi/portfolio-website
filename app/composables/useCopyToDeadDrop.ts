// Copies text to the clipboard and confirms it with a toast. The clipboard API is missing
// outside secure contexts and can be denied, so a failed copy says so instead of doing nothing.
export function useCopyToDeadDrop() {
  const toast = useToast();
  return async (text: string) => {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(text);
      toast.add({
        title: "COPIED TO DEAD DROP",
        description: text,
        icon: "i-lucide-check",
        color: "success",
      });
    } catch {
      toast.add({
        title: "DEAD DROP COMPROMISED",
        description: `Copy failed. Here it is by hand: ${text}`,
        icon: "i-lucide-x",
        color: "error",
      });
    }
  };
}

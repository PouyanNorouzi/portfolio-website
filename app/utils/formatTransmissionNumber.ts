// A blog post's number as shown on the site: "006" for /blog/6, in lists and on the post itself.
export function formatTransmissionNumber(num: number) {
  return String(num).padStart(3, "0");
}

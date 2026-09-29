interface PageSeoOptions {
  title: string;
  description: string;
  /** Site-relative image path, e.g. "/me/1.webp". Defaults to the portrait. */
  image?: string;
  type?: "website" | "article";
}

export function usePageSeo({
  title,
  description,
  image = "/me/1.webp",
  type = "website",
}: PageSeoOptions) {
  const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
  const ogImage = /^https?:\/\//.test(image)
    ? image
    : `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`;

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogType: type,
    twitterCard: "summary_large_image",
  });
}

interface PageSeoOptions {
  title: string;
  description: string;
  /** Site-relative image path, e.g. "/me/1.webp". Defaults to the case file preview card. */
  image?: string;
  type?: "website" | "article";
}

export function usePageSeo({ title, description, image, type = "website" }: PageSeoOptions) {
  // public/og-image.png is rendered from scripts/og-image.html at 1200x630.
  const useDefaultImage = !image;
  image ??= "/og-image.png";

  const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
  const pageUrl = `${siteUrl}${useRoute().path}`;
  const ogImage = /^https?:\/\//.test(image)
    ? image
    : `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`;

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ...(useDefaultImage && {
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogImageAlt: "Pouyan Norouzi's case file: software developer, open to work",
    }),
    ogType: type,
    ogUrl: pageUrl,
    twitterCard: "summary_large_image",
  });
  useHead({ link: [{ rel: "canonical", href: pageUrl }] });
}

import type { Metadata } from "next";
import { PRODUCT, SITE } from "@/lib/config";

// Metadata for inner pages. Open Graph is set in full because Next.js does not merge it with the layout's.
export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const images = [
    { url: PRODUCT.image, width: 1122, height: 1402, alt: PRODUCT.imageAlt },
  ];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE.brand,
      title: `${title} | Pihu`,
      description,
      locale: "en_IN",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Pihu`,
      description,
      images: [PRODUCT.image],
    },
  };
}

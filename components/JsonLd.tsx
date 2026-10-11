import { FAQ, PRODUCT, SEO, SITE, SITE_URL } from "@/lib/config";

// Structured data (JSON-LD) helps Google and AI assistants understand the business.
export default function JsonLd() {
  const image = `${SITE_URL}/images/hero-v2.png`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE.brand,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo-v2.png`,
        email: SITE.email,
        telephone: `+${SITE.phone}`,
        slogan: "From Farm to Your Bowl.",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: `+${SITE.phone}`,
            email: SITE.email,
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE.brand,
        description: SEO.description,
        inLanguage: "en-IN",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Product",
        "@id": `${SITE_URL}/#product`,
        name: `${PRODUCT.name} – ${PRODUCT.pack}`,
        description: SEO.description,
        image,
        brand: { "@type": "Brand", name: SITE.brand },
        category: "Makhana (Fox Nuts)",
        weight: { "@type": "QuantitativeValue", value: 250, unitCode: "GRM" },
        offers: {
          "@type": "Offer",
          url: SITE_URL,
          price: PRODUCT.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@id": `${SITE_URL}/#organization` },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

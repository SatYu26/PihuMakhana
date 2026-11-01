// Structured data (JSON-LD) builders. They help Google and AI assistants understand the business.
import {
  BUSINESS,
  FAQ,
  LAST_UPDATED,
  PRODUCT,
  ROAST_STEPS,
  SITE,
  SITE_URL,
} from "@/lib/config";

const ORG_ID = `${SITE_URL}/#org`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PRODUCT_ID = `${SITE_URL}/#product`;
const url = (path: string) => `${SITE_URL}${path}`;
const city = {
  "@type": "City",
  name: BUSINESS.cityOfficial,
  alternateName: BUSINESS.city,
};
const phone = `+91-${SITE.phoneDisplay}`;

export const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE.brand,
  url: url("/"),
  logo: url("/images/logo-v2.png"),
  telephone: phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.cityOfficial,
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: [ city, { "@type": "Country", name: "India" } ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: phone,
    contactType: "sales",
    availableLanguage: "English",
  },
};

export const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: url("/"),
  name: SITE.brand,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
};

export const webPage = (path: string, name: string, about?: string) => ({
  "@type": "WebPage",
  "@id": `${url(path)}#webpage`,
  url: url(path),
  name,
  isPartOf: { "@id": WEBSITE_ID },
  ...(about ? { about: { "@id": about } } : {}),
  inLanguage: "en-IN",
  dateModified: LAST_UPDATED,
});

export const product = {
  "@type": "Product",
  "@id": PRODUCT_ID,
  name: PRODUCT.name,
  image: url(PRODUCT.image),
  description: `Raw ${PRODUCT.grade} phool makhana (fox nuts) sourced from growers in ${BUSINESS.origin}, sold in a ${PRODUCT.pack} pack. Sold raw, to be roasted or cooked before eating.`,
  brand: { "@type": "Brand", name: SITE.brand },
  category: "Makhana (Fox Nuts)",
  weight: { "@type": "QuantitativeValue", value: PRODUCT.grams, unitCode: "GRM" },
  countryOfOrigin: { "@type": "Country", name: "India" },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Grade", value: PRODUCT.grade },
    { "@type": "PropertyValue", name: "Form", value: "Raw" },
    { "@type": "PropertyValue", name: "Shelf life", value: PRODUCT.shelfLife },
  ],
  offers: {
    "@type": "Offer",
    url: url("/"),
    priceCurrency: "INR",
    price: String(PRODUCT.price),
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    areaServed: city,
    seller: { "@id": ORG_ID },
  },
};

export const faqPage = {
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const roastHowTo = {
  "@type": "HowTo",
  name: "How to roast raw makhana",
  description:
    "Roast raw makhana in a pan on low heat for about 5 to 8 minutes, stirring often, until each piece snaps easily.",
  totalTime: "PT8M",
  supply: [
    { "@type": "HowToSupply", name: "Raw makhana" },
    { "@type": "HowToSupply", name: "Ghee or oil (optional)" },
  ],
  tool: [ { "@type": "HowToTool", name: "Pan" } ],
  step: ROAST_STEPS.map((text, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    text,
  })),
};

export const breadcrumb = (path: string, name: string) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
    { "@type": "ListItem", position: 2, name, item: url(path) },
  ],
});

export const PRODUCT_REF = PRODUCT_ID;

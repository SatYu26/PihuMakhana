// Edit business details here. They are used across the whole site.
export const SITE = {
  brand: "Pihu Farm Fresh Makhana",
  // Digits only, with country code.
  phone: "917550264699", // used for Call and WhatsApp
  phoneDisplay: "7550264699",
  email: "satyamgoyal008@gmail.com",
};

// Set NEXT_PUBLIC_SITE_URL (e.g. https://yourdomain.com) when you deploy.
// Used for canonical links, sitemap, social previews and structured data.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pihufarmfresh.example"
).replace(/\/$/, "");

export const SEO = {
  title: "Pihu Farm Fresh Makhana | Royal King Makhana – From Farm to Your Bowl",
  description:
    "Buy Royal King Makhana (fox nuts) by Pihu Farm Fresh. Carefully sourced directly from farms, 250 g pack at ₹299. Order on WhatsApp, call or email. Retail and bulk enquiries welcome.",
  keywords: [
    "makhana",
    "fox nuts",
    "Royal King Makhana",
    "Pihu Farm Fresh Makhana",
    "buy makhana online",
    "makhana 250 g",
    "healthy snacks",
    "farm fresh makhana",
    "bulk makhana",
    "makhana price",
  ],
};

export const FAQ = [
  {
    q: "What is Royal King Makhana?",
    a: "Royal King Makhana is a premium makhana (fox nut) snack from Pihu Farm Fresh Makhana. It is carefully sourced directly from farms and is light, crunchy and tasty.",
  },
  {
    q: "What pack size and price are available?",
    a: "Royal King Makhana is available in a 250 g pack at a special price of ₹299 (MRP ₹499).",
  },
  {
    q: "How can I order?",
    a: "Order directly on WhatsApp or call 7550264699, or email satyamgoyal008@gmail.com. We confirm price, delivery and payment details with you.",
  },
  {
    q: "Do you accept retail and bulk enquiries?",
    a: "Yes. Retail and bulk enquiries are welcome. Message us on WhatsApp with the quantity you need.",
  },
  {
    q: "When can I enjoy makhana?",
    a: "Makhana suits tea-time cravings, family gatherings, office breaks and everyday snacking.",
  },
];

export const PRODUCT = {
  name: "Royal King Makhana",
  pack: "250 g pack",
  price: 299,
  mrp: 499,
};

export const waLink = (text: string) =>
  `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:+${SITE.phone}`;

export const mailLink = SITE.email
  ? `mailto:${SITE.email}?subject=${encodeURIComponent("Makhana order")}`
  : null;

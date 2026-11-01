// Edit business details here. They are used across the whole site.
export const SITE = {
  brand: "Pihu Farm Fresh Makhana",
  // Digits only, with country code.
  phone: "917550264699", // used for Call and WhatsApp
  phoneDisplay: "7550264699",
  email: "satyamgoyal008@gmail.com",
};

// Public website address. Override with NEXT_PUBLIC_SITE_URL if it ever changes.
// Used for canonical links, sitemap, social previews and structured data.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pihumakhana.store"
).replace(/\/$/, "");

// Date the facts on the site were last checked (YYYY-MM-DD).
export const LAST_UPDATED = "2026-11-02";

export const BUSINESS = {
  city: "Bangalore",
  cityOfficial: "Bengaluru",
  cityFull: "Bangalore (Bengaluru)",
  origin: "Darbhanga and Purnia, Bihar",
  replyTime: "1 business day",
};

export const PRODUCT = {
  name: "Raw Phool Makhana (Fox Nuts), 5+ Suta, 250 g",
  grade: "5+ suta",
  pack: "250 g",
  grams: 250,
  price: 299,
  mrp: 499,
  per100g: "₹119.60",
  shelfLife: "2 years from the date of manufacture",
  image: "/images/hero-v2.png",
  imageAlt: "Pihu Farm Fresh raw 5+ suta phool makhana 250 g pack",
};

export const SEO = {
  title: "Raw Phool Makhana 250 g (5+ Suta) | Bangalore | Pihu",
  description:
    "Raw phool makhana (fox nuts), 5+ suta, from Darbhanga and Purnia, Bihar. 250 g for ₹299, delivered in Bangalore (Bengaluru). Order on WhatsApp.",
  ogDescription:
    "Raw 5+ suta phool makhana from Darbhanga and Purnia, Bihar. 250 g for ₹299, delivered in Bangalore (Bengaluru).",
  keywords: [
    "raw makhana",
    "phool makhana",
    "fox nuts",
    "5+ suta makhana",
    "makhana Bangalore",
    "makhana Bengaluru",
    "buy makhana online Bangalore",
    "buy makhana online Bengaluru",
    "raw makhana Bengaluru",
    "Bihar makhana",
    "Darbhanga makhana",
    "Purnia makhana",
    "makhana 250 g price",
    "bulk makhana",
    "Pihu Farm Fresh Makhana",
  ],
};

export const PRODUCT_DETAILS: [ string, string ][] = [
  [ "Product", "Raw phool makhana (fox nuts)" ],
  [ "Form", "Raw, to be roasted or cooked before eating" ],
  [ "Grade", "5+ suta" ],
  [ "Pack size", "250 g (500 g and 1 kg on request)" ],
  [ "Origin", "Darbhanga and Purnia, Bihar" ],
  [ "Ingredients", "Makhana" ],
  [ "Shelf life", "2 years from the date of manufacture" ],
  [ "Storage", "Airtight container, cool and dry place" ],
  [ "Price", "₹299 per 250 g (MRP ₹499), ₹119.60 per 100 g" ],
  [ "Delivery", "Bangalore (Bengaluru); across India for bulk orders" ],
];

// Rows with `pending: true` are hidden until confirmed against the lab report or pack label.
export const NUTRITION: { name: string; value: string; pending?: boolean }[] = [
  { name: "Energy", value: "250 kcal", pending: true },
  { name: "Carbohydrate", value: "77.0 g" },
  { name: "of which sugars", value: "0.0 g" },
  { name: "Protein", value: "9.7 g" },
  { name: "Total fat", value: "0.1 g" },
  { name: "Calcium", value: "5.1 g", pending: true },
  { name: "Sodium", value: "0.0 mg" },
  { name: "Cholesterol", value: "0.0 mg" },
];

// Lab report name and date, or "Pack label". Shown under the nutrition table when set.
export const NUTRITION_SOURCE: string | null = null;

export const ROAST_STEPS = [
  "Heat a dry pan on low for one minute. Add a teaspoon of ghee or oil, or roast dry.",
  "Add the makhana in a single layer and stir every 30 to 60 seconds.",
  "Test one piece after 5 minutes. It should snap, not bend.",
  "Season after roasting with salt, pepper or chaat masala, then cool fully and store in an airtight container.",
];

export const REVIEWS = [
  {
    text: "The phool makhana size is big, clean, well-dried, and barely has any unpopped hard seeds.",
    author: "Ipsita Pati",
  },
];

// Elfsight Google Reviews widget ID. Set to null to show only the reviews above.
export const ELFSIGHT_REVIEWS_ID: string | null =
  "59d11132-bdfb-4ff5-ba7d-2c1583253fd2";

export const FAQ = [
  {
    q: "What is raw makhana?",
    a: "Raw makhana is fox nut (lotus seed) that has been popped and dried but not roasted or seasoned. You roast or cook it at home and add your own seasoning.",
  },
  {
    q: "Can I eat raw makhana directly?",
    a: "Our pack is sold raw and is meant to be roasted or cooked before eating. Dry roast it for about 5 to 8 minutes, or add it to a recipe such as kheer.",
  },
  {
    q: "What is phool makhana?",
    a: "Phool makhana is a common trade name for popped makhana, also called fox nuts. Ours is raw, 5+ suta and sourced from growers in Darbhanga and Purnia, Bihar.",
  },
  {
    q: "What does 5+ suta mean?",
    a: "Suta is a size grade used by makhana traders, and a higher number generally means larger puffs. Our pack is 5+ suta. Grading can differ between sellers.",
  },
  {
    q: "What is the price of a 250 g pack?",
    a: "A 250 g pack costs ₹299 (MRP ₹499), which is ₹119.60 per 100 g. 500 g and 1 kg orders are available on WhatsApp.",
  },
  {
    q: "Where can I buy raw makhana in Bangalore (Bengaluru)?",
    a: "You can order raw 5+ suta makhana from Pihu Farm Fresh Makhana on WhatsApp at 7550264699 for delivery across all of Bangalore (Bengaluru).",
  },
  {
    q: "Do you deliver outside Bangalore or sell in bulk?",
    a: "We deliver in Bangalore, and across India for bulk orders. Message us on WhatsApp with the quantity and delivery city and we will share a quote.",
  },
  {
    q: "Where does your makhana come from?",
    a: "We source it from growers in Darbhanga and Purnia, Bihar.",
  },
  {
    q: "What is the shelf life and how should I store it?",
    a: "Shelf life is 2 years from the date of manufacture. Store it in an airtight container in a cool, dry place.",
  },
  {
    q: "How do I roast makhana at home?",
    a: "Heat a pan on low, add makhana with an optional teaspoon of ghee, and stir for about 5 to 8 minutes until the pieces snap easily. Season after roasting, cool, and store in an airtight container.",
  },
  {
    q: "How do I order?",
    a: "Tap Order on WhatsApp or call 7550264699. We confirm availability, delivery charge and payment before dispatch, and reply within 1 business day.",
  },
  {
    q: "Is makhana eaten during vrat or fasting?",
    a: "Makhana is commonly eaten during fasts in India. If you follow specific fasting rules, check the ingredients of any seasoning you add.",
  },
];

export const PAGES = {
  roast: { path: "/how-to-roast-makhana", label: "How to roast" },
  bulk: { path: "/bulk-makhana", label: "Bulk orders" },
  about: { path: "/about", label: "About" },
};

export const waLink = (text: string) =>
  `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;

export const orderMessage = (size = "250 g", qty = "__", area = "__") =>
  `Hello, I would like to order raw 5+ suta makhana. Pack size: ${size}. Quantity: ${qty}. Delivery area: ${area}.`;

export const bulkMessage = (kg = "__", city = "__") =>
  `Hello, I want a bulk quote for raw 5+ suta makhana. Quantity: ${kg} kg. Delivery city: ${city}.`;

export const WA = {
  order: waLink(orderMessage()),
  largePack: waLink(
    "Hello, I would like a quote for raw 5+ suta makhana. Pack size: 500 g or 1 kg. Quantity: __. Delivery area: __.",
  ),
  bulk: waLink(bulkMessage()),
};

export const telLink = `tel:+${SITE.phone}`;

export const mailLink = SITE.email
  ? `mailto:${SITE.email}?subject=${encodeURIComponent("Makhana order")}`
  : null;

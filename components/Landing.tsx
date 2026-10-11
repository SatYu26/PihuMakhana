import Image from "next/image";
import OrderPanel from "@/components/OrderPanel";
import { FAQ, PRODUCT, SITE, mailLink, telLink, waLink } from "@/lib/config";

const btnGhost =
  "rounded-full border-2 border-green-800 bg-white px-6 py-3 font-bold text-green-800";
const btnWa = "rounded-full bg-[#25d366] px-6 py-3 font-bold text-white";

const WHY = [
  [
    "Direct from farms",
    "No middlemen, so you get great quality at a better value.",
  ],
  [
    "Carefully sourced",
    "Every batch is selected with care. Quality you can taste.",
  ],
  ["Tasty & healthy", "A light, crunchy snack for the whole family."],
  [
    "Easy ordering",
    "Just message, call or email us. We will confirm your order.",
  ],
];

export default function Landing() {
  const enquiry = waLink(
    "Hello, I would like to know more about Royal King Makhana.",
  );

  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between bg-green-900 px-[5%] py-3 text-white">
        <a href="#top" aria-label={SITE.brand}>
          <Image
            src="/images/logo-v2.png"
            alt={`${SITE.brand} logo`}
            width={800}
            height={510}
            preload
            className="h-12 w-auto rounded-lg bg-white p-1"
          />
        </a>
        <nav className="hidden gap-5 md:flex">
          <a href="#product">Product</a>
          <a href="#about">About</a>
          <a href="#why">Why us</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href={enquiry}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#25d366] px-4 py-2 text-sm font-bold"
        >
          WhatsApp
        </a>
      </header>

      <main id="top">
        <section className="grid items-center gap-8 bg-amber-50 px-[5%] py-12 md:grid-cols-2">
          <div>
            <p className="font-extrabold uppercase tracking-widest text-amber-600">
              Tasty &amp; Healthy
            </p>
            <h1 className="my-2 text-5xl font-extrabold leading-tight text-green-900">
              From Farm
              <br />
              to Your Bowl.
            </h1>
            <p className="text-lg">
              {PRODUCT.name} comes direct from farms, so you get great quality
              at a better value. Pure bliss in every bite!
            </p>
            <div className="my-5 flex flex-wrap gap-3">
              <a
                href={enquiry}
                target="_blank"
                rel="noopener noreferrer"
                className={btnWa}
              >
                Order Now on WhatsApp
              </a>
              <a href={telLink} className={btnGhost}>
                Call to order
              </a>
            </div>
            <p className="text-gray-600">Retail enquiries welcome.</p>
          </div>
          <Image
            src="/images/hero-v2.png"
            alt="Pihu Farm Fresh Royal King Makhana 250 g pack"
            width={1122}
            height={1402}
            preload
            sizes="(max-width: 768px) 100vw, 50vw"
            className="mx-auto max-h-[620px] w-auto rounded-2xl shadow-xl"
          />
        </section>

        <section id="product" className="px-[5%] py-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-green-900">
            Our Product
          </h2>
          <div className="mx-auto grid max-w-4xl overflow-hidden rounded-2xl shadow-xl md:grid-cols-2">
            <Image
              src="/images/showcase.png"
              alt="Royal King Makhana snack showcase"
              width={1122}
              height={1402}
              sizes="(max-width: 768px) 100vw, 450px"
              className="h-full w-full object-cover"
            />
            <div className="p-7">
              <h3 className="text-2xl font-bold text-green-900">
                {PRODUCT.name}
              </h3>
              <p className="mt-2">
                Carefully sourced. Quality you can taste. Light, crunchy and
                wholesome fox nuts for everyday snacking.
              </p>
              <p className="mt-2 text-gray-600">{PRODUCT.pack}</p>
              <p className="my-2 text-3xl">
                <del className="text-xl text-gray-400">₹{PRODUCT.mrp}</del>{" "}
                <strong className="text-green-800">₹{PRODUCT.price}</strong>
              </p>
              <OrderPanel />
            </div>
          </div>
        </section>

        <section id="about" className="px-[5%] py-16">
          <div className="mx-auto max-w-3xl space-y-4 text-lg">
            <h2 className="text-center text-3xl font-bold text-green-900">
              About Pihu Farm Fresh Makhana
            </h2>
            <p>
              Why pay more for quality when farm-fresh goodness can come
              straight to your bowl? 🌿
            </p>
            <p>
              Meet Pihu Farm Fresh Makhana, your everyday crunch with a royal
              touch. Carefully sourced directly from farms, our Royal King
              Makhana brings you quality snacking, delicious crunch, and better
              value in every pack. Because great snacking should feel special
              without stretching your budget.
            </p>
            <p>
              Enjoy premium makhana for your tea-time cravings, family
              gatherings, office breaks, or everyday snacking.
            </p>
            <ul className="space-y-1">
              <li>📦 Available in a 250 g pack</li>
              <li>💰 Special price: ₹{PRODUCT.price}</li>
              <li>📲 Order directly on WhatsApp: {SITE.phoneDisplay}</li>
              <li>🏪 Retail and bulk enquiries welcome.</li>
            </ul>
            <p className="font-bold text-green-900">
              Pihu Farm Fresh Makhana — From Farm to Your Bowl.
            </p>
          </div>
        </section>

        <section id="why" className="bg-amber-50 px-[5%] py-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-green-900">
            Why Pihu Farm Fresh?
          </h2>
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border-t-4 border-amber-500 bg-white p-5"
              >
                <h3 className="font-bold text-green-900">{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="px-[5%] py-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-green-900">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-3">
            {FAQ.map(({ q, a }) => (
              <details
                key={q}
                className="rounded-xl border border-green-800/20 p-4"
              >
                <summary className="cursor-pointer font-semibold text-green-900">
                  {q}
                </summary>
                <p className="mt-2">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-amber-50 px-[5%] py-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-green-900">
            How to Order
          </h2>
          <ol className="mx-auto mb-6 max-w-xl list-decimal pl-6 text-left">
            <li>
              Message us on WhatsApp, call, or email with the quantity you want.
            </li>
            <li>We confirm the price, delivery and payment details.</li>
            <li>Your makhana is packed and sent to you.</li>
          </ol>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={enquiry}
              target="_blank"
              rel="noopener noreferrer"
              className={btnWa}
            >
              WhatsApp
            </a>
            <a href={telLink} className={btnGhost}>
              Call
            </a>
            {mailLink && (
              <a href={mailLink} className={btnGhost}>
                Email
              </a>
            )}
          </div>
          <p className="mt-4 text-gray-600">
            WhatsApp &amp; Call: {SITE.phoneDisplay} · {SITE.email}
          </p>
          <p className="text-gray-600">Retail and bulk enquiries welcome.</p>
        </section>
      </main>

      <footer className="bg-green-900 p-5 text-center text-white">
        © {SITE.brand}. All rights reserved.
      </footer>
    </>
  );
}

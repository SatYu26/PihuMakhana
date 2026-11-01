import Image from "next/image";
import Link from "next/link";
import OrderBuilder from "@/components/OrderBuilder";
import Reviews from "@/components/Reviews";
import RoastTimer from "@/components/RoastTimer";
import {
  BUSINESS,
  FAQ,
  LAST_UPDATED,
  NUTRITION,
  NUTRITION_SOURCE,
  PAGES,
  PRODUCT,
  PRODUCT_DETAILS,
  ROAST_STEPS,
  SITE,
  WA,
  telLink,
} from "@/lib/config";

const FACTS = [
  "Raw",
  "5+ suta",
  "250 g",
  `₹${PRODUCT.price}`,
  `${BUSINESS.city} delivery`,
  `Reply within ${BUSINESS.replyTime}`,
];

const lastUpdatedLabel = new Date(
  `${LAST_UPDATED}T00:00:00Z`,
).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function Landing() {
  return (
    <>
      <section className="section" aria-labelledby="h1">
        <div className="wrap grid items-center gap-9 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 id="h1">{PRODUCT.name}</h1>
            <p className="max-w-[58ch] text-[1.1rem]">
              {SITE.brand} sells raw 5+ suta phool makhana (fox nuts) sourced
              from growers in {BUSINESS.origin}. A 250 g pack costs ₹
              {PRODUCT.price} (MRP ₹{PRODUCT.mrp}), or {PRODUCT.per100g} per 100
              g. It is sold raw, so you roast or cook it before eating. We
              deliver in {BUSINESS.cityFull}, and across India for bulk orders.
              Order on WhatsApp or call, and we reply within{" "}
              {BUSINESS.replyTime}.
            </p>
            <ul
              aria-label="Key facts"
              className="my-[18px] flex flex-wrap gap-2"
            >
              {FACTS.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-line bg-white px-3.5 py-1 text-[0.92rem]"
                >
                  {f}
                </li>
              ))}
            </ul>
            <div className="mb-2.5 mt-5 flex flex-wrap gap-3">
              <a
                className="btn btn-wa wa"
                href={WA.order}
                target="_blank"
                rel="noopener"
              >
                Order on WhatsApp
              </a>
              <a className="btn btn-line" href={telLink}>
                Call {SITE.phoneDisplay}
              </a>
            </div>
            <p className="fine">
              Tell us the pack size and your area. We confirm availability,
              delivery charge and payment before dispatch. Not sure how much to
              order? <a href="#order">Build your order</a>.
            </p>
          </div>
          <Image
            src={PRODUCT.image}
            alt={PRODUCT.imageAlt}
            width={1122}
            height={1402}
            preload
            sizes="(max-width: 768px) 100vw, 45vw"
            className="mx-auto max-h-[620px] w-auto"
          />
        </div>
      </section>

      <section
        id="details"
        className="section bg-shell"
        aria-labelledby="h-details"
      >
        <div className="wrap">
          <h2 id="h-details">Product details</h2>
          <div className="overflow-x-auto">
            <table className="data-table">
              <tbody>
                {PRODUCT_DETAILS.map(([k, v]) => (
                  <tr key={k}>
                    <th scope="row">{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fine mt-3">
            Last updated:{" "}
            <time dateTime={LAST_UPDATED}>{lastUpdatedLabel}</time>
          </p>
        </div>
      </section>

      <section id="nutrition" className="section" aria-labelledby="h-nutrition">
        <div className="wrap">
          <h2 id="h-nutrition">Nutrition per 100 g</h2>
          <div className="overflow-x-auto">
            <table className="data-table">
              <tbody>
                {NUTRITION.filter((n) => !n.pending).map((n) => (
                  <tr key={n.name}>
                    <th scope="row">{n.name}</th>
                    <td>{n.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {NUTRITION_SOURCE && (
            <p className="fine mt-3">Source: {NUTRITION_SOURCE}</p>
          )}
        </div>
      </section>

      <section className="section bg-shell" aria-labelledby="h-what">
        <div className="wrap grid items-start gap-9 md:grid-cols-2">
          <div>
            <h2 id="h-what">What is phool makhana?</h2>
            <p>
              Phool makhana is a common trade name for popped makhana, the
              puffed seed of the water plant <i>Euryale ferox</i>. It is also
              called fox nuts or gorgon nuts, and is often described as lotus
              seeds. It grows in ponds, and in India most of it comes from
              Bihar. After harvest the seeds are dried and popped into light,
              white puffs. Raw makhana has a mild taste and takes on the
              seasoning you add.
            </p>
          </div>
          <div>
            <h2>What does 5+ suta mean?</h2>
            <p>
              Suta is a size grade used by makhana traders, and a higher number
              generally means larger puffs. Our pack is 5+ suta. Grading differs
              between sellers, so compare photos and ask any seller for the puff
              size before you buy.
            </p>
          </div>
        </div>
      </section>

      <section id="roast" className="section" aria-labelledby="h-roast">
        <div className="wrap grid items-start gap-9 md:grid-cols-2">
          <div>
            <h2 id="h-roast">How to roast raw makhana</h2>
            <p>
              Heat a pan on low, add makhana with an optional teaspoon of ghee,
              and stir often for about 5 to 8 minutes, until each piece snaps
              easily. Times vary with the pan and the batch size.
            </p>
            <ol className="steps">
              {ROAST_STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p>
              <Link href={PAGES.roast.path}>Read the full roasting guide</Link>
            </p>
            <RoastTimer />
          </div>
          <div>
            <h2>Ways to use raw makhana</h2>
            <p>
              Raw makhana is commonly roasted as a snack, or cooked in kheer and
              curries. Our pack is raw and is meant to be roasted or cooked
              before eating.
            </p>
          </div>
        </div>
      </section>

      <section
        id="order"
        className="section bg-shell"
        aria-labelledby="h-order"
      >
        <div className="wrap grid items-start gap-9 md:grid-cols-2">
          <div>
            <h2 id="h-order">How to order</h2>
            <ol className="steps">
              <li>
                Tap Order on WhatsApp, or call {SITE.phoneDisplay}, and tell us
                the pack size, quantity and area.
              </li>
              <li>
                We confirm availability, delivery charge and payment details.
              </li>
              <li>
                We dispatch after payment is confirmed and deliver in{" "}
                {BUSINESS.city}.
              </li>
            </ol>
            <OrderBuilder />
            <div className="mb-2.5 mt-5 flex flex-wrap gap-3">
              <a
                className="btn btn-wa wa"
                href={WA.order}
                target="_blank"
                rel="noopener"
              >
                Order 250 g on WhatsApp
              </a>
              <a
                className="btn btn-line wa"
                href={WA.largePack}
                target="_blank"
                rel="noopener"
              >
                Ask for 500 g or 1 kg
              </a>
            </div>
          </div>
          <div>
            <h2>Delivery and bulk orders</h2>
            <p>
              We deliver across all of {BUSINESS.city}. For bulk orders we
              deliver across India. Send the quantity in kg and your delivery
              city on WhatsApp, and we reply with a quote within{" "}
              {BUSINESS.replyTime}.
            </p>
            <p>
              <a className="wa" href={WA.bulk} target="_blank" rel="noopener">
                Ask for a bulk quote on WhatsApp
              </a>
              {" · "}
              <Link href={PAGES.bulk.path}>Bulk order details</Link>
            </p>
          </div>
        </div>
      </section>

      <Reviews />

      <section id="faq" className="section bg-shell" aria-labelledby="h-faq">
        <div className="wrap">
          <h2 id="h-faq">Frequently asked questions</h2>
          <div className="mt-6 grid gap-3">
            {FAQ.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl border border-line border-l-4 border-l-pond bg-white px-5 py-4"
              >
                <h3 className="m-0 font-sans text-[1.08rem] font-bold text-pond">
                  {q}
                </h3>
                <p className="mb-0 mt-1.5 max-w-[68ch] text-ink">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

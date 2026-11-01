import Link from "next/link";
import BulkQuote from "@/components/BulkQuote";
import JsonLd from "@/components/JsonLd";
import {
  BUSINESS,
  PAGES,
  PRODUCT,
  PRODUCT_DETAILS,
  SITE,
  WA,
  telLink,
} from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";
import { PRODUCT_REF, breadcrumb, webPage } from "@/lib/schema";

const { path } = PAGES.bulk;
const TITLE = "Bulk Raw Phool Makhana (5+ Suta) | Delivery Across India";

export const metadata = pageMetadata(
  path,
  TITLE,
  "Buy raw 5+ suta phool makhana in bulk from Darbhanga and Purnia, Bihar. Delivery in Bangalore (Bengaluru) and across India for bulk orders. Send quantity and city on WhatsApp for a quote within 1 business day.",
);

export default function BulkPage() {
  return (
    <>
      <JsonLd
        graph={[
          webPage(path, TITLE, PRODUCT_REF),
          breadcrumb(path, "Bulk orders"),
        ]}
      />
      <section className="section" aria-labelledby="h1">
        <div className="wrap grid items-start gap-9 md:grid-cols-2">
          <div>
            <p className="fine">
              <Link href="/">Home</Link> › Bulk orders
            </p>
            <h1 id="h1">Bulk raw phool makhana, 5+ suta</h1>
            <p className="text-[1.1rem]">
              {SITE.brand} supplies raw 5+ suta phool makhana sourced from
              growers in {BUSINESS.origin}. We deliver across all of{" "}
              {BUSINESS.cityFull}, and across India for bulk orders. Send the
              quantity in kg and your delivery city on WhatsApp, and we reply
              with a quote within {BUSINESS.replyTime}.
            </p>
            <h2>How bulk ordering works</h2>
            <ol className="steps">
              <li>
                Send the quantity in kg and your delivery city on WhatsApp.
              </li>
              <li>
                We reply with a quote, including delivery charge, within{" "}
                {BUSINESS.replyTime}.
              </li>
              <li>We confirm payment details and dispatch after payment.</li>
            </ol>
            <p>
              Smaller orders: 250 g packs cost ₹{PRODUCT.price}, and 500 g and 1
              kg packs are available on request.{" "}
              <a
                className="wa"
                href={WA.largePack}
                target="_blank"
                rel="noopener"
              >
                Ask for 500 g or 1 kg
              </a>
              .
            </p>
          </div>
          <div>
            <BulkQuote />
            <p className="fine">
              Prefer to talk? Call <a href={telLink}>{SITE.phoneDisplay}</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-shell" aria-labelledby="h-spec">
        <div className="wrap">
          <h2 id="h-spec">Product specification</h2>
          <div className="overflow-x-auto">
            <table className="data-table">
              <tbody>
                {PRODUCT_DETAILS.filter(([k]) => k !== "Price").map(
                  ([k, v]) => (
                    <tr key={k}>
                      <th scope="row">{k}</th>
                      <td>{v}</td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
          <p className="fine mt-3">
            Grading differs between sellers. Ask us for photos of the puff size
            before you order. <Link href="/#faq">Read the FAQ</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

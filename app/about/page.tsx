import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  BUSINESS,
  PAGES,
  PRODUCT,
  SITE,
  WA,
  mailLink,
  telLink,
} from "@/lib/config";
import { breadcrumb, webPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

const { path } = PAGES.about;
const TITLE = "About Us | Raw Makhana from Darbhanga and Purnia, Bihar";

export const metadata = pageMetadata(
  path,
  TITLE,
  "Pihu Farm Fresh Makhana sells raw 5+ suta phool makhana sourced from growers in Darbhanga and Purnia, Bihar, delivered in Bangalore (Bengaluru) and across India for bulk orders.",
);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        graph={[
          { ...webPage(path, TITLE), "@type": "AboutPage" },
          breadcrumb(path, "About"),
        ]}
      />
      <section className="section" aria-labelledby="h1">
        <div className="wrap max-w-[760px]">
          <p className="fine">
            <Link href="/">Home</Link> › About
          </p>
          <h1 id="h1">About {SITE.brand}</h1>
          <p className="text-[1.1rem]">
            {SITE.brand} is based in {BUSINESS.cityFull}. We sell raw 5+ suta
            phool makhana (fox nuts) sourced from growers in {BUSINESS.origin},
            in 250 g packs, with 500 g and 1 kg on request.
          </p>

          <h2>What we sell</h2>
          <p>
            One product: {PRODUCT.name}, at ₹{PRODUCT.price} (MRP ₹{PRODUCT.mrp}
            ). It is sold raw, so you roast or cook it before eating.{" "}
            <Link href="/#details">See full product details</Link> or{" "}
            <Link href={PAGES.roast.path}>learn how to roast it</Link>.
          </p>

          <h2>Where it comes from</h2>
          <p>
            Our makhana comes from growers in {BUSINESS.origin}. In India most
            makhana comes from Bihar, where it grows in ponds. After harvest the
            seeds are dried and popped into light, white puffs.
          </p>

          <h2>How we work</h2>
          <ul className="list-disc pl-[1.2em]">
            <li>
              You order on WhatsApp or by phone. There is no online checkout.
            </li>
            <li>
              We confirm availability, delivery charge and payment before
              dispatch.
            </li>
            <li>
              We deliver across {BUSINESS.city}, and across India for{" "}
              <Link href={PAGES.bulk.path}>bulk orders</Link>.
            </li>
            <li>We reply within {BUSINESS.replyTime}.</li>
          </ul>

          <h2>Contact</h2>
          <p>
            WhatsApp and call: <a href={telLink}>{SITE.phoneDisplay}</a>
            {mailLink && (
              <>
                <br />
                Email: <a href={mailLink}>{SITE.email}</a>
              </>
            )}
          </p>
          <a
            className="btn btn-wa wa"
            href={WA.order}
            target="_blank"
            rel="noopener"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

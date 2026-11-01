import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import RoastTimer from "@/components/RoastTimer";
import { PAGES, PRODUCT, ROAST_STEPS, WA } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumb, roastHowTo, webPage } from "@/lib/schema";

const { path } = PAGES.roast;
const TITLE = "How to Roast Raw Makhana at Home (5 to 8 Minutes)";

export const metadata = pageMetadata(
  path,
  TITLE,
  "Roast raw phool makhana in a pan on low heat for about 5 to 8 minutes, stirring often, until each piece snaps. Steps, a roast timer and storage tips.",
);

export default function RoastGuidePage() {
  return (
    <>
      <JsonLd
        graph={[
          webPage(path, TITLE),
          roastHowTo,
          breadcrumb(path, "How to roast makhana"),
        ]}
      />
      <section className="section" aria-labelledby="h1">
        <div className="wrap grid items-start gap-9 md:grid-cols-2">
          <div>
            <p className="fine">
              <Link href="/">Home</Link> › How to roast makhana
            </p>
            <h1 id="h1">How to roast raw makhana</h1>
            <p className="text-[1.1rem]">
              Heat a pan on low, add makhana with an optional teaspoon of ghee,
              and stir often for about 5 to 8 minutes, until each piece snaps
              easily. Times vary with the pan and the batch size.
            </p>
            <h2>What you need</h2>
            <ul className="list-disc pl-[1.2em]">
              <li>Raw makhana</li>
              <li>A pan</li>
              <li>A teaspoon of ghee or oil (optional)</li>
              <li>Salt, pepper or chaat masala to season (optional)</li>
            </ul>
            <h2>Steps</h2>
            <ol className="steps">
              {ROAST_STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
          <div>
            <RoastTimer />
            <h2>How to tell it is done</h2>
            <p>
              Test one piece after 5 minutes. It should snap, not bend. If it
              bends, roast for another minute and test again.
            </p>
            <h2>Storing roasted makhana</h2>
            <p>
              Season after roasting, then cool fully and store in an airtight
              container. Unroasted makhana has a shelf life of{" "}
              {PRODUCT.shelfLife} when kept in an airtight container in a cool,
              dry place.
            </p>
            <h2>Other ways to use raw makhana</h2>
            <p>
              Raw makhana is commonly roasted as a snack, or cooked in kheer and
              curries. Our pack is raw and is meant to be roasted or cooked
              before eating.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-shell" aria-labelledby="h-buy">
        <div className="wrap">
          <h2 id="h-buy">Get raw 5+ suta makhana</h2>
          <p>
            {PRODUCT.name}, ₹{PRODUCT.price} (MRP ₹{PRODUCT.mrp}).{" "}
            <Link href="/#details">See product details</Link>.
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

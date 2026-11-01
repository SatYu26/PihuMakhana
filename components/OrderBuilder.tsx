"use client";

import { useRef, useState } from "react";
import { BUSINESS, PRODUCT, orderMessage, waLink } from "@/lib/config";
import { track } from "@/lib/track";

// Grams of raw makhana per person, a planning estimate. Edit to match your own kitchen test.
const USES = [
  { grams: 30, label: "Roasted snack" },
  { grams: 20, label: "Kheer" },
  { grams: 40, label: "Fasting-day meal or snack" },
];
const SIZES = [
  { value: "250 g", label: `250 g (₹${PRODUCT.price})` },
  { value: "500 g", label: "500 g (price on WhatsApp)" },
  { value: "1 kg", label: "1 kg (price on WhatsApp)" },
];
const clamp = (v: string, max: number) =>
  Math.max(1, Math.min(max, parseInt(v, 10) || 1));

export default function OrderBuilder() {
  const [people, setPeople] = useState("4");
  const [grams, setGrams] = useState(USES[0].grams);
  const [size, setSize] = useState("250 g");
  const [qty, setQty] = useState("1");
  const [area, setArea] = useState("");
  const builderRef = useRef<HTMLDivElement>(null);

  const need = clamp(people, 100) * grams;
  const packs = Math.max(1, Math.ceil(need / PRODUCT.grams));
  const q = clamp(qty, 50);

  const summary =
    `${q} x ${size} raw 5+ suta makhana. ` +
    (size === "250 g"
      ? `Total: ₹${(PRODUCT.price * q).toLocaleString("en-IN")} (₹${PRODUCT.price} per pack). Delivery charge confirmed on WhatsApp.`
      : "Price confirmed on WhatsApp.");

  const applyHelper = () => {
    setSize("250 g");
    setQty(String(Math.min(50, packs)));
    track("helper_apply");
    builderRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <div className="tool">
        <h3>How much do I need?</h3>
        <label htmlFor="qh-people">
          Number of people
          <input
            id="qh-people"
            type="number"
            min={1}
            max={100}
            inputMode="numeric"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </label>
        <label htmlFor="qh-use">
          Use
          <select
            id="qh-use"
            value={grams}
            onChange={(e) => setGrams(Number(e.target.value))}
          >
            {USES.map((u) => (
              <option key={u.label} value={u.grams}>
                {u.label}
              </option>
            ))}
          </select>
        </label>
        <p role="status" aria-live="polite" className="fine">
          About {need} g of raw makhana, which is {packs} x 250 g pack
          {packs > 1 ? "s" : ""}. Planning estimate only, based on {grams} g of
          raw makhana per person. Adjust to taste.
          {packs >= 4 &&
            " For larger amounts, ask for 500 g or 1 kg on WhatsApp."}
        </p>
        <button type="button" className="btn btn-line" onClick={applyHelper}>
          Use this in the order builder
        </button>
      </div>

      <div className="tool" id="order-builder" ref={builderRef}>
        <h3>Build your order</h3>
        <label htmlFor="ob-size">
          Pack size
          <select
            id="ob-size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            {SIZES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="ob-qty">
          Quantity
          <input
            id="ob-qty"
            type="number"
            min={1}
            max={50}
            inputMode="numeric"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </label>
        <label htmlFor="ob-area">
          Your area in {BUSINESS.city}
          <input
            id="ob-area"
            type="text"
            autoComplete="off"
            placeholder="Locality or pincode"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </label>
        <p role="status" aria-live="polite" className="fine">
          {summary}
        </p>
        <a
          className="btn btn-wa wa"
          href={waLink(orderMessage(size, String(q), area.trim() || "__"))}
          target="_blank"
          rel="noopener"
        >
          Send this order on WhatsApp
        </a>
      </div>
    </>
  );
}

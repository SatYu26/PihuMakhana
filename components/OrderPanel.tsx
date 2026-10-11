"use client";

import { useState } from "react";
import { PRODUCT, mailLink, telLink, waLink } from "@/lib/config";

export default function OrderPanel() {
  const [qty, setQty] = useState(1);
  const total = qty * PRODUCT.price;
  const message = `Hello, I want to order ${qty} x ${PRODUCT.name} (${PRODUCT.pack}) at ₹${PRODUCT.price} each (total ₹${total}). Please confirm availability and delivery.`;

  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="font-medium">Quantity</span>
        <div className="flex items-center rounded-full border border-green-800">
          <button
            type="button"
            aria-label="Decrease quantity"
            className="h-10 w-10 text-xl"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span className="w-8 text-center font-semibold">{qty}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            className="h-10 w-10 text-xl"
            onClick={() => setQty((q) => Math.min(20, q + 1))}
          >
            +
          </button>
        </div>
        <span className="ml-auto text-lg font-bold text-green-800">₹{total}</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#25d366] px-6 py-3 font-bold text-white"
        >
          Order on WhatsApp
        </a>
        <a href={telLink} className="rounded-full border-2 border-green-800 px-6 py-3 font-bold text-green-800">
          Call
        </a>
        {mailLink && (
          <a href={mailLink} className="rounded-full border-2 border-green-800 px-6 py-3 font-bold text-green-800">
            Email
          </a>
        )}
      </div>
    </div>
  );
}

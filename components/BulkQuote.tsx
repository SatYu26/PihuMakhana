"use client";

import { useState } from "react";
import { bulkMessage, waLink } from "@/lib/config";

export default function BulkQuote() {
  const [kg, setKg] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="tool">
      <h3>Request a bulk quote</h3>
      <label htmlFor="bq-kg">
        Quantity in kg
        <input
          id="bq-kg"
          type="number"
          min={1}
          inputMode="numeric"
          placeholder="For example, 5"
          value={kg}
          onChange={(e) => setKg(e.target.value)}
        />
      </label>
      <label htmlFor="bq-city">
        Delivery city
        <input
          id="bq-city"
          type="text"
          autoComplete="address-level2"
          placeholder="For example, Bangalore"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <a
        className="btn btn-wa wa"
        href={waLink(bulkMessage(kg.trim() || "__", city.trim() || "__"))}
        target="_blank"
        rel="noopener"
      >
        Send bulk request on WhatsApp
      </a>
    </div>
  );
}

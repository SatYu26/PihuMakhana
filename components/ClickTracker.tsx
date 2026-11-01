"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

// Sends a Google Analytics event when a WhatsApp, call or email link is clicked.
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (href.startsWith("https://wa.me/")) track("whatsapp_click");
      else if (href.startsWith("tel:")) track("call_click");
      else if (href.startsWith("mailto:")) track("email_click");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

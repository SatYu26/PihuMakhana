"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type ReactNode } from "react";

// Elfsight Google Reviews widget. `children` is shown until the widget renders.
export default function ElfsightReviews({
  widgetId,
  children,
}: {
  widgetId: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      if (el.offsetHeight > 80) {
        setLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
      <div
        ref={ref}
        className={`elfsight-app-${widgetId}`}
        data-elfsight-app-lazy
      />
      <div hidden={loaded}>{children}</div>
    </>
  );
}

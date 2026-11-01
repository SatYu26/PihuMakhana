declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Sends a Google Analytics event if the Google tag has loaded.
export function track(name: string) {
  try {
    window.gtag?.("event", name);
  } catch {}
}

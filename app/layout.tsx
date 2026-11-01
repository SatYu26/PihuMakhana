import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ClickTracker from "@/components/ClickTracker";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { PRODUCT, SEO, SITE, SITE_URL } from "@/lib/config";
import { organization, website } from "@/lib/schema";

// Google tag (Google Analytics) measurement ID.
const GA_ID = "G-FZ9LZ398QN";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1f3d36",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.title, template: "%s | Pihu" },
  description: SEO.description,
  keywords: SEO.keywords,
  applicationName: SITE.brand,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.brand,
    title: SEO.title,
    description: SEO.ogDescription,
    locale: "en_IN",
    images: [
      {
        url: PRODUCT.image,
        width: 1122,
        height: 1402,
        alt: PRODUCT.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.ogDescription,
    images: [PRODUCT.image],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className="antialiased">
      <body>
        <JsonLd graph={[organization, website]} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ClickTracker />
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}

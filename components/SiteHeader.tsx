import Image from "next/image";
import Link from "next/link";
import { PAGES, SITE, WA } from "@/lib/config";

const NAV = [
  { href: "/#details", label: "Details" },
  { href: PAGES.roast.path, label: PAGES.roast.label },
  { href: PAGES.bulk.path, label: PAGES.bulk.label },
  { href: PAGES.about.path, label: PAGES.about.label },
  { href: "/#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <>
      <a
        href="#main"
        className="absolute -left-[999px] z-50 bg-white p-2 focus:left-2 focus:top-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-20 border-b border-line bg-ivory/95 pt-[env(safe-area-inset-top,0)]">
        <div className="wrap flex h-[60px] items-center gap-[18px]">
          <Link href="/" aria-label={`${SITE.brand} home`}>
            <Image
              src="/images/logo-v2.png"
              alt={`${SITE.brand} logo`}
              width={800}
              height={519}
              preload
              className="h-11 w-auto"
            />
          </Link>
          <nav
            aria-label="Main"
            className="ml-auto hidden gap-[18px] text-[0.95rem] min-[821px]:flex"
          >
            {NAV.map(({ href, label }) => (
              <Link key={href} href={href} className="text-ink no-underline">
                {label}
              </Link>
            ))}
          </nav>
          <a
            className="btn btn-wa wa ml-auto min-[821px]:ml-0"
            href={WA.order}
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </a>
        </div>
      </header>
    </>
  );
}

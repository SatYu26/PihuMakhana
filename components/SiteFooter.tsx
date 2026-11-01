import Link from "next/link";
import { BUSINESS, PAGES, SITE, WA, mailLink, telLink } from "@/lib/config";

export default function SiteFooter() {
  return (
    <>
      <footer
        id="contact"
        className="bg-pond pb-[90px] pt-10 text-[0.95rem] text-[#e8efe9] [&_a]:text-white"
      >
        <div className="wrap grid gap-8 md:grid-cols-2">
          <address className="not-italic">
            <h2 className="mb-3 text-[1.4rem] text-white">Contact</h2>
            <p>
              <strong className="text-white">{SITE.brand}</strong>,{" "}
              {BUSINESS.cityFull}
              <br />
              WhatsApp and call: <a href={telLink}>{SITE.phoneDisplay}</a>
              {mailLink && (
                <>
                  <br />
                  Email: <a href={mailLink}>{SITE.email}</a>
                </>
              )}
              <br />
              We reply within {BUSINESS.replyTime}.
            </p>
          </address>
          <nav aria-label="Footer">
            <h2 className="mb-3 text-[1.4rem] text-white">Pages</h2>
            <ul className="grid gap-1.5">
              <li>
                <Link href="/">Raw makhana 250 g</Link>
              </li>
              {Object.values(PAGES).map(({ path, label }) => (
                <li key={path}>
                  <Link href={path}>{label}</Link>
                </li>
              ))}
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="wrap mt-8 border-t border-white/20 pt-5">
          <p className="mb-0">
            © {SITE.brand}. Raw phool makhana (fox nuts), 5+ suta, delivered in{" "}
            {BUSINESS.city}.
          </p>
        </div>
      </footer>
      <a
        className="btn btn-wa wa fixed bottom-[calc(16px+env(safe-area-inset-bottom,0px))] right-4 z-30 shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
        href={WA.order}
        target="_blank"
        rel="noopener"
        aria-label="Order on WhatsApp"
      >
        Order on WhatsApp
      </a>
    </>
  );
}

import JsonLd from "@/components/JsonLd";
import Landing from "@/components/Landing";
import { SEO } from "@/lib/config";
import { PRODUCT_REF, faqPage, product, webPage } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd
        graph={[webPage("/", SEO.title, PRODUCT_REF), product, faqPage]}
      />
      <Landing />
    </>
  );
}

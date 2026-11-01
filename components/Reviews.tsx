import ElfsightReviews from "@/components/ElfsightReviews";
import { ELFSIGHT_REVIEWS_ID } from "@/lib/config";
import { getReviews } from "@/lib/reviews";

const stars = (n: number) =>
  "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

export default async function Reviews() {
  const { reviews, source, rating, count, url } = await getReviews();

  const list = (
    <>
      {source === "google" && rating ? (
        <p className="fine">
          <span className="text-amber-600" aria-hidden="true">
            {stars(rating)}
          </span>{" "}
          {rating.toFixed(1)} out of 5
          {count ? ` from ${count} Google reviews` : " on Google"}.{" "}
          {url && (
            <a href={url} target="_blank" rel="noopener">
              Read all reviews or write one on Google
            </a>
          )}
        </p>
      ) : (
        <p className="fine">
          Reviews are customers’ own words and reflect individual experiences.
        </p>
      )}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {reviews.map((r) => (
          <blockquote
            key={r.author + r.text.slice(0, 20)}
            className="m-0 rounded-xl border border-line bg-white p-[22px] font-serif text-[1.08rem]"
          >
            {r.rating && (
              <p
                className="mb-1 font-sans text-amber-600"
                aria-label={`${r.rating} out of 5 stars`}
              >
                {stars(r.rating)}
              </p>
            )}
            <p className="mb-0">{r.text}</p>
            <footer className="mt-2 font-sans text-[0.92rem] text-muted">
              {r.authorUrl ? (
                <a href={r.authorUrl} target="_blank" rel="noopener">
                  {r.author}
                </a>
              ) : (
                r.author
              )}
              {source === "google"
                ? `, Google review${r.when ? ` · ${r.when}` : ""}`
                : ", customer"}
            </footer>
          </blockquote>
        ))}
      </div>
    </>
  );

  return (
    <section className="section" aria-labelledby="h-review">
      <div className="wrap">
        <h2 id="h-review">Customer reviews</h2>
        {ELFSIGHT_REVIEWS_ID ? (
          <ElfsightReviews widgetId={ELFSIGHT_REVIEWS_ID}>
            {list}
          </ElfsightReviews>
        ) : (
          list
        )}
      </div>
    </section>
  );
}

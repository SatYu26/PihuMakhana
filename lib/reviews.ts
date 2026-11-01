import { cacheLife } from "next/cache";
import { REVIEWS } from "@/lib/config";

export type Review = {
  author: string;
  text: string;
  rating?: number;
  when?: string;
  authorUrl?: string;
};

export type ReviewData = {
  reviews: Review[];
  source: "google" | "manual";
  rating?: number;
  count?: number;
  url?: string;
};

type PlaceResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: {
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: { displayName?: string; uri?: string };
  }[];
};

const manual: ReviewData = { reviews: REVIEWS, source: "manual" };

// Google reviews via the Places API (New), refreshed about once a day.
// Needs GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID; falls back to REVIEWS in lib/config.ts.
export async function getReviews(): Promise<ReviewData> {
  "use cache";
  cacheLife("days");

  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return manual;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        },
      },
    );
    if (!res.ok) return manual;
    const place = (await res.json()) as PlaceResponse;
    const reviews: Review[] = (place.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Google user",
        authorUrl: r.authorAttribution?.uri,
        text: r.text?.text ?? r.originalText?.text ?? "",
        rating: r.rating,
        when: r.relativePublishTimeDescription,
      }))
      .filter((r) => r.text);
    if (!reviews.length) return manual;
    return {
      reviews,
      source: "google",
      rating: place.rating,
      count: place.userRatingCount,
      url: place.googleMapsUri,
    };
  } catch {
    return manual;
  }
}

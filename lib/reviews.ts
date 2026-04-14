import { cache } from "react";

import { getTestimonials } from "@/lib/content";
import type { ReviewCollection, ReviewItem, Testimonial } from "@/lib/types";

const fallbackTestimonials: Testimonial[] = [
  {
    name: "Connect Google Reviews",
    quote:
      "Add GOOGLE_MAPS_API_KEY and GOOGLE_PLACE_ID to show live Google reviews here. If you prefer curated proof, publish testimonials from Sanity and the section can render those instead.",
    role: "Configuration note"
  }
];

type GoogleReviewsResponse = {
  googleMapsUri?: string;
  rating?: number;
  reviews?: Array<{
    authorAttribution?: {
      displayName?: string;
      uri?: string;
    };
    publishTime?: string;
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: {
      text?: string;
    };
  }>;
  reviewsUri?: string;
  userRatingCount?: number;
  writeAReviewUri?: string;
};

type GoogleReview = NonNullable<GoogleReviewsResponse["reviews"]>[number];

function formatReview(review: GoogleReview): ReviewItem | null {
  const text = review.text?.text?.trim();
  const authorName = review.authorAttribution?.displayName?.trim();

  if (!text || !authorName) {
    return null;
  }

  return {
    authorName,
    publishedLabel:
      review.relativePublishTimeDescription ??
      (review.publishTime ? new Date(review.publishTime).toLocaleDateString("en-US") : "Recent"),
    rating: review.rating ?? 5,
    sourceUrl: review.authorAttribution?.uri,
    text
  };
}

export const getReviews = cache(async (): Promise<ReviewCollection> => {
  const testimonials = await getTestimonials();
  const testimonialFallback = testimonials.length > 0 ? testimonials : fallbackTestimonials;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return {
      items: testimonialFallback,
      source: "testimonial"
    };
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "rating,userRatingCount,reviews,reviewsUri,writeAReviewUri,googleMapsUri"
      },
      next: {
        revalidate: 21600
      }
    });

    if (!response.ok) {
      throw new Error(`Google Places request failed with ${response.status}`);
    }

    const payload = (await response.json()) as GoogleReviewsResponse;
    const items = payload.reviews?.map(formatReview).filter(Boolean) as ReviewItem[] | undefined;

    if (!items || items.length === 0) {
      return {
        items: testimonialFallback,
        source: "testimonial"
      };
    }

    return {
      aggregateRating: payload.rating ?? 5,
      items: items.slice(0, 6),
      reviewCount: payload.userRatingCount ?? items.length,
      reviewsUrl: payload.reviewsUri ?? payload.googleMapsUri,
      source: "google",
      writeReviewUrl: payload.writeAReviewUri
    };
  } catch {
    return {
      items: testimonialFallback,
      source: "testimonial"
    };
  }
});

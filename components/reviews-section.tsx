import Link from "next/link";

import type { ReviewCollection } from "@/lib/types";

type ReviewsSectionProps = {
  reviews: ReviewCollection;
};

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="section section-surface">
      <div className="section-header">
        <div>
          <div className="eyebrow">Proof</div>
          <h2>Reputation that can come from Google or your own curated proof stack.</h2>
        </div>
        {reviews.source === "google" && reviews.reviewsUrl ? (
          <div className="button-row">
            <Link className="button-secondary" href={reviews.reviewsUrl} rel="noreferrer" target="_blank">
              Read all Google reviews
            </Link>
            {reviews.writeReviewUrl ? (
              <Link className="button" href={reviews.writeReviewUrl} rel="noreferrer" target="_blank">
                Leave a Google review
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>

      {reviews.source === "google" ? (
        <div className="review-summary">
          <div>
            <div className="review-score">{reviews.aggregateRating.toFixed(1)}</div>
            <p className="muted">Google rating across {reviews.reviewCount} published reviews.</p>
          </div>
          <p className="section-intro" style={{ maxWidth: "42rem" }}>
            Live reviews are fetched from the official Google Places API when credentials are connected, then cached for speed.
          </p>
        </div>
      ) : (
        <p className="section-intro">
          Add a Google Place ID to show live reviews here. Until then, this section stays honest and launch-ready instead of inventing proof.
        </p>
      )}

      <div className="review-grid">
        {reviews.source === "google"
          ? reviews.items.map((review) => (
              <article className="quote-card" key={`${review.authorName}-${review.publishedLabel}`}>
                <div className="quote-rating">{"★".repeat(Math.max(1, Math.round(review.rating)))}</div>
                <p>{review.text}</p>
                <footer>
                  <cite>{review.authorName}</cite>
                  <small>{review.publishedLabel}</small>
                </footer>
              </article>
            ))
          : reviews.items.map((item) => (
              <article className="quote-card" key={item.name}>
                <div className="quote-rating">Activation Ready</div>
                <p>{item.quote}</p>
                <footer>
                  <cite>{item.name}</cite>
                  <small>{item.role}</small>
                </footer>
              </article>
            ))}
      </div>
    </section>
  );
}

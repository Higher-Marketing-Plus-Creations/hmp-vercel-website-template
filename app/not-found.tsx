import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section section-surface">
      <div className="eyebrow">Not found</div>
      <h1 className="page-title">That page is outside the current marketing surface.</h1>
      <p className="section-intro">
        The route may have moved during the rebuild, or it may belong to a private workflow that is not part of the public site.
      </p>
      <div className="button-row">
        <Link className="button" href="/">
          Go home
        </Link>
        <Link className="button-secondary" href="/contact">
          Contact the team
        </Link>
      </div>
    </section>
  );
}

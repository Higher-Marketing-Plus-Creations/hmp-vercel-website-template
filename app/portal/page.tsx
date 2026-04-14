import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  description: "Provisioned portal access for existing Higher Marketing Plus clients.",
  noIndex: true,
  pathname: "/portal",
  title: "Portal | Higher Marketing Plus"
});

export default function PortalPage() {
  return (
    <>
      <PageHero
        actions={[
          { href: "/portal/login", label: "Request or verify access" },
          { href: "/contact", label: "Sales contact", tone: "secondary" }
        ]}
        breadcrumbs={[{ href: "/", label: "Home" }, { label: "Portal" }]}
        description="The portal remains a provisioned utility path. It is intentionally separate from the public SEO surface and is not designed to act like a public signup flow."
        eyebrow="Portal"
        title="Client access belongs here, not in the search-facing architecture."
      />
      <section className="grid-cards">
        <article className="content-card">
          <span className="meta-label">Indexing</span>
          <p>Portal routes are marked noindex so they stay helpful without competing with commercial pages.</p>
        </article>
        <article className="content-card">
          <span className="meta-label">Access model</span>
          <p>Workspaces are provisioned by the team. Public self-signup is intentionally not the default pattern here.</p>
        </article>
        <article className="content-card">
          <span className="meta-label">Next step</span>
          <p>Need access? Use the portal request form so the request can move into the right operational queue.</p>
        </article>
      </section>
    </>
  );
}

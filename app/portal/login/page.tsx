import type { Metadata } from "next";

import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  description: "Request provisioned client portal access from Higher Marketing Plus.",
  noIndex: true,
  pathname: "/portal/login",
  title: "Portal Access | Higher Marketing Plus"
});

export default function PortalLoginPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { href: "/portal", label: "Portal" }, { label: "Access" }]}
        description="Use this route when an existing or pending client needs workspace access. The form below forwards into a webhook-ready request path instead of creating public self-signup."
        eyebrow="Portal access"
        title="Provisioned access only, with a public request path that stays operationally controlled."
      />
      <section className="two-column">
        <article className="section section-surface">
          <div className="eyebrow">Request access</div>
          <LeadForm
            endpoint="/v1/platform/portal-access-request"
            fields={[
              { label: "Name", name: "contact_name", placeholder: "Primary contact", required: true },
              {
                label: "Email",
                name: "contact_email",
                placeholder: "client@example.com",
                required: true,
                type: "email"
              },
              { label: "Company", name: "company", placeholder: "Company name", required: true },
              {
                label: "Requested use case",
                name: "requested_use_case",
                placeholder: "What do you need access to or what should the workspace support?",
                required: true,
                rows: 6,
                type: "textarea"
              }
            ]}
            submitLabel="Request portal access"
            successMessage="Access request received. The team can now route it into the portal provisioning workflow."
          />
        </article>
        <article className="section section-surface">
          <div className="eyebrow">Why this is separate</div>
          <div className="detail-card">
            <span className="meta-label">Security + clarity</span>
            <p>Portal access stays provisioned so the public site can remain a marketing surface rather than a quasi-application shell.</p>
          </div>
          <div className="detail-card">
            <span className="meta-label">SEO impact</span>
            <p>Noindex utility pages keep the site focused on service and editorial intent instead of login intent.</p>
          </div>
          <div className="detail-card">
            <span className="meta-label">Operational fit</span>
            <p>The request route is webhook-ready, so approvals and CRM handoffs can happen without rebuilding the page itself.</p>
          </div>
        </article>
      </section>
    </>
  );
}

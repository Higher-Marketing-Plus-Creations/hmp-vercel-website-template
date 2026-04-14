import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  description:
    "Case studies are in development while Higher Marketing Plus prioritizes the main service and contact surfaces.",
  noIndex: true,
  pathname: "/case-studies",
  title: "Case Studies | Higher Marketing Plus"
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])} />
      <section className="section section-surface">
        <div className="eyebrow">Proof pages</div>
        <h1 className="page-title">Case studies are being prepared for launch.</h1>
        <p className="section-intro">
          The public site is focused on the core service and contact routes first. Once client-approved proof stories
          are ready, this section can go live without changing the rest of the architecture.
        </p>
      </section>
    </>
  );
}

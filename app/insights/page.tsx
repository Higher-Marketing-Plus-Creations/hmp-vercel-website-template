import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  description:
    "Editorial insights are in development while Higher Marketing Plus focuses indexing on the core commercial routes.",
  noIndex: true,
  pathname: "/insights",
  title: "Insights | Higher Marketing Plus"
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])} />
      <section className="section section-surface">
        <div className="eyebrow">Editorial</div>
        <h1 className="page-title">Insights are coming after the commercial pages are live.</h1>
        <p className="section-intro">
          This route stays out of the index until there is enough original content to support rankings and sales
          conversations without becoming a thin page.
        </p>
      </section>
    </>
  );
}

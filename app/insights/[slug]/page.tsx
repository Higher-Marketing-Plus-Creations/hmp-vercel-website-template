import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { getInsight, getInsights, getServices } from "@/lib/content";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/site-config";

type Params = Promise<{ slug: string }>;

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

export async function generateStaticParams() {
  const insights = await getInsights();
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) {
    return createMetadata({
      description: "Insight not found.",
      noIndex: true,
      pathname: `/insights/${slug}`,
      title: "Insight Not Found | Higher Marketing Plus"
    });
  }

  return createMetadata({
    description: insight.summary,
    pathname: `/insights/${insight.slug}`,
    title: `${insight.title} | Higher Marketing Plus`
  });
}

export default async function InsightDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const [insight, services] = await Promise.all([getInsight(slug), getServices()]);

  if (!insight) {
    notFound();
  }

  const relatedServices = services.filter((service) => insight.serviceSlugs.includes(service.slug));

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Insights", path: "/insights" },
        { name: insight.title, path: `/insights/${insight.slug}` }
      ])} />
      <JsonLd data={articleSchema(insight)} />
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { href: "/insights", label: "Insights" }, { label: insight.title }]}
        description={insight.summary}
        eyebrow={insight.category}
        meta={[formatDate(insight.publishedAt), insight.readTime]}
        title={insight.title}
      />
      <article className="section section-surface prose">
        {insight.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
      <section className="section section-surface">
        <div className="section-header">
          <div>
            <div className="eyebrow">Key takeaways</div>
            <h2>What this page should change in the way the site gets managed.</h2>
          </div>
        </div>
        <ul className="list">
          {insight.takeaways.map((takeaway) => (
            <li key={takeaway}>{takeaway}</li>
          ))}
        </ul>
      </section>
      {relatedServices.length > 0 ? (
        <section className="section">
          <div className="section-header">
            <div>
              <div className="eyebrow">Related services</div>
              <h2>Services connected to this editorial theme.</h2>
            </div>
          </div>
          <div className="grid-cards">
            {relatedServices.map((service) => (
              <Link className="card-link" href={`/services/${service.slug}`} key={service.slug}>
                <span className="meta-label">{service.label}</span>
                <h3>{service.title}</h3>
                <p className="muted">{service.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

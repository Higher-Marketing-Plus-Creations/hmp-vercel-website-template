import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { getCaseStudies, getCaseStudy, getServices } from "@/lib/content";
import { breadcrumbSchema, caseStudySchema } from "@/lib/seo";
import { createMetadata } from "@/lib/site-config";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    return createMetadata({
      description: "Case study not found.",
      noIndex: true,
      pathname: `/case-studies/${slug}`,
      title: "Case Study Not Found | Higher Marketing Plus"
    });
  }

  return createMetadata({
    description: caseStudy.summary,
    pathname: `/case-studies/${caseStudy.slug}`,
    title: `${caseStudy.title} | Higher Marketing Plus`
  });
}

export default async function CaseStudyDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const [caseStudy, services] = await Promise.all([getCaseStudy(slug), getServices()]);

  if (!caseStudy) {
    notFound();
  }

  const relatedServices = services.filter((service) => caseStudy.serviceSlugs.includes(service.slug));

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Case Studies", path: "/case-studies" },
        { name: caseStudy.title, path: `/case-studies/${caseStudy.slug}` }
      ])} />
      <JsonLd data={caseStudySchema(caseStudy)} />
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { href: "/case-studies", label: "Case Studies" }, { label: caseStudy.title }]}
        description={caseStudy.summary}
        eyebrow="Case study"
        title={caseStudy.title}
      />
      <section className="grid-cards">
        <article className="content-card">
          <span className="meta-label">Challenge</span>
          <p>{caseStudy.challenge}</p>
        </article>
        <article className="content-card">
          <span className="meta-label">Strategy</span>
          <p>{caseStudy.strategy}</p>
        </article>
        <article className="content-card">
          <span className="meta-label">Implementation</span>
          <p>{caseStudy.implementation}</p>
        </article>
        <article className="content-card">
          <span className="meta-label">Result</span>
          <p>{caseStudy.result}</p>
        </article>
      </section>
      <section className="section section-surface">
        <div className="section-header">
          <div>
            <div className="eyebrow">Highlights</div>
            <h2>What made the rollout work.</h2>
          </div>
        </div>
        <ul className="list">
          {caseStudy.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>
      {relatedServices.length > 0 ? (
        <section className="section">
          <div className="section-header">
            <div>
              <div className="eyebrow">Related services</div>
              <h2>Services that shaped this delivery pattern.</h2>
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

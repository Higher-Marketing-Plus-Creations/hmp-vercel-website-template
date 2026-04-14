import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { getLocation, getLocations, getServices } from "@/lib/content";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/site-config";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const location = await getLocation(slug);

  if (!location) {
    return createMetadata({
      description: "Location page not found.",
      noIndex: true,
      pathname: `/locations/${slug}`,
      title: "Location Not Found | Higher Marketing Plus"
    });
  }

  return createMetadata({
    description: location.summary,
    pathname: `/locations/${location.slug}`,
    title: `${location.title} | Higher Marketing Plus`
  });
}

export default async function LocationPage({ params }: { params: Params }) {
  const { slug } = await params;
  const [location, services] = await Promise.all([getLocation(slug), getServices()]);

  if (!location) {
    notFound();
  }

  const relatedServices = services.filter((service) => location.serviceSlugs.includes(service.slug));

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: location.title, path: `/locations/${location.slug}` }
      ])} />
      <JsonLd data={faqSchema(location.faq)} />
      <PageHero
        breadcrumbs={[{ href: "/", label: "Home" }, { label: location.title }]}
        description={location.summary}
        eyebrow="Location"
        title={location.title}
      />
      <section className="section section-surface">
        <p className="section-intro">{location.intro}</p>
      </section>
      {relatedServices.length > 0 ? (
        <section className="grid-cards">
          {relatedServices.map((service) => (
            <article className="content-card" key={service.slug}>
              <span className="meta-label">{service.label}</span>
              <h2>{service.title}</h2>
              <p className="muted">{service.summary}</p>
            </article>
          ))}
        </section>
      ) : null}
      <section className="section section-surface">
        <div className="section-header">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2>Local intent questions for this route.</h2>
          </div>
        </div>
        <div className="faq-list">
          {location.faq.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p className="muted">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

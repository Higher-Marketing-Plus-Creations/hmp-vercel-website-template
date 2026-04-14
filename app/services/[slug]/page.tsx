import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { MakeServicePage } from "@/components/make/service-pages";
import { getService, getServices, getSiteSettings } from "@/lib/content";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/site-config";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return createMetadata({
      description: "Service not found.",
      noIndex: true,
      pathname: `/services/${slug}`,
      title: "Service Not Found | Higher Marketing Plus"
    });
  }

  return createMetadata({
    description: service.seoDescription,
    pathname: `/services/${service.slug}`,
    title: service.seoTitle
  });
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const [service, settings] = await Promise.all([getService(slug), getSiteSettings()]);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` }
        ])}
      />
      <JsonLd data={serviceSchema(service)} />
      <MakeServicePage
        bookingUrl={settings.bookingUrl}
        contactEmail={settings.contactEmail}
        service={service}
        supportPhone={settings.supportPhone}
      />
    </>
  );
}

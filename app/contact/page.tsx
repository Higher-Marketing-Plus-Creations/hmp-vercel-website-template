import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { MakeContactAboutPage } from "@/components/make/contact-about-page";
import { getSiteSettings } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  description:
    "Tell Higher Marketing Plus about your project and get a strategy-first plan for websites, SEO, Google growth, and AI voice automation.",
  pathname: "/contact",
  title: "Contact | Higher Marketing Plus"
});

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <MakeContactAboutPage
        addressLabel={settings.addressLabel}
        bookingUrl={settings.bookingUrl}
        contactEmail={settings.contactEmail}
        serviceArea={settings.serviceArea}
        supportPhone={settings.supportPhone}
      />
    </>
  );
}

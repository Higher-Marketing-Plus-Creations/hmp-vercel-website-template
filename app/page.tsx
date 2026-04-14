import { JsonLd } from "@/components/json-ld";
import { MakeHomePage } from "@/components/make/home-page";
import { getSiteSettings } from "@/lib/content";
import { organizationSchema, websiteSchema } from "@/lib/seo";

export default async function HomePage() {
  const settings = await getSiteSettings();

  return (
    <>
      <JsonLd data={organizationSchema(settings)} />
      <JsonLd data={websiteSchema(settings)} />
      <MakeHomePage
        bookingUrl={settings.bookingUrl}
        contactEmail={settings.contactEmail}
        supportPhone={settings.supportPhone}
      />
    </>
  );
}

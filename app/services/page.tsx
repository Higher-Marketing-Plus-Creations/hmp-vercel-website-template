import type { Metadata } from "next";
import Link from "next/link";
import { Code, Phone, Search, Target } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { MakeFooter, MakeServiceNav } from "@/components/make/shared";
import { getServices, getSiteSettings } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  description:
    "Explore websites, local SEO, Google growth, and AI voice services from Higher Marketing Plus.",
  pathname: "/services",
  title: "Services | Higher Marketing Plus"
});

export default async function ServicesPage() {
  const [services, settings] = await Promise.all([getServices(), getSiteSettings()]);
  const iconMap = {
    "ai-voice-agents": Phone,
    development: Code,
    "google-experts": Target,
    "local-seo": Search
  } as const;

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <div className="min-h-screen bg-black text-white">
        <MakeServiceNav />

        <section className="bg-gradient-to-b from-black via-zinc-950 to-black px-6 pt-36 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-4 py-2">
                <span className="text-sm text-[#F59E0B]">Services</span>
              </div>
              <h1 className="mb-6 text-5xl tracking-tight md:text-7xl">
                <span className="block bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  One Agency. Every Tool.
                </span>
                <span className="block bg-gradient-to-r from-[#2196F3] to-[#F59E0B] bg-clip-text text-transparent">
                  Zero Excuses.
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-zinc-400">
                Websites, local SEO, Google visibility, and AI voice automation built to work together instead of
                competing for attention inside your business.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service) => {
                const Icon = iconMap[service.slug as keyof typeof iconMap] ?? Code;

                return (
                  <Link
                    className="group relative block rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-white/10"
                    href={`/services/${service.slug}`}
                    key={service.slug}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-6 inline-flex rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-amber-500/20 p-5 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-8 w-8 text-orange-400" />
                      </div>
                      <h2 className="mb-4 text-2xl text-white transition-colors group-hover:text-orange-400">
                        {service.title}
                      </h2>
                      <p className="mb-6 text-lg leading-relaxed text-zinc-400">{service.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.featureItems.slice(0, 3).map((item) => (
                          <span
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400"
                            key={item.title}
                          >
                            {item.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <MakeFooter
          bookingUrl={settings.bookingUrl}
          contactEmail={settings.contactEmail}
          supportPhone={settings.supportPhone}
        />
      </div>
    </>
  );
}

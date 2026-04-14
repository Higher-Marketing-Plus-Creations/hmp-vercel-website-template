import Image, { type StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";

import type { HeroMetric, Service } from "@/lib/types";
import {
  ArrowRight,
  Award,
  BarChart,
  CheckCircle2,
  Clock,
  Code,
  DollarSign,
  Gauge,
  Headphones,
  Lock,
  MapPin,
  Phone,
  RefreshCw,
  Search,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

import { MakeFooter, MakeServiceNav } from "@/components/make/shared";

import aiVoiceHero from "../../public/figma-assets/service-ai-voice-hero.jpg";
import developmentHero from "../../public/figma-assets/service-development-hero.jpg";
import googleHero from "../../public/figma-assets/service-google-hero.jpg";
import seoHero from "../../public/figma-assets/service-seo-hero.jpg";

const localHeroImages: Record<string, StaticImageData> = {
  "/figma-assets/service-ai-voice-hero.jpg": aiVoiceHero,
  "/figma-assets/service-development-hero.jpg": developmentHero,
  "/figma-assets/service-google-hero.jpg": googleHero,
  "/figma-assets/service-seo-hero.jpg": seoHero
};

function resolveHeroImage(src: string) {
  return localHeroImages[src] ?? src;
}

type Feature = {
  description: string;
  icon: LucideIcon;
  title: string;
};

type ProcessStep = {
  description: string;
  step: string;
  title: string;
};

type ServicePageProps = {
  bookingUrl: string;
  contactEmail: string;
  service: Service;
  supportPhone: string;
};

function ServiceHero({
  badge,
  buttonTone = "blue",
  ctaLabel,
  ctaUrl,
  description,
  imageClassName = "h-full w-full object-cover object-center",
  imageSrc,
  stats,
  title,
  titleAccent
}: {
  badge: string;
  buttonTone?: "amber" | "blue";
  ctaLabel: string;
  ctaUrl: string;
  description: string;
  imageClassName?: string;
  imageSrc: StaticImageData | string;
  stats?: HeroMetric[];
  title: string;
  titleAccent: string;
}) {
  const buttonClass =
    buttonTone === "amber"
      ? "from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] shadow-[#F59E0B]/50"
      : "from-[#2196F3] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1565C0] shadow-[#2196F3]/50";
  const badgeClass =
    buttonTone === "amber"
      ? "border-[#F59E0B]/20 bg-[#F59E0B]/10 text-[#F59E0B]"
      : "border-[#2196F3]/20 bg-[#2196F3]/10 text-[#2196F3]";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-28 md:pt-32">
      <div className="absolute inset-0 z-0">
        <Image alt="" className={imageClassName} fill placeholder={typeof imageSrc === "string" ? "empty" : "blur"} priority sizes="100vw" src={imageSrc} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,150,243,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.18),transparent_34%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black" />
      </div>
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <div className={`mb-6 inline-block rounded-full border px-4 py-2 backdrop-blur-sm ${badgeClass}`}>
          <span className="text-sm">{badge}</span>
        </div>

        <h1 className="mb-6 text-5xl tracking-tight md:text-7xl lg:text-8xl">
          <span className="block bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">{title}</span>
          <span className="mt-2 block bg-gradient-to-r from-[#2196F3] to-[#F59E0B] bg-clip-text text-transparent">
            {titleAccent}
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-zinc-300 md:text-2xl">{description}</p>

        <a
          className={`group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r px-8 py-5 text-lg text-white shadow-lg transition-all ${buttonClass}`}
          href={ctaUrl}
          rel="noreferrer"
          target="_blank"
        >
          {ctaLabel}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>

        {stats?.length ? (
          <div className="mt-16 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-md"
                key={`${stat.label}-${stat.value}`}
              >
                <div className="bg-gradient-to-r from-[#2196F3] to-[#F59E0B] bg-clip-text text-3xl font-semibold text-transparent">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-2">
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}

function StatementSection({ body, title }: { body: string; title: string }) {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl md:text-5xl">
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">{title}</span>
        </h2>
        <p className="text-xl leading-relaxed text-zinc-400">{body}</p>
      </div>
    </section>
  );
}

function FeatureGridSection({
  intro,
  items,
  title,
  tone = "amber"
}: {
  intro?: string;
  items: Feature[];
  title: string;
  tone?: "amber" | "blue";
}) {
  const iconTone =
    tone === "amber"
      ? "border-[#F59E0B]/30 bg-gradient-to-br from-[#F59E0B]/20 to-[#2196F3]/20 text-[#F59E0B]"
      : "border-[#2196F3]/30 bg-gradient-to-br from-[#2196F3]/20 to-[#F59E0B]/20 text-[#2196F3]";

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl md:text-5xl">
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">{title}</span>
        </h2>
        {intro ? <p className="mx-auto mb-16 max-w-3xl text-center text-xl text-zinc-400">{intro}</p> : null}

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20"
                key={item.title}
              >
                <div className="mb-4">
                  <div className={`inline-flex rounded-xl border p-3 ${iconTone}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NumberedProcessSection({ items, title }: { items: ProcessStep[]; title: string }) {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-4xl md:text-5xl">
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">{title}</span>
        </h2>

        <div className="space-y-8">
          {items.map((item) => (
            <div
              className="flex gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-[#2196F3]/30"
              key={item.step}
            >
              <div className="bg-gradient-to-r from-[#2196F3] to-[#F59E0B] bg-clip-text text-4xl font-bold text-transparent opacity-50">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-2xl text-white">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevelopmentServicePage({ bookingUrl, contactEmail, service, supportPhone }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <MakeServiceNav />
      <ServiceHero
        badge={service.heroEyebrow}
        buttonTone="amber"
        ctaLabel={service.heroCtaLabel}
        ctaUrl={service.heroCtaHref}
        description={service.heroDescription}
        imageClassName={service.heroImageClassName}
        imageSrc={resolveHeroImage(service.heroImage ?? "/figma-assets/service-development-hero.jpg")}
        title={service.heroTitle}
        titleAccent={service.heroAccent ?? service.title}
      />
      <StatementSection
        body="Most business websites are digital brochures. They exist. They don't perform. If your site isn't generating leads while you sleep, it's not a website — it's a missed opportunity."
        title="The Problem"
      />
      <FeatureGridSection
        intro="Every Higher Marketing+ website is custom-designed, conversion-focused, and built on a foundation that search engines love."
        items={[
          { description: "No templates. No shortcuts. Your brand, done right.", icon: Code, title: "Custom Design" },
          {
            description: "Over 60% of your visitors are on their phones. We build for them first.",
            icon: Gauge,
            title: "Mobile-First"
          },
          { description: "Slow sites lose customers. Ours don't.", icon: Shield, title: "Speed Optimized" },
          { description: "Rankings start at the code level.", icon: Search, title: "SEO-Ready Architecture" },
          { description: "Forms, CTAs, and flows designed to convert.", icon: RefreshCw, title: "Lead Capture Built In" },
          { description: "We don't build and disappear.", icon: Lock, title: "Ongoing Support" }
        ]}
        title="Built from Scratch. Built to Win."
      />
      <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">Proof Point</span>
          </h2>
          <blockquote className="text-2xl leading-relaxed text-zinc-300 italic">
            A great website isn&apos;t an expense. It&apos;s the hardest-working employee on your payroll — and it never
            calls in sick.
          </blockquote>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Our Development Approach
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                description:
                  "We build from the smallest screen up, ensuring perfect functionality on every device and viewport size.",
                title: "Mobile-First Development"
              },
              {
                description:
                  "Every line of code is optimized for speed. Fast sites rank better, convert higher, and keep visitors engaged.",
                title: "Performance Optimization"
              },
              {
                description:
                  "WCAG 2.1 compliant development ensures your site is usable by everyone, improving reach and SEO.",
                title: "Accessibility Standards"
              },
              {
                description:
                  "Thorough testing across all major browsers and devices to ensure consistent experiences everywhere.",
                title: "Browser Compatibility"
              },
              {
                description:
                  "Code structured to grow with your business—easy to add features, pages, and functionality later.",
                title: "Scalable Architecture"
              },
              {
                description:
                  "Clear documentation and training so you can manage content updates confidently on your own.",
                title: "Documentation & Training"
              }
            ].map((item) => (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm" key={item.title}>
                <h3 className="mb-3 text-xl text-white">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#2196F3] via-[#F59E0B] to-[#2196F3] opacity-30 blur transition duration-1000 group-hover:opacity-50" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-12">
              <h2 className="mb-6 text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  Let&apos;s Build Something That Actually Performs.
                </span>
              </h2>
              <p className="mb-8 text-xl text-zinc-400">Ready to get a website that works as hard as you do?</p>
              <a
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] px-10 py-5 text-lg text-white shadow-lg shadow-[#F59E0B]/50 transition-all hover:from-[#D97706] hover:to-[#B45309]"
                href={bookingUrl}
                rel="noreferrer"
                target="_blank"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <MakeFooter bookingUrl={bookingUrl} contactEmail={contactEmail} supportPhone={supportPhone} />
    </div>
  );
}

function LocalSeoServicePage({ bookingUrl, contactEmail, service, supportPhone }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <MakeServiceNav />
      <ServiceHero
        badge={service.heroEyebrow}
        buttonTone="blue"
        ctaLabel={service.heroCtaLabel}
        ctaUrl={service.heroCtaHref}
        description={service.heroDescription}
        imageClassName={service.heroImageClassName}
        imageSrc={resolveHeroImage(service.heroImage ?? "/figma-assets/service-seo-hero.jpg")}
        title={service.heroTitle}
        titleAccent={service.heroAccent ?? service.title}
      />
      <StatementSection
        body="Here's the truth about SEO: most agencies will rank you for keywords nobody searches and call it a win. We track revenue, leads, and real traffic — because those are the only numbers that matter to your business."
        title="The Reality Check"
      />
      <FeatureGridSection
        intro="What Our SEO Includes"
        items={[
          { description: "Dominate your city, your neighborhood, your market.", icon: MapPin, title: "Local SEO" },
          { description: "We fix what's broken under the hood.", icon: Search, title: "Technical SEO" },
          { description: "Content that ranks and converts, not just fills pages.", icon: Star, title: "Content Strategy" },
          { description: "Authority that Google trusts.", icon: TrendingUp, title: "Link Building" },
          { description: "We know exactly what it takes to beat them.", icon: Users, title: "Competitor Analysis" },
          { description: "Plain-English reports that show real progress.", icon: Award, title: "Monthly Reporting" }
        ]}
        title="Strategy First. Rankings Second. Revenue Always."
        tone="blue"
      />
      <NumberedProcessSection
        items={[
          {
            description:
              "Comprehensive analysis of your current rankings, online presence, and local competition to identify opportunities.",
            step: "01",
            title: "Local Market Audit"
          },
          {
            description:
              "Complete setup and optimization of your Google Business Profile with photos, posts, and strategic keywords.",
            step: "02",
            title: "Google Business Optimization"
          },
          {
            description:
              "Create and optimize listings on high-authority local directories with consistent business information.",
            step: "03",
            title: "Citation Building"
          },
          {
            description:
              "Optimize your website content, meta data, and schema markup for local search relevance and rankings.",
            step: "04",
            title: "On-Site Optimization"
          },
          {
            description:
              "Implement systems to consistently generate authentic reviews and build your online reputation.",
            step: "05",
            title: "Review Generation"
          },
          {
            description:
              "Track rankings, traffic, and conversions with monthly reports and continuous optimization.",
            step: "06",
            title: "Ongoing Monitoring"
          }
        ]}
        title="Our Local SEO Process"
      />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              We're Not Playing the Long Game. We're Winning It.
            </span>
          </h2>
          <p className="text-xl leading-relaxed text-zinc-400">
            SEO takes time — but the right strategy gets traction faster. We front-load the work, prioritize
            high-impact moves, and build momentum that compounds month over month.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#2196F3] via-[#F59E0B] to-[#2196F3] opacity-30 blur transition duration-1000 group-hover:opacity-50" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-12">
              <h2 className="mb-6 text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  Your Competitors Are Ranking. You Should Be Too.
                </span>
              </h2>
              <p className="mb-8 text-xl text-zinc-400">
                Get your free SEO audit and see exactly what it takes to dominate your market.
              </p>
              <a
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#1976D2] px-10 py-5 text-lg text-white shadow-lg shadow-[#2196F3]/50 transition-all hover:from-[#1976D2] hover:to-[#1565C0]"
                href={bookingUrl}
                rel="noreferrer"
                target="_blank"
              >
                Get My Free SEO Audit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <MakeFooter bookingUrl={bookingUrl} contactEmail={contactEmail} supportPhone={supportPhone} />
    </div>
  );
}

function AiVoiceServicePage({ bookingUrl, contactEmail, service, supportPhone }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <MakeServiceNav />
      <ServiceHero
        badge={service.heroEyebrow}
        buttonTone="amber"
        ctaLabel={service.heroCtaLabel}
        ctaUrl={service.heroCtaHref}
        description={service.heroDescription}
        imageClassName={service.heroImageClassName}
        imageSrc={resolveHeroImage(service.heroImage ?? "/figma-assets/service-ai-voice-hero.jpg")}
        stats={service.heroStats}
        title={service.heroTitle}
        titleAccent={service.heroAccent ?? service.title}
      />
      <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              The Problem You Know Too Well
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-xl leading-relaxed text-zinc-400">
            Every missed call is a missed customer. Every voicemail that goes unreturned is a lead that went somewhere
            else. Your competitors are responding faster — and winning because of it.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                description: "Of callers won't leave a voicemail—they just call your competitor",
                stat: "80%"
              },
              {
                description: "Of customers hang up if they can't reach a real person",
                stat: "67%"
              },
              {
                description: "Average value of a lost lead for service businesses",
                stat: "$1,000+"
              }
            ].map((item) => (
              <div
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
                key={item.stat}
              >
                <div className="mb-4 bg-gradient-to-r from-[#F59E0B] to-[#2196F3] bg-clip-text text-5xl font-bold text-transparent">
                  {item.stat}
                </div>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FeatureGridSection
        intro="What AI Receptionists Do"
        items={[
          { description: "No hold music. No missed calls. Ever.", icon: Phone, title: "Instant Call Answering" },
          {
            description: "Filters serious buyers from tire-kickers automatically.",
            icon: Headphones,
            title: "Lead Qualification"
          },
          { description: "Syncs with your calendar and books in real time.", icon: Clock, title: "Appointment Booking" },
          { description: "Answers your most common questions on the spot.", icon: Zap, title: "FAQ Handling" },
          { description: "The 11pm lead still gets a response.", icon: DollarSign, title: "After-Hours Coverage" },
          { description: "Every interaction logged and ready for follow-up.", icon: TrendingUp, title: "CRM Integration" }
        ]}
        title="Faster Than Human. Smarter Than a Script."
      />
      <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                This Isn't a Chatbot. This Is a Business Advantage.
              </span>
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-zinc-400">
              AI Receptionists aren&apos;t the robotic phone trees you&apos;ve hated for years. This is conversational,
              intelligent, and built around your specific business — so every customer interaction feels personal, even
              when it&apos;s automated.
            </p>
            <div className="grid gap-6 text-left md:grid-cols-2">
              {[
                {
                  benefit: "Save $40,000+ Per Year",
                  description: "Compared to hiring full-time reception staff"
                },
                {
                  benefit: "Capture 3-5x More Leads",
                  description: "By answering every call immediately"
                },
                {
                  benefit: "Increase Show-Up Rates",
                  description: "Automated reminders reduce no-shows by 60%"
                },
                {
                  benefit: "Scale Without Hiring",
                  description: "Handle 100 calls as easily as 10"
                }
              ].map((item) => (
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-6" key={item.benefit}>
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#F59E0B]" />
                  <div>
                    <div className="mb-1 font-medium text-white">{item.benefit}</div>
                    <div className="text-sm text-zinc-400">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Perfect For Service Businesses
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-xl text-zinc-400">
            AI Receptionists are ideal for businesses where every call is a potential customer.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "HVAC Companies",
              "Plumbing Services",
              "Contractors",
              "Law Firms",
              "Medical Offices",
              "Dental Practices",
              "Real Estate Agents",
              "Auto Repair Shops"
            ].map((industry) => (
              <div
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-[#F59E0B]/30"
                key={industry}
              >
                <p className="text-white">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NumberedProcessSection
        items={[
          {
            description:
              "We program the AI with your business information, services, pricing, and how you want calls handled.",
            step: "01",
            title: "Custom Training"
          },
          {
            description:
              "Connect your existing business number or get a new one—takes just minutes to set up.",
            step: "02",
            title: "Phone Integration"
          },
          {
            description: "Integrate with your scheduling system so the AI can book appointments in real-time.",
            step: "03",
            title: "Calendar Sync"
          },
          {
            description: "Start answering calls immediately. Monitor performance through an easy dashboard.",
            step: "04",
            title: "Go Live"
          },
          {
            description: "Regular updates and improvements based on call data and your feedback.",
            step: "05",
            title: "Continuous Optimization"
          }
        ]}
        title="Simple Setup, Powerful Results"
      />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#2196F3] via-[#F59E0B] to-[#2196F3] opacity-30 blur transition duration-1000 group-hover:opacity-50" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-12">
              <h2 className="mb-6 text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  Never Miss a Lead Again.
                </span>
              </h2>
              <p className="mb-8 text-xl text-zinc-400">
                See how an AI Receptionist can transform your business with a free demo.
              </p>
              <a
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] px-10 py-5 text-lg text-white shadow-lg shadow-[#F59E0B]/50 transition-all hover:from-[#D97706] hover:to-[#B45309]"
                href={bookingUrl}
                rel="noreferrer"
                target="_blank"
              >
                Book a Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <MakeFooter bookingUrl={bookingUrl} contactEmail={contactEmail} supportPhone={supportPhone} />
    </div>
  );
}

function GoogleExpertsServicePage({ bookingUrl, contactEmail, service, supportPhone }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <MakeServiceNav />
      <ServiceHero
        badge={service.heroEyebrow}
        buttonTone="amber"
        ctaLabel={service.heroCtaLabel}
        ctaUrl={service.heroCtaHref}
        description={service.heroDescription}
        imageClassName={service.heroImageClassName}
        imageSrc={resolveHeroImage(service.heroImage ?? "/figma-assets/service-google-hero.jpg")}
        title={service.heroTitle}
        titleAccent={service.heroAccent ?? service.title}
      />
      <StatementSection
        body="Your Google Business Profile is the first thing people see before they ever visit your website. Your Google Ads are either making you money or burning it. Most businesses have both set up wrong — and don't even know it."
        title="The Opportunity Most Businesses Miss"
      />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Every Corner of Google. Fully Covered.
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-xl text-zinc-400">What We Handle</p>

          <div className="mx-auto max-w-6xl space-y-12">
            {[
              {
                icon: MapPin,
                items: [
                  "Full profile optimization for maximum visibility",
                  "Review strategy to build trust and rankings",
                  "Post scheduling and local authority building",
                  "Map Pack domination for your service area"
                ],
                title: "Google Business Profile (GBP)"
              },
              {
                icon: Target,
                items: [
                  "Campaigns built for conversions, not just clicks",
                  "Continuous A/B testing and optimization",
                  "Budget management that eliminates waste",
                  "Transparent reporting on every dollar spent"
                ],
                title: "Google Ads (PPC)"
              },
              {
                icon: BarChart,
                items: [
                  "Full setup and configuration",
                  "Conversion tracking that actually tells you what's working",
                  "Data you can make decisions with"
                ],
                title: "Google Analytics & Tracking"
              }
            ].map((section) => {
              const Icon = section.icon;

              return (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm" key={section.title}>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="inline-flex rounded-xl border border-[#F59E0B]/30 bg-gradient-to-br from-[#F59E0B]/20 to-[#2196F3]/20 p-4">
                      <Icon className="h-8 w-8 text-[#F59E0B]" />
                    </div>
                    <h3 className="text-3xl text-white">{section.title}</h3>
                  </div>
                  <ul className="space-y-3 md:ml-20">
                    {section.items.map((item) => (
                      <li className="flex items-start gap-3 text-zinc-400" key={item}>
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F59E0B]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Google Business Profile Optimization
                </span>
              </h2>
              <p className="mb-6 text-lg text-zinc-400">
                Your Google Business Profile is often the first thing potential customers see when searching for
                services like yours in Joplin. We optimize every element to maximize visibility and conversions.
              </p>
              <p className="mb-6 text-lg text-zinc-400">
                From category selection and keyword optimization to review management and post scheduling, we handle
                everything to keep your profile active, accurate, and ranking high.
              </p>
              <p className="text-lg text-zinc-400">
                Most businesses set up their profile once and forget it. We continuously optimize to maintain top
                rankings and attract more customers.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Complete profile setup and verification",
                "Strategic category and keyword optimization",
                "Professional photos and video content",
                "Regular posts to boost engagement",
                "Review generation and response management",
                "Q&A monitoring and optimization",
                "Service area and hours optimization",
                "Performance tracking and reporting"
              ].map((item) => (
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4" key={item}>
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#F59E0B]" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 space-y-6 md:order-1">
              {[
                {
                  description: "Target high-intent searches where customers are ready to buy",
                  feature: "Keyword Research & Selection"
                },
                {
                  description: "Compelling ads that get clicks from qualified prospects",
                  feature: "Ad Copy & Extension Optimization"
                },
                {
                  description: "Maximize results while minimizing wasted ad spend",
                  feature: "Bid Strategy & Budget Management"
                },
                {
                  description: "Ensure clicks convert into leads and customers",
                  feature: "Landing Page Optimization"
                },
                {
                  description: "Track every lead, call, and sale back to specific ads",
                  feature: "Conversion Tracking Setup"
                },
                {
                  description: "Continuous testing and refinement to improve ROI",
                  feature: "Ongoing Optimization"
                }
              ].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6" key={item.feature}>
                  <div className="flex items-start gap-3">
                    <DollarSign className="mt-1 h-6 w-6 shrink-0 text-[#F59E0B]" />
                    <div>
                      <h3 className="mb-1 text-lg text-white">{item.feature}</h3>
                      <p className="text-sm text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-1 md:order-2">
              <h2 className="mb-6 text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Google Ads That Actually Convert
                </span>
              </h2>
              <p className="mb-6 text-lg text-zinc-400">
                Most businesses waste thousands on Google Ads because they don&apos;t know how to target the right
                keywords, write compelling ad copy, or optimize for conversions.
              </p>
              <p className="mb-6 text-lg text-zinc-400">
                We create and manage Google Ads campaigns that target high-intent searches, drive qualified traffic, and
                deliver measurable ROI—not just clicks and impressions.
              </p>
              <p className="text-lg text-zinc-400">
                Every campaign is built around your specific goals, whether that&apos;s phone calls, form submissions, or
                online sales.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Data-Driven Decision Making
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-xl text-zinc-400">
            Google Analytics shows you exactly how visitors find your site, what they do, and where they convert—so
            you can make informed decisions instead of guessing.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { description: "See which channels drive the most valuable visitors", metric: "Traffic Sources" },
              { description: "Understand how people navigate and interact with your site", metric: "User Behavior" },
              { description: "Track form submissions, calls, and purchases", metric: "Conversion Tracking" },
              { description: "Learn demographics, interests, and device usage", metric: "Audience Insights" },
              {
                description: "Identify which pages convert and which need work",
                metric: "Landing Page Performance"
              },
              { description: "Know which marketing efforts drive real results", metric: "Campaign Attribution" }
            ].map((item) => (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm" key={item.metric}>
                <div className="flex items-start gap-3">
                  <BarChart className="h-6 w-6 shrink-0 text-[#F59E0B]" />
                  <div>
                    <h3 className="mb-2 text-lg text-white">{item.metric}</h3>
                    <p className="text-sm text-zinc-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              We Don&apos;t Set It and Forget It.
            </span>
          </h2>
          <p className="text-xl leading-relaxed text-zinc-400">
            Every campaign we run is actively managed, tested, and optimized. Because a Google Ads account left alone
            is just a drain on your budget. We treat your ad spend like it&apos;s our own money — because your results are
            our reputation.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-zinc-950 to-black px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#2196F3] via-[#F59E0B] to-[#2196F3] opacity-30 blur transition duration-1000 group-hover:opacity-50" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-12">
              <h2 className="mb-6 text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  Ready to Own Your Market on Google?
                </span>
              </h2>
              <p className="mb-8 text-xl text-zinc-400">
                Get your free Google audit and see how we can transform your online presence.
              </p>
              <a
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] px-10 py-5 text-lg text-white shadow-lg shadow-[#F59E0B]/50 transition-all hover:from-[#D97706] hover:to-[#B45309]"
                href={bookingUrl}
                rel="noreferrer"
                target="_blank"
              >
                Let&apos;s Talk Google Strategy
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <MakeFooter bookingUrl={bookingUrl} contactEmail={contactEmail} supportPhone={supportPhone} />
    </div>
  );
}

export function MakeServicePage({ bookingUrl, contactEmail, service, supportPhone }: ServicePageProps) {
  switch (service.slug) {
    case "development":
      return <DevelopmentServicePage bookingUrl={bookingUrl} contactEmail={contactEmail} service={service} supportPhone={supportPhone} />;
    case "local-seo":
      return <LocalSeoServicePage bookingUrl={bookingUrl} contactEmail={contactEmail} service={service} supportPhone={supportPhone} />;
    case "ai-voice-agents":
      return <AiVoiceServicePage bookingUrl={bookingUrl} contactEmail={contactEmail} service={service} supportPhone={supportPhone} />;
    case "google-experts":
      return <GoogleExpertsServicePage bookingUrl={bookingUrl} contactEmail={contactEmail} service={service} supportPhone={supportPhone} />;
    default:
      return null;
  }
}

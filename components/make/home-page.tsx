"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Code,
  Lightbulb,
  Phone,
  Rocket,
  Search,
  Star,
  Target,
  TrendingUp
} from "lucide-react";

import { MakeHeader } from "@/components/make/header";
import { MakeFooter } from "@/components/make/shared";

type MakeHomePageProps = {
  bookingUrl: string;
  contactEmail: string;
  supportPhone: string;
};

const processSteps = [
  {
    description:
      "We dig deep into your business, competitors, and target audience. No guessing, just data-driven insights that inform everything we build.",
    icon: Search,
    id: 1,
    title: "Discovery & Research"
  },
  {
    description:
      "We create a custom roadmap designed specifically for your goals. This is where we map out exactly how we'll drive results for your business.",
    icon: Lightbulb,
    id: 2,
    title: "Strategy Development"
  },
  {
    description:
      "Our team executes your strategy with precision and expertise. Whether it's building, optimizing, or automating, we deliver solutions that drive real business growth.",
    icon: Code,
    id: 3,
    title: "Implementation"
  },
  {
    description:
      "We launch your solution with proper tracking, integrations, and monitoring in place. Then we optimize based on real performance data and user behavior.",
    icon: Rocket,
    id: 4,
    title: "Launch & Optimize"
  },
  {
    description:
      "We continuously improve your campaigns, rankings, and conversions. Monthly reporting keeps you in the loop on what's working and where we're heading next.",
    icon: TrendingUp,
    id: 5,
    title: "Growth & Scale"
  }
];

const serviceCards = [
  {
    description:
      "Custom websites built with modern technology. Fast, secure, and scalable solutions that grow with your business.",
    href: "/services/development",
    icon: Code,
    title: "Web Development"
  },
  {
    description:
      "Dominate local search results in Joplin and beyond. Get found by customers actively searching for your services.",
    href: "/services/local-seo",
    icon: Search,
    title: "Search Engine Optimization"
  },
  {
    description:
      "Master Google Business Profile, Ads, and Analytics to maximize your online visibility and attract more customers.",
    href: "/services/google-experts",
    icon: Target,
    title: "Google Experts"
  },
  {
    description:
      "Never miss a lead with 24/7 AI-powered phone agents that answer calls, qualify leads, and book appointments.",
    href: "/services/ai-voice-agents",
    icon: Phone,
    title: "Voice AI"
  }
];

const homeBullets = [
  "AI tools your competitors haven't heard of yet",
  "Real data behind every decision",
  "One team handling everything — websites, SEO, ads, and more",
  "Results you can actually measure"
];

const trustPoints = [
  {
    description: "You'll always know what we're working on and why it matters.",
    title: "Transparent Communication"
  },
  {
    description: "Every choice is backed by research and real performance metrics.",
    title: "Data-Driven Decisions"
  },
  {
    description: "We're not here to look pretty. We're here to drive business growth.",
    title: "Results-Focused Approach"
  }
];

export function MakeHomePage({ bookingUrl, contactEmail, supportPhone }: MakeHomePageProps) {
  const processSectionRef = useRef<HTMLElement | null>(null);
  const processStepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [processStepIntensity, setProcessStepIntensity] = useState(() => processSteps.map(() => 0));

  useEffect(() => {
    let frame = 0;

    const updateProcessStepIntensity = () => {
      const section = processSectionRef.current;

      if (!section) {
        setProcessStepIntensity((current) =>
          current.every((value) => value === 0) ? current : processSteps.map(() => 0)
        );
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) {
        setProcessStepIntensity((current) =>
          current.every((value) => value === 0) ? current : processSteps.map(() => 0)
        );
        return;
      }

      const viewportCenter = window.innerHeight * 0.5;
      const influenceRadius = Math.max(window.innerHeight * 0.28, 140);
      const nextIntensity = processSteps.map((_, index) => {
        const element = processStepRefs.current[index];

        if (!element) {
          return 0;
        }

        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);
        const normalized = 1 - distance / influenceRadius;

        return Math.max(0, Math.min(1, normalized));
      });

      setProcessStepIntensity((current) =>
        current.length === nextIntensity.length &&
        current.every((value, index) => Math.abs(value - nextIntensity[index]) < 0.02)
          ? current
          : nextIntensity
      );
    };

    const handleViewportChange = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateProcessStepIntensity);
    };

    handleViewportChange();
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      <MakeHeader bookingUrl={bookingUrl} />

      <div id="home">
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden" id="hero-section">
          <div className="absolute inset-0">
            <img
              alt="Higher Marketing Plus hero background"
              className="h-full w-full object-cover"
              fetchPriority="high"
              src="/figma-assets/home-hero.jpg"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
          </div>

          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px]" />

          <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
            <div className="mb-8 flex justify-center">
              <img
                alt="Higher Marketing Plus logo"
                className="h-auto w-64 md:w-80 lg:w-96"
                fetchPriority="high"
                src="/figma-assets/hmp-logo.png"
              />
            </div>

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2196F3] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2196F3]" />
              </span>
              <span className="text-sm text-zinc-300">Online</span>
            </div>

            <h1 className="mb-6 text-5xl tracking-tight md:text-7xl lg:text-8xl">
              <span className="block bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                See Your Business From a
              </span>
              <span className="block bg-gradient-to-r from-[#2196F3] to-[#F59E0B] bg-clip-text text-transparent">
                Different Altitude.
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
              Higher Marketing+ combines AI-powered tools, data-driven strategy, and full-service execution to grow
              your business faster than anything you&apos;ve tried before.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#1976D2] px-8 py-6 text-lg text-white shadow-lg shadow-[#2196F3]/50 transition-all hover:from-[#1976D2] hover:to-[#1565C0]"
                href="/contact"
              >
                See What&apos;s Possible
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                className="inline-flex items-center rounded-xl border border-[#F59E0B]/50 bg-[#F59E0B]/10 px-8 py-6 text-lg text-white backdrop-blur-sm transition-colors hover:bg-[#F59E0B]/20"
                href={bookingUrl}
                rel="noreferrer"
                target="_blank"
              >
                Book a Free Strategy Call
              </a>
            </div>

            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-12">
              {[
                "Websites That Convert",
                "Rank Where It Matters",
                "24/7 Call Coverage"
              ].map((item) => (
                <div className="text-center" key={item}>
                  <div className="bg-gradient-to-r from-[#2196F3] to-[#F59E0B] bg-clip-text text-lg text-transparent md:text-xl">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-2">
              <div className="h-2 w-1 rounded-full bg-white/60" />
            </div>
          </div>
        </section>
      </div>

      <div id="work">
        <section
          className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-24"
          ref={processSectionRef}
        >
          <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[#2196F3]/10 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block rounded-full border border-[#2196F3]/20 bg-[#2196F3]/10 px-4 py-2">
                <span className="text-sm text-[#2196F3]">Our Process</span>
              </div>
              <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  How We Deliver Results
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-zinc-400">
                A proven process that takes you from strategy to success. No fluff, just execution.
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const intensity = processStepIntensity[index] ?? 0;

                return (
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 56 }}
                    key={step.id}
                    ref={(element) => {
                      processStepRefs.current[index] = element;
                    }}
                    transition={{ delay: index * 0.06, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ amount: 0.3, once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    {index < processSteps.length - 1 ? (
                      <div className="absolute top-24 left-6 h-full w-0.5 overflow-hidden md:left-12">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#2196F3]/18 to-[#F59E0B]/18" />
                        <motion.div
                          animate={{ opacity: 0.12 + intensity * 0.6, scaleY: 0.7 + intensity * 0.3 }}
                          className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-[#2196F3] via-[#4DB2FF] to-[#F59E0B]"
                          initial={{ opacity: 0, scaleY: 0 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          viewport={{ amount: 0.25, once: true }}
                          whileInView={{ opacity: 0.22, scaleY: 1 }}
                        />
                      </div>
                    ) : null}

                    <div className="group relative mb-12 flex gap-6 md:gap-12">
                      <div className="relative shrink-0">
                        <motion.div
                          animate={{ opacity: 0.12 + intensity * 0.5, scale: 0.84 + intensity * 0.24 }}
                          className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#2196F3] to-[#F59E0B] blur-2xl"
                          initial={{ opacity: 0, scale: 0.7 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          viewport={{ amount: 0.25, once: true }}
                          whileInView={{ opacity: 0.22, scale: 0.88 }}
                        />
                        <motion.div
                          animate={{ borderColor: intensity > 0.55 ? '#7DD3FC' : '#2196F3', scale: 1 + intensity * 0.06 }}
                          className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#2196F3] bg-zinc-900 md:h-24 md:w-24"
                          initial={{ opacity: 0, rotate: -8, scale: 0.82 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          viewport={{ amount: 0.25, once: true }}
                          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        >
                          <Icon className="h-6 w-6 text-[#2196F3] md:h-10 md:w-10" />
                        </motion.div>
                      </div>

                      <div className="grow pt-2">
                        <div className="mb-3 flex items-start justify-between gap-4">
                          <motion.h3
                            animate={{ opacity: 0.78 + intensity * 0.22, x: intensity * 6 }}
                            className="text-2xl text-white md:text-3xl"
                            initial={{ opacity: 0, x: 18 }}
                            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ amount: 0.25, once: true }}
                            whileInView={{ opacity: 0.82, x: 0 }}
                          >
                            {step.title}
                          </motion.h3>
                          <motion.div
                            animate={{ opacity: 0.16 + intensity * 0.84, scale: 1 + intensity * 0.08 }}
                            className="bg-gradient-to-r from-[#2196F3]/20 to-[#F59E0B]/20 bg-clip-text text-5xl font-bold text-transparent md:text-6xl"
                            initial={{ opacity: 0, x: 24 }}
                            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ amount: 0.25, once: true }}
                            whileInView={{ opacity: 0.2, x: 0 }}
                          >
                            {step.id}
                          </motion.div>
                        </div>
                        <motion.p
                          animate={{ opacity: 0.64 + intensity * 0.36, y: 0 }}
                          className="max-w-2xl text-lg leading-relaxed text-zinc-400"
                          initial={{ opacity: 0, y: 18 }}
                          transition={{ duration: 0.3 }}
                          viewport={{ amount: 0.25, once: true }}
                          whileInView={{ opacity: 0.7, y: 0 }}
                        >
                          {step.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mx-auto mt-20 grid max-w-4xl gap-8 md:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
                  key={point.title}
                >
                  <CheckCircle className="mx-auto mb-3 h-8 w-8 text-[#2196F3]" />
                  <h4 className="mb-2 text-lg text-white">{point.title}</h4>
                  <p className="text-sm text-zinc-400">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="mb-4 text-zinc-400">Ready to start your project?</p>
              <Link
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#2196F3] to-[#1976D2] px-8 py-4 text-white shadow-lg shadow-[#2196F3]/50 transition-all hover:from-[#1976D2] hover:to-[#1565C0]"
                href="/contact"
              >
                Get Your Free Strategy Session
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div id="services">
        <section className="relative bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="mb-6 inline-block rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-4 py-2">
                <span className="text-sm text-[#F59E0B]">Our Services</span>
              </div>
              <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  One Agency. Every Tool. Zero Excuses.
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-zinc-400">
                We&apos;re not a boutique shop that does one thing well and hands you off. We&apos;re not a big agency
                that loses you in the shuffle. We&apos;re the team that shows up with enterprise-level technology and
                the hunger to use it for <em>your</em> business.
              </p>

              <div className="mx-auto mt-10 max-w-2xl space-y-3 text-left">
                {homeBullets.map((bullet) => (
                  <div className="flex items-start gap-3" key={bullet}>
                    <span className="mt-1 text-xl text-[#F59E0B]">✦</span>
                    <p className="text-lg text-zinc-400">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {serviceCards.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    className="group relative block cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-white/10"
                    href={service.href}
                    key={service.title}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-6">
                        <div className="inline-flex rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-amber-500/20 p-5 transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-8 w-8 text-orange-400" />
                        </div>
                      </div>

                      <h3 className="mb-4 text-2xl text-white transition-colors group-hover:text-orange-400">
                        {service.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-zinc-400">{service.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mx-auto mt-24 max-w-5xl">
              <h3 className="mb-12 text-center text-3xl md:text-4xl">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">Our Process</span>
              </h3>

              <div className="grid gap-8 md:grid-cols-4">
                {[
                  { desc: "Understand your business, goals, and ideal customers", step: "01", title: "Discovery" },
                  { desc: "Plan the structure, messaging, and user journey", step: "02", title: "Strategy" },
                  { desc: "Create and develop your high-converting website", step: "03", title: "Design & Build" },
                  { desc: "Deploy and continuously improve performance", step: "04", title: "Launch & Optimize" }
                ].map((phase, index) => (
                  <div className="relative" key={phase.step}>
                    {index < 3 ? (
                      <div className="absolute top-8 left-full hidden h-0.5 w-full bg-gradient-to-r from-orange-500/50 to-transparent md:block" />
                    ) : null}

                    <div className="mb-4 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-5xl text-transparent opacity-50">
                      {phase.step}
                    </div>
                    <h4 className="mb-2 text-xl text-white">{phase.title}</h4>
                    <p className="text-sm text-zinc-500">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="contact">
        <section className="relative overflow-hidden bg-gradient-to-b from-black to-zinc-950 px-6 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(33,150,243,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.15),transparent_50%)]" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <div className="mb-3 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star className="h-6 w-6 fill-[#F59E0B] text-[#F59E0B]" key={index} />
                ))}
              </div>
              <div className="text-sm text-zinc-400">Trusted by 50+ businesses in Joplin and beyond</div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#2196F3] via-[#F59E0B] to-[#2196F3] opacity-30 blur transition duration-1000 group-hover:opacity-50" />

              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-12 text-center">
                <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
                  <span className="block bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                    Your Competition Isn&apos;t Waiting. Neither Should You.
                  </span>
                </h2>

                <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-zinc-400">
                  The businesses winning right now made one move. They stopped doing marketing the old way. Let&apos;s
                  talk about what that looks like for you.
                </p>

                <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#1976D2] px-10 py-5 text-lg text-white shadow-lg shadow-[#2196F3]/50 transition-all hover:from-[#1976D2] hover:to-[#1565C0]"
                    href={bookingUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Your Free Call
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                <div className="mx-auto grid max-w-3xl gap-6 border-t border-white/10 pt-8 text-left md:grid-cols-3">
                  {[
                    { desc: "Just a strategy conversation", title: "Zero obligation" },
                    { desc: "Get actionable insights you can use", title: "30-minute deep dive" },
                    { desc: "Specific to your business goals", title: "Custom growth roadmap" }
                  ].map((item) => (
                    <div className="flex items-start gap-3" key={item.title}>
                      <div className="mt-1 rounded-full bg-[#2196F3]/20 p-1.5">
                        <div className="h-2 w-2 rounded-full bg-[#2196F3]" />
                      </div>
                      <div>
                        <div className="mb-1 text-sm text-white">{item.title}</div>
                        <div className="text-xs text-zinc-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60">
              {[
                { emoji: "🏆", label: "Proven Results" },
                { emoji: "⚡", label: "Fast Turnaround" },
                { emoji: "🔒", label: "100% Satisfaction" },
                { emoji: "💬", label: "Direct Partnership" }
              ].map((item) => (
                <div className="text-center" key={item.label}>
                  <div className="mb-1 text-2xl">{item.emoji}</div>
                  <div className="text-xs text-zinc-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <MakeFooter bookingUrl={bookingUrl} contactEmail={contactEmail} supportPhone={supportPhone} />
    </div>
  );
}

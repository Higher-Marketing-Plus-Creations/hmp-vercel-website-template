"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowDown,
  Award,
  Calendar,
  CheckCircle,
  ChevronDown,
  Heart,
  Mail,
  MapPin,
  Phone,
  Send,
  Star,
  Target,
  Zap
} from "lucide-react";

import { contactSkills, contactStats, contactValues } from "@/lib/content/local-data";
import { MakeFooter, MakeServiceNav } from "@/components/make/shared";

type MakeContactAboutPageProps = {
  addressLabel: string;
  bookingUrl: string;
  contactEmail: string;
  serviceArea: string;
  supportPhone: string;
};

type FormState = {
  email: string;
  message: string;
  name: string;
  phone: string;
  service: string;
};

const initialFormState: FormState = {
  email: "",
  message: "",
  name: "",
  phone: "",
  service: ""
};

const valueIcons = {
  "Continuous Improvement": Award,
  "Genuine Partnership": Heart,
  "Results First": Target,
  "Speed & Precision": Zap
};

export function MakeContactAboutPage({
  addressLabel,
  bookingUrl,
  contactEmail,
  serviceArea,
  supportPhone
}: MakeContactAboutPageProps) {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const telHref = `tel:${supportPhone.replace(/[^\d]/g, "")}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      const data = (await response.json().catch(() => null)) as { detail?: string } | null;

      if (!response.ok) {
        throw new Error(data?.detail ?? "Unable to submit your request right now.");
      }

      setSubmitted(true);
      setFormData(initialFormState);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <MakeServiceNav />

      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            alt="Office collaboration background"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1760611656615-db3fad24a314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb2xsYWJvcmF0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NTY1NDEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(33,150,243,0.13),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(245,158,11,0.10),transparent_55%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2196F3]/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2196F3] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2196F3]" />
              </span>
              <span className="text-sm text-zinc-300">Available for new projects</span>
            </div>
          </div>

          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl tracking-tight md:text-7xl lg:text-8xl">
              <span className="block bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Let&apos;s Build Something
              </span>
              <span className="mt-2 block bg-gradient-to-r from-[#2196F3] via-[#F59E0B] to-[#2196F3] bg-clip-text text-transparent">
                That Gets Results
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-zinc-400">
              Tell us about your project and we&apos;ll craft a strategy to elevate your online presence and drive real,
              measurable growth.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="flex flex-col gap-6 lg:col-span-2">
              {[
                {
                  color: "#2196F3",
                  href: `mailto:${contactEmail}`,
                  icon: Mail,
                  label: "Email Us",
                  value: contactEmail
                },
                {
                  color: "#F59E0B",
                  href: telHref,
                  icon: Phone,
                  label: "Call or Text",
                  value: supportPhone
                },
                {
                  color: "#2196F3",
                  icon: MapPin,
                  label: "Location",
                  value: serviceArea
                },
                {
                  color: "#F59E0B",
                  href: bookingUrl,
                  icon: Calendar,
                  label: "Book a Free Strategy Call",
                  value: "30 minutes · no obligation"
                }
              ].map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-1 shrink-0 rounded-xl border p-3"
                      style={{
                        background: `${item.color}18`,
                        borderColor: `${item.color}30`
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="mb-0.5 text-xs text-zinc-500">{item.label}</div>
                      <div className="text-white">{item.value}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/8"
                    href={item.href}
                    key={item.label}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5" key={item.label}>
                    {content}
                  </div>
                );
              })}

              <div className="mt-2 rounded-2xl border border-white/10 bg-gradient-to-br from-[#2196F3]/10 to-[#F59E0B]/10 p-5">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" key={index} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-zinc-300 italic">
                  &quot;Higher Marketing Plus completely transformed our online presence. Within 3 months we saw a 200%
                  increase in qualified leads.&quot;
                </p>
                <div className="mt-3 text-xs text-zinc-500">— Local Joplin Business Owner</div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="group relative">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#2196F3]/30 via-transparent to-[#F59E0B]/30 opacity-60 blur-sm" />
                <div className="relative rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur-sm md:p-10">
                  {!submitted ? (
                    <>
                      <h2 className="mb-1 text-2xl text-white">Send Us a Message</h2>
                      <p className="mb-8 text-sm text-zinc-500">We&apos;ll get back to you within 24 hours.</p>

                      <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-xs text-zinc-400">Full Name *</label>
                            <input
                              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all focus:border-[#2196F3]/50 focus:bg-white/8 focus:outline-none"
                              name="name"
                              onChange={handleChange}
                              placeholder="John Smith"
                              required
                              type="text"
                              value={formData.name}
                            />
                          </div>
                          <div>
                            <label className="mb-2 block text-xs text-zinc-400">Email Address *</label>
                            <input
                              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all focus:border-[#2196F3]/50 focus:bg-white/8 focus:outline-none"
                              name="email"
                              onChange={handleChange}
                              placeholder="john@company.com"
                              required
                              type="email"
                              value={formData.email}
                            />
                          </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-xs text-zinc-400">Phone Number</label>
                            <input
                              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all focus:border-[#2196F3]/50 focus:bg-white/8 focus:outline-none"
                              name="phone"
                              onChange={handleChange}
                              placeholder="(417) 555-0000"
                              type="tel"
                              value={formData.phone}
                            />
                          </div>
                          <div>
                            <label className="mb-2 block text-xs text-zinc-400">Service Interested In</label>
                            <div className="relative">
                              <select
                                className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all focus:border-[#2196F3]/50 focus:bg-white/8 focus:outline-none"
                                name="service"
                                onChange={handleChange}
                                value={formData.service}
                              >
                                <option className="bg-zinc-900" value="">
                                  Select a service…
                                </option>
                                <option className="bg-zinc-900" value="web">
                                  Web Development
                                </option>
                                <option className="bg-zinc-900" value="seo">
                                  Search Engine Optimization
                                </option>
                                <option className="bg-zinc-900" value="google">
                                  Google Experts
                                </option>
                                <option className="bg-zinc-900" value="ai">
                                  Voice AI
                                </option>
                                <option className="bg-zinc-900" value="all">
                                  Full-Service Package
                                </option>
                              </select>
                              <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="mb-2 block text-xs text-zinc-400">Tell Us About Your Project *</label>
                          <textarea
                            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-all focus:border-[#2196F3]/50 focus:bg-white/8 focus:outline-none"
                            name="message"
                            onChange={handleChange}
                            placeholder="Describe your business, goals, and what you're looking to achieve…"
                            required
                            rows={5}
                            value={formData.message}
                          />
                        </div>

                        <button
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#1976D2] px-6 py-4 text-sm text-white shadow-lg shadow-[#2196F3]/30 transition-all hover:from-[#1976D2] hover:to-[#1565C0] disabled:cursor-not-allowed disabled:opacity-70"
                          disabled={sending}
                          type="submit"
                        >
                          {sending ? (
                            <>
                              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" d="M4 12a8 8 0 0 1 8-8v8z" fill="currentColor" />
                              </svg>
                              Sending…
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </button>

                        {error ? <p className="text-center text-sm text-red-300">{error}</p> : null}

                        <p className="text-center text-xs text-zinc-600">
                          Or{" "}
                          <a className="text-[#2196F3] hover:underline" href={bookingUrl} rel="noreferrer" target="_blank">
                            book a free strategy call directly
                          </a>{" "}
                          — 30 minutes, no obligation.
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="mb-6 inline-flex rounded-full border border-[#2196F3]/30 bg-[#2196F3]/15 p-5">
                        <CheckCircle className="h-10 w-10 text-[#2196F3]" />
                      </div>
                      <h3 className="mb-3 text-2xl text-white">Message Received!</h3>
                      <p className="mb-6 leading-relaxed text-zinc-400">
                        Thanks for reaching out. We&apos;ll review your project details and get back to you within 24
                        hours.
                      </p>
                      <a
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] px-6 py-3 text-sm text-white transition-all hover:from-[#D97706] hover:to-[#B45309]"
                        href={bookingUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Calendar className="h-4 w-4" />
                        Book Your Free Strategy Call Now
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-300"
          onClick={scrollToAbout}
          type="button"
        >
          <span className="text-xs uppercase tracking-[0.3em]">About Us</span>
          <ArrowDown className="h-4 w-4" />
        </button>
      </section>

      <section className="relative overflow-hidden px-6 py-32" id="about">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(33,150,243,0.08),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <div className="mb-6 inline-block rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-4 py-2">
              <span className="text-sm text-[#F59E0B]">About Higher Marketing Plus</span>
            </div>
            <h2 className="mb-6 text-4xl tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                The People Behind
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#2196F3] to-[#F59E0B] bg-clip-text text-transparent">
                Your Growth
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              A results-driven digital agency based in Joplin, MO — built on the belief that every business deserves a
              powerful online presence.
            </p>
          </div>

          <div className="mb-28 grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#2196F3]/40 to-[#F59E0B]/30 opacity-60 blur-lg transition-opacity duration-500 group-hover:opacity-80" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <img
                    alt="Higher Marketing Plus team"
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1765648763894-db0aed00e058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbnRyZXByZW5ldXIlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNTg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="absolute -right-5 -bottom-5 rounded-2xl bg-gradient-to-br from-[#2196F3] to-[#1565C0] px-5 py-4 shadow-xl shadow-[#2196F3]/30">
                  <div className="mb-0.5 text-2xl text-white">8+</div>
                  <div className="text-xs text-blue-200">Years in Digital</div>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6 leading-relaxed text-zinc-400">
                <p className="text-lg">
                  <span className="text-white">Higher Marketing Plus</span> was founded with a single mission: to give
                  growth-stage businesses in Joplin and beyond the digital firepower they need to compete — and win.
                </p>
                <p>
                  We&apos;ve spent 8+ years learning what actually moves the needle. Not vanity metrics or pretty
                  mockups, but real strategies that turn website visitors into paying customers. We combine sharp web
                  design, local SEO dominance, Google expertise, and cutting-edge AI voice technology into one cohesive
                  growth system.
                </p>
                <p>
                  Based in Joplin, MO, we&apos;re deeply invested in the local community while serving clients across the
                  country. When you work with us, you get a partner who cares about your business as much as you do.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: "Location", value: addressLabel },
                  { label: "Founded", value: "2016" },
                  { label: "Specialty", value: "Growth-Stage Businesses" },
                  { label: "Approach", value: "Strategy-First" }
                ].map((fact) => (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4" key={fact.label}>
                    <div className="mb-1 text-xs text-zinc-500">{fact.label}</div>
                    <div className="text-white">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-28 grid grid-cols-2 gap-6 md:grid-cols-4">
            {contactStats.map((stat) => (
              <div
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                key={stat.label}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2196F3]/8 to-[#F59E0B]/8 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-r from-[#2196F3] to-[#F59E0B] bg-clip-text text-3xl text-transparent md:text-4xl">
                  {stat.value}
                </div>
                <div className="relative mt-2 text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-28 grid gap-16 lg:grid-cols-2">
            <div>
              <h3 className="mb-3 text-3xl text-white">Our Expertise</h3>
              <p className="mb-8 leading-relaxed text-zinc-400">
                We&apos;ve refined our skill set to focus on what delivers the highest ROI for service-based and local
                businesses.
              </p>

              <div className="space-y-5">
                {contactSkills.map((skill) => (
                  <div key={skill.label}>
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm text-zinc-300">{skill.label}</span>
                      <span className="text-sm text-[#2196F3]">{skill.value}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#2196F3] to-[#F59E0B]"
                        style={{ width: skill.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-64 overflow-hidden rounded-3xl">
              <img
                alt="Agency workspace"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBhZ2VuY3klMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc3MjU4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute right-6 bottom-6 left-6">
                <div className="mb-1 text-white">Strategy-first approach</div>
                <div className="text-sm text-zinc-400">
                  Every campaign starts with deep research and a clear growth plan
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-3xl text-white md:text-4xl">What We Stand For</h3>
              <p className="mx-auto max-w-xl text-zinc-400">
                Our values aren&apos;t just words on a page — they&apos;re the principles that guide every project we take
                on.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactValues.map((value) => {
                const Icon = valueIcons[value.title as keyof typeof valueIcons] ?? Award;

                return (
                  <div
                    className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#2196F3]/30 hover:bg-white/8"
                    key={value.title}
                  >
                    <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-gradient-to-br from-[#2196F3]/15 to-[#F59E0B]/15 p-3 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-[#2196F3]" />
                    </div>
                    <h4 className="mb-2 text-white">{value.title}</h4>
                    <p className="text-sm leading-relaxed text-zinc-500">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-24 text-center">
            <div className="group relative inline-block">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#2196F3] via-[#F59E0B] to-[#2196F3] opacity-30 blur transition duration-700 group-hover:opacity-50" />
              <div className="relative mx-auto max-w-2xl rounded-3xl border border-white/10 bg-zinc-900 px-12 py-10">
                <h3 className="mb-4 text-2xl text-white md:text-3xl">Ready to start your project?</h3>
                <p className="mb-8 text-zinc-400">
                  Book a free 30-minute strategy call and let&apos;s map out exactly how we&apos;ll grow your business online.
                </p>
                <a
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2196F3] to-[#1976D2] px-8 py-4 text-sm text-white shadow-lg shadow-[#2196F3]/40 transition-all hover:from-[#1976D2] hover:to-[#1565C0]"
                  href={bookingUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Calendar className="h-4 w-4" />
                  Book Your Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MakeFooter bookingUrl={bookingUrl} contactEmail={contactEmail} supportPhone={supportPhone} />
    </div>
  );
}

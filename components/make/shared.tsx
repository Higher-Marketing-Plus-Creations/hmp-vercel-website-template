import Link from "next/link";
import { ArrowLeft, Calendar, Mail, MapPin, Phone } from "lucide-react";

type FooterProps = {
  bookingUrl: string;
  contactEmail: string;
  supportPhone: string;
};

const serviceLinks = [
  { href: "/services/development", label: "Web Design & Development" },
  { href: "/services/local-seo", label: "Local SEO Joplin" },
  { href: "/services/google-experts", label: "Google Experts" },
  { href: "/services/ai-voice-agents", label: "Voice AI" }
];

const getStartedLinks = [
  { href: "/contact", label: "Start a Project" },
  { href: "/services", label: "Explore Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" }
];

export function MakeServiceNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link className="flex items-center gap-3 transition-opacity hover:opacity-80" href="/">
          <img alt="Higher Marketing Plus" className="h-12 w-auto" src="/figma-assets/hmp-logo.png" />
        </Link>

        <Link className="flex items-center gap-2 text-zinc-400 transition-colors hover:text-white" href="/">
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back to Home</span>
        </Link>
      </div>
    </nav>
  );
}

export function MakeFooter({ bookingUrl, contactEmail, supportPhone }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const telHref = `tel:${supportPhone.replace(/[^\d]/g, "")}`;

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 bg-gradient-to-r from-[#2196F3] to-[#F59E0B] bg-clip-text text-2xl text-transparent">
              Higher Marketing Plus
            </div>
            <p className="mb-6 max-w-md text-zinc-400">
              Maximize your success by elevating your online presence. Strategy-first websites, AI voice agents, and
              local SEO serving Joplin, MO and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                aria-label="Email Higher Marketing Plus"
                className="rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-orange-500/50 hover:bg-white/10"
                href={`mailto:${contactEmail}`}
              >
                <Mail className="h-5 w-5 text-zinc-400" />
              </a>
              <a
                aria-label="Call Higher Marketing Plus"
                className="rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-orange-500/50 hover:bg-white/10"
                href={telHref}
              >
                <Phone className="h-5 w-5 text-zinc-400" />
              </a>
              <a
                aria-label="Book a strategy call"
                className="rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-orange-500/50 hover:bg-white/10"
                href={bookingUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Calendar className="h-5 w-5 text-zinc-400" />
              </a>
              <Link
                aria-label="Contact Higher Marketing Plus"
                className="rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-orange-500/50 hover:bg-white/10"
                href="/contact"
              >
                <MapPin className="h-5 w-5 text-zinc-400" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-zinc-400 transition-colors hover:text-orange-400" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-white">Get Started</h3>
            <ul className="space-y-3">
              {getStartedLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-zinc-400 transition-colors hover:text-orange-400" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-zinc-500">© {currentYear} All rights reserved.</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link className="text-zinc-500 transition-colors hover:text-orange-400" href="/contact">
              Contact & About
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-orange-400" href="/services">
              Services
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-orange-400" href="/case-studies">
              Case Studies
            </Link>
            <Link className="text-zinc-500 transition-colors hover:text-orange-400" href="/insights">
              Insights
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

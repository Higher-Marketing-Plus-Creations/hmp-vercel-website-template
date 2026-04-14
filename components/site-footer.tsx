import Link from "next/link";

import { getSiteSettings } from "@/lib/content";

export async function SiteFooter() {
  const settings = await getSiteSettings();

  return (
    <footer className="site-footer">
      <section className="footer-panel">
        <div className="footer-grid">
          <div>
            <div className="eyebrow">Higher Marketing Plus</div>
            <h2 className="headline" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              One agency. Every tool. Zero excuses.
            </h2>
            <p className="section-intro">{settings.footerBlurb}</p>
            <div className="button-row">
              <Link className="button" href={settings.bookingUrl} rel="noreferrer" target="_blank">
                Book Strategy Call
              </Link>
              <Link className="button-secondary" href="/contact">
                Contact & About
              </Link>
            </div>
          </div>

          <div>
            <span className="meta-label">Services</span>
            <div className="footer-links">
              <Link href="/services/development">Web Development</Link>
              <Link href="/services/local-seo">Local SEO</Link>
              <Link href="/services/google-experts">Google Experts</Link>
              <Link href="/services/ai-voice-agents">AI Voice Agents</Link>
            </div>
          </div>

          <div>
            <span className="meta-label">Contact</span>
            <div className="footer-links">
              <Link href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</Link>
              <Link href={`tel:${settings.supportPhone.replace(/[^\d]/g, "")}`}>{settings.supportPhone}</Link>
              <span>{settings.serviceArea}</span>
            </div>
          </div>

          <div>
            <span className="meta-label">Legal</span>
            <div className="footer-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="fine-print">
          <div>{settings.footerTagline}</div>
          <div>
            {settings.companyName} · {new Date().getFullYear()}
          </div>
        </div>
      </section>
    </footer>
  );
}

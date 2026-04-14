import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  description:
    "Privacy Policy for Higher Marketing Plus, including how contact information and SMS consent data are used for appointment and service-related communications.",
  pathname: "/privacy",
  title: "Privacy Policy | Higher Marketing Plus"
});

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We may collect your name, mobile number, email address, business details, appointment details, and any information you share when requesting services, booking a strategy call, or communicating with Higher Marketing Plus.",
      "If you contact us by phone, web form, or SMS, we may also store message history, timestamps, and follow-up details needed to support your request."
    ]
  },
  {
    title: "How We Use Information",
    body: [
      "We use your information to respond to inquiries, schedule and confirm appointments, deliver requested updates, send service-related reminders, and support active client relationships.",
      "SMS messages from Higher Marketing Plus are intended for conversational or transactional purposes such as appointment confirmations, scheduling updates, post-call follow-up, and customer support."
    ]
  },
  {
    title: "SMS Privacy Commitment",
    body: [
      "Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.",
      "Information sharing to subcontractors in support services, such as customer service, messaging platforms, and scheduling providers, is permitted only as necessary to operate our services and deliver requested communications."
    ]
  },
  {
    title: "Consent and Opt-Out",
    body: [
      "By submitting your phone number through our forms, requesting a call or appointment, or otherwise asking us to contact you, you agree to receive relevant SMS communications from Higher Marketing Plus.",
      "You can opt out of SMS at any time by replying \"STOP\". You can reply \"HELP\" for assistance. Message frequency varies. Message and data rates may apply."
    ]
  },
  {
    title: "Data Security and Retention",
    body: [
      "We retain information only as long as reasonably necessary to provide services, maintain records, comply with legal obligations, and support business operations.",
      "We use reasonable administrative, technical, and organizational safeguards to protect personal information."
    ]
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or your communications preferences, contact Higher Marketing Plus at jonathan@highermarketingplus.com or call/text +1 (417) 203-7152."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <section className="site-main">
      <div className="section-surface" style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="eyebrow">Legal</div>
        <h1 className="headline" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          Privacy Policy
        </h1>
        <p className="section-intro" style={{ maxWidth: "70ch" }}>
          This Privacy Policy explains how Higher Marketing Plus collects, uses, and protects
          information submitted through our website, calls, forms, and SMS conversations.
        </p>
        <p className="meta-copy">Effective date: April 14, 2026</p>
      </div>

      <div className="section-surface" style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="section" style={{ gap: "2rem" }}>
          {sections.map((section) => (
            <section key={section.title} className="section" style={{ gap: "0.85rem" }}>
              <h2 className="headline" style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}>
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="section-intro" style={{ maxWidth: "75ch" }}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>

      <div className="section-surface" style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="section" style={{ gap: "1rem" }}>
          <div className="eyebrow">Need the full messaging terms?</div>
          <h2 className="headline" style={{ fontSize: "clamp(1.75rem, 3vw, 2.4rem)" }}>
            Review our SMS terms and program disclosures.
          </h2>
          <div className="button-row">
            <Link className="button" href="/terms">
              View Terms & Conditions
            </Link>
            <Link className="button-secondary" href="/contact">
              Contact Higher Marketing Plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

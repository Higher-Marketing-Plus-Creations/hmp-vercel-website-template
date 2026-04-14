import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  description:
    "Terms and Conditions for Higher Marketing Plus SMS communications, including program details, message frequency, HELP and STOP instructions, and support contact information.",
  pathname: "/terms",
  title: "Terms & Conditions | Higher Marketing Plus"
});

const terms = [
  {
    title: "Program Name",
    body: "Higher Marketing Plus Appointment and Service Updates."
  },
  {
    title: "Program Description",
    body:
      "By opting in, you agree to receive SMS messages from Higher Marketing Plus related to appointment confirmations, appointment reminders, scheduling changes, post-call follow-up, customer support, and requested service updates."
  },
  {
    title: "Message Frequency",
    body:
      "Message frequency varies based on your interaction with Higher Marketing Plus, your appointment activity, and your requested support."
  },
  {
    title: "Message and Data Rates",
    body: "Message and data rates may apply depending on your mobile carrier plan."
  },
  {
    title: "Opt-In",
    body:
      "You may opt in by requesting communication through our website forms, booking tools, call flows, or by otherwise providing express consent to receive SMS updates from Higher Marketing Plus."
  },
  {
    title: "Opt-Out",
    body:
      "You can cancel SMS notifications at any time by replying \"STOP\" to any message. After you send \"STOP\", you will receive a confirmation message and no further SMS messages will be sent unless you opt in again."
  },
  {
    title: "Help",
    body:
      "If you need assistance, reply \"HELP\" to any message or contact us at jonathan@highermarketingplus.com or +1 (417) 203-7152."
  },
  {
    title: "Consent Condition",
    body: "Consent to receive SMS messages is not a condition of purchase."
  },
  {
    title: "Privacy",
    body:
      "Your information will be handled in accordance with the Higher Marketing Plus Privacy Policy. Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes."
  }
];

export default function TermsPage() {
  return (
    <section className="site-main">
      <div className="section-surface" style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="eyebrow">Legal</div>
        <h1 className="headline" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          Terms & Conditions
        </h1>
        <p className="section-intro" style={{ maxWidth: "70ch" }}>
          These Terms & Conditions govern SMS communications sent by Higher Marketing Plus for
          appointments, support, and requested service updates.
        </p>
        <p className="meta-copy">Effective date: April 14, 2026</p>
      </div>

      <div className="section-surface" style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="section" style={{ gap: "2rem" }}>
          {terms.map((term) => (
            <section key={term.title} className="section" style={{ gap: "0.85rem" }}>
              <h2 className="headline" style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}>
                {term.title}
              </h2>
              <p className="section-intro" style={{ maxWidth: "75ch" }}>
                {term.body}
              </p>
            </section>
          ))}
        </div>
      </div>

      <div className="section-surface" style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="section" style={{ gap: "1rem" }}>
          <div className="eyebrow">Related Policy</div>
          <h2 className="headline" style={{ fontSize: "clamp(1.75rem, 3vw, 2.4rem)" }}>
            Need details on how information is handled?
          </h2>
          <div className="button-row">
            <Link className="button" href="/privacy">
              View Privacy Policy
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

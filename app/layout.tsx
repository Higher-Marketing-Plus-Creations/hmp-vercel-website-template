import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";

import { siteSettings } from "@/lib/content/local-data";
import { createMetadata } from "@/lib/site-config";

import "@/app/globals.css";

const bodyFont = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Sora({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = createMetadata({
  description: siteSettings.defaultDescription,
  title: siteSettings.defaultTitle
});

export const viewport: Viewport = {
  themeColor: "#050816"
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} bg-black text-white`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}

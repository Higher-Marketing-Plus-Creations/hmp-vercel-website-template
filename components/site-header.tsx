"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteSettings } from "@/lib/content/local-data";

const sectionLinks = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const sections = sectionLinks.map((item) => item.id).concat("reviews");
    const onScroll = () => {
      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(sections[index]);
        if (section && section.getBoundingClientRect().top <= 160) {
          setActiveSection(sections[index] === "reviews" ? "services" : sections[index]);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header-backdrop" />
      <div className="site-header-inner">
        <Link className="site-brand" href="/">
          <span className="site-brand-badge">H+</span>
          <span className="site-brand-copy">
            <strong>Higher Marketing Plus</strong>
            <small>Joplin, MO and beyond</small>
          </span>
        </Link>

        <nav aria-label="Primary" className="site-nav">
          {sectionLinks.map((item) => {
            const href = `/#${item.id}`;
            const active = isHome && activeSection === item.id;

            return (
              <Link className="site-nav-link" data-active={active || undefined} href={href} key={item.id}>
                {item.label}
              </Link>
            );
          })}
          <Link className="site-nav-link" data-active={pathname === "/contact" || undefined} href="/contact">
            Contact
          </Link>
        </nav>

        <div className="site-header-actions">
          <Link className="site-header-cta" href={siteSettings.bookingUrl} rel="noreferrer" target="_blank">
            Schedule a Call
          </Link>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="site-menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="site-mobile-panel">
          {sectionLinks.map((item) => (
            <Link className="site-mobile-link" href={`/#${item.id}`} key={item.id} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="site-mobile-link" href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link
            className="button"
            href={siteSettings.bookingUrl}
            onClick={() => setMenuOpen(false)}
            rel="noreferrer"
            target="_blank"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      ) : null}
    </header>
  );
}

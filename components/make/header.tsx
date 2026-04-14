"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type MakeHeaderProps = {
  bookingUrl: string;
};

const anchorLinks = [
  { anchor: "home", label: "Home" },
  { anchor: "work", label: "Work" },
  { anchor: "services", label: "Services" }
];

export function MakeHeader({ bookingUrl }: MakeHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isHome = pathname === "/";
  const isContact = pathname === "/contact";

  useEffect(() => {
    const updateStateFromScroll = () => {
      const heroSection = document.getElementById("hero-section");

      setScrolledPastHero(
        !isHome || (heroSection ? heroSection.getBoundingClientRect().bottom <= 80 : window.scrollY > 40)
      );

      if (!isHome) {
        return;
      }

      const ids = ["home", "work", "services", "contact"];

      for (let index = ids.length - 1; index >= 0; index -= 1) {
        const id = ids[index];
        const element = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }

      setActiveSection("home");
    };

    updateStateFromScroll();
    window.addEventListener("scroll", updateStateFromScroll, { passive: true });
    window.addEventListener("resize", updateStateFromScroll);

    return () => {
      window.removeEventListener("scroll", updateStateFromScroll);
      window.removeEventListener("resize", updateStateFromScroll);
    };
  }, [isHome]);

  useEffect(() => {
    setMobileOpen(false);
    setActiveSection(isHome ? "home" : "");
  }, [isHome, pathname]);

  const handleAnchorClick = (anchor: string) => {
    setMobileOpen(false);

    if (isHome) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(anchor);
      return;
    }

    window.location.assign(`/#${anchor}`);
  };

  const handleContactClick = () => {
    setMobileOpen(false);
    router.push("/contact");
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) {
      return;
    }

    event.preventDefault();
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{
            backgroundColor: scrolledPastHero ? "rgba(0,0,0,0.58)" : "rgba(0,0,0,0)",
            borderColor: scrolledPastHero ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)"
          }}
          className="absolute inset-0 border-b"
          style={{
            WebkitBackdropFilter: "blur(22px)",
            backdropFilter: "blur(22px)"
          }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2196F3]/40 to-transparent" />

        <div className="relative mx-auto px-6 lg:px-8">
          <div className="mx-auto flex h-20 max-w-6xl items-center justify-between">
            <Link className="shrink-0" href="/" onClick={handleHomeClick}>
              <motion.img
                alt="Higher Marketing Plus"
                className="h-10 w-auto"
                src="/figma-assets/hmp-logo.png"
                transition={{ damping: 20, stiffness: 300, type: "spring" }}
                whileHover={{ scale: 1.04 }}
              />
            </Link>

            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
              {anchorLinks.map((link) => {
                const active = isHome && activeSection === link.anchor;

                return (
                  <button
                    className="group relative rounded-full px-5 py-2"
                    key={link.anchor}
                    onClick={() => handleAnchorClick(link.anchor)}
                    type="button"
                  >
                    {active ? (
                      <motion.span
                        className="absolute inset-0 rounded-full border border-white/15 bg-white/10"
                        layoutId="active-pill"
                        transition={{ damping: 32, stiffness: 380, type: "spring" }}
                      />
                    ) : null}
                    <span
                      className={`relative text-sm transition-colors duration-200 ${
                        active ? "text-white" : "text-zinc-400 group-hover:text-zinc-100"
                      }`}
                    >
                      {link.label}
                    </span>
                  </button>
                );
              })}

              <button className="group relative rounded-full px-5 py-2" onClick={handleContactClick} type="button">
                {isContact ? (
                  <motion.span
                    className="absolute inset-0 rounded-full border border-white/15 bg-white/10"
                    layoutId="active-pill"
                    transition={{ damping: 32, stiffness: 380, type: "spring" }}
                  />
                ) : null}
                <span
                  className={`relative text-sm transition-colors duration-200 ${
                    isContact ? "text-white" : "text-zinc-400 group-hover:text-zinc-100"
                  }`}
                >
                  Contact
                </span>
              </button>
            </nav>

            <div className="hidden shrink-0 lg:block">
              <motion.a
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm text-white"
                href={bookingUrl}
                rel="noreferrer"
                target="_blank"
                transition={{ damping: 20, stiffness: 300, type: "spring" }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2196F3] to-[#1976D2]" />
                <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
                <span className="relative">Schedule a Call</span>
              </motion.a>
            </div>

            <motion.button
              aria-label="Toggle menu"
              className="relative z-10 p-2 text-zinc-300 transition-colors hover:text-white lg:hidden"
              onClick={() => setMobileOpen((value) => !value)}
              type="button"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence initial={false} mode="wait">
                {mobileOpen ? (
                  <motion.span
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    key="close"
                    transition={{ duration: 0.18 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    initial={{ opacity: 0, rotate: 90 }}
                    key="menu"
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="fixed top-20 left-4 right-4 z-40 lg:hidden"
            exit={{ opacity: 0, scale: 0.97, y: -12 }}
            initial={{ opacity: 0, scale: 0.97, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-2xl border border-white/10 bg-zinc-900/85 p-4"
              style={{ WebkitBackdropFilter: "blur(24px)", backdropFilter: "blur(24px)" }}
            >
              {anchorLinks.map((link, index) => {
                const active = isHome && activeSection === link.anchor;

                return (
                  <motion.button
                    animate={{ opacity: 1, x: 0 }}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                      active ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    key={link.anchor}
                    onClick={() => handleAnchorClick(link.anchor)}
                    transition={{ delay: index * 0.04 }}
                    type="button"
                  >
                    {link.label}
                  </motion.button>
                );
              })}

              <motion.button
                animate={{ opacity: 1, x: 0 }}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                  isContact ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
                initial={{ opacity: 0, x: -10 }}
                onClick={handleContactClick}
                transition={{ delay: anchorLinks.length * 0.04 }}
                type="button"
              >
                Contact
              </motion.button>

              <div className="mt-3 border-t border-white/10 pt-3">
                <motion.a
                  animate={{ opacity: 1, x: 0 }}
                  className="block w-full rounded-xl bg-gradient-to-r from-[#2196F3] to-[#1976D2] px-4 py-3 text-center text-sm text-white"
                  href={bookingUrl}
                  initial={{ opacity: 0, x: -10 }}
                  rel="noreferrer"
                  target="_blank"
                  transition={{ delay: (anchorLinks.length + 1) * 0.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Schedule a Call
                </motion.a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

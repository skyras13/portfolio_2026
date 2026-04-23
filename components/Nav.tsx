"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HexLogo } from "./Logo";

const LINKS: ReadonlyArray<[string, string]> = [
  ["/", "home"],
  ["/work", "work"],
  ["/projects", "projects"],
  ["/about", "about"],
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (p: string) => (p === "/" ? pathname === "/" : pathname.startsWith(p));

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="nav-brand">
          <span className="nav-logo">
            <HexLogo />
          </span>
          <div className="nav-brand-text">
            <span className="nav-brand-name">Skyler Rasmussen</span>
            <span className="nav-brand-role">Software Developer</span>
          </div>
        </Link>
        <div className="nav-links">
          {LINKS.map(([p, label]) => (
            <Link key={p} href={p} className={isActive(p) ? "active" : ""}>
              {label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="nav-cta">
          contact →
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
      </div>
      <div className="nav-drawer" aria-hidden={!menuOpen}>
        <div className="container nav-drawer-inner">
          {LINKS.map(([p, label]) => (
            <Link key={p} href={p} className={`nav-drawer-link ${isActive(p) ? "active" : ""}`}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="nav-drawer-link cta">
            contact →
          </Link>
        </div>
      </div>
    </nav>
  );
}

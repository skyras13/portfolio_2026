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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (p: string) => (p === "/" ? pathname === "/" : pathname.startsWith(p));

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
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
      </div>
    </nav>
  );
}

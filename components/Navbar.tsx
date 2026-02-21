"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_rgba(28,28,28,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-cormorant text-xl font-semibold tracking-widest text-rust border border-rust/60 px-2.5 py-0.5 group-hover:bg-rust group-hover:text-cream transition-colors duration-200">
              PAM
            </span>
            <span className="font-cormorant text-lg font-medium tracking-wide text-charcoal hidden sm:block">
              Portland Art Museum
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-sans text-sm tracking-widest uppercase transition-colors duration-200 relative pb-0.5 ${
                    active
                      ? "text-rust"
                      : "text-charcoal/70 hover:text-charcoal"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-rust" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-charcoal transition-all duration-200 ${menuOpen ? "translate-y-2.5 rotate-45" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-charcoal transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-charcoal transition-all duration-200 ${menuOpen ? "-translate-y-2.5 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="font-cormorant text-4xl font-light text-charcoal hover:text-rust transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
        <div className="mt-6 text-stone text-sm font-sans tracking-widest">503-276-4208</div>
      </div>
    </>
  );
}

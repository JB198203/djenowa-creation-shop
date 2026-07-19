import { useEffect, useState } from "react";

const LINKS = [
  { href: "#collections", label: "Collections" },
  { href: "#univers", label: "L'Univers" },
  { href: "#atelier", label: "L'Atelier" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(26,26,26,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <a
          href="#accueil"
          className="font-display text-xl tracking-wide text-charcoal"
        >
          Djenowa <span className="text-gold">Créations</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest2 text-charcoal/70 transition-colors duration-500 ease-in-out hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#collections"
          className="hidden border border-charcoal/20 px-5 py-2 text-xs uppercase tracking-widest2 transition-all duration-500 ease-in-out hover:border-gold hover:text-gold md:inline-block"
        >
          Découvrir
        </a>
      </nav>
    </header>
  );
}

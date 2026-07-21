import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LINKS = [
  { href: "/#collections", label: "Collections" },
  { href: "/#univers", label: "L'Univers" },
  { href: "/#atelier", label: "L'Atelier" },
  { href: "/histoire", label: "Notre Histoire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-in-out ${
        scrolled || menuOpen
          ? "border-gold/10 bg-ink/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <Link
          to="/"
          className="font-display text-xl tracking-wide text-ivory"
          onClick={closeMenu}
        >
          Djenowa <span className="text-gold">Créations</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest2 text-ivory/60 transition-colors duration-500 ease-in-out hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#collections"
          className="hidden bg-gold px-6 py-2.5 text-xs uppercase tracking-widest2 text-ink transition-all duration-500 ease-in-out hover:bg-gold-light lg:inline-block"
        >
          Découvrir
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`h-px w-6 bg-ivory transition-transform duration-500 ease-in-out ${
              menuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ivory transition-all duration-500 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-ivory transition-transform duration-500 ease-in-out ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-ink transition-all duration-500 ease-in-out lg:hidden ${
          menuOpen ? "max-h-96 border-t border-gold/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block py-3 text-base uppercase tracking-widest2 text-ivory/80 transition-colors duration-500 ease-in-out hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="/#collections"
              onClick={closeMenu}
              className="block w-fit bg-gold px-6 py-3 text-xs uppercase tracking-widest2 text-ink transition-all duration-500 ease-in-out hover:bg-gold-light"
            >
              Découvrir
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

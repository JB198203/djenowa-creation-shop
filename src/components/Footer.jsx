import { useState } from "react";
import Reveal from "./Reveal.jsx";

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Pinterest", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer
      id="contact"
      className="border-t border-gold/15 bg-black px-6 py-20 text-ivory md:px-12 md:py-28"
    >
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">
              Newsletter
            </p>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Ne manquez aucune
              <br />
              nouvelle création.
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex max-w-md items-end gap-4 border-b border-gold/30 pb-2 transition-colors duration-500 ease-in-out focus-within:border-gold"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Votre adresse e-mail"
                className="w-full bg-transparent py-2 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 text-xs uppercase tracking-widest2 text-ivory/60 transition-all duration-500 ease-in-out hover:text-gold"
              >
                S'abonner
              </button>
            </form>
            {submitted && (
              <p className="mt-3 text-xs text-gold">
                Merci, votre inscription est confirmée.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-8 md:items-end">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm uppercase tracking-widest2 text-ivory/60 transition-colors duration-500 ease-in-out hover:text-gold"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:contact@djenowa-creations.com"
              className="text-sm text-ivory/60 transition-colors duration-500 ease-in-out hover:text-gold"
            >
              contact@djenowa-creations.com
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 text-xs text-ivory/30 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Djenowa Créations. Tous droits réservés.</p>
          <p className="font-display italic text-ivory/50">
            L'Art de la Création Singulière
          </p>
        </div>
      </Reveal>
    </footer>
  );
}

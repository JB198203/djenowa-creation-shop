import Reveal from "./Reveal.jsx";

export default function FeaturedPiece() {
  return (
    <section id="collections" className="bg-ink-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        <Reveal className="relative aspect-[4/5] overflow-hidden md:aspect-auto">
          <img
            src="/images/product-epaulette-cascade.jpg"
            alt="Épaulette Cascade — chaînes en acier drapées des épaules au buste"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden"
            aria-hidden="true"
          />
        </Reveal>

        <Reveal className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">
            Pièce signature
          </p>
          <h2 className="font-display text-3xl text-ivory md:text-5xl">
            Épaulette Cascade
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/60">
            Une cascade de chaînes en acier, drapée des épaules jusqu'au
            buste. Portée en parure d'épaule ou dépliée en collier long,
            c'est la pièce qui résume le mieux l'esprit Djenowa : sculpturale,
            transformable, intemporelle.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-widest2 text-gold">
              Bientôt disponible
            </span>
          </div>

          <a
            href="#contact"
            className="mt-10 w-fit border-b border-gold/50 pb-1 text-xs uppercase tracking-widest2 text-ivory transition-all duration-500 ease-in-out hover:border-gold hover:text-gold"
          >
            Être informé·e de sa sortie
          </a>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal.jsx";

export default function FeaturedPiece() {
  return (
    <section id="collections" className="bg-ink-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        <Reveal className="relative aspect-[4/5] overflow-hidden bg-ivory md:aspect-auto">
          <img
            src="/images/ambiance-tete-chaine-argent.jpg"
            alt="Coiffe Chaînée — voile de chaînes argentées porté sur le front"
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
            Coiffe Chaînée
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/60">
            Un voile de chaînes fines qui encadre le visage comme une
            couronne. Portée en coiffe pour une occasion, ou déclinée en
            collier au quotidien — la pièce qui incarne le mieux la
            transformation, signature de la maison.
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

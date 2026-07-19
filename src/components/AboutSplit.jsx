import Reveal from "./Reveal.jsx";

export default function AboutSplit() {
  return (
    <section id="atelier" className="bg-ink">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Editorial moodboard side */}
        <Reveal className="relative order-2 grid min-h-[420px] grid-cols-2 gap-4 p-6 md:order-1 md:min-h-[640px] md:p-12">
          <div className="col-span-2 overflow-hidden rounded-sm border border-gold/20">
            <img
              src="/images/atelier-runway-plumes.jpg"
              alt="Djenowa Créations sur le podium — défilé de mode"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-sm border border-gold/20">
            <img
              src="/images/atelier-runway-tulle.jpg"
              alt="Défilé Djenowa Créations — pièce portée en podium"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-sm border border-gold/20">
            <img
              src="/images/atelier-portrait.jpg"
              alt="Portrait éditorial Djenowa Créations"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </Reveal>

        {/* Craftsmanship copy side */}
        <Reveal className="order-1 flex flex-col justify-center px-6 py-24 md:order-2 md:px-16 md:py-24">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">
            L'atelier
          </p>
          <h2 className="font-display text-3xl leading-tight text-ivory md:text-5xl">
            Un savoir-faire pensé pour durer
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/60">
            Chez Djenowa Créations, chaque bijou est dessiné puis façonné à la
            main en petites séries. L'acier inoxydable est choisi pour sa
            résistance et sa douceur sur la peau, tandis que chaque gravure
            de l'Arbre de Vie est réalisée pièce par pièce.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ivory/60">
            Le résultat : des créations intemporelles, pensées pour être
            portées longtemps, sous plusieurs formes.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gold/20 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-ivory/40">
                Matière
              </dt>
              <dd className="mt-2 font-display text-xl text-ivory">
                Acier 316L
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-ivory/40">
                Fabrication
              </dt>
              <dd className="mt-2 font-display text-xl text-ivory">
                Pièce par pièce
              </dd>
            </div>
          </dl>

          <a
            href="#contact"
            className="mt-10 w-fit border-b border-gold/50 pb-1 text-xs uppercase tracking-widest2 text-ivory transition-all duration-500 ease-in-out hover:border-gold hover:text-gold"
          >
            Découvrir l'histoire complète
          </a>
        </Reveal>
      </div>
    </section>
  );
}

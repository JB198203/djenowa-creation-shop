export default function AboutSplit() {
  return (
    <section id="atelier" className="bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Editorial moodboard side */}
        <div className="relative order-2 grid min-h-[420px] grid-cols-2 gap-4 p-6 md:order-1 md:min-h-[640px] md:p-12">
          <div className="col-span-2 overflow-hidden rounded-sm bg-gradient-to-br from-charcoal to-[#3a3227]">
            <div className="h-full w-full transition-transform duration-500 ease-in-out hover:scale-105" />
          </div>
          <div className="overflow-hidden rounded-sm bg-gradient-to-br from-gold-light to-gold">
            <div className="h-full w-full transition-transform duration-500 ease-in-out hover:scale-105" />
          </div>
          <div className="overflow-hidden rounded-sm bg-gradient-to-br from-sand to-gold-light/60">
            <div className="h-full w-full transition-transform duration-500 ease-in-out hover:scale-105" />
          </div>
        </div>

        {/* Craftsmanship copy side */}
        <div className="order-1 flex flex-col justify-center px-6 py-24 md:order-2 md:px-16 md:py-24">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">
            L'atelier
          </p>
          <h2 className="font-display text-3xl leading-tight text-charcoal md:text-5xl">
            Un savoir-faire pensé pour durer
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/60">
            Chez Djenowa Créations, chaque bijou est dessiné puis façonné à la
            main en petites séries. L'acier inoxydable est choisi pour sa
            résistance et sa douceur sur la peau, tandis que chaque gravure
            de l'Arbre de Vie est réalisée pièce par pièce.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/60">
            Le résultat : des créations intemporelles, pensées pour être
            portées longtemps, sous plusieurs formes.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-charcoal/10 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-charcoal/40">
                Matière
              </dt>
              <dd className="mt-2 font-display text-xl text-charcoal">
                Acier 316L
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest2 text-charcoal/40">
                Fabrication
              </dt>
              <dd className="mt-2 font-display text-xl text-charcoal">
                Pièce par pièce
              </dd>
            </div>
          </dl>

          <a
            href="#contact"
            className="mt-10 w-fit border-b border-charcoal pb-1 text-xs uppercase tracking-widest2 text-charcoal transition-all duration-500 ease-in-out hover:border-gold hover:text-gold"
          >
            Découvrir l'histoire complète
          </a>
        </div>
      </div>
    </section>
  );
}

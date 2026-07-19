export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-sand"
    >
      {/* Ambient background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-gold/20 via-gold-light/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-32 pb-24 text-center md:pt-24">
        <p className="mb-6 text-xs uppercase tracking-widest2 text-gold">
          Bijoux artisanaux — Édition singulière
        </p>

        <h1 className="font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl md:text-7xl">
          Djenowa Créations
          <span className="mt-2 block italic text-charcoal/80">
            L'Art du Bijou Singulier
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-balance text-base leading-relaxed text-charcoal/60 md:text-lg">
          Des pièces façonnées en acier inoxydable, pensées pour durer et se
          transformer. Chaque bijou 2-en-1 s'adapte à votre allure —
          du collier à la boucle d'oreille — en un seul geste.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#collections"
            className="group relative overflow-hidden bg-charcoal px-10 py-4 text-xs uppercase tracking-widest2 text-cream transition-all duration-500 ease-in-out hover:bg-gold"
          >
            <span className="relative z-10">Explorer la collection</span>
          </a>
          <a
            href="#univers"
            className="px-10 py-4 text-xs uppercase tracking-widest2 text-charcoal/70 transition-all duration-500 ease-in-out hover:text-gold"
          >
            Notre univers
          </a>
        </div>
      </div>

      <a
        href="#collections"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-charcoal/40 transition-colors duration-500 ease-in-out hover:text-gold md:flex"
        aria-label="Défiler vers le bas"
      >
        <span className="h-12 w-px bg-current" />
        <span className="text-[10px] uppercase tracking-widest2">
          Scroll
        </span>
      </a>
    </section>
  );
}

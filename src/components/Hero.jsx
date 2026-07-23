import CurtainReveal from "./CurtainReveal.jsx";

export default function Hero() {
  return (
    <CurtainReveal>
    <section
      id="accueil"
      className="relative grid min-h-screen w-full grid-cols-1 overflow-hidden bg-ink md:grid-cols-2"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #C9A227 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col justify-center px-6 pt-32 pb-16 md:px-12 lg:px-20 md:py-24">
        <p className="mb-6 text-xs uppercase tracking-widest2 text-gold">
          Bijoux — Vêtements — Accessoires
        </p>

        <h1 className="font-display text-4xl leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
          Djenowa Créations
          <span className="text-gold-gradient mt-2 block italic">
            L'Art de la Création Singulière
          </span>
        </h1>

        <p className="mt-8 max-w-md text-balance text-base leading-relaxed text-ivory/60 md:text-lg">
          Bijoux en acier inoxydable, pièces patchwork en denim et cuir,
          accessoires ornés de chaînes — chaque création est façonnée à la
          main et pensée pour durer et se transformer avec vous.
        </p>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#collections"
            className="group relative overflow-hidden bg-gold px-10 py-4 text-xs uppercase tracking-widest2 text-ink transition-all duration-500 ease-in-out hover:bg-gold-light"
          >
            <span className="relative z-10">Explorer la collection</span>
          </a>
          <a
            href="#univers"
            className="px-2 py-4 text-xs uppercase tracking-widest2 text-ivory/60 transition-all duration-500 ease-in-out hover:text-gold sm:px-10"
          >
            Notre univers
          </a>
        </div>

        <a
          href="#collections"
          className="mt-16 hidden items-center gap-3 text-ivory/30 transition-colors duration-500 ease-in-out hover:text-gold md:flex"
          aria-label="Défiler vers le bas"
        >
          <span className="h-px w-12 bg-current" />
          <span className="text-[10px] uppercase tracking-widest2">
            Scroll
          </span>
        </a>
      </div>

      <div className="relative h-[55vh] md:h-auto">
        <img
          src="/images/hero-plumes-or.jpg"
          alt="Bijou Djenowa Créations — épaulette de chaînes dorées, portée"
          className="h-full w-full object-cover object-[center_20%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-r md:from-ink/60 md:via-transparent md:to-black/20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:block"
          aria-hidden="true"
        />
      </div>
    </section>
    </CurtainReveal>
  );
}

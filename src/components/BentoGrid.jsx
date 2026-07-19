const CONCEPTS = [
  {
    key: "duo",
    title: "Le Bijou 2-en-1",
    description:
      "Boucles d'oreilles détachables qui se transforment en collier — une seule pièce, deux façons de la porter.",
    gradient: "from-charcoal via-[#2b2620] to-gold/40",
    span: "md:row-span-2",
    tag: "Innovation",
  },
  {
    key: "arbre",
    title: "L'Arbre de Vie",
    description:
      "Gravures symboliques ciselées à la main, racines et branches comme signature de chaque création.",
    gradient: "from-gold-light via-gold/70 to-charcoal/30",
    span: "",
    tag: "Symbolique",
  },
  {
    key: "acier",
    title: "L'Acier Inoxydable",
    description:
      "Un matériau noble, hypoallergénique et inaltérable — pensé pour accompagner chaque instant de vie.",
    gradient: "from-sand via-gold-light/60 to-charcoal/20",
    span: "",
    tag: "Matière",
  },
];

function BentoCard({ title, description, gradient, span, tag }) {
  return (
    <article
      className={`group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-sm p-8 md:min-h-[320px] md:p-10 ${span}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 ease-in-out group-hover:scale-105`}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-charcoal/10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />

      <span className="relative z-10 mb-4 w-fit border border-cream/40 px-3 py-1 text-[10px] uppercase tracking-widest2 text-cream/90 backdrop-blur-sm">
        {tag}
      </span>
      <h3 className="relative z-10 font-display text-2xl text-cream md:text-3xl">
        {title}
      </h3>
      <p className="relative z-10 mt-3 max-w-sm text-sm leading-relaxed text-cream/80">
        {description}
      </p>
    </article>
  );
}

export default function BentoGrid() {
  return (
    <section id="univers" className="bg-cream px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">
            Notre univers
          </p>
          <h2 className="font-display text-3xl text-charcoal md:text-5xl">
            Trois idées, une signature
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <BentoCard {...CONCEPTS[0]} />
          <div className="grid grid-cols-1 gap-6">
            <BentoCard {...CONCEPTS[1]} />
            <BentoCard {...CONCEPTS[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

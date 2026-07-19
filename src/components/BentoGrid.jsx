import Reveal from "./Reveal.jsx";

const CONCEPTS = [
  {
    key: "duo",
    title: "Le Bijou 2-en-1",
    description:
      "Boucles d'oreilles détachables qui se transforment en collier — une seule pièce, deux façons de la porter.",
    image: "/images/bento-duo.jpg",
    span: "md:row-span-2",
    tag: "Innovation",
  },
  {
    key: "arbre",
    title: "L'Arbre de Vie",
    description:
      "Gravures symboliques ciselées à la main, racines et branches comme signature de chaque création.",
    image: "/images/bento-arbre.jpg",
    span: "",
    tag: "Symbolique",
  },
  {
    key: "acier",
    title: "L'Acier Inoxydable",
    description:
      "Un matériau noble, hypoallergénique et inaltérable — pensé pour accompagner chaque instant de vie.",
    image: "/images/bento-acier.jpg",
    span: "",
    tag: "Matière",
  },
];

function BentoCard({ title, description, image, tag }) {
  return (
    <article className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-sm border border-gold/0 p-8 transition-colors duration-500 ease-in-out hover:border-gold/30 md:min-h-[320px] md:p-10">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10"
        aria-hidden="true"
      />

      <span className="relative z-10 mb-4 w-fit border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-widest2 text-gold">
        {tag}
      </span>
      <h3 className="relative z-10 font-display text-2xl text-ivory md:text-3xl">
        {title}
      </h3>
      <p className="relative z-10 mt-3 max-w-sm text-sm leading-relaxed text-ivory/70">
        {description}
      </p>
    </article>
  );
}

export default function BentoGrid() {
  return (
    <section id="univers" className="bg-ink px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-xl">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">
            Notre univers
          </p>
          <h2 className="font-display text-3xl text-ivory md:text-5xl">
            Trois idées, une signature
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={0} className="md:row-span-2">
            <BentoCard {...CONCEPTS[0]} />
          </Reveal>
          <div className="grid grid-cols-1 gap-6">
            <Reveal delay={150}>
              <BentoCard {...CONCEPTS[1]} />
            </Reveal>
            <Reveal delay={300}>
              <BentoCard {...CONCEPTS[2]} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

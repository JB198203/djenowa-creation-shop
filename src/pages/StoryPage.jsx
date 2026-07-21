import Reveal from "../components/Reveal.jsx";

const CHAPTERS = [
  {
    numeral: "I",
    title: "Les Racines",
    image: "/images/bento-arbre.jpg",
    paragraphs: [
      "Avant d'être une marque, Djenowa est une mémoire. Celle des bijoux que l'on portait pour dire qui l'on était — une lignée, un passage, une appartenance. Grandir entouré de ces parures, c'est apprendre très tôt qu'un bijou n'est jamais seulement décoratif : il parle.",
      "Chaque création de la maison part de là — d'un motif entrevu, d'un geste transmis, d'une silhouette gravée dans la mémoire bien avant d'être dessinée sur le papier.",
    ],
  },
  {
    numeral: "II",
    title: "La Matière",
    image: "/images/bento-acier.jpg",
    paragraphs: [
      "L'acier inoxydable n'a rien d'un choix par défaut. C'est une prise de position : celle d'un luxe qui résiste au temps, à l'eau, à la vie telle qu'on la vit vraiment — sans jamais s'écailler, sans jamais ternir.",
      "Sous les doigts de l'atelier, ce métal froid devient souple : maillon après maillon, il se drape, se plie, épouse une clavicule ou un poignet comme s'il avait toujours été fait pour ça.",
    ],
  },
  {
    numeral: "III",
    title: "Le Symbole",
    image: "/images/product-diademe-frontal.jpg",
    paragraphs: [
      "L'Arbre de Vie revient dans chaque collection comme une signature discrète. Ses racines ancrées, ses branches ouvertes : une manière de dire que l'on peut être à la fois fidèle à d'où l'on vient et tourné vers ce que l'on devient.",
      "Gravé pièce par pièce, jamais tout à fait identique d'un bijou à l'autre, ce motif rappelle qu'aucune histoire ne se répète — elle se prolonge.",
    ],
  },
  {
    numeral: "IV",
    title: "La Transformation",
    image: "/images/bento-duo.jpg",
    paragraphs: [
      "Le bijou 2-en-1 n'est pas qu'une prouesse technique. C'est une idée : celle d'une femme qui n'a pas à choisir une seule version d'elle-même. Le matin, une boucle d'oreille. Le soir, un collier. Entre les deux, la même pièce — et elle.",
      "Se transformer sans se perdre, s'adapter sans se diluer : c'est tout l'esprit de la maison, condensé dans un fermoir.",
    ],
  },
];

function Chapter({ numeral, title, image, paragraphs, reverse }) {
  return (
    <Reveal className="grid grid-cols-1 md:grid-cols-2">
      <div
        className={`relative aspect-[4/5] overflow-hidden md:aspect-auto ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className={`flex flex-col justify-center px-6 py-16 md:px-16 md:py-24 ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <p className="mb-4 font-display text-sm italic text-gold">
          Chapitre {numeral}
        </p>
        <h2 className="font-display text-3xl text-ivory md:text-4xl">
          {title}
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          {paragraphs.map((p) => (
            <p key={p} className="max-w-md text-base leading-relaxed text-ivory/60">
              {p}
            </p>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function StoryPage() {
  return (
    <div className="bg-ink">
      {/* Opening */}
      <section className="relative flex min-h-[70vh] w-full items-end overflow-hidden md:min-h-screen">
        <img
          src="/images/atelier-runway-plumes.jpg"
          alt="Djenowa Créations — défilé"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-black/30"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:px-12 md:pb-24">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">
            Notre histoire
          </p>
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
            Chaque maillon
            <span className="text-gold-gradient mt-2 block italic">
              porte une mémoire
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/60 md:text-lg">
            Quatre chapitres pour comprendre d'où vient Djenowa Créations —
            et pourquoi chaque pièce se porte comme on raconte une histoire.
          </p>
        </div>
      </section>

      {/* Chapters */}
      <div className="divide-y divide-gold/10">
        {CHAPTERS.map((chapter, index) => (
          <Chapter key={chapter.numeral} {...chapter} reverse={index % 2 === 1} />
        ))}
      </div>

      {/* Pull quote */}
      <Reveal className="bg-ink-soft px-6 py-24 text-center md:py-32">
        <p className="mx-auto max-w-3xl font-display text-2xl italic leading-snug text-ivory sm:text-3xl md:text-4xl">
          <span className="text-gold-gradient">« </span>
          Un bijou Djenowa ne se porte pas seulement sur la peau — il se
          porte comme on porte une histoire qu'on continue d'écrire.
          <span className="text-gold-gradient"> »</span>
        </p>
      </Reveal>

      {/* Closing CTA */}
      <Reveal className="px-6 py-24 text-center md:py-32">
        <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">
          À votre tour
        </p>
        <h2 className="font-display text-3xl text-ivory md:text-5xl">
          Écrivez la suite avec nous
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/#collections"
            className="bg-gold px-10 py-4 text-xs uppercase tracking-widest2 text-ink transition-all duration-500 ease-in-out hover:bg-gold-light"
          >
            Découvrir la pièce signature
          </a>
          <a
            href="/#contact"
            className="px-10 py-4 text-xs uppercase tracking-widest2 text-ivory/60 transition-all duration-500 ease-in-out hover:text-gold"
          >
            Nous écrire
          </a>
        </div>
      </Reveal>
    </div>
  );
}

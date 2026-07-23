import Reveal from "./Reveal.jsx";

const TILES = [
  {
    src: "/images/mosaic-chaine-taille.jpg",
    alt: "Chaîne de taille et bralette en mailles métalliques",
    span: "md:row-span-2",
  },
  {
    src: "/images/mosaic-voile-or.jpg",
    alt: "Voile de chaînes dorées porté sur le visage",
    span: "",
  },
  {
    src: "/images/mosaic-boucles-oreille.jpg",
    alt: "Boucles d'oreilles et détails de chaînes",
    span: "",
  },
];

export default function JewelryMosaic() {
  return (
    <section className="bg-ink-soft px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-xl">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">
            Détails
          </p>
          <h2 className="font-display text-3xl text-ivory md:text-5xl">
            Le bijou, en gros plan
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal delay={0} className={TILES[0].span}>
            <div className="group relative h-full min-h-[280px] overflow-hidden rounded-sm border border-gold/0 transition-colors duration-500 ease-in-out hover:border-gold/30 md:min-h-[440px]">
              <img
                src={TILES[0].src}
                alt={TILES[0].alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
            <Reveal delay={150}>
              <div className="group relative h-full min-h-[280px] overflow-hidden rounded-sm border border-gold/0 transition-colors duration-500 ease-in-out hover:border-gold/30 md:min-h-[210px]">
                <img
                  src={TILES[1].src}
                  alt={TILES[1].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="group relative h-full min-h-[280px] overflow-hidden rounded-sm border border-gold/0 transition-colors duration-500 ease-in-out hover:border-gold/30 md:min-h-[210px]">
                <img
                  src={TILES[2].src}
                  alt={TILES[2].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

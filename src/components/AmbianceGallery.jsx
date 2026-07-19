import Reveal from "./Reveal.jsx";

const IMAGES = [
  { src: "/images/product-bracelet-lave.jpg", alt: "Détail bracelet en pierre de lave et cauri" },
  { src: "/images/product-masque-chaine.jpg", alt: "Chaîne portée en accessoire de visage" },
  { src: "/images/product-diademe-frontal.jpg", alt: "Diadème frontal doré, ambiance dorée" },
  { src: "/images/product-cagoule-royale.jpg", alt: "Cagoule de chaînes dorées et noires" },
  { src: "/images/product-plastron-epaulette.jpg", alt: "Plastron d'épaule porté en tenue de ville" },
];

export default function AmbianceGallery() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal className="mb-12 max-w-xl">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">
            Ambiance
          </p>
          <h2 className="font-display text-3xl text-ivory md:text-5xl">
            Dans l'univers Djenowa
          </h2>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div className="no-scrollbar flex gap-6 overflow-x-auto px-6 pb-4 md:px-12">
          {IMAGES.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-[3/4] w-[70vw] shrink-0 overflow-hidden rounded-sm border border-gold/0 transition-colors duration-500 ease-in-out hover:border-gold/30 sm:w-[38vw] md:w-[26vw] lg:w-[19vw]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-500 ease-in-out group-hover:bg-black/0" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

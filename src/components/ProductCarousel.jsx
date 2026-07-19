import { useRef } from "react";
import Reveal from "./Reveal.jsx";

const PRODUCTS = [
  {
    id: "p1",
    name: "Bracelet Lave & Cauri",
    category: "Acier Inoxydable",
    price: "68 €",
    image: "/images/product-bracelet-lave.jpg",
  },
  {
    id: "p2",
    name: "Épaulette Cascade",
    category: "Bijou 2-en-1",
    price: "129 €",
    image: "/images/product-epaulette-cascade.jpg",
  },
  {
    id: "p3",
    name: "Masque Chaîne Dorée",
    category: "Bijou 2-en-1",
    price: "89 €",
    image: "/images/product-masque-chaine.jpg",
  },
  {
    id: "p4",
    name: "Diadème Frontal",
    category: "Arbre de Vie",
    price: "139 €",
    image: "/images/product-diademe-frontal.jpg",
  },
  {
    id: "p5",
    name: "Cagoule Chaîne Royale",
    category: "Arbre de Vie",
    price: "149 €",
    image: "/images/product-cagoule-royale.jpg",
  },
  {
    id: "p6",
    name: "Plastron Épaulette",
    category: "Acier Inoxydable",
    price: "94 €",
    image: "/images/product-plastron-epaulette.jpg",
  },
];

function ProductCard({ product }) {
  return (
    <article className="group w-[75vw] shrink-0 snap-start sm:w-[46vw] md:w-[30vw] lg:w-[24vw]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/0 bg-ink-soft transition-colors duration-500 ease-in-out group-hover:border-gold/30">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 transition-all duration-500 ease-in-out group-hover:from-black/80" />
        <div className="absolute inset-0 flex items-end p-5">
          <span className="translate-y-3 border border-gold/60 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-widest2 text-gold opacity-0 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            Voir la pièce
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest2 text-gold">
            {product.category}
          </p>
          <h3 className="mt-1 font-display text-lg text-ivory">
            {product.name}
          </h3>
        </div>
        <p className="whitespace-nowrap text-sm text-ivory/50">
          {product.price}
        </p>
      </div>
    </article>
  );
}

export default function ProductCarousel() {
  const scrollerRef = useRef(null);

  const scrollBy = (amount) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="collections" className="bg-ink-soft px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="mb-4 text-xs uppercase tracking-widest2 text-gold">
              Collection
            </p>
            <h2 className="font-display text-3xl text-ivory md:text-5xl">
              Pièces phares
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-360)}
              className="flex h-11 w-11 items-center justify-center border border-gold/30 text-ivory/70 transition-all duration-500 ease-in-out hover:border-gold hover:bg-gold hover:text-ink"
              aria-label="Précédent"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(360)}
              className="flex h-11 w-11 items-center justify-center border border-gold/30 text-ivory/70 transition-all duration-500 ease-in-out hover:border-gold hover:bg-gold hover:text-ink"
              aria-label="Suivant"
            >
              →
            </button>
          </div>
        </Reveal>

        <div
          ref={scrollerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

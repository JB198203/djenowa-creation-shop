import Hero from "../components/Hero.jsx";
import BentoGrid from "../components/BentoGrid.jsx";
import FeaturedPiece from "../components/FeaturedPiece.jsx";
import AmbianceGallery from "../components/AmbianceGallery.jsx";
import AboutSplit from "../components/AboutSplit.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <FeaturedPiece />
      <AmbianceGallery />
      <AboutSplit />
    </>
  );
}

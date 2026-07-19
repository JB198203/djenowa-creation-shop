import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BentoGrid from "./components/BentoGrid.jsx";
import FeaturedPiece from "./components/FeaturedPiece.jsx";
import AmbianceGallery from "./components/AmbianceGallery.jsx";
import AboutSplit from "./components/AboutSplit.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <FeaturedPiece />
        <AmbianceGallery />
        <AboutSplit />
      </main>
      <Footer />
    </div>
  );
}

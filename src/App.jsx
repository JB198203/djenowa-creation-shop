import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BentoGrid from "./components/BentoGrid.jsx";
import ProductCarousel from "./components/ProductCarousel.jsx";
import AboutSplit from "./components/AboutSplit.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <ProductCarousel />
        <AboutSplit />
      </main>
      <Footer />
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";
import HomePage from "./pages/HomePage.jsx";
import StoryPage from "./pages/StoryPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ink">
        <ScrollToHash />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/histoire" element={<StoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

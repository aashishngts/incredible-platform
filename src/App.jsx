import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import StatsAndCTA from "./components/Statsandcta";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Services />
      <Events />
      <StatsAndCTA />
      <Contact />
      <Footer />
    </div>
  );
}
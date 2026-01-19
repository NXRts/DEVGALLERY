import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import FeaturedWork from "./components/FeaturedWork";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#121517] dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <FeaturedWork />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

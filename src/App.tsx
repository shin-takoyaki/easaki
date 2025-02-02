import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Philosophy from "./components/sections/Philosophy";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Philosophy />
      <Services />
      <About />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <CardGrid />
      </main>
      <Footer />
    </>
  );
}

export default App;
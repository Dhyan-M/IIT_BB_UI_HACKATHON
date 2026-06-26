import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoAccordion from "./components/BentoAccordion";
import PricingMatrix from "./components/PricingMatrix";
import WorkflowStrip from "./components/WorkflowStrip";
import SocialProof from "./components/SocialProof";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BentoAccordion />
        <PricingMatrix />
        <WorkflowStrip />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
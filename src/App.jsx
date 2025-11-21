import Hero from './components/Hero';
import Features from './components/Features';
import Fleet from './components/Fleet';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B0F19] text-white">
      {/* subtle overall gradient + glow atmosphere */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(0,175,255,0.06),transparent)]" />

      <Hero />
      <Features />
      <Fleet />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

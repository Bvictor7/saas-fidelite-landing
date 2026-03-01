import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import Features from './components/Features';
import Pricing  from './components/Pricing';
import FAQ      from './components/FAQ';
import Footer   from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

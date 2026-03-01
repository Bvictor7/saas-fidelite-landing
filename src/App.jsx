import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import Features from './components/Features';
import Pricing  from './components/Pricing';
import FAQ      from './components/FAQ';
import Footer   from './components/Footer';
import Privacy  from './pages/Privacy';
import Legal    from './pages/Legal';
import Terms    from './pages/Terms';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/legal"   element={<Legal />} />
        <Route path="/terms"   element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
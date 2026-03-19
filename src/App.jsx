import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { LangProvider } from './lang';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Home from './pages/Home';
import WhyUs from './pages/WhyUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Particles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LangProvider>
  );
}

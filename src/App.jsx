import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { AnimatePresence, motion } from 'framer-motion';
import WhatsAppButton from './components/WhatsAppButton';

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden relative selection:bg-brand-500/20">
      <Navbar />

      <main className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Hero />
            <About />
            <Projects />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;

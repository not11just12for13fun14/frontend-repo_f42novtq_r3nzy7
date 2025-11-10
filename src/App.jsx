import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import CERConfigurator from './components/CERConfigurator.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">Oktavia</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-emerald-400 transition-colors">Servizi</a>
            <a href="#cer" className="hover:text-emerald-400 transition-colors">Comunità Energetiche</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contatti</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services" className="scroll-mt-24">
          <Services />
        </section>
        <section id="cer" className="scroll-mt-24">
          <CERConfigurator />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <footer className="mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Oktavia. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6">
            <a href="#cer" className="hover:text-white">CER</a>
            <a href="#services" className="hover:text-white">Servizi</a>
            <a href="#contact" className="hover:text-white">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Financing from './components/Financing.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Services />
      <Financing />
      <Contact />
      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Oktavia — Efficienza energetica per imprese e famiglie.</p>
          <nav className="flex items-center gap-6">
            <a href="#servizi" className="hover:text-slate-900 transition">Servizi</a>
            <a href="#finanza" className="hover:text-slate-900 transition">Soluzioni finanziarie</a>
            <a href="#contatti" className="hover:text-slate-900 transition">Contatti</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;

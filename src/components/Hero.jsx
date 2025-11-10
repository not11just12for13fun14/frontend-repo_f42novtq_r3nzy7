import React from 'react';
import { Rocket, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/80 to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 relative">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-100 rounded-full px-3 py-1 text-xs font-medium">
              <Leaf className="w-4 h-4" />
              Affidabilità · Innovazione · Meticolosità
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">
              Energie rinnovabili e soluzioni intelligenti per imprese e famiglie
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-2xl">
              Oktavia progetta e realizza impianti fotovoltaici, comunità energetiche, e-mobility e sistemi di efficientamento, con accesso facilitato a incentivi e finanza agevolata.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#servizi" className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md font-medium transition">
                <Rocket className="w-4 h-4" /> Scopri i servizi
              </a>
              <a href="#contatti" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 ring-1 ring-emerald-200 hover:ring-emerald-300 px-5 py-3 rounded-md font-medium transition">
                Richiedi una consulenza
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-emerald-200/60">
              <img
                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop"
                alt="Pannelli fotovoltaici su tetto"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

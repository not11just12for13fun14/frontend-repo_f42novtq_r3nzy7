import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Leaf, Sun } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative">
      <div className="h-[72vh] md:h-[78vh] w-full relative overflow-hidden rounded-b-2xl border-b border-white/10">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/8cVtN4Qb1qkYc5m4/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end pb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-full px-3 py-1 text-xs font-medium mb-4">
              <Rocket size={14} /> Acceleratore di efficienza energetica
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Soluzioni fotovoltaiche, CER e finanziamenti con un taglio aggressivo e data-driven
            </h1>
            <p className="text-white/70 mt-3 max-w-2xl">
              Dalla progettazione alla gestione: massimizziamo incentivi, autoconsumo e ROI con simulazioni rapide e chiare.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#cer" className="px-5 py-2 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors">Apri configuratore CER</a>
              <a href="#services" className="px-5 py-2 rounded-md bg-white/10 border border-white/15 hover:bg-white/15 transition-colors">Scopri i servizi</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-white/70">
              <div className="flex items-center gap-2"><Sun size={16} className="text-amber-300" /><span>Transizione 5.0</span></div>
              <div className="flex items-center gap-2"><Leaf size={16} className="text-emerald-300" /><span>PNRR & GSE</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { CreditCard, Landmark } from 'lucide-react';

const Financing = () => {
  return (
    <section id="finanza" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Soluzioni finanziarie con Urania</h2>
            <p className="mt-4 text-slate-600">
              La nostra divisione interna facilita l’accesso a strumenti di credito e finanza agevolata per accelerare i tuoi investimenti energetici.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-emerald-600 mt-0.5" /> Microcredito e prestiti dedicati</li>
              <li className="flex items-start gap-3"><Landmark className="w-5 h-5 text-emerald-600 mt-0.5" /> Leasing, factoring e noleggio operativo</li>
              <li className="flex items-start gap-3"><Landmark className="w-5 h-5 text-emerald-600 mt-0.5" /> Accesso a bandi e incentivi (GSE, PNRR, Transizione 5.0)</li>
            </ul>
            <a href="#contatti" className="inline-flex mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md font-medium transition">Parla con un consulente</a>
          </div>
          <div>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-emerald-200/60">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop"
                alt="Soluzioni finanziarie per energie rinnovabili"
                className="w-full h-[300px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financing;

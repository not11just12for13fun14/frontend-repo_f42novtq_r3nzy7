import React from 'react';
import { CreditCard, Landmark, TrendingUp } from 'lucide-react';

export default function Financing() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Soluzioni finanziarie</h2>
            <p className="text-white/70 mt-2">Strutture su misura per accelerare l’investimento e migliorare la cassa.</p>
          </div>
          <span className="hidden md:inline text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80">Offerta Limitata</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-emerald-300"><CreditCard size={16}/> Microcredito Urania</div>
            <p className="text-sm text-white/70 mt-2">Percorso rapido per PMI con istruttoria semplificata e rate sostenibili.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-emerald-300"><TrendingUp size={16}/> Leasing operativo</div>
            <p className="text-sm text-white/70 mt-2">Allinea i canoni ai flussi di cassa dell’impianto. Possibile riscatto a fine periodo.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-emerald-300"><Landmark size={16}/> Factoring & contributi</div>
            <p className="text-sm text-white/70 mt-2">Anticipazione dei contributi e gestione bandi per ridurre il fabbisogno iniziale.</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-emerald-500/10 to-white/5 border border-emerald-500/20">
          <p className="text-sm"><span className="font-semibold text-emerald-300">Audit gratuito</span> per aziende energivore: posti limitati ogni mese.</p>
        </div>
      </div>
    </section>
  );
}

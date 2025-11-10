import React from 'react';
import { Gauge, Users, Building2, CreditCard, Landmark, TrendingUp } from 'lucide-react';

const cards = [
  {
    icon: TrendingUp,
    title: 'Fotovoltaico & Storage',
    desc: 'Progettazione e EPC con focus su autoconsumo e peak shaving. EMS integrato per il massimo rendimento.',
  },
  {
    icon: Users,
    title: 'Comunità Energetiche (CER)',
    desc: 'Set-up tecnico-legale, pratiche GSE, configurazioni per gruppi di autoconsumo e condomini.',
  },
  {
    icon: Building2,
    title: 'Efficientamento & EMS',
    desc: 'Audit energetico e controllo intelligente dei carichi per ridurre consumi e aumentare resilienza.',
  },
  {
    icon: CreditCard,
    title: 'Soluzioni Finanziarie',
    desc: 'Leasing, microcredito Urania, factoring: strutturiamo l’operazione per cassa e P&L.',
  },
  {
    icon: Gauge,
    title: 'E-Mobility',
    desc: 'Infrastrutture di ricarica e integrazione con FV per flotti aziendali e retail.',
  },
  {
    icon: Landmark,
    title: 'Incentivi & PNRR',
    desc: 'Transizione 5.0, Nuova Sabatini e bandi locali: massimizziamo l’incentivo cumulabile.',
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Servizi principali</h2>
            <p className="text-white/70 mt-2">Un pacchetto completo per performance, incentivi e cassa.</p>
          </div>
          <span className="hidden md:inline text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80">Approccio end-to-end</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="text-white/70 mt-3 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

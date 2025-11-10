import React from 'react';
import { Sun, Building2, Users, Car, Network, Gauge } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Fotovoltaico',
    desc:
      'Progettazione e installazione per aziende e privati. Accesso a incentivi come Transizione 5.0 e Nuova Sabatini.'
  },
  {
    icon: Network,
    title: 'Comunità Energetiche Rinnovabili (CER)',
    desc:
      'Supporto completo nella costituzione e gestione, con vantaggi dai fondi PNRR e incentivi GSE.'
  },
  {
    icon: Car,
    title: 'E-Mobility',
    desc:
      'Stazioni di ricarica intelligenti con gestione e condivisione per flotte e utenti privati.'
  },
  {
    icon: Gauge,
    title: 'Sistemi di Efficientamento (EMS)',
    desc:
      'Dispositivi per ottimizzare l’impedenza e ridurre le perdite, migliorando l’efficienza in ambito residenziale e business.'
  },
  {
    icon: Users,
    title: 'Gruppi di Autoconsumo Collettivo',
    desc:
      'Soluzioni per condomini per ottimizzare produzione e consumo di energia rinnovabile.'
  },
  {
    icon: Building2,
    title: 'Soluzioni per il mondo Business',
    desc:
      'Dalla diagnosi energetica alla realizzazione turnkey con monitoraggio continuo delle performance.'
  }
];

const Services = () => {
  return (
    <section id="servizi" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Soluzioni per un futuro elettrico e sostenibile</h2>
          <p className="mt-3 text-slate-600">
            Dalla consulenza alla realizzazione, ci occupiamo di tutto il ciclo del progetto con partner e prodotti selezionati.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl bg-white ring-1 ring-slate-200 p-6 hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-emerald-100 text-emerald-700">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

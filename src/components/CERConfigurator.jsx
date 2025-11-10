import React, { useMemo, useState } from 'react';
import { Sun, Users, Gauge, TrendingUp } from 'lucide-react';

const format = (n) => n.toLocaleString('it-IT');

const CERConfigurator = () => {
  const [powerKw, setPowerKw] = useState(40); // Potenza impianto
  const [members, setMembers] = useState(12); // Numero utenze/condomini
  const [selfCons, setSelfCons] = useState(65); // % autoconsumo
  const [energyPrice, setEnergyPrice] = useState(0.22); // €/kWh

  // Assunzioni semplici e conservative per stima
  const kwhPerKwYear = 1200; // produzione media annua per kW installato
  const gseTariff = 0.11; // €/kWh incentivo condiviso (indicativo)

  const results = useMemo(() => {
    const production = powerKw * kwhPerKwYear; // kWh/anno
    const sharedKwh = production * (selfCons / 100);
    const savings = sharedKwh * energyPrice; // € risparmiati su energia non acquistata
    const incentives = sharedKwh * gseTariff; // € da tariffa GSE per energia condivisa
    const total = savings + incentives;
    const perMember = members > 0 ? total / members : 0;
    const co2Factor = 0.4; // kg CO2 evitati per kWh (mix medio)
    const co2SavedTons = (production * co2Factor) / 1000;

    return { production, sharedKwh, savings, incentives, total, perMember, co2SavedTons };
  }, [powerKw, kwhPerKwYear, selfCons, energyPrice, gseTariff, members]);

  return (
    <section id="cer" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/70 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 text-emerald-800 bg-emerald-100 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              <TrendingUp className="w-4 h-4" /> Configuratore rapido
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
              Comunità Energetiche Rinnovabili: stima benefici immediata
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Seleziona i parametri chiave e ottieni una proiezione di risparmio, incentivi e impatto ambientale.
              Dati indicativi — per un piano esecutivo ti guidiamo noi.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl ring-1 ring-slate-200 p-5">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Sun className="w-4 h-4 text-emerald-600" /> Potenza impianto (kW)
                </label>
                <input
                  type="range"
                  min={5}
                  max={500}
                  step={5}
                  value={powerKw}
                  onChange={(e) => setPowerKw(parseInt(e.target.value))}
                  className="w-full mt-3"
                />
                <div className="mt-2 text-slate-700 font-semibold">{powerKw} kW</div>
              </div>

              <div className="bg-white rounded-xl ring-1 ring-slate-200 p-5">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Users className="w-4 h-4 text-emerald-600" /> Numero utenze/membri
                </label>
                <input
                  type="range"
                  min={3}
                  max={100}
                  step={1}
                  value={members}
                  onChange={(e) => setMembers(parseInt(e.target.value))}
                  className="w-full mt-3"
                />
                <div className="mt-2 text-slate-700 font-semibold">{members} membri</div>
              </div>

              <div className="bg-white rounded-xl ring-1 ring-slate-200 p-5">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Gauge className="w-4 h-4 text-emerald-600" /> Autoconsumo (%)
                </label>
                <input
                  type="range"
                  min={30}
                  max={95}
                  step={1}
                  value={selfCons}
                  onChange={(e) => setSelfCons(parseInt(e.target.value))}
                  className="w-full mt-3"
                />
                <div className="mt-2 text-slate-700 font-semibold">{selfCons}%</div>
              </div>

              <div className="bg-white rounded-xl ring-1 ring-slate-200 p-5">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  €/kWh energia acquistata
                </label>
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="number"
                    step="0.01"
                    min="0.05"
                    max="0.60"
                    value={energyPrice}
                    onChange={(e) => setEnergyPrice(parseFloat(e.target.value || '0'))}
                    className="w-32 rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-slate-500">€/kWh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold">Risultati stimati</h3>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-800/60 rounded-lg p-4">
                  <div className="text-slate-300 text-xs uppercase">Produzione annua</div>
                  <div className="mt-2 text-2xl font-bold">{format(results.production)} kWh</div>
                  <div className="text-slate-400 text-sm">Impianto {powerKw} kW · {kwhPerKwYear} kWh/kW</div>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-4">
                  <div className="text-slate-300 text-xs uppercase">Energia condivisa</div>
                  <div className="mt-2 text-2xl font-bold">{format(Math.round(results.sharedKwh))} kWh</div>
                  <div className="text-slate-400 text-sm">Autoconsumo {selfCons}%</div>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-4">
                  <div className="text-slate-300 text-xs uppercase">Risparmio + incentivi</div>
                  <div className="mt-2 text-2xl font-bold">€ {format(Math.round(results.total))}</div>
                  <div className="text-slate-400 text-sm">Risparmio € {format(Math.round(results.savings))} · Incentivi € {format(Math.round(results.incentives))}</div>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-4">
                  <div className="text-slate-300 text-xs uppercase">Benefit per membro</div>
                  <div className="mt-2 text-2xl font-bold">€ {format(Math.round(results.perMember))}/anno</div>
                  <div className="text-slate-400 text-sm">{members} partecipanti</div>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a href="#contatti" className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-5 py-3 rounded-md font-semibold transition">
                  Richiedi una simulazione completa
                </a>
                <p className="text-slate-400 text-sm">
                  Riduzione CO₂ stimata: <span className="font-semibold text-white">{results.co2SavedTons.toFixed(1)} t/anno</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CERConfigurator;

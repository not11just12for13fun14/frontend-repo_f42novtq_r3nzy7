import React, { useMemo, useState } from 'react';
import { Sun, Users, Gauge, Leaf } from 'lucide-react';

export default function CERConfigurator() {
  const [powerKW, setPowerKW] = useState(50); // kW
  const [members, setMembers] = useState(20);
  const [selfConsumption, setSelfConsumption] = useState(60); // %
  const [energyPrice, setEnergyPrice] = useState(0.22); // €/kWh

  const results = useMemo(() => {
    const specificYield = 1300; // kWh/kW/anno (stima Italia Centro-Nord)
    const production = powerKW * specificYield; // kWh/anno
    const shared = production * (selfConsumption / 100);

    const saving = shared * energyPrice; // € risparmiati su energia condivisa
    const incentiveTariff = 0.11; // €/kWh incentivo GSE (indicativo)
    const incentives = shared * incentiveTariff;

    const totalBenefit = saving + incentives;
    const perMember = members > 0 ? totalBenefit / members : 0;
    const co2Factor = 0.35 / 1000; // tCO2 per kWh (0.35 kg/kWh)
    const co2Saved = production * co2Factor; // tonnellate

    return { production, shared, saving, incentives, totalBenefit, perMember, co2Saved };
  }, [powerKW, members, selfConsumption, energyPrice]);

  const Stat = ({ label, value, suffix, highlight }) => (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-white/60">{label}</p>
      <p className={`mt-1 text-lg font-semibold ${highlight ? 'text-emerald-300' : ''}`}>
        {value}
        {suffix}
      </p>
    </div>
  );

  const format = (num, digits = 0) => new Intl.NumberFormat('it-IT', { maximumFractionDigits: digits }).format(num);
  const euro = (num) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Configuratore CER</h2>
            <p className="text-white/70 mt-2">Stima istantanea di produzione, risparmi e impatti ambientali.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
            <Gauge size={14} /> Configuratore rapido
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Controls */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-6">
              <div>
                <label className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-white/80"><Sun size={16} className="text-amber-300"/> Potenza impianto</span>
                  <span className="text-white/70">{powerKW} kW</span>
                </label>
                <input type="range" min="5" max="1000" step="5" value={powerKW} onChange={(e) => setPowerKW(Number(e.target.value))} className="w-full accent-emerald-500" />
              </div>

              <div>
                <label className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-white/80"><Users size={16} className="text-blue-300"/> Membri</span>
                  <span className="text-white/70">{members}</span>
                </label>
                <input type="range" min="2" max="300" step="1" value={members} onChange={(e) => setMembers(Number(e.target.value))} className="w-full accent-emerald-500" />
              </div>

              <div>
                <label className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-white/80"><Leaf size={16} className="text-emerald-300"/> Autoconsumo</span>
                  <span className="text-white/70">{selfConsumption}%</span>
                </label>
                <input type="range" min="20" max="100" step="1" value={selfConsumption} onChange={(e) => setSelfConsumption(Number(e.target.value))} className="w-full accent-emerald-500" />
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-1">Prezzo energia (€/kWh)</label>
                <input type="number" step="0.01" min="0" value={energyPrice} onChange={(e) => setEnergyPrice(Number(e.target.value))} className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" />
              </div>

              <p className="text-xs text-white/50">Valori indicativi. Per una simulazione completa, contattaci: ottimizziamo incentivi e struttura finanziaria.</p>
            </div>
          </div>

          {/* Results */}
          <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-white/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Stat label="Produzione annua" value={format(results.production, 0)} suffix=" kWh" />
              <Stat label="Energia condivisa" value={format(results.shared, 0)} suffix=" kWh" />
              <Stat label="Risparmio stimato" value={euro(results.saving)} highlight />
              <Stat label="Incentivi GSE" value={euro(results.incentives)} />
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <Stat label="Beneficio totale" value={euro(results.totalBenefit)} highlight />
              <Stat label="per membro / anno" value={euro(results.perMember)} />
            </div>
            <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 text-sm flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/80"><Leaf size={16} className="text-emerald-300"/> CO₂ evitata</div>
              <div className="font-semibold">{format(results.co2Saved, 1)} t/anno</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-2 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors">Richiedi simulazione completa</a>
              <a href="#services" className="px-5 py-2 rounded-md bg-white/10 border border-white/15 hover:bg-white/15 transition-colors">Scopri le opzioni finanziarie</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

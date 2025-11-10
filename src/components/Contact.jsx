import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Contattaci</h2>
          <p className="text-white/70 mt-2">Parliamo del tuo impianto, incentivi e struttura finanziaria ideale.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2"><Mail size={16} className="text-emerald-300"/> info@oktavia.energy</div>
              <div className="flex items-center gap-2"><Phone size={16} className="text-emerald-300"/> +39 02 1234 5678</div>
            </div>
            <p className="text-xs text-white/50 mt-4">Audit preliminare gratuito per PMI selezionate.</p>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
            {!submitted ? (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Nome</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Il tuo nome" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/80 mb-1">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="nome@azienda.it" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm text-white/80 mb-1">Messaggio</label>
                  <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Raccontaci obiettivi e tempistiche" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-white/60">Risposta entro 24 ore</span>
                  <button className="px-5 py-2 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors">Invia</button>
                </div>
              </>
            ) : (
              <div className="text-sm text-emerald-300">Grazie! Ti ricontatteremo a breve.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

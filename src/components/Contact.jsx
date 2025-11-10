import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // Frontend-only demo: mostra un messaggio di successo
    setSubmitted(true);
  };

  return (
    <section id="contatti" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Parliamo del tuo progetto</h2>
            <p className="mt-4 text-slate-600">Che tu sia un’azienda, un comune o un privato, ti aiutiamo a identificare la soluzione più adatta per ridurre consumi e costi energetici.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-emerald-600" /> info@oktavia.energy</p>
              <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-600" /> +39 000 000 000</p>
            </div>
          </div>
          <div>
            <form onSubmit={onSubmit} className="bg-white rounded-xl ring-1 ring-slate-200 p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Nome</label>
                  <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Telefono</label>
                <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Messaggio</label>
                <textarea name="message" rows={5} value={form.message} onChange={onChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md font-medium transition">Invia richiesta</button>
              {submitted && (
                <p className="text-emerald-700 text-sm">Grazie! Ti contatteremo al più presto.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

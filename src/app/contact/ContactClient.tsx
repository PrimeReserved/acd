'use client';

import { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, Clock, Mail, Zap, CheckCircle, X, Loader2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { pageHeroImages } from "@/lib/images";

const serviceMap: Record<string, string> = {
  mechanical: 'Mechanical & Valve Services',
  ndt: 'NDT / Inspection Services',
  construction: 'Construction & Maintenance',
  electrical: 'Electrical Engineering',
  'mechanical-engineering': 'Mechanical Engineering',
  flare: 'Flare Systems',
  tanks: 'Tank Construction',
  pipeline: 'Pipeline & Flowline Construction',
  equipment: 'Equipment Supply & Leasing',
  canalization: 'Canalization Projects',
  chemicals: 'Chemical & Fluids Supply',
};

const phones = [
  "+234 (0) 803 410 7529",
  "+234 (0) 706 251 8233",
  "+234 (0) 805 218 8337",
];

const serviceOptions = [
  'Mechanical & Valve Services',
  'NDT / Inspection Services',
  'Construction & Maintenance',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Flare Systems',
  'Tank Construction',
  'Pipeline & Flowline Construction',
  'Equipment Supply & Leasing',
  'Canalization Projects',
  'Chemical & Fluids Supply',
  'General Enquiry',
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactClient() {
  const [selectedService, setSelectedService] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastService, setToastService] = useState('');
  const [selectHighlight, setSelectHighlight] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceId = params.get('service');
    if (serviceId && serviceMap[serviceId]) {
      const name = serviceMap[serviceId];
      setSelectedService(name);
      setToastService(name);
      setTimeout(() => { formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 350);
      setTimeout(() => setSelectHighlight(true), 700);
      setTimeout(() => setSelectHighlight(false), 2200);
      setTimeout(() => setShowToast(true), 500);
      setTimeout(() => setShowToast(false), 5500);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, email, phone, service: selectedService, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      setName(''); setCompany(''); setEmail(''); setPhone('');
      setSelectedService(''); setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <div
        className={`fixed top-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[360px] transition-all duration-500 ease-out ${
          showToast ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div
          className="rounded-2xl shadow-2xl p-4 flex items-start gap-3 border border-white/10"
          style={{ background: '#0f3460' }}
        >
          <div className="w-9 h-9 bg-orange/20 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle size={17} className="text-orange" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-heading font-bold text-sm">Service Pre-Selected</p>
            <p className="text-white/70 text-xs mt-1 leading-relaxed">
              <span className="text-orange font-semibold">{toastService}</span> has been added to your form.
              Fill in your details below and submit your enquiry.
            </p>
          </div>
          <button onClick={() => setShowToast(false)} className="text-white/40 hover:text-white/80 transition-colors shrink-0 p-0.5" aria-label="Dismiss">
            <X size={15} />
          </button>
        </div>
      </div>

      <PageHero
        tag="Reach Out"
        title="Contact Us"
        subtitle="Our team is ready to discuss your project requirements and provide tailored EPIC service solutions."
        image={pageHeroImages.contact}
        objectPosition="top"
      />

      <section className="bg-off-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-[0_24px_80px_-12px_rgba(0,0,0,0.18)]">

            <div
              className="lg:col-span-2 p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative"
              style={{ background: 'linear-gradient(135deg, #0f3460 0%, #8b1515 100%)' }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.04] rounded-l-3xl"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 0, transparent 50%)',
                  backgroundSize: '12px 12px',
                }}
              />

              <div className="relative z-10">
                <div className="mb-8 sm:mb-10">
                  <span className="text-orange font-bold text-[10px] tracking-[0.22em] uppercase block mb-3">Get In Touch</span>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4">
                    Let&apos;s Talk About<br />Your Project
                  </h2>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Whether you have a project brief, a general enquiry, or simply
                    want to explore how Alpha Capital D can support your operations
                    — reach out and our team will respond within 24 hours.
                  </p>
                </div>

                <div className="w-full h-px bg-white/10 mb-7" />

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={15} className="text-orange" />
                    </div>
                    <div>
                      <div className="text-white/50 text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5">Office Address</div>
                      <p className="text-white/85 text-sm leading-relaxed">
                        No. 1 Exozia Close off Airport Road,<br />
                        Behind AA Rono Filling Station,<br />
                        Port Harcourt, Rivers State, Nigeria.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={15} className="text-orange" />
                    </div>
                    <div>
                      <div className="text-white/50 text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5">Phone Numbers</div>
                      <div className="space-y-1.5">
                        {phones.map((n) => (
                          <a key={n} href={`tel:${n.replace(/\s|\(|\)|-/g, "")}`} className="block text-white/85 hover:text-orange text-sm transition-colors duration-200">
                            {n}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={15} className="text-orange" />
                    </div>
                    <div>
                      <div className="text-white/50 text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5">Email</div>
                      <a href="mailto:info@alphacapitald.com" className="text-white/85 hover:text-orange text-sm transition-colors duration-200">
                        info@alphacapitald.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={15} className="text-orange" />
                    </div>
                    <div>
                      <div className="text-white/50 text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5">Business Hours</div>
                      <p className="text-white/85 text-sm">Mon – Fri: 8:00 AM – 5:00 PM</p>
                      <p className="text-white/85 text-sm">Saturday: 9:00 AM – 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative z-10 mt-8 sm:mt-10 flex items-center gap-3 rounded-2xl p-4"
                style={{ background: 'rgba(242,190,24,0.12)', border: '1px solid rgba(242,190,24,0.25)' }}
              >
                <div className="w-9 h-9 bg-orange/20 rounded-lg flex items-center justify-center shrink-0">
                  <Zap size={16} className="text-orange" />
                </div>
                <div>
                  <div className="text-orange font-heading font-bold text-sm">24 / 7 Emergency Response</div>
                  <div className="text-white/60 text-xs mt-0.5">For urgent on-site operational issues — call any time.</div>
                </div>
              </div>
            </div>

            <div ref={formRef} className="lg:col-span-3 bg-white p-8 sm:p-10 lg:p-12">
              {status !== 'success' && (
                <div className="mb-7">
                  <h3 className="font-heading font-black text-2xl text-navy mb-1.5">Send Us a Message</h3>
                  <p className="text-steel/65 text-sm">Describe your project and we&apos;ll get back to you within 24 hours.</p>
                </div>
              )}

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-navy">Message Sent!</h3>
                  <p className="text-steel/65 text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button onClick={() => setStatus('idle')} className="mt-2 text-xs font-bold text-orange hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-steel/80 mb-2 tracking-wide uppercase">
                        Full Name <span className="text-orange">*</span>
                      </label>
                      <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-steel placeholder:text-steel/35 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all bg-gray-50 focus:bg-white"
                        required disabled={status === 'loading'} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-steel/80 mb-2 tracking-wide uppercase">Company / Organisation</label>
                      <input type="text" placeholder="Your Company Ltd" value={company} onChange={(e) => setCompany(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-steel placeholder:text-steel/35 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all bg-gray-50 focus:bg-white"
                        disabled={status === 'loading'} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-steel/80 mb-2 tracking-wide uppercase">
                        Email Address <span className="text-orange">*</span>
                      </label>
                      <input type="email" placeholder="john@company.com" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-steel placeholder:text-steel/35 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all bg-gray-50 focus:bg-white"
                        required disabled={status === 'loading'} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-steel/80 mb-2 tracking-wide uppercase">Phone Number</label>
                      <input type="tel" placeholder="+234 800 000 0000" value={phone} onChange={(e) => setPhone(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-steel placeholder:text-steel/35 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all bg-gray-50 focus:bg-white"
                        disabled={status === 'loading'} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-steel/80 mb-2 tracking-wide uppercase">Service of Interest</label>
                    <div className="relative">
                      <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} disabled={status === 'loading'}
                        className={`w-full border rounded-xl px-4 py-3 text-sm text-steel focus:outline-none focus:ring-2 transition-all appearance-none pr-10 bg-gray-50 focus:bg-white ${
                          selectHighlight ? 'border-orange ring-2 ring-orange/20 bg-orange/5' : 'border-gray-200 focus:border-orange focus:ring-orange/10'
                        }`}>
                        <option value="">Select a service area...</option>
                        {serviceOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                          <path d="M1 1L6 6L11 1" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    {selectedService && selectedService !== 'General Enquiry' && (
                      <div className="flex items-center gap-1.5 mt-2">
                        <CheckCircle size={11} className="text-orange shrink-0" />
                        <span className="text-[11px] text-orange font-semibold">Service pre-selected — fill in your details and submit below</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-steel/80 mb-2 tracking-wide uppercase">
                      Project Details <span className="text-orange">*</span>
                    </label>
                    <textarea rows={5} placeholder="Describe your project, scope, location, timeline, and any other relevant details..."
                      value={message} onChange={(e) => setMessage(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-steel placeholder:text-steel/35 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/10 transition-all bg-gray-50 focus:bg-white resize-none"
                      required disabled={status === 'loading'} />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <X size={15} className="text-red-500 shrink-0" />
                      <p className="text-red-700 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading'}
                    className="w-full text-white py-4 rounded-xl font-heading font-bold text-sm tracking-wide hover:opacity-90 active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #0f3460 0%, #8b1515 100%)' }}>
                    {status === 'loading' ? (<><Loader2 size={16} className="animate-spin" /> Sending…</>) : 'Send Message →'}
                  </button>

                  <p className="text-center text-steel/55 text-xs leading-relaxed px-4">
                    Your enquiry is treated in strict confidence. By submitting this form you consent to Alpha Capital D
                    Integrated Services contacting you regarding your project. We do not share your details with third parties.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-off-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">Base of Operations</span>
            <h2 className="font-heading font-bold text-3xl text-navy mt-3">Find Us in Port Harcourt</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Head Office", value: "No. 1 Exozia Close, Airport Road, Port Harcourt" },
              { label: "State", value: "Rivers State, Federal Republic of Nigeria" },
              { label: "Operating Regions", value: "Niger Delta · Imo State · Ondo State · Nationwide" },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="text-navy font-heading font-bold text-xs tracking-widest uppercase mb-2">{item.label}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  Eye,
  HardHat,
  Zap,
  Activity,
  Flame,
  ArrowRight,
  Shield,
  Award,
  Users,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { heroImages, serviceImages, homeImages } from '@/lib/images';

// ─── HERO SLIDES ──────────────────────────────────────────────────────────
const heroSlides = [
  {
    image: heroImages.slide1,
    tag: 'EPIC Services Provider',
    headline1: "Engineering Nigeria's",
    headline2: 'Energy Future',
    sub: 'Alpha Capital D delivers world-class EPIC services across Oil & Gas, Power Generation and Construction for Nigeria and beyond.',
    cta1: { label: 'Explore Our Services', href: '/services' },
    cta2: { label: 'View Projects', href: '/projects' },
  },
  {
    image: heroImages.slide2,
    tag: 'Construction & Maintenance',
    headline1: 'Built on Safety.',
    headline2: 'Delivered with Precision.',
    sub: 'Full-scope pipeline construction and maintenance — over 60 km delivered for SPDC and NAOC across Nigeria.',
    cta1: { label: 'Construction Services', href: '/services#construction' },
    cta2: { label: 'Our Track Record', href: '/projects' },
  },
  {
    image: heroImages.slide3,
    tag: 'Industrial Excellence',
    headline1: 'Your Trusted Partner',
    headline2: 'in Industrial Excellence',
    sub: 'From valve services and NDT to flare systems, tank construction and chemical supply — all under one roof.',
    cta1: { label: 'All Our Services', href: '/services' },
    cta2: { label: 'Get In Touch', href: '/contact' },
  },
];

// ─── HOMEPAGE SERVICES (6 cards) ──────────────────────────────────────────
const homepageServices = [
  {
    icon: Wrench,
    title: 'Mechanical & Valve Services',
    category: 'Valve Lifecycle',
    desc: 'Full valve lifecycle management — sale, refurbishment, calibration, overhauling and recertification, plus PSV and pigging.',
    image: serviceImages.mechanical,
    href: '/services#mechanical',
  },
  {
    icon: Eye,
    title: 'NDT & Inspection',
    category: 'Non-Destructive Testing',
    desc: 'Radiographic gamma ray, MPI, LPI, UT, corrosion monitoring, pipe integrity inspection and cathodic protection.',
    image: serviceImages.ndt,
    href: '/services#ndt',
  },
  {
    icon: HardHat,
    title: 'Construction & Maintenance',
    category: 'Civil & Industrial',
    desc: 'Pipe welding, fabrication, pipeline laying, insulation, grit blasting, painting and full QA/QC management.',
    image: serviceImages.construction,
    href: '/services#construction',
  },
  {
    icon: Zap,
    title: 'Electrical Engineering',
    category: 'Electrical Services',
    desc: 'Industrial wiring, cable installations, tray work, panel building, and electrical services for all facility types.',
    image: serviceImages.electrical,
    href: '/services#electrical',
  },
  {
    icon: Flame,
    title: 'Flare Systems',
    category: 'Flare & Ignition',
    desc: '15+ flare system installations across Niger Delta — including ignition systems, walkways, bund walls and commissioning.',
    image: serviceImages.flare,
    href: '/services#flare',
  },
  {
    icon: Activity,
    title: 'Flowline & Pipeline Construction',
    category: 'Pipeline Works',
    desc: '60+ km of pipeline and flowline construction delivered for SPDC and NAOC across land, swamp and river crossings.',
    image: serviceImages.pipeline,
    href: '/services#pipeline',
  },
];

// ─── STATS ────────────────────────────────────────────────────────────────
const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '60+', label: 'KM Pipeline Laid' },
  { value: '20+', label: 'Projects Completed' },
  { value: '6+', label: 'Communities Served' },
];

// ─── CLIENTS ──────────────────────────────────────────────────────────────
const clients = ['SPDC', 'Saipem', 'Walter Smith', 'NAOC', 'CS Oilfields'];

// ─── FEATURED PROJECTS ────────────────────────────────────────────────────
const featuredProjects = [
  {
    title: 'Fire Water & Diesel Tank Erection',
    client: 'Saipem',
    location: 'Obite, Rivers State',
    category: 'Tank Construction',
  },
  {
    title: '4" × 6km Flowline Construction',
    client: 'Walter Smith',
    location: 'Ibigwe, Imo State',
    category: 'Pipeline',
  },
  {
    title: '4" Flowline Replacement — 9.4km',
    client: 'SPDC',
    location: 'Nembe 1, Niger Delta',
    category: 'Pipeline',
  },
  {
    title: '6.5km Canal Dredging & Desilting',
    client: 'SPDC',
    location: 'Okpori/Ughelli Canal',
    category: 'Canalization',
  },
];

// ─── PILLARS ──────────────────────────────────────────────────────────────
const pillars = [
  { icon: Shield, label: 'Safety-First Culture' },
  { icon: Award, label: 'International Standards' },
  { icon: Users, label: 'Expert Workforce' },
  { icon: CheckCircle, label: 'Proven Track Record' },
];

// ═══════════════════════════════════════════════════════════════════════════
export default function HomeClient() {
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(
    () => setSlide((p) => (p + 1) % heroSlides.length),
    [],
  );
  const prev = useCallback(
    () => setSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length),
    [],
  );

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [isPaused, next]);

  return (
    <>
      {/* ═══ HERO SLIDER ═════════════════════════════════════════════ */}
      <section
        className="relative min-h-[650px] flex flex-col overflow-hidden"
        style={{ height: 'calc(100vh - 52px)' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slide backgrounds */}
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <Image
              src={s.image}
              alt={s.tag}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(155deg, rgba(15,52,96,0.93) 0%, rgba(139,21,21,0.85) 100%)',
          }}
        />

        {/* Slide content — vertically centered */}
        <div className="flex-1 flex items-center justify-center relative z-[2] pt-20 px-6 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto text-center relative">
            {heroSlides.map((s, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === slide
                    ? 'opacity-100 translate-y-0 relative'
                    : 'opacity-0 translate-y-6 absolute inset-0 pointer-events-none'
                }`}
              >
                {/* Tag */}
                <div className="flex items-center justify-center mb-4 sm:mb-5">
                  <span
                    className="text-white/90 text-[10px] sm:text-[11px] font-bold tracking-[0.32em] uppercase"
                    style={{ wordSpacing: '0.18em' }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h1 className="font-heading font-black text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-7xl text-white mb-4 sm:mb-5 tracking-tight">
                  {s.headline1}
                  <br />
                  <span className="text-orange">{s.headline2}</span>
                </h1>
                <p className="text-white/90 text-sm sm:text-xl max-w-[92%] sm:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10">
                  {s.sub}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link
                    href={s.cta1.href}
                    className="group inline-flex items-center justify-center gap-2 bg-orange text-white px-7 py-3.5 rounded font-heading font-bold text-sm tracking-wide hover:bg-orange-dark active:scale-95 transition-all duration-200 w-[82%] sm:w-auto"
                  >
                    {s.cta1.label}
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href={s.cta2.href}
                    className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded font-heading font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/60 transition-all duration-200 w-[82%] sm:w-auto"
                  >
                    {s.cta2.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider controls */}
        <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-7 flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex items-center gap-2.5">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === slide
                    ? 'w-8 h-2 bg-orange'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/15 hover:border-white/60 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/15 hover:border-white/60 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div
        className="w-full"
        style={{
          background:
            'linear-gradient(135deg, #1e0b45 0%, #5c1a2a 50%, #8b1515 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/8">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4 py-2">
              <div className="font-heading font-black text-2xl sm:text-3xl text-orange leading-none mb-1">
                {s.value}
              </div>
              <div className="text-white/75 text-xs tracking-wide uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ WHO WE ARE ══════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20" style={{ background: '#0f3460' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
                Who We Are
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mt-3 mb-5 leading-snug">
                A Trusted Name in Nigeria&apos;s Energy Sector
              </h2>
              <p className="text-white/90 leading-relaxed mb-6">
                Alpha Capital D Integrated Services Ing Ltd is a leading EPIC
                company committed to executing projects safely, on time and
                within budget — without compromising quality. We serve upstream,
                midstream and downstream operations across Nigeria.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-orange font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {pillars.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-white/8 border border-white/15 rounded-xl p-5 flex items-center gap-3 hover:border-orange/40 transition-colors"
                >
                  <div className="w-9 h-9 bg-orange/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-orange" />
                  </div>
                  <span className="text-white/90 text-sm font-medium leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ════════════════════════════════════════════════ */}
      <section className="bg-off-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
                Our Expertise
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-navy mt-2 leading-tight">
                View Our Services
              </h2>
              <p className="text-slate-600 max-w-lg mt-4 leading-relaxed">
                Capital D delivers integrated solutions across the entire energy
                value chain — from valve maintenance to complete pipeline
                systems.
              </p>
            </div>
            <Link
              href="/services"
              className="group shrink-0 inline-flex items-center gap-2 border-2 border-navy text-navy px-6 py-3 rounded font-heading font-bold text-sm tracking-wide hover:bg-navy hover:text-white transition-all duration-200"
            >
              Explore All Services
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homepageServices.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange/20 transition-all duration-400 flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-navy/10 to-transparent" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-orange rounded-xl flex items-center justify-center shadow-lg">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-orange font-semibold text-[10px] tracking-[0.2em] uppercase mb-2">
                      {s.category}
                    </span>
                    <h3 className="font-heading font-bold text-navy text-lg mb-3 leading-snug uppercase">
                      {s.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-orange mb-4" />
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-orange text-sm font-semibold mt-5">
                      Learn More
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-navy text-white px-10 py-4 rounded font-heading font-bold text-sm tracking-widest uppercase hover:bg-blue-light transition-colors"
            >
              Explore All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ OUR PEOPLE ══════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={homeImages.ourPeople}
            alt="Our professional team"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(155deg, rgba(15,52,96,0.93) 0%, rgba(139,21,21,0.85) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
                Human Capital
              </span>
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mt-3 mb-6 leading-tight">
                Our People
              </h2>
              <p className="text-white/95 text-lg leading-relaxed mb-4">
                Capital D Integrated Services Ing Ltd Nigeria limited has been
                able to assemble a team of competent, articulate and experienced
                professional that plan, execute and supervise projects in a safe
                and cost and cost effective manner.
              </p>
              <p className="text-white/90 leading-relaxed mb-10">
                The company has built a strong base that facilitates the
                execution of any contract without delay.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded font-heading font-bold text-sm tracking-wide hover:bg-orange-dark transition-colors"
              >
                Meet Our Team <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { value: '15+', label: 'Years Active', sub: 'In the energy sector' },
                { value: '60+', label: 'KM Delivered', sub: 'Pipeline & flowline' },
                { value: '20+', label: 'Projects Done', sub: 'For top operators' },
                { value: '5+', label: 'Major Clients', sub: 'SPDC, Saipem & more' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-orange/40 transition-colors"
                >
                  <div className="font-heading font-black text-4xl text-orange mb-1">
                    {item.value}
                  </div>
                  <div className="font-heading font-bold text-white text-base">
                    {item.label}
                  </div>
                  <div className="text-white/75 text-xs mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT STATS ════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={homeImages.impactStats}
            alt="Operations at scale"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/92" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
              Our Impact
            </span>
            <h2 className="font-heading font-bold text-4xl text-white mt-3">
              Proven Performance at Scale
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center bg-white/8 border border-white/15 rounded-2xl py-10 px-4"
              >
                <div className="font-heading font-black text-5xl sm:text-6xl text-orange mb-2">
                  {s.value}
                </div>
                <div className="text-white/90 text-sm tracking-wide uppercase font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PROJECTS ═══════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-14">
            <div>
              <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
                Track Record
              </span>
              <h2 className="font-heading font-bold text-4xl text-navy mt-3">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-orange font-semibold text-sm"
            >
              View All Projects
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featuredProjects.map((p, i) => (
              <div
                key={i}
                className="group flex gap-5 items-start p-6 rounded-xl border border-gray-100 hover:border-orange/25 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 bg-orange rounded-xl flex items-center justify-center shrink-0 font-heading font-black text-white text-sm">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy text-base group-hover:text-orange transition-colors leading-snug mb-1">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-3">{p.location}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {p.client}
                    </span>
                    <span className="bg-off-white text-slate-600 text-xs font-medium px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENTS ═════════════════════════════════════════════════ */}
      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
              Our Clients
            </span>
            <h2 className="font-heading font-bold text-3xl text-navy mt-3">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {clients.map((c) => (
              <div
                key={c}
                className="bg-white border border-gray-200 rounded-xl px-8 py-4 font-heading font-bold text-navy text-lg hover:border-orange hover:text-orange transition-all cursor-default"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ══════════════════════════════════════════════ */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange font-bold text-[10px] tracking-[0.22em] uppercase mb-4 block">
            Ready to Work Together
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-navy mb-5 leading-tight">
            Partner With Us
          </h2>
          <p className="text-steel/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss your next project. Our experienced team is ready
            to deliver on time and within budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded font-heading font-bold text-sm tracking-wide hover:bg-navy-light active:scale-95 transition-all"
            >
              Get In Touch <ArrowRight size={15} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy/20 text-navy px-8 py-4 rounded font-heading font-bold text-sm tracking-wide hover:border-navy hover:bg-navy/5 transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

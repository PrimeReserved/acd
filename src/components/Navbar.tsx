'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Wrench,
  Eye,
  HardHat,
  Zap,
  Activity,
  Truck,
  Flame,
  Layers,
  Waves,
  FlaskConical,
  ArrowRight,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const serviceDropdown = [
  {
    id: 'mechanical',
    label: 'Mechanical & Valve Services',
    icon: Wrench,
    desc: 'Valve lifecycle — sale, refurbishment & recertification',
  },
  {
    id: 'ndt',
    label: 'NDT / Inspection',
    icon: Eye,
    desc: 'Gamma ray, MPI, LPI, UT & corrosion monitoring',
  },
  {
    id: 'construction',
    label: 'Construction & Maintenance',
    icon: HardHat,
    desc: 'Pipe welding, fabrication, blasting & painting',
  },
  {
    id: 'electrical',
    label: 'Electrical Engineering',
    icon: Zap,
    desc: 'Industrial wiring, panels & cable installations',
  },
  {
    id: 'mechanical-engineering',
    label: 'Mechanical Engineering',
    icon: Activity,
    desc: 'Pump repairs, tank calibration & leak detection',
  },
  {
    id: 'flare',
    label: 'Flare Systems',
    icon: Flame,
    desc: '15+ flare installations across the Niger Delta',
  },
  {
    id: 'tanks',
    label: 'Tank Construction',
    icon: Layers,
    desc: 'Petroleum, fire water & gas storage tanks',
  },
  {
    id: 'pipeline',
    label: 'Flowline & Pipeline',
    icon: Activity,
    desc: '60+ km constructed for SPDC & NAOC',
  },
  {
    id: 'equipment',
    label: 'Equipment Supply & Leasing',
    icon: Truck,
    desc: 'Excavators, cranes, barges & payloaders',
  },
  {
    id: 'canalization',
    label: 'Canalization Projects',
    icon: Waves,
    desc: 'Canal dredging & erosion control works',
  },
  {
    id: 'chemicals',
    label: 'Chemical & Fluids Supply',
    icon: FlaskConical,
    desc: 'Drilling & production chemicals via CS Oilfields',
  },
];

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const openDropdown = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setServicesOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const transparent = !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
          transparent
            ? 'bg-transparent'
            : 'bg-white/97 shadow-sm shadow-slate-900/10 backdrop-blur-md'
        }`}
      >
        {/* ── Top info bar ──────────────────────────────────────────── */}
        <div
          className={`hidden sm:block overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
            scrolled ? 'max-h-12' : 'max-h-0'
          }`}
        >
          <div
            className="rounded-b-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, #0f3460 0%, #8b1515 100%)' }}
          >
            <div className="flex items-center gap-3 text-[11px] text-white/85">
              <span>+234 (0) 803 410 7529</span>
              <span className="text-white/30">|</span>
              <span>+234 (0) 706 251 8233</span>
            </div>
            <a
              href="mailto:info@alphacapitald.com"
              className="text-[11px] text-white/85 hover:text-white transition-colors"
            >
              info@alphacapitald.com
            </a>
          </div>
        </div>

        {/* ── Main nav row ──────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                <Image
                  src={
                    scrolled
                      ? 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776525653/logo-no-underline-wb_cd0gxo.png'
                      : 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776525836/alphacapitald-logo-main-wt_j2pg5r.png'
                  }
                  alt="Alpha Capital D Logo"
                  fill
                  className="object-contain transition-all duration-500"
                  priority
                />
              </div>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 relative text-sm font-medium tracking-wide transition-colors duration-200 py-1 ${
                        pathname?.startsWith('/services')
                          ? 'text-orange'
                          : transparent
                            ? 'text-white/95 hover:text-white'
                            : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                      {pathname?.startsWith('/services') && (
                        <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-orange rounded-full" />
                      )}
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-200 py-1 ${
                      pathname === link.href
                        ? 'text-orange'
                        : transparent
                          ? 'text-white/95 hover:text-white'
                          : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-orange rounded-full" />
                    )}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="bg-orange text-white px-5 py-2.5 rounded font-heading font-bold text-sm tracking-wide hover:bg-orange-dark transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile burger */}
            <button
              className={`lg:hidden p-3 -mr-2 rounded transition-colors ${
                transparent ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-slate-100'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* ══ DESKTOP MEGA MENU ═══════════════════════════════════════ */}
        <div
          className={`hidden lg:block absolute top-full left-0 right-0 transition-all duration-200 ease-out origin-top ${
            servicesOpen
              ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 scale-y-[0.97] -translate-y-2 pointer-events-none'
          }`}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          {/* Rainbow top accent */}
          <div
            className="h-[2px] w-full"
            style={{ background: 'linear-gradient(90deg, #0f3460 0%, #f2be18 50%, #8b1515 100%)' }}
          />

          <div className="bg-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.22)]">
            <div className="max-w-7xl mx-auto flex min-h-[380px]">

              {/* ── Left hero panel ──────────────────────────────── */}
              <div
                className="w-[300px] xl:w-[320px] shrink-0 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0f3460 0%, #8b1515 100%)' }}
              >
                {/* Decorative radial blobs */}
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(242,190,24,0.12), transparent 70%)' }}
                />
                <div
                  className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)' }}
                />
                {/* Subtle grid texture */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.04]"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0, rgba(255,255,255,0.4) 1px, transparent 0, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.4) 0, rgba(255,255,255,0.4) 1px, transparent 0, transparent 40px)',
                  }}
                />

                <div className="relative z-10 flex flex-col h-full p-8">
                  {/* Tag */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-[3px] h-4 bg-orange rounded-sm" />
                    <span className="text-orange text-[10px] font-bold tracking-[0.25em] uppercase">
                      Our Services
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-heading font-black text-2xl xl:text-[26px] text-white leading-tight mb-3">
                    Integrated<br />EPIC Solutions
                  </h3>
                  <p className="text-white/70 text-[13px] leading-relaxed mb-8">
                    Specialist services across oil &amp; gas, construction,
                    power generation, and chemical supply.
                  </p>

                  {/* Stats stack */}
                  <div className="space-y-4 mb-8 flex-1">
                    {[
                      { value: '15+', label: 'Years in the Energy Sector' },
                      { value: '60+', label: 'KM Pipeline Constructed' },
                      { value: '20+', label: 'Projects Delivered' },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center gap-4">
                        <span className="font-heading font-black text-orange text-xl w-12 shrink-0">
                          {stat.value}
                        </span>
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-white/55 text-[11px] text-right leading-snug max-w-[100px]">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="group inline-flex items-center justify-center gap-2 bg-orange text-white px-5 py-3 rounded font-heading font-bold text-xs tracking-wide hover:bg-orange-dark transition-colors"
                  >
                    View All Services
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* ── Right services grid ───────────────────────────── */}
              <div className="flex-1 flex flex-col px-8 py-7">
                {/* Grid header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                  <span className="font-heading font-bold text-navy text-sm tracking-wide">
                    Browse by Service
                  </span>
                  <span className="text-slate-400 text-[11px] font-medium tracking-wide uppercase">
                    Full Service Portfolio
                  </span>
                </div>

                {/* 3-column service cards */}
                <div className="grid grid-cols-3 xl:grid-cols-3 gap-x-3 gap-y-1 flex-1">
                  {serviceDropdown.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link
                        key={s.id}
                        href={`/services#${s.id}`}
                        onClick={() => setServicesOpen(false)}
                        className="group relative flex items-start gap-3 px-3.5 py-3 rounded-xl border border-transparent hover:border-orange/20 hover:bg-orange/[0.035] transition-all duration-150"
                      >
                        {/* Left accent bar */}
                        <span className="absolute left-0 top-3 bottom-3 w-[2.5px] rounded-r bg-orange scale-y-0 group-hover:scale-y-100 transition-transform duration-150 origin-center" />

                        {/* Icon */}
                        <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover:bg-orange flex items-center justify-center shrink-0 transition-colors duration-150 mt-0.5">
                          <Icon
                            size={15}
                            className="text-slate-500 group-hover:text-white transition-colors duration-150"
                          />
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">
                          <p className="text-[12.5px] font-semibold text-slate-800 group-hover:text-navy leading-snug mb-0.5 truncate transition-colors">
                            {s.label}
                          </p>
                          <p className="text-[11px] text-slate-400 group-hover:text-slate-500 leading-snug line-clamp-2 transition-colors">
                            {s.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Bottom bar — quick actions */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-[11px] text-slate-400">
                    Need help choosing the right service?
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => setServicesOpen(false)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-orange hover:text-orange-dark transition-colors"
                  >
                    Talk to our team <ArrowRight size={11} />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom fade shadow */}
          <div className="h-1.5" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.06), transparent)' }} />
        </div>
      </header>

      {/* Backdrop — dims page content while mega menu is open */}
      <div
        className={`hidden lg:block fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] transition-opacity duration-200 ${
          servicesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onMouseEnter={closeDropdown}
      />

      {/* ══ MOBILE MENU ════════════════════════════════════════════════ */}
      <div
        aria-hidden={!menuOpen}
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Blurred gradient backdrop */}
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            background:
              'linear-gradient(155deg, rgba(15,52,96,0.97) 0%, rgba(139,21,21,0.95) 100%)',
          }}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sticky header — always visible, does not scroll */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10 shrink-0">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="https://res.cloudinary.com/dfwty72r9/image/upload/v1776525836/alphacapitald-logo-main-wt_j2pg5r.png"
                alt="Alpha Capital D Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <button
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        {/* Scrollable nav content */}
        <div
          className={`relative z-10 flex-1 overflow-y-auto px-6 py-5 transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="space-y-1.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-4 px-5 rounded-2xl text-lg font-semibold text-white/90 hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Mobile services sub-list */}
                  {mobileServicesOpen && (
                    <div className="mt-1 ml-3 border-l border-white/12 pl-4 space-y-0.5">
                      {serviceDropdown.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.id}
                            href={`/services#${s.id}`}
                            onClick={() => setMenuOpen(false)}
                            className="nav-service-item flex items-center gap-3 py-2.5 px-3 rounded-xl text-white/80 hover:text-white text-sm font-medium"
                          >
                            <Icon size={14} className="text-orange shrink-0" />
                            {s.label}
                          </Link>
                        );
                      })}
                      <Link
                        href="/services"
                        onClick={() => setMenuOpen(false)}
                        className="nav-service-item flex items-center gap-2 py-2.5 px-3 rounded-xl text-orange font-semibold text-sm"
                      >
                        <ArrowRight size={13} />
                        All Services
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between py-4 px-5 rounded-2xl text-lg font-semibold transition-colors ${
                    pathname === link.href
                      ? 'bg-orange/20 text-orange'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                  <ChevronRight size={18} className="opacity-50" />
                </Link>
              )
            )}

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block bg-orange text-slate-950 px-5 py-4 rounded-2xl font-heading font-bold text-base text-center hover:bg-orange-dark transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Sticky footer — always visible */}
        <div className="relative z-10 px-6 py-4 border-t border-white/12 shrink-0">
          <div className="flex flex-wrap justify-between gap-3 text-xs text-white/70">
            <a href="tel:+2348034107529" className="hover:text-white transition-colors">
              +234 (0) 803 410 7529
            </a>
            <a href="mailto:info@alphacapitald.com" className="hover:text-white transition-colors">
              info@alphacapitald.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

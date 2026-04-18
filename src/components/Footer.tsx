import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, ChevronRight, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Mechanical & Valve Services', href: '/services#mechanical' },
  { label: 'NDT / Inspection', href: '/services#ndt' },
  { label: 'Construction & Maintenance', href: '/services#construction' },
  { label: 'Pipeline Construction', href: '/services#pipeline' },
  { label: 'Electrical Engineering', href: '/services#electrical' },
  { label: 'Flare Systems', href: '/services#flare' },
  { label: 'Tank Construction', href: '/services#tanks' },
  { label: 'Equipment Leasing', href: '/services#equipment' },
  { label: 'Chemical & Fluids', href: '/services#chemicals' },
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: '#0f3460' }}>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-10">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11 shrink-0">
                <Image
                  src="https://res.cloudinary.com/dfwty72r9/image/upload/v1776525836/alphacapitald-logo-main-wt_j2pg5r.png"
                  alt="Alpha Capital D"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-heading font-black text-sm leading-tight tracking-wide text-white">
                  ALPHA CAPITAL D
                </div>
                <div className="text-orange text-[10px] tracking-widest uppercase mt-0.5">
                  Integrated Services
                </div>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Leading EPIC services provider in Nigeria&apos;s Oil &amp; Gas,
              Power Generation, and Infrastructure sectors. Port Harcourt, Rivers State.
            </p>
            {/* Three-line gold accent */}
            <div className="flex flex-col gap-1.5">
              <div className="h-[2px] w-10 rounded-full bg-orange opacity-90" />
              <div className="h-[2px] w-7 rounded-full bg-orange opacity-55" />
              <div className="h-[2px] w-4 rounded-full bg-orange opacity-30" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-[11px] tracking-[0.18em] uppercase text-orange mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/75 hover:text-white text-sm transition-colors duration-200 group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-orange/50 shrink-0 group-hover:translate-x-0.5 group-hover:text-orange transition-all"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-[11px] tracking-[0.18em] uppercase text-orange mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 text-white/75 hover:text-white text-sm transition-colors duration-200 group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-orange/50 shrink-0 group-hover:translate-x-0.5 group-hover:text-orange transition-all"
                    />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-heading font-bold text-[11px] tracking-[0.18em] uppercase text-orange mb-5">
              Contact Us
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0 lg:space-y-5">
              <li className="flex gap-3 col-span-2 lg:col-span-1">
                <MapPin size={15} className="text-orange shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm leading-relaxed">
                  No. 1 Exozia Close off Airport Road, Behind AA Rono Filling
                  Station by Obirikwere, Port Harcourt, Rivers State, Nigeria.
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-orange shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  {[
                    '+234 (0) 803 410 7529',
                    '+234 (0) 706 251 8233',
                    '+234 (0) 805 218 8337',
                  ].map((n) => (
                    <a
                      key={n}
                      href={`tel:${n.replace(/\D/g, '')}`}
                      className="block text-white/60 hover:text-orange text-sm transition-colors"
                    >
                      {n}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-orange shrink-0 mt-0.5" />
                <a
                  href="mailto:info@alphacapitald.com"
                  className="text-white/80 hover:text-orange text-sm transition-colors"
                >
                  info@alphacapitald.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/55 text-xs">
            &copy; {new Date().getFullYear()} Alpha Capital D Integrated Services Ing Ltd.
            All rights reserved.
          </p>
          <p className="text-white/45 text-xs">
            Port Harcourt, Rivers State, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}

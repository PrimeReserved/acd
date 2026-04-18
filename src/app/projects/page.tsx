import Link from 'next/link';
import { MapPin, ArrowRight, Flame, Layers, Waves } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { pageHeroImages } from '@/lib/images';

const projects = [
  {
    id: 1,
    desc: 'Erection of fire water and diesel tank',
    location: 'Obite, Rivers State',
    client: 'Saipem',
    category: 'Tank Construction',
  },
  {
    id: 2,
    desc: '4" × 1km flowline construction, manifold construction, hook-up and scrubber fabrication and installation',
    location: 'Ibigwe, Imo State',
    client: 'Walter Smith',
    category: 'Pipeline',
  },
  {
    id: 3,
    desc: '4" × 1km flowline construction, manifold construction, hook-up and scrubber fabrication and installation',
    location: 'Ibigwe, Imo State',
    client: 'Walter Smith',
    category: 'Pipeline',
  },
  {
    id: 4,
    desc: '4" flowline replacement at Well 26 L/S — totaling 9.4km',
    location: 'Nembe 1',
    client: 'SPDC',
    category: 'Pipeline',
  },
  {
    id: 5,
    desc: '4" × 6km flowline construction and allied works at Ibigwe/Assa field (Marginal Field Operation)',
    location: 'Ibigwe, Imo State',
    client: 'Walter Smith',
    category: 'Pipeline',
  },
  {
    id: 6,
    desc: '4" flowline replacement totaling 4km',
    location: 'Awoba Creek',
    client: 'SPDC',
    category: 'Pipeline',
  },
  {
    id: 7,
    desc: 'Dredging, expansion and desilting of 6.5km Okpori/Ughelli Canal',
    location: 'Okpori/Ughelli Canal',
    client: 'SPDC',
    category: 'Canalization',
  },
  {
    id: 8,
    desc: 'Leak repairs on 24" NCTL',
    location: 'Cawthorne Channel / Fisiokiri',
    client: 'SPDC',
    category: 'Leak Repair',
  },
  {
    id: 9,
    desc: 'Leak repair on 24" NCTL',
    location: 'Cawthorne Channel / Fisiokiri',
    client: 'SPDC',
    category: 'Leak Repair',
  },
  {
    id: 10,
    desc: 'Leak repairs on 10" Line',
    location: 'Diebu Creek — Nun Rivers',
    client: 'SPDC',
    category: 'Leak Repair',
  },
  {
    id: 11,
    desc: 'Pipeline construction and allied works — swamp terrain',
    location: 'Niger Delta',
    client: 'NAOC',
    category: 'Pipeline',
  },
  {
    id: 12,
    desc: 'Flowline installation and hook-up works',
    location: 'Niger Delta',
    client: 'NAOC',
    category: 'Pipeline',
  },
];

const clientColors: Record<string, { accent: string; badge: string }> = {
  SPDC: {
    accent: '#f2be18',
    badge: 'bg-[#f2be18]/15 text-[#8a6a00] border border-[#f2be18]/30',
  },
  'Walter Smith': {
    accent: '#8b1515',
    badge: 'bg-[#8b1515]/10 text-[#8b1515] border border-[#8b1515]/25',
  },
  Saipem: {
    accent: '#0f3460',
    badge: 'bg-[#0f3460]/10 text-[#0f3460] border border-[#0f3460]/25',
  },
  NAOC: {
    accent: '#8b1515',
    badge: 'bg-[#8b1515]/10 text-[#8b1515] border border-[#8b1515]/25',
  },
};

const categoryStyle: Record<string, string> = {
  Pipeline: 'bg-slate-100 text-slate-600 border border-slate-200',
  Canalization: 'bg-teal-50 text-teal-700 border border-teal-100',
  'Leak Repair': 'bg-amber-50 text-amber-700 border border-amber-100',
  'Tank Construction': 'bg-orange/10 text-orange border border-orange/20',
};

const clients = [
  {
    name: 'SPDC',
    full: 'Shell Petroleum Development Company',
    count: 6,
    accent: '#f2be18',
    textColor: '#7a5f00',
  },
  {
    name: 'Walter Smith',
    full: 'Patrolman Oil Ltd — Marginal Field Operator',
    count: 3,
    accent: '#8b1515',
    textColor: '#8b1515',
  },
  {
    name: 'Saipem',
    full: 'International EPIC Contractor — OML58',
    count: 1,
    accent: '#0f3460',
    textColor: '#0f3460',
  },
  {
    name: 'NAOC',
    full: 'Nigeria Agip Oil Company',
    count: 2,
    accent: '#8b1515',
    textColor: '#8b1515',
  },
];

const milestones = [
  {
    icon: Flame,
    stat: '15+',
    label: 'Flare System Installations',
    detail:
      'Nembe 1&2, Odeama, Awoba, Alakiri and more — spanning swamp and land terrain across the Niger Delta.',
  },
  {
    icon: Layers,
    stat: '60+',
    label: 'KM Pipeline Laid',
    detail:
      'For SPDC and NAOC combined, across land, swamp, and river-crossing terrain in multiple states.',
  },
  {
    icon: Waves,
    stat: '6+',
    label: 'Communities Served',
    detail:
      'Canalization projects in Ondo State, providing waterway infrastructure for communities in need.',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        tag="Track Record"
        title="Our Projects"
        subtitle="A proven portfolio of complex EPIC projects delivered for Nigeria's leading energy operators across challenging terrains."
        image={pageHeroImages.projects}
        objectPosition="center"
      />

      {/* ─── IMPACT STATS — light section ── */}
      <section className="py-16 sm:py-20 bg-off-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200">
            {[
              {
                value: '12+',
                label: 'Projects Completed',
                sub: 'Across Nigeria',
              },
              {
                value: '4',
                label: 'Tier-1 Clients',
                sub: 'Shell, NAOC, Saipem & more',
              },
              {
                value: '60+',
                label: 'KM Pipeline Laid',
                sub: 'SPDC & NAOC combined',
              },
              {
                value: '15+',
                label: 'Flare Installations',
                sub: 'Across Niger Delta',
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:px-8">
                <div className="font-heading font-black text-4xl sm:text-5xl text-orange mb-1.5">
                  {stat.value}
                </div>
                <div className="text-navy font-heading font-bold text-sm sm:text-base mb-0.5">
                  {stat.label}
                </div>
                <div className="text-steel/55 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT SHOWCASE ──────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
              Our Clients
            </span>
            <h2 className="font-heading font-bold text-4xl text-navy mt-3">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clients.map((c, i) => (
              <div
                key={c.name}
                className="group relative bg-off-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 group-hover:w-1.5 transition-all duration-300 rounded-l-2xl"
                  style={{ background: c.accent }}
                />
                <div className="p-7 pl-8">
                  {/* Clean count — no zero-padding format */}
                  <div
                    className="font-heading font-black text-4xl mb-1 leading-none"
                    style={{ color: c.accent }}
                  >
                    {c.count}
                  </div>
                  <div
                    className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-4"
                    style={{ color: c.textColor, opacity: 0.6 }}
                  >
                    {c.count === 1 ? 'Project' : 'Projects'}
                  </div>
                  <div className="font-heading font-black text-xl text-navy mb-1.5">
                    {c.name}
                  </div>
                  <p className="text-steel/55 text-xs leading-relaxed">
                    {c.full}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS PORTFOLIO ───────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
              Project Portfolio
            </span>
            <h2 className="font-heading font-bold text-4xl text-navy mt-3">
              Completed Projects
            </h2>
            <p className="text-steel/50 mt-3 text-sm">
              {projects.length} completed projects across multiple clients and
              locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((p, i) => {
              const cc = clientColors[p.client] ?? {
                accent: '#334155',
                badge: 'bg-slate-100 text-slate-600 border border-slate-200',
              };
              return (
                <div
                  key={p.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] hover:border-transparent transition-all duration-300"
                >
                  <div
                    className="h-[3px] w-full"
                    style={{
                      background: `linear-gradient(to right, ${cc.accent}, transparent 80%)`,
                    }}
                  />
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-navy text-[15px] leading-snug mb-3 group-hover:text-crimson transition-colors duration-200">
                      {p.desc}
                    </h3>
                    <div className="flex items-center gap-1.5 text-steel/90 text-xs mb-4">
                      <MapPin size={11} className="text-orange shrink-0" />
                      {p.location}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cc.badge}`}
                      >
                        {p.client}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryStyle[p.category] ?? 'bg-gray-100 text-steel border border-gray-200'}`}
                      >
                        {p.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── MILESTONES — white bg, bold styled (not gradient-on-gradient) ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
              Our Achievements
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mt-3">
              Milestones That Matter
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {milestones.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="group relative bg-off-white rounded-3xl p-6 sm:p-9 text-center border border-gray-100 hover:shadow-xl hover:border-orange/20 transition-all duration-400 overflow-hidden"
                >
                  {/* Bottom accent that reveals on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-14 h-14 bg-orange/10 group-hover:bg-orange rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                    <Icon
                      size={24}
                      className="text-orange group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div className="font-heading font-black text-5xl text-navy mb-2">
                    {item.stat}
                  </div>
                  <div className="text-navy font-heading font-bold text-base mb-3">
                    {item.label}
                  </div>
                  <p className="text-steel/55 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-orange font-bold text-[10px] tracking-[0.22em] uppercase mb-4 block">
            Start Your Project
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-navy mb-5 leading-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-steel/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Let us help you deliver it safely, on time, and within budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-navy text-white px-10 py-4 rounded-xl font-heading font-bold text-sm tracking-wide hover:bg-navy-light active:scale-[0.98] transition-all"
          >
            Talk to Our Team <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

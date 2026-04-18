import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
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
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";

// Icons are referenced here only for the article cards rendered server-side.
// The sidebar (ServicesLayout) resolves its own icons by service ID internally.
import PageHero from "@/components/PageHero";
import ServicesLayout from "@/components/ServicesLayout";
import { pageHeroImages, serviceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Full-scope EPIC services from Alpha Capital D: Mechanical & Valve Services, NDT Inspection, Pipeline Construction, Flare Systems, Tank Construction, Electrical Engineering, Equipment Leasing and Chemical Supply. Nigeria's energy sector specialist.",
  keywords:
    "valve services Nigeria, NDT inspection Nigeria, pipeline construction, flare system installation Niger Delta, tank construction Nigeria, electrical engineering oil gas, equipment leasing Nigeria, chemical supply upstream",
  alternates: {
    canonical: "https://alphacapitald.com/services",
  },
  openGraph: {
    title: "Our Services | Alpha Capital D",
    description:
      "Full-scope EPIC services: Mechanical & Valve, NDT, Pipeline, Flare Systems, Tank Construction, Electrical, Equipment Leasing and more — Alpha Capital D Nigeria.",
    url: "https://alphacapitald.com/services",
  },
};

const services = [
  {
    id: "mechanical",
    icon: Wrench,
    category: "Valve Lifecycle",
    title: "Mechanical & Valve Services",
    description:
      "Comprehensive valve lifecycle management from procurement through recertification, supported by fully equipped workshop capabilities.",
    items: [
      "Sale of Valves",
      "Refurbishment of Valves",
      "Calibration of Valves",
      "Maintenance of Valves",
      "Recertification of Valves",
      "Overhauling of Valves",
      "Hydrotesting Work In Progress",
      "Pigging Work In Progress",
      "PSV Calibration Equipment",
      "Pilot Operation Valve Ready For Recertification",
      "Cable Termination On Site",
      "Glanding & Termination of Cable On Site",
    ],
    image: serviceImages.mechanical,
  },
  {
    id: "ndt",
    icon: Eye,
    category: "Non-Destructive Testing",
    title: "NDT / Inspection & Related Services",
    description:
      "Industry-leading non-destructive testing and inspection services ensuring structural and operational integrity of assets.",
    items: [
      "Non-Destructive Testing (NDT)",
      "Welds & Fabrication Inspections",
      "Radiographic Gamma Ray",
      "MPI, LPI, UT",
      "Corrosion Monitoring",
      "Pipe Integrity Inspection",
      "Impressed Current Cathodic Protection",
    ],
    image: serviceImages.ndt,
  },
  {
    id: "construction",
    icon: HardHat,
    category: "Construction & Maintenance",
    title: "Construction & Maintenance Services",
    description:
      "Full-scope construction and maintenance capabilities for onshore, swamp, and offshore industrial facilities.",
    items: [
      "Pipe Welding and Fabrication",
      "Fitting & Pipeline Laying",
      "Torqueing & Tension",
      "Insulation Work",
      "Logging & Cladding",
      "Sand / Grit Blasting & Painting",
      "QA / QC Management",
    ],
    image: serviceImages.construction,
  },
  {
    id: "electrical",
    icon: Zap,
    category: "Electrical Engineering",
    title: "Electrical Engineering Services",
    description:
      "End-to-end industrial electrical engineering for facilities of all types and scales — upstream to commercial.",
    items: [
      "Industrial Electrical Wiring & Installations",
      "Glanding & Termination of Cable",
      "Cable Tray Work",
      "Cable Trenching",
      "Cable Laying",
      "Building of Electrical & Instrument Panels",
      "Supply & Sales of Electrical Motors",
      "Internal Electrical Services (Public, Private & Commercial)",
    ],
    image: serviceImages.electrical,
  },
  {
    id: "mechanical-engineering",
    icon: Activity,
    category: "Mechanical Engineering",
    title: "Mechanical Engineering Services",
    description:
      "Advanced mechanical engineering solutions across oil and gas measurement, storage, and equipment maintenance.",
    items: [
      "Pump Repairs (Servicing & Overhauling)",
      "Gate Valve & Nuts Greasing Services",
      "System Upgrade — Mechanical, Electrical & Instrumentation",
      "Calibration of Storage Tanks",
      "Oil & Gas Measurement",
      "Relief / Pressure Safety Valves Calibration & Certification",
      "Pressure Testing",
      "Leak Detection — Vessels & Pipelines",
      "Surface & Underground Storage Tank Installation",
      "Flash Gas Compressor & Heavy Duty Prevention & Maintenance",
    ],
    image: serviceImages.mechanicalEngineering,
  },
  {
    id: "flare",
    icon: Flame,
    category: "Flare Systems",
    title: "Flare Systems",
    description:
      "Unique capability in installation, maintenance, and servicing of flare systems across Niger Delta — with 15+ installations completed.",
    items: [
      "Flare System Installation",
      "Maintenance & Servicing",
      "Associated Fabrication Works",
      "Ignition System Installation",
      "Walkways Construction",
      "Bund Walls Construction",
      "Commissioning",
      "15+ Installations: Nembe 1&2, Odeama, Awoba, Alakiri & more",
    ],
    image: serviceImages.flare,
  },
  {
    id: "tanks",
    icon: Layers,
    category: "Tank Construction",
    title: "Tank Construction",
    description:
      "Construction, maintenance, and rehabilitation of all types and sizes of storage tanks for petroleum, fire water, and gas.",
    items: [
      "Petroleum Product Storage Tanks",
      "Fire Water Tank Construction",
      "Gas Storage Tanks",
      "Tank Rehabilitation",
      "Tank Maintenance",
      "Safety Water Erection (OML58, Obite Gas Plant)",
      "All sizes and capacities handled",
    ],
    image: serviceImages.tanks,
  },
  {
    id: "pipeline",
    icon: Activity,
    category: "Pipeline & Flowline",
    title: "Flowline & Pipeline Construction",
    description:
      "Dedicated workforce for flowline and pipeline works — with 60+ km delivered for SPDC and NAOC across various terrains.",
    items: [
      "Fabrication of Spools",
      "Mechanical & Structural Fabrication",
      "Platform, Barge, Jacket & Deck Fabrication",
      "Flowline Installation",
      "Pipeline Laying",
      "Leak / Structural Repairs",
      "Composite Technology Applications",
      "Land, Swamp & River Crossing Works",
      "60+ km pipeline for SPDC & NAOC",
    ],
    image: serviceImages.pipeline,
  },
  {
    id: "equipment",
    icon: Truck,
    category: "Equipment Supply & Leasing",
    title: "Equipment Supply & Leasing",
    description:
      "Heavy-duty equipment fleet available for lease and sale to support large-scale civil and offshore operations.",
    items: [
      "Swamp Excavators",
      "Land Excavators",
      "Various Tonnages of Cranes",
      "Barges",
      "Houseboats",
      "Payloaders",
    ],
    image: serviceImages.equipment,
  },
  {
    id: "canalization",
    icon: Waves,
    category: "Canalization",
    title: "Canalization Projects",
    description:
      "Active canalization project execution for government and private clients — with 6+ communities served across Ondo State.",
    items: [
      "Canal Dredging",
      "Canal Expansion",
      "Desilting Operations",
      "Erosion Control Works",
      "6+ Communities Served in Ondo State",
      "Government & Private Clients",
    ],
    image: serviceImages.canalization,
  },
  {
    id: "chemicals",
    icon: FlaskConical,
    category: "Chemical Supply",
    title: "Chemical & Fluids Supply",
    description:
      "Partnered with CS Oilfields — a Turkish Chemical & Fluids Blending Plant — for procurement and supply of drilling and production chemicals.",
    items: [
      "Drilling Chemicals",
      "Production Chemicals",
      "Fluids Blending",
      "Upstream Operations Supply",
      "Midstream Operations Supply",
      "Downstream Operations Supply",
    ],
    image: serviceImages.chemicals,
  },
];

const serviceNavItems = services.map(({ id, title }) => ({ id, title }));

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="What We Do"
        title="Our Services"
        subtitle="Integrated Engineering, Procurement, Installation & Commissioning services across Nigeria's energy value chain."
        image={pageHeroImages.services}
        objectPosition="center"
      />

      <ServicesLayout services={serviceNavItems}>
        <section className="py-10 sm:py-14 px-4 sm:px-8 lg:px-10 space-y-8 sm:space-y-10">
          {services.map((s, i) => {
            const isOdd = i % 2 === 0;
            const Icon = s.icon;
            return (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-28 group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-orange/20 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.13)] transition-all duration-500 flex flex-col lg:flex-row"
              >
                <div
                  className={`w-full lg:w-[42%] shrink-0 flex items-stretch bg-off-white ${
                    isOdd ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative w-full h-64 lg:h-auto m-5 rounded-2xl overflow-hidden shadow-[0_8px_32px_-8px_rgba(0,0,0,0.22)]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <div
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-[10px] font-bold tracking-[0.18em] uppercase backdrop-blur-sm"
                        style={{ background: 'rgba(15,52,96,0.78)' }}
                      >
                        <Icon size={11} className="text-orange" />
                        {s.category}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange via-orange to-transparent opacity-80" />
                  </div>
                </div>

                <div
                  className={`flex-1 p-8 lg:p-10 flex flex-col justify-center ${
                    isOdd ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <span className="text-orange font-bold text-[10px] tracking-[0.22em] uppercase mb-3 block">
                    {s.category}
                  </span>
                  <h2 className="font-heading font-black text-2xl lg:text-3xl text-navy leading-tight mb-4">
                    {s.title}
                  </h2>
                  <div className="w-12 h-[3px] bg-orange rounded-full mb-5" />
                  <p className="text-[15px] text-slate-600 leading-relaxed mb-7">
                    {s.description}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle size={14} className="text-orange shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link
                      href={`/contact?service=${s.id}`}
                      className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-heading font-bold text-sm tracking-wide hover:opacity-90 transition-opacity duration-200"
                    >
                      Request This Service <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mx-4 sm:mx-8 lg:mx-10 mb-16 rounded-2xl py-16 px-8 text-center bg-white border border-gray-100">
          <span className="text-orange font-bold text-[10px] tracking-[0.22em] uppercase mb-3 block">
            Let&apos;s Work Together
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-steel/60 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Our team of engineers and specialists will work with you to design
            the right service package for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded font-heading font-bold text-sm tracking-wide hover:bg-navy-light active:scale-95 transition-all"
            >
              Get In Touch <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+2348034107529"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy/20 text-navy px-8 py-4 rounded font-heading font-bold text-sm tracking-wide hover:border-navy hover:bg-navy/5 transition-all"
            >
              <Phone size={15} />
              Call Us Now
            </a>
          </div>
        </section>
      </ServicesLayout>
    </>
  );
}

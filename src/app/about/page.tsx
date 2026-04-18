import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Alpha Capital D Integrated Services — 15+ years of EPIC engineering excellence in Nigeria's oil & gas sector. Our mission, vision, values, industries served and commitment to safe project delivery.",
  keywords:
    "about Alpha Capital D, EPIC company Nigeria, oil gas engineering company Port Harcourt, energy sector Nigeria, pipeline company Rivers State",
  alternates: {
    canonical: "https://alphacapitald.com/about",
  },
  openGraph: {
    title: "About Us | Alpha Capital D",
    description:
      "15+ years of EPIC engineering excellence in Nigeria. Learn about our mission, values, team and commitment to safe, on-time project delivery.",
    url: "https://alphacapitald.com/about",
  },
};
import {
  Target,
  Eye,
  Shield,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { pageHeroImages, aboutImages } from "@/lib/images";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    desc: "We maintain international and national health and safety standards on every project, without exception.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    desc: "Every deliverable meets or exceeds client expectations and industry benchmarks — no shortcuts taken.",
  },
  {
    icon: TrendingUp,
    title: "Business Integrity",
    desc: "Our effectiveness, efficiency, and business integrity make us a dependable and trustworthy partner.",
  },
  {
    icon: Users,
    title: "Valued Human Capital",
    desc: "Our experienced professionals are our greatest asset — skilled, dedicated, and safety-conscious.",
  },
];

const teamHighlights = [
  "Competent and articulate professionals",
  "Experienced across all project phases",
  "Strong project planning capabilities",
  "Safe and cost-effective project execution",
  "Deep knowledge of Niger Delta operations",
  "International standards compliance",
];

const industries = [
  "Oil & Gas — Upstream, Midstream, Downstream",
  "Power Generation & Industrial Plants",
  "Chemicals & Petrochemicals Distribution",
  "Civil Works & Erosion Control",
  "Infrastructures & Heavy Construction",
  "EPIC Services across Nigeria",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Who We Are"
        title="About Alpha Capital D"
        subtitle="A leading EPIC services company built on integrity, expertise, and an unwavering commitment to Nigeria's energy future."
        image={pageHeroImages.about}
        objectPosition="center"
      />

      {/* ─── MISSION & VISION ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

            {/* Mission — dark inverted card, different gradient direction */}
            <div
             
              className="rounded-2xl p-7 sm:p-10 relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(225deg, #0f3460 0%, #8b1515 100%)',
              }}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-orange rounded-l-2xl" />
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-orange/5 rounded-full" />
              <div className="w-14 h-14 bg-orange rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange/20 relative z-10">
                <Target size={26} className="text-white" />
              </div>
              <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase mb-2 block relative z-10">
                What Drives Us
              </span>
              <h2 className="font-heading font-bold text-3xl text-white mb-5 relative z-10">
                Our Mission
              </h2>
              <p className="text-white/85 leading-relaxed relative z-10">
                Our mission is to provide high quality technical and expert
                service in the areas of project management, procurement and
                logistics. Capital D Integrated Services Ing Ltd is committed to
                executing its projects safety without compromising quality, in a
                timely manner and within state budget.
              </p>
            </div>

            {/* Vision */}
            <div
             
             
              className="rounded-2xl p-7 sm:p-10 relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, #0f3460 0%, #8b1515 100%)',
              }}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-orange rounded-l-2xl" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-orange/5 rounded-full" />
              <div className="w-14 h-14 bg-orange rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange/20 relative z-10">
                <Eye size={26} className="text-white" />
              </div>
              <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase mb-2 block relative z-10">
                Where We Are Headed
              </span>
              <h2 className="font-heading font-bold text-3xl text-white mb-5 relative z-10">
                Our Vision
              </h2>
              <p className="text-white/90 leading-relaxed relative z-10">
                Capital D Integrated Services Ing Ltd is aiming at constant
                professional growth of its human resources to become a leading
                EPIC Nigeria Company in the field of Oil and Gas Sector, Power
                Generation, Industrial and Power Plants, Chemicals and
                Petrochemicals Distribution, Civil Works and Erosion Control,
                Infrastructures Upstream, Midstream and downstream.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OBJECTIVE & METHODS ──────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
                Our Approach
              </span>
              <h2 className="font-heading font-bold text-4xl text-navy mt-3 mb-8 leading-snug">
                Fundamental Objective &amp; Methods
              </h2>

              <div className="space-y-7">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-heading font-bold text-navy text-lg mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-orange rounded flex items-center justify-center text-white text-xs font-black">
                      01
                    </span>
                    Client Satisfaction
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Client satisfaction and valued human capital, is our greatest
                    assets in achieving this objective. We are highly committed
                    to carrying out these services to international and national
                    health and safety standard.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-heading font-bold text-navy text-lg mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-orange rounded flex items-center justify-center text-white text-xs font-black">
                      02
                    </span>
                    Our Methods
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our methods of effectiveness, efficiency and business
                    integrity makes us a dependable and trustworthy partners in
                    the Oil and Gas industry, because we take pride in solving
                    problems quickly and effectively, while our experienced team
                    maintains an accurate touch with developments in engineering
                    services.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-[520px] rounded-2xl overflow-hidden">
              <Image
                src={aboutImages.objectiveMethods}
                alt="Industrial operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="backdrop-blur-sm border border-white/20 rounded-xl p-5"
                  style={{ background: 'rgba(15,52,96,0.75)' }}
                >
                  <p className="text-white font-heading font-bold text-sm leading-snug">
                    &ldquo;We take pride in solving problems quickly and
                    effectively.&rdquo;
                  </p>
                  <p className="text-white/75 text-xs mt-2">
                    — Alpha Capital D Mission Statement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES SERVED ────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background:
            '#0f3460',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
                Sectors We Serve
              </span>
              <h2 className="font-heading font-bold text-4xl text-white mt-3 mb-6">
                Industries We Operate{'\u00A0'}In
              </h2>
              <p className="text-white/90 leading-relaxed mb-8">
                From the swamps of the Niger Delta to industrial plants across
                Nigeria, our experience spans the full spectrum of the energy
                and infrastructure value chain.
              </p>
              <ul className="space-y-3">
                {industries.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white/90 text-sm"
                  >
                    <CheckCircle size={15} className="text-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden">
              <Image
                src={aboutImages.industries}
                alt="Engineering industries"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-navy/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
              What Guides Us
            </span>
            <h2 className="font-heading font-bold text-4xl text-navy mt-3">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                 
                 
                  className="group text-center p-8 rounded-xl border border-gray-100 hover:shadow-2xl hover:border-orange/20 hover:border-l-[3px] hover:border-l-orange transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle bg glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/0 to-orange/0 group-hover:from-orange/5 group-hover:to-transparent transition-all duration-500 rounded-xl" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-orange group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon
                        size={28}
                        className="text-orange group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="font-heading font-bold text-navy text-lg mb-3">
                      {v.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── OUR PEOPLE ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src={aboutImages.ourPeople}
                alt="Our professional team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-orange text-white rounded-xl px-5 py-3 shadow-xl shadow-orange/30">
                <div className="font-heading font-black text-3xl leading-none">15+</div>
                <div className="text-white/90 text-xs mt-0.5">Years of Excellence</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase">
                Human Capital
              </span>
              <h2 className="font-heading font-bold text-4xl lg:text-5xl text-navy mt-3 mb-6 leading-tight">
                Our People
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Capital D Integrated Services Ing Ltd Nigeria limited has been
                able to assemble a team of competent, articulate and experienced
                professional that plan, execute and supervise projects in a safe
                and cost and cost effective manner.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                The company has built a strong base that facilitates the
                execution of any contract without delay.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {teamHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-600 text-sm"
                  >
                    <CheckCircle size={15} className="text-orange shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded font-heading font-bold text-sm tracking-wide hover:bg-orange-dark transition-colors"
              >
                Work With Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

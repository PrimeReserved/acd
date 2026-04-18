/**
 * CENTRAL IMAGE REGISTRY — ALPHA CAPITAL D INTEGRATED SERVICES ING LTD
 * =======================================================================
 * Every image on this website is sourced from this file.
 * To replace any image, update the URL in the relevant export below.
 * You will never need to hunt through multiple component files to swap an image.
 *
 * ─── HOW TO USE CLOUDINARY IMAGES ──────────────────────────────────────
 *
 * Basic URL format:
 *   https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/folder/image-name.jpg
 *
 * With auto-optimization (RECOMMENDED for all images):
 *   https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto/v1234567890/image-name.jpg
 *   - q_auto   → automatic quality compression (no visible quality loss)
 *   - f_auto   → serves WebP or AVIF automatically (fastest format per browser)
 *
 * With width resizing (for performance by section type):
 *   Hero / full-width backgrounds  → use w_1920
 *   Section images / cards         → use w_800
 *   Thumbnails / gallery grid      → use w_600
 *
 * Full example (hero image, fully optimized):
 *   https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto,w_1920/v1234567890/hero-slide-1.jpg
 *
 * Organizing your uploads:
 *   - Upload hero images to a "hero/" folder in Cloudinary
 *   - Upload service images to "services/"
 *   - Upload gallery images to "gallery/"
 *   This keeps your media library clean and matching the structure below.
 * =======================================================================
 */

// ─── HERO SLIDER IMAGES (Homepage — 3 slides) ───────────────────────────
export const heroImages = {
  /** Slide 1 — Oil & Gas refinery / industrial field */
  slide1:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505233/img24_z1i1ym.jpg',
  /** Slide 2 — Pipeline construction / welding workers on site */
  slide2:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505221/img338_wwfqem.jpg',
  /** Slide 3 — Industrial construction / offshore platform */
  slide3:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505198/img197_ztjvez.jpg',
};

// ─── PAGE HERO BACKGROUNDS (inner page banners) ─────────────────────────
export const pageHeroImages = {
  /** About Us page hero — industrial workers in the field */
  about:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505202/img240_hxpnjx.jpg',
  /** Services page hero — construction / heavy work site */
  services:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505212/img278_azg3mo.jpg',
  /** Projects page hero — pipeline in field */
  projects:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776527358/photo-1678984239888-4e86693005ec_qzocxp.avif',
  /** Contact page hero — modern office / professional meeting */
  contact:
    'https://res.cloudinary.com/dfwty72r9/image/upload/q_auto/f_auto/v1776528362/photo-1548383487-e3e0abce4c86_yfogzc.avif',
  /** Gallery page hero — heavy construction operations */
  gallery:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505199/img153_xrcjrv.jpg',
};

// ─── SERVICE SECTION IMAGES (used on both homepage cards & services page) ──
export const serviceImages = {
  /** Mechanical & Valve Services — valves / industrial pipe fittings */
  mechanical:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505200/img217_no4ooe.jpg',
  /** NDT / Inspection — inspector with testing equipment */
  ndt:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505202/img240_hxpnjx.jpg',
  /** Construction & Maintenance — pipe welding / construction crew */
  construction:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505215/img295_u4umar.jpg',
  /** Electrical Engineering — electrical panels / cable installation */
  electrical:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505201/img234_rxwlrq.jpg',
  /** Mechanical Engineering Services — pumps / rotating machinery */
  mechanicalEngineering:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505201/img238_audniy.jpg',
  /** Flare Systems — industrial refinery / petrochemical plant operations */
  flare:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505200/img216_waxtvk.jpg',
  /** Tank Construction — petroleum storage tanks / industrial depot */
  tanks:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505200/img218_ragytx.jpg',
  /** Flowline & Pipeline Construction — pipeline in open field */
  pipeline:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505202/img241_fya3ew.jpg',
  /** Equipment Supply & Leasing — excavator / heavy construction machinery */
  equipment:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505203/img253_mkxurr.jpg',
  /** Canalization Projects — waterway / drainage canal construction */
  canalization:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505203/img255_ooaqz8.jpg',
  /** Chemical & Fluids Supply — chemical plant / laboratory */
  chemicals:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505204/img271_ybeyex.jpg',
};

// ─── HOMEPAGE SECTION IMAGES ────────────────────────────────────────────
export const homeImages = {
  /** Impact Stats section — parallax background (construction/site) */
  impactStats:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505197/img221_icma1r.jpg',
  /** Our People section — team of engineers on site */
  ourPeople:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505211/img275_pdjff5.jpg',
};

// ─── ABOUT PAGE SECTION IMAGES ──────────────────────────────────────────
export const aboutImages = {
  /** Objective & Methods section — industrial operations close-up */
  objectiveMethods:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505237/img104_fdoj7o.jpg',
  /** Industries We Serve section — industrial facility view */
  industries:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776523448/photo-1511454493857-0a29f2c023c7_mw6fng.avif',
  /** Our People section (about page) — professional team */
  ourPeople:
    'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505211/img275_pdjff5.jpg',
};

// ─── GALLERY IMAGES ─────────────────────────────────────────────────────
export const galleryImages = [
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505220/img331_vtx9an.jpg',
    alt: 'Oil and gas refinery operations',
    category: 'Refinery',
  },
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505220/img334_ogygps.jpg',
    alt: 'Pipeline construction and welding on site',
    category: 'Pipeline',
  },
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505218/img317_cpri0y.jpg',
    alt: 'NDT and quality inspection on site',
    category: 'Inspection',
  },
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505213/img290_hp4iln.jpg',
    alt: 'Heavy construction site operations',
    category: 'Construction',
  },
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505204/img271_ybeyex.jpg',
    alt: 'Industrial flare system installation',
    category: 'Flare Systems',
  },
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505202/img241_fya3ew.jpg',
    alt: 'Electrical installation and cable work',
    category: 'Electrical',
  },
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505197/img221_icma1r.jpg',
    alt: 'Petroleum storage tank construction',
    category: 'Tank Construction',
  },
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505214/img293_y5dfbf.jpg',
    alt: 'Canalization and waterway project',
    category: 'Canalization',
  },
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505216/img297_rz0uzk.jpg',
    alt: 'Heavy equipment fleet on project site',
    category: 'Equipment',
  },
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505217/img310_s0aswo.jpg',
    alt: 'Chemical plant and industrial facility',
    category: 'Chemicals',
  },
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505238/img68_muasan.jpg',
    alt: 'Our professional engineering team in the field',
    category: 'Our People',
  },
  {
    src: 'https://res.cloudinary.com/dfwty72r9/image/upload/v1776505221/img336_h53thf.jpg',
    alt: 'Operations and project management in progress',
    category: 'Operations',
  },
];

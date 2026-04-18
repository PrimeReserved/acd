'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { galleryImages, pageHeroImages } from '@/lib/images';

const LAYOUT: [number, number][] = [
  [2, 2], [1, 1], [1, 1], [1, 1], [1, 1],
  [2, 1], [1, 2], [1, 1], [1, 1],
  [2, 2], [1, 1], [1, 1],
];

function spanClass(idx: number): string {
  const [col, row] = LAYOUT[idx] ?? [1, 1];
  const colClass = col === 2 ? 'col-span-2' : col === 3 ? 'col-span-3' : 'col-span-1';
  const rowClass = row === 2 ? 'row-span-2' : 'row-span-1';
  return `${colClass} ${rowClass}`;
}

const WATERMARK_NORMAL = 0.02;
const WATERMARK_REVEALED = 0.28;

export default function GalleryClient() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [revealedIdxs, setRevealedIdxs] = useState<Set<number>>(new Set());
  const touchStartX = useRef<number | null>(null);

  const open = (idx: number) => setLightboxIdx(idx);
  const close = () => setLightboxIdx(null);

  const prev = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIdx]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -50) next();
    else if (dx > 50) prev();
    touchStartX.current = null;
  };

  const handleGridContextMenu = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    setRevealedIdxs((prev) => new Set(prev).add(idx));
  };

  const handleLightboxContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lightboxIdx !== null) {
      setRevealedIdxs((prev) => new Set(prev).add(lightboxIdx));
    }
  };

  return (
    <>
      <PageHero
        tag="Our Work"
        title="Gallery"
        subtitle="A visual showcase of our projects, operations and team across Nigeria's energy sector."
        image={pageHeroImages.gallery}
      />

      <section className="bg-off-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            style={{ gridAutoRows: '180px', gridAutoFlow: 'dense' }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => open(i)}
                onContextMenu={(e) => handleGridContextMenu(e, i)}
                className={`${spanClass(i)} relative rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                  aria-hidden="true"
                >
                  <span
                    className="font-heading font-black text-white uppercase whitespace-nowrap transition-opacity duration-300"
                    style={{
                      fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
                      letterSpacing: '0.2em',
                      opacity: revealedIdxs.has(i) ? WATERMARK_REVEALED : WATERMARK_NORMAL,
                    }}
                  >
                    ALPHA CAPITAL D
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[45] bg-black/95 flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-20 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200"
          >
            <X size={20} />
          </button>

          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="relative w-full h-full px-16 py-20"
            onContextMenu={handleLightboxContextMenu}
          >
            <Image
              key={lightboxIdx}
              src={galleryImages[lightboxIdx].src}
              alt={galleryImages[lightboxIdx].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              aria-hidden="true"
            >
              <span
                className="font-heading font-black text-white uppercase whitespace-nowrap transition-opacity duration-300"
                style={{
                  fontSize: 'clamp(1rem, 4vw, 2rem)',
                  letterSpacing: '0.25em',
                  opacity: revealedIdxs.has(lightboxIdx) ? WATERMARK_REVEALED : WATERMARK_NORMAL,
                }}
              >
                ALPHA CAPITAL D
              </span>
            </div>
          </div>

          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setLightboxIdx(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  i === lightboxIdx ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <section className="bg-white py-20 border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <span className="text-orange font-semibold text-xs tracking-[0.2em] uppercase block mb-4">
            Partner With Us
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-navy mb-4 leading-tight">
            Ready to Discuss Your Next Project?
          </h2>
          <p className="text-steel/60 mb-10 leading-relaxed">
            Our experienced team is ready to deliver your project safely, on
            time and within budget. Reach out — let&apos;s get to work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded font-heading font-bold text-sm tracking-wide hover:bg-navy-light active:scale-95 transition-all"
            >
              Contact Us <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+2348034107529"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy/20 text-navy px-8 py-4 rounded font-heading font-bold text-sm tracking-wide hover:border-navy hover:bg-navy/5 transition-all"
            >
              Call +234 803 410 7529
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

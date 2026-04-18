'use client';

import { useEffect } from 'react';

/**
 * Drop this once in the layout — it watches every [data-reveal] element
 * on the page and adds the "revealed" class when it scrolls into view.
 * Supports [data-delay="1-6"] for stagger (0.1s steps).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    );

    document
      .querySelectorAll('[data-reveal]')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

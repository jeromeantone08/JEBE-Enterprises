import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollRevealManager
 * Unobtrusive, performance-optimized scroll-reveal manager.
 * - Uses native IntersectionObserver (hardware-accelerated GPU transitions).
 * - Never captures clicks, touches, or blocks user interaction.
 * - Automatically falls back to immediate display on mobile or reduced-motion.
 * - Smoothly discovers elements with class `.reveal` or attribute `data-reveal`.
 */
export default function ScrollRevealManager() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      document.querySelectorAll('.reveal, [data-reveal]').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -25px 0px',
        threshold: 0.04,
      }
    );

    const observeNewElements = () => {
      const elements = document.querySelectorAll('.reveal:not(.revealed), [data-reveal]:not(.revealed)');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If already within or near viewport, reveal immediately
        if (rect.top < window.innerHeight * 0.96 && rect.bottom > 0) {
          el.classList.add('revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    // Immediate initial execution
    observeNewElements();
    const timer = setTimeout(observeNewElements, 50);

    // Watch for DOM mutations (e.g. search filter, tab switches)
    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return null;
}

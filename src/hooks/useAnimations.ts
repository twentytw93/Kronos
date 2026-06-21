import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `is-visible` class to a `.reveal` element once it enters the viewport.
 * Used to drive scroll-triggered entrance animations across the site.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
}) {
  const { threshold = 0.15, once = true, rootMargin = '0px 0px -10% 0px' } = options ?? {};
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return ref;
}

/** Animated count-up that triggers when the returned ref enters the viewport. */
export function useCountUp(target: number, options?: { duration?: number; decimals?: number }) {
  const { duration = 1800, decimals = 0 } = options ?? {};
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(target * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setValue(target);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted =
    decimals > 0
      ? value.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : Math.round(value).toLocaleString();

  return { ref, value: formatted };
}

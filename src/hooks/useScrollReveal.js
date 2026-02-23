import { useEffect, useRef } from 'react';

export default function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const revealEls = el.querySelectorAll('.reveal');
    revealEls.forEach(r => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return ref;
}

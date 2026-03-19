import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 90);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.07 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

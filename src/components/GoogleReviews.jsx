import { useRef } from 'react';
import { useLang } from '../lang';
import { GOOGLE_REVIEW_URL, GOOGLE_PROFILE_URL, GOOGLE_MAP_EMBED_URL, GOOGLE_DIRECTIONS_URL } from '../config';

// Resenas en Google. Sin calificaciones, conteos ni testimonios: las estrellas
// son decorativas (invitacion), nunca una nota. Las URLs viven en src/config.js.
// variant "section": tarjeta de ubicacion + tarjeta de vidrio (home).
// variant "compact": tarjeta chica para la pagina de contacto.

const ext = { target: '_blank', rel: 'noopener noreferrer' };

const GoogleG = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.7 1.2 9.2 3.6l6.9-6.9C35.9 2.4 30.4 0 24 0 14.6 0 6.6 5.4 2.7 13.3l8 6.2C12.6 13.6 17.9 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.5 5.8c4.4-4 6.8-10 6.8-17.2z" />
    <path fill="#FBBC05" d="M10.7 28.6c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-8-6.2C1 16.6 0 20.2 0 24s1 7.4 2.7 10.8l8-6.2z" />
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.9 2.3-8.4 2.3-6.1 0-11.4-4.1-13.3-9.7l-8 6.2C6.6 42.6 14.6 48 24 48z" />
  </svg>
);

const Stars = () => (
  <div className="reviews-stars" aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} viewBox="0 0 24 24" width="26" height="26" style={{ animationDelay: `${i * 90}ms` }}>
        <path d="M12 2.8l2.8 5.7 6.3.9-4.6 4.4 1.1 6.2L12 17.1 6.4 20l1.1-6.2L2.9 9.4l6.3-.9z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ))}
  </div>
);

const Pin = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false">
    <path fill="#EA4335" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7z" />
    <circle cx="12" cy="9" r="2.6" fill="#B31412" />
  </svg>
);

const DirIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M21.7 11.3l-9-9a1 1 0 0 0-1.4 0l-9 9a1 1 0 0 0 0 1.4l9 9a1 1 0 0 0 1.4 0l9-9a1 1 0 0 0 0-1.4zM14 14.5V12h-4v3H8v-4a1 1 0 0 1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
  </svg>
);

// Ficha tipo Google Maps: mapa real (iframe sin API key) + nombre + botones.
function PlaceCard({ L, t, lang, compact = false }) {
  return (
    <article className={`place-card${compact ? ' place-card-compact' : ' reveal'}`}>
      <div className="place-map">
        <iframe
          title={L(t.map_title)}
          src={`${GOOGLE_MAP_EMBED_URL}&hl=${lang}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="place-body">
        <div className="place-head">
          <span className="place-logo"><Pin size={22} /></span>
          <div>
            <h3 className="place-name">{t.place_name}</h3>
            <p className="place-type">{L(t.place_type)}</p>
          </div>
        </div>
        <div className="place-actions">
          <a href={GOOGLE_DIRECTIONS_URL} className="place-btn place-btn-main" aria-label={L(t.directions_aria)} {...ext}>
            <DirIcon />
            <span>{L(t.directions)}</span>
          </a>
          <a href={GOOGLE_PROFILE_URL} className="place-btn" aria-label={L(t.profile_aria)} {...ext}>
            <GoogleG size={16} />
            <span>{L(t.profile)}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

// Inclinacion 3D suave con el puntero. Solo mouse/trackpad (pointer: fine) y
// solo si el usuario no pidio movimiento reducido. En touch no hace nada.
function useTilt() {
  const ref = useRef(null);
  const canTilt = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse' || !canTilt()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`);
    el.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`);
    el.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
  };
  const onPointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  };
  return { ref, onPointerMove, onPointerLeave };
}

export default function GoogleReviews({ variant = 'section' }) {
  const { L, ui, lang } = useLang();
  const t = ui.reviews;
  const tilt = useTilt();

  const writeBtn = (
    <a href={GOOGLE_REVIEW_URL} className="btn-gold reviews-write" aria-label={L(t.write_aria)} {...ext}>
      <GoogleG size={18} />
      <span>{L(t.write)}</span>
    </a>
  );

  if (variant === 'compact') {
    return (
      <div className="reviews-compact">
        <PlaceCard L={L} t={t} lang={lang} compact />
        <div className="reviews-note">
          <Stars />
          <h3>{L(t.title)}</h3>
          <p>{L(t.text)}</p>
          <div className="reviews-note-actions">{writeBtn}</div>
        </div>
      </div>
    );
  }

  return (
    <section className="reviews-cta" aria-labelledby="reviews-cta-title">
      <div className="reviews-bg" aria-hidden="true">
        <img
          src="/media/projects/gates-fences/gates-fences-034-1440.webp"
          srcSet="/media/projects/gates-fences/gates-fences-034-960.webp 960w, /media/projects/gates-fences/gates-fences-034-1440.webp 1440w"
          sizes="100vw"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="sec-inner reviews-grid">
        <PlaceCard L={L} t={t} lang={lang} />

        {/* Tarjeta de vidrio para la resena */}
        <div className="glass-wrap reveal delay-1">
          <div className="glass-card" ref={tilt.ref} onPointerMove={tilt.onPointerMove} onPointerLeave={tilt.onPointerLeave}>
            <span className="glass-shine" aria-hidden="true" />
            <span className="eyebrow">{L(t.eyebrow)}</span>
            <Stars />
            <h2 id="reviews-cta-title" className="display-2">{L(t.title)}</h2>
            <p className="glass-text">{L(t.text)}</p>
            {writeBtn}
            <p className="glass-foot">{L(t.takes)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

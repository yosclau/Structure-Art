import { Link } from 'react-router-dom';
import { useLang } from '../lang';
import { useMeta } from '../seo';
import { SHOW_PENDING, SHOW_CLIENT_POSTS } from '../config';
import HeroVideo from '../components/HeroVideo';
import PhoneReel from '../components/PhoneReel';
import Img from '../components/Img';
import Portrait from '../components/Portrait';
import Pending, { PendingSection } from '../components/Pending';
import useReveal from '../components/useReveal';
import LeadForm from '../components/LeadForm';
import GoogleReviews from '../components/GoogleReviews';
import projectsData from '../content/projects.json';
import services from '../content/services.json';
import about from '../content/about.json';

const REELS = [1, 2, 3, 4, 5, 6].map((n) => `/media/video/social/reel-0${n}.mp4`);

// Tira de proceso de §05: 6 fotos espaciadas de la secuencia cronologica
// de colado de postes de chain-link-fence.
function processStrip() {
  const p = projectsData.projects.find((x) => x.slug === 'chain-link-fence');
  if (!p) return [];
  const n = 6;
  const step = (p.images.length - 1) / (n - 1);
  return Array.from({ length: n }, (_, i) => p.images[Math.round(i * step)]);
}

export default function Home() {
  const { lang, L, ui } = useLang();
  useMeta({ title: L(ui.meta.home_title), description: L(ui.meta.home_desc) });
  useReveal();

  const featured = projectsData.projects.slice(0, 6);
  const strip = processStrip();
  const built = services.divisions.find((d) => d.id === 'built');
  const studio = services.divisions.find((d) => d.id === 'studio');
  const builtPhoto = projectsData.projects
    .find((p) => p.slug === 'brick-entry-railings')
    ?.images.find((i) => i.slug === 'gates-fences-022');

  return (
    <>
      {/* §01 Hero — charcoal + video + overlay charcoal */}
      <section className="hero">
        <HeroVideo />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="display-1">{L(ui.hero.title)}</h1>
          <p className="lede">{L(ui.hero.sub)}</p>
          <Link to={`/${lang}/contact`} className="btn-gold">{L(ui.hero.cta)}</Link>
          <div className="hero-strip">{L(ui.hero.strip)}</div>
        </div>
      </section>

      {/* §02 Como construimos — bone */}
      <section className="sec s-bone">
        <div className="sec-inner">
          <div className="sec-head reveal">
            <span className="eyebrow">{L(ui.how.eyebrow)}</span>
            <h2 className="display-2">{L(ui.how.title)}</h2>
            <p className="lede" style={{ marginTop: 18 }}>{L(ui.how.intro)}</p>
          </div>
          <div className="how-steps">
            {ui.how.steps.map((s, i) => (
              <div className={`how-step reveal delay-${i}`} key={s.n}>
                <span className="step-n">{s.n}</span>
                <h3>{L(s.name)}</h3>
                <p>{L(s.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §03 BUILT | STUDIO — izq charcoal / der bone */}
      <section aria-label={L(ui.divisions.eyebrow)}>
        <div className="divisions-split">
          <div className="division-half s-charcoal">
            <span className="eyebrow">{L(ui.divisions.eyebrow)}</span>
            <h2 className="division-name">{built.name}</h2>
            <p className="division-tagline">{L(built.tagline)}</p>
            <ul className="division-services">
              {built.services.map((s) => (
                <li key={s.id}>
                  <span className="svc-name">{L(s.name)}</span>
                  <span className="svc-blurb">{L(s.blurb)}</span>
                </li>
              ))}
            </ul>
            <div className="division-photo">
              <Img image={builtPhoto} alt={L(built.tagline)} sizes="(max-width: 767px) 100vw, 50vw" />
            </div>
          </div>
          <div className="division-half s-bone">
            <span className="eyebrow">{L(ui.divisions.eyebrow)}</span>
            <h2 className="division-name">{studio.name}</h2>
            <p className="division-tagline">{L(studio.tagline)}</p>
            <ul className="division-services">
              {studio.services.map((s) => (
                <li key={s.id}>
                  <span className="svc-name">{L(s.name)}</span>
                  <span className="svc-blurb">{L(s.blurb)}</span>
                </li>
              ))}
            </ul>
            {/* Foto de Studio pendiente: en produccion se oculta solo el cuadro vacio. */}
            {SHOW_PENDING && (
              <div className="division-photo">
                <Pending label={L(ui.divisions.photo_pending_label)} aspect="16/10" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* §04 Proyectos — bone */}
      <section className="sec s-bone">
        <div className="sec-inner">
          <div className="sec-head reveal">
            <span className="eyebrow">{L(ui.featured.eyebrow)}</span>
            <h2 className="display-2">{L(ui.featured.title)}</h2>
          </div>
          <div className="projects-grid">
            {featured.map((p) => {
              const cover = p.images.find((i) => i.slug === p.cover) || p.images[0];
              return (
                <Link key={p.slug} to={`/${lang}/portfolio/${p.slug}`} className="project-card reveal">
                  <div className="card-img">
                    <Img image={cover} alt={L(p.title)} sizes="(max-width: 767px) 100vw, 33vw" />
                  </div>
                  <div className="card-meta">
                    <span className="card-cat">{L(p.category_label)}</span>
                    <h3>{L(p.title)}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="sec-foot">
            <Link to={`/${lang}/portfolio`} className="text-link">{L(ui.featured.all)}</Link>
          </div>
        </div>
      </section>

      {/* §05 Enfoque — gray */}
      <section className="sec s-gray">
        <div className="sec-inner">
          <div className="sec-head reveal">
            <span className="eyebrow">{L(ui.approach.eyebrow)}</span>
            <h2 className="display-2">{L(ui.approach.title)}</h2>
            <p className="lede" style={{ marginTop: 18 }}>{L(ui.approach.body)}</p>
          </div>
          <div className="approach-strip">
            {strip.map((img) => (
              <figure key={img.slug}>
                <Img image={img} alt={L(ui.approach.caption)} sizes="(max-width: 767px) 60vw, 220px" />
              </figure>
            ))}
          </div>
          <p className="approach-caption">{L(ui.approach.caption)}</p>
        </div>
      </section>

      {/* §06 Video comercial — charcoal */}
      <section className="sec s-charcoal">
        <div className="sec-inner">
          <div className="sec-head reveal" style={{ textAlign: 'center', margin: '0 auto', maxWidth: 720 }}>
            <span className="eyebrow">{L(ui.commercial.eyebrow)}</span>
            <h2 className="display-2">{L(ui.commercial.title)}</h2>
          </div>
          <div className="commercial-video" style={{ marginTop: 48 }}>
            <video
              src="/media/video/commercial-metal-shop.mp4"
              controls
              preload="none"
              poster="/media/video/hero-poster-960.webp"
            />
          </div>
        </div>
      </section>

      {/* §07 El artesano — bone */}
      <section className="sec s-bone">
        <div className="sec-inner">
          <div className="artisan-grid">
            <div className="artisan-portrait reveal">
              <Portrait />
            </div>
            <div className="artisan-copy reveal delay-1">
              <span className="eyebrow">{L(about.bio.eyebrow)}</span>
              <h2 className="display-2">{L(about.bio.heading)} <em>{L(about.bio.heading_em)}</em></h2>
              <p className="lede" style={{ margin: '16px 0 28px' }}>{L(about.bio.subheading)}</p>
              {L(about.bio.paragraphs).map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              <blockquote className="pull-quote">{L(about.bio.pull_quote)}</blockquote>
              <div className="mission">
                <p>{L(about.bio.mission)}</p>
                <span>{L(about.bio.mission_label)}</span>
              </div>
              <div className="artisan-strip">{L(about.bio.stat_strip)}</div>
              <div style={{ marginTop: 32 }}>
                <Link to={`/${lang}/about`} className="btn-ghost">{L(about.bio.cta)}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §08 Desde la obra — bone */}
      <section className="sec s-bone" style={{ paddingTop: 0 }}>
        <div className="sec-inner">
          <div className="sec-head reveal">
            <span className="eyebrow">{L(ui.jobsite.eyebrow)}</span>
            <h2 className="display-2">{L(ui.jobsite.title)}</h2>
            <p className="lede" style={{ marginTop: 14 }}>{L(ui.jobsite.sub)}</p>
          </div>
          <div className="reel-track">
            {REELS.map((src, i) => (
              <PhoneReel key={src} src={src} caption={L(ui.jobsite.captions[i])} />
            ))}
          </div>
          {/* "What Clients Post": oculto hasta tener publicaciones reales de clientes.
              Se activa con SHOW_CLIENT_POSTS en src/config.js. */}
          {SHOW_CLIENT_POSTS && (
            <>
              <div className="reviews-sub reveal">
                <h3>{L(ui.jobsite.reviews_title)}</h3>
              </div>
              <div className="reel-track">
                {[1, 2, 3].map((n) => (
                  <Pending key={n} label={L(ui.jobsite.reviews_pending)} className="phone-shape" />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* §09 Para contratistas — gray + banda navy */}
      <section aria-label={L(ui.b2b.eyebrow)}>
        <div className="b2b-band">{L(ui.b2b.band)}</div>
        <div className="sec s-gray">
          <div className="sec-inner b2b-grid">
            <div className="reveal">
              <span className="eyebrow">{L(ui.b2b.eyebrow)}</span>
              <h2 className="display-2">{L(ui.b2b.title)}</h2>
              <div className="b2b-points">
                {ui.b2b.points.map((p) => (
                  <div className="b2b-point" key={p.name.en}>
                    <h3>{L(p.name)}</h3>
                    <p>{L(p.text)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal delay-1">
              <LeadForm variant="trade" />
            </div>
          </div>
        </div>
      </section>

      {/* §10 Testimonios — bone. Sin testimonios reales no se renderiza en produccion. */}
      <PendingSection what="testimonios (§10)">
        <section className="sec s-bone">
          <div className="sec-inner">
            <div className="sec-head reveal">
              <span className="eyebrow">{L(ui.testimonials.eyebrow)}</span>
              <h2 className="display-2">{L(ui.testimonials.title)}</h2>
            </div>
            <div className="testimonials-grid">
              {[1, 2, 3].map((n) => (
                <Pending key={n} label={L(ui.testimonials.pending)} />
              ))}
            </div>
          </div>
        </section>
      </PendingSection>

      {/* Resenas en Google: ficha de mapa + tarjeta de vidrio, sobre foto oscura entre §09 (gray) y §11 (gray) */}
      <GoogleReviews />

      {/* §11 CTA final — gray (nunca charcoal pegado al footer navy) */}
      <section className="sec s-gray final-cta">
        <div className="sec-inner">
          <h2 className="display-2 reveal">{L(ui.final.title)}</h2>
          <Link to={`/${lang}/contact`} className="btn-gold">{L(ui.final.cta)}</Link>
        </div>
      </section>
    </>
  );
}

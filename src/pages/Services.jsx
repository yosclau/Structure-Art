import { Link } from 'react-router-dom';
import { useLang } from '../lang';
import { useMeta } from '../seo';
import Img from '../components/Img';
import Pending from '../components/Pending';
import { SHOW_PENDING } from '../config';
import LeadForm from '../components/LeadForm';
import useReveal from '../components/useReveal';
import services from '../content/services.json';
import about from '../content/about.json';
import projectsData from '../content/projects.json';

// Portada real por servicio BUILT: primer proyecto de la categoria homónima.
function serviceCover(serviceId) {
  const p = projectsData.projects.find((x) => x.category === serviceId);
  if (!p) return null;
  return { project: p, image: p.images.find((i) => i.slug === p.cover) || p.images[0] };
}

// Los ids de servicio BUILT y las categorias de proyecto no coinciden 1:1.
const SERVICE_TO_CATEGORY = {
  'metal-railings': 'metal-railings',
  'gates-fencing': 'gates-fencing',
  'concrete-sitework': 'concrete-sitework',
  'kitchen-bath-stone': 'interior-stone',
};

export default function Services() {
  const { lang, L, ui } = useLang();
  useMeta({ title: L(ui.meta.services_title), description: L(ui.meta.services_desc) });
  useReveal();

  const built = services.divisions.find((d) => d.id === 'built');
  const studio = services.divisions.find((d) => d.id === 'studio');

  return (
    <>
      <header className="page-head s-bone">
        <div className="sec-inner">
          <span className="eyebrow">{L(ui.services_page.eyebrow)}</span>
          <h1 className="display-2">{L(ui.services_page.title)}</h1>
          <p className="lede" style={{ marginTop: 16 }}>{L(ui.services_page.sub)}</p>
        </div>
      </header>

      {/* BUILT — charcoal */}
      <section className="sec s-charcoal">
        <div className="sec-inner">
          <div className="sec-head reveal">
            <span className="eyebrow">{built.name}</span>
            <h2 className="display-2">{L(built.tagline)}</h2>
          </div>
          <div className="projects-grid">
            {built.services.map((s) => {
              const cover = serviceCover(SERVICE_TO_CATEGORY[s.id]);
              return (
                <div key={s.id} className="project-card reveal">
                  <div className="card-img">
                    {cover
                      ? <Img image={cover.image} alt={L(s.name)} sizes="(max-width: 767px) 100vw, 33vw" />
                      : <Pending label={L(ui.divisions.photo_pending_label)} aspect="4/3" />}
                  </div>
                  <div className="card-meta">
                    <h3 style={{ marginTop: 0 }}>{L(s.name)}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', margin: '8px 0 12px' }}>{L(s.blurb)}</p>
                    {cover && (
                      <Link to={`/${lang}/portfolio/${cover.project.slug}`} className="text-link" style={{ color: 'inherit' }}>
                        {L(ui.services_page.see_work)}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUDIO — bone. Se renderiza completo; las fotos vienen en camino. */}
      <section className="sec s-bone">
        <div className="sec-inner">
          <div className="sec-head reveal">
            <span className="eyebrow">{studio.name}</span>
            <h2 className="display-2">{L(studio.tagline)}</h2>
          </div>
          <div className="projects-grid">
            {studio.services.map((s) => (
              <div key={s.id} className="project-card reveal">
                {/* Fotos de Studio en camino: en produccion se oculta el cuadro vacio. */}
                {SHOW_PENDING && (
                  <div className="card-img">
                    <Pending label={L(ui.divisions.photo_pending_label)} aspect="4/3" />
                  </div>
                )}
                <div className={`card-meta${SHOW_PENDING ? '' : ' card-meta-solo'}`}>
                  <h3 style={{ marginTop: 0 }}>{L(s.name)}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', margin: '8px 0' }}>{L(s.blurb)}</p>
                  <span className="card-cat">{L(ui.services_page.coming)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works ampliado — gray */}
      <section className="sec s-gray">
        <div className="sec-inner">
          <div className="sec-head reveal">
            <span className="eyebrow">{L(ui.services_page.how_title)}</span>
            <h2 className="display-2">{L(ui.about_page.process_title)}</h2>
          </div>
          <div className="how-steps cols-4">
            {about.proceso.map((p) => (
              <div className="how-step reveal" key={p.n}>
                <span className="step-n">{p.n}</span>
                <h3>{L(p.name)}</h3>
                <p>{L(p.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B — banda navy + gray */}
      <div className="b2b-band">{L(ui.b2b.band)}</div>
      <section className="sec s-gray" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
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
            <div style={{ marginTop: 36 }}>
              <Link to={`/${lang}/trade-partners`} className="btn-ghost">{L(ui.b2b.cta)}</Link>
            </div>
          </div>
          <div className="reveal delay-1">
            <LeadForm variant="trade" />
          </div>
        </div>
      </section>
    </>
  );
}

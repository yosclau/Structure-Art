import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLang } from '../lang';
import { useMeta } from '../seo';
import { isPending, SHOW_PENDING, logMissing } from '../config';
import Img from '../components/Img';
import Lightbox from '../components/Lightbox';
import Pending from '../components/Pending';
import projectsData from '../content/projects.json';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang, L, ui } = useLang();
  const [lightbox, setLightbox] = useState(null);

  const project = projectsData.projects.find((p) => p.slug === slug);
  const title = project ? L(project.title) : L(ui.detail.not_found);
  useMeta({
    title: `${title} | Structure Art`,
    description: project ? L(project.description) : L(ui.meta.portfolio_desc),
    image: project ? `/media/og/${project.slug}.jpg` : undefined,
    noindex: !project,
  });

  const metaPending = project
    && isPending(project.meta?.timeline)
    && isPending(project.meta?.materials)
    && isPending(project.meta?.scope);

  useEffect(() => {
    if (project && !SHOW_PENDING) {
      if (metaPending) logMissing(`meta de ${project.slug}`, 'franja Timeline/Materiales/Alcance omitida');
      if (isPending(project.neighborhood)) logMissing(`barrio de ${project.slug}`, 'sin barrio en el encabezado');
    }
  }, [project, metaPending]);

  if (!project) {
    return (
      <section className="sec s-bone" style={{ paddingTop: 160, minHeight: '60vh' }}>
        <div className="sec-inner">
          <h1 className="display-2">{L(ui.detail.not_found)}</h1>
          <p style={{ marginTop: 20 }}>
            <Link to={`/${lang}/portfolio`} className="text-link">{L(ui.detail.back)}</Link>
          </p>
        </div>
      </section>
    );
  }

  const cover = project.images.find((i) => i.slug === project.cover) || project.images[0];
  const related = projectsData.projects
    .filter((p) => p.slug !== project.slug)
    .sort((a, b) => (b.category === project.category) - (a.category === project.category))
    .slice(0, 3);

  const metaRows = [
    { key: 'timeline', label: L(ui.detail.timeline), value: project.meta?.timeline },
    { key: 'materials', label: L(ui.detail.materials), value: project.meta?.materials },
    { key: 'scope', label: L(ui.detail.scope), value: project.meta?.scope },
  ];

  return (
    <>
      <section className="sec s-bone" style={{ paddingTop: 120 }}>
        <div className="detail-hero">
          <p style={{ marginBottom: 24 }}>
            <Link to={`/${lang}/portfolio`} className="text-link">← {L(ui.detail.back)}</Link>
          </p>
          <div className="detail-head">
            <div>
              <span className="eyebrow">{L(project.category_label)}</span>
              <h1 className="display-2">{L(project.title)}</h1>
            </div>
            {!isPending(project.year) && (
              <span className="card-cat" style={{ fontSize: 13 }}>{project.year}</span>
            )}
          </div>
          <div className="main-img">
            <Img image={cover} alt={L(project.title)} sizes="(max-width: 1279px) 100vw, 1240px" eager />
          </div>

          {metaPending ? (
            SHOW_PENDING && (
              <div className="detail-meta-strip">
                {metaRows.map((r) => (
                  <div key={r.key}>
                    <h4>{r.label}</h4>
                    <Pending label={L(ui.detail.meta_pending)} className="meta-pending" />
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="detail-meta-strip">
              {metaRows.filter((r) => !isPending(r.value)).map((r) => (
                <div key={r.key}>
                  <h4>{r.label}</h4>
                  <p>{L(r.value)}</p>
                </div>
              ))}
            </div>
          )}

          <p className="detail-desc" style={metaPending && !SHOW_PENDING ? { marginTop: 40 } : undefined}>
            {L(project.description)}
          </p>
        </div>
      </section>

      <section className="sec s-bone" style={{ paddingTop: 0 }}>
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">{L(ui.detail.gallery)}</span>
            <p className="lede">{L(ui.detail.gallery_sub)}</p>
          </div>
          <div className="mosaic">
            {project.images.map((img, i) => (
              <button key={img.slug} type="button" onClick={() => setLightbox(i)} aria-label={`${L(project.title)} ${i + 1} / ${project.images.length}`}>
                <Img image={img} alt={`${L(project.title)} ${i + 1}`} sizes="(max-width: 767px) 100vw, 400px" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="sec s-gray">
        <div className="sec-inner">
          <div className="sec-head">
            <span className="eyebrow">{L(ui.detail.related)}</span>
          </div>
          <div className="projects-grid">
            {related.map((p) => {
              const c = p.images.find((i) => i.slug === p.cover) || p.images[0];
              return (
                <Link key={p.slug} to={`/${lang}/portfolio/${p.slug}`} className="project-card">
                  <div className="card-img">
                    <Img image={c} alt={L(p.title)} sizes="(max-width: 767px) 100vw, 33vw" />
                  </div>
                  <div className="card-meta">
                    <span className="card-cat">{L(p.category_label)}</span>
                    <h3>{L(p.title)}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {lightbox != null && (
        <Lightbox
          images={project.images}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onMove={setLightbox}
          altBase={L(project.title)}
        />
      )}
    </>
  );
}

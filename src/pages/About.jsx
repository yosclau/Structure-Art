import { Link } from 'react-router-dom';
import { useLang } from '../lang';
import { useMeta } from '../seo';
import Pending, { PendingSection } from '../components/Pending';
import Portrait from '../components/Portrait';
import useReveal from '../components/useReveal';
import about from '../content/about.json';

export default function About() {
  const { lang, L, ui } = useLang();
  useMeta({ title: L(ui.meta.about_title), description: L(ui.meta.about_desc) });
  useReveal();

  return (
    <>
      {/* Biografia verbatim de about.json */}
      <section className="sec s-bone" style={{ paddingTop: 140 }}>
        <div className="sec-inner">
          <div className="artisan-grid">
            <div className="artisan-portrait reveal">
              <Portrait eager />
            </div>
            <div className="artisan-copy reveal delay-1">
              <span className="eyebrow">{L(about.bio.eyebrow)}</span>
              <h1 className="display-2">{L(about.bio.heading)} <em>{L(about.bio.heading_em)}</em></h1>
              <p className="lede" style={{ margin: '16px 0 28px' }}>{L(about.bio.subheading)}</p>
              {L(about.bio.paragraphs).map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              <blockquote className="pull-quote">{L(about.bio.pull_quote)}</blockquote>
              <div className="mission">
                <p>{L(about.bio.mission)}</p>
                <span>{L(about.bio.mission_label)}</span>
              </div>
              <div className="artisan-strip">{L(about.bio.stat_strip)}</div>
              <div style={{ marginTop: 32 }}>
                <Link to={`/${lang}/contact`} className="btn-gold">{L(about.bio.cta)}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de cuatro pasos */}
      <section className="sec s-gray">
        <div className="sec-inner">
          <div className="sec-head reveal">
            <span className="eyebrow">{L(ui.about_page.process_eyebrow)}</span>
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

      {/* Fotos de equipo: pendientes. En produccion la seccion no se renderiza. */}
      <PendingSection what="fotos de equipo (About)">
        <section className="sec s-bone">
          <div className="sec-inner">
            <div className="sec-head reveal">
              <span className="eyebrow">{L(ui.about_page.team_eyebrow)}</span>
              <h2 className="display-2">{L(ui.about_page.team_title)}</h2>
            </div>
            <div className="projects-grid">
              {[1, 2, 3].map((n) => (
                <Pending key={n} label={L(ui.about_page.team_pending)} aspect="4/3" />
              ))}
            </div>
          </div>
        </section>
      </PendingSection>
    </>
  );
}

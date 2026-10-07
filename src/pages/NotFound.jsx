import { Link } from 'react-router-dom';
import { useLang } from '../lang';
import { useMeta } from '../seo';

// Pagina 404. Vercel sirve build/404.html con estado 404 para rutas que no
// existen; la app pinta esta pagina en el idioma de la ruta (o el guardado).
export default function NotFound() {
  const { lang, L, ui } = useLang();
  useMeta({ title: L(ui.meta.notfound_title), description: L(ui.meta.notfound_desc), noindex: true });

  return (
    <section className="sec s-bone notfound">
      <div className="sec-inner">
        <span className="eyebrow">{L(ui.not_found.eyebrow)}</span>
        <h1 className="display-2">{L(ui.not_found.title)}</h1>
        <p className="lede">{L(ui.not_found.sub)}</p>
        <div className="notfound-actions">
          <Link to={`/${lang}`} className="btn-gold">{L(ui.not_found.home)}</Link>
          <Link to={`/${lang}/portfolio`} className="text-link">{L(ui.not_found.portfolio)}</Link>
        </div>
      </div>
    </section>
  );
}

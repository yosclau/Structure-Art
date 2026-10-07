import { Link } from 'react-router-dom';
import { useLang } from '../lang';
import { CONTACT, isPending, SHOW_PENDING, logMissing } from '../config';
import services from '../content/services.json';

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.2l.5-3H13V9a1 1 0 0 1 1-1z" />
  </svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
    <path d="M8.8 9.2c.3 2.6 3.4 5.4 6 5.9l1.2-1.2-1.9-1.3-1 .6a6.4 6.4 0 0 1-2.3-2.3l.6-1-1.3-1.9z" />
  </svg>
);

export default function Footer() {
  const { lang, L, ui } = useLang();
  const social = (net, shown) => {
    const base = lang === 'es' ? `Structure Art en ${net} (abre en otra pestaña)` : `Structure Art on ${net} (opens in a new tab)`;
    return shown && shown !== net ? `${shown}, ${base}` : base;
  };

  if (!SHOW_PENDING) {
    if (isPending(CONTACT.license)) logMissing('numero de licencia', 'sin linea de licencia en footer hasta tener numero real');
    if (isPending(CONTACT.yelp)) logMissing('URL de Yelp', 'icono omitido hasta tener destino real');
  }

  const serviceTags = services.divisions.flatMap((d) => d.services).map((s) => ({ id: s.id, name: L(s.name) }));

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/media/brand/logo-lockup.webp" alt="Structure Art" />
          <p>{L(ui.footer.blurb)}</p>
        </div>

        <div className="footer-col">
          <h4>{L(ui.footer.nav_title)}</h4>
          <ul>
            <li><Link to={`/${lang}`}>{L(ui.nav.home)}</Link></li>
            <li><Link to={`/${lang}/portfolio`}>{L(ui.nav.portfolio)}</Link></li>
            <li><Link to={`/${lang}/services`}>{L(ui.nav.services)}</Link></li>
            <li><Link to={`/${lang}/about`}>{L(ui.nav.about)}</Link></li>
            <li><Link to={`/${lang}/contact`}>{L(ui.nav.contact)}</Link></li>
            <li><Link to={`/${lang}/trade-partners`}>{L(ui.nav.trade)}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{L(ui.footer.services_title)}</h4>
          <ul className="footer-tags">
            {serviceTags.map((s) => (
              <li key={s.id}><Link to={`/${lang}/services`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{L(ui.footer.contact_title)}</h4>
          <ul>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label={social('Instagram', CONTACT.instagramHandle)}>{CONTACT.instagramHandle}</a></li>
            <li><a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label={social('Facebook')}>Facebook</a></li>
          </ul>
          <div className="footer-social" aria-label={L(ui.footer.follow_title)}>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label={social('Instagram')}><IconInstagram /></a>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label={social('Facebook')}><IconFacebook /></a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><IconWhatsApp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Structure Art. {L(ui.footer.rights)}</p>
        <p><Link to={`/${lang}/privacy`}>{L(ui.nav.privacy)}</Link></p>
      </div>
    </footer>
  );
}

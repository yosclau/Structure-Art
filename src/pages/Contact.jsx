import { useLang } from '../lang';
import { useMeta } from '../seo';
import { CONTACT } from '../config';
import LeadForm from '../components/LeadForm';
import GoogleReviews from '../components/GoogleReviews';
import useReveal from '../components/useReveal';

const Icon = ({ path }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    {path}
  </svg>
);

export default function Contact() {
  const { lang, L, ui } = useLang();
  const social = (net, shown) => {
    const base = lang === 'es' ? `Structure Art en ${net} (abre en otra pestaña)` : `Structure Art on ${net} (opens in a new tab)`;
    return shown && shown !== net ? `${shown}, ${base}` : base;
  };
  useMeta({ title: L(ui.meta.contact_title), description: L(ui.meta.contact_desc) });
  useReveal();

  const direct = [
    {
      label: `${L(ui.contact_page.call)} ${CONTACT.phoneDisplay}`,
      href: CONTACT.phoneHref,
      icon: <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
    },
    {
      label: 'WhatsApp',
      href: CONTACT.whatsapp,
      external: true,
      icon: <><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" /><path d="M8.8 9.2c.3 2.6 3.4 5.4 6 5.9l1.2-1.2-1.9-1.3-1 .6a6.4 6.4 0 0 1-2.3-2.3l.6-1-1.3-1.9z" /></>,
    },
    {
      label: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    },
    {
      label: CONTACT.instagramHandle,
      href: CONTACT.instagram,
      external: true,
      aria: social('Instagram', CONTACT.instagramHandle),
      icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" /></>,
    },
    {
      label: 'Facebook',
      href: CONTACT.facebook,
      external: true,
      aria: social('Facebook'),
      icon: <path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.2l.5-3H13V9a1 1 0 0 1 1-1z" />,
    },
  ];

  return (
    <>
      <header className="page-head s-bone">
        <div className="sec-inner">
          <span className="eyebrow">{L(ui.contact_page.eyebrow)}</span>
          <h1 className="display-2">{L(ui.contact_page.title)}</h1>
          <p className="lede" style={{ marginTop: 16 }}>{L(ui.contact_page.sub)}</p>
        </div>
      </header>

      <section className="sec s-bone" style={{ paddingTop: 0 }}>
        <div className="sec-inner contact-grid">
          <div className="reveal">
            <LeadForm variant="contact" />
          </div>
          <aside className="reveal delay-1">
            <span className="eyebrow">{L(ui.contact_page.direct_title)}</span>
            <div className="direct-list">
              {direct.map((d) => (
                <a
                  key={d.href}
                  href={d.href}
                  {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...(d.aria ? { 'aria-label': d.aria } : {})}
                >
                  <Icon path={d.icon} />
                  <span>{d.label}</span>
                </a>
              ))}
            </div>
            <GoogleReviews variant="compact" />
            <div className="map-note">
              <h3>{L(ui.contact_page.map_title)}</h3>
              <p>{L(ui.contact_page.map_text)}</p>
            </div>
            <div className="map-embed">
              <iframe
                title={L(ui.contact_page.map_title)}
                src="https://www.google.com/maps?q=Chicago,+IL&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

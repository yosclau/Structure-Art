import { useLang } from '../lang';
import { useMeta } from '../seo';
import { CONTACT } from '../config';

// Inserta el correo de contacto como enlace donde el texto dice {email}.
function withEmail(text) {
  if (!text.includes('{email}')) return text;
  const [before, after] = text.split('{email}');
  return (
    <>
      {before}
      <a href={`mailto:${CONTACT.email}`} className="inline-link">{CONTACT.email}</a>
      {after}
    </>
  );
}

export default function Privacy() {
  const { L, ui } = useLang();
  useMeta({ title: L(ui.meta.privacy_title), description: L(ui.meta.privacy_desc) });

  return (
    <>
      <header className="page-head s-bone">
        <div className="sec-inner">
          <h1 className="display-2">{L(ui.privacy_page.title)}</h1>
          <p className="lede" style={{ marginTop: 12 }}>{L(ui.privacy_page.updated)}</p>
        </div>
      </header>
      <section className="sec s-bone" style={{ paddingTop: 0 }}>
        <div className="sec-inner" style={{ maxWidth: 720 }}>
          {ui.privacy_page.sections.map((s) => (
            <div key={s.h.en} style={{ marginBottom: 36 }}>
              <h2 className="display-3" style={{ marginBottom: 10 }}>{L(s.h)}</h2>
              <p>{withEmail(L(s.p))}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

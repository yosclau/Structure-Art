import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from './lang';
import { SITE_URL as SITE, OG_DEFAULT } from './config';

// La URL del sitio vive en src/site.json. El HTML inicial de cada ruta ya trae
// estas etiquetas (scripts/prerender-meta.js); este hook las mantiene al navegar.

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href, hreflang) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Titulo, descripcion, Open Graph, canonical y hreflang por pagina.
export function useMeta({ title, description, image, noindex = false }) {
  const { pathname } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', SITE + pathname);
    setMeta('property', 'og:image', SITE + (image || OG_DEFAULT));
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', SITE + (image || OG_DEFAULT));
    setMeta('property', 'og:locale', lang === 'es' ? 'es_US' : 'en_US');
    if (noindex) setMeta('name', 'robots', 'noindex');
    else document.head.querySelector('meta[name="robots"]')?.remove();
    setLink('canonical', SITE + pathname);
    const rest = pathname.replace(/^\/(en|es)/, '');
    setLink('alternate', `${SITE}/en${rest}`, 'en');
    setLink('alternate', `${SITE}/es${rest}`, 'es');
    setLink('alternate', `${SITE}/en${rest}`, 'x-default');
  }, [title, description, image, noindex, pathname, lang]);
}

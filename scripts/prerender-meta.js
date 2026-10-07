/* eslint-disable no-console */
// Postbuild: escribe el <head> de cada ruta en HTML estatico para que los
// buscadores y las vistas previas de enlaces (iMessage, WhatsApp, Facebook)
// lean titulo, descripcion, Open Graph e idioma sin ejecutar JavaScript.
//
// Lee la URL del sitio de src/site.json (o SITE_URL / REACT_APP_SITE_URL) y
// los textos de src/content/*.json. Genera:
//   build/pages-html/<lang>/index.html, .../<pagina>.html, .../portfolio/<slug>.html
//   build/index.html (raiz), build/404.html, build/sitemap.xml, build/robots.txt
// vercel.json reescribe cada ruta a su archivo.

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const build = path.join(root, 'build');
const site = require('../src/site.json');
const ui = require('../src/content/ui.json');
const projects = require('../src/content/projects.json').projects;

const SITE = (process.env.SITE_URL || process.env.REACT_APP_SITE_URL || site.url).replace(/\/$/, '');
const LANGS = ['en', 'es'];
const OG_DEFAULT = site.og_default;

const PAGES = [
  { path: '', title: 'home_title', desc: 'home_desc' },
  { path: 'portfolio', title: 'portfolio_title', desc: 'portfolio_desc' },
  { path: 'services', title: 'services_title', desc: 'services_desc' },
  { path: 'about', title: 'about_title', desc: 'about_desc', image: '/media/about/adrian-portrait-900.webp' },
  { path: 'contact', title: 'contact_title', desc: 'contact_desc' },
  { path: 'trade-partners', title: 'trade_title', desc: 'trade_desc' },
  { path: 'privacy', title: 'privacy_title', desc: 'privacy_desc' },
];

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function businessJsonLd(lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE}/#business`,
    name: 'Structure Art',
    slogan: 'We Build What You Envision',
    description: ui.meta.home_desc[lang],
    image: `${SITE}${OG_DEFAULT}`,
    logo: `${SITE}/media/brand/logo-badge.webp`,
    url: `${SITE}/${lang}`,
    telephone: '+14709148996',
    email: 'hola@structureartbuilt.com',
    areaServed: { '@type': 'City', name: 'Chicago' },
    address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL', addressCountry: 'US' },
    sameAs: ['https://www.instagram.com/structure_art_built/', 'https://www.facebook.com/p/Structure-Art-BUILT-100042064643947/'],
    knowsLanguage: ['en', 'es'],
  };
}

function headTags({ lang, rest, title, description, image, noindex }) {
  const url = `${SITE}/${lang}${rest ? `/${rest}` : ''}`;
  const img = `${SITE}${image || OG_DEFAULT}`;
  const isJpg = /\.jpe?g$/i.test(img);
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}"/>`,
    noindex ? '<meta name="robots" content="noindex"/>' : '',
    `<meta property="og:site_name" content="Structure Art"/>`,
    `<meta property="og:type" content="website"/>`,
    `<meta property="og:locale" content="${lang === 'es' ? 'es_US' : 'en_US'}"/>`,
    `<meta property="og:title" content="${esc(title)}"/>`,
    `<meta property="og:description" content="${esc(description)}"/>`,
    `<meta property="og:url" content="${esc(url)}"/>`,
    `<meta property="og:image" content="${esc(img)}"/>`,
    isJpg ? '<meta property="og:image:width" content="1200"/>' : '',
    isJpg ? '<meta property="og:image:height" content="630"/>' : '',
    `<meta property="og:image:alt" content="${esc(title)}"/>`,
    `<meta name="twitter:card" content="summary_large_image"/>`,
    `<meta name="twitter:title" content="${esc(title)}"/>`,
    `<meta name="twitter:description" content="${esc(description)}"/>`,
    `<meta name="twitter:image" content="${esc(img)}"/>`,
  ];
  if (!noindex) {
    tags.push(
      `<link rel="canonical" href="${esc(url)}"/>`,
      `<link rel="alternate" hreflang="en" href="${esc(`${SITE}/en${rest ? `/${rest}` : ''}`)}"/>`,
      `<link rel="alternate" hreflang="es" href="${esc(`${SITE}/es${rest ? `/${rest}` : ''}`)}"/>`,
      `<link rel="alternate" hreflang="x-default" href="${esc(`${SITE}/en${rest ? `/${rest}` : ''}`)}"/>`,
    );
  }
  tags.push(`<script type="application/ld+json">${JSON.stringify(businessJsonLd(lang))}</script>`);
  return tags.filter(Boolean).join('');
}

const template = fs.readFileSync(path.join(build, 'index.html'), 'utf8');

function render(opts) {
  return template
    .replace(/<html lang="[^"]*"/, `<html lang="${opts.lang}"`)
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace('</head>', `${headTags(opts)}</head>`);
}

function write(rel, html) {
  const file = path.join(build, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const routes = [];
LANGS.forEach((lang) => {
  PAGES.forEach((p) => {
    const html = render({
      lang, rest: p.path, title: ui.meta[p.title][lang], description: ui.meta[p.desc][lang], image: p.image,
    });
    write(`pages-html/${lang}/${p.path || 'index'}.html`, html);
    routes.push(p.path);
  });
  projects.forEach((pr) => {
    const html = render({
      lang,
      rest: `portfolio/${pr.slug}`,
      title: `${pr.title[lang]} | Structure Art`,
      description: pr.description[lang],
      image: `/media/og/${pr.slug}.jpg`,
    });
    write(`pages-html/${lang}/portfolio/${pr.slug}.html`, html);
  });
});

// Raiz "/": la app redirige al idioma guardado; el HTML lleva los datos de /en.
write('index.html', render({
  lang: 'en', rest: '', title: ui.meta.home_title.en, description: ui.meta.home_desc.en,
}));
// 404 real (Vercel lo sirve con estado 404 para rutas inexistentes).
write('404.html', render({
  lang: 'en', rest: '', title: ui.meta.notfound_title.en, description: ui.meta.notfound_desc.en, noindex: true,
}));

// sitemap.xml y robots.txt con la misma URL.
const allRests = [...PAGES.map((p) => p.path), ...projects.map((p) => `portfolio/${p.slug}`)];
const u = (lang, rest) => `${SITE}/${lang}${rest ? `/${rest}` : ''}`;
const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
allRests.forEach((rest) => {
  LANGS.forEach((lang) => {
    sitemap.push('  <url>', `    <loc>${u(lang, rest)}</loc>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${u('en', rest)}"/>`,
      `    <xhtml:link rel="alternate" hreflang="es" href="${u('es', rest)}"/>`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${u('en', rest)}"/>`,
      '  </url>');
  });
});
sitemap.push('</urlset>', '');
write('sitemap.xml', sitemap.join('\n'));
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /media/video/\nDisallow: /pages-html/\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`prerender-meta: ${LANGS.length * (PAGES.length + projects.length)} pages, 404, sitemap and robots for ${SITE}`);

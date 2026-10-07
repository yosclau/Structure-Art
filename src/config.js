import site from './site.json';

// Configuracion global del sitio.
// SHOW_PENDING: true dibuja los bloques pendientes con etiqueta (desarrollo).
// false conserva la composicion sin etiqueta y omite secciones vacias (produccion).
export const SHOW_PENDING = process.env.NODE_ENV !== 'production';

// Minimo de proyectos para que un filtro del portafolio se renderice.
// Hoy 1 para que "Concreto y Obra Exterior" salga en el lanzamiento; subir a 2 despues.
export const MIN_PROJECTS_PER_FILTER = 1;

// Seccion "What Clients Post" (3 marcos de telefono). Apagada hasta que existan
// publicaciones reales de clientes; el codigo sigue en Home.jsx. Cambiar a true
// y poner los videos/capturas reales para mostrarla.
export const SHOW_CLIENT_POSTS = false;

// URL publica del sitio. La fuente unica es src/site.json (o la variable
// REACT_APP_SITE_URL en Vercel). No escribir el dominio en ningun otro lugar.
export const SITE_URL = (process.env.REACT_APP_SITE_URL || site.url).replace(/\/$/, '');
export const OG_DEFAULT = site.og_default;

export const LANGS = ['en', 'es'];
export const DEFAULT_LANG = 'en';

export const CONTACT = {
  phoneDisplay: '(470) 914-8996',
  phoneHref: 'tel:+14709148996',
  whatsapp: 'https://wa.me/14709148996',
  email: 'hola@structureartbuilt.com',
  instagram: 'https://www.instagram.com/structure_art_built/',
  instagramHandle: '@structure_art_built',
  facebook: 'https://www.facebook.com/p/Structure-Art-BUILT-100042064643947/',
  yelp: 'PENDIENTE',
  license: 'PENDIENTE',
  formspree: 'https://formspree.io/f/mreyjzge',
};

// Marca un valor de contenido como faltante. Nunca se imprime tal cual.
export const isPending = (v) =>
  v == null || v === '' || (typeof v === 'string' && v.startsWith('PENDIENTE'));

// Registro en consola de contenido omitido en produccion.
export const logMissing = (what, why) => {
  // eslint-disable-next-line no-console
  console.info(`[contenido pendiente] ${what} — ${why}`);
};

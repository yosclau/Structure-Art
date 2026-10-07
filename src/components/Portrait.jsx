import { useLang } from '../lang';
import { isPending } from '../config';
import Pending from './Pending';
import about from '../content/about.json';

// Retrato de Adrián (About y Home). Si no hay foto, vuelve al bloque pendiente.
export default function Portrait({ eager = false }) {
  const { L, ui } = useLang();
  if (isPending(about.bio.portrait)) {
    return <Pending label={L(ui.about_page.portrait_pending)} aspect="3/4" />;
  }
  return (
    <img
      src={about.bio.portrait}
      srcSet={`${about.bio.portrait_small} 600w, ${about.bio.portrait} 900w`}
      sizes="(max-width: 767px) 100vw, 40vw"
      width="900"
      height="1200"
      alt={L(ui.about_page.portrait_alt)}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

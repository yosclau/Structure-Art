import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO } from '../images';
import { useLang } from '../lang';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const { lang, t, toggleLang } = useLang();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [loc]);

  const links = [
    ['/', t.nav_home],
    ['/why-us', t.nav_why],
    ['/services', t.nav_services],
    ['/portfolio', t.nav_portfolio],
    ['/about', t.nav_about],
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: scrolled ? '14px 64px' : '24px 64px',
      background: scrolled ? 'rgba(10,22,40,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(196,163,90,0.15)' : 'none',
      transition: 'all .4s',
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
        <img src={LOGO} alt="Structure Art" style={{ height: 38, filter: 'brightness(0) saturate(100%) invert(93%) sepia(8%) saturate(400%) hue-rotate(340deg) brightness(103%)' }} />
        <div style={{ lineHeight: 1 }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: 13, letterSpacing: 4, color: 'var(--cream)' }}>STRUCTURE ART</div>
          <div style={{ fontSize: 7, letterSpacing: 3, color: 'var(--gold)', display: 'block', marginTop: 3, textTransform: 'uppercase' }}>Industrial Design & Renovation</div>
        </div>
      </Link>

      {/* Desktop */}
      <ul className="nav-desktop" style={{ display: 'flex', gap: 28, listStyle: 'none', alignItems: 'center' }}>
        {links.map(([to, label]) => (
          <li key={to}>
            <Link to={to} style={{
              fontSize: 9, letterSpacing: '2.5px', textTransform: 'uppercase',
              color: loc.pathname === to ? 'var(--gold)' : 'var(--gray)',
              textDecoration: 'none', transition: 'color .2s',
            }}>{label}</Link>
          </li>
        ))}

        {/* Language toggle */}
        <li>
          <button onClick={toggleLang} style={{
            fontFamily: "'Cinzel',serif",
            fontSize: 9, letterSpacing: 2, textTransform: 'uppercase',
            background: 'transparent', border: '1px solid rgba(196,163,90,0.35)',
            color: 'var(--gold)', padding: '6px 14px', cursor: 'pointer',
            transition: 'all .3s', display: 'flex', alignItems: 'center', gap: 6,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(196,163,90,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
            {lang === 'en' ? '🇲🇽 ES' : '🇺🇸 EN'}
          </button>
        </li>

        <li>
          <Link to="/contact" style={{
            fontSize: 9, letterSpacing: '2.5px', textTransform: 'uppercase',
            color: 'var(--gold)', textDecoration: 'none',
            border: '1px solid rgba(196,163,90,0.4)', padding: '9px 22px',
            transition: 'all .3s',
          }}
            onMouseEnter={e => { e.target.style.background = 'var(--gold)'; e.target.style.color = 'var(--navy)'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--gold)'; }}>
            {t.nav_quote}
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <button onClick={() => setOpen(!open)} className="hamburger-btn" style={{
        display: 'none', flexDirection: 'column', gap: 5,
        background: 'none', border: 'none', cursor: 'pointer', padding: 4,
      }}>
        <span style={{ width: 22, height: 1, background: 'var(--cream)', display: 'block', transition: 'all .3s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
        <span style={{ width: 22, height: 1, background: 'var(--cream)', display: 'block', opacity: open ? 0 : 1 }} />
        <span style={{ width: 22, height: 1, background: 'var(--cream)', display: 'block', transition: 'all .3s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, bottom: 0,
          background: 'rgba(5,16,30,0.98)', zIndex: 300,
          display: 'flex', flexDirection: 'column', padding: 32, gap: 24,
          borderBottom: '1px solid rgba(196,163,90,0.15)',
        }}>
          {links.map(([to, label]) => (
            <Link key={to} to={to} style={{ fontSize: 16, letterSpacing: 3, textTransform: 'uppercase', fontFamily: "'Cinzel',serif", color: 'var(--white)', textDecoration: 'none' }}>{label}</Link>
          ))}
          <Link to="/contact" style={{ fontSize: 16, letterSpacing: 3, textTransform: 'uppercase', fontFamily: "'Cinzel',serif", color: 'var(--gold)', textDecoration: 'none' }}>{t.nav_quote}</Link>
          <button onClick={toggleLang} style={{
            fontFamily: "'Cinzel',serif", fontSize: 14, letterSpacing: 2,
            background: 'transparent', border: '1px solid rgba(196,163,90,0.35)',
            color: 'var(--gold)', padding: '10px 20px', cursor: 'pointer',
            textAlign: 'left', width: 'fit-content',
          }}>
            {lang === 'en' ? '🇲🇽 Español' : '🇺🇸 English'}
          </button>
        </div>
      )}

      <style>{`
        @media(max-width:960px){
          .nav-desktop{display:none!important;}
          .hamburger-btn{display:flex!important;}
          nav{padding:18px 24px!important;}
        }
      `}</style>
    </nav>
  );
}

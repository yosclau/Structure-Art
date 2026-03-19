import { Link } from 'react-router-dom';
import { LOGO } from '../images';
import { useLang } from '../lang';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={LOGO} alt="Structure Art" />
          <p>{t.footer_p}</p>
          <p className="footer-tagline">{t.footer_tagline}</p>
        </div>
        <div className="footer-col">
          <h4>{t.footer_services}</h4>
          <ul>
            <li><Link to="/services">{t.nav_services}</Link></li>
            <li><Link to="/services">Custom Metal Decks</Link></li>
            <li><Link to="/services">Beam Reinforcement</Link></li>
            <li><Link to="/services">Architectural Metal</Link></li>
            <li><Link to="/services">Gates & Fences</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.footer_company}</h4>
          <ul>
            <li><Link to="/why-us">{t.nav_why}</Link></li>
            <li><Link to="/portfolio">{t.nav_portfolio}</Link></li>
            <li><Link to="/about">{t.nav_about}</Link></li>
            <li><Link to="/contact">{t.nav_quote}</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.footer_contact}</h4>
          <ul>
            <li><a href="tel:4709148996">(470) 914-8996</a></li>
            <li><a href="mailto:Structureartco@gmail.com">Structureartco@gmail.com</a></li>
            <li><a href="https://instagram.com/todo_en_estructura_chicago" target="_blank" rel="noreferrer">@todo_en_estructura_chicago</a></li>
            <li><span style={{color:'rgba(253,252,249,0.38)'}}>Chicago, Illinois</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Structure Art. <span>{t.footer_bottom1}</span> Chicago, IL.</p>
        <p>Metal. Precision. <span>{t.footer_bottom2}</span></p>
      </div>
    </footer>
  );
}

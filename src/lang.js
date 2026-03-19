import { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export const translations = {
  en: {
    // NAV
    nav_home: 'Home',
    nav_why: 'Why Us',
    nav_services: 'Services',
    nav_portfolio: 'Portfolio',
    nav_about: 'About',
    nav_quote: 'Free Quote',

    // HOME HERO
    hero_tag: 'Chicago, Illinois · Est. by Adrián Rodriguez',
    hero_h1_1: 'STRUCTURAL',
    hero_h1_2: 'Steel &',
    hero_h1_3: 'PRECISION',
    hero_sub: 'Custom-fabricated steel structures of exceptional quality. Because behind every balcony, staircase, and gate — there is a family that depends on that structure.',
    hero_cta1: 'Request a Free Quote',
    hero_cta2: 'View Portfolio',
    hero_stat1: 'In-House Fabrication',
    hero_stat2: 'Shortcuts. Ever.',
    hero_stat3: 'Serving Chicago',
    hero_card1_title: 'Latest Project',
    hero_card1_text: 'Exterior stair system with anti-slip diamond plate',
    hero_card2_title: 'In-House Only',
    hero_card2_text: 'Zero outsourcing. Every weld by our team.',
    hero_card3_title: 'Free Quote',
    hero_card3_text: 'We come to you. No commitment needed.',

    // PAIN
    pain_label: 'The Reality',
    pain_h2_1: 'Your structure is only as good',
    pain_h2_2: 'as the hands that',
    pain_h2_em: 'built it.',
    pain1_title: 'Chicago weather is brutal',
    pain1_text: 'Untreated or poorly welded steel oxidizes from the inside out. By the time you see it, the damage is structural — not just cosmetic.',
    pain2_title: 'Most contractors cut corners',
    pain2_text: "Outsourced fabrication, standard parts, rushed installs. You don't find out until something moves that shouldn't move — or worse.",
    pain3_title: 'Precision is not optional',
    pain3_text: "A gate, staircase, or structural beam is the first thing that should hold. Custom precision isn't a luxury — it's the only acceptable standard.",
    pain_link: 'Learn More About Our Standards →',

    // PORTFOLIO
    port_label: 'Our Work',
    port_h2: 'Project',
    port_h2_em: 'Gallery',
    port_link: 'View All Projects →',

    // STATEMENT
    statement: '"More than structures, we build',
    statement_gold: 'confidence',
    statement_end: 'and peace of mind."',
    statement_by: '— Adrián Rodriguez · Structure Art · Chicago, Illinois',

    // CTA BANNER
    cta_h2: 'Ready to start your',
    cta_h2_em: 'project?',
    cta_sub: 'Free consultation. On-site measurement. No commitment required.',
    cta_btn1: 'Request a Free Quote',
    cta_btn2: 'Explore Our Services',

    // WHY US
    why_label: 'Our Standards',
    why_h1: 'Why',
    why_h1_em: 'Structure Art',
    why_sub: "Not every contractor is the same. Here's what makes us different — and why it matters for your home.",
    why_bad_label: 'Other Contractors',
    why_good_label: '◆ Structure Art',
    why_bad: ['Outsourced fabrication, unknown quality','Standard parts, not custom to your space','Rush jobs — corners cut on welds','No on-site measurement before quoting','Disappear after installation','Price looks cheap — until something fails'],
    why_good: ["100% in-house fabrication by Adrián's team",'Every piece custom to your exact specifications','No shortcuts. No rushed finishes. Ever.','Free on-site consultation & measurement',"We don't leave until everything is perfect",'Built to last decades. Guaranteed quality.'],
    why_cta1: 'Request a Free Quote',
    why_cta2: 'View Our Services',

    // SERVICES
    srv_label: 'Core Services',
    srv_h1: 'Our',
    srv_h1_em: 'Services',
    srv_sub: 'Every project measured, fabricated, and installed in-house. No outsourcing. No exceptions.',
    srv_cta: 'Request a Quote →',
    srv_other_title: "Don't see your project?",
    srv_other_sub: 'Every structure is custom. If you need it built in steel — we can engineer and build it from scratch.',
    srv_other_cta: 'Start a Conversation',

    // PORTFOLIO PAGE
    port_page_label: 'Our Work',
    port_page_h1: 'Project',
    port_page_h1_em: 'Gallery',
    port_page_sub: 'Every piece measured, cut, welded, and powder-coated in-house. Zero outsourcing.',
    port_full: 'View Full Portfolio →',
    port_start: 'Start Your Project',
    port_also: 'Want to see the full portfolio with all project details?',

    // ABOUT
    about_label: 'The Story',
    about_h1: 'About',
    about_h1_em: 'Adrián',
    about_sub: 'The craftsman behind every weld, every measurement, every structure that stands.',
    about_p1: "Adrián's story didn't start in Chicago. It started in Mexico, learning the value of hard work, precision, and responsibility — working hands-on with metal and construction long before arriving in the city.",
    about_p2: 'When he arrived in Chicago — known as the city of steel — it felt like purpose meeting opportunity. What began as a trade became a calling.',
    about_p3: 'Structure Art combines structural welding, custom metal fabrication, wood integration, and construction expertise to deliver projects that are not only strong — but meaningful. Because behind every balcony, staircase, and frame, there is a family that depends on that structure.',
    about_quote: '"There is trust. There is safety. There is a family who depends on that structure."',
    about_mission: '"Build strong. Serve with respect. Deliver work that lasts."',
    about_mission_label: '— The Structure Art Mission',
    about_cta: 'Work With Adrián',

    // CONTACT
    contact_label: 'Get Started',
    contact_h1: 'Request a',
    contact_h1_em: 'Free Quote',
    contact_sub: 'No commitment. A real conversation about your project.',
    contact_info_label: 'Contact Information',
    contact_info_h2: "Let's talk about",
    contact_info_em: 'your project.',
    contact_free: 'FREE CONSULTATION',
    contact_free_text: 'We come to your site, assess the space, and measure everything on-site. No commitment, no pressure — just a real conversation about what you need.',
    form_name: 'Full Name',
    form_phone: 'Phone',
    form_email: 'Email',
    form_zip: 'Zip Code',
    form_service: 'Service Needed',
    form_service_placeholder: 'Select a service...',
    form_message: 'Project Details',
    form_message_placeholder: 'Tell us about your project. The more detail, the better we can serve you.',
    form_submit: 'Submit Request — We Will Be In Touch Shortly',
    form_privacy: 'Your information is private and will only be used to contact you about your project.',
    form_success_title: 'Request Received',
    form_success_text: 'Thank you for reaching out. Adrián will contact you shortly to discuss your project.',

    // FOOTER
    footer_p: 'Structural steel & architectural builds of exceptional quality. Serving Chicago and suburbs with pride, precision, and zero shortcuts.',
    footer_tagline: '"Build strong. Serve with respect. Deliver work that lasts."',
    footer_services: 'Services',
    footer_company: 'Company',
    footer_contact: 'Contact',
    footer_bottom1: 'Industrial Design & Renovation.',
    footer_bottom2: 'No shortcuts.',
  },

  es: {
    // NAV
    nav_home: 'Inicio',
    nav_why: 'Por Qué Nosotros',
    nav_services: 'Servicios',
    nav_portfolio: 'Portafolio',
    nav_about: 'Nosotros',
    nav_quote: 'Cotización Gratis',

    // HOME HERO
    hero_tag: 'Chicago, Illinois · Fundado por Adrián Rodriguez',
    hero_h1_1: 'ACERO',
    hero_h1_2: 'Estructural &',
    hero_h1_3: 'PRECISIÓN',
    hero_sub: 'Estructuras de acero fabricadas a medida con calidad excepcional. Porque detrás de cada balcón, escalera y reja — hay una familia que depende de esa estructura.',
    hero_cta1: 'Solicitar Cotización Gratis',
    hero_cta2: 'Ver Portafolio',
    hero_stat1: 'Fabricación Propia',
    hero_stat2: 'Atajos. Nunca.',
    hero_stat3: 'Servimos Chicago',
    hero_card1_title: 'Último Proyecto',
    hero_card1_text: 'Sistema de escaleras exteriores con placa antideslizante',
    hero_card2_title: 'Solo In-House',
    hero_card2_text: 'Cero subcontratación. Cada soldadura por nuestro equipo.',
    hero_card3_title: 'Cotización Gratis',
    hero_card3_text: 'Vamos a tu lugar. Sin compromiso.',

    // PAIN
    pain_label: 'La Realidad',
    pain_h2_1: 'Tu estructura es tan buena',
    pain_h2_2: 'como las manos que la',
    pain_h2_em: 'construyeron.',
    pain1_title: 'El clima de Chicago es brutal',
    pain1_text: 'El acero mal soldado o sin tratar se oxida por dentro. Para cuando lo ves, el daño ya es estructural — no solo estético.',
    pain2_title: 'La mayoría corta caminos',
    pain2_text: 'Fabricación subcontratada, piezas estándar, instalaciones apresuradas. No te enteras hasta que algo se mueve cuando no debe.',
    pain3_title: 'La precisión no es opcional',
    pain3_text: 'Una reja, escalera o viga estructural es lo primero que debe aguantar. La precisión custom no es un lujo — es el único estándar aceptable.',
    pain_link: 'Conoce Nuestros Estándares →',

    // PORTFOLIO
    port_label: 'Nuestro Trabajo',
    port_h2: 'Galería de',
    port_h2_em: 'Proyectos',
    port_link: 'Ver Todos los Proyectos →',

    // STATEMENT
    statement: '"Más que estructuras, construimos',
    statement_gold: 'confianza',
    statement_end: 'y tranquilidad."',
    statement_by: '— Adrián Rodriguez · Structure Art · Chicago, Illinois',

    // CTA BANNER
    cta_h2: '¿Listo para empezar tu',
    cta_h2_em: 'proyecto?',
    cta_sub: 'Consulta gratis. Medición en sitio. Sin compromiso.',
    cta_btn1: 'Solicitar Cotización Gratis',
    cta_btn2: 'Ver Nuestros Servicios',

    // WHY US
    why_label: 'Nuestros Estándares',
    why_h1: 'Por Qué',
    why_h1_em: 'Structure Art',
    why_sub: 'No todos los contratistas son iguales. Aquí está lo que nos hace diferentes — y por qué importa para tu hogar.',
    why_bad_label: 'Otros Contratistas',
    why_good_label: '◆ Structure Art',
    why_bad: ['Fabricación subcontratada, calidad desconocida','Piezas estándar, no hechas para tu espacio','Trabajos apresurados — soldaduras mal hechas','Sin medición en sitio antes de cotizar','Desaparecen después de instalar','El precio parece barato — hasta que algo falla'],
    why_good: ['100% fabricación propia por el equipo de Adrián','Cada pieza custom a tus especificaciones exactas','Sin atajos. Sin acabados apresurados. Nunca.','Consulta y medición en sitio gratis','No nos vamos hasta que todo esté perfecto','Construido para durar décadas. Calidad garantizada.'],
    why_cta1: 'Solicitar Cotización Gratis',
    why_cta2: 'Ver Nuestros Servicios',

    // SERVICES
    srv_label: 'Servicios Principales',
    srv_h1: 'Nuestros',
    srv_h1_em: 'Servicios',
    srv_sub: 'Cada proyecto medido, fabricado e instalado en casa. Sin subcontratación. Sin excepciones.',
    srv_cta: 'Solicitar Cotización →',
    srv_other_title: '¿No ves tu proyecto?',
    srv_other_sub: 'Cada estructura es custom. Si lo necesitas en acero — lo podemos diseñar y construir desde cero.',
    srv_other_cta: 'Empieza una Conversación',

    // PORTFOLIO PAGE
    port_page_label: 'Nuestro Trabajo',
    port_page_h1: 'Galería de',
    port_page_h1_em: 'Proyectos',
    port_page_sub: 'Cada pieza medida, cortada, soldada y recubierta en casa. Cero subcontratación.',
    port_full: 'Ver Portafolio Completo →',
    port_start: 'Empieza Tu Proyecto',
    port_also: '¿Quieres ver el portafolio completo con todos los detalles?',

    // ABOUT
    about_label: 'La Historia',
    about_h1: 'Sobre',
    about_h1_em: 'Adrián',
    about_sub: 'El artesano detrás de cada soldadura, cada medición, cada estructura que se sostiene.',
    about_p1: 'La historia de Adrián no empezó en Chicago. Empezó en México, aprendiendo el valor del trabajo duro, la precisión y la responsabilidad — trabajando manos a la obra con metal y construcción mucho antes de llegar a la ciudad.',
    about_p2: 'Cuando llegó a Chicago — conocida como la ciudad del acero — sintió que el propósito se encontraba con la oportunidad. Lo que empezó como un oficio se convirtió en una vocación.',
    about_p3: 'Structure Art combina soldadura estructural, fabricación de metal custom, integración de madera y experiencia en construcción para entregar proyectos que no solo son fuertes — sino significativos. Porque detrás de cada balcón, escalera y marco, hay una familia que depende de esa estructura.',
    about_quote: '"Hay confianza. Hay seguridad. Hay una familia que depende de esa estructura."',
    about_mission: '"Construir fuerte. Servir con respeto. Entregar trabajo que dura."',
    about_mission_label: '— La Misión de Structure Art',
    about_cta: 'Trabaja Con Adrián',

    // CONTACT
    contact_label: 'Empieza Ahora',
    contact_h1: 'Solicita una',
    contact_h1_em: 'Cotización Gratis',
    contact_sub: 'Sin compromiso. Una conversación real sobre tu proyecto.',
    contact_info_label: 'Información de Contacto',
    contact_info_h2: 'Hablemos de',
    contact_info_em: 'tu proyecto.',
    contact_free: 'CONSULTA GRATIS',
    contact_free_text: 'Vamos a tu sitio, evaluamos el espacio y medimos todo en sitio. Sin compromiso, sin presión — solo una conversación real sobre lo que necesitas.',
    form_name: 'Nombre Completo',
    form_phone: 'Teléfono',
    form_email: 'Correo Electrónico',
    form_zip: 'Código Postal',
    form_service: 'Servicio Necesario',
    form_service_placeholder: 'Selecciona un servicio...',
    form_message: 'Detalles del Proyecto',
    form_message_placeholder: 'Cuéntanos sobre tu proyecto. Más detalle = mejor servicio.',
    form_submit: 'Enviar Solicitud — Te Contactamos Pronto',
    form_privacy: 'Tu información es privada y solo se usará para contactarte sobre tu proyecto.',
    form_success_title: 'Solicitud Recibida',
    form_success_text: 'Gracias por contactarnos. Adrián te contactará pronto para hablar de tu proyecto.',

    // FOOTER
    footer_p: 'Construcciones de acero estructural y arquitectónico de calidad excepcional. Sirviendo a Chicago y suburbios con orgullo, precisión y cero atajos.',
    footer_tagline: '"Construir fuerte. Servir con respeto. Entregar trabajo que dura."',
    footer_services: 'Servicios',
    footer_company: 'Empresa',
    footer_contact: 'Contacto',
    footer_bottom1: 'Diseño Industrial y Renovación.',
    footer_bottom2: 'Sin atajos.',
  }
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const toggleLang = () => setLang(l => l === 'en' ? 'es' : 'en');
  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

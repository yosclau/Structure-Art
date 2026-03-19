import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';
import { SRV1, SRV2, SRV3, PORT1, PORT3, HERO2 } from '../images';

const SERVICES = [
  {
    num:'01', img: SRV1,
    title:'Structural Steel Installation',
    desc:'Full structural steel installation for residential and commercial properties. We handle everything from foundation anchoring to top rail — engineered for load, longevity, and Chicago weather resistance.',
    tags:['Residential','Commercial','Load-Bearing'],
    points:['Custom structural assessment before fabrication','Chicago weather-rated powder coating','Compliant with local building codes','Residential & multi-unit properties'],
  },
  {
    num:'02', img: HERO2, featured: true,
    title:'Custom Metal Decks',
    desc:'Diamond plate and structural steel decks built to exact specification. Anti-slip tread surfaces, structural framing, and powder-coated finish. Built for safety, durability, and decades of use.',
    tags:['Anti-Slip Diamond Plate','Custom Spec','Most Requested'],
    points:['Diamond plate anti-slip surface','Structural steel framing','Custom dimensions to your space','Powder-coated matte black finish'],
  },
  {
    num:'03', img: SRV2,
    title:'Beam Installation & Reinforcement',
    desc:'Structural beam installation and reinforcement for existing structures. We assess, engineer, fabricate, and install — no shortcuts on load-bearing work. Your home\'s integrity depends on this.',
    tags:['Structural','Load-Bearing','Reinforcement'],
    points:['On-site structural assessment','Custom beam fabrication','Welded connection systems','Residential & commercial'],
  },
  {
    num:'04', img: PORT1,
    title:'Architectural Metal Systems',
    desc:'Custom railings, handrail systems, canopies, and structural entry systems. Precision-fabricated to complement your architecture while meeting all safety standards.',
    tags:['Railings','Canopies','Entry Systems','Handrails'],
    points:['Horizontal and vertical bar designs','Custom post spacing & height','Architectural-grade finish','ADA compliant options available'],
  },
  {
    num:'05', img: SRV3, featured: true,
    title:'High-End Gates & Fences',
    desc:'Custom steel gates and privacy fence systems with wood or composite panel integration. Security and aesthetics combined — engineered for Chicago wind loads and built to last decades.',
    tags:['Steel + Wood','Privacy Systems','Security','Custom Design'],
    points:['Steel frame with composite or wood panels','Wind-load engineered for Chicago','Custom heights and configurations','Powder-coated black or custom colors'],
  },
];

export default function Services() {
  useReveal();
  return (
    <div className="page">
      <div className="page-banner">
        <div className="page-banner-grid"/>
        <div className="page-banner-inner">
          <p className="section-label reveal">What We Build</p>
          <h1 className="reveal">Our <em>Services</em></h1>
          <p className="reveal">Every project measured, fabricated, and installed in-house. No outsourcing. No exceptions.</p>
        </div>
      </div>

      <section style={{padding:'100px 72px',position:'relative',zIndex:2}} className="srv-main">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          {SERVICES.map(({num,img,title,desc,tags,points,featured},i)=>(
            <div key={num} className="reveal" style={{
              display:'grid',
              gridTemplateColumns: i%2===0 ? '1fr 1fr' : '1fr 1fr',
              gap:80,
              alignItems:'center',
              marginBottom:100,
              paddingBottom:100,
              borderBottom:'1px solid rgba(196,163,90,0.08)',
            }}>
              <div style={{order: i%2===0 ? 0 : 1}} className="srv-img-wrap">
                <div style={{position:'relative'}}>
                  <img src={img} alt={title} style={{width:'100%',display:'block',border:'1px solid rgba(196,163,90,0.15)',objectFit:'cover',height:380}}/>
                  <div style={{position:'absolute',top:20,left:20,fontFamily:"'Cinzel',serif",fontSize:64,color:'rgba(196,163,90,0.12)',lineHeight:1}}>{num}</div>
                  {featured && <div style={{position:'absolute',top:20,right:20,background:'var(--gold)',color:'var(--navy)',fontFamily:"'Cinzel',serif",fontSize:7,letterSpacing:2,padding:'5px 12px'}}>Most Requested</div>}
                </div>
              </div>
              <div style={{order: i%2===0 ? 1 : 0}}>
                <div style={{width:32,height:1,background:'var(--gold)',marginBottom:20}}/>
                <h2 style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(22px,2.5vw,36px)',fontWeight:400,letterSpacing:2,marginBottom:16,lineHeight:1.2}}>{title}</h2>
                <p style={{fontSize:15,lineHeight:1.9,color:'var(--gray)',marginBottom:28}}>{desc}</p>
                <ul style={{listStyle:'none',marginBottom:32}}>
                  {points.map(p=>(
                    <li key={p} style={{display:'flex',alignItems:'flex-start',gap:12,marginBottom:12,fontSize:14,color:'rgba(253,252,249,0.7)'}}>
                      <span style={{color:'var(--gold)',flexShrink:0,marginTop:2}}>◆</span>{p}
                    </li>
                  ))}
                </ul>
                <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:32}}>
                  {tags.map(t=>(
                    <span key={t} style={{fontSize:9,letterSpacing:2,textTransform:'uppercase',border:'1px solid rgba(196,163,90,0.2)',color:'var(--gold)',padding:'5px 12px'}}>{t}</span>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary">Request a Quote →</Link>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="reveal" style={{background:'rgba(196,163,90,0.04)',border:'1px solid rgba(196,163,90,0.2)',padding:'60px',textAlign:'center'}}>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:32,color:'rgba(196,163,90,0.15)',marginBottom:20}}>◆</div>
            <h3 style={{fontFamily:"'Cinzel',serif",fontSize:24,letterSpacing:2,fontWeight:400,marginBottom:16}}>Don't see your project?</h3>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:'var(--gray)',marginBottom:32,maxWidth:500,margin:'0 auto 32px'}}>Every structure is custom. If you need it built in steel — we can engineer and build it from scratch.</p>
            <Link to="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </div>
        <style>{`
          @media(max-width:960px){
            .srv-main{padding:80px 24px!important;}
            .reveal[style*="grid-template-columns"]{grid-template-columns:1fr!important;gap:36px!important;}
            .srv-img-wrap{order:0!important;}
            .reveal[style*="grid-template-columns"]>div:last-child{order:1!important;}
          }
        `}</style>
      </section>
    </div>
  );
}

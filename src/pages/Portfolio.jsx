import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';
import { HERO1, HERO2, SRV1, SRV2, SRV3, PORT1, PORT2, PORT3, PORT4, PORT5, PORT6 } from '../images';

const PROJECTS = [
  { img: PORT2, category:'Staircases', title:'Exterior Stair System', location:'Lincoln Park, Chicago', desc:'Full exterior structural steel staircase with diamond plate anti-slip treads. Multi-level with landing platform.' },
  { img: HERO1, category:'Staircases', title:'Multi-Level Stair System', location:'North Side, Chicago', desc:'Complete multi-level exterior staircase system. Structural steel framing with powder-coated black finish.' },
  { img: PORT3, category:'Railings', title:'Steel Railing System', location:'Chicago Suburbs', desc:'Custom horizontal bar residential railing. Clean architectural lines, powder-coated matte black.' },
  { img: PORT5, category:'Railings', title:'Modern Handrail System', location:'South Side, Chicago', desc:'Contemporary horizontal bar handrail system for front steps. Dual-side installation.' },
  { img: PORT4, category:'Staircases', title:'Diamond Plate Stair System', location:'Chicago, IL', desc:'Structural steel exterior staircase with diamond plate treads. Anti-slip certified surface.' },
  { img: HERO2, category:'Decks', title:'Custom Metal Deck', location:'Chicago, IL', desc:'Structural steel deck with diamond plate anti-slip surface. Full railing system included.' },
  { img: SRV1, category:'Structural', title:'Structural Steel Installation', location:'Commercial, Chicago', desc:'Full structural steel installation for commercial property. Load-bearing system engineered and installed.' },
  { img: SRV2, category:'Railings', title:'Architectural Railing System', location:'Residential, Chicago', desc:'Custom architectural railing system with precision welded connections.' },
  { img: SRV3, category:'Gates & Fences', title:'Privacy Fence System', location:'Chicago, IL', desc:'Steel frame privacy system with composite wood panels. Wind-load engineered.' },
  { img: PORT1, category:'Railings', title:'Entry Railing System', location:'North Side, Chicago', desc:'Custom entry stair railing with structural steel posts and horizontal bars.' },
  { img: PORT6, category:'Staircases', title:'Exterior Stair Landing', location:'Chicago, IL', desc:'Structural steel landing platform with anti-slip diamond plate surface and matching railing.' },
];

const CATS = ['All', 'Staircases', 'Railings', 'Decks', 'Gates & Fences', 'Structural'];

export default function Portfolio() {
  useReveal();
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <div className="page">
      <div className="page-banner">
        <div className="page-banner-grid"/>
        <div className="page-banner-inner">
          <p className="section-label reveal">Our Work</p>
          <h1 className="reveal">Project <em>Gallery</em></h1>
          <p className="reveal">Every piece measured, cut, welded, and powder-coated in-house. Zero outsourcing.</p>
        </div>
      </div>

      <section style={{padding:'80px 72px',position:'relative',zIndex:2}} className="port-section">
        <div style={{maxWidth:1280,margin:'0 auto'}}>

          {/* Filter tabs */}
          <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:64,justifyContent:'center'}} className="reveal">
            {CATS.map(cat=>(
              <button key={cat} onClick={()=>setActive(cat)} style={{
                fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:3,textTransform:'uppercase',
                padding:'10px 22px',cursor:'pointer',border:'1px solid',
                background: active===cat ? 'var(--gold)' : 'transparent',
                color: active===cat ? 'var(--navy)' : 'var(--gold)',
                borderColor: active===cat ? 'var(--gold)' : 'rgba(196,163,90,0.3)',
                transition:'all .3s',
              }}>{cat}</button>
            ))}
          </div>

          {/* Grid */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:4}} className="port-grid">
            {filtered.map(({img,category,title,location,desc},i)=>(
              <div key={i} style={{position:'relative',overflow:'hidden',background:'var(--navy3)',aspectRatio:'4/3'}}>
                <img src={img} alt={title} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .7s ease',display:'block'}}
                  onMouseEnter={e=>e.target.style.transform='scale(1.06)'}
                  onMouseLeave={e=>e.target.style.transform='scale(1)'}/>
                <div style={{position:'absolute',top:14,left:14,background:'rgba(10,22,40,0.85)',color:'var(--gold)',fontFamily:"'Cinzel',serif",fontSize:7,letterSpacing:3,padding:'5px 12px',border:'1px solid rgba(196,163,90,0.25)'}}>{category}</div>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,22,40,0.94) 0%,transparent 50%)',opacity:0,transition:'opacity .4s',display:'flex',alignItems:'flex-end',padding:24}}
                  onMouseEnter={e=>e.currentTarget.style.opacity=1}
                  onMouseLeave={e=>e.currentTarget.style.opacity=0}>
                  <div>
                    <h3 style={{fontFamily:"'Cinzel',serif",fontSize:14,letterSpacing:2,fontWeight:400,marginBottom:4}}>{title}</h3>
                    <p style={{fontSize:10,letterSpacing:2,textTransform:'uppercase',color:'var(--gold)',marginBottom:6}}>{location}</p>
                    <p style={{fontSize:12,color:'rgba(253,252,249,0.6)',lineHeight:1.5}}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Canva link */}
          <div style={{textAlign:'center',marginTop:64,padding:'48px',background:'rgba(196,163,90,0.04)',border:'1px solid rgba(196,163,90,0.15)'}} className="reveal">
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontStyle:'italic',color:'var(--gray)',marginBottom:24}}>Want to see the full portfolio with all project details?</p>
            <a href="https://www.canva.com/design/DAHCFvGKUVU/Or0UiHITrQjKPoWJeGMRiA/edit" target="_blank" rel="noreferrer" className="btn-primary" style={{marginRight:16}}>View Full Portfolio →</a>
            <Link to="/contact" className="btn-outline">Start Your Project</Link>
          </div>
        </div>

        <style>{`
          @media(max-width:960px){
            .port-section{padding:60px 24px!important;}
            .port-grid{grid-template-columns:1fr 1fr!important;}
          }
          @media(max-width:600px){
            .port-grid{grid-template-columns:1fr!important;}
          }
        `}</style>
      </section>
    </div>
  );
}

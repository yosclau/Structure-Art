import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';
import { HERO2, PORT2 } from '../images';

export default function WhyUs() {
  useReveal();
  return (
    <div className="page">
      <div className="page-banner">
        <div className="page-banner-grid"/>
        <div className="page-banner-inner">
          <p className="section-label reveal">Our Standards</p>
          <h1 className="reveal">Why <em>Structure Art</em></h1>
          <p className="reveal">Not every contractor is the same. Here's what makes us different — and why it matters for your home.</p>
        </div>
      </div>

      {/* COMPARISON */}
      <section style={{padding:'100px 72px',position:'relative',zIndex:2}} className="resp-sect">
        <div style={{maxWidth:1000,margin:'0 auto'}}>
          <h2 className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(34px,4.5vw,60px)',fontWeight:400,letterSpacing:3,marginBottom:64,textAlign:'center'}}>
            Not like <em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300}}>the rest.</em>
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:3}} className="cmp-grid reveal">
            <div style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.06)',padding:'40px 36px'}}>
              <p style={{fontFamily:"'Cinzel',serif",fontSize:10,letterSpacing:4,textTransform:'uppercase',color:'rgba(253,252,249,0.3)',marginBottom:28,paddingBottom:16,borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Other Contractors</p>
              {['Outsourced fabrication, unknown quality','Standard parts, not custom to your space','Rush jobs — corners cut on welds','No on-site measurement before quoting','Disappear after installation','Price looks cheap — until something fails'].map(t=>(
                <div key={t} style={{display:'flex',alignItems:'flex-start',gap:12,marginBottom:16,fontSize:14,lineHeight:1.5,color:'rgba(253,252,249,0.4)'}}>
                  <span style={{color:'rgba(255,90,90,0.6)',fontSize:16,flexShrink:0}}>✕</span>{t}
                </div>
              ))}
            </div>
            <div style={{background:'rgba(196,163,90,0.05)',border:'1px solid rgba(196,163,90,0.25)',padding:'40px 36px'}}>
              <p style={{fontFamily:"'Cinzel',serif",fontSize:10,letterSpacing:4,textTransform:'uppercase',color:'var(--gold)',marginBottom:28,paddingBottom:16,borderBottom:'1px solid rgba(196,163,90,0.2)'}}>◆ Structure Art</p>
              {['100% in-house fabrication by Adrián\'s team','Every piece custom to your exact specifications','No shortcuts. No rushed finishes. Ever.','Free on-site consultation & measurement','We don\'t leave until everything is perfect','Built to last decades. Guaranteed quality.'].map(t=>(
                <div key={t} style={{display:'flex',alignItems:'flex-start',gap:12,marginBottom:16,fontSize:14,lineHeight:1.5,color:'var(--white)'}}>
                  <span style={{color:'var(--gold)',fontSize:14,flexShrink:0}}>◆</span>{t}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:960px){.cmp-grid{grid-template-columns:1fr!important;}.resp-sect{padding:80px 24px!important;}}`}</style>
      </section>

      {/* VALUES */}
      <section style={{padding:'100px 72px',background:'var(--navy2)',position:'relative',zIndex:2}} className="resp-sect2">
        <div style={{maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:100,alignItems:'center'}} className="vals-grid">
          <div>
            <p className="section-label reveal">Our Foundation</p>
            <h2 className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(32px,3.5vw,52px)',fontWeight:400,letterSpacing:2,lineHeight:1.15,marginBottom:12}}>
              Built on <em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300}}>principles.</em>
            </h2>
            <div style={{width:48,height:1,background:'var(--gold)',margin:'20px 0 28px'}}/>
            <p style={{fontSize:15,lineHeight:1.9,color:'var(--gray)',marginBottom:20}} className="reveal">Structure Art was born from a simple belief: the families of Chicago deserve steel structures built with the same care and precision as the city's landmark buildings.</p>
            <p style={{fontSize:15,lineHeight:1.9,color:'var(--gray)',marginBottom:32}} className="reveal">Founded by Adrián Rodriguez — a Mexican craftsman who learned his trade hands-on — every project carries the weight of that responsibility.</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:2,marginTop:12}}>
              {[['Integrity','We do what we say. Every time, without exception.'],['Precision','Custom-fabricated to exact specifications.'],['No Shortcuts','No rushed finishes. No compromised safety.'],['Dignity','Respect for the craft and the client\'s investment.']].map(([t,d])=>(
                <div key={t} className="reveal" style={{background:'rgba(196,163,90,0.04)',border:'1px solid rgba(196,163,90,0.1)',padding:'24px 20px',transition:'all .3s'}}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(196,163,90,0.08)';e.currentTarget.style.borderColor='rgba(196,163,90,0.3)';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(196,163,90,0.04)';e.currentTarget.style.borderColor='rgba(196,163,90,0.1)';}}>
                  <h4 style={{fontFamily:"'Cinzel',serif",fontSize:11,letterSpacing:3,color:'var(--gold)',marginBottom:8,textTransform:'uppercase'}}>{t}</h4>
                  <p style={{fontSize:12,color:'rgba(253,252,249,0.45)',lineHeight:1.6}}>{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{position:'relative'}} className="reveal delay-1">
            <img src={PORT2} alt="Structure Art Work" style={{width:'100%',display:'block',border:'1px solid rgba(196,163,90,0.15)'}}/>
            <div style={{position:'absolute',bottom:-24,left:-24,width:'60%',background:'var(--navy3)',border:'1px solid rgba(196,163,90,0.2)',padding:'20px 22px'}}>
              <h4 style={{fontFamily:"'Cinzel',serif",fontSize:12,letterSpacing:2,color:'var(--gold)'}}>Adrián Rodriguez</h4>
              <p style={{fontSize:11,color:'var(--gray)',marginTop:6,letterSpacing:1}}>Founder & Master Craftsman · Chicago, IL</p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:960px){.vals-grid{grid-template-columns:1fr!important;gap:48px!important;}.resp-sect2{padding:80px 24px!important;}}`}</style>
      </section>

      {/* PROCESS */}
      <section style={{padding:'100px 72px',position:'relative',zIndex:2}} className="resp-sect3">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <p className="section-label reveal">How It Works</p>
          <h2 className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(34px,4.5vw,60px)',fontWeight:400,letterSpacing:3,marginBottom:80}}>
            Simple <em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300}}>process.</em>
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',position:'relative'}} className="proc-grid">
            <div style={{content:'',position:'absolute',top:32,left:'12%',right:'12%',height:1,background:'linear-gradient(90deg,transparent,rgba(196,163,90,0.3),rgba(196,163,90,0.3),transparent)'}}/>
            {[['01','Free Consultation','We visit your site, assess the space, and measure everything on-site. No commitment required.'],
              ['02','Custom Design & Quote','We design to exact specifications and send a detailed quote. No surprises, no hidden fees.'],
              ['03','In-House Fabrication','Cut, welded, and powder-coated in-house by Adrián\'s team. Zero outsourcing.'],
              ['04','Professional Install','We install, clean up, and verify perfection before we leave. Your satisfaction is the standard.'],
            ].map(([n,t,d],i)=>(
              <div key={n} className={`reveal delay-${i+1}`} style={{textAlign:'center',padding:'0 20px'}}>
                <div style={{width:64,height:64,border:'1px solid rgba(196,163,90,0.35)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 28px',fontFamily:"'Cinzel',serif",fontSize:20,color:'var(--gold)',background:'var(--navy)',position:'relative',zIndex:1,transition:'all .3s',cursor:'default'}}
                  onMouseEnter={e=>{e.currentTarget.style.background='var(--gold)';e.currentTarget.style.color='var(--navy)';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='var(--navy)';e.currentTarget.style.color='var(--gold)';}}>
                  {n}
                </div>
                <h3 style={{fontFamily:"'Cinzel',serif",fontSize:13,letterSpacing:2,fontWeight:400,marginBottom:12}}>{t}</h3>
                <p style={{fontSize:13,color:'var(--gray)',lineHeight:1.7}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:960px){.proc-grid{grid-template-columns:1fr 1fr!important;gap:40px;}.resp-sect3{padding:80px 24px!important;}}`}</style>
      </section>

      <section style={{padding:'80px 72px',textAlign:'center',position:'relative',zIndex:2,borderTop:'1px solid rgba(196,163,90,0.1)'}}>
        <h2 className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(28px,3.5vw,46px)',fontWeight:400,letterSpacing:2,marginBottom:16}}>
          Ready to work with the <em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300}}>best?</em>
        </h2>
        <p className="reveal" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:'var(--gray)',marginBottom:36}}>No commitment. Just a real conversation about your project.</p>
        <div className="reveal" style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
          <Link to="/contact" className="btn-primary">Request a Free Quote</Link>
          <Link to="/services" className="btn-outline">View Our Services</Link>
        </div>
      </section>
    </div>
  );
}

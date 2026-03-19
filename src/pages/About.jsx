import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';
import { HERO2, PORT3 } from '../images';

export default function About() {
  useReveal();
  return (
    <div className="page">
      <div className="page-banner">
        <div className="page-banner-grid"/>
        <div className="page-banner-inner">
          <p className="section-label reveal">The Story</p>
          <h1 className="reveal">About <em>Adrián</em></h1>
          <p className="reveal">The craftsman behind every weld, every measurement, every structure that stands.</p>
        </div>
      </div>

      {/* STORY */}
      <section style={{padding:'100px 72px',position:'relative',zIndex:2}} className="about-sect">
        <div style={{maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:100,alignItems:'center'}} className="about-grid">
          <div>
            <p className="section-label reveal">Founded by Adrián Rodriguez</p>
            <h2 className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(32px,3.5vw,52px)',fontWeight:400,letterSpacing:2,lineHeight:1.15,marginBottom:12}}>
              Chicago is built<br/>on <em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300}}>steel.</em>
            </h2>
            <div style={{width:48,height:1,background:'var(--gold)',margin:'20px 0 28px'}}/>
            <p style={{fontSize:15,lineHeight:1.9,color:'var(--gray)',marginBottom:20}} className="reveal">
              Adrián's story didn't start in Chicago. It started in Mexico, learning the value of hard work, precision, and responsibility — working hands-on with metal and construction long before arriving in the city.
            </p>
            <p style={{fontSize:15,lineHeight:1.9,color:'var(--gray)',marginBottom:20}} className="reveal">
              When he arrived in Chicago — known as the city of steel — it felt like purpose meeting opportunity. <strong style={{color:'var(--white)'}}>What began as a trade became a calling.</strong>
            </p>
            <p style={{fontSize:15,lineHeight:1.9,color:'var(--gray)',marginBottom:32}} className="reveal">
              Structure Art combines structural welding, custom metal fabrication, wood integration, and construction expertise to deliver projects that are not only strong — but meaningful. Because behind every balcony, staircase, and frame, <strong style={{color:'var(--white)'}}>there is a family that depends on that structure.</strong>
            </p>
            <blockquote className="reveal" style={{borderLeft:'2px solid var(--gold)',paddingLeft:24,margin:'32px 0',fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontStyle:'italic',fontWeight:300,color:'var(--gold3)',lineHeight:1.6}}>
              "There is trust. There is safety. There is a family who depends on that structure."
            </blockquote>
          </div>
          <div style={{position:'relative'}} className="reveal delay-1">
            <img src={HERO2} alt="Adrián at work" style={{width:'100%',display:'block',border:'1px solid rgba(196,163,90,0.15)',objectFit:'cover',height:520}}/>
            <div style={{position:'absolute',bottom:-24,left:-24,background:'var(--navy3)',border:'1px solid rgba(196,163,90,0.2)',padding:'22px 26px',borderLeft:'3px solid var(--gold)'}}>
              <h4 style={{fontFamily:"'Cinzel',serif",fontSize:13,letterSpacing:2,color:'var(--gold)'}}>Adrián Rodriguez</h4>
              <p style={{fontSize:12,color:'var(--gray)',marginTop:6}}>Founder & Master Craftsman · Chicago, IL</p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:960px){.about-grid{grid-template-columns:1fr!important;gap:48px!important;}.about-sect{padding:80px 24px!important;}}`}</style>
      </section>

      {/* VALUES */}
      <section style={{padding:'80px 72px',background:'var(--navy2)',position:'relative',zIndex:2}} className="vals-sect">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <p className="section-label reveal">What We Stand For</p>
          <h2 className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(32px,3.5vw,52px)',fontWeight:400,letterSpacing:2,marginBottom:48}}>
            At Structure Art, every project<br/>is approached <em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300}}>with intention.</em>
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:2}} className="vals-grid">
            {[['Integrity','We do what we say. Always. No exceptions, no excuses.'],
              ['Dignity','Respect for the craft, the client, and the investment they\'re making.'],
              ['Quality Craftsmanship','Every weld, every measurement, every finish — done right.'],
              ['No Shortcuts','No rushed finishes. No compromised safety. No exceptions.'],
              ['No Compromised Safety','Structural safety is non-negotiable. We build for families.'],
              ['Respect for the Investment','Your project matters. We treat it like it\'s our own home.'],
            ].map(([t,d],i)=>(
              <div key={t} className={`reveal delay-${(i%3)+1}`} style={{background:'rgba(196,163,90,0.03)',border:'1px solid rgba(196,163,90,0.1)',padding:'32px 28px',transition:'all .3s'}}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(196,163,90,0.07)';e.currentTarget.style.borderColor='rgba(196,163,90,0.3)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(196,163,90,0.03)';e.currentTarget.style.borderColor='rgba(196,163,90,0.1)';}}>
                <h4 style={{fontFamily:"'Cinzel',serif",fontSize:12,letterSpacing:3,color:'var(--gold)',marginBottom:12,textTransform:'uppercase'}}>{t}</h4>
                <p style={{fontSize:13,color:'rgba(253,252,249,0.5)',lineHeight:1.7}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:960px){.vals-grid{grid-template-columns:1fr!important;}.vals-sect{padding:60px 24px!important;}}`}</style>
      </section>

      {/* MISSION */}
      <section style={{padding:'100px 72px',textAlign:'center',position:'relative',zIndex:2,background:'var(--navy3)',overflow:'hidden'}}>
        <div style={{position:'absolute',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(196,163,90,0.06) 0%,transparent 70%)',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}/>
        <div style={{position:'relative',zIndex:1,maxWidth:700,margin:'0 auto'}} className="reveal">
          <div style={{width:48,height:1,background:'var(--gold)',margin:'0 auto 28px'}}/>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(24px,3.5vw,44px)',fontWeight:300,fontStyle:'italic',lineHeight:1.45,color:'var(--white)',marginBottom:28}}>
            "Build <span style={{color:'var(--gold)'}}>strong.</span> Serve with <span style={{color:'var(--gold)'}}>respect.</span> Deliver work that <span style={{color:'var(--gold)'}}>lasts.</span>"
          </p>
          <div style={{width:48,height:1,background:'var(--gold)',margin:'0 auto 32px'}}/>
          <p style={{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:5,color:'var(--gold)',marginBottom:36}}>— The Structure Art Mission</p>
          <Link to="/contact" className="btn-primary">Work With Adrián</Link>
        </div>
      </section>
    </div>
  );
}

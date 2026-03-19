import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';
import { useLang } from '../lang';
import { HERO1, HERO2, PORT2, PORT3, PORT4, PORT5 } from '../images';

export default function Home() {
  useReveal();
  const { t } = useLang();

  return (
    <div className="page">
      {/* HERO */}
      <section style={{minHeight:'100vh',position:'relative',display:'flex',alignItems:'center',overflow:'hidden',padding:'0 72px'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 90% 80% at 65% 55%,rgba(196,163,90,0.07) 0%,transparent 60%),linear-gradient(155deg,#0A1628 0%,#0E1E35 45%,#0A1218 100%)'}}/>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(196,163,90,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(196,163,90,0.035) 1px,transparent 1px)',backgroundSize:'80px 80px'}}/>
        <div style={{position:'relative',zIndex:2,maxWidth:1280,margin:'0 auto',width:'100%',paddingTop:100,display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}} className="hero-grid">
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:10,border:'1px solid rgba(196,163,90,0.3)',padding:'7px 18px',borderRadius:100,marginBottom:32,fontSize:10,letterSpacing:3,color:'var(--gold)',background:'rgba(196,163,90,0.05)',animation:'fadeUp .8s ease .1s both'}}>
              <span style={{width:6,height:6,borderRadius:'50%',background:'var(--gold)',animation:'blink 2s infinite',flexShrink:0}}/>
              {t.hero_tag}
            </div>
            <h1 style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(42px,5.5vw,82px)',lineHeight:1.04,letterSpacing:2,animation:'fadeUp .9s ease .25s both'}}>
              {t.hero_h1_1}<br/>
              <em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300,fontSize:'1.1em'}}>{t.hero_h1_2}</em><br/>
              <span style={{WebkitTextStroke:'1px rgba(196,163,90,0.5)',color:'transparent',display:'block'}}>{t.hero_h1_3}</span>
            </h1>
            <div style={{width:56,height:1,background:'var(--gold)',margin:'28px 0',animation:'fadeUp .9s ease .4s both'}}/>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:300,lineHeight:1.8,color:'var(--gray)',marginBottom:44,maxWidth:460,animation:'fadeUp .9s ease .5s both'}}>{t.hero_sub}</p>
            <div style={{display:'flex',gap:16,animation:'fadeUp .9s ease .65s both',flexWrap:'wrap'}}>
              <Link to="/contact" className="btn-primary">{t.hero_cta1}</Link>
              <Link to="/portfolio" className="btn-outline">{t.hero_cta2}</Link>
            </div>
            <div style={{display:'flex',gap:40,marginTop:52,animation:'fadeUp .9s ease .8s both'}} className="hero-stats">
              {[['100%',t.hero_stat1],['0',t.hero_stat2],['CHI',t.hero_stat3]].map(([n,l])=>(
                <div key={l}>
                  <h3 style={{fontFamily:"'Cinzel',serif",fontSize:34,color:'var(--gold)',letterSpacing:1}}>{n}</h3>
                  <p style={{fontSize:9,letterSpacing:2,textTransform:'uppercase',color:'rgba(253,252,249,0.35)',marginTop:4}}>{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{position:'relative',height:580,animation:'fadeIn 1.2s ease .4s both'}} className="hero-right-desktop">
            <img src={HERO1} alt="Structure Art" style={{width:'78%',height:480,objectFit:'cover',display:'block',border:'1px solid rgba(196,163,90,0.2)'}}/>
            {[
              {style:{bottom:40,left:-20,width:196,animationDelay:'0s'},title:t.hero_card1_title,text:t.hero_card1_text},
              {style:{top:16,right:-10,width:176,animationDelay:'1.5s'},title:t.hero_card2_title,text:t.hero_card2_text},
              {style:{bottom:150,right:24,width:158,animationDelay:'.8s'},title:t.hero_card3_title,text:t.hero_card3_text},
            ].map(({style,title,text})=>(
              <div key={title} style={{position:'absolute',background:'rgba(14,30,53,0.82)',backdropFilter:'blur(16px)',border:'1px solid rgba(196,163,90,0.2)',padding:'16px 20px',animation:`float 4s ease-in-out infinite`,...style}}>
                <h4 style={{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:2,color:'var(--gold)',marginBottom:6,display:'flex',alignItems:'center',gap:6}}>
                  <span style={{width:6,height:6,borderRadius:'50%',background:'var(--gold)',display:'block',flexShrink:0}}/>{title}
                </h4>
                <p style={{fontSize:11,color:'var(--gray)',lineHeight:1.5}}>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:960px){.hero-grid{grid-template-columns:1fr!important;padding:0 24px;}.hero-right-desktop{display:none!important;}.hero-stats{gap:24px!important;}}`}</style>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {['Structural Steel Installation','Custom Metal Decks','Beam Reinforcement','Architectural Metal Systems','High-End Gates & Fences','No Shortcuts','Chicago Proud',
            'Structural Steel Installation','Custom Metal Decks','Beam Reinforcement','Architectural Metal Systems','High-End Gates & Fences','No Shortcuts','Chicago Proud'
          ].map((item,i)=><div key={i} className="marquee-item">{item}</div>)}
        </div>
      </div>

      {/* PAIN */}
      <section style={{padding:'120px 72px',position:'relative',zIndex:2}} className="resp-pad">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <p className="section-label reveal">{t.pain_label}</p>
          <h2 className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(34px,4.5vw,60px)',fontWeight:400,letterSpacing:2,lineHeight:1.1,marginBottom:64}}>
            {t.pain_h2_1}<br/>{t.pain_h2_2} <em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300}}>{t.pain_h2_em}</em>
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:2}} className="three-col">
            {[[t.pain1_title,t.pain1_text,'🔴'],[t.pain2_title,t.pain2_text,'⚠️'],[t.pain3_title,t.pain3_text,'🏗️']].map(([title,text,icon],i)=>(
              <div key={i} className={`reveal delay-${i+1}`} style={{background:'rgba(22,36,64,0.5)',border:'1px solid rgba(196,163,90,0.1)',padding:'40px 32px',transition:'all .4s',cursor:'default'}}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(22,36,64,0.85)';e.currentTarget.style.borderColor='rgba(196,163,90,0.3)';e.currentTarget.style.transform='translateY(-4px)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(22,36,64,0.5)';e.currentTarget.style.borderColor='rgba(196,163,90,0.1)';e.currentTarget.style.transform='translateY(0)';}}>
                <div style={{fontSize:26,marginBottom:20}}>{icon}</div>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,marginBottom:12,fontWeight:400}}>{title}</h3>
                <p style={{fontSize:13,lineHeight:1.8,color:'var(--gray)'}}>{text}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:52,textAlign:'center'}}>
            <Link to="/why-us" className="btn-outline">{t.pain_link}</Link>
          </div>
        </div>
        <style>{`@media(max-width:960px){.three-col{grid-template-columns:1fr!important;}.resp-pad{padding:80px 24px!important;}}`}</style>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section style={{padding:'120px 72px',background:'var(--navy2)',position:'relative',zIndex:2}} className="resp-pad2">
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:64}} className="port-head-row">
            <div>
              <p className="section-label reveal">{t.port_label}</p>
              <h2 className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(34px,4.5vw,60px)',fontWeight:400,letterSpacing:3}}>
                {t.port_h2} <em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300}}>{t.port_h2_em}</em>
              </h2>
            </div>
            <Link to="/portfolio" className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:3,textTransform:'uppercase',color:'var(--gold)',textDecoration:'none',borderBottom:'1px solid rgba(196,163,90,0.4)',paddingBottom:3}}>{t.port_link}</Link>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr',gridTemplateRows:'300px 280px',gap:4}} className="bento-grid reveal">
            {[
              {img:PORT2,tag:'Featured',title:'Exterior Stair System',sub:'Diamond Plate · Chicago',big:true},
              {img:PORT3,tag:'Architectural',title:'Steel Railing System',sub:'Residential · North Side'},
              {img:HERO2,title:'Custom Metal Deck',sub:'Anti-Slip Diamond Plate'},
              {img:PORT4,title:'Multi-Level Stair System',sub:'Structural Steel · Chicago'},
              {img:PORT5,tag:'New',title:'Modern Handrail System',sub:'Horizontal Bar Design'},
            ].map(({img,tag,title,sub,big},i)=>(
              <div key={i} style={{position:'relative',overflow:'hidden',background:'var(--navy3)',gridRow:big?'span 2':undefined}}>
                <img src={img} alt={title} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .7s ease',display:'block'}}
                  onMouseEnter={e=>e.target.style.transform='scale(1.06)'}
                  onMouseLeave={e=>e.target.style.transform='scale(1)'}/>
                {tag&&<div style={{position:'absolute',top:18,right:18,background:'rgba(10,22,40,0.85)',color:'var(--gold)',fontFamily:"'Cinzel',serif",fontSize:7,letterSpacing:3,padding:'6px 14px',border:'1px solid rgba(196,163,90,0.3)'}}>{tag}</div>}
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,22,40,0.92) 0%,transparent 55%)',opacity:0,transition:'opacity .4s',display:'flex',alignItems:'flex-end',padding:28}}
                  onMouseEnter={e=>e.currentTarget.style.opacity=1}
                  onMouseLeave={e=>e.currentTarget.style.opacity=0}>
                  <div>
                    <h3 style={{fontFamily:"'Cinzel',serif",fontSize:14,letterSpacing:2,fontWeight:400,marginBottom:5}}>{title}</h3>
                    <p style={{fontSize:9,letterSpacing:3,textTransform:'uppercase',color:'var(--gold)'}}>{sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:960px){.resp-pad2{padding:80px 24px!important;}.port-head-row{flex-direction:column;align-items:flex-start;gap:20px;}.bento-grid{grid-template-columns:1fr!important;grid-template-rows:auto!important;}.bento-grid>div{height:220px!important;grid-row:span 1!important;}}`}</style>
      </section>

      {/* STATEMENT */}
      <section style={{padding:'100px 72px',background:'var(--navy3)',position:'relative',zIndex:2,textAlign:'center',overflow:'hidden'}}>
        <div style={{position:'absolute',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(196,163,90,0.06) 0%,transparent 70%)',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}/>
        <div style={{position:'relative',zIndex:1,maxWidth:800,margin:'0 auto'}} className="reveal">
          <div style={{width:48,height:1,background:'var(--gold)',margin:'0 auto 28px'}}/>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(26px,4vw,50px)',fontWeight:300,fontStyle:'italic',lineHeight:1.4,color:'var(--white)',marginBottom:28}}>
            {t.statement} <span style={{color:'var(--gold)'}}>{t.statement_gold}</span> {t.statement_end}
          </p>
          <div style={{width:48,height:1,background:'var(--gold)',margin:'0 auto 28px'}}/>
          <p style={{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:5,color:'var(--gold)'}}>{t.statement_by}</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'80px 72px',position:'relative',zIndex:2,textAlign:'center',background:'linear-gradient(135deg,rgba(196,163,90,0.08) 0%,transparent 100%)',borderTop:'1px solid rgba(196,163,90,0.12)'}}>
        <h2 className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(28px,3.5vw,48px)',fontWeight:400,letterSpacing:2,marginBottom:16}}>
          {t.cta_h2} <em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300}}>{t.cta_h2_em}</em>
        </h2>
        <p className="reveal" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:'var(--gray)',marginBottom:36}}>{t.cta_sub}</p>
        <div className="reveal" style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
          <Link to="/contact" className="btn-primary">{t.cta_btn1}</Link>
          <Link to="/services" className="btn-outline">{t.cta_btn2}</Link>
        </div>
      </section>
    </div>
  );
}

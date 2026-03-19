import { useState } from 'react';
import useReveal from '../components/useReveal';
import { useLang } from '../lang';

export default function Contact() {
  useReveal();
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:'', phone:'', email:'', zip:'', service:'', message:'' });
  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://formspree.io/f/mreyjzge', {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form),
    });
    if (res.ok || res.status === 422) setSubmitted(true);
  };

  const inputStyle = { background:'rgba(10,22,40,0.6)', border:'1px solid rgba(196,163,90,0.15)', color:'var(--white)', padding:'14px 18px', fontFamily:"'DM Sans',sans-serif", fontSize:14, outline:'none', width:'100%', transition:'border-color .3s' };
  const labelStyle = { fontFamily:"'Cinzel',serif", fontSize:8, letterSpacing:3, textTransform:'uppercase', color:'rgba(253,252,249,0.3)', display:'block', marginBottom:8 };

  const services = ['Structural Steel Installation','Custom Metal Decks','Beam Installation & Reinforcement','Architectural Metal Systems','High-End Gates & Fences','Other / Not Sure Yet'];

  return (
    <div className="page">
      <div className="page-banner">
        <div className="page-banner-grid"/>
        <div className="page-banner-inner">
          <p className="section-label reveal">{t.contact_label}</p>
          <h1 className="reveal">{t.contact_h1} <em>{t.contact_h1_em}</em></h1>
          <p className="reveal">{t.contact_sub}</p>
        </div>
      </div>
      <section style={{padding:'100px 72px',position:'relative',zIndex:2}} className="contact-sect">
        <div style={{maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:80,alignItems:'flex-start'}} className="contact-grid">
          <div>
            <p className="section-label reveal">{t.contact_info_label}</p>
            <h2 className="reveal" style={{fontFamily:"'Cinzel',serif",fontSize:'clamp(28px,3vw,44px)',fontWeight:400,letterSpacing:2,lineHeight:1.2,marginBottom:12}}>
              {t.contact_info_h2}<br/><em style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',color:'var(--gold)',fontWeight:300}}>{t.contact_info_em}</em>
            </h2>
            <div style={{width:48,height:1,background:'var(--gold)',margin:'20px 0 32px'}}/>
            {[
              {icon:'📞',label:'Phone',val:'(470) 914-8996',href:'tel:4709148996'},
              {icon:'✉️',label:'Email',val:'Structureartco@gmail.com',href:'mailto:Structureartco@gmail.com'},
              {icon:'📸',label:'Instagram',val:'@todo_en_estructura_chicago',href:'https://instagram.com/todo_en_estructura_chicago'},
              {icon:'📍',label:'Service Area',val:'Chicago & Suburbs, Illinois',href:null},
            ].map(({icon,label,val,href})=>(
              <div key={label} className="reveal" style={{display:'flex',gap:16,alignItems:'flex-start',marginBottom:28,paddingBottom:28,borderBottom:'1px solid rgba(196,163,90,0.08)'}}>
                <span style={{fontSize:20,flexShrink:0,marginTop:2}}>{icon}</span>
                <div>
                  <p style={{fontFamily:"'Cinzel',serif",fontSize:9,letterSpacing:3,color:'var(--gold)',textTransform:'uppercase',marginBottom:6}}>{label}</p>
                  {href ? <a href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer" style={{fontSize:14,color:'rgba(253,252,249,0.7)',textDecoration:'none'}}>{val}</a>
                  : <p style={{fontSize:14,color:'rgba(253,252,249,0.7)'}}>{val}</p>}
                </div>
              </div>
            ))}
            <div className="reveal" style={{background:'rgba(196,163,90,0.05)',border:'1px solid rgba(196,163,90,0.2)',padding:'28px 24px',marginTop:8}}>
              <h4 style={{fontFamily:"'Cinzel',serif",fontSize:11,letterSpacing:2,color:'var(--gold)',marginBottom:12}}>{t.contact_free}</h4>
              <p style={{fontSize:13,color:'var(--gray)',lineHeight:1.7}}>{t.contact_free_text}</p>
            </div>
          </div>
          <div className="reveal delay-1">
            {submitted ? (
              <div style={{background:'rgba(196,163,90,0.06)',border:'1px solid rgba(196,163,90,0.3)',padding:'60px 48px',textAlign:'center'}}>
                <div style={{fontSize:40,marginBottom:20}}>✓</div>
                <h3 style={{fontFamily:"'Cinzel',serif",fontSize:22,letterSpacing:2,color:'var(--gold)',marginBottom:16}}>{t.form_success_title}</h3>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:'var(--gray)',lineHeight:1.7}}>{t.form_success_text}</p>
              </div>
            ) : (
              <div style={{background:'rgba(22,36,64,0.6)',border:'1px solid rgba(196,163,90,0.15)',padding:'48px',backdropFilter:'blur(10px)'}}>
                <form onSubmit={handleSubmit}>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}} className="form-grid">
                    <div><label style={labelStyle}>{t.form_name} *</label><input name="name" value={form.name} onChange={handleChange} placeholder={t.form_name} required style={inputStyle} onFocus={e=>e.target.style.borderColor='rgba(196,163,90,0.5)'} onBlur={e=>e.target.style.borderColor='rgba(196,163,90,0.15)'}/></div>
                    <div><label style={labelStyle}>{t.form_phone}</label><input name="phone" value={form.phone} onChange={handleChange} placeholder="(312) 000-0000" style={inputStyle} onFocus={e=>e.target.style.borderColor='rgba(196,163,90,0.5)'} onBlur={e=>e.target.style.borderColor='rgba(196,163,90,0.15)'}/></div>
                    <div><label style={labelStyle}>{t.form_email} *</label><input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required style={inputStyle} onFocus={e=>e.target.style.borderColor='rgba(196,163,90,0.5)'} onBlur={e=>e.target.style.borderColor='rgba(196,163,90,0.15)'}/></div>
                    <div><label style={labelStyle}>{t.form_zip}</label><input name="zip" value={form.zip} onChange={handleChange} placeholder="Chicago area" style={inputStyle} onFocus={e=>e.target.style.borderColor='rgba(196,163,90,0.5)'} onBlur={e=>e.target.style.borderColor='rgba(196,163,90,0.15)'}/></div>
                    <div style={{gridColumn:'span 2'}}>
                      <label style={labelStyle}>{t.form_service}</label>
                      <select name="service" value={form.service} onChange={handleChange} style={{...inputStyle,cursor:'pointer'}}>
                        <option value="">{t.form_service_placeholder}</option>
                        {services.map(s=><option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div style={{gridColumn:'span 2'}}><label style={labelStyle}>{t.form_message}</label><textarea name="message" value={form.message} onChange={handleChange} placeholder={t.form_message_placeholder} style={{...inputStyle,resize:'vertical',minHeight:120}} onFocus={e=>e.target.style.borderColor='rgba(196,163,90,0.5)'} onBlur={e=>e.target.style.borderColor='rgba(196,163,90,0.15)'}/></div>
                    <div style={{gridColumn:'span 2',marginTop:8}}><button type="submit" className="btn-primary" style={{width:'100%',padding:18,border:'none',cursor:'pointer',fontSize:10,letterSpacing:4}}>{t.form_submit}</button></div>
                  </div>
                  <p style={{fontSize:11,color:'rgba(253,252,249,0.25)',marginTop:16,textAlign:'center',letterSpacing:1}}>{t.form_privacy}</p>
                </form>
              </div>
            )}
          </div>
        </div>
        <style>{`@media(max-width:960px){.contact-sect{padding:80px 24px!important;}.contact-grid{grid-template-columns:1fr!important;gap:48px!important;}.form-grid{grid-template-columns:1fr!important;}.form-grid>div[style*="span 2"]{grid-column:span 1!important;}}`}</style>
      </section>
    </div>
  );
}

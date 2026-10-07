import { useState } from 'react';
import { useLang } from '../lang';
import { CONTACT } from '../config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Formulario de contacto via Formspree. variant 'contact' lleva tipo de
// proyecto y rango de presupuesto; variant 'trade' lleva empresa.
// Honeypot, validacion en linea y estados bilingues.
export default function LeadForm({ variant = 'contact' }) {
  const { lang, L, ui } = useLang();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const isTrade = variant === 'trade';
  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    ['name', 'email', 'message'].forEach((k) => {
      if (!values[k]?.trim()) er[k] = L(ui.form.required);
    });
    if (!isTrade && !values.phone?.trim()) er.phone = L(ui.form.required);
    if (values.email?.trim() && !EMAIL_RE.test(values.email)) er.email = L(ui.form.invalid_email);
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (values._gotcha) return; // honeypot
    if (!validate()) return;
    setStatus('sending');
    try {
      const res = await fetch(CONTACT.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, form_type: variant, language: lang }),
      });
      setStatus(res.ok ? 'ok' : 'fail');
    } catch {
      setStatus('fail');
    }
  };

  if (status === 'ok') {
    return <div className="form-status ok" role="status">{L(ui.form.success)}</div>;
  }

  const field = (key, label, control) => (
    <div className={`field ${errors[key] ? 'has-error' : ''}`}>
      <label htmlFor={`${variant}-${key}`}>{label}</label>
      {control}
      {errors[key] && <p className="field-error" role="alert">{errors[key]}</p>}
    </div>
  );

  return (
    <form className="form-grid" onSubmit={onSubmit} noValidate>
      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`${variant}-gotcha`}>{L(ui.form.gotcha)}</label>
        <input id={`${variant}-gotcha`} tabIndex="-1" autoComplete="off" value={values._gotcha || ''} onChange={set('_gotcha')} />
      </div>

      <div className="form-row">
        {field('name', L(ui.form.name), (
          <input id={`${variant}-name`} name="name" autoComplete="name" value={values.name || ''} onChange={set('name')} required />
        ))}
        {isTrade
          ? field('company', L(ui.form.company), (
            <input id={`${variant}-company`} name="company" autoComplete="organization" value={values.company || ''} onChange={set('company')} />
          ))
          : field('phone', L(ui.form.phone), (
            <input id={`${variant}-phone`} name="phone" type="tel" autoComplete="tel" value={values.phone || ''} onChange={set('phone')} required />
          ))}
      </div>

      <div className="form-row">
        {field('email', L(ui.form.email), (
          <input id={`${variant}-email`} name="email" type="email" autoComplete="email" value={values.email || ''} onChange={set('email')} required />
        ))}
        {isTrade
          ? field('phone', L(ui.form.phone), (
            <input id={`${variant}-phone`} name="phone" type="tel" autoComplete="tel" value={values.phone || ''} onChange={set('phone')} />
          ))
          : field('project_type', L(ui.form.project_type), (
            <select id={`${variant}-project_type`} name="project_type" value={values.project_type || ''} onChange={set('project_type')}>
              <option value="">{L(ui.form.project_placeholder)}</option>
              {ui.form.types.map((t) => <option key={t.id} value={t.id}>{L(t)}</option>)}
            </select>
          ))}
      </div>

      {!isTrade && (
        <div className="form-row">
          {field('budget', L(ui.form.budget), (
            <select id={`${variant}-budget`} name="budget" value={values.budget || ''} onChange={set('budget')}>
              <option value="">{L(ui.form.budget_placeholder)}</option>
              {ui.form.budgets.map((b) => <option key={b.id} value={b.id}>{L(b)}</option>)}
            </select>
          ))}
          <div />
        </div>
      )}

      {field('message', L(ui.form.message), (
        <textarea id={`${variant}-message`} name="message" placeholder={L(ui.form.message_placeholder)} value={values.message || ''} onChange={set('message')} required />
      ))}

      {status === 'fail' && <div className="form-status fail" role="alert">{L(ui.form.error)}</div>}

      <div>
        <button type="submit" className="btn-gold" disabled={status === 'sending'}>
          {status === 'sending' ? L(ui.form.sending) : L(ui.form.send)}
        </button>
      </div>
    </form>
  );
}

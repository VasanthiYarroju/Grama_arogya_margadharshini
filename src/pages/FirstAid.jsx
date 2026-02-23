import { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LangContext';

const severityColor = { high: 'severity-high', medium: 'severity-medium', low: 'severity-low' };

export default function FirstAid() {
  const [open, setOpen] = useState(null);
  const ref = useScrollReveal();
  const { t } = useLang();

  useEffect(() => { document.title = 'First Aid – Grama Arogya'; }, []);

  const toggle = (i) => setOpen(open === i ? null : i);

  const situations = t('firstaid.situations');

  const severityLabel = {
    high: t('firstaid.severityHigh'),
    medium: t('firstaid.severityMed'),
    low: t('firstaid.severityLow'),
  };

  return (
    <div className="page-enter" ref={ref}>
      <div className="page-hero-mini">
        <h1>{t('firstaid.heroTitle')}</h1>
        <p>{t('firstaid.heroSub')}</p>
      </div>

      <div className="firstaid-page">
        <p className="section-subtitle reveal" style={{ marginBottom: '2rem' }}>
          {t('firstaid.subNote')}
        </p>

        {situations.map((item, i) => (
          <div className="accordion-item reveal" key={i} style={{ transitionDelay: `${i * 0.09}s` }}>
            <div className="accordion-header" onClick={() => toggle(i)}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={`severity-dot ${severityColor[item.severity]}`} />
                <span>{item.title}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
                <span style={{ fontSize: '.72rem', color: '#78909c' }}>{severityLabel[item.severity]}</span>
                <span style={{ fontSize: '1.1rem', color: '#2e7d32' }}>{open === i ? '▲' : '▼'}</span>
              </div>
            </div>

            {open === i && (
              <div className="accordion-body">
                <h4 style={{ fontWeight: 600, marginBottom: '.8rem', color: '#2e7d32' }}>{t('firstaid.stepsLabel')}</h4>
                <ol className="steps-list">
                  {item.steps.map((s, si) => <li key={si}>{s}</li>)}
                </ol>

                <div className="dos-donts">
                  <div className="dos">
                    <h5>{t('firstaid.dosLabel')}</h5>
                    <ul>
                      {item.dos.map((d, di) => <li key={di}>{d}</li>)}
                    </ul>
                  </div>
                  <div className="donts">
                    <h5>{t('firstaid.dontsLabel')}</h5>
                    <ul>
                      {item.donts.map((d, di) => <li key={di}>{d}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <div
          className="reveal"
          style={{ marginTop: '2rem', textAlign: 'center', padding: '1.5rem', background: '#e8f5e9', borderRadius: 16 }}
        >
          <p style={{ fontWeight: 600, color: '#2e7d32', fontSize: '1rem' }}>
            {t('firstaid.callNote')}
          </p>
        </div>
      </div>
    </div>
  );
}

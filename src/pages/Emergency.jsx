import { useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LangContext';

export default function Emergency() {
  const ref = useScrollReveal();
  const { t } = useLang();

  useEffect(() => { document.title = 'Emergency – Grama Arogya'; }, []);

  const contacts = t('emergency.contacts');
  const tips = t('emergency.tips');

  return (
    <div className="page-enter" ref={ref}>
      <div
        style={{
          background: 'linear-gradient(135deg, #b71c1c 0%, #d32f2f 100%)',
          color: 'white',
          padding: '4rem 1.5rem 3rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 800, marginBottom: '.5rem' }}>
          {t('emergency.heroTitle')}
        </h1>
        <p style={{ opacity: .8, fontSize: '.95rem' }}>
          {t('emergency.heroSub')}
        </p>
      </div>

      <div className="emergency-page" ref={ref}>
        <h1 style={{ marginBottom: '0.3rem' }}>{t('emergency.tapTitle')}</h1>
        <p className="subtitle">{t('emergency.tapSub')}</p>

        <div className="emergency-grid">
          {contacts.map(e => (
            <a
              className={`emergency-card ${e.css}`}
              key={e.number}
              href={`tel:${e.number}`}
            >
              <div className="em-icon">{e.icon}</div>
              <div className="em-number">{e.number}</div>
              <div className="em-label">{e.label}</div>
            </a>
          ))}
        </div>

        <h2 className="section-title reveal" style={{ marginBottom: '1rem' }}>
          {t('emergency.mapTitle')}
        </h2>
        <div className="map-placeholder reveal">
          <div className="map-icon">📍</div>
          <p style={{ fontWeight: 600 }}>{t('emergency.mapName')}</p>
          <p style={{ fontSize: '.83rem' }}>{t('emergency.mapAddr')}</p>
          <a
            href="https://maps.google.com/?q=Badepuram+PHC"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            {t('emergency.mapBtn')}
          </a>
        </div>

        <div
          className="reveal"
          style={{
            marginTop: '2.5rem',
            background: '#fff3e0',
            borderRadius: 16,
            padding: '1.5rem',
            borderLeft: '4px solid #f57c00',
          }}
        >
          <h3 style={{ color: '#e65100', marginBottom: '.8rem' }}>{t('emergency.tipsTitle')}</h3>
          <ul style={{ paddingLeft: '1.2rem', fontSize: '.88rem', lineHeight: 2 }}>
            {tips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

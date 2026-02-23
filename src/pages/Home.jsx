import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LangContext';
import EmergencyModal from '../components/EmergencyModal';

const cardColors = [
  { color: '#e8f5e9', border: '#4caf50' },
  { color: '#e3f2fd', border: '#1976d2' },
  { color: '#fce4ec', border: '#e91e63' },
  { color: '#fff8e1', border: '#f9a825' },
  { color: '#ffebee', border: '#d32f2f' },
  { color: '#ede7f6', border: '#7b1fa2' },
];

const objIcons = ['📢', '🌉', '📋', '👩‍⚕️', '🏕️', '♻️'];

export default function Home() {
  const ref = useScrollReveal();
  const { t } = useLang();
  const [emOpen, setEmOpen] = useState(false);

  const stats = [
    { num: '4',   label: t('home.stat1Label'), icon: '🏥' },
    { num: '6+',  label: t('home.stat2Label'), icon: '👩‍⚕️' },
    { num: '6',   label: t('home.stat3Label'), icon: '📋' },
    { num: '24/7',label: t('home.stat4Label'), icon: '🚑' },
  ];

  const services  = t('home.services');
  const objectives= t('home.objectives');
  const howSteps  = t('home.howSteps');
  const whyFeats  = t('home.whyFeatures');
  const beforeItems = t('home.beforeItems');
  const afterItems  = t('home.afterItems');

  useEffect(() => {
    document.title = 'Grama Arogya Margadarshini – Badepuram';
  }, []);

  return (
    <div className="page-enter" ref={ref}>
      <EmergencyModal isOpen={emOpen} onClose={() => setEmOpen(false)} />

      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-dots" />
        <div className="hero-shimmer" />

        <div className="home-hero-inner">
          <div className="hero-badge">
            <span className="badge-dot" />
            {t('home.badge')}
          </div>

          <h1 className="hero-title">
            {t('home.heroTitle1')}
            <span className="hero-title-accent">{t('home.heroTitle2')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('home.heroSub').split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </p>

          <div className="hero-btns">
            <Link to="/hospitals" className="btn btn-primary btn-hero">{t('home.btnHospitals')}</Link>
            <button className="btn btn-emergency btn-hero" onClick={() => setEmOpen(true)}>{t('home.btnEmergency')}</button>
            <Link to="/schemes" className="btn btn-glass btn-hero">{t('home.btnSchemes')}</Link>
          </div>

          <div className="hero-trust">
            <span>{t('home.trust1')}</span>
            <span>{t('home.trust2')}</span>
            <span>{t('home.trust3')}</span>
            <span>{t('home.trust4')}</span>
          </div>
        </div>

        <div className="hero-stats-bar">
          {stats.map(s => (
            <div className="hstat" key={s.label}>
              <span className="hstat-icon">{s.icon}</span>
              <span className="hstat-num">{s.num}</span>
              <span className="hstat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fill="#f0fdf4" d="M0,60 C240,100 480,20 720,50 C960,80 1200,10 1440,50 L1440,90 L0,90 Z" opacity="0.6"/>
            <path fill="#ffffff" d="M0,72 C300,40 600,90 900,65 C1100,48 1300,80 1440,70 L1440,90 L0,90 Z"/>
          </svg>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ── */}
      <section className="section problem-section">
        <div className="problem-inner reveal">
          <div className="problem-text">
            <div className="section-label" style={{ color: '#b91c1c' }}>{t('home.problemLabel')}</div>
            <h2 className="section-title" style={{ color: '#1a1a2e' }}>{t('home.problemTitle')}</h2>
            <p style={{ color: '#374151', lineHeight: 1.9, fontSize: '.94rem', marginBottom: '1.4rem' }}
              dangerouslySetInnerHTML={{ __html: t('home.problemP1').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
            />
            <p style={{ color: '#374151', lineHeight: 1.9, fontSize: '.94rem' }}
              dangerouslySetInnerHTML={{ __html: t('home.problemP2').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
            />
          </div>
          <div className="problem-points">
            <div className="problem-col col-red">
              <div className="problem-col-title">{t('home.beforeTitle')}</div>
              <ul>{beforeItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
            <div className="problem-col col-green">
              <div className="problem-col-title">{t('home.afterTitle')}</div>
              <ul>{afterItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="section home-services">
        <div className="section-label reveal">{t('home.servicesLabel')}</div>
        <h2 className="section-title reveal">{t('home.servicesTitle')}</h2>
        <p className="section-subtitle reveal">{t('home.servicesSub')}</p>

        <div className="home-services-grid">
          {services.map((p, i) => (
            <Link
              to={p.to}
              className="service-card reveal"
              key={i}
              style={{ '--card-color': cardColors[i].color, '--card-border': cardColors[i].border, transitionDelay: `${i * 0.07}s` }}
            >
              <div className="service-icon-wrap" style={{ background: cardColors[i].color, border: `2px solid ${cardColors[i].border}20` }}>
                {p.icon}
              </div>
              <div className="service-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <div className="service-arrow" style={{ color: cardColors[i].border }}>→</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── OBJECTIVES ── */}
      <section className="objectives-section">
        <div className="objectives-inner">
          <div className="section-label reveal" style={{ color: 'rgba(255,255,255,0.65)', textAlign: 'center' }}>{t('home.objLabel')}</div>
          <h2 className="reveal" style={{ textAlign: 'center', color: 'white', marginBottom: '.4rem' }}>
            {t('home.objTitle')}
          </h2>
          <p className="reveal" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', fontSize: '.93rem' }}>
            {t('home.objSub')}
          </p>
          <div className="objectives-grid">
            {objectives.map((text, i) => (
              <div className="objective-card reveal" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="obj-icon">{objIcons[i]}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section">
        <div className="section-label reveal">{t('home.howLabel')}</div>
        <h2 className="section-title reveal">{t('home.howTitle')}</h2>
        <p className="section-subtitle reveal">{t('home.howSub')}</p>
        <div className="how-grid">
          {howSteps.map((h, i) => (
            <div className="how-card reveal" key={h.step} style={{ transitionDelay: `${(i + 1) * 0.08}s` }}>
              <div className="how-step">{h.step}</div>
              <div className="how-icon">{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US STRIP ── */}
      <section className="home-why reveal">
        <div className="why-inner">
          <div className="why-text">
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('home.whyLabel')}</div>
            <h2>{t('home.whyTitle')}</h2>
            <p>{t('home.whySub')}</p>
          </div>
          <div className="why-features">
            {whyFeats.map(f => (
              <div className="why-feature" key={f.t}>
                <span className="why-feat-icon">{f.icon}</span>
                <div>
                  <strong>{f.t}</strong>
                  <span>{f.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY BANNER ── */}
      <section className="section">
        <div className="emergency-banner reveal">
          <div className="em-banner-pulse" />
          <div>
            <h3>{t('home.emBannerTitle')}</h3>
            <p>{t('home.emBannerSub')}</p>
          </div>
          <a href="tel:108" className="btn btn-emergency">{t('home.emBannerBtn')}</a>
        </div>
      </section>

    </div>
  );
}

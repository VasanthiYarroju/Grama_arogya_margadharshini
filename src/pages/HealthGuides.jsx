import { useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LangContext';

const guides = [
  {
    emoji: '👩',
    name: 'Smt. Padmavathi Devi', nameTe: 'శ్రీమతి. పద్మావతి దేవి',
    role: 'ASHA Worker', roleTe: 'ASHA కార్యకర్త',
    area: 'Badepuram Ward 1 & 2', areaTe: 'బాడేపురం వార్డు 1 & 2',
    phone: '98480-11234',
    speciality: 'Maternal Health, Child Nutrition, Antenatal Care',
    specialityTe: 'మాతృ ఆరోగ్యం, శిశు పోషణ, ప్రసవపూర్వ సంరక్షణ',
    since: 'Active since 2018', sinceTe: '2018 నుండి చురుకుగా',
  },
  {
    emoji: '👩‍⚕️',
    name: 'Smt. Savitri Yellamma', nameTe: 'శ్రీమతి. సావిత్రి యెల్లమ్మ',
    role: 'ASHA Worker', roleTe: 'ASHA కార్యకర్త',
    area: 'Badepuram Ward 3 & 4', areaTe: 'బాడేపురం వార్డు 3 & 4',
    phone: '94933-22345',
    speciality: 'Immunisation, Family Planning, JSY Referrals',
    specialityTe: 'టీకాలు, కుటుంబ నియంత్రణ, JSY రెఫరల్లు',
    since: 'Active since 2016', sinceTe: '2016 నుండి చురుకుగా',
  },
  {
    emoji: '🧑‍⚕️',
    name: 'Sri Ramu Naidu', nameTe: 'శ్రీ రాము నాయుడు',
    role: 'ANM (Auxiliary Nurse Midwife)', roleTe: 'ANM (సహాయ నర్సు మంత్రసాని)',
    area: 'Badepuram & Surrounding Hamlets', areaTe: 'బాడేపురం & చుట్టుపక్కల కుగ్రామాలు',
    phone: '87902-33456',
    speciality: 'General Health, Elder Care, TB & Leprosy Awareness',
    specialityTe: 'సాధారణ ఆరోగ్యం, వృద్ధుల సంరక్షణ, TB & కుష్ఠువ్యాధి అవగాహన',
    since: 'Active since 2014', sinceTe: '2014 నుండి చురుకుగా',
  },
  {
    emoji: '👩',
    name: 'Smt. Laxmi Sarada', nameTe: 'శ్రీమతి. లక్ష్మి సారదా',
    role: 'ASHA Worker', roleTe: 'ASHA కార్యకర్త',
    area: 'Badepuram Main Village', areaTe: 'బాడేపురం ప్రధాన గ్రామం',
    phone: '76543-44567',
    speciality: 'Sanitation, Mental Health Awareness, NCD Screening',
    specialityTe: 'పారిశుధ్యం, మానసిక ఆరోగ్య అవగాహన, NCD స్క్రీనింగ్',
    since: 'Active since 2020', sinceTe: '2020 నుండి చురుకుగా',
  },
  {
    emoji: '👩‍⚕️',
    name: 'Smt. Nirmala Kumari', nameTe: 'శ్రీమతి. నిర్మల కుమారి',
    role: 'ASHA Worker', roleTe: 'ASHA కార్యకర్త',
    area: 'Potturu Colony, Badepuram', areaTe: 'పొట్టూరు కాలనీ, బాడేపురం',
    phone: '98765-55678',
    speciality: 'Adolescent Health, Anaemia Prevention, Nutrition Counselling',
    specialityTe: 'కౌమారదశ ఆరోగ్యం, రక్తహీనత నివారణ, పోషణ సలహా',
    since: 'Active since 2019', sinceTe: '2019 నుండి చురుకుగా',
  },
  {
    emoji: '👩',
    name: 'Smt. Bhavani Rao', nameTe: 'శ్రీమతి. భవాని రావు',
    role: 'ASHA Worker', roleTe: 'ASHA కార్యకర్త',
    area: 'Fishermen Colony & River Bank Area', areaTe: 'మత్స్యకారుల కాలనీ & నది తీర ప్రాంతం',
    phone: '90000-66789',
    speciality: 'Water-borne Disease Prevention, Diarrhoea & Cholera Awareness',
    specialityTe: 'నీటి ద్వారా వచ్చే వ్యాధుల నివారణ, అతిసారం & కలరా అవగాహన',
    since: 'Active since 2017', sinceTe: '2017 నుండి చురుకుగా',
  },
];

export default function HealthGuides() {
  const ref = useScrollReveal();
  const { t, tr } = useLang();

  useEffect(() => { document.title = 'Health Guides – Grama Arogya'; }, []);

  const helpItems = t('guides.helpItems');

  return (
    <div className="page-enter" ref={ref}>
      <div className="page-hero-mini">
        <h1>{t('guides.heroTitle')}</h1>
        <p>{t('guides.heroSub')}</p>
      </div>

      <div className="section">
        <div className="reveal" style={{
          background: 'linear-gradient(135deg, #e8f5e9, #f0fdf4)',
          borderRadius: '16px', padding: '1.8rem 2rem',
          border: '1.5px solid #a5d6a7', marginBottom: '2.5rem'
        }}>
          <h3 style={{ color: '#2e7d32', marginBottom: '.6rem', fontSize: '1.05rem' }}>
            {t('guides.ashaBoxTitle')}
          </h3>
          <p style={{ fontSize: '.9rem', color: '#374151', lineHeight: 1.85 }}>
            {t('guides.ashaBoxDesc')}
          </p>
        </div>

        <h2 className="section-title reveal">{t('guides.gridTitle')}</h2>
        <p className="section-subtitle reveal">{t('guides.gridSub')}</p>

        <div className="cards-grid">
          {guides.map((g, i) => (
            <div
              className="guide-card reveal"
              key={g.name}
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              <div className="guide-avatar">{g.emoji}</div>
              <h3>{g.name}</h3>
              <div style={{ fontSize: '.74rem', fontWeight: 700, color: '#1976d2', background: '#e3f2fd', padding: '2px 10px', borderRadius: '20px', display: 'inline-block', marginBottom: '.4rem' }}>
                {tr(g.role, g.roleTe)}
              </div>
              <div className="area">📍 {tr(g.area, g.areaTe)}</div>
              <div className="verified-badge">{t('guides.verified')}</div>
              <div style={{ fontSize: '.8rem', color: '#546e7a', marginBottom: '.5rem' }}>⚕️ {tr(g.speciality, g.specialityTe)}</div>
              <div style={{ fontSize: '.75rem', color: '#78909c', marginBottom: '1rem' }}>📅 {tr(g.since, g.sinceTe)}</div>
              <a href={`tel:${g.phone}`} className="btn btn-primary btn-sm">
                {t('guides.callBtn')}: {g.phone}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <h2 className="section-title reveal">{t('guides.howTitle')}</h2>
        <div className="cards-grid reveal">
          {helpItems.map(item => (
            <div className="card" key={item.title}>
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

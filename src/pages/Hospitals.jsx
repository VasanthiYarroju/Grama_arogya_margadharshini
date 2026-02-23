import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LangContext';

const hospitals = [
  {
    id: 1,
    name: 'Badepuram Primary Health Centre (PHC)',
    nameTe: 'బాడేపురం ప్రాథమిక ఆరోగ్య కేంద్రం (PHC)',
    type: 'PHC',
    distance: '0.8 km',
    timings: 'Mon–Sat: 8:00 AM – 4:00 PM',
    timingsTe: 'సోమ–శని: ఉదయం 8:00 – సాయంత్రం 4:00',
    phone: '08815-223344',
    speciality: 'General Medicine, Maternal Health, Child Immunisation, TB Screening',
    specialityTe: 'సాధారణ వైద్యం, మాతృ ఆరోగ్యం, శిశు టీకాలు, TB స్క్రీనింగ్',
    doctorSchedule: 'Dr. K. Narayana (MBBS) — Mon, Wed, Fri | Dr. S. Laxmi (MBBS) — Tue, Thu, Sat',
    doctorScheduleTe: 'డా. K. నారాయణ (MBBS) — సోమ, బుధ, శుక్ర | డా. S. లక్ష్మి (MBBS) — మంగళ, గురు, శని',
    beds: '6 Beds',
    bedsTe: '6 మంచాలు',
    directions: 'https://maps.google.com/?q=Badepuram+PHC',
  },
  {
    id: 2,
    name: 'Area Hospital Palasa',
    nameTe: 'ఏరియా హాస్పిటల్ పలాస',
    type: 'Government',
    distance: '14 km',
    timings: '24 Hours / 7 Days',
    timingsTe: '24 గంటలు / 7 రోజులు',
    phone: '08815-234567',
    speciality: 'Emergency Surgery, Orthopaedics, Paediatrics, Gynaecology, ICU',
    specialityTe: 'అత్యవసర శస్త్రచికిత్స, ఎముకల వైద్యం, శిశు వైద్యం, స్త్రీ రోగ వైద్యం, ICU',
    doctorSchedule: 'Multiple specialists on rotation — Emergency: 24/7 | OPD: 9 AM – 1 PM daily',
    doctorScheduleTe: 'అనేక మంది నిపుణులు — అత్యవసరం: 24/7 | OPD: ప్రతిరోజూ ఉదయం 9 – మధ్యాహ్నం 1',
    beds: '150 Beds',
    bedsTe: '150 మంచాలు',
    directions: 'https://maps.google.com/?q=Palasa+Area+Hospital+Srikakulam',
  },
  {
    id: 3,
    name: 'Sri Venkateswara Multi-Speciality Hospital',
    nameTe: 'శ్రీ వెంకటేశ్వర మల్టీ-స్పెషాలిటీ హాస్పిటల్',
    type: 'Private',
    distance: '18 km',
    timings: '8:00 AM – 10:00 PM (Emergency: 24/7)',
    timingsTe: 'ఉదయం 8:00 – రాత్రి 10:00 (అత్యవసరం: 24/7)',
    phone: '08815-345678',
    speciality: 'Cardiology, Gynaecology, Diabetes Care, Neurology, Dialysis',
    specialityTe: 'కార్డియాలజీ, గైనకాలజీ, మధుమేహ సంరక్షణ, న్యూరాలజీ, డయాలసిస్',
    doctorSchedule: 'Dr. P. Raju (Cardiologist) — Mon, Thu | Dr. V. Kumari (Gynaec) — Tue, Fri, Sat',
    doctorScheduleTe: 'డా. P. రాజు (కార్డియాలజిస్ట్) — సోమ, గురు | డా. V. కుమారి (గైనక్) — మంగళ, శుక్ర, శని',
    beds: '80 Beds',
    bedsTe: '80 మంచాలు',
    directions: 'https://maps.google.com/?q=Sri+Venkateswara+Hospital+Palasa',
  },
  {
    id: 4,
    name: 'Community Health Centre Narasannapeta',
    nameTe: 'కమ్యూనిటీ హెల్త్ సెంటర్ నరసన్నపేట',
    type: 'Government',
    distance: '22 km',
    timings: '24 Hours (Emergency), OPD: 9 AM – 5 PM',
    timingsTe: '24 గంటలు (అత్యవసరం), OPD: ఉదయం 9 – సాయంత్రం 5',
    phone: '08815-456789',
    speciality: 'General Medicine, Emergency Care, Eye Diseases, Skin & Dermatology',
    specialityTe: 'సాధారణ వైద్యం, అత్యవసర సంరక్షణ, కంటి వ్యాధులు, చర్మ వ్యాధులు',
    doctorSchedule: 'Dr. A. Subbarao (General Phys.) — Daily | Eye Specialist: Every Wednesday',
    doctorScheduleTe: 'డా. A. సుబ్బారావు (జనరల్ ఫిజీషియన్) — రోజూ | కంటి నిపుణుడు: ప్రతి బుధవారం',
    beds: '30 Beds',
    bedsTe: '30 మంచాలు',
    directions: 'https://maps.google.com/?q=CHC+Narasannapeta',
  },
];

const badgeMap = { PHC: 'badge-phc', Government: 'badge-govt', Private: 'badge-private' };

export default function Hospitals() {
  const [filter, setFilter] = useState('All');
  const ref = useScrollReveal();
  const { t, tr } = useLang();

  useEffect(() => { document.title = 'Hospitals – Grama Arogya'; }, []);

  const filters = t('hospitals.filters');
  const filterKeys = ['All', 'Government', 'Private', 'PHC'];
  const filtered = filter === 'All' ? hospitals : hospitals.filter(h => h.type === filter);

  return (
    <div className="page-enter" ref={ref}>
      <div className="page-hero-mini">
        <h1>{t('hospitals.heroTitle')}</h1>
        <p>{t('hospitals.heroSub')}</p>
      </div>

      <div className="section">
        <div className="filter-bar reveal">
          {filterKeys.map((fk, i) => (
            <button
              key={fk}
              className={`filter-btn${filter === fk ? ' active' : ''}`}
              onClick={() => setFilter(fk)}
            >
              {filters[i]}
            </button>
          ))}
        </div>

        <div className="cards-grid">
          {filtered.map((h, i) => (
            <div
              className="hospital-card reveal"
              key={h.id}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h3>{tr(h.name, h.nameTe)}</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '.8rem' }}>
                <span className={`badge ${badgeMap[h.type]}`}>{h.type}</span>
                <span className="badge" style={{ background: '#e8eaf6', color: '#3949ab' }}>🛏️ {tr(h.beds, h.bedsTe)}</span>
              </div>
              <div className="hospital-meta">
                <span>📍 {h.distance} {t('hospitals.metaDistance')}</span>
                <span>🕐 {tr(h.timings, h.timingsTe)}</span>
                <span>📞 {h.phone}</span>
                <span>⚕️ {tr(h.speciality, h.specialityTe)}</span>
              </div>
              <div style={{ background: '#f0fdf4', borderRadius: '10px', padding: '.75rem 1rem', marginBottom: '1rem', borderLeft: '3px solid #4caf50' }}>
                <p style={{ fontSize: '.75rem', fontWeight: 700, color: '#2e7d32', marginBottom: '.3rem', textTransform: 'uppercase', letterSpacing: '.4px' }}>{t('hospitals.doctorScheduleLabel')}</p>
                <p style={{ fontSize: '.82rem', color: '#374151', lineHeight: 1.7 }}>{tr(h.doctorSchedule, h.doctorScheduleTe)}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <a href={`tel:${h.phone}`} className="btn btn-primary btn-sm">{t('hospitals.callBtn')}</a>
                <a href={h.directions} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                  {t('hospitals.dirBtn')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

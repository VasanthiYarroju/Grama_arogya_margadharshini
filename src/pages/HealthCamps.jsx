import { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LangContext';

const upcomingCamps = [
  {
    date: 'March 5, 2026',    dateTe: 'మార్చి 5, 2026',
    topic: 'Free Eye Check-up & Cataract Screening', topicTe: 'ఉచిత కంటి పరీక్ష & కంటిపొర స్క్రీనింగ్',
    doctor: 'Dr. Ramaiah Patro (Ophthalmologist)', doctorTe: 'డా. రామయ్య పాత్రో (నేత్ర వైద్యుడు)',
    venue: 'Badepuram Panchayat Hall', venueTe: 'బాడేపురం పంచాయత్ హాల్',
    time: '9:00 AM – 2:00 PM', timeTe: 'ఉదయం 9:00 – మధ్యాహ్నం 2:00',
  },
  {
    date: 'March 18, 2026',   dateTe: 'మార్చి 18, 2026',
    topic: 'Maternal & Child Health Camp', topicTe: 'మాతా & శిశు ఆరోగ్య శిబిరం',
    doctor: 'Dr. Sujatha Reddy (Gynaecologist)', doctorTe: 'డా. సుజాత రెడ్డి (స్త్రీరోగ నిపుణురాలు)',
    venue: 'PHC Badepuram', venueTe: 'PHC బాడేపురం',
    time: '10:00 AM – 4:00 PM', timeTe: 'ఉదయం 10:00 – సాయంత్రం 4:00',
  },
  {
    date: 'April 2, 2026',    dateTe: 'ఏప్రిల్ 2, 2026',
    topic: 'Diabetes & Blood Pressure Screening', topicTe: 'మధుమేహం & రక్తపోటు స్క్రీనింగ్',
    doctor: 'Dr. Nageswara Rao (General Physician)', doctorTe: 'డా. నాగేశ్వర రావు (జనరల్ ఫిజీషియన్)',
    venue: 'Zilla Parishad High School', venueTe: 'జిల్లా పరిషత్ హైస్కూల్',
    time: '8:00 AM – 1:00 PM', timeTe: 'ఉదయం 8:00 – మధ్యాహ్నం 1:00',
  },
  {
    date: 'April 20, 2026',   dateTe: 'ఏప్రిల్ 20, 2026',
    topic: 'Dental Health & Oral Care Camp', topicTe: 'దంత ఆరోగ్యం & మౌఖిక సంరక్షణ శిబిరం',
    doctor: 'Dr. Kavya Lakshmi (BDS)', doctorTe: 'డా. కావ్య లక్ష్మి (BDS)',
    venue: 'Primary School Ground', venueTe: 'ప్రాథమిక పాఠశాల మైదానం',
    time: '9:30 AM – 3:00 PM', timeTe: 'ఉదయం 9:30 – మధ్యాహ్నం 3:00',
  },
];

const pastCamps = [
  {
    date: 'Feb 10, 2026', dateTe: 'ఫిబ్రవరి 10, 2026',
    topic: 'Skin & Dermatology Camp', topicTe: 'చర్మ వ్యాధుల శిబిరం',
    doctor: 'Dr. Anand Kumar', doctorTe: 'డా. ఆనంద్ కుమార్',
    venue: 'Panchayat Office', venueTe: 'పంచాయత్ కార్యాలయం',
    attendance: '118 patients served', attendanceTe: '118 రోగులకు సేవచేయబడింది',
  },
  {
    date: 'Jan 22, 2026', dateTe: 'జనవరి 22, 2026',
    topic: 'Blood Donation Drive', topicTe: 'రక్తదాన కార్యక్రమం',
    doctor: 'Dr. Venkatesan & Team', doctorTe: 'డా. వెంకటేసన్ & బృందం',
    venue: 'PHC Badepuram', venueTe: 'PHC బాడేపురం',
    attendance: '45 units collected', attendanceTe: '45 యూనిట్లు సేకరించబడ్డాయి',
  },
];

export default function HealthCamps() {
  const ref = useScrollReveal();
  const [registered, setRegistered] = useState({});
  const { t, tr } = useLang();

  useEffect(() => { document.title = 'Health Camps – Grama Arogya'; }, []);

  const toggleRegister = (idx) =>
    setRegistered(r => ({ ...r, [idx]: !r[idx] }));

  return (
    <div className="page-enter" ref={ref}>
      <div className="page-hero-mini">
        <h1>{t('camps.heroTitle')}</h1>
        <p>{t('camps.heroSub')}</p>
      </div>

      <div className="section">
        <h2 className="section-title reveal">{t('camps.upcomingTitle')}</h2>
        <p className="section-subtitle reveal">{t('camps.upcomingSub')}</p>

        <div className="timeline reveal">
          {upcomingCamps.map((c, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="camp-card">
                <div className="camp-date">📅 {tr(c.date, c.dateTe)}</div>
                <h3>{tr(c.topic, c.topicTe)}</h3>
                <p className="camp-meta">👨‍⚕️ {tr(c.doctor, c.doctorTe)}</p>
                <p className="camp-meta">📍 {tr(c.venue, c.venueTe)}</p>
                <p className="camp-meta" style={{ marginBottom: '1rem' }}>🕐 {tr(c.time, c.timeTe)}</p>
                <button
                  className={`btn btn-sm ${registered[i] ? 'btn-outline' : 'btn-primary'}`}
                  onClick={() => toggleRegister(i)}
                >
                  {registered[i] ? t('camps.registeredBtn') : t('camps.registerBtn')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title reveal" style={{ marginTop: '3rem' }}>{t('camps.pastTitle')}</h2>
        <p className="section-subtitle reveal">{t('camps.pastSub')}</p>

        <div className="cards-grid">
          {pastCamps.map((c, i) => (
            <div className="camp-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="camp-date" style={{ background: '#78909c' }}>📅 {tr(c.date, c.dateTe)}</div>
              <h3>{tr(c.topic, c.topicTe)}</h3>
              <p className="camp-meta">👨‍⚕️ {tr(c.doctor, c.doctorTe)}</p>
              <p className="camp-meta">📍 {tr(c.venue, c.venueTe)}</p>
              <p style={{ marginTop: '.5rem', fontSize: '.82rem', color: '#2e7d32', fontWeight: 600 }}>
                ✅ {tr(c.attendance, c.attendanceTe)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLang } from '../contexts/LangContext';

const schemes = [
  {
    icon: '🏥',
    name: 'Ayushman Bharat – PM-JAY',
    nameTe: 'ఆయుష్మాన్ భారత్ – PM-JAY',
    benefit: 'Health cover up to ₹5 lakh per family per year for secondary & tertiary hospitalisation.',
    benefitTe: 'ద్వితీయ & తృతీయ ఆసుపత్రి సేవలకు కుటుంబానికి సంవత్సరానికి ₹5 లక్షల వరకు ఆరోగ్య కవరేజ్.',
    eligibility: 'Families covered under SECC database; BPL card holders.',
    eligibilityTe: 'SECC డేటాబేస్ కింద చేర్చిన కుటుంబాలు; BPL కార్డ్ హోల్డర్లు.',
    apply: 'Visit nearest empanelled hospital or Common Service Centre (CSC) with Aadhaar & ration card.',
    applyTe: 'ఆధార్ & రేషన్ కార్డ్‌తో సమీప ఎంపానెల్డ్ ఆసుపత్రి లేదా కామన్ సర్వీస్ సెంటర్ (CSC) సందర్శించండి.',
  },
  {
    icon: '🤱',
    name: 'Janani Suraksha Yojana (JSY)',
    nameTe: 'జననీ సురక్షా యోజన (JSY)',
    benefit: 'Cash incentive of ₹1,400 for institutional deliveries in rural areas.',
    benefitTe: 'గ్రామీణ ప్రాంతాల్లో సంస్థాగత ప్రసవాలకు ₹1,400 నగదు ప్రోత్సాహకం.',
    eligibility: 'All pregnant women from BPL families or SC/ST category.',
    eligibilityTe: 'BPL కుటుంబాల నుండి లేదా SC/ST వర్గం నుండి అన్ని గర్భిణి స్త్రీలు.',
    apply: 'Register at your nearest PHC or contact your ASHA worker.',
    applyTe: 'సమీప PHC లో నమోదు చేయండి లేదా మీ ASHA కార్యకర్తను సంప్రదించండి.',
  },
  {
    icon: '💊',
    name: 'Pradhan Mantri Aushadhi Yojana',
    nameTe: 'ప్రధాన మంత్రి ఔషధి యోజన',
    benefit: 'Quality generic medicines at up to 90% lower prices at Jan Aushadhi Kendras.',
    benefitTe: 'జన్ ఔషధి కేంద్రాలలో 90% తక్కువ ధరలకు నాణ్యమైన జెనరిక్ మందులు.',
    eligibility: 'Open to all citizens. No eligibility restriction.',
    eligibilityTe: 'అందరు పౌరులకు తెరిచి ఉంది. అర్హత పరిమితి లేదు.',
    apply: 'Visit any Pradhan Mantri Bharatiya Janaushadhi Kendra near you.',
    applyTe: 'మీకు సమీపంలో ఉన్న ప్రధాన మంత్రి భారతీయ జనఔషధి కేంద్రాన్ని సందర్శించండి.',
  },
  {
    icon: '👶',
    name: 'Rashtriya Bal Swasthya Karyakram (RBSK)',
    nameTe: 'రాష్ట్రీయ బాల స్వాస్థ్య కార్యక్రమం (RBSK)',
    benefit: 'Free health screening & treatment for children (0–18 years) for 4D conditions.',
    benefitTe: '4D పరిస్థితుల కోసం పిల్లలకు (0–18 సంవత్సరాలు) ఉచిత ఆరోగ్య స్క్రీనింగ్ & చికిత్స.',
    eligibility: 'All children from birth to 18 years in government schools & anganwadis.',
    eligibilityTe: 'ప్రభుత్వ పాఠశాలలు & అంగన్‌వాడీలలో జన్మించిన నుండి 18 సంవత్సరాల వరకు అన్ని పిల్లలు.',
    apply: 'Contact your ANM or ASHA worker; school health teams conduct regular camps.',
    applyTe: 'మీ ANM లేదా ASHA కార్యకర్తను సంప్రదించండి; పాఠశాల ఆరోగ్య బృందాలు క్రమం తప్పకుండా శిబిరాలు నిర్వహిస్తాయి.',
  },
  {
    icon: '🧓',
    name: 'National Programme for Health Care of Elderly (NPHCE)',
    nameTe: 'వృద్ధుల ఆరోగ్య సంరక్షణ జాతీయ కార్యక్రమం (NPHCE)',
    benefit: 'Free healthcare, medicines, and rehabilitation for senior citizens at PHCs & CHCs.',
    benefitTe: 'PHCలు & CHCలలో వయోధికులకు ఉచిత ఆరోగ్య సంరక్షణ, మందులు మరియు పునరావాసం.',
    eligibility: 'Citizens aged 60 years and above.',
    eligibilityTe: '60 సంవత్సరాలు మరియు అంతకంటే ఎక్కువ వయస్సు గల పౌరులు.',
    apply: 'Visit your PHC or sub-district hospital with age proof (Aadhaar/voter ID).',
    applyTe: 'వయస్సు నిరూపణతో (ఆధార్/ఓటర్ ID) మీ PHC లేదా సబ్-డిస్ట్రిక్ట్ హాస్పిటల్‌కు వెళ్ళండి.',
  },
  {
    icon: '🩺',
    name: 'Dr. YSR Aarogyasri Health Scheme (AP)',
    nameTe: 'డా. YSR ఆరోగ్యశ్రీ ఆరోగ్య పథకం (AP)',
    benefit: 'Cashless treatment up to ₹5 lakh for 1,648+ medical procedures.',
    benefitTe: '1,648+ వైద్య విధానాలకు ₹5 లక్షల వరకు నగదు రహిత చికిత్స.',
    eligibility: 'Families with annual income below ₹5 lakh with White Ration Card.',
    eligibilityTe: 'వైట్ రేషన్ కార్డ్‌తో సంవత్సర ఆదాయం ₹5 లక్షల కంటే తక్కువ ఉన్న కుటుంబాలు.',
    apply: 'Apply at nearest Aarogyasri-empanelled hospital with ration card & Aadhaar.',
    applyTe: 'రేషన్ కార్డ్ & ఆధార్‌తో సమీప ఆరోగ్యశ్రీ-ఎంపానెల్డ్ హాస్పిటల్‌లో దరఖాస్తు చేయండి.',
  },
];

export default function Schemes() {
  const ref = useScrollReveal();
  const { t, tr } = useLang();
  useEffect(() => { document.title = 'Health Schemes – Grama Arogya'; }, []);

  return (
    <div className="page-enter" ref={ref}>
      <div className="page-hero-mini">
        <h1>{t('schemes.heroTitle')}</h1>
        <p>{t('schemes.heroSub')}</p>
      </div>

      <div className="section">
        <h2 className="section-title reveal">{t('schemes.gridTitle')}</h2>
        <p className="section-subtitle reveal">{t('schemes.gridSub')}</p>

        <div className="cards-grid">
          {schemes.map((s, i) => (
            <div
              className="scheme-card reveal"
              key={s.name}
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '.7rem' }}>{s.icon}</div>
              <h3>{tr(s.name, s.nameTe)}</h3>

              <div className="scheme-tag">{t('schemes.benefit')}</div>
              <div className="scheme-val">{tr(s.benefit, s.benefitTe)}</div>

              <div className="scheme-tag">{t('schemes.eligibility')}</div>
              <div className="scheme-val">{tr(s.eligibility, s.eligibilityTe)}</div>

              <div className="scheme-tag">{t('schemes.howToApply')}</div>
              <div className="scheme-val">{tr(s.apply, s.applyTe)}</div>

              <button className="btn btn-outline btn-sm">{t('schemes.knowMoreBtn')}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

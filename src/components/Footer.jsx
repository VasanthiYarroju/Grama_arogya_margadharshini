import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LangContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>🌿 {t('nav.logo')}</h4>
          <p>{t('footer.about')}</p>
          <p style={{ marginTop: '1rem', fontSize: '0.82rem', opacity: 0.85 }}>
            📍 {t('footer.village')}: <strong>Badepuram</strong>, Guntur Dist., AP – 522001<br />
            🏫 {t('footer.institution')}: VVIT, Batch No: <strong>54</strong><br />
            📞 {t('footer.emergency')}: <strong>108</strong>
          </p>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '.3rem', fontWeight: 600, letterSpacing: '.5px', textTransform: 'uppercase' }}>{t('footer.team')}</p>
            <p style={{ fontSize: '0.78rem', opacity: 0.75, lineHeight: 1.9 }}>
              Yarroju Vasanthi – 22BQ1A05O5<br />
              Reshma Tanmai – 22BQ1A05O6<br />
              Shaik Tanveer Bhanu – 22BQ1A05O7<br />
              Bethamcharla Ashok – 22BQ1A05O8<br />
              Parimi Pujitha – 23BQ5A0519
            </p>
          </div>
        </div>
        <div>
          <h4>{t('footer.quickLinks')}</h4>
          <ul>
            <li><Link to="/">🏠 {t('nav.home')}</Link></li>
            <li><Link to="/hospitals">🏥 {t('nav.hospitals')}</Link></li>
            <li><Link to="/health-camps">🏕️ {t('nav.camps')}</Link></li>
            <li><Link to="/health-guides">👩‍⚕️ {t('nav.guides')}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t('footer.support')}</h4>
          <ul>
            <li><Link to="/schemes">📋 {t('nav.schemes')}</Link></li>
            <li><Link to="/emergency">🚨 {t('nav.emergency')}</Link></li>
            <li><Link to="/first-aid">🩹 {t('nav.firstAid')}</Link></li>
          </ul>
          <div style={{ marginTop: '1.2rem', background: 'rgba(255,255,255,0.12)', borderRadius: '10px', padding: '0.8rem' }}>
            <p style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '.5rem' }}>🆘 {t('footer.emergencyNums')}</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.85, lineHeight: 2 }}>
              🚑 {t('footer.ambulance')}: <strong>108</strong><br />
              🚔 {t('footer.police')}: <strong>100</strong><br />
              🔥 {t('footer.fire')}: <strong>101</strong><br />
              🧠 {t('footer.mental')}: <strong>1800-599-0019</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">{t('footer.copy')}</div>
    </footer>
  );
}

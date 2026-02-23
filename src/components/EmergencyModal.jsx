import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../contexts/LangContext';

export default function EmergencyModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { lang } = useLang();
  const firstBtnRef = useRef(null);

  /* Lock scroll & focus first button when modal opens */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstBtnRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!isOpen) return null;

  const te = lang === 'te';

  const cards = [
    {
      id: 'ambulance',
      icon: '🚑',
      title: te ? 'అంబులెన్స్ కాల్ చేయండి (108)' : 'Call Ambulance (108)',
      desc: te ? 'తక్షణ అత్యవసర వైద్య స్పందన — ఉచితం.' : 'Immediate emergency medical response — completely free.',
      action: () => { window.location.href = 'tel:108'; },
      href: 'tel:108',
      variant: 'em-card-red',
      ariaLabel: 'Call ambulance 108',
    },
    {
      id: 'asha',
      icon: '👩‍⚕️',
      title: te ? 'గ్రామ ఆరోగ్య మార్గదర్శిని కాల్ చేయండి' : 'Call Village Health Guide',
      desc: te ? 'మార్గదర్శకత్వం కోసం స్థానిక ASHA కార్యకర్తను నేరుగా సంప్రదించండి.' : 'Directly contact local ASHA worker for guidance.',
      href: 'tel:+919848011234',
      variant: 'em-card-green',
      ariaLabel: 'Call ASHA worker',
    },
    {
      id: 'hospital',
      icon: '🏥',
      title: te ? 'సమీప ఆసుపత్రిని వెతకండి' : 'Locate Nearest Hospital',
      desc: te ? 'సమీప ఆసుపత్రులు మరియు దిశలు చూడండి.' : 'View nearby hospitals with timings and directions.',
      action: () => { onClose(); navigate('/hospitals'); },
      variant: 'em-card-green',
      ariaLabel: 'Find nearest hospital',
    },
  ];

  return (
    /* Overlay */
    <div
      className="em-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Emergency assistance"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Container */}
      <div className="em-modal-box">

        {/* Close button */}
        <button className="em-modal-close" onClick={onClose} aria-label="Close">✕</button>

        {/* Top alert */}
        <div className="em-modal-header">
          <span className="em-alert-badge">⚠️ {te ? 'అత్యవసర స్థితి' : 'EMERGENCY'}</span>
          <h2 className="em-modal-title">
            {te ? 'అత్యవసర సహాయం' : 'Emergency Assistance'}
          </h2>
          <p className="em-modal-sub">
            {te ? 'సహాయం పొందడానికి వేగవంతమైన మార్గాన్ని ఎంచుకోండి.' : 'Choose the fastest way to get help.'}
          </p>
        </div>

        {/* Action cards */}
        <div className="em-cards">
          {cards.map((card, i) => {
            const inner = (
              <>
                <span className={`em-card-icon-wrap ${card.variant}`}>{card.icon}</span>
                <div className="em-card-text">
                  <span className="em-card-title">{card.title}</span>
                  <span className="em-card-desc">{card.desc}</span>
                </div>
                <span className="em-card-arrow">›</span>
              </>
            );

            /* Phone links use <a>, navigation uses <button> */
            if (card.href) {
              return (
                <a
                  key={card.id}
                  href={card.href}
                  className={`em-card ${card.variant}`}
                  aria-label={card.ariaLabel}
                  ref={i === 0 ? firstBtnRef : null}
                >
                  {inner}
                </a>
              );
            }
            return (
              <button
                key={card.id}
                className={`em-card ${card.variant}`}
                onClick={card.action}
                aria-label={card.ariaLabel}
                ref={i === 0 ? firstBtnRef : null}
              >
                {inner}
              </button>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="em-modal-note">
          {te
            ? '⚠️ ఏ అత్యవసర స్థితిలోనైనా, ముందు 108 కి కాల్ చేయండి.'
            : '⚠️ In any life-threatening emergency, always call 108 first.'}
        </p>
      </div>
    </div>
  );
}

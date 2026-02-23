import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLang } from '../contexts/LangContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, toggleLang } = useLang();

  const links = [
    { to: '/', key: 'nav.home' },
    { to: '/hospitals', key: 'nav.hospitals' },
    { to: '/health-camps', key: 'nav.camps' },
    { to: '/health-guides', key: 'nav.guides' },
    { to: '/schemes', key: 'nav.schemes' },
    { to: '/emergency', key: 'nav.emergency' },
    { to: '/first-aid', key: 'nav.firstAid' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="logo-icon">🌿</span>
          <span>{t('nav.logo')}</span>
        </NavLink>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {t(l.key)}
              </NavLink>
            </li>
          ))}
          <li>
            <button className="lang-toggle-btn" onClick={toggleLang} title="Switch Language">
              {t('nav.langBtn')}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}


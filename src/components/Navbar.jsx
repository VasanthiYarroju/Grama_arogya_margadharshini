import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useLang } from '../contexts/LangContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const { lang, setLang, t } = useLang();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenGroup(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const close = () => { setOpen(false); setOpenGroup(null); };
  const toggleGroup = (g) => setOpenGroup(prev => prev === g ? null : g);

  const serviceLinks = [
    { to: '/hospitals',    key: 'nav.hospitals', icon: '🏥' },
    { to: '/health-camps', key: 'nav.camps',      icon: '⛺' },
  ];
  const infoLinks = [
    { to: '/health-guides', key: 'nav.guides',  icon: '👩‍⚕️' },
    { to: '/schemes',       key: 'nav.schemes', icon: '📋' },
  ];

  const DropGroup = ({ groupKey, label, links }) => (
    <li
      className={`nav-group${openGroup === groupKey ? ' is-open' : ''}`}
      onMouseEnter={() => window.innerWidth > 900 && setOpenGroup(groupKey)}
      onMouseLeave={() => window.innerWidth > 900 && setOpenGroup(null)}
    >
      <button
        className="nav-group-btn"
        onClick={() => toggleGroup(groupKey)}
        aria-expanded={openGroup === groupKey}
      >
        {label} <span className="nav-chevron">▾</span>
      </button>
      <ul className="nav-dropdown">
        {links.map(l => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={close}
            >
              <span className="dd-icon">{l.icon}</span> {t(l.key)}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} ref={navRef}>
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo" onClick={close}>
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
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
              {t('nav.home')}
            </NavLink>
          </li>

          <DropGroup groupKey="services" label={t('nav.services')} links={serviceLinks} />
          <DropGroup groupKey="info"     label={t('nav.info')}     links={infoLinks} />

          <li>
            <NavLink to="/emergency" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
              {t('nav.emergency')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/first-aid" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
              {t('nav.firstAid')}
            </NavLink>
          </li>

          <li>
            <select
              className="lang-select"
              value={lang}
              onChange={e => setLang(e.target.value)}
              aria-label="Select language"
            >
              <option value="en">🌐 English</option>
              <option value="te">🌐 తెలుగు</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}


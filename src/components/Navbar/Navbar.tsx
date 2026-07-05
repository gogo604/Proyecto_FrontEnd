import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatedLogo } from '../AnimatedLogo/AnimatedLogo';
import { SettingsPanel } from '../SettingsPanel/SettingsPanel';
import { LoginModal } from '../LoginModal/LoginModal';
import './Navbar.css';

const LINKS = [
  { to: '/', key: 'home' },
  { to: '/dashboard', key: 'dashboard' },
  { to: '/comunidad', key: 'community' },
  { to: '/biblioteca', key: 'library' },
  { to: '/eventos', key: 'events' },
  { to: '/galeria', key: 'gallery' },
  { to: '/mapa', key: 'map' },
  { to: '/api', key: 'api' },
  { to: '/nosotros', key: 'about' },
  { to: '/contacto', key: 'contact' }
];

export function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <header className="navbar glass">
      <div className="navbar-inner page-container">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <AnimatedLogo size={38} />
        </NavLink>

        <nav className="navbar-links navbar-links--desktop" aria-label="Navegación principal">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => 'navbar-link' + (isActive ? ' is-active' : '')}
            >
              {t(`nav.${l.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="icon-btn"
            aria-label="Configuración"
            onClick={() => setSettingsOpen((s) => !s)}
          >
            ⚙️
          </button>
          <button className="btn btn-primary navbar-cta" onClick={() => setLoginOpen(true)}>
            Iniciar sesión
          </button>
          <button
            className="icon-btn navbar-burger"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </div>

      {settingsOpen && <SettingsPanel onClose={() => setSettingsOpen(false)} />}
      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}

      <div className={'navbar-mobile' + (open ? ' is-open' : '')}>
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => 'navbar-mobile-link' + (isActive ? ' is-active' : '')}
            onClick={() => setOpen(false)}
          >
            {t(`nav.${l.key}`)}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

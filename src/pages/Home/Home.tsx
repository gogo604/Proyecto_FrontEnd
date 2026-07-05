import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeroBanner } from '../../components/HeroBanner/HeroBanner';
import { useReveal } from '../../hooks/useReveal';
import './Home.css';

const FEATURE_KEYS = [
  { icon: '⚡', key: 'f1', to: '/dashboard' },
  { icon: '🧠', key: 'f2', to: '/biblioteca' },
  { icon: '✏️', key: 'f3', to: '/comunidad' },
  { icon: '👥', key: 'f4', to: '/eventos' },
  { icon: '🌐', key: 'f5', to: '/api' }
];

export function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const featuresRef = useReveal<HTMLDivElement>();

  return (
    <>
      <HeroBanner />

      <section className="section">
        <div className="page-container">
          <h2 className="section-title reveal-io" ref={featuresRef}>
            {t('home.featuresTitle')}
          </h2>
          <div className="grid-3 home-features">
            {FEATURE_KEYS.map((f) => (
              <button
                key={f.key}
                className="glass-card feature-card feature-card-btn"
                onClick={() => navigate(f.to)}
              >
                <span className="feature-icon">{f.icon}</span>
                <h3>{t(`home.${f.key}title`)}</h3>
                <p>{t(`home.${f.key}desc`)}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="scroll-hint">
        <span>{t('home.scrollHint')}</span>
        <span className="scroll-dot" />
      </div>
    </>
  );
}

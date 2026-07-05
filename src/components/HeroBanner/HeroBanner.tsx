import { useMemo, useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AnimatedLogo } from '../AnimatedLogo/AnimatedLogo';
import { EVENTS, COMMUNITY_GROUPS, LIBRARY_RESOURCES } from '../../data/mockData';
import './HeroBanner.css';

interface SearchResult {
  label: string;
  meta: string;
  icon: string;
  to: string;
}

export function HeroBanner() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const results: SearchResult[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const fromLibrary = LIBRARY_RESOURCES.filter((r) =>
      (r.title + r.subject + r.author).toLowerCase().includes(q)
    ).map((r) => ({ label: r.title, meta: `Biblioteca · ${r.subject}`, icon: '📄', to: '/biblioteca' }));

    const fromEvents = EVENTS.filter((e) =>
      (e.title + e.category + e.location).toLowerCase().includes(q)
    ).map((e) => ({ label: e.title, meta: `Evento · ${e.date}`, icon: '🗓️', to: '/eventos' }));

    const fromGroups = COMMUNITY_GROUPS.filter((g) =>
      (g.name + g.description).toLowerCase().includes(q)
    ).map((g) => ({ label: g.name, meta: `Grupo · ${g.members} miembros`, icon: '👥', to: '/comunidad' }));

    return [...fromLibrary, ...fromEvents, ...fromGroups].slice(0, 6);
  }, [query]);

  const goTo = (to: string) => {
    setQuery('');
    setFocused(false);
    navigate(to);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (results.length > 0) goTo(results[0].to);
  };

  return (
    <section className="hero">
      <div className="page-container hero-inner">
        <div className="hero-copy reveal">
          <span className="eyebrow">✨ {t('home.eyebrow')}</span>
          <h1 className="hero-title">
            {t('home.title1')} <span className="gradient-text">{t('home.title2')}</span>
          </h1>
          <p className="hero-subtitle">{t('home.subtitle')}</p>

          <form className="hero-search-wrap" onSubmit={handleSubmit}>
            <div className="hero-search glass">
              <span className="hero-search-icon">🔎</span>
              <input
                type="text"
                placeholder={t('home.searchPlaceholder') as string}         
              />
              <button className="hero-search-btn" aria-label="Buscar" type="submit">➜</button>
            </div>

            {focused && query.trim() && (
              <div className="hero-search-results glass">
                {results.length === 0 && (
                  <p className="hero-search-empty">Sin resultados para "{query}".</p>
                )}
                {results.map((r, i) => (
                  <button
                    key={i}
                    type="button"
                    className="hero-search-result"
                    onClick={() => goTo(r.to)}
                  >
                    <span>{r.icon}</span>
                    <span className="hero-search-result-text">
                      <strong>{r.label}</strong>
                      <small>{r.meta}</small>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </form>

          <div className="hero-chips">
            <button className="chip-action" onClick={() => navigate('/biblioteca')}>📝 {t('home.cta1')}</button>
            <button className="chip-action" onClick={() => navigate('/dashboard')}>🗓️ {t('home.cta2')}</button>
            <button className="chip-action" onClick={() => navigate('/comunidad')}>👥 {t('home.cta3')}</button>
            <button className="chip-action" onClick={() => navigate('/eventos')}>🎓 {t('home.cta4')}</button>
          </div>
        </div>

        <div className="hero-visual reveal" style={{ animationDelay: '0.15s' }}>
          <div className="hero-orb-stage">
            <div className="hero-orbit orbit-1" />
            <div className="hero-orbit orbit-2" />
            <AnimatedLogo size={150} showWordmark={false} />
            <span className="hero-float f1">💬</span>
            <span className="hero-float f2">📅</span>
            <span className="hero-float f3">📚</span>
          </div>
        </div>
      </div>
    </section>
  );
}

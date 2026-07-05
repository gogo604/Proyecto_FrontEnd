import { useTranslation } from 'react-i18next';
import { AnimatedLogo } from '../AnimatedLogo/AnimatedLogo';
import './Footer.css';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="page-container footer-inner">
        <div className="footer-brand">
          <AnimatedLogo size={34} />
          <p>{t('footer.tagline')}</p>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>Rumabi Study</h4>
            <a href="/nosotros">{t('nav.about')}</a>
            <a href="/contacto">{t('nav.contact')}</a>
            <a href="/eventos">{t('nav.events')}</a>
          </div>
          <div className="footer-col">
            <h4>Plataforma</h4>
            <a href="/biblioteca">{t('nav.library')}</a>
            <a href="/comunidad">{t('nav.community')}</a>
            <a href="/api">{t('nav.api')}</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom page-container">
        <span>© {year} Rumabi Study — {t('footer.rights')}</span>
      </div>
    </footer>
  );
}

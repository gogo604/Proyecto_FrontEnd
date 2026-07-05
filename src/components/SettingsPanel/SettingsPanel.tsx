import { useTranslation } from 'react-i18next';
import { useTheme, ThemeName, FontName } from '../../context/ThemeContext';
import { useFontSize, FontSize, FONT_SIZE_LABELS } from '../../context/FontSizeContext';
import './SettingsPanel.css';

const THEMES: { id: ThemeName; label: string; swatch: [string, string] }[] = [
  { id: 'nebula', label: 'Nebula', swatch: ['#7b61ff', '#00d4ff'] },
  { id: 'emerald', label: 'Emerald Tech', swatch: ['#00ffb2', '#008f6a'] },
  { id: 'solar', label: 'Solar Core', swatch: ['#ff8a00', '#ff3d00'] }
];

const FONTS: { id: FontName; label: string }[] = [
  { id: 'orbitron', label: 'Orbitron' },
  { id: 'poppins', label: 'Poppins' },
  { id: 'inter', label: 'Inter' }
];

const SIZES: FontSize[] = ['sm', 'md', 'lg', 'xl', 'xxl'];

export function SettingsPanel({ onClose }: { onClose: () => void }) {
  const { t, i18n } = useTranslation();
  const { theme, setTheme, font, setFont } = useTheme();
  const { fontSize, setFontSize } = useFontSize();

  return (
    <div className="settings-backdrop" onClick={onClose}>
      <div className="settings-panel glass" onClick={(e) => e.stopPropagation()}>
        <div className="settings-row">
          <span className="settings-label">{t('settings.theme')}</span>
          <div className="settings-options">
            {THEMES.map((th) => (
              <button
                key={th.id}
                className={'theme-swatch' + (theme === th.id ? ' is-active' : '')}
                style={{ background: `linear-gradient(135deg, ${th.swatch[0]}, ${th.swatch[1]})` }}
                title={th.label}
                onClick={() => setTheme(th.id)}
              />
            ))}
          </div>
        </div>

        <div className="settings-row">
          <span className="settings-label">{t('settings.font')}</span>
          <div className="settings-options">
            {FONTS.map((f) => (
              <button
                key={f.id}
                className={'chip' + (font === f.id ? ' is-active' : '')}
                onClick={() => setFont(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="settings-row">
          <span className="settings-label">{t('settings.fontsize')}</span>
          <div className="settings-options">
            {SIZES.map((s) => (
              <button
                key={s}
                className={'chip chip-sm' + (fontSize === s ? ' is-active' : '')}
                onClick={() => setFontSize(s)}
              >
                {FONT_SIZE_LABELS[s]}
              </button>
            ))}
          </div>
        </div>

        <div className="settings-row">
          <span className="settings-label">{t('settings.language')}</span>
          <div className="settings-options">
            <button
              className={'chip' + (i18n.language === 'es' ? ' is-active' : '')}
              onClick={() => i18n.changeLanguage('es')}
            >
              🇪🇸 Español
            </button>
            <button
              className={'chip' + (i18n.language === 'en' ? ' is-active' : '')}
              onClick={() => i18n.changeLanguage('en')}
            >
              🇺🇸 English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

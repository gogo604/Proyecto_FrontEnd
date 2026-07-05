import './AnimatedLogo.css';

interface AnimatedLogoProps {
  size?: number;
  showWordmark?: boolean;
}

export function AnimatedLogo({ size = 44, showWordmark = true }: AnimatedLogoProps) {
  return (
    <div className="logo-wrap" style={{ ['--logo-size' as string]: `${size}px` }}>
      <div className="logo-orb">
        <svg viewBox="0 0 100 100" className="logo-svg" aria-hidden="true">
          <defs>
            <linearGradient id="rumabiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--secondary)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          </defs>
          <circle className="logo-ring" cx="50" cy="50" r="44" />
          <g className="logo-core">
            <circle cx="50" cy="50" r="3" fill="var(--secondary)" />
            <circle className="logo-particle p1" cx="50" cy="12" r="2" fill="var(--secondary)" />
            <circle className="logo-particle p2" cx="88" cy="50" r="2" fill="var(--primary)" />
            <circle className="logo-particle p3" cx="50" cy="88" r="2" fill="var(--secondary)" />
          </g>
          <path
            className="logo-r"
            d="M32 78 L32 22 L58 22 C68 22 74 28 74 38 C74 46 69 51 62 53 L76 78 L62 78 L50 55 L44 55 L44 78 Z M44 32 L44 45 L56 45 C61 45 63 42 63 38 C63 34 61 32 56 32 Z"
            fill="url(#rumabiGradient)"
          />
        </svg>
      </div>
      {showWordmark && (
        <span className="logo-word">
          RUMABI <span className="logo-word-accent">STUDY</span>
        </span>
      )}
    </div>
  );
}

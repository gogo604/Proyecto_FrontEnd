import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type FontSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const SIZES: FontSize[] = ['sm', 'md', 'lg', 'xl', 'xxl'];
export const FONT_SIZE_LABELS: Record<FontSize, string> = {
  sm: 'A-',
  md: 'A',
  lg: 'A+',
  xl: 'A++',
  xxl: 'A+++'
};

interface FontSizeContextValue {
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
  increase: () => void;
  decrease: () => void;
}

const FontSizeContext = createContext<FontSizeContextValue | undefined>(undefined);

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>(
    () => (localStorage.getItem('rumabi-fontsize') as FontSize) || 'md'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-fontsize', fontSize);
    localStorage.setItem('rumabi-fontsize', fontSize);
  }, [fontSize]);

  const move = (dir: 1 | -1) => {
    const idx = SIZES.indexOf(fontSize);
    const next = SIZES[Math.min(SIZES.length - 1, Math.max(0, idx + dir))];
    setFontSize(next);
  };

  return (
    <FontSizeContext.Provider
      value={{ fontSize, setFontSize, increase: () => move(1), decrease: () => move(-1) }}
    >
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const ctx = useContext(FontSizeContext);
  if (!ctx) throw new Error('useFontSize must be used within FontSizeProvider');
  return ctx;
}

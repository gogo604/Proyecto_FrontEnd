import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type ThemeName = 'nebula' | 'emerald' | 'solar';
export type FontName = 'orbitron' | 'poppins' | 'inter';

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
  font: FontName;
  setFont: (f: FontName) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(
    () => (localStorage.getItem('rumabi-theme') as ThemeName) || 'nebula'
  );
  const [font, setFont] = useState<FontName>(
    () => (localStorage.getItem('rumabi-font') as FontName) || 'orbitron'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('rumabi-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font', font);
    localStorage.setItem('rumabi-font', font);
  }, [font]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, font, setFont }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

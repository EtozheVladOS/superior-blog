import { FC, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEMES_KEY,
  THEMES,
  ThemesContext,
} from '../lib/ThemesContext';

const initStateTheme = localStorage.getItem(LOCAL_STORAGE_THEMES_KEY) as THEMES
|| THEMES.DARK;

interface ThemesProviderProps {
  initialTheme?: THEMES;
}

const ThemesProvider: FC<ThemesProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState<THEMES>(initialTheme || initStateTheme);

  const themeValue = useMemo(() => {
    document.body.className = `app ${theme}`;
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemesContext.Provider value={themeValue}>
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;

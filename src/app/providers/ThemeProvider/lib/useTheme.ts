import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEMES_KEY,
  THEMES,
  ThemesContext,
} from './ThemesContext';

interface UseThemeRes {
  theme: THEMES,
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeRes => {
  const { theme = THEMES.LIGHT, setTheme } = useContext(ThemesContext);

  const toggleTheme = () => {
    const themeToSet = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEMES_KEY, themeToSet);
    setTheme?.(themeToSet);
  };
  return { theme, toggleTheme };
};

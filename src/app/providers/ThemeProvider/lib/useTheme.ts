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
    let themeToSet: THEMES;

    switch (theme) {
      case THEMES.LIGHT:
        themeToSet = THEMES.DARK;
        break;

      case THEMES.DARK:
        themeToSet = THEMES.AZURE;
        break;

      case THEMES.AZURE:
        themeToSet = THEMES.LIGHT;
        break;

      default:
        themeToSet = THEMES.LIGHT;
    }

    localStorage.setItem(LOCAL_STORAGE_THEMES_KEY, themeToSet);
    setTheme?.(themeToSet);
  };
  return { theme, toggleTheme };
};

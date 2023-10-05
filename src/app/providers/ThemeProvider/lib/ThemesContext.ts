import { createContext } from 'react';

export enum THEMES {
  DARK = 'dark',
  LIGHT = 'light',
  AZURE = 'azure'
}

export interface ThemesContextProps {
  theme?: THEMES,
  setTheme?: (theme: THEMES) => void;
}

export const LOCAL_STORAGE_THEMES_KEY = 'theme';

export const ThemesContext = createContext<ThemesContextProps>({});

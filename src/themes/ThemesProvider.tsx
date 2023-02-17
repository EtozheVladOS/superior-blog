import { FC, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEMES_KEY, THEMES, ThemesContext } from "./ThemesContext";

const initStateTheme = localStorage.getItem(LOCAL_STORAGE_THEMES_KEY) as THEMES || THEMES.DARK;

const ThemesProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<THEMES>(initStateTheme);

  const themeValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemesContext.Provider value={themeValue}>
      {children}
    </ThemesContext.Provider>
  )
}

export default ThemesProvider;

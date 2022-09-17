import { createContext } from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface IThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const LS_THEME_KEY = 'theme';

export const ThemeContext = createContext<IThemeContextProps>({})

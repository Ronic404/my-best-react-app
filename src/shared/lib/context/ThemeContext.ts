import { createContext } from 'react'

import { Theme } from '../../constants/theme'

interface IThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({})

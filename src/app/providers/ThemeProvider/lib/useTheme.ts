import { useContext } from 'react'

import { LS_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface IUseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LS_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}

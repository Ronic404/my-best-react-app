import { useContext, useEffect } from 'react'

import { LS_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface IUseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    document.body.className = newTheme
    localStorage.setItem(LS_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}

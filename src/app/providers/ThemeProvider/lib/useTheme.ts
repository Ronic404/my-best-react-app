/* eslint-disable indent */
import { useContext, useEffect } from 'react'

import { LS_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface IUseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (theme) {
      document.body.className = theme
    }
  }, [theme])

  const toggleTheme = (): void => {
    let newTheme: Theme
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.ORANGE
        break
      case Theme.ORANGE:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGHT
    }

    setTheme?.(newTheme)
    document.body.className = newTheme
    localStorage.setItem(LS_THEME_KEY, newTheme)
  }

  return {
    theme: theme ?? Theme.LIGHT,
    toggleTheme,
  }
}

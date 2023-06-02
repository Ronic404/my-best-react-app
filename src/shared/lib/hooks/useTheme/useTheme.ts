/* eslint-disable indent */
import { useContext, useEffect } from 'react'

import { Theme } from '../../../constants/theme'
import { ThemeContext } from '../../context/ThemeContext'

interface IUseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void
  theme: Theme
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (theme) {
      document.body.className = theme
    }
  }, [theme])

  const toggleTheme = (saveAction?: (theme: Theme) => void): void => {
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
    saveAction?.(newTheme)
  }

  return {
    theme: theme ?? Theme.LIGHT,
    toggleTheme,
  }
}

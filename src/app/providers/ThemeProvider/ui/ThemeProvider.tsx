import { FC, ReactNode, useEffect, useMemo, useState } from 'react'

import { Theme } from '@/shared/constants/theme'
import { LS_THEME_KEY } from '@/shared/constants/localStorage'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'
import { useJsonSettings } from '@/entities/User'

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

const fallbackTheme = localStorage.getItem(LS_THEME_KEY) as Theme

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [isThemeInited, setIsThemeInited] = useState(false)
  const { theme: defaultTheme } = useJsonSettings()
  const [theme, setTheme] = useState<Theme>(initialTheme ?? fallbackTheme ?? Theme.LIGHT)

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme)
      setIsThemeInited(true)
    }
  }, [defaultTheme, isThemeInited])

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem(LS_THEME_KEY, theme)
  }, [theme])

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

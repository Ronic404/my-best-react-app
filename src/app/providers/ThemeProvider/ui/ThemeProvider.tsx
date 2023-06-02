import { FC, ReactNode, useEffect, useMemo, useState } from 'react'

import { Theme } from '@/shared/constants/theme'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'
import { useJsonSettings } from '@/entities/User'

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [isThemeInited, setIsThemeInited] = useState(false)
  const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings()
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

  useEffect(() => {
    if (!isThemeInited) {
      setTheme(defaultTheme)
      setIsThemeInited(true)
    }
  }, [defaultTheme, isThemeInited])

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

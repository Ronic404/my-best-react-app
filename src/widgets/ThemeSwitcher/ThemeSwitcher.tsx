import { memo } from 'react'

import { Theme, useTheme } from '@/app/providers/ThemeProvider'

import { classNames } from '@/shared/lib/classNames/classNames'

import { Button } from '@/shared/ui/Button'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'

import styles from './ThemeSwitcher.module.scss'

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(styles.themeSwitcher, {}, [className])}
      theme='clear'
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
})

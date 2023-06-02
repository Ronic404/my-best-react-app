import { memo, useCallback } from 'react'

import { Button } from '@/shared/ui/Button'

import { Theme } from '@/shared/constants/theme'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { saveJsonSettings } from '@/entities/User'

import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'

import styles from './ThemeSwitcher.module.scss'

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
  const dispatch = useAppDispatch()
  const { theme, toggleTheme } = useTheme()

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  return (
    <Button
      className={classNames(styles.themeSwitcher, {}, [className])}
      theme='clear'
      onClick={onToggleHandler}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
})

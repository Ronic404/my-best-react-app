import { memo, useCallback } from 'react'

import { Icon } from '@/shared/ui/redesigned/Icon'
import { Button } from '@/shared/ui/deprecated/Button'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'

import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { saveJsonSettings } from '@/entities/User'

import ThemeIcon from '@/shared/assets/icons/theme.svg'
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg'

// import styles from './ThemeSwitcher.module.scss'

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
  const dispatch = useAppDispatch()
  const { toggleTheme } = useTheme()

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
      off={
        <Button
          className={classNames('', {}, [className])}
          theme='clear'
          onClick={onToggleHandler}
        >
          <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted />
        </Button>
      }
    />
  )
})

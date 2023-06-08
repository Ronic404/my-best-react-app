import { memo } from 'react'

import { HStack } from '../Stack'

import { classNames } from '@/shared/lib/classNames/classNames'

import AppSvg from '@/shared/assets/icons/app-image.svg'

import styles from './AppLogo.module.scss'

interface IAppLogoProps {
  className?: string
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const AppLogo = memo(({ className }: IAppLogoProps) => {
  return (
    <HStack className={classNames(styles.appLogoWrapper, {}, [className])} max justify='center'>
      <div className={styles.gradientBig} />
      <div className={styles.gradientSmall} />
      <AppSvg className={styles.appLogo} />
    </HStack>
  )
})

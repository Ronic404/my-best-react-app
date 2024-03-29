import { CSSProperties, FC, useMemo } from 'react'

import { Icon } from '../Icon'
import { AppImage } from '../../redesigned/AppImage'
import { Skeleton } from '../Skeleton'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

import UserIcon from '../../../assets/icons/user-filled.svg'

import styles from './Avatar.module.scss'

export interface IAvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar: FC<IAvatarProps> = ({ className, src, alt, size = 100 }) => {
  const mods: Mods = {}

  const inlineStyles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    }
  }, [size])

  const fallback = <Skeleton width={size} height={size} border='50%' />
  const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />

  return (
    <AppImage
      className={classNames(styles.avatar, mods, [className])}
      style={inlineStyles}
      src={src}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  )
}

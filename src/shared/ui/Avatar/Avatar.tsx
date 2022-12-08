import { CSSProperties, FC, useMemo } from 'react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

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

  return (
    <img
      className={classNames(styles.avatar, mods, [className])}
      style={inlineStyles}
      src={src}
      alt={alt}
    />
  )
}

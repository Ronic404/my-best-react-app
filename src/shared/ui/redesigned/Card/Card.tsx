import { HTMLAttributes, memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Card.module.scss'

export type CardVariant = 'normal' | 'outlined' | 'light'
export type CardPadding = '0' | '8' | '16' | '24'
export type CardBorder = 'round' | 'normal'

const mapPaddingToClass: Record<CardPadding, string> = {
  0: 'gap_0',
  8: 'gap_8',
  16: 'gap_16',
  24: 'gap_24',
}

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  variant?: CardVariant
  max?: boolean
  fullHeight?: boolean
  padding?: CardPadding
  border?: CardBorder
}

export const Card = memo((props: ICardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    max,
    fullHeight,
    padding = '8',
    border = 'normal',
    ...otherProps
  } = props

  const paddingClass = mapPaddingToClass[padding]

  return (
    <div
      className={classNames(
        styles.card,
        { [styles.max]: max, [styles.fullHeight]: fullHeight },
        [className, styles[variant], styles[paddingClass], styles[border]],
      )}
      {...otherProps}
    >
      {children}
    </div>
  )
})

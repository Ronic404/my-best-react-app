import { HTMLAttributes, memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Card.module.scss'

export type CardTheme = 'normal' | 'outlined'

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  theme?: CardTheme
}

export const Card = memo((props: ICardProps) => {
  const {
    className,
    children,
    theme = 'normal',
    ...otherProps
  } = props

  return (
    <div
      className={classNames(styles.card, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  )
})

import { HTMLAttributes, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Card.module.scss'

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Card = memo(({ className, children, ...otherProps }: ICardProps) => {
  return (
    <div
      className={classNames(styles.card, {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  )
})

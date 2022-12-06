import { memo, ReactNode } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Overlay.module.scss'

export interface IOverlayProps {
  className?: string
  children: ReactNode
  onClick?: () => void
}

export const Overlay = memo(({ className, children, onClick }: IOverlayProps) => {
  return (
    <div className={classNames(styles.overlay, {}, [className])} onClick={onClick}>
      {children}
    </div>
  )
})

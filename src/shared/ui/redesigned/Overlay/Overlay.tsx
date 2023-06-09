import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Overlay.module.scss'

export interface IOverlayProps {
  className?: string
  onClick?: () => void
}

export const Overlay = memo(({ className, onClick }: IOverlayProps) => {
  return (
    <div className={classNames(styles.overlay, {}, [className])} onClick={onClick} />
  )
})

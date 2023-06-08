import { FC, ReactNode } from 'react'

import { Portal } from '../Portal'
import { Overlay } from '../Overlay'

import { useModal } from '../../../lib/hooks/useModal/useModal'
import { useTheme } from '../../../lib/hooks/useTheme/useTheme'
import { classNames, Mods } from '../../../lib/classNames/classNames'

import styles from './Modal.module.scss'

export interface IModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  lazy?: boolean
  onClose: () => void
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Modal: FC<IModalProps> = ({ className, children, isOpen, lazy, onClose }) => {
  const { theme } = useTheme()
  const {
    close, isClosing, isMounted,
  } = useModal({ isOpen, animationDelay: 300, onClose })

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(styles.modal, mods, [className, theme, 'app_modal'])}>
        <Overlay onClick={close} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  )
}

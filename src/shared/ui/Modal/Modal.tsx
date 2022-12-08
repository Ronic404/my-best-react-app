import { FC, ReactNode } from 'react'

import { Portal } from '../Portal'
import { Overlay } from '../Overlay'

import { useTheme } from '@/app/providers/ThemeProvider'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'

import styles from './Modal.module.scss'

export interface IModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  lazy?: boolean
  onClose: () => void
}

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

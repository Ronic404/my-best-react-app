import { FC, ReactNode } from 'react'

import { Portal } from '../Portal'
import { Overlay } from '../Overlay'

import { useModal } from '../../../lib/hooks/useModal/useModal'
import { useTheme } from '../../../lib/hooks/useTheme/useTheme'
import { toggleFeatures } from '@/shared/lib/features'
import { classNames, Mods } from '../../../lib/classNames/classNames'

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
    <Portal element={document.getElementById('app') ?? document.body}>
      <div className={classNames(styles.modal, mods, [
        className,
        theme,
        'app_modal',
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => styles.modalNew,
          off: () => styles.modalOld,
        }),
      ])}>
        <Overlay onClick={close} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  )
}

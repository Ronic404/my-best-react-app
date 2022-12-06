import { memo, ReactNode } from 'react'

import { Portal } from '../Portal'
import { Overlay } from '../Overlay'

import { useTheme } from 'app/providers/ThemeProvider'

import { useModal } from 'shared/lib/hooks/useModal/useModal'
import { classNames, Mods } from 'shared/lib/classNames/classNames'

import styles from './Drawer.module.scss'

export interface IDrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  lazy?: boolean
  onClose?: () => void
}

export const Drawer = memo((props: IDrawerProps) => {
  const { className, children, isOpen, lazy, onClose } = props
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
      <div className={classNames(styles.drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close}>
          <div className={styles.content}>{children}</div>
        </Overlay>
      </div>
    </Portal>
  )
})
